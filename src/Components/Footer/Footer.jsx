import React from 'react'
import './footer.css'
import video from '../../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="" placeholder='Enter your email address' />
            <button className="btn flex" type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className="logo">
                <MdOutlineTravelExplore  className="icon"/>  Travel.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer