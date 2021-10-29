
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-folder-move-filled'
const _prefix = getPrefixCls(_role)

export const FolderMoveFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M399.954 136l122.984 104H952a8 8 0 0 1 8 8v632a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8V144a8 8 0 0 1 8-8h327.954z m177.348 312.698c-4.418 0-8 3.598-8 8.036v71.68h-262c-4.418 0-8 3.6-8 8.036v64.292c0 4.44 3.582 8.038 8 8.038h262v71.68c0 1.826 0.62 3.596 1.754 5.02a7.976 7.976 0 0 0 11.244 1.256l139.194-111.864a8.06 8.06 0 0 0 0-12.55l-139.194-111.864c-1.418-1.14-3.18-1.76-4.998-1.76z" p-id="12245"></path></svg>
    )
  }
)

if (__DEV__) {
  FolderMoveFilled.displayName = 'FolderMoveFilled'
}
  