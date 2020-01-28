import { QueryElement } from '@guardian/threads';

export const getFilters = async () => {
	const res = await fetch(`/api/filters`);
	return await res.json();
};

export const doSearch = (elements: QueryElement[]) => {
	return fetch(`/api/search`, {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify({
			elements,
		}),
	});
};
