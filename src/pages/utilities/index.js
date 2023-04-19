import { useEffect, useState } from "react"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../../tailwind.config"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize
}

export const IsMobile = (breakpoint = "md") => {
  const fullConfig = resolveConfig(tailwindConfig)
  const [mobile, setMobile] = useState(null)
  const { width } = useWindowSize()

  useEffect(() => {
    if (!width) return
    setMobile(width < parseInt(fullConfig.theme.screens[breakpoint]))
  }, [width])

  return mobile
}
