import dynamic from "next/dynamic"

const Footer = dynamic(() => import("../modules/globals/Footer"), { ssr: false })
const Nav = dynamic(() => import("../modules/globals/Nav"), { ssr: false })

export default function ({ children, className = "" }) {
  return (
    <>
      <Nav />
      <div className={className}>{children}</div>
      <Footer />
    </>
  )
}
