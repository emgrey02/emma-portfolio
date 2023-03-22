module.exports = {
	async redirects() {
		return [
			{
				source: '/api/form',
				destination: '/form-thankyou',
				permanent: true,
			},
		];
	},
};
