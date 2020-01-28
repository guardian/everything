export namespace Filters {
	export const allFilters = [
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
			type: 'text',
			template: '(who.knows.lol:({}))',
		},
		{
			name: 'Trail Image Height',
			type: 'text',
			template: '(who.knows.lol:({}))',
		},
	];

	export const clientFilters = allFilters.map(f => ({
		name: f.name,
		type: f.type,
	}));
}
