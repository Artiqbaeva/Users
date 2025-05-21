import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  {
    src: 'https://images.vexels.com/content/196497/preview/work-from-home-laptop-mockup-ab86cf.png',
    caption: 'Empowering Teams Worldwide',
  },
  {
    src: 'https://mockuphunt.co/cdn/shop/products/Free-Macbook-Pro-PSD-Mockup_CreativeGenie_091217_prev02_2000x.jpg?v=1524658957',
    caption: 'Seamless User Management',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    caption: 'Modern Interface for Productivity',
  },
]

function Hero() {
  return (
    <section className="w-full h-[60vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover rounded-none"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                  {img.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero