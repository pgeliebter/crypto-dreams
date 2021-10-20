export default {
	target: 'static',
	ssr: false,
	generate: {
		fallback: true
	},

	head: {
		title: 'Crypto Dreams',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: './favicon.png'
			},
			{
				rel: 'stylesheet',
				href: './assets/fonts/bootstrap-icons/bootstrap-icons.css'
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com'
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossorigin: true
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap'
			},
			{
				rel: 'stylesheet',
				href: './assets/vendor/css/simplebar.min.css'
			},
			{
				rel: 'stylesheet',
				href: './assets/vendor/css/choices.min.css',
				defer: true
			},
			{
				rel: 'stylesheet',
				href: './assets/css/style.min.css'
			}
		],
		script: [
			{ src: './assets/js/theme.bundle.js', body:true, defer: true },
			{ src: './assets/vendor/feather.min.js', body: true, defer: true },

			{
				src: './assets/vendor/apexcharts.min.js',
				body: true,
				defer: true
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [ '@nuxtjs/axios' ],

	// axios proxy for avoiding cors
	axios: {
		baseURL:
			process.env.NODE_ENV == 'development'
				? 'http://localhost:3000'
				: 'https://crypto-dreams-backend.herokuapp.com'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
