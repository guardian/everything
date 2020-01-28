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
			// TODO make drop down
			name: 'Top Tag',
			type: 'text',
			template: '(leadTags:({}))',
		},
		{
			// TODO make drop down
			name: 'Section',
			type: 'select',
			template: '(sectionId:({}))',
			options: [
				{ label: 'UK News', value: 'uk-news' },
				{ label: 'Sport', value: 'sport' },
				{ label: 'Science', value: 'science' },
				{ label: 'Global Development', value: 'global-development' },
			],
		},
		{
			// TODO make dropdown
			name: 'Tags',
			type: 'text',
			template: '(tags:({}))',
		},
		// {
		// 	name: 'Trail Image Width',
		// 	type: 'text',
		// 	template: '(who.knows.lol:({}))',
		// },
		// {
		// 	name: 'Trail Image Height',
		// 	type: 'text',
		// 	template: '(who.knows.lol:({}))',
		// },
	];

	// TODO
	// * Has tag
	// * Top tag
	// * Tone
	// * Comments on
	// * Contributor ?

	export const clientFilters = allFilters.map(f => ({
		name: f.name,
		type: f.type,
		options: f.options,
	}));
}
