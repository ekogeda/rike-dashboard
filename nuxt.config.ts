export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: { assets: '/<rootDir>/assets' },
	css: ['~/assets/main.scss', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
	build: {
		transpile: ['vuetify'],
	},
	generate: {
		fallback: true,
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
});

