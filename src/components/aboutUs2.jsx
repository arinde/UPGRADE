import VisaCard from '../images/VisaCard.png'
import CreditCardInfo from '../images/CreditCardInfo.png'
import Button from './button'
import Rightimg from '../images/Right Button.png'

export default function AboutUss () {
    return(
        <section className="bg-gradient-to-tr from-blue-950 to-blue-950 via-green-600 w-full">
            <div className="flex flex-col flex-sm-row justify-evenly align-center py-5">
                <div className='flex flex-md-col justify-center items-center'>
                    <img src={CreditCardInfo} alt="" className="w-50" />
                    <img src={VisaCard} alt="" className="w-60 h-40 mt-52 -ml-24" />
                </div>
                <div className="flex flex-col flex-sm-col justify-center md:items-start items-center md:mt-0 mt-3">
                    <div className="flex flex-sm-col flex-col md:items-start items-center text-white">
                        <p 
                        className="block items-center bg-green-700 border-1  rounded-3xl md:w-[25%]  py-1
                        text-center text-[10px] leading-tight tracking-wide">🔥TRUSTWORTHINESS</p>
                        <p className=" md:text-4xl text-3xl font-bold tracking-wide">WE VALUE YOUR TRUST</p>
                        <p className='md:text-4xl text-3xl font-bold tracking-wide'>AND SECURITY</p>
                        <p className="text-left my-2 text-[12px] text-gray-300 font-medium tracking-wide">Our Mission Is To Make Finance More Accessible, 
                            Transparent and Secure
                        </p>
                        <p className='text-left -mt-2 text-[12px] text-gray-300 font-medium tracking-wide'>For Everyone With Cutting.</p>
                    </div>
                    
                    <div className="flex flex-row flex-sm-row py-3">
                        <Button
                        variant="success"
                        size="medium"
                        className="py-1 text-blue-950"
                        >Get Started</Button>
                        <img src={Rightimg} alt="" className="-ml-4 w-10"/>
                    </div>
                </div>
            </div>
        </section>
    )
}