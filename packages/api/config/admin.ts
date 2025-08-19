// --------------------------------------------------------------------- 
// Config > Admin
// --------------------------------------------------------------------- 

export default ({ env }) => {
	const ADMIN_SERVER_PROTOCOL = env('ADMIN_SERVER_PROTOCOL', null)
	const ADMIN_SERVER_NAME = env('ADMIN_SERVER_NAME', null)
	
	const url = ADMIN_SERVER_PROTOCOL && ADMIN_SERVER_NAME ? `${ADMIN_SERVER_PROTOCOL}://${ADMIN_SERVER_NAME}/` : '/admin';

	return {
		host: env('HOST', '0.0.0.0'),
		port: env.int('ADMIN_PORT', 8000),
		url,
		serveAdminPanel: true,
		auth: {
			secret: env('ADMIN_JWT_SECRET'),
		},
		apiToken: {
			salt: env('API_TOKEN_SALT'),
			secrets: {
				encryptionKey: env('ENCRYPTION_KEY'),
			},
		},
		transfer: {
			token: {
				salt: env('TRANSFER_TOKEN_SALT'),
			},
		},
		flags: {
			nps: env.bool('FLAG_NPS', false),
			promoteEE: env.bool('FLAG_PROMOTE_EE', false),
		}
	}
};