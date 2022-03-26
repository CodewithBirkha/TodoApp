import React from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'


const ItemPage = () => {
const {id}=useParams()
const [item,setItem]=useEffect({})
useEffect(()=>{
    fetchItem() 
},[])
const fetchItem=async()=>{
    const res=await fetch(`http://localhost:5000/items`)
    const data = await res.json()
    setItem(data)

}

//useRef
//usememo

  return (
      <>
      <h2>{id}</h2>
      <div></div>
      </>
    
  )
}

export default ItemPage