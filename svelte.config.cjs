/* eslint-disable @typescript-eslint/no-var-requires */
const sveltePreprocess = require("svelte-preprocess");
const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),
		files: {
			assets: "assets",
			hooks: "app/hooks",
			lib: "app/lib",
			routes: "app/pages",
			serviceWorker: "app/service-worker",
			template: "app/core/app.html"
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}

};
