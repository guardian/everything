import { AppContext, FullScreenApp } from '@guardian/threads';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './views/App';
import './hacks.css';

const appContext = {
	name: 'Everything',
	logoSvg: 'computer.gif',
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
