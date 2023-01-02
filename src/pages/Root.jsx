import { Outlet } from 'react-router-dom';

import { Layout } from 'components/';

export const Root = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
