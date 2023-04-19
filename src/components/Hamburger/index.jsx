import { m as motion, LazyMotion, domAnimation } from "framer-motion"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "/tailwind.config.js"

const tailwindConfiguration = resolveConfig(tailwindConfig)
const stroke = tailwindConfiguration.theme.colors.fucsia.default

const TogglePath = ({ d, variants, transition }) => {

  return (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      strokeLinecap="round"
      d={d}
      variants={variants}
      transition={transition}
      stroke={stroke}
    />
  )
}

const MenuToggle = ({ isOpen, setIsOpened }) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.button
        onClick={() => {setIsOpened(isOpened => !isOpened)}}
        initial="closed"
        animate={isOpen ? "opened" : "closed"}
        className="outline-none border-0 select-none cursor-pointer"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <TogglePath
            variants={{
              // closing: { d: "M 2 2.5 L 20 2.5", stroke },
              closed: { d: "M 2 2.5 L 20 2.5", stroke },
              opened: { d: "M 3 16.5 L 17 2.5", stroke },
            }}
          />
          <TogglePath
            d="M 2 9.423 L 20 9.423"
            variants={{
              // closing: { opacity: 1, stroke },
              closed: { opacity: 1, stroke },
              opened: { opacity: 0, stroke },
            }}
            transition={{ duration: 0.1 }}
          />
          <TogglePath
            variants={{
              // closing: { d: "M 2 16.346 L 20 16.346", stroke },
              closed: { d: "M 2 16.346 L 20 16.346", stroke },
              opened: { d: "M 3 2.5 L 17 16.346", stroke },
            }}
          />
        </svg>
      </motion.button>
    </LazyMotion>
  )
}

export default MenuToggle
