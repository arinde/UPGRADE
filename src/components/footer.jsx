import Button from "./button";
import logo from '../images/Logo.png'
import Google from '../images/Google Play.png'
import Apple from '../images/Apple.png'

export default function Footer () {
    return(
        <section>
            <div className="flex flex-col justify-center items-center">
                <img src={logo} alt="" className="w-40" />
                <div className="flex gap-3 mt-1">
                    <Button
                    variant="secondary"
                    size="medium"
                    className="flex justify-center items-center h-10">
                        <img src={Apple} alt="" className="-mt-1" />
                        <div className="-mt-1">
                            <p className="text-[9px] text-gray-300">Download on</p>
                            <p className="text-[12px] ml-2 -mt-3">Apple Store</p>
                        </div>
                    </Button>
                    <Button
                    variant="secondary"
                    size="medium"
                    className="flex justify-center items-center h-10">
                        <img src={Google} alt="" />
                        <div className="-mt-1">
                            <p className="text-[9px] mr-6 text-gray-300">Get it On </p>
                            <p className="text-[12px] ml-1 -mt-3"> Google Play</p>
                        </div>
                    </Button>
                </div>
                <div className="flex text-gray-900 text-[12px] font-semibold gap-1 md:gap-12 mt-4">
                    <span>Personal Loan</span>
                    <span>One Card</span>
                    <span>Savings</span>
                    <span>Checking</span>
                    <span>Contact</span>
                    <span>Help</span>
                    <span>Support</span>
                </div>
                {/*<div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>*/}
                <span className="font-bold text-gray-900 text-[12px] mt-3">Send Your Feedback:<span className="text-gray-900 text-[12px] font-semibold"> arindevictor8@gmail.com</span></span>
                <div className="flex text-gray-900 text-[12px] font-semibold md:gap-3 gap-0 mt-3">
                    <span>Privacy Policy</span>
                    <span>|</span>
                    <span>Terms & Condition</span>
                    <span>|</span>
                    <span>Cookies Notice</span>
                    <span>|</span>
                    <span>Copyright Policy</span>
                    <span>|</span>
                    <span>Data Policy</span>
                </div>
                <p className="m-3 text-gray-900 md:text-[13px] text-[11px] tracking-wide font-bold">&copy; {new Date().getFullYear()} Arinde Victor. This design belongs to Deisgn Monks</p>

            </div>
        </section>

    )
}