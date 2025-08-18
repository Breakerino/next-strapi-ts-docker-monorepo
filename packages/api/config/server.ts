export default ({ env }) => {
	const API_SERVER_PROTOCOL = env('API_SERVER_PROTOCOL', null)
	const API_SERVER_NAME = env('API_SERVER_NAME', null)
	
	const url = API_SERVER_PROTOCOL && API_SERVER_NAME ? `${API_SERVER_PROTOCOL}://${API_SERVER_NAME}` : undefined;
	
	return {
		host: env('HOST', '0.0.0.0'),
		port: env.int('PORT', 1337),
		proxy: !!url,
		url,
		app: {
			keys: env.array('APP_KEYS'),
		},
		logger: {
			updates: {
				enabled: env.bool('LOGGER_UPDATES_ENABLED', false)
			}
		},
		cron: {
			enabled: true,
			tasks: [] // TODO: From cron-tasks.ts file
		}
	}
};
