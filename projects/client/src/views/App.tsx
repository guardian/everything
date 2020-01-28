import {
	CenteredPage,
	HeaderShell,
	InputSupper,
	QueryElement,
	Filter,
	Button,
} from '@guardian/threads';
import React, { useState, useEffect, useCallback } from 'react';
//import { ResultsTable } from '../components/ResultsTable/ResultsTable';
import { ResultsList } from '../components/ResultsList/ResultsList';
import { getFilters, doSearch } from '../services/Search';
import _ from 'lodash';
import styles from './App.module.css';

import { MdDashboard, MdList, MdStayPrimaryLandscape } from 'react-icons/md';

export const App = () => {
	const [mode, setMode] = useState('review' as 'review' | 'table');
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
				<div className={styles.container}>
					<div className={styles.topbit}>
						<InputSupper
							elements={elements}
							availableFilters={filters}
							onChange={e => {
								setElements(e);
								debouncedSearch(e);
							}}
						/>
						<div className={styles.controls}>
							<Button
								disabled={mode === 'review'}
								icon={<MdDashboard />}
								onClick={() => setMode('review')}
								title="Review"
							>
								Review
							</Button>
							<Button
								disabled={mode === 'table'}
								icon={<MdList />}
								title="Table"
								onClick={() => setMode('table')}
							>
								Table
							</Button>
						</div>
					</div>
					{mode === 'review' ? (
						<ResultsList results={results} />
					) : (
						<div>table goes here</div>
					)}
				</div>
			</CenteredPage>
		</HeaderShell>
	);
};
