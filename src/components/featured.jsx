import Button from "./button"
import Rightimg from '../images/Right Button.svg'
import FeaturedImg from '../images/featured1.png'
import FeaturedImg2 from '../images/featured2.png'

export default function Featured(){
    return(
        <section>
            <div className="flex flex-col flex-sm-row justify-around items-center md:my-10">
                <div className="w-auto flex flex-col md:items-start justify-center items-center">
                    <span className='border bg-gray-200 rounded-xl font-medium w-60 py-1 px-2 text-center text-[10px] tracking-widest'>🔥 FEATURED</span>
                    <h1 className="font-bold tracking-wide text-4xl py-2 mt-3 text-center md:text-left block">ALL THE FEATURES IN</h1> 
                    <h1 className="font-bold tracking-wide text-4xl py-2 -mt-4 text-center md:text-left block"> ONE APP</h1>
                    <ul className="list-disc text-gray-500 mt-1 font-semibold ml-3 text-[12px]">
                        <li>Get 3% Cash Back On Every Purchases, 2% On <br/> Everything Else</li>
                        <li>Extra Spending Power When You Have Rewards Checking <br/>Through Upgrade</li>
                    </ul>
                    <div className="flex flex-row flex-sm-row py-3 -ml-5">
                        <Button
                        variant="outline"
                        size="medium"
                        className="py-1 text-blue-950 ml-6"
                        >Get Started</Button>
                        <button><img src={Rightimg} alt="" className="-ml-4 w-30 "/></button>
                    </div>
                </div>
                <div className="flex gap-3 md:mt-0 mt-16 mb-10">
                    <img src={FeaturedImg} alt="" className="mt-14 md:w-50 w-44" />
                    <img src={FeaturedImg2} alt="" className="-mt-10 md:w-50 w-44" />
                </div>
            </div>
        </section>
    )
}