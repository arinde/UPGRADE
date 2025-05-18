import Button from "./button"
import Rightimg from '../images/Right Button.png'
import Section1 from '../images/section-1-img.png'
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"


export default function About (){
    return (
        <section className="bg-gradient-to-tr from-blue-950 to-green-600 pt-7 w-full">
            <div className="flex flex-col flex-sm-row items-center justify-evenly mt-16 py-10">
                <div className="flex flex-col flex-sm-col md:justify-evenly justify-center items-center">
                    <div className="flex flex-sm-col flex-col text-white items-center w-full md:text-left text-center">
                        <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }} 
                        className="border bg-gray-400 rounded-3xl w-40 py-1
                        text-center text-[10px] leading-tight tracking-wide">🔥100% TRUSTED PLATFORM</motion.span><br/>
                        <motion.span 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-block  md:text-6xl text-4xl font-bold tracking-wide">FINANCE WITH <br/> SECURITY AND <br/> <span className="inline-block text-yellow-300">FLEXIBILITY</span></motion.span>
                        <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-block my-2 text-sm tracking-wide">No-Fee Checking Account With Cash Back Rewards. <br/> 
                            Enjoy Fee-Free Banking And Earn Cash Back On Your <br/> Everyday Purchases.
                        </motion.p>
                    </div>
                    
                    <motion.div 
                    whileHover={{ scale: 1.05, backgroundColor: "", color: "white" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="">

                        <NavLink to="/SignUp" className="flex flex-row flex-sm-row py-3">
                            <Button
                            variant="success"
                            size="medium"
                            className="py-1 text-blue-950"
                            >Open Account</Button>
                            <img src={Rightimg} alt="" className="-ml-4 w-10"/>
                        </NavLink>
                        
                    </motion.div>
                </div>
                <div>
                    <motion.img 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    src={Section1} alt="" className="w-[80%] mt-5 md:mt-0" />
                </div>
            </div>
            
        </section>
    )
}