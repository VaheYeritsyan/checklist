import { Button, Divider } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import { v4 as uuid } from 'uuid'

export default function Home(props) { 
    const {newTrip} = props;
    const navigate = useNavigate()

  return (
    <div>Your trip count: {newTrip.length}
    <Button onClick={() => {navigate('/add')}}> Add </Button>
        {
            newTrip.map((item) => {
                return <div key={uuid()} style={{textAlign: 'center'}}>
                    <p> Country: {item.selectCountry} </p>
                    <p> Season: {item.season} </p>
                    <p> Transport: {item.transportName.join(', ')} </p>
                    <p> Start: {item?.time[0]?.$M + 1}/ {item?.time[0]?.$D} /{item?.time[0]?.$y} </p>
                    <p> End: {item?.time[1]?.$M + 1}/{item?.time[1]?.$D}/{item?.time[1]?.$y} </p>
                    <Divider />
                    </div>
            })
        }
    </div>
  )
}
