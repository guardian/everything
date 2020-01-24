import { Request, Response } from 'express';

export class SearchController {
	filters = [
		{
			name: 'Headline',
			type: 'text',
			template: '(fields.headline:({}))',
		},
		{
			name: 'Byline',
			type: 'text',
			template: '(fields.byline:({}))',
		},
		{
			name: 'Standfirst',
			type: 'text',
			template: '(fields.standfirst:({}))',
		},
		{
			name: 'Newspaper Page',
			type: 'text',
			template: '(fields.newspaperPageNumber:({}))',
		},
		{
			name: 'Trail Image Width',
			type: 'number',
			template: '(who.knows.lol:({}))',
		},
	];

	clientFilters = this.filters.map(f => ({ name: f.name, type: f.type }));

	constructor() {}
	getSearch = () => [
		(req: Request, res: Response) => {
			// TODO
		},
	];

	getFilters = () => [
		(req: Request, res: Response) => {
			return res.json(this.clientFilters).send();
		},
	];
}
