# Deployment Instructions

## Setting up Environment Variables in Vercel

When deploying this project to Vercel, you need to set up the following environment variables:

1. Log in to your Vercel account
2. Go to your project settings
3. Navigate to the "Environment Variables" tab
4. Add the following environment variable:
   - Name: `RESEND_API_KEY`
   - Value: `re_en9J6rA8_NWjCuytUCLSgHng7BJQevAfq`
   - Environment: Production, Preview, Development (select all)

## Vercel Deployment Process

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. During setup, ensure the following settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Testing Email Functionality

After deployment:
1. First verify the API is working by visiting: `https://your-domain.vercel.app/api/test`
   - You should see a JSON response: `{"message":"API endpoint is working correctly"}`
2. Then test the contact form:
   - Go to your deployed site
   - Navigate to the Contact section
   - Fill out the form and submit
   - You should receive an email at: `mannmaheshwari2003@gmail.com`

## Troubleshooting

If you encounter issues:
1. Check Vercel Function logs in your Vercel dashboard
2. Verify that your environment variables are set correctly
3. Make sure the API routes are properly configured in vercel.json
4. The contact form is set to work in "simulation mode" during development and will only send real emails in production

## Local Development

For local development, the contact form is configured to work in "simulation mode" and won't attempt to send actual emails. This prevents JSON parsing errors during development. When deployed to Vercel, the form will use the real API endpoint. 