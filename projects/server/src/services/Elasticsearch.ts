import { Client } from '@elastic/elasticsearch';
import { Config } from './Config';

export class Elasticsearch {
	private client: Client;

	constructor(config: Config) {
		this.client = new Client({ node: config.elasticsearch.host });
	}

	search = async (query: string) => {
		const content = await this.client.search({
			index: 'content',
			body: {
				size: 100,
				sort: [{ webPublicationDate: 'desc' }],
				query: {
					query_string: {
						default_operator: 'AND',
						query: query,
					},
				},
			},
		});

		// Lord forgive me
		const resp = {
			total: content.body.hits.total.value,
			hits: content.body.hits.hits.map((h: any) => h._source),
		};

		return resp;
	};
}
