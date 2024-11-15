import React from 'react'
import Text from '../components/Text'
import profilepic from '../assets/profilepic.png'
import githubmarkwhite from '../assets/githubmarkwhite.png'
import youtubeicon from '../assets/youtubeicon.png'
import facebookicon from '../assets/facebookicon.png'
import htmlpic from '../assets/htmlpic.png'
import csspic from '../assets/csspic.png'
import jspic from '../assets/jspic.png'
import reactpic from '../assets/reactpic.png'
import korimenpic from '../assets/korimenpic.png'
import mrbpic from '../assets/mrbpic.png'
import biffychicken from '../assets/biffychicken.png'
import s24ultrapic from '../assets/s24ultrapic.png'
import drinkpic from '../assets/drinkpic.png'
import todopic from '../assets/todopic.png'


function Home() {
  return (
    <>
      
      <Text />

      <div className='mainprofile'>

        <div className='detailleft'>
          <div className='propic'>
            <img className='picopic' src={profilepic} alt="Profile Picture" />
          </div>
        </div>

        <div className='detailright'>
          <h1 className='taktie'>สวัสดีครับ!</h1>
          <p>ผมชื่อ <span className='jumpol'>นายจุมพล พงศาสริกุล</span> เป็นคนที่ชื่นชอบเกี่ยวกับคอมพิวเตอร์</p>
          <p>ปัจจุบันกำลังศึกษาเกี่ยวกับการเป็น Front End Developer และในอนาคต</p>
          <p>จะศึกษาเกี่ยวกับ Back End Developer เพิ่มเติมอีก</p>

          
        <div class="container">
          <a href="https://github.com/JumpolBoy" target="_blank" rel="noopener noreferrer">
          <button class="Btn github">
            <img src={githubmarkwhite} alt="" />   
            <span class="text">GitHub</span>
          </button>
          </a>

          <a href="https://www.youtube.com/@jumpolpsk" target="_blank" rel="noopener noreferrer">
          <button class="Btn youtube">
            <img src={youtubeicon} alt="" />   
            <span class="text">YouTube</span>
          </button>
          </a>
          
          <a href="https://www.facebook.com/boyjp.psk" target="_blank" rel="noopener noreferrer">
          <button class="Btn facebook">
            <img src={facebookicon} alt="" />   
            <span class="text">Facebook</span>
          </button>
          </a>
        </div>

        <button class="hirebtn">Hire Me</button>
          
        </div>

      </div>



      <h1 className='tools'>เครื่องมือที่ใช้</h1>

      <div className='toolslist'>
        <img className='htmlpic' src={htmlpic} alt="" />
        <img className='csspic' src={csspic} alt="" />
        <img className='jspic' src={jspic} alt="" />
        <img className='reactpic' src={reactpic} alt="" />
      </div>


      
      <div className='port' id='projects'>Projects</div>

      <div className='portlist'>

        <div class="card">
          <img className='card__image' src={korimenpic} alt="" />
          <div class="card__content">
            <p class="card__title">Korimen</p>
            <p class="card__description">Korimen คือเว็บขายของออนไลน์ที่จำหน่ายผลิตภัณฑ์ของ Apple ตั้งแต่ iPhone, iPad, MacBook, Apple Watch, และอุปกรณ์เสริมต่างๆ</p>
            <a href="https://github.com/JumpolBoy/JumpolBoy.github.io.git" target="_blank" rel="noopener noreferrer">
            <button class="card__button">GitHub</button></a>
            <a href="https://korimen.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button class="card__button secondary">Live Demo</button></a>
          </div>
        </div>

        <div class="card">
        <img className='card__image' src={mrbpic} alt="" />
          <div class="card__content">
            <p class="card__title">MR.B</p>
            <p class="card__description">เว็บไซต์ขายอุปกรณ์การช่างที่คนที่ชื่นชอบเกี่ยวกับเครื่องมือช่าง ต้องชอบและประทับใจอย่างแน่นอน และมาในราคาที่คุ้มค่าสุดๆ</p>
            <a href="https://github.com/JumpolBoy/mrb-reactjs.git" target="_blank" rel="noopener noreferrer">
            <button class="card__button">GitHub</button></a>
            <a href="https://mrbreactjs.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button class="card__button secondary">Live Demo</button></a>
         </div>
        </div>

        <div class="card">
        <img className='card__image' src={biffychicken} alt="" />
          <div class="card__content">
            <p class="card__title">BIFFY CHICKEN</p>
            <p class="card__description">เว็บไซต์ร้านขายไก่ทอดชื่อ BIFFY มีเมนูไก่ที่น่าสนใจ และชุด Set ที่อิ่มคุ้มจุใจในราคาที่คุ้มค่าคุ้มราคา</p>
            <a href="https://github.com/JumpolBoy/BIFFYCHICKEN.git" target="_blank" rel="noopener noreferrer">
            <button class="card__button">GitHub</button></a>
            <a href="https://biffychicken.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button class="card__button secondary">Live Demo</button></a>
          </div>
        </div>

        <div class="card">
        <img className='card__image' src={s24ultrapic} alt="" />
          <div class="card__content">
            <p class="card__title">S24 Ultra</p>
            <p class="card__description">เว็บไซต์ที่ใช้แสดงตัวอย่างสินค้าของ Samsung Galaxy S24 Ultra 5G ที่ประกอบไปด้วยรายละเอียดสินค้า ราคา คะแนน และรีวิว</p>
            <a href="https://github.com/JumpolBoy/Samsung.git" target="_blank" rel="noopener noreferrer">
            <button class="card__button">GitHub</button></a>
            <a href="https://samsung5904.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button class="card__button secondary">Live Demo</button></a>
         </div>
        </div>

        <div class="card">
        <img className='card__image' src={drinkpic} alt="" />
          <div class="card__content">
            <p class="card__title">Drink Water</p>
            <p class="card__description">เว็บไซต์ที่ทำเพื่อคำนวณการดื่มน้ำที่เหมาะกับร่างกาย ที่เทียบกับสัดส่วนน้ำหนักตัวนั้นเอง</p>
            <a href="https://github.com/JumpolBoy/vite-project.git" target="_blank" rel="noopener noreferrer">
            <button class="card__button">GitHub</button></a>
            <a href="https://drinkwater11.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button class="card__button secondary">Live Demo</button></a>
          </div>
        </div>

        <div class="card">
        <img className='card__image' src={todopic} alt="" />
          <div class="card__content">
            <p class="card__title">To Do List</p>
            <p class="card__description">เว็บไซต์เพื่อทำ To Do List ที่ตรงไปตรงมา เพื่อจัดการตารางชีวิตให้มีระเบียบวินัยนั้นเอง</p>
            <a href="https://github.com/JumpolBoy/to-do-list.git" target="_blank" rel="noopener noreferrer">
            <button class="card__button">GitHub</button></a>
            <a href="https://to-do-list-4929.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button class="card__button secondary">Live Demo</button></a>
          </div>
        </div>

      </div>
      


      
      <div className='exper' id='experience'>Experience</div>
      
        <div className='expergroup'>

          <div class="notifications-container">
            <div class="success">
              <div class="flex">
                <div class="flex-shrink-0">
                  
                  <svg class="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="success-prompt-wrap">
                  <p class="success-prompt-heading">HTML
                  </p><div class="success-prompt-prompt">
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="notifications-container">
            <div class="success">
              <div class="flex">
                <div class="flex-shrink-0">
                  
                  <svg class="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="success-prompt-wrap">
                  <p class="success-prompt-heading">CSS
                  </p><div class="success-prompt-prompt">
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="notifications-container">
            <div class="success">
              <div class="flex">
                <div class="flex-shrink-0">
                  
                  <svg class="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="success-prompt-wrap">
                  <p class="success-prompt-heading">JavaScript
                  </p><div class="success-prompt-prompt">
                    <p>Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="notifications-container">
            <div class="success">
              <div class="flex">
                <div class="flex-shrink-0">
                  
                  <svg class="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="success-prompt-wrap">
                  <p class="success-prompt-heading">React
                  </p><div class="success-prompt-prompt">
                    <p>Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className='contactcrop'>
        <div className='contactall' id='contact'>Contact Me</div>
        
         <div className='contactlist'>
         
          <div class="contact-wrapper">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <g data-name="inbox">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  ></rect>
                  <path
                    d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"
                  ></path>
                </g>
              </g>
            </svg>
            <div class="inputcontact">jumpol.phong@gmail.com</div>
          </div>

         
            

         </div>
         </div>
    </>
  )
}


export default Home