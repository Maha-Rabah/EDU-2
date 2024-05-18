import React from 'react'
import './ProgramCards.css'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ProgramCards = ({programcard}) => {
  return (
    <div className='programcards'>
        <div className='container'>
            {programcard.map(function (item) {
                return (
                  <>
                    <div className= {`${item.color} "progcard"`}>
                        <h3 className='cardname'>{item.name}</h3>
                        <p className='aboutcard'>{item.about}</p>
                        <div className='learnmore'>
                        <span>Learn more</span>
                        <Link to={item.programname}><i><IoArrowForwardCircleOutline /></i></Link>
                        </div>
                    </div>
                  </>
                );
            })}
        </div>
    </div>
  )
}

export default ProgramCards