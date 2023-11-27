import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import './List.css';
import { useNavigate } from 'react-router-dom';



function List({dat}) {
     const nav = useNavigate()

    const Display =(id)=>{
       nav(`/details/${id}`)
    }
  return (
    <div className='container'>
        <div className='main'>
            <h1 className='header'>User Details</h1>
        </div>
        <div className='border'>
            {dat.map((res)=>{
                return(
                    <div key={res.id} className='details'>
                    <ul>
                        <li className='list'><h5>{res.name}</h5></li>
                        <li className='list'>{res.email}</li>
                        <li className='list'>{res.phone}</li>
                    </ul>
                    <button onClick={()=>Display(res.id)} className='icon'> <BsArrowRightCircle/> 
        </button>
                </div>

                )
            })}
       
        </div>
       
    </div>
  )
}

export default List

