import { useContext } from 'react';

import { MeetupList } from 'components';
import { FavoritesContext } from 'store/favorites-context';

export const FavoritesPage = () => {
	const favoritesCtx = useContext(FavoritesContext);

	let content;
	const localStorageItems = JSON.parse(localStorage.getItem('userFavorites'));

	if (localStorageItems && localStorageItems.length > 0) {
		content = <MeetupList meetups={localStorageItems} />;
	} else {
		content = <p>You got no favorites yet. Start adding some?</p>;
	}

	return (
		<section>
			<h1>Favorites Page</h1>
			{content}
		</section>
	);
};
