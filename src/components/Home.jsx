import React from 'react'
import Getatchew from '../assets/Getatchew_Haile.jpg';

const Home = () => {
  return (

      
      
<div className='flex flex-raw md:min-w-55  justify-evenly items-center  p-30 md:flex-nowrap  md:flex-row flex-col gap-4 bg-black/70 ' >
  <div className="flex-col text-center justify-center  min-h-35 max-w-[400px] items-center bg-gray-200 p-5 rounded-[8px] border-1 border-yellow-300">
  <h1 className='text-black text-[20px] font-bold'>ጌታቸው ኀይሌ[ 1957–2021] </h1>
  <br></br>
  <p className='text-black text-[13px] font-auto'>
  በኛና በምዕራባውያን መካከል የዘመን ልዩነት መኖሩ የገረመን አቈጣጠሩን የመሠረትንበት የሁለታችንም ባህል (ክርስትና) አንድ ሆኖ ሳለ አቈጣጠራችን አንድ 
  አለመሆኑ ነው እኛ “ዓመተ ምሕረት” ስንል እነሱ “ዓመተ እግዚእ (Anno Domini) ይላሉ፡፡ ታዲያ ምስጢሩ እንዲህ አንድ ከሆነ ለምን የተለያየ መንገድ አለን? መልሱ ቀላል ነው፤ የዘመን አቈጣጠራችን የተመሠረተው በክርስትና ታሪክ ላይ ብቻ 
አይደለም:: የዘመን ቈጠራ ዘዴ የታወቀውና ይሠራበት የነበረው ከዘመነ ክርስትና 
በፊት ነው:: ከምዕራባውያን ጋር የተለያየነው የክርስትናን የዘመን አቈጣጠርተቀብለን ቀድሞ እንሠራበት ከነበረው ከጥንቱ የዘመን አቈጣጠር ጋራ ስናያይዝ በተለያየ መንገድ ስለተጠቀምን ነው:: 
  </p>
  </div>
  <div>
      <div className='border-2 border-yellow-300 rounded-[15px]'>
      <img src={Getatchew} className="w-[389px] h-[500px] rounded-[15px] object-cover"  alt="" />
      </div>
  </div>
  

</div>

      

  
  )
}

export default Home