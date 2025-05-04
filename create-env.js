import { writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envContent = `# Environment variables
# Add your configuration variables here

# Resend API Key for email functionality
RESEND_API_KEY=re_en9J6rA8_NWjCuytUCLSgHng7BJQevAfq
`;

const envPath = join(__dirname, '.env');

// Check if .env already exists
if (!existsSync(envPath)) {
  writeFileSync(envPath, envContent, 'utf-8');
  console.log('.env file created successfully!');
} else {
  console.log('.env file already exists. Not overwriting it.');
} 
