
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-calculator-filled'
const _prefix = getPrefixCls(_role)

export const CalculatorFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M904 112a8 8 0 0 1 8 8v784a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8V120a8 8 0 0 1 8-8h784z m-179.774 442.52a8 8 0 0 0-10.996-0.302l-0.32 0.3L662 605.434l-50.912-50.912a8 8 0 0 0-10.994-0.302l-0.32 0.3-45.254 45.256a8 8 0 0 0-0.302 10.996l0.3 0.32 50.912 50.908-50.91 50.914a8 8 0 0 0-0.302 10.994l0.3 0.32 45.256 45.254a8 8 0 0 0 10.996 0.302l0.32-0.3L662 718.566l50.912 50.912a8 8 0 0 0 10.994 0.302l0.32-0.3 45.254-45.256a8 8 0 0 0 0.302-10.996l-0.3-0.32L718.566 662l50.912-50.912a8 8 0 0 0 0.302-10.994l-0.3-0.32-45.256-45.254zM466 682H258a8 8 0 0 0-7.99 7.6l-0.01 0.4v64a8 8 0 0 0 7.6 7.99l0.4 0.01h208a8 8 0 0 0 7.99-7.6l0.01-0.4v-64a8 8 0 0 0-7.6-7.99L466 682z m0-120H258a8 8 0 0 0-7.99 7.6l-0.01 0.4v64a8 8 0 0 0 7.6 7.99l0.4 0.01h208a8 8 0 0 0 7.99-7.6l0.01-0.4v-64a8 8 0 0 0-7.6-7.99L466 562z m-72-320h-64a8 8 0 0 0-7.99 7.6l-0.01 0.4v72h-72a8 8 0 0 0-7.99 7.6l-0.01 0.4v64a8 8 0 0 0 7.6 7.99l0.4 0.01h71.998l0.002 72a8 8 0 0 0 7.6 7.99l0.4 0.01h64a8 8 0 0 0 7.99-7.6l0.01-0.4v-72h72a8 8 0 0 0 7.99-7.6l0.01-0.4v-64a8 8 0 0 0-7.6-7.99L474 322h-72v-72a8 8 0 0 0-7.6-7.99L394 242z m380 80H550a8 8 0 0 0-7.99 7.6l-0.01 0.4v64a8 8 0 0 0 7.6 7.99l0.4 0.01h224a8 8 0 0 0 7.99-7.6l0.01-0.4v-64a8 8 0 0 0-7.6-7.99L774 322z" p-id="11825"></path></svg>
    )
  }
)

if (__DEV__) {
  CalculatorFilled.displayName = 'CalculatorFilled'
}
  