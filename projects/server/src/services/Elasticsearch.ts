import { Client } from '@elastic/elasticsearch';

export class Elasticsearch {
	private client: Client;

	constructor() {
		this.client = new Client({ node: 'http://localhost:9200' });
	}

	search = (terms: QueryElement) => {};
}
