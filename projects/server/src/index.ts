import express, { Request, Response } from 'express';
import ip from 'ip';
import { SearchController } from './controllers/SearchController';
import { getConfig } from './services/Config';
import bodyParser from 'body-parser';
import { Elasticsearch } from './services/Elasticsearch';

async function main() {
	const config = getConfig();

	// Services
	const es = new Elasticsearch(config);

	// Controllers
	const search = new SearchController(es);

	const port = 13337;
	const app = express();
	app.use(bodyParser.json());

	app.get('/api/filters', ...search.getFilters());
	app.post('/api/search', ...search.postSearch());

	app.get('/api/management/healthcheck', (req: Request, res: Response) =>
		res.send('OK')
	);

	// Launch! 🚀
	app.listen(port, () => {
		console.log(`✨ everything listening on ${ip.address()}:${port} ✨`);
	});
}

if (require.main === module) {
	main();
}
