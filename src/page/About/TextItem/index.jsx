import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TextItem.scss'

const TextItem = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='container'>
        <div className="flip-card-container" 
        // style="--hue: 220"
        >
          <div className="flip-card">

            <div className="card-front">
              <div className='figure'>
                <div className="img-bg"></div>
                <img className='image' src="https://gamerwall.pro/uploads/posts/2022-05/1652130641_43-gamerwall-pro-p-ogromnie-zdaniya-budushchego-oboi-krasivo-52.jpg" />
                <div className='figcaption'>Favotite</div>
              </div>

              <ul className='ul_list'>
                <li className='list_li'>text</li>
                <li className='list_li'>text</li>
                <li className='list_li'>text</li>
                <li className='list_li'>text</li>
                <li className='list_li'>text</li>
              </ul>
            </div>

            <div className="card-back">
              <div className='figure'>
                <div className="img-bg"></div>
                <img className='image' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d7668d10218199.560e14ca9736a.jpg " />
              </div>

              <button className='book_btn' onClick={() => navigate('/')}>More</button>

              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TextItem
