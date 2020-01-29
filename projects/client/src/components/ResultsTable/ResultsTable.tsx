import React, { useState, FC } from 'react';
import { Table, Button } from '@guardian/threads';
import { ColumnHeader } from './ColumnHeader';
import _ from 'lodash';
import { MdPlaylistAdd } from 'react-icons/md';
import styles from './ResultsTable.module.css';

export type ColumnDef = {
	path: string;
	title: string;
};
const COLUMN_ID = { path: 'id', title: 'Path' };
const COLUMN_HEADLINE = { path: 'fields.headline', title: 'Headline' };
const COLUMN_BYLINE = { path: 'fields.byline', title: 'Byline' };
const COLUMN_WEB_PUBLICATION_DATE = {
	path: 'webPublicationDate',
	title: 'Web Publication Date',
};
const COLUMN_NEWSPAPER_PAGE = {
	path: 'fields.newspaperPageNumber',
	title: 'Newspaper Page',
};

//Special columns
const COLUMN_HYPERLINK = { path: '>hyperlink', title: 'Hyperlink' };

export const AVAILABLE_COLUMNS = [
	COLUMN_ID,
	COLUMN_HEADLINE,
	COLUMN_BYLINE,
	COLUMN_HYPERLINK,
	COLUMN_WEB_PUBLICATION_DATE,
	COLUMN_NEWSPAPER_PAGE,
];

type ResultsTableProps = {
	results: any[];
};

export const ResultsTable: FC<ResultsTableProps> = ({ results }) => {
	const [columns, setColumns] = useState([COLUMN_ID, COLUMN_HYPERLINK]); // TODO add default columns

	const addColumn = () => {
		setColumns(() => [...columns, COLUMN_ID]);
	};

	const moveColumn = (index: number, offset: number) => {
		const clone = [...columns];
		const tmp = clone[index + offset];
		clone[index + offset] = clone[index];
		clone[index] = tmp;
		setColumns(() => clone);
	};

	const updateColumnType = (index: number, type: ColumnDef) => {
		const n = [...columns];
		n[index] = type;
		setColumns(() => n);
	};

	const deleteColumn = (index: number) => {
		setColumns(() => [...columns.slice(0, index), ...columns.slice(index + 1)]);
	};

	return (
		<div className={styles.container}>
			<Button>Copy to Clipboard</Button>
			<Table>
				<thead>
					<tr>
						{columns.map((c: ColumnDef, i: number) => (
							<ColumnHeader
								key={i}
								column={c}
								index={i}
								columnCount={columns.length}
								moveColumn={moveColumn}
								updateColumnType={updateColumnType}
								deleteColumn={deleteColumn}
							/>
						))}
						<td>
							<Button
								className={styles.newColumnButton}
								icon={<MdPlaylistAdd />}
								onClick={addColumn}
							>
								Add Column
							</Button>
						</td>
					</tr>
				</thead>
				<tbody>
					{results.map((row: any, i: number) => {
						return (
							<tr key={row.id}>
								{columns.map(column => (
									<td key={column.path}>
										{column.path === '>hyperlink' ? (
											<a
												href={`https://theguardian.com/${row.id}`}
												rel="noopener noreferrer"
												target="_blank"
											>
												Open on site
											</a>
										) : _.get(row, column.path) ? (
											_.get(row, column.path)
										) : (
											'Unknown field: ' + column.title
										)}
									</td>
								))}
								<td />
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
