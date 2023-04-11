import { Button, Divider } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';
import { v4 as uuid } from 'uuid'
import Checklist from "./CheckList";

export default function Home(props) {
    const items = [
        { text: 'Travelers diarrhea antibiotic', category: 'very important' },
        { text: 'Suture/syringe kit', category: 'important' },
        { text: 'Medicine to prevent malaria', category: 'optional' },
        { text: 'Glasses', category: 'very important' },
        { text: 'Motion sickness medicine', category: 'important' },
        { text: 'Cough drops', category: 'important' },
        { text: 'Decongestant', category: 'important' },
        { text: 'Hand sanitizer or wipes', category: 'important' }
    ];
    const {newTrip} = props;
    const otherItems =[
        { text: 'Passport', category: 'very important' },
        { text: 'Visa', category: 'important' },
        { text: 'Travel Insurance', category: 'optional' },
        { text: 'International Driving Permit', category: 'very important' },
        { text: 'Charger', category: 'important' },
        { text: 'Extra Room in Your Luggage', category: 'important' },
        { text: 'Cards and money', category: 'important' },
        { text: 'Clothing', category: 'important' }
    ]
    const navigate = useNavigate()

  return (
    <div>Your trip count: {newTrip.length}
    <Button onClick={() => {navigate('/add')}}> Add </Button>
        {
            newTrip.map((item) => {
                console.log(item)
                return <div key={uuid()} style={{textAlign: 'center'}}>
                    <p> Country: {item.selectCountry} </p>
                    <p> Season: {item.season} </p>
                    <p> Transport: {item.transportName.join(', ')} </p>
                    <p> Start: {item.time.startDate.toString()} </p>
                    <p> End: {item.time.endDate.toString()} </p>
                    <h2>Checklist based on your input</h2>
                    <Checklist items={item.selectCountry=='Nigeria'?items:otherItems} />
                    <Divider />
                    </div>
            })
        }
    </div>
  )
}
