import { forwardRef } from "react"
import Button from "./components/Button"
import useToggle from "./hooks/useToggle"
import { motion } from "framer-motion"
import PropTypes from 'prop-types'

 //using variants
 const boxVariants = {
  visible:{x:0 ,rotate:0},
  hidden:{x:100,rotate:45}
}

// le parent determine l'animation sur les enfants
const wrapperVariants = {
  // visible:{opacity:1,transition:{when:'beforeChildren'}},
  // hidden:{opacity:0,transition:{when:'afterChildren', staggerChildren:.2}},
}

function App() {

  const {open,toggle} = useToggle()

 

  return (
    <div className="p-4 ">
      <div className="mb-2">
        {/* <motion.div
          variants={boxVariants}
          whileHover={{scale:1.1}}
          animate={{opacity:open ? 1 : 0, x: open ? 0 : 100, rotate:open ? 0 : 45}} 
          animate={open ? 'visible' : 'hidden'}
          className="flex items-center justify-center w-32 h-32 bg-gray-300">1
        </motion.div> */}

        {/* <MotionBox
          variants={boxVariants}
          whileTap={{scale:1.1}}
          animate={open ? 'visible':'hidden'}
        >1</MotionBox> */}
        <motion.div
          variants={wrapperVariants}
          animate={open ? 'visible' : 'hidden'}
          className="flex flex-col gap-2"
        >
          <MotionBox 
            variants={boxVariants}
            // transition={{duration:.5, type:'tween', ease:'easeIn'}}
            // transition={{type:'spring'}} 
            transition={{type:'inertia', velocity:50}}
          >1</MotionBox>
          {/* <MotionBox variants={boxVariants}>2</MotionBox>
          <MotionBox variants={boxVariants}>3</MotionBox> */}
        </motion.div>
      </div>
      <div>
        <Button onClick={toggle}>Afficher / Masquer</Button>
      </div>
    </div>
  )
}

export default App


// animate component
// function Box({children}){
//   return <div  className="flex items-center justify-center w-32 h-32 bg-gray-300">{children}</div>
// }

// animer un composant, lui passer forwardRef
const Box = forwardRef(({children}, ref)=>{
  return <div ref={ref} className="flex items-center justify-center w-32 h-32 bg-gray-300">{children}</div>
})

const MotionBox = motion(Box)


Box.propTypes = {
  children:PropTypes.string
}
