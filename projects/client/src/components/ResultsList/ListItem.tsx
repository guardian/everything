import React, { FC } from 'react';
import styles from './ListItem.module.css';
import { Button } from '@guardian/threads';
import { FaGlobeAfrica, FaEdit } from 'react-icons/fa';
import ImageViewer from 'react-simple-image-viewer';

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
	webPublicationDate: string;
};

export const ListItem: FC<ListItemProps> = ({ result }: { result: Result }) => {
	const webPublicationDate = new Date(result.webPublicationDate);
	const webUrl = `https://www.theguardian.com/${result.id}`;
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
					<a className={styles.headlineLink} href={webUrl}>
						<h3>{result.fields.headline}</h3>
					</a>
					<h4>{result.fields.byline}</h4>
					<div>
						{webPublicationDate.toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
							hour: '2-digit',
							minute: 'numeric',
							hour12: false,
						})}
					</div>
					<br />
					<div
						dangerouslySetInnerHTML={{
							__html: result.fields.trailText as string,
						}}
					/>
					<div>{newspaperInfo(result)}</div>
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
		return `Appeared on page ${pageNumber} of ${newspaperBook.webTitle}`;
	} else return '';
};
