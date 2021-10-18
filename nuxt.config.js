export default {
	ssr: false,
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'crypto-dreams',
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
				href: '/favicon.ico'
			},
			{
				rel: 'stylesheet',
				href: '/assets/fonts/bootstrap-icons/bootstrap-icons.css'
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
				href: '/assets/vendor/css/simplebar.min.css'
			},
			{
				rel: 'stylesheet',
				href: '/assets/vendor/css/choices.min.css'
			},
			{
				rel: 'stylesheet',
				href: '/assets/css/style.min.css'
			}
		],
		script: [
			{ src: '/assets/vendor/feather.min.js', body: true },
			// 	{ src: '/assets/js/theme.bundle.js', body: true },
			{ src: '/assets/vendor/apexcharts.min.js', body: true }
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
	modules: [ '@nuxtjs/axios', '@nuxtjs/proxy' ],

	// axios proxy for avoiding cors
	axios: {
		proxy: true
	},
	// proxy targets for front-end for avoiding cors
	proxy: {
		'/getFTXData/': {
			target: 'https://ftx.com/api/markets/BTC/USD/orderbook',
			pathRewrite: { '^/getFTXData/': '' },
			changeOrigin: true
		},
		'/getCEXData/': {
			target: 'https://cex.io/api/order_book/BTC/USD/',
			pathRewrite: { '^/getCEXData/': '' },
			changeOrigin: true
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
