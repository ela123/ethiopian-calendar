import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function History() {
  return (
    
        <div className='flex flex-col  mx-auto   justify-evenly items-center  p-30 md:flex-nowrap md:flex-row  gap-4 bg-black/70 '>
        <div>
                <img src="src/assets/Abba Demetrius I, 12th Pope of Alexandria.jpg" className='w-[389px] h-[500px] rounded-[15px] object-cover'  alt="" srcset="" />
            </div>    
            <div className='flex-col text-center justify-center flex min-h-55 max-w-[550px] items-center bg-gray-200 p-5 rounded-[8px] border-1 border-yellow-300 border-solid'>
                <h1 className='text-black text-[20px] font-bold'>Bahire Hasab - ባሕረ ሃሳብ - The Ethiopian Calendar</h1>
                <br></br>
                <p  className='text-black text-[15px] font-auto'>
                Ethiopia has its own ancient calendar based on the system called Bahire Hasab - ባሕረ ሃሳብ which means the Sea of Ideas. Bahire Hasab  also known as Abushakir is a chronological system used for calculating the times of festivals and the beginning and ending of the fasting days throughout the year.
<br></br><br></br>
The Ethiopian Calendar has much in common with the Coptic-Egyptian Calendar but not identical. The two calendars differ with regards to the time and observation of Saints' days. Pope Demetrios of the Church of Alexandria(seat of St. Mark) utilized Mitonic cycles. The calculations of Claudius Ptolemy and the Egyptian calendar were to establish the rules for calculating Easter on the day of a particular New Year.
                </p>
                <div className='flex flex-row justify-end text-[#0E008E] hover:text-black items-center gap-2'>
                <Link to="/English">Read More</Link>

  <FaArrowRight />
</div>
                
            </div>
            
        </div>
    
  )
}

export default History