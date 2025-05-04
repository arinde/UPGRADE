import BarChart from '../images/barChart.png'

export default function AboutUs() {
    return(
        <section className='justify-center items-center py-16'>
            <div className='flex flex-sm-row flex-col justify-around items-center my-7'>
                <div className='flex items-center'>
                    <div className='flex flex-col justify-start rounded-2xl p-7 bg-green-950 text-white '>
                        <h3 className='tracking-wide text-md py-1'>Saving Month</h3>
                        <h3 className='font-bold tracking-wide'>$188,520</h3>
                        <span className='text-[11px] pb-3 pt-1 tracking-wide'>Increase of <span className='font-bold'>12%</span> from last month</span>
                        <img src={BarChart} alt="" className='w-60 h-40' />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:mt-0 mt-4'>
                    <span className='border bg-gray-200 rounded-xl font-medium w-60 py-1 px-2 text-center text-[10px] tracking-wider'>🔥 ABOUT US</span>
                    <h1 className='font-extrabold text-3xl text-black leading-tight tracking-wide mt-2'>ALL YOU MONEY <br/> NEEDS IN ONE APP</h1>
                    <div>
                        <div className='flex flex-sm-row gap-1'>
                            <div className='rounded-full w-1 h-20 bg-green-950 mt-2'></div>
                            <div className='rounded-xl bg-lime-100 w-80 py-2 mt-2 ml-2'>
                                <h3 className='font-bold text-black text-sm tracking-wider mx-3 mt-1'>Expenses Tracker</h3>
                                <p className='text-[12px]  font-semibold mt-1 mx-3'>Our comprehensive collection of medications,<br/> supplements, and healthcare products.</p>
                            </div>
                        </div>

                        <div className='flex flex-sm-row gap-1 '>
                            <div className='rounded-full w-1 h-20 bg-gray-300 mt-2'></div>
                            <div className='rounded-xl bg-gray-100 w-80 py-2 mt-2 ml-2 hover:bg-lime-100'>
                                <h3 className='font-bold text-black text-sm tracking-wider mx-3 mt-1'>Crypto Connection</h3>
                                <p className='text-[12px]  font-semibold mt-1 mx-3'>From advanced imaging technology such as MRI<br/> and CT scanners to precision surgical tools.</p>
                            </div>
                        </div>

                        <div className='flex flex-sm-row gap-1'>
                            <div className='rounded-full w-1 h-20 bg-gray-300 mt-2 '></div>
                            <div className='rounded-xl bg-gray-100 w-80 py-2 mt-2 ml-2 hover:bg-lime-100'>
                                <h3 className='font-bold text-black text-sm tracking-wider mx-3 mt-1'>Automated Invoicing</h3>
                                <p className='text-[12px]  font-semibold mt-1 mx-3'>We're commited to leveraging the latest<br/> innovations in medical technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}