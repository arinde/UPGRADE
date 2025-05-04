
import Star from '../images/star.png'


export default function Testimonial (props) {
    console.log(props.index)
    return(
        

                
                    <div className="flex justify-center items-center mt-5">
                        <div className={`px-4 py-4  rounded-2xl mx-4 h-72 w-64 ${props.index === 2 ? "bg-[#004852]": "bg-gray-200"} `}>
                            <img src={props.quote} alt="" />
                            <span className={`text-wrap mt-2 ${props.index === 2 ? "text-white" : "text-black"}`}>{props.word}</span>
                            <div className="flex flex-row mt-4">
                                <img src={props.img} alt="" className="w-[20%] mr-2" />
                                <div className="flex flex-col my-1">
                                    <img src={Star} alt="" className="w-[35%]" />
                                    <h3 className={`font-bold ${props.index === 2 ? "text-white" : "text-black"}`}>{props.name}</h3>
                                    <p className={`text-wrap ${props.index === 2 ? "text-white" : "text-black"} text-[10px]`}>{props.title}</p>

                                </div>
                            </div>
                        </div>
                    </div>

    )
}