import { useContext } from 'react';

import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { FavoritesContext } from 'store/favorites-context';

export const MainNavigation = () => {
	const favoritesCtx = useContext(FavoritesContext);

	const localStorageItems = JSON.parse(localStorage.getItem('userFavorites'));

	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to={'/all-meetups'}>All Meetups</Link>
					</li>
					<li>
						<Link to={'/new-meetup'}>New Meetup</Link>
					</li>
					<li>
						<Link to={'/favorites'}>
							My Favorites
							{localStorageItems &&
							localStorageItems.length > 0 ? (
								<span className={classes.badge}>
									{localStorageItems.length}
								</span>
							) : null}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
