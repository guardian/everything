import fs from 'fs';

export type Config = ReturnType<typeof getConfig>;

const fromFsRoot = (path: string) => {
	const telepresenceRoot = process.env['TELEPRESENCE_ROOT'];
	let root = '';
	if (telepresenceRoot) {
		root = telepresenceRoot;
	}

	return `${root}/${path}`;
};

const required = (directory: string, file: string): string => {
	try {
		return fs
			.readFileSync(fromFsRoot(`${directory}/${file}`))
			.toString()
			.trim();
	} catch (err) {
		throw new Error(`Failed to get config at '${directory}/${file}' - ${err}`);
	}
};

export const getConfig = () => {
	const config = process.env['CONFIG_PATH']!;

	return {
		app: {
			secret: required(config, 'app_secret'),
		},
		elasticsearch: {
			host: required(config, 'es_host'),
		},
	};
};
