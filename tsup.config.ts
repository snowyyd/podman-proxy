import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['dist/out/main.js'],
	outDir: 'dist/bundle/',
	outExtension() { return { js: '.js' }; },
	splitting: false,
	clean: true,
	format: 'esm',
	platform: 'node',
	minify: (process.env.NODE_ENV === 'production'),
	target: 'es5',
	external: ['ts-runtime-checks'],
	noExternal: ['rou3'],
	treeshake: 'smallest',
});
