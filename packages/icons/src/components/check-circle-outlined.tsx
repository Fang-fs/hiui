
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-check-circle-outlined'
const _prefix = getPrefixCls(_role)

export const CheckCircleOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 80C308.76 144 144 308.76 144 512s164.76 368 368 368 368-164.76 368-368S715.24 144 512 144zM330.98 500.628a8 8 0 0 1 11.314 0l96.166 96.164 243.246-243.242a8 8 0 0 1 11.314 0l45.254 45.254a8 8 0 0 1 0 11.314L444.12 704.274a8 8 0 0 1-11.314 0l-147.08-147.078a8 8 0 0 1 0-11.314l45.256-45.254z" p-id="13235"></path></svg>
    )
  }
)

if (__DEV__) {
  CheckCircleOutlined.displayName = 'CheckCircleOutlined'
}
  