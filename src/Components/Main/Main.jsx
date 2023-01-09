import React from 'react'
import './main.css'
import {CiLocationOn} from 'react-icons/ci'
import {BsClipboardCheck} from 'react-icons/bs'

import img from '../../Assets/img1.jpg'

const Data = [
  {
  id: 1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
   },
  // {
  // id: 2,
  // imgSrc: img2,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 3,
  // imgSrc: img3,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 4,
  // imgSrc: img4,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 5,
  // imgSrc: img5,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 6,
  // imgSrc: img6,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 7,
  // imgSrc: img7,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 8,
  // imgSrc: img8,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 9,
  // imgSrc: img9,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 10,
  // imgSrc: img10,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 11,
  // imgSrc: img11,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 12,
  // imgSrc: img12,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 13,
  // imgSrc: img13,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // },
  // {
  // id: 14,
  // imgSrc: img14,
  // destTitle: 'Bora Bora',
  // location: 'New Zealand',
  // grade: 'CULTURAL RELAX',
  // fees: '$700',
  // description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activites'
  // }
]


const Main = () => {

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 className='title'> 
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} className="imgg" />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continet flex">
                    <CiLocationOn className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main