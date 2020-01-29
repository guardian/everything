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
			template: '(sectionId:("{}"))',
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
		{
			name: 'Commisioning Desk',
			type: 'select',
			template: '(tags:("{}"))',
			options: [
				{ label: 'AU Labs', value: 'tracking/commissioningdesk/au-labs' },
				{
					label: 'AU Masterclasses',
					value: 'tracking/commissioningdesk/au-masterclasses',
				},
				{
					label: 'Australia Business',
					value: 'tracking/commissioningdesk/australia-business',
				},
				{
					label: 'Australia Culture',
					value: 'tracking/commissioningdesk/australia-culture',
				},
				{
					label: 'Australia Data',
					value: 'tracking/commissioningdesk/australia-data',
				},
				{
					label: 'Australia Features',
					value: 'tracking/commissioningdesk/australia-features',
				},
				{
					label: 'Australia Foreign',
					value: 'tracking/commissioningdesk/australia-foreign',
				},
				{
					label: 'Australia GSB',
					value: 'tracking/commissioningdesk/australia-gsb',
				},
				{
					label: 'Australia Investigations',
					value: 'tracking/commissioningdesk/australia-investigations',
				},
				{
					label: 'Australia Lifestyle',
					value: 'tracking/commissioningdesk/australia-lifestyle',
				},
				{
					label: 'Australia News',
					value: 'tracking/commissioningdesk/australia-news',
				},
				{
					label: 'Australia Opinion',
					value: 'tracking/commissioningdesk/australia-opinion',
				},
				{
					label: 'Australia Pictures ',
					value: 'tracking/commissioningdesk/australia-pictures-',
				},
				{
					label: 'Australia Politics',
					value: 'tracking/commissioningdesk/australia-politics',
				},
				{
					label: 'Australia Social News',
					value: 'tracking/commissioningdesk/australia-social-news',
				},
				{
					label: 'Australia Sport',
					value: 'tracking/commissioningdesk/australia-sport',
				},
				{
					label: 'Australia Technology',
					value: 'tracking/commissioningdesk/australia-technology',
				},
				{
					label: 'Australia Video and Audio',
					value: 'tracking/commissioningdesk/australia-video',
				},
				{
					label: 'Collections',
					value: 'tracking/commissioningdesk/collections',
				},
				{
					label: 'Consumer tech (commissioning)',
					value: 'tracking/commissioningdesk/consumer-tech--commissioning-',
				},
				{ label: 'GLabs US', value: 'tracking/commissioningdesk/glabs-us' },
				{
					label: 'Guardian Universities',
					value: 'tracking/commissioningdesk/guardian-universities',
				},
				{
					label: 'Guardian Universities',
					value: 'tracking/commissioningdesk/guardian-universities-misc-budget',
				},
				{
					label: 'New Zealand',
					value: 'tracking/commissioningdesk/new-zealand',
				},
				{
					label: 'Observer Comment',
					value: 'tracking/commissioningdesk/observer-comment',
				},
				{
					label: 'Observer Design magazine',
					value: 'tracking/commissioningdesk/observer-design-magazine',
				},
				{
					label: 'Observer Food Monthly',
					value: 'tracking/commissioningdesk/observer-food-monthly',
				},
				{
					label: 'Observer Magazine',
					value: 'tracking/commissioningdesk/observer-magazine',
				},
				{
					label: 'Observer Main',
					value: 'tracking/commissioningdesk/observer-main',
				},
				{
					label: 'Observer Music Magazine',
					value: 'tracking/commissioningdesk/observer-music-magazine',
				},
				{
					label: 'Observer New Review',
					value: 'tracking/commissioningdesk/observer-new-review',
				},
				{
					label: 'Observer Pictures Features',
					value: 'tracking/commissioningdesk/observer-pictures-features',
				},
				{
					label: 'Observer Pictures News',
					value: 'tracking/commissioningdesk/observer-pictures-news',
				},
				{
					label: 'Pacific News',
					value: 'tracking/commissioningdesk/pacific-news',
				},
				{
					label: 'UK Age of Extinction',
					value: 'tracking/commissioningdesk/uk-age-of-extinction',
				},
				{ label: 'UK Audio', value: 'tracking/commissioningdesk/uk-audio' },
				{ label: 'UK B2B', value: 'tracking/commissioningdesk/uk-b2b' },
				{
					label: 'UK Business',
					value: 'tracking/commissioningdesk/uk-business',
				},
				{ label: 'Cities', value: 'tracking/commissioningdesk/cities' },
				{
					label: 'UK Communities and Social',
					value: 'tracking/commissioningdesk/uk-communities-and-social',
				},
				{ label: 'UK Cook', value: 'tracking/commissioningdesk/cook' },
				{
					label: 'UK Crosswords',
					value: 'tracking/commissioningdesk/crosswords',
				},
				{ label: 'UK Culture', value: 'tracking/commissioningdesk/uk-culture' },
				{
					label: 'UK Digital Backbench',
					value: 'tracking/commissioningdesk/digital-backbench',
				},
				{
					label: 'UK Education',
					value: 'tracking/commissioningdesk/uk-education',
				},
				{
					label: 'UK Environment',
					value: 'tracking/commissioningdesk/uk-environment',
				},
				{ label: 'UK Family', value: 'tracking/commissioningdesk/family' },
				{ label: 'UK Fashion', value: 'tracking/commissioningdesk/uk-fashion' },
				{ label: 'UK Feast', value: 'tracking/commissioningdesk/feast' },
				{ label: 'UK Food', value: 'tracking/commissioningdesk/uk-food' },
				{ label: 'UK Foreign', value: 'tracking/commissioningdesk/uk-foreign' },
				{
					label: 'UK Foreign Networks',
					value: 'tracking/commissioningdesk/foreign-networks',
				},
				{ label: 'UK G1', value: 'tracking/commissioningdesk/g1' },
				{
					label: 'UK G2 Features',
					value: 'tracking/commissioningdesk/uk-g2-features',
				},
				{
					label: 'UK GNM Archive',
					value: 'tracking/commissioningdesk/uk-gnm-archive',
				},
				{
					label: 'UK GNM Education Centre',
					value: 'tracking/commissioningdesk/uk-gnm-education-centre',
				},
				{
					label: 'UK Global Development',
					value: 'tracking/commissioningdesk/global-development',
				},
				{
					label: 'UK Guardian Foundation',
					value: 'tracking/commissioningdesk/uk-guardian-foundation',
				},
				{
					label: 'UK Guardian Weekly ',
					value: 'tracking/commissioningdesk/uk-guardian-weekly-commissioning',
				},
				{
					label: 'UK Home News',
					value: 'tracking/commissioningdesk/uk-home-news',
				},
				{
					label: 'UK Inequality',
					value: 'tracking/commissioningdesk/uk-inequality',
				},
				{
					label: 'UK Investigations ',
					value: 'tracking/commissioningdesk/uk-investigations',
				},
				{ label: 'UK Labs', value: 'tracking/commissioningdesk/uk-labs' },
				{
					label: 'UK Letters and Leader Writers',
					value: 'tracking/commissioningdesk/uk-letters-and-leader-writers',
				},
				{
					label: 'UK Long Read',
					value: 'tracking/commissioningdesk/long-read',
				},
				{
					label: 'UK Looking Back ',
					value: 'tracking/commissioningdesk/uk-looking-back',
				},
				{
					label: 'UK Masterclasses ',
					value: 'tracking/commissioningdesk/uk-masterclasses',
				},
				{ label: 'UK Media', value: 'tracking/commissioningdesk/uk-media' },
				{
					label: 'UK Membership',
					value: 'tracking/commissioningdesk/uk-membership',
				},
				{ label: 'UK Money', value: 'tracking/commissioningdesk/uk-money' },
				{
					label: 'UK Obituaries',
					value: 'tracking/commissioningdesk/uk-obituaries',
				},
				{ label: 'UK Opinion', value: 'tracking/commissioningdesk/uk-opinion' },
				{
					label: 'UK Pictures Guardian Arts',
					value: 'tracking/commissioningdesk/uk-pictures-guardian-arts',
				},
				{
					label: 'UK Pictures Guardian Features',
					value: 'tracking/commissioningdesk/uk-pictures-guardian-features',
				},
				{
					label: 'UK Pictures Guardian News',
					value: 'tracking/commissioningdesk/uk-pictures-guardian-news',
				},
				{
					label: 'UK Professional Networks',
					value: 'tracking/commissioningdesk/uk-professional-networks',
				},
				{
					label: 'UK Research and Information',
					value: 'tracking/commissioningdesk/research-and-information',
				},
				{ label: 'UK Review', value: 'tracking/commissioningdesk/review' },
				{
					label: 'UK Saturday Features',
					value: 'tracking/commissioningdesk/guardian-saturday',
				},
				{ label: 'UK Science', value: 'tracking/commissioningdesk/uk-science' },
				{
					label: 'UK Social News',
					value: 'tracking/commissioningdesk/uk-social-news',
				},
				{ label: 'UK Society', value: 'tracking/commissioningdesk/uk-society' },
				{
					label: 'UK Special Projects',
					value: 'tracking/commissioningdesk/uk-special-projects',
				},
				{ label: 'UK Sport', value: 'tracking/commissioningdesk/uk-sport' },
				{
					label: 'UK Sustainability: Living our values ',
					value:
						'tracking/commissioningdesk/uk-sustainability--living-our-values-',
				},
				{
					label: 'UK Technology',
					value: 'tracking/commissioningdesk/uk-technology',
				},
				{
					label: 'UK The Guide',
					value: 'tracking/commissioningdesk/the-guide',
				},
				{ label: 'UK Travel', value: 'tracking/commissioningdesk/uk-travel' },
				{ label: 'UK Video', value: 'tracking/commissioningdesk/uk-video' },
				{ label: 'UK Visuals', value: 'tracking/commissioningdesk/uk-visuals' },
				{ label: 'UK Weather', value: 'tracking/commissioningdesk/uk-weather' },
				{ label: 'UK Weekend', value: 'tracking/commissioningdesk/weekend' },
				{
					label: 'UK puzzles (commissioning)',
					value: 'tracking/commissioningdesk/uk-puzzles-commissioning-',
				},
				{
					label: 'US Arts and Culture',
					value: 'tracking/commissioningdesk/us-arts-and-culture',
				},
				{
					label: 'US Business',
					value: 'tracking/commissioningdesk/us-business',
				},
				{
					label: 'US Fast Features',
					value: 'tracking/commissioningdesk/us-social-news',
				},
				{
					label: 'US Features',
					value: 'tracking/commissioningdesk/us-features',
				},
				{ label: 'US Foreign', value: 'tracking/commissioningdesk/us-foreign' },
				{
					label: 'US Interactive',
					value: 'tracking/commissioningdesk/us-interactive',
				},
				{ label: 'US News', value: 'tracking/commissioningdesk/us-news' },
				{ label: 'US Opinion', value: 'tracking/commissioningdesk/us-opinion' },
				{
					label: 'US Paid Content',
					value: 'tracking/commissioningdesk/us-paid-content',
				},
				{
					label: 'US Pictures',
					value: 'tracking/commissioningdesk/us-pictures',
				},
				{
					label: 'US Sponsored Content',
					value: 'tracking/commissioningdesk/us-sponsored-content',
				},
				{ label: 'US Sport', value: 'tracking/commissioningdesk/us-sport' },
				{ label: 'US Tech', value: 'tracking/commissioningdesk/us-tech' },
				{
					label: 'US Video and Audio',
					value: 'tracking/commissioningdesk/us-video-and-audio',
				},
				{ label: 'US Selects', value: 'tracking/commissioningdesk/us-selects' },
				{
					label: 'West Coast News',
					value: 'tracking/commissioningdesk/west-coast-news',
				},
			],
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
