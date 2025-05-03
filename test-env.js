import { config } from 'dotenv';

// Load environment variables
config();

console.log('Environment variables:');
console.log('VITE_RESEND_API_KEY:', process.env.VITE_RESEND_API_KEY || 'Not found');

// Exit with error if API key is missing
if (!process.env.VITE_RESEND_API_KEY) {
  console.error('ERROR: VITE_RESEND_API_KEY is missing!');
  process.exit(1);
} else {
  console.log('SUCCESS: VITE_RESEND_API_KEY is present.');
} 