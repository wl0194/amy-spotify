import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0d2388da58msh334bf8b9b3f6ddcp188b84jsn9c9f16dd02fc')

            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;