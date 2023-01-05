import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import { Card } from 'components/index';
import { FavoritesContext } from 'store/favorites-context';

export const MeetupItem = ({ id, title, image, address, description }) => {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
	const localStorageItems = JSON.parse(localStorage.getItem('userFavorites'));

	function toggleFavoritesStatusHandler() {
		if (
			localStorageItems &&
			localStorageItems.length > 0 &&
			localStorageItems.some((meetup) => meetup.id === id)
		) {
			favoritesCtx.removeFavorite(id);
		} else {
			favoritesCtx.addFavorite({
				id,
				title,
				image,
				address,
				description,
			});
		}
	}

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
					<button onClick={toggleFavoritesStatusHandler}>
						{localStorageItems &&
						localStorageItems.length > 0 &&
						localStorageItems.some((meetup) => meetup.id === id)
							? 'Remove from Favorites'
							: 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
};
