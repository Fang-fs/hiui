import { useState, useMemo } from 'react'

/**
 * Handles Boolean switching by `on`, `off`, `not`
 *
 * @param initialState
 */
export function useToggle(initialState: boolean | (() => boolean) = false) {
  const [bool, setBool] = useState(initialState)

  const toggle = useMemo(
    () => ({
      on: () => {
        setBool(true)
      },
      off: () => {
        setBool(false)
      },
      not: () => {
        setBool((prev) => !prev)
      },
    }),
    []
  )

  return [bool, toggle] as const
}