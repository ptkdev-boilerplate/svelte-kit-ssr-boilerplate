import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import * as fs from "fs";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ out: "build" }),
		target: "#svelte",
		router: true,
		ssr: true,
		hydrate: true,
		trailingSlash: "never",
		amp: false,
		files: {
			assets: "./assets",
			hooks: "./app/hooks",
			lib: "./app",
			routes: "./app/pages",
			serviceWorker: "./app/service-worker",
			template: "./app/core/app.html"
		}
	}
};

// Add certificate if it's generated
if (fs.existsSync("localhost-key.pem") && fs.existsSync("localhost.pem")) {
	config.kit.vite = {
		server: {
			https: {
				key: fs.readFileSync("localhost-key.pem"),
				cert: fs.readFileSync("localhost.pem")
			}
		}
	};
}

export default config;
