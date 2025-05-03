import { writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envContent = `# Resend API key - get yours at https://resend.com/api-keys
VITE_RESEND_API_KEY=your_resend_api_key_here
`;

const envPath = join(__dirname, '.env');

// Check if .env already exists
if (!existsSync(envPath)) {
  writeFileSync(envPath, envContent, 'utf-8');
  console.log('.env file created successfully!');
  console.log('Please edit it to add your actual Resend API key.');
} else {
  console.log('.env file already exists. Not overwriting it.');
} 