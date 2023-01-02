import classes from './MeetupItem.module.css';
import { Card } from '../';

export const MeetupItem = ({ id, title, image, address, description }) => {
	return (
		<li key={id} className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button>To Favorites</button>
				</div>
			</Card>
		</li>
	);
};