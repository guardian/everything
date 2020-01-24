import { AppContext, FullScreenApp } from '@guardian/threads';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './views/App';

const appContext = {
	name: 'Everything',
	logoSvg: 'ferret.svg',
};

export const history = createBrowserHistory();

render(
	<AppContext.Provider value={appContext}>
		<Router history={history}>
			<FullScreenApp>
				<App />
			</FullScreenApp>
		</Router>
	</AppContext.Provider>,
	document.getElementById('root')
);