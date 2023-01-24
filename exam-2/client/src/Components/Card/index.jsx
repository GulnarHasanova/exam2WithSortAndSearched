import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Index({data,index,handleDelete}) {
  return (
    <Card sx={{ minWidth: 275 }} className="col-4 c4" key={index}>
     <Typography variant="h5" component="div">
            <img className='img' src= {data.img} alt="sekil" />
        
        </Typography>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         name:{data.name}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        job: {data.job}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        price: {data.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <button className='btn btn-danger' onClick={()=>{
        handleDelete(data._id)
       }}>delete</button>
        </Typography>
        
      </CardContent>
     
    </Card>
  )
}

export default Index