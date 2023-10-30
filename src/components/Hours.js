import React, { useEffect, useState } from 'react'
import Data from './Data'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Hours() {

  const colors =  ['linear-gradient(to left, rgb(141, 186, 255), rgb(83, 144, 235))',
  'linear-gradient(to left, rgb(228, 234, 243), rgb(171, 183, 201))',
  'linear-gradient(to left, rgb(249, 153, 160), rgb(232, 80, 91))',
  'linear-gradient(to left, rgb(132, 137, 255), rgb(81, 86, 190))',
  'linear-gradient(to left, rgb(255, 207, 114), rgb(255, 187, 56))',
  ]

 

  const [bgColor1, setBgColor1] = useState('linear-gadient(to left, rgb(132, 137, 255), rgb(81, 86, 190) )')  
  const [bgColor2, setBgColor2] = useState('linear-gradient(to left, rgb(228, 234, 243), rgb(171, 183, 201))')  
  const [bgColor3, setBgColor3] = useState('linear-gradient(to left, rgb(255, 207, 114), rgb(255, 187, 56))')  
  const [bgColor4, setBgColor4] = useState('linear-gradient(to left, rgb(132, 137, 255), rgb(81, 86, 190))')  

  
 

  useEffect(() => {
 
      const changeBgColor = () => {
    
        setBgColor1(colors[Math.floor(Math.random() * colors.length)])      
        setBgColor2(colors[Math.floor(Math.random() * colors.length)])      
        setBgColor3(colors[Math.floor(Math.random() * colors.length)])      
        setBgColor4(colors[Math.floor(Math.random() * colors.length)])      
   
       }
       changeBgColor()
  }, [])
 


  const hours =  [
      {
        hour : '12AM'
      },
      {
        hour : '1AM'
      },
      {
        hour : '2AM'
      },
      {
        hour : '3AM'
      },
      {
        hour : '4AM'
      },
      {
        hour : '5AM'
      },
      {
        hour : '6AM'
      },
      {
        hour : '7AM'
      },
      {
        hour : '8AM'
      },
      {
        hour : '9AM'
      },
      {
        hour : '10AM'
      },
      {
        hour : '11AM'
      },
      {
        hour : '12AM'
      },
      {
        hour : '1PM'
      },
      {
        hour : '2PM'
      },
      {
        hour : '3PM'
      },
      {
        hour : '4PM'
      },
      {
        hour : '5PM'
      },
      {
        hour : '6PM'
      },
      {
        hour : '7PM'
      },
      {
        hour : '8PM'
      },
      {
        hour : '9PM'
      },
      {
        hour : '10PM'
      },
      {
        hour : '11PM'
      }, 
  ]

  
 
  return (
     <div className='flex horizontal-scroll-wrapper h-[520px] z-40 w-full mx-auto bg-black '  > 
        <div className=''>
                <div className='fixed top-[100px] bg-white   flex w-20 h-20'>
                  <div className='shadow-md bg-white rounded-full p-1 absolute'>
                      <MdOutlineKeyboardDoubleArrowLeft size={20} color='#5156be'/>
                  </div>
                  <h3 className='text-2xl text-gray-700 ml-10 sm:text-md'>Jan</h3>
                </div>
                <div className='flex flex-col px-10 ' >
       
                    <div className='  items-center gap-4 px-4 my-4 h-full w-full '>
                      
                          <div className='flex  '>
                            
                              {
                                hours.map((item, index) => {
                                  return(
                                  <>
                                    <div className='w-[150px] text-blue-500'>{item.hour}</div>
                                     
                                  </>
                                  )
                                })
                              }
                          </div>
                    
                    </div> 
                    <Data bgColor1={bgColor1} bgColor2={bgColor2} bgColor3={bgColor3} bgColor4={bgColor4}  />
                
                   
       
                </div>
              
                <div className='fixed top-[100px] right-5 z-10 flex flex-row-reverse bg-white'>
                  <div className='shadow-md bg-white rounded-full p-1 absolute'>
                      <MdOutlineKeyboardDoubleArrowRight size={20} color='#5156be'/>
                  </div>
                  <h3 className='text-2xl text-gray-700 mr-10 sm:text-md '>Mar</h3> 
                </div>
        
         </div> 
     </div>
   
  
  )
}