import Button from "./button";
import Service1 from '../images/services1.png'
import Service2 from '../images/services2.png'
import Internet from '../images/internet.png'
import Chart from '../images/chart.png'
import Tom from '../images/tom.png'
import Settings from '../images/settings.png'
import WelcomeTom from '../images/welcome-tom.png'
import TotalBal from '../images/totalBal.png'
import Expenses from '../images/Expenses.png'
import Dollar from '../images/dollar.png'
import Rightimg from '../images/Right Button.svg'

export default function Services (){
    return(
        <section className="w-full mb-10">
            <div className="flex flex-sm-col flex-col">
                <div className="flex flex-col items-center py-6">
                    <span className='border bg-gray-300 rounded-xl font-medium w-54 py-1 px-2 text-center text-[10px] tracking-widest'>🔥 SERVICES</span>
                    <h1 className="font-bold text-3xl text-black text-center tracking-wider mt-2">CAN HELP YOU ACHIEVE <br/> FINANCIAL SUCCESS</h1>
                </div>
                <div className="flex flex-sm-row py-10 justify-center items-center w-screen">
                    <div className="bg-gray-100 rounded-3xl md:p-16 p-10 flex md:justify-center gap-10">
                        <div className="flex flex-row items-center">
                            <img src={Service1} alt="" className="w-[50%]" />
                            <img src={Service2} alt="" className="w-20 -ml-6 -mt-10" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <img src={Internet} alt="" className="w-7" />
                            <h2 className="text-black font-bold text-3xl tracking-wider text-wrap">Transfers Across The Globe Are Free</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-sm-row justify-evenly items-center ">
                    <div className="bg-gray-100 rounded-3xl flex flex-col w-full md:w-[30%] p-4 justify-center md:items-start">
                        <img src={Chart} alt="" className="w-7" />
                        <h2 className="text-black font-bold text-2xl tracking-wide text-wrap">Create A Card That Is Unique And Customized</h2>
                        <p className="text-wrap text-black text-[12px] font-medium mt-2">We Offer A Comprehensive Range Of Innovative Financial Services
                            Tailored To Meet Your Needs. Our Services Include
                            High-Yield Savings Accounts</p>
                        <div className="flex justify-center">
                            <img src={Tom} alt="" className="w-60 md:ml-12 mt-5" />
                        </div>
                    </div>
                    <div className="bg-blue-950 text-white rounded-3xl w-full md:w-[30%] p-4 flex flex-col justify-center items-start md:mt-0 mt-3">
                        <img src={Settings} alt="" className="w-7" />
                        <h2 className="font-bold text-2xl tracking-wide text-wrap">Personalized Insights And Financial Goals</h2>
                        <p className="text-[12px] font-medium mt-2 text-wrap">Savings Account That Offer Competitive Interest Rate And
                            Flexible Deposit Options. Invest Wisely With Our
                            Personalized. Our Services Include High-Yield Savings.
                        </p>
                        <div className="flex justify-center">
                            <img src={WelcomeTom} alt="" className="w-50 mt-12 md:ml-24" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-sm-row justify-center items-center py-6 w-screen md:my-0">
                    <div className="bg-yellow-300 py-12 px-3 rounded-2xl w-64 mx-4  my-2">
                        <h2 className="font-bold text-black text-left text-3xl tracking-wide text-wrap">100% Dedication</h2>
                        <p className="font-medium text-black mt-1 text-left text-[12px] tracking-wide text-wrap">We Offer A Comprehensive Range Of
                         Innovative Financial Services
                        ,Tailored To Meet Your Needs</p>
                    </div>
                    <div className="bg-gray-200 rounded-2xl mx-4 py-4 px-3 flex flex-col justify-center items-start  my-2 w-64">
                        <img src={Dollar} alt="" className="w-10" />
                        <h2 className="font-bold text-black text-left text-2xl tracking-wide text-wrap">Hold Money In 30+ Currency</h2>
                        <img src={Expenses} alt="" className="w-[45%] -mt-12 ml-[140px]" />
                    </div>
                    <div className="bg-[#2D907A] mx-4 rounded-2xl py-20 px-4  my-2 w-64">
                        <h1 className="text-3xl font-medium tracking-normal text-wrap text-white text-center justify-self-center">Visit Our Services Page</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Button
                    variant="outline"
                    size="medium"
                    className="py-10 px-10"
                    >View more</Button>
                    <img src={Rightimg} alt="" className="-ml-5 w-10" />
                </div>
            </div>
        </section>
    )
}