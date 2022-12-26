import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useV3DataQuery } from '../services/spacex'
import Events from './Events'


function Homer() {

  const {data, isSuccess} = useV3DataQuery()

  const [events, setEvents] =  useState({
    title: [],
  })
  
  useEffect(() => {

    if( data && isSuccess){
      setEvents({
        title: data
      })
    }

  }, [data, isSuccess])

  const { title } = events
  // console.log(title)

  return (
    <div className='container' >
      <h1>All Events</h1>
      <div className="row">
        <div className="col-lg-12 ">

          { title.map((t) => {
            return ( <Events t={t} key={t.id} /> )
          } ) }

        </div>
      </div>
    </div>
  )
}

export default Homer