import { useState } from "react"



export default function Month() {
 
  const month = [
    {
      id: 1,
      name : 'Sun'  
    },
    {  
        id : 2,
        name : 'Mon'  
    },
    {
        id : 3,
        name : 'Tue', 
    },
    {
        id : 4,
        name : 'Wed'  
    },
    {
        id : 5,
        name : 'Thu'  
    },
    {
        id : 6,
        name : 'Fri', 
    },
    {
        id : 7,
        name : 'Sat', 
    }, 
    {
      id : 8,
      name : 'Sun'  
    },
    {
       id : 9,
        name : 'Mon'  
    },
    {
      id : 10,
        name : 'Tue', 
    },
    {
        id : 11,
        name : 'Wed'  
    },
    {
        id : 12,
        name : 'Thu'  
    },
    {
        id : 13,
        name : 'Fri', 
    }, 
    { 
        id :14,
      name : 'Sat', 
    }, 
    {
        id : 15,
      name : 'Sun'  
    },
    {
        id : 16,
        name : 'Mon'  
    },
    {
        id : 17,
        name : 'Tue', 
    },
    {
        id :18,
        name : 'Wed'  
    },
    {
        id : 19, 
        name : 'Thu'  
    },
    {
        id : 20,
        name : 'Fri', 
    },
    {
      id: 21,
      name : 'Sat', 
    }, 
    {
      id : 22,
      name : 'Sun'  
    },
    {
        id : 23,
        name : 'Mon'  
    },
    {
        id : 24,
        name : 'Tue', 
    }, 
    {
        id : 25 ,
        name : 'Wed'  
    },
    {
        id : 26,
        name : 'Thu'  
    },
    {
        id : 27,
        name : 'Fri', 
    },
    {
      id : 28,
      name : 'Sat', 
    }, 
    {
       id : 29,
      name : 'Sun'  
    },
    {
        id : 30,
        name : 'Mon'  
    },
    {
        id : 31,
        name : 'Tue', 
    },
 
 ]
 

 const [activeId, setActiveId] = useState()


  return (
    <div className=" horizontal-scroll-wrapper z-50  px-5">
    
          {
    
              month.map((item, index) => (
                <div key={item.id} className= { `mr-[80px] p-2 ${activeId === item.id ?
                 "text-blue-500 scale-[1.2] " : " text-gray-600"}  ` } onClick={() => setActiveId(item.id)}>
                     <p className={`${activeId === item.id ? 'text-blue-500': 'text-gray-500'} text-lg`}> {item.name}</p>
                     <p className="text-2xl sm:text-md text-center "> {index + 1}</p>
                </div>
              ))
           
          }
          
    </div>
  )
}