
import About from './components/about'
import AboutUs from './components/aboutUs'
import AboutUss from './components/aboutUs2'
import Featured from './components/featured'
import Services from './components/services'
import Testimonial from './components/testimonial'
import './styles/nav.css'
import tests from './assets/data.js'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from './components/button.jsx'
import Rightimg from './images/Right Button.svg'
import Footer from './components/footer.jsx'
import Navbar from './components/nav.jsx'
import Tagline from './components/tagline.jsx'
import { motion } from 'framer-motion'

export default function App(){
  return (
    <>
      <Navbar />
      <About />
      <Tagline />
      <AboutUs />
      <Featured />
      <AboutUss />
      <Services />
      <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='py-10 px-4'>
        <div className="flex flex-col justify-center items-center">
            <span className='border bg-gray-300 rounded-xl font-medium w-54 py-1 px-2 text-center text-[10px] tracking-widest'>🔥 TESTIMONIAL</span>
            <h2 className="text-center font-bold tracking-wide text-2xl sm:text-3xl mt-2">GET TO KNOW OUR CLIENTS</h2>
        </div>
        <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation 
                pagination={{clickable: true}}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                breakpoints={{
                  640: {slidesPerView: 1},
                  768: {slidesPerView: 2},
                  1024: {slidesPerView: 3},
                }}>
                {tests.map((test) => (
                  <SwiperSlide key={test.id}>
                    <Testimonial 
                          
                          word={test.word} 
                          name={test.name}
                          title={test.title}
                          img={test.img.src}
                          quote={test.img1.src}
                          index={test.id}
                        />
                        
                  </SwiperSlide>
                        
                ))}
        </Swiper>
        <motion.div 
         whileHover={{ scale: 1.05, backgroundColor: "", color: "black" }}
         whileTap={{ scale: 0.95 }}
         transition={{ type: 'spring', stiffness: 300 }}
        className="flex justify-center items-center mt-5">
            <Button
            variant="outline"
            size="medium"
            className="py-10 px-10"
            >View more</Button>
            <img src={Rightimg} alt="" className="-ml-5 w-10" />
        </motion.div>
      </motion.section>
      <Footer />
    </>
  )
}
