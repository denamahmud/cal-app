import Image from 'next/image'
import React, {useState } from 'react'
import image from '../../public/person.jpg' 
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'; 

function Data({ bgColor1, bgColor2, bgColor3 , bgColor4 }) {

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false) 


  const showFun1 = () => {
    setShow1(!show1) 
  }
  const showFun2 = () => { 
    setShow2(!show2) 
  }
  const showFun3 = () => { 
    setShow3(!show3) 
  }
  const showFun4 = () => {
  
    setShow4(!show4)
  }


  return (
    <div className=' px-10 relative flex flex-col'>
          <div className='w-[3500px] flex h-24 border-y border-lightGray'>
              <div className= 'absolute mx-4 my-2 text-white z-10 stylebox1' >
                        <div className={`h-full w-full ${show1 ? 'ml-32' : 'ml-0'} duration-300 absolute rounded-full flex items-center justify-end px-4 py-2 `} style={{ backgroundImage : bgColor1, opacity : 0.6}}>
                              <p>Surgery at</p>
                              <br/>
                              <p>8PM</p>
                        </div>

                        <div className={`relative flex items-center justify-between px-4 py-2 rounded-full  `} style={{ backgroundImage : bgColor1}}>
                                  <div className='flex items-center gap-4'>  
                                            <div className='w-16 h-16 overflow-hidden rounded-full'>
                                                <Image src={image} alt='image'/>
                                            </div>
                                            <div className='info'>
                                                      <h5>Haider Fadel Jasim</h5>
                                                      <p>New Patient & Surgery</p>
                                            </div>

                                  </div> 

                                  <div className={` duration-300 w-8 h-8 rounded-full bg-white flex items-center justify-center ${show1 ? 'rotate-180':''}`} onClick={showFun1}>
                                      <MdKeyboardDoubleArrowDown color='#5156be' size={20}/>
                                  </div>
                                
                                
                        </div>
                        <div className={`${show1 ? '  top-[110%] z-10 opacity-100 duration-300 p-2  ' : '  top-0 -z-10 opacity-0 h-0 overflow-hidden p-0 duration-300  '} absolute w-full  left-0 rounded-lg min-w-44 `} style={{ backgroundImage : bgColor1, opacity : 0.6}}>
                                    <h3 className='font-bold text-xl'>DX:</h3> 
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam! Nulla qui delectus sunt, incidunt fuga itaque quo vel quis laboriosam dolor, blanditiis minus corrupti magni autem quod earum doloribus!</p>
                        </div>
                      
              </div> 

              <div className='absolute mx-4 my-2 text-white z-10 stylebox2' >
                        <div className={`h-full w-full ${show2 ? 'ml-32' : 'ml-0'} duration-300 absolute rounded-full flex items-center justify-end px-4 py-2 `} style={{ backgroundImage : bgColor2, opacity : 0.6}}>
                              <p>Surgery at</p>
                              <br/>
                              <p>8PM</p>
                        </div>

                        <div className='relative flex items-center justify-between px-4 py-2 rounded-full' style={{ backgroundImage : bgColor2}}>
                                  <div className='flex items-center gap-4'>  
                                            <div className='w-16 h-16 overflow-hidden rounded-full'>
                                                <Image src={image} alt='image'/>
                                            </div>
                                            <div className='info'>
                                                      <h5>Haider Fadel Jasim</h5>
                                                      <p>New Patient & Surgery</p>
                                            </div>

                                  </div> 

                                  <div className={`duration-300 w-8 h-8 rounded-full bg-white flex items-center justify-center ${show2 ? 'rotate-180':''}`} onClick={showFun2}>
                                      <MdKeyboardDoubleArrowDown color='#5156be' size={20}/>
                                  </div>
                                
                                
                        </div>
                        <div className={`${show2 ? '  top-[110%] z-10 opacity-100 duration-300 p-2  ' : '  top-0 -z-10 opacity-0 h-0 overflow-hidden p-0 duration-300  '} absolute w-full  left-0 rounded-lg min-w-44 ` } style={{ backgroundImage : bgColor2, opacity : 0.6}}>
                                    <h3 className='font-bold text-xl'>DX:</h3> 
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam! Nulla qui delectus sunt, incidunt fuga itaque quo vel quis laboriosam dolor, blanditiis minus corrupti magni autem quod earum doloribus!</p>
                        </div>
                      
              </div> 
                       
          </div>

          <div className=' w-[3500px] flex h-24 border-y border-lightGray' >
              <div className='absolute mx-4 my-2 text-white z-10 stylebox3' >
                        <div className={`h-full w-full ${show3 ? 'ml-32' : 'ml-0'} duration-300 absolute rounded-full flex items-center justify-end px-4 py-2 `} style={{ backgroundImage : bgColor3, opacity : 0.6}}>
                              <p>Surgery at</p>
                              <br/>
                              <p>8PM</p>
                        </div>

                        <div className='relative flex items-center justify-between px-4 py-2 rounded-full' style={{ backgroundImage : bgColor3}}>
                                  <div className='flex items-center gap-4'>  
                                            <div className='w-16 h-16 overflow-hidden rounded-full'>
                                                <Image src={image} alt='image'/>
                                            </div>
                                            <div className='info'>
                                                      <h5>Haider Fadel Jasim</h5>
                                                      <p>New Patient & Surgery</p>
                                            </div>

                                  </div> 

                                  <div className={`duration-300 w-8 h-8 rounded-full bg-white flex items-center justify-center ${show3 ? 'rotate-180':''}`} onClick={showFun3}>
                                      <MdKeyboardDoubleArrowDown color='#5156be' size={20}/>
                                  </div>
                                
                                
                        </div>
                        <div className={`${show3 ? '  top-[110%] z-10 opacity-100 duration-300 p-2  ' : '  top-0 -z-10 opacity-0 h-0 overflow-hidden p-0 duration-300  '} absolute w-full  left-0 rounded-lg min-w-44 ` } style={{ backgroundImage : bgColor3, opacity : 0.6}}>
                                  <h3 className='font-bold text-xl'>DX:</h3> 
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam! Nulla qui delectus sunt, incidunt fuga itaque quo vel quis laboriosam dolor, blanditiis minus corrupti magni autem quod earum doloribus!</p>
                        </div>
                      
              </div> 
          </div>

          
          <div className=' w-[3500px] flex h-24 border-y border-lightGray z-50 ' >
          <div className='absolute mx-4 my-2 text-white z-10 stylebox4' >
                        <div className={`h-full w-full ${show4 ? 'ml-32' : 'ml-0'} duration-300 absolute rounded-full flex items-center justify-end px-4 py-2 `} style={{ backgroundImage : bgColor4, opacity : 0.6}}>
                              <p>Surgery at</p>
                              <br/>
                              <p>8PM</p>
                        </div>

                        <div className='relative flex items-center justify-between px-4 py-2 rounded-full' style={{ backgroundImage : bgColor4}}>
                                  <div className='flex items-center gap-4'>  
                                            <div className='w-16 h-16 overflow-hidden rounded-full'>
                                                <Image src={image} alt='image'/>
                                            </div>
                                            <div className='info'>
                                                      <h5>Haider Fadel Jasim</h5>
                                                      <p>New Patient & Surgery</p>
                                            </div>

                                  </div> 

                                  <div className={`duration-300 w-8 h-8 rounded-full bg-white flex items-center justify-center ${show4 ? 'rotate-180':''} `} onClick={showFun4}>
                                      <MdKeyboardDoubleArrowDown color='#5156be' size={20}/>
                                  </div>
                                
                                
                        </div>
                        <div className={`${show4 ? 'top-[110%] z-10 opacity-100 duration-300 p-2  ' : '  top-0 -z-10 opacity-0 h-0 overflow-hidden p-0 duration-300  '} absolute w-full  left-0 rounded-lg min-w-44 ` } style={{ backgroundImage : bgColor4, opacity : 0.6}}>
                                  <h3 className='font-bold text-xl'>DX:</h3> 
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, totam! Nulla qui delectus sunt, incidunt fuga itaque quo vel quis laboriosam dolor, blanditiis minus corrupti magni autem quod earum doloribus!</p>
                        </div>
                      
              </div> 
          </div>
    </div>
  )
}

export default Data