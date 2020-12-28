import HelloWorld from '../partials/HelloWorld/HelloWorld';

import ROUTE_PATHS from './routeConstants';

const COMPONENTS = {
	[ROUTE_PATHS.HELLO_WORLD]: {
		fragment: HelloWorld,
		fragmentName: 'HelloWorld',
		name: 'HELLO_WORLD',
    status: 'dev',
    isMobileFragment: false,
	},
};

export default COMPONENTS;
