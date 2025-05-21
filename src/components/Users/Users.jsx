import axios from 'axios'
import React, { useEffect, useState} from 'react'


const Users = () => {
    const [data, setData ] = useState(null)

    useEffect(() =>{
      axios
       .get("https://dummyjson.com/users")
       .then(res =>{
          setData(res.data)
       })
       .catch((err) => {
        console.log(err);
    
       })
       .finally()
    }, [])
  return (
   <div className='grid grid-cols-4 gap-3 container '>
     {
      data?.users?.map((item) =>(
        <div key={item.id}>
            <div className="users container my-10 max-w-sm w-full  bg-white rounded-3xl shadow-xl p-8 ">
       <div className="flex flex-col items-center">
        <img 
          src={item.image}
          alt="User avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mb-4"  
        />
        <h3 className="text-2xl font-semibold text-gray-800">{item.firstName} {item.lastName}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.company.title }</p>

        <div className="mt-4 w-full flex justify-around text-sm text-gray-600">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-blue-600">{item.age}</span>
            <span>Age</span>     
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-blue-600">{item.height}</span>
            <span>Height</span>
          </div>
          <div className="flex flex-col items-center">  
            <span className="font-semibold text-blue-600">{item.birthDate}</span>
            <span>Birth date</span>
          </div>
        </div>

        <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 shadow">
          View Profile
        </button>
      </div>
      
    </div> 
        </div>
      ))
     }
   </div>
  
  )
}

export default Users