import profilePic from "../assets/hardik.jpg"
import resume from "../assets/hkresume.pdf"
import { HERO_CONTENT } from "../constants/index"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0, transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5}}
}

const Hero = () => {
  return (
    <div className="pb-3 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/3 ">
            <div className="flex justify-center lg:p-8">
                <motion.img 
                 src={profilePic} 
                 alt="PROFILEPICTURE" 
                 className="border border-stone-900 rounded-3xl"
                 width={650}
                 height={650}
                 initial={{ x:100, opacity: 0 }}
                 animate= {{ x: 0, opacity: 1 }}
                 transition={{ duration: 1, delay: 1.5}}/>
            </div>
        </div>
        <div className="w-full lg:w-3/5">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 
                  variants={childVariants}
                  className="pb-2 text-4xl tracking-tighter lg:text-8xl">Hardik Kubavat
                </motion.h2>
                <motion.span 
                 variants={childVariants}
                className="bg-gradient-to-r from-stone-300 
                to-stone-600 bg-clip-text text-3xl tracking-tight 
                text-transparent">Full Stack Developer</motion.span>
                <motion.p 
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
                <motion.a 
                variants={childVariants}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                    Download Resume
                </motion.a>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
