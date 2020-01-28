import React, { FC } from 'react';
import styles from './ListItem.module.css';

type ListItemProps = {
	result: any;
};

export const ListItem: FC<ListItemProps> = ({ result }) => {
	return (
		<div>
			<div>
				{result.blocks.main &&
				result.blocks.main.elements[0] &&
				result.blocks.main.elements[0].assets[0] ? (
					<img
						className={styles.trailImage}
						src={result.blocks.main.elements[0].assets[0].file}
					/>
				) : null}
			</div>
			<div>
				<h3>{result.fields.headline}</h3>
				<strong>{result.fields.byline}</strong>
				<div>{result.fields.trailText}</div>
			</div>
		</div>
	);
};
