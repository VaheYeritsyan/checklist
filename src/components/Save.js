import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SnackbarInfo from './Snackbar';

export default function Save(props) {
    const {select, setSelectSeason, transportName, setTransportName, selectCountry, setSelectCountry, newTrip, setNewTrip, selectDate} = props;
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const disabled = !select.length || !transportName.length || !selectCountry || !selectDate.startDate || !selectDate.endDate
    const onSave = async() => {
        await setNewTrip([...newTrip, {season: select, transportName: transportName, selectCountry: selectCountry, time: selectDate}])
        await setSuccess(true)
       await setTimeout(() => {
          navigate('/')
          setSelectSeason('')
          setTransportName([])
          setSelectCountry('')

        }, 1500)
    }
  return (
    <div>
        <Button variant='contained' disabled={disabled} onClick={onSave}> Save </Button>
        { (disabled) && <p style={{color: 'red'}}> *All fields are mandatory</p>}
        {success && <SnackbarInfo />}
    </div>
  )
}
