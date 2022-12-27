import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useV3DataQuery } from '../services/spacex'
import Events from './Events'


function Homer() {
  const {data, isSuccess, isLoading} = useV3DataQuery()
  const [events, setEvents] =  useState({
    title: [],
  })
  const { title } = events
  const [search, setSearch] =  useState("")
  
  useEffect(() => {
    if( data && isSuccess){
      setEvents({
        title: data
      })
    }

    // const filterData = title.filter((item) => item.title.toLocaleLowerCase().includes(setSearch))
    // setEvents({
    //   title: filterData
    // })


  }, [data, isSuccess])

  if(isLoading) return "Loading...." ;

  return (
    <div className='container' >
      <h1>All Events</h1>
      <div className="container my-5 w-25">
        <input 
          class="form-control me-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase()) }
          />
        </div>
      <div className="row my-5">
          <div className="col-lg-12 col-sm-12 d-flex flex-wrap items-container mx-5">
          { title.map((t) => {
            return ( <Events t={t} key={t.id} /> )
          } ) }
          </div>
        </div>
    </div>
  )
}

export default Homer