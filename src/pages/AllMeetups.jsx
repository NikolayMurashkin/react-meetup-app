import { useState, useEffect } from 'react';

import { MeetupList } from 'components';

export const AllMeetupsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [meetupData, setMeetupData] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			'https://react-getting-started-f9816-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				setMeetupData(Object.values(data));
			});
	}, []);
	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups Page</h1>
			<MeetupList meetups={meetupData} />
		</section>
	);
};
