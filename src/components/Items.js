import { AiOutlinePlus, AiFillWechat  } from 'react-icons/ai'
import { BsChevronLeft  } from 'react-icons/bs'  


export default function Items() {
 
  const backNav = () => {
    window.history.back()
  }
  return (
    <div className=' fixed bottom-10 right-10 ' onClick={backNav}>
       <div className='w-14 h-14 rounded-lg shadow-lg  bg-white flex   items-center justify-center '>
          <BsChevronLeft size={30} color='#222'/>
       </div>
       <div className='w-14 h-14 rounded-lg bg-[#0f6da0]  my-5  flex items-center justify-center'>
          <AiOutlinePlus size={30} color='#fff'/> 
       </div>
       <div className='w-14 h-14 rounded-lg  bg-[#FFA800] flex items-center justify-center'>
          <AiFillWechat size={30} color='#fff'/>
       </div>
    </div>
  )
}