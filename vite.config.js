// vite.config.js
export default defineConfig({

    build: {
        rollupOptions: {
            maxParallelFileOps: 2,
            output: {
              sourcemap: true,
              manualChunks: (id) => {
               if (id.includes('node_modules')) {
                  return 'vendor';
                }
              },
            },
          },
    },
});