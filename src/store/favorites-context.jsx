import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
	const [userFavorites, setUserFavorites] = useState([]);

	function addFavoriteHandler(favoriteMeetup) {
		setUserFavorites((prevUserFavorites) => {
			localStorage.setItem(
				'userFavorites',
				JSON.stringify(prevUserFavorites.concat(favoriteMeetup))
			);
			return prevUserFavorites.concat(favoriteMeetup);
		});
	}
	function removeFavoriteHandler(meetupId) {
		setUserFavorites((prevUserFavorites) => {
			localStorage.setItem(
				'userFavorites',
				JSON.stringify(
					prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
				)
			);
			return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	}
	function itemIsFavoriteHandler(meetupId) {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		FavoritesContext: userFavorites,
		totalFavorites: userFavorites.lenght,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
}
