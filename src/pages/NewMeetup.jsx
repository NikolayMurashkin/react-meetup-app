import { useNavigate } from 'react-router-dom';

import { NewMeetupForm } from 'components/meetups/NewMeetupForm';

export const NewMeetupPage = () => {
	const navigate = useNavigate();

	const addMettupHandler = (meetupData) => {
		fetch(
			'https://react-getting-started-f9816-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-type': 'application/json',
				},
			}
		).then(() => {
			navigate('/all-meetups');
		});
	};
	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMettupHandler} />
		</section>
	);
};
