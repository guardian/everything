import React, { FC } from 'react';
import { ListItem } from './ListItem';

type ResultsListProps = {
	results: any[];
};

export const ResultsList: FC<ResultsListProps> = ({ results }) => {
	return (
		<div>
			{results.map(r => (
				<ListItem result={r} />
			))}
		</div>
	);
};
