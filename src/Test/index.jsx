import { useState, useRef } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import cls from './Test.module.scss'
import './Test.scss'



function Test() {



    return (
      // <div className={cls.card}>
      //   <div className={cls.imgBox}>
      //     <img src="https://images.unsplash.com/photo-1509221969444-c160deb7edb5?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=8f6e01a936da20b1e24b431089f27130" alt=""/>
      //   </div>
      //   <div className={cls.details}>
      //     <h2>lorem ipsum dolor</h2>
      //     <p>dfasjl lk;jds jl;sdaf hjdsfjdsa ghfu j asdfuju ,klpds pe posd ur dhqeryt eyop  ads  oep pfghdm,ntic jrpvcnj dfh eklfnsk r dieu pw ehdg swuewq whr ekkshq pfb v,m ertuk b eu e kwre i t   q m ei er wr efg efbdfeoi  cbxgkr ,rikugh dsk bvckjgry kfbd,vbkugsbn,sdvksghksvb us y bvkur iur jcxgiur kuryt rktry ktrut dsbvskt hrsut strksbfskfgs </p>
      //   </div>
      // </div>

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

              <button className='book_btn'>More</button>

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
    );
}

export default Test;
