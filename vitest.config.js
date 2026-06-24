import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    clearMocks: true,
    fileParallelism: false,
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.js'],
      exclude: [...configDefaults.exclude, 'coverage', 'bootstrap_repo']
    },
    setupFiles: ['.vite/setup-files.js'],
    exclude: [...configDefaults.exclude, 'bootstrap_repo']
  }
})
