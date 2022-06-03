import path from "path";
import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ["PATCH", "DELETE"]
		},

		vite: {
			resolve: {
				alias: {
					$components: path.resolve("./src/lib/components"),
					$stores: path.resolve("./src/lib/stores"),
					$proto: path.resolve("./src/lib/proto"),
					$env: path.resolve("./src/lib/env"),
					$utils: path.resolve("./src/lib/utils")
				}
			}
		}
	}
};

export default config;
