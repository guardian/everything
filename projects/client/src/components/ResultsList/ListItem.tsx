import React, { FC } from 'react';
import styles from './ListItem.module.css';
import { Button } from '@guardian/threads';
import { FaGlobeAfrica, FaEdit } from 'react-icons/fa';

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
	internalComposerCode: string;
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
			<div className={styles.sideInfo}>
				<div>
					<h3>{result.fields.headline}</h3>
					<h4>{result.fields.byline}</h4>
					<div
						dangerouslySetInnerHTML={{
							__html: result.fields.trailText as string,
						}}
					/>
				</div>
				<div className={styles.buttons}>
					<Button
						href={`https://www.theguardian.com/${result.id}`}
						title={'visit'}
						icon={<FaGlobeAfrica />}
					>
						View
					</Button>
					<Button
						href={`https://composer.gutools.co.uk/content/${result.fields.internalComposerCode}`}
						title={'visit'}
						icon={<FaEdit />}
					>
						Edit
					</Button>
				</div>
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
