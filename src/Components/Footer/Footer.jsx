import React from 'react'
import './footer.css'
import video from '../../Assets/video.mp4'
import {FiSend, FiChevronRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
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
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto facere ab esse debitis, quidem nostrum hic praesentium neque ratione.
            </div>
            <div className="footerSocail flex">
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group ONE */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Toursmn
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Group THREE */}
            <div className="linkGroup">
              <span className="groupTitle">
              PARTNRS
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripSdvisor
              </li>
            </div>
            {/* Group TWO */}
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer