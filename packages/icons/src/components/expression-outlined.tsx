
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-expression-outlined'
const _prefix = getPrefixCls(_role)

export const ExpressionOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 80C308.76 144 144 308.76 144 512s164.76 368 368 368 368-164.76 368-368S715.24 144 512 144zM324 352m40 0l0 0q40 0 40 40l0 80q0 40-40 40l0 0q-40 0-40-40l0-80q0-40 40-40ZM620 352m40 0l0 0q40 0 40 40l0 80q0 40-40 40l0 0q-40 0-40-40l0-80q0-40 40-40ZM363.006 662.054c8.712-20.042 31.866-29.344 51.976-21.016l0.654 0.278C447.272 655.068 479.452 662 512 662c31.8 0 63.246-6.616 94.18-19.746l1.892-0.812c20.27-8.782 43.822 0.53 52.606 20.8 8.784 20.27-0.528 43.822-20.8 52.606C598.47 732.792 555.592 742 512 742c-43.722 0-86.73-9.264-128.256-27.316-20.26-8.808-29.546-32.37-20.74-52.63z" p-id="12795"></path></svg>
    )
  }
)

if (__DEV__) {
  ExpressionOutlined.displayName = 'ExpressionOutlined'
}
  