import React, { FC } from 'react';
import { ColumnDef, AVAILABLE_COLUMNS } from './ResultsTable';

import styles from './ColumnHeader.module.css';

type ColumnHeaderProps = {
	column: ColumnDef;
	index: number;
	columnCount: number;
	moveColumn: (index: number, offset: number) => void;
	updateColumnType: (index: number, type: ColumnDef) => void;
	deleteColumn: (index: number) => void;
};

export const ColumnHeader: FC<ColumnHeaderProps> = ({
	column,
	index,
	columnCount,
	moveColumn,
	updateColumnType,
	deleteColumn,
}) => {
	return (
		<th key={column.title + index}>
			<div className={styles.tableHeader}>
				{index > 0 ? (
					<div
						className={styles.emojiButton}
						onClick={() => moveColumn(index, -1)}
					>
						⬅️
					</div>
				) : (
					<div />
				)}
				<div className={styles.picker}>
					<select
						onChange={e =>
							updateColumnType(
								index,
								AVAILABLE_COLUMNS.find(
									c => c.path === e.target.value
								) as ColumnDef
							)
						}
						value={column.path}
					>
						{AVAILABLE_COLUMNS.map(c => (
							<option key={c.title} value={c.path}>
								{c.title}
							</option>
						))}
					</select>
					<div
						className={styles.emojiButton}
						onClick={() => deleteColumn(index)}
					>
						🗑️
					</div>
				</div>
				{index < columnCount - 1 ? (
					<div
						className={styles.emojiButton}
						onClick={() => moveColumn(index, 1)}
					>
						➡️️
					</div>
				) : (
					<div />
				)}
			</div>
		</th>
	);
};
