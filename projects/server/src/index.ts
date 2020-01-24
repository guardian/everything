import express, { Request, Response } from 'express';
import ip from 'ip';
import { SearchController } from './controllers/SearchController';
import { getConfig } from './services/Config';

async function main() {
	const config = getConfig();

	const search = new SearchController();

	const port = 13337;
	const app = express();

	app.get('/api/search', ...search.getSearch());

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
