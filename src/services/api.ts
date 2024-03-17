import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Plate } from '../models/plate'
import { Restaurant } from '../pages/Home/Home'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) =>({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getPlate: builder.query<Plate, string>({
      query: (id) => `jogo/${id}`
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {useGetRestaurantsQuery,useGetRestaurantQuery, useGetPlateQuery} = api
