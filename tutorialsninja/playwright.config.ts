import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envName = (process.env.ENV || 'ninja').trim();
const envPath = path.resolve(process.cwd(), `env/.env.${envName}`);

// console.log(`Loading env file: ${envPath}`);

// if (!fs.existsSync(envPath)) {
//   throw new Error(`Environment file not found: ${envPath}`);
// }

const result = dotenv.config({ path: envPath });

// if (result.error) {
//   throw result.error;
// }

// console.log("Loaded environment variables:", result.parsed);
// console.log("dBASE_URL =", process.env.dBASE_URL);

export default defineConfig({
  testDir: './tests',

  use: {
    screenshot: 'only-on-failure',
  },

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});