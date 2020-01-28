import {
	CenteredPage,
	HeaderShell,
	InputSupper,
	QueryElement,
	Filter,
} from '@guardian/threads';
import React, { useState, useEffect } from 'react';
import { ResultsTable } from '../components/ResultsTable/ResultsTable';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { getFilters, doSearch } from '../services/Search';
import _ from 'lodash';

const debouncedSearch = _.debounce(doSearch, 1000);

export const App = () => {
	const [elements, setElements] = useState([] as QueryElement[]);
	const [filters, setFilters] = useState([] as Filter[]);

	useEffect(() => {
		getFilters().then(f => setFilters(f));
	}, []);

	return (
		<HeaderShell withTextLogo>
			<CenteredPage>
				<h1>Everything</h1>
				<InputSupper
					elements={elements}
					availableFilters={filters}
					onChange={e => {
						setElements(e);
						debouncedSearch(e);
					}}
				/>
				<hr />
				<ResultsList />
			</CenteredPage>
		</HeaderShell>
	);
};
