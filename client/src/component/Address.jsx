import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SingleAddress from "./SingleAddress"
import { useV3AddressQuery } from '../services/spacex'

function Address() {

    const {data, isSuccess, isLoading} = useV3AddressQuery()
    // console.log(data)

    const [allData, setAllData] = useState({
        result: []
    })

    useEffect(() => {

        if(data && isSuccess){ 
         setAllData({
            result: data
         })
        }
    }, [data, isSuccess])

    const { result } = allData

    if(isLoading) return "Loading...." ;
    

  return (
    <div className='container'>
            <h1>All Address</h1>
        <div className="container my-5 w-25">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
        </div>
        <div className="row my-5">
            <div className="col-lg-12 d-flex flex-wrap items-container mx-5">
                { result.map((r) => {
                    return ( <SingleAddress r={r} /> )
                }) }
            </div>
        </div>
    </div>
  )
}

export default Address