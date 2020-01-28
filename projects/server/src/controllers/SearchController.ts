import { Request, Response } from 'express';
import { Elasticsearch } from '../services/Elasticsearch';
import { Filters } from '../utils/Filters';
import { QueryElement } from '@guardian/threads';

export class SearchController {
	es: Elasticsearch;

	constructor(es: Elasticsearch) {
		this.es = es;
	}

	postSearch = () => [
		async (req: Request, res: Response) => {
			const { elements } = req.body;
			const query = elements.reduce((acc: string, e: QueryElement) => {
				if (e.type === 'filter') {
					const filter = Filters.allFilters.find(f => f.name === e.name);
					const boolz = e.negate ? '-' : '';

					if (filter) {
						return acc + ' ' + boolz + filter.template.replace('{}', e.value);
					}
				} else {
					return acc + ' ' + e.value;
				}
			}, '');
			const results = await this.es.search(query);

			return res.json(results).send();
		},
	];

	getFilters = () => [
		(req: Request, res: Response) => {
			return res.json(Filters.clientFilters).send();
		},
	];
}
