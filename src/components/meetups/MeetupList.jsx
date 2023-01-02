import classes from './MeetupList.module.css';
import { MeetupItem } from '../';

export const MeetupList = ({ meetups }) => {
	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => {
				return (
					<MeetupItem
						key={meetup.id}
						id={meetup.id}
						title={meetup.title}
						image={meetup.image}
						address={meetup.address}
						description={meetup.description}
					/>
				);
			})}
		</ul>
	);
};
