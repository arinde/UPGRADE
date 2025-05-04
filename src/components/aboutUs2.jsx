import VisaCard from '../images/VisaCard.png'
import CreditCardInfo from '../images/CreditCardInfo.png'
import Button from './button'
import Rightimg from '../images/Right Button.png'
import { motion } from 'framer-motion'

export default function AboutUss () {
    return(
        <section className="bg-gradient-to-tr from-blue-950 to-blue-950 via-green-600 w-full">
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col flex-sm-row justify-evenly align-center py-5">
                <div className='flex flex-md-col justify-center items-center'>
                    <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={CreditCardInfo} alt="" className="w-50" />
                    <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={VisaCard} alt="" className="w-60 h-40 md:mt-44 mt-44 -ml-24" />
                </div>
                <div className="flex flex-col flex-sm-col justify-center md:items-start items-center md:mt-0 mt-3">
                    <div className="flex flex-sm-col flex-col md:items-start items-center text-white">
                        <p 
                        className="block items-center bg-green-700 border-1  rounded-3xl md:w-[25%] md:py-1 py-2 w-[30%]
                        text-center text-[10px] leading-tight tracking-wide">🔥TRUSTWORTHINESS</p>
                        <p className=" md:text-4xl text-3xl font-bold tracking-wide md:mt-0 mt-2">WE VALUE YOUR TRUST</p>
                        <p className='md:text-4xl text-3xl font-bold tracking-wide'>AND SECURITY</p>
                        <p className="md:text-left text-center my-2 text-[12px] text-gray-300 font-medium tracking-wide text-wrap">Our Mission Is To Make Finance More Accessible, 
                            Transparent and Secure For Everyone With Cutting.</p>
                    </div>
                    
                    <motion.div 
                     whileHover={{ scale: 1.05, backgroundColor: "", color: "white" }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ type: 'spring', stiffness: 300 }}
                    className="flex flex-row flex-sm-row py-3">
                        <Button
                        variant="success"
                        size="medium"
                        className="py-1 text-blue-950"
                        >Get Started</Button>
                        <img src={Rightimg} alt="" className="-ml-4 w-10"/>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}