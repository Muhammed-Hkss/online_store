import React from 'react'
import cls from './About.module.scss' 
import Navbar from '../../components/Navbar'




const About = () => {
  return (
    <>
      <div>
          <Navbar />
      </div>

      <div className={cls.container}>
          <div className={cls.image_data}>
            <img className={cls.image} src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=1380&t=st=1672220461~exp=1672221061~hmac=ca10ccbac3c6473e4ff7748b21144252df51a48cc441e821f59a77506c8fca7c" alt="" />
          </div>


          <div className={cls.about_text1_center}>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
          </div>


          <div className={cls.about_text_data}>
            <div className={cls.about_text_image_data}>
              <img src="https://img.freepik.com/free-vector/flat-online-shopping-concept_52683-63899.jpg?w=826&t=st=1672221106~exp=1672221706~hmac=7908d2fdbc179d965762aded0412cd0d6573b69e09072825326b179fd24ef056" alt="" />
            </div>
            <div className={cls.about_text_text_data}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati excepturi minima perspiciatis est porro repellendus, provident repellat ad consequatur, nesciunt rerum illo voluptatem nam optio nulla sapiente libero alias enim!</p>
            </div>
          </div>
          <div className={cls.about_text2_data}>
            <div className={cls.about_text2_text_data}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni totam optio quis, blanditiis cupiditate magnam quod odit, quos, numquam suscipit omnis amet tenetur molestiae pariatur officia exercitationem quisquam dolores.</p>
            </div>
            <div className={cls.about_text2_image_data}>
              <img src="https://img.freepik.com/free-vector/catalogue-concept-illustration_114360-3253.jpg?w=826&t=st=1672221224~exp=1672221824~hmac=cc8c3c9682f604886be25381348ff535712fedd8fb715c28c19923ba680e3bde" alt="" />  

            </div>
          </div>
      </div>
    </>
  )
}

export default About
