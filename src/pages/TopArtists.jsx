import axios from 'axios';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import { ArtistCard, Error, Loader } from '../components'

const TopArtists = () => {
	const { data, isFetching, error } = useGetTopChartsQuery();


	if (isFetching) return <Loader title="Loading Top Charts" />

	if (error) return <Error />

	return (
		<>
			<div className='flex flex-col'>
				<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Top Artists</h2>

				<div className="flex flex-wrap sm:justify-start justify-center gap-8">
					{data?.map((track, i) => (
						<ArtistCard
							key={track.key}
							track={track}
							i={i}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default TopArtists;
