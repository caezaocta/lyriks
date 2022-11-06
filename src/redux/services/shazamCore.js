import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// fetchBaseQuery
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'df1322a50fmsh744205da4cf6687p11df9bjsne48644751094');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/world'
        }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;