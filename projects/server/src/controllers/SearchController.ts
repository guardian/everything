import { Request, Response } from 'express';
import { Elasticsearch } from '../services/Elasticsearch';
import { Filters } from '../utils/Filters';
import { QueryElement } from '@guardian/threads';
import { dummyData } from '../controllers/result';
import fetch from 'node-fetch';
export class SearchController {
	es: Elasticsearch;

	constructor(es: Elasticsearch) {
		this.es = es;
	}

	postSearch = () => [
		async (req: Request, res: Response) => {
			console.log('searching');
			// const { elements } = req.body;
			// console.log(elements);
			// const query = elements.reduce((acc: string, e: QueryElement) => {
			// 	if (e.type === 'filter') {
			// 		const filter = Filters.allFilters.find(f => f.name === e.name);
			// 		const boolz = e.negate ? '-' : '';

			// 		if (filter) {
			// 			return acc + ' ' + boolz + filter.template.replace('{}', e.value);
			// 		}
			// 	} else {
			// 		return acc + ' ' + e.value;
			// 	}
			// }, '');
			// console.log(query);
			// const results = await this.es.search(query);

			// return res.json(results);
			const result = await fetch(
				'https://gist.githubusercontent.com/itsibitzi/bd0ed117ce3bd1aa0acdf03db581539f/raw/c99984b0251ada56e8f5c21a2bed51cb61d2f8c8/example.json'
			)
				.then(r => r.json())
				.then(r => {
					console.log(r);
					return r;
				})
				.catch(e => console.error(e));
			return res.json(result).send();
		},
	];

	getFilters = () => [
		(req: Request, res: Response) => {
			return res.json(Filters.clientFilters);
		},
	];
}
