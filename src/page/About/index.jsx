import React from 'react'
import cls from './About.module.scss' 
import AboutVideo from '../../video/videoplayback.mp4'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import TextItem from './TextItem'
import Test from '../../Test'




const About = () => {
  return (

    <>
      {/* <div>
        <Navbar />  
      </div> */}

      <div>
        <Test />
      </div>


      
      <motion.div className={cls.container}>
        <div className={cls.video_data}>
          <video className={cls.about_video} src={AboutVideo} autoPlay muted loop />
        </div>
        <div className={cls.white_block}>

          <div className={cls.custom_shape_divider_bottom_1671079934}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={cls.shape_fill}></path>
            </svg>
          </div>

          <div className={cls.white_block_data}>
            <div className={cls.white_block_image_data}>
              <img src="https://img.freepik.com/free-vector/online-shopping-abstract-concept-illustration_335657-3714.jpg?w=826&t=st=1671122893~exp=1671123493~hmac=f31436cc1885c2e0b58c47776f2ee06b00791a87fd791f5bddf60db30bc9b8c5" alt="" />
            </div>

            <div className={cls.white_block_text_data}>
              <h1>LOGO</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi aperiam culpa, sequi nam, assumenda eos iure molestiae quasi repudiandae omnis saepe explicabo adipisci voluptas deleniti dolore. Doloremque, impedit nemo! Beatae recusandae fugiat vitae soluta veniam debitis eaque sint ab dolor quo. Praesentium, eum ipsam iste, velit ut doloremque modi voluptatum earum quo esse sit architecto vitae, sint corporis aspernatur cum quod eligendi nisi? Minima temporibus nostrum culpa fugiat amet rem ducimus, qui eius architecto iste ad, praesentium nihil totam ea illum ratione optio accusamus, natus doloribus minus consequatur odit suscipit ullam quos! Quae ea assumenda eos, aperiam atque natus.</p>
            </div>
          </div>

          <div className={cls.white_block_data}>
            <div className={cls.white_block_text_data}>
              <h1>LOGO</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi aperiam culpa, sequi nam, assumenda eos iure molestiae quasi repudiandae omnis saepe explicabo adipisci voluptas deleniti dolore. Doloremque, impedit nemo! Beatae recusandae fugiat vitae soluta veniam debitis eaque sint ab dolor quo. Praesentium, eum ipsam iste, velit ut doloremque modi voluptatum earum quo esse sit architecto vitae, sint corporis aspernatur cum quod eligendi nisi? Minima temporibus nostrum culpa fugiat amet rem ducimus, qui eius architecto iste ad, praesentium nihil totam ea illum ratione optio accusamus, natus doloribus minus consequatur odit suscipit ullam quos! Quae ea assumenda eos, aperiam atque natus.</p>
            </div>


            <div className={cls.white_block_image_data}>
              <img src="https://img.freepik.com/free-vector/digital-marketplace-application-remote-business-e-commerce-internet-store-mobile-market-customer-using-smartphone-cartoon-character-vector-isolated-concept-metaphor-illustration_335657-2762.jpg?w=826&t=st=1671122918~exp=1671123518~hmac=0d1234f0fc9e5dc17f19458b5e4cd8988bc93cf357bb0cb0dbc6a12f12ad61d7" alt="" />
            </div>

            
          </div>

          <div className={cls.white_3_block_data}>

            <div className={cls.white_3_text_data}>
              <h1 >
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod quidem ipsa eos aliquam facere labore qui dolor! Necessitatibus, minima. Suscipit magnam sed voluptate aut repellat cum maiores ab saepe.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod quidem ipsa eos aliquam facere labore qui dolor! Necessitatibus, minima. Suscipit magnam sed voluptate aut repellat cum maiores ab saepe.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod quidem ipsa eos aliquam facere labore qui dolor! Necessitatibus, minima. Suscipit magnam sed voluptate aut repellat cum maiores ab saepe.
              </p>
            </div>

            {/* <div className={cls.white_3_image_data}>
              <img src="https://img.freepik.com/premium-vector/food-baskets-christmas-gift-foods-package-with-different-eating-isolated-flat-picnic-packs-from-farm-market-grocery-store-donations-charity-poor-hungry-people-vector-illustration_53562-13761.jpg?w=1380" alt="" />
            </div> */}

            <div className={cls.white_3_image_data}>
             {/* <TextItem /> */}
            </div>
          </div>
        </div>
      </motion.div>

    </>
  )
}

export default About
