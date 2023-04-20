import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Card = ({ title, subtitle, image, href }) => {
  return (
    <motion.div className="flex w-72 group transition-all duration-300 hover:scale-105">
      <Link
        href={href}
        className="bg-white w-full rounded-3xl flex flex-col shadow-[0px_12px_24px_rgba(83,109,254,0.15)] sm:shadow-none group-hover:bg-blue-default duration-300"
      >
        <div className="w-full h-80 rounded-3xl bg-slate-400 relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-3/4 rounded-3xl bg-slate-400 overflow-hidden"
          />
        </div>
        <div className="w-full h-1/4 rounded-3xl bg-white flex items-center px-6 group-hover:bg-blue-default duration-300">
          <div className="w-full text-center font-PJakarta group-hover:text-white">
            <p className="text-2xl font-semibold text-blue-default">{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Card
