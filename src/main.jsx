import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { FavoritesPage, NewMeetupPage, AllMeetupsPage, Root } from './pages';
import { FavoritesContextProvider } from 'store/favorites-context';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'all-meetups',
				element: <AllMeetupsPage />,
			},
			{
				path: 'new-meetup',
				element: <NewMeetupPage />,
			},
			{
				path: 'favorites',
				element: <FavoritesPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FavoritesContextProvider>
			<RouterProvider router={router} />
		</FavoritesContextProvider>
	</React.StrictMode>
);
