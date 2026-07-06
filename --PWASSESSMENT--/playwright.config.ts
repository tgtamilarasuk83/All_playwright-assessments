

import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envName = (process.env.ENV || 'ninja').trim();
const envPath = path.resolve(process.cwd(), `env/.env.${envName}`);
dotenv.config({ path: envPath });

export default defineConfig({
  testDir: './tests',

  use: {
    screenshot: 'only-on-failure',
  },

  reporter: [
    ['html', { open: 'never' }],
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