import { useState } from "react"

const useToggle = () => {
    const [open, setToggle] = useState(false)

    const toggle = () => {
        setToggle(!open)
    }

  return {
    open,
    toggle
  }
}

export default useToggle