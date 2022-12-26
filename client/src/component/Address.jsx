import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SingleAddress from "./SingleAddress"
import { useV3AddressQuery } from '../services/spacex'

function Address() {

    const {data, isSuccess} = useV3AddressQuery()
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
    

  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                { result.map((r) => {
                    return ( <SingleAddress r={r} /> )
                }) }
            </div>
        </div>
    </div>
  )
}

export default Address