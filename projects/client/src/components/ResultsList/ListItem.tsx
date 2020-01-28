import React, { FC } from 'react';
import styles from './ListItem.module.css';

type ListItemProps = {
	result: any;
};

export const ListItem: FC<ListItemProps> = ({ result }) => {
	return (
		<div className={styles.item}>
			<div className={styles.trailImage}>
				{result.blocks.main &&
				result.blocks.main.elements[0] &&
				result.blocks.main.elements[0].assets[0] ? (
					<img src={result.blocks.main.elements[0].assets[0].file} />
				) : (
					<div>No Image</div>
				)}
			</div>
			<div>
				<h3>{result.fields.headline}</h3>
				<h4>{result.fields.byline}</h4>
				<div
					dangerouslySetInnerHTML={{
						__html: result.fields.trailText as string,
					}}
				/>
			</div>
		</div>
	);
};
