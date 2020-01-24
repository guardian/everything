import React, { useState } from 'react';

const MAX_PREVIEW_ROWS = 1000;

type ResultsTableProps = {
	results: any;
};

export const ResultsTable = () => {
	const [previewRows, setPreviewRows] = useState([]);
	const [columns, setColumns] = useState([]); // TODO add default columns

	const renderColumn = () => {
		return <div>CLUMN</div>;
	};

	return (
		<table>
			<thead>
				<tr>{columns.map(renderColumn)}</tr>
			</thead>
			<tbody>
				{previewRows.slice(0, MAX_PREVIEW_ROWS).map((row, i, previews) => {})}
			</tbody>
		</table>
	);
};
