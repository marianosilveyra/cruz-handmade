import Link from "next/link"
import { useEffect, useState } from "react"
import Hambuger from "../../../components/Hamburger"
import { IsMobile } from "@/pages/utilities"
import { useRouter } from "next/router"

const routes = [
  {
    name: `Home`,
    path: "/",
  },
  {
    name: `Products 1`,
    path: "products-1",
  },
  {
    name: `Products 2`,
    path: "products-2",
  },
  {
    name: `Products 3`,
    path: "products-3",
  },
  {
    name: `Products 4`,
    path: "products-4",
  },
]

const Mobile = ({ isOpened, setIsOpened }) => {
  return (
    <>
      <div className="absolute z-20 top-4 right-4">
        <Hambuger isOpen={isOpened} setIsOpened={setIsOpened} />
      </div>
      <div className={`${isOpened ? "absolute z-10 h-screen w-screen bg-white flex flex-col px-4 pt-24 gap-6" : "h-12 flex justify-end"}`}>
        {isOpened &&
          routes.map(({ path, name }) => (
            <div className="flex">
              <span key={path} className="">
                <Link href={path}>{name}</Link>
              </span>
            </div>
          ))}
      </div>
    </>
  )
}

const Desktop = () => {
  return (
    <div className="px-4 flex justify-start gap-8">
      {routes.map(({ path, name }) => (
          <span key={path} className="py-2">
            <Link href={path}>{name}</Link>
          </span>
      ))}
    </div>
  )
}

export default function Nav() {
  const [isOpened, setIsOpened] = useState(false)
  const isMobile = IsMobile()
  const router = useRouter()

  useEffect(() => {
    setIsOpened(false)
  }, [router])

  return <nav className="bg-white">{isMobile ? <Mobile isOpened={isOpened} setIsOpened={setIsOpened} /> : <Desktop />}</nav>
}
