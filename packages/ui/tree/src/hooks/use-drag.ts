import React, { useCallback } from 'react'
import cloneDeep from 'lodash.clonedeep'

import {
  TreeNodeData,
  TreeNodeDragDirection,
  FlattedTreeNodeData,
  TreeDataStatus,
  TreeLevelStatus,
} from '../types'
import {
  fFindNodeById,
  deleteNodeById,
  addChildNodeById,
  insertNodeById,
  fFindNestedChildNodesById,
} from '../utils'

export const useTreeDrop = (
  treeData: TreeNodeData[],
  flattedData: FlattedTreeNodeData[],
  setTreeData: React.Dispatch<React.SetStateAction<TreeNodeData[]>>,
  onDrop?: (
    dragNode: FlattedTreeNodeData,
    dropNode: FlattedTreeNodeData,
    dataStatus: TreeDataStatus,
    level: TreeLevelStatus
  ) => boolean | Promise<any>,
  onDropEnd?: (dragNode: FlattedTreeNodeData, dropNode: FlattedTreeNodeData) => void
) => {
  const moveNode = useCallback(
    ({ targetId, sourceId, direction, depth }) => {
      // 阻止将节点拖拽到自己
      if (targetId === sourceId) {
        // console.log('阻止将节点拖拽到自己')
        return
      }

      const sourceChildrenIds = fFindNestedChildNodesById(flattedData, sourceId)[0].map(
        (node) => node.id
      )

      // 阻止将节点拖拽到自己的子树当中
      if (sourceChildrenIds.includes(targetId) || sourceId === targetId) {
        // console.log('阻止将节点拖拽到自己的子树当中')
        return
      }

      const sourceNode = fFindNodeById(flattedData, sourceId)
      const targetNode = fFindNodeById(flattedData, targetId)

      if (!sourceNode || !targetNode) {
        // console.log('未找到任何节点(sourceNode, targetNode)', sourceNode, targetNode)
        return
      }

      const nextTreeData = cloneDeep(treeData)
      const isInsertToInside = direction === TreeNodeDragDirection.INSIDE

      // console.log('Moving Node---------------', sourceId, targetId)

      // 正式开始进行节点位置替换
      deleteNodeById(nextTreeData, sourceId)

      if (isInsertToInside) {
        addChildNodeById(nextTreeData, targetId, sourceNode.raw)
      } else {
        insertNodeById(
          nextTreeData,
          targetId,
          sourceNode.raw,
          direction === TreeNodeDragDirection.BEFORE ? 0 : 1
        )
      }

      if (onDrop) {
        const result = onDrop(
          sourceNode,
          targetNode,
          { before: treeData, after: nextTreeData },
          { before: depth.source, after: isInsertToInside ? depth.target + 1 : depth.target }
        )

        // 根据 onDrop 用户返回结果，判断是否需要非受控，进行内部更新树结构
        if (result === true) {
          setTreeData(nextTreeData)
          onDropEnd?.(sourceNode, targetNode)
        } else if (result && typeof result.then === 'function') {
          result.then(() => {
            setTreeData(nextTreeData)
            onDropEnd?.(sourceNode, targetNode)
          })
        }
      } else {
        setTreeData(nextTreeData)
      }
    },
    [setTreeData, treeData, flattedData, onDrop, onDropEnd]
  )

  return moveNode
}

// export const useTreeDragDrop = (props) => {
//   const {
//     onDragStart: onDragStartProp,
//     onDragEnd: onDragEndProp,
//     onDragOver: onDragOverProp,
//     onDrop: onDropProp,
//   } = props

//   const treeNodeTitleRef = useRef<HTMLDivElement>(null)
//   const dragNodeRef = useRef<TreeNodeData | null>(null)
//   const [direction, setDirection] = useState<TreeNodeDragDirection>(null)

//   const onDragStart = useCallback(
//     (evt: React.DragEvent, node: TreeNodeData) => {
//       // console.log('onDragStart')

//       evt.stopPropagation()

//       dragNodeRef.current = node
//       evt.dataTransfer.setData('treeNode', JSON.stringify({ id: node.id, depth: node.depth }))

//       onDragStartProp?.(node)
//     },
//     [onDragStartProp]
//   )

//   const onDragEnd = useCallback(
//     (evt: React.DragEvent, node: TreeNodeData) => {
//       // console.log('onDragEnd')

//       evt.preventDefault()
//       evt.stopPropagation()
//       evt.dataTransfer.clearData()
//       dragNodeRef.current = null
//       setDirection(null)

//       onDragEndProp?.(node)
//     },
//     [onDragEndProp]
//   )

//   const onDragLeave = useCallback((evt: React.DragEvent) => {
//     // console.log('onDragLeave')

//     evt.preventDefault()
//     evt.stopPropagation()
//     setDirection(null)
//   }, [])

//   // 拖至到目标元素上时触发事件
//   const onDragOver = useCallback(
//     (evt: React.DragEvent, node: TreeNodeData) => {
//       const dragNode = dragNodeRef.current
//       // console.log('onDragOver', dragNode)

//       evt.preventDefault()
//       evt.stopPropagation()

//       // 这里需要考虑3点：
//       // 拖到自己的老位置，不处理
//       // 父树不能拖到其子树内
//       // 不同于简单的文件夹拖拽，同层可以拖拽进行排序
//       if (dragNode?.id !== node.id) {
//         const targetBoundingRect = treeNodeTitleRef.current?.getBoundingClientRect()
//         if (!targetBoundingRect) return

//         const hoverTargetSortY = (targetBoundingRect.bottom - targetBoundingRect.top) / 3
//         const hoverTargetInsideY = hoverTargetSortY + hoverTargetSortY

//         // 鼠标垂直移动距离
//         const hoverClientY = evt.clientY - targetBoundingRect.top

//         // 将当前元素垂直平分为三层，每一层用来对应其放置的位置
//         if (hoverClientY < hoverTargetSortY) {
//           setDirection(TreeNodeDragDirection.BEFORE)
//         } else if (hoverClientY < hoverTargetInsideY) {
//           setDirection(TreeNodeDragDirection.INSIDE)
//         } else {
//           setDirection(TreeNodeDragDirection.AFTER)
//         }
//       }

//       onDragOverProp?.(node)
//     },
//     [onDragOverProp]
//   )

//   // 放置目标元素时触发事件
//   const onDrop = useCallback(
//     (evt: React.DragEvent, node: TreeNodeData) => {
//       const dragNode = dragNodeRef.current

//       evt.preventDefault()
//       evt.stopPropagation()
//       setDirection(null)

//       // 在拖拽的过程中，该节点可能已经不是该节点了
//       // 次数 dragId 为 null，node.id 变成了目标节点
//       if (onDropProp && dragNode?.id !== node.id) {
//         const passedData = JSON.parse(evt.dataTransfer.getData('treeNode'))
//         // console.log('onDrop', passedData, dragNode, node)

//         onDropProp({
//           targetId: node.id,
//           sourceId: passedData.id,
//           depth: { source: passedData.depth, target: node.depth },
//           direction,
//         })
//       }
//     },
//     [onDropProp, direction]
//   )

//   return {
//     onDragStart,
//     onDragEnd,
//     onDragOver,
//     onDragLeave,
//     onDrop,
//   }
// }