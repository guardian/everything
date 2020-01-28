import React, { FC } from 'react';
import styles from './ListItem.module.css';

type ListItemProps = {
	result: Result;
};

type Tag = {
	id: string;
	type: string;
	webTitle: string;
};

type Fields = {
	headline: string;
	byline: string;
	trailText: string;
	newspaperPageNumber: number;
};

type TypeData = {
	altText: string;
	caption?: string;
	credit?: string;
	width: string;
	height: string;
	source: string;
};

type Asset = {
	type: string;
	file: string;
	typeData: TypeData;
};

type Element = {
	id: string;
	type: string;
	assets: Asset[];
};

type Block = {
	elements: Element[];
};

type Blocks = {
	main: Block;
	body: Block;
};

export type Result = {
	fields: Fields;
	tags: Tag[];
	id: string;
	blocks: Blocks;
};

export const ListItem: FC<ListItemProps> = ({ result }: { result: Result }) => {
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

const newspaperInfo = (content: Result) => {
	const newspaperBook: Tag | undefined = content.tags.find(
		t => t.type === 'newspaper-book'
	);
	const pageNumber = content.fields.newspaperPageNumber;

	if (pageNumber && newspaperBook) {
		console.log(`Appeared on page ${pageNumber} of ${newspaperBook.webTitle}`);
	}
};
