import Seo from "@/components/Seo"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("../modules/globals/Footer"), { ssr: false })
const Nav = dynamic(() => import("../modules/globals/Nav"), { ssr: false })

export default function ({ children }) {
  return (
    <>
      <Seo />
      <Nav />
      <div className="px-4 bg-gray-light flex justify-center">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  )
}
