import Spherule from '../images/spherule.png'
import Samsung from '../images/Samsung.png'
import Visa from '../images/visa.png'
import Amazon from '../images/amazon.png'
import Paypal from '../images/paypal.png'
import Alipay from '../images/alipay.png'

export default function Tagline() {
    return(
        <section>
            <div className="bg-green-700 w-full h-14 flex justify-evenly items-center">
                <img className='md:w-[12%] md:h-10 w-[17%]' src={Spherule} alt="" />
                <img className='md:w-30 md:h-10  w-[15%] ' src={Samsung} alt="" />
                <img className='md:w-20 md:h-5  w-[12%]' src={Visa} alt="" />
                <img className='md:w-[10%] md:h-6 mt-2  w-[15%]' src={Amazon} alt="" />
                <img className='md:w-20 md:h-6 w-[12%]' src={Paypal} alt="" />
                <img className='md:w-20 md:h-6 w-[15%]' src={Alipay} alt="" />
            </div>
        </section>
    )
}