import { useEffect, useState } from 'react'

export function useBreakpoint(
  callback, breakpoint
) {
    const [size, setSize] = useState('')

    useEffect(() => {
        const checkSize = () => (window.innerWidth < breakpoint) ? 'small' : 'large'
        const size = checkSize()

        setSize(size)
        callback(size)

        function resizeHandler() {
            const newSize = checkSize()

            if (newSize !== size) {
              setSize(newSize)
              callback(newSize)
            }
        }

        window.addEventListener('resize', resizeHandler)

        return () => {
          window.removeEventListener('resize', resizeHandler)
        }
      }, [size, callback, breakpoint])
}
