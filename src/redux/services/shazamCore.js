import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// fetchBaseQuery
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'df1322a50fmsh744205da4cf6687p11df9bjsne48644751094');
            // 'X-RapidAPI-Host', 'shazam.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => 'v1/charts/world'
        }),
        getSongDetails: builder.query({
            query: ({ songid }) => `v1/tracks/details?track_id=${songid}`
        }),
        getSongRelated: builder.query({
            query: ({ songid }) => `v1/tracks/related?track_id=${songid}`
        }),
        getArtistDetails: builder.query({
            query: (artistId) => `v2/artists/details?artist_id=${artistId}`
        }),
        getSongsByCountry: builder.query({
            query: (countryCode) => `v1/charts/country?country_code=${countryCode}`
        })
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery
} = shazamCoreApi;