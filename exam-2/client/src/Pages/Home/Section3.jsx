import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import axios from 'axios'
import './home.css';
import CardItem from "../../Components/Card"
function Section3() {

    const [datas,setDatas]=useState([])
    const [search,setSearch]=useState([])
    const [test,setTest] =useState(false)
    const[sort,setSort] = useState([])
    const [toogle,settoggle]=useState(true)
    const [newdata,setNew] = useState([])


useEffect(()=>{axios.get("http://localhost:4000/userz")
.then(res=>{setNew(res.data);setDatas(res.data); })

},[])

const handleDelete =(id)=>{
    axios.delete(`http://localhost:4000/userz/${id}`)
    const deleteItem = datas.filter(x=>x._id!==id)
    setDatas(deleteItem)
}
 

const handleSearch = (e)=>{
  setTest(true)

 let arr = datas.filter(x=>x.name.toLowerCase().includes(e.target.value.toLowerCase()))
 setSearch(arr)
console.log(arr);


 



}
const handleSort = ()=>{
  settoggle(!toogle)
  console.log(toogle)
  // console.log(datas);
  if(toogle==true){
    setSort(datas.sort((a,b)=>a.price-b.price))
  }
  else{
    setDatas(newdata)
  }
  console.log(newdata);
  
 
 
}





  return (
    <>
   <div className='container ci '>
   <div> <input type="text" onChange={handleSearch} style={{}}/></div>
   <button onClick={handleSort}>filter</button>
   
   <div className='row rc'>
  
    

    {

test===false?
     datas.map((data,index) => (
      
      <CardItem key={index} data={data} index={index} handleDelete={handleDelete} />
     
  
        ) )
    

 :search.map((data,index) => (
      
      <CardItem key={index} data={data} index={index} handleDelete={handleDelete} />
     
  
        ) )
 }
    

       
        
        




   </div>
   

   </div>
    </>
  )
}

export default Section3