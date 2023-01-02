import { Outlet, Link } from 'react-router-dom';

export const MainNavigation = () => {
	return (
		<header>
			<div>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/all-meetups'}>All Meetups</Link>
					</li>
					<li>
						<Link to={'/new-meetup'}>New Meetup</Link>
					</li>
					<li>
						<Link to={'/favorites'}>Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
