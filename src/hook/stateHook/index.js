import { useState, useRef, useEffect, useCallback } from "react"

export const useStateWithPromise = (initialState) => {
  const [state, setState] = useState(initialState)
  const resolverRef = useRef(null)

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current(state)
      resolverRef.current = null
    }
  }, [resolverRef, state])

  const handleSetState = useCallback(
    (stateAction) => {
      setState(stateAction)
      return new Promise((resolve) => {
        resolverRef.current = resolve
      })
    },
    [setState]
  )

  return [state, handleSetState]
}
