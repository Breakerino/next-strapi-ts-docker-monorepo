// --------------------------------------------------------------------- 
// Config > Api
// --------------------------------------------------------------------- 

export default ({ env }) => ({
  rest: {
		prefix: env('API_PREFIX', '/v1'),
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
});
