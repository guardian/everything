import {
	CenteredPage,
	HeaderShell,
	InputSupper,
	QueryElement,
	Filter,
} from '@guardian/threads';
import React, { useState, useEffect, useCallback } from 'react';
import { ResultsTable } from '../components/ResultsTable/ResultsTable';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { getFilters, doSearch } from '../services/Search';
import _ from 'lodash';

export const App = () => {
	const [elements, setElements] = useState([] as QueryElement[]);
	const [filters, setFilters] = useState([] as Filter[]);
	const [results, setResults] = useState([] as any[]);

	const debouncedSearch = useCallback(
		_.debounce(async (e: QueryElement[]) => {
			const result = await doSearch(e);
			setResults(result.hits);
		}, 1000),
		[]
	);

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
				<ResultsList results={results} />
			</CenteredPage>
		</HeaderShell>
	);
};
