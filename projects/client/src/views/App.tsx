import {
	CenteredPage,
	HeaderShell,
	InputSupper,
	QueryElement,
	Filter,
} from '@guardian/threads';
import React, { useState } from 'react';
import { ResultsTable } from '../components/ResultsTable/ResultsTable';
import { ResultsList } from '../components/ResultsList/ResultsList';

const filters = [
	{ name: 'Contributor', type: 'text' },
	{ name: 'Byline', type: 'text' },
	{ name: 'Newspaper Page', type: 'text' },
] as Filter[];

export const App = () => {
	const [elements, setElements] = useState([] as QueryElement[]);

	return (
		<HeaderShell withTextLogo>
			<CenteredPage>
				<h1>Everything</h1>
				<InputSupper
					elements={elements}
					availableFilters={filters}
					onChange={setElements}
				/>
				<hr />
				<ResultsList />
			</CenteredPage>
		</HeaderShell>
	);
};
