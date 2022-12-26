import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const spaceXApi = createApi({
    reducerPath: 'spaceXApi',

    baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v3" }),

    endpoints: (builder) => ({

        v3Data: builder.query({
            query: () => {
                return{
                    url: "history",
                    method: "GET",
                    headers: {
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        v3Address: builder.query({
            query: () => {
                return{
                    url: "payloads",
                    method: "GET",
                    headers: {
                        "Content-type":"application/json"
                    }
                }
            }
        }),
    })

})

export const { useV3DataQuery, useV3AddressQuery } = spaceXApi