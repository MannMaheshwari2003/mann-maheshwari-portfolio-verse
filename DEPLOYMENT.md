# Deploying to Vercel

This guide explains how to deploy your portfolio with the contact form to Vercel.

## Prerequisites

- A Vercel account (free tier is fine): https://vercel.com/signup
- A Resend account (for email sending): https://resend.com

## Setup Steps

### 1. Push Your Code to GitHub

Make sure your code is in a GitHub repository.

### 2. Connect to Vercel

1. Log in to your Vercel account
2. Click "Add New..." > "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. Environment Variables

Add the following environment variable in the Vercel project settings:

- `RESEND_API_KEY`: Your Resend API key (from your Resend dashboard)

### 4. Deploy

Click "Deploy" and wait for the build to complete.

## How It Works

- API routes are automatically handled by Vercel's serverless functions
- The `/api/send-email` endpoint will be deployed as a serverless function
- Your React frontend will be built and deployed as static files
- The contact form will automatically connect to the API endpoint

## Testing After Deployment

1. Visit your deployed site
2. Navigate to the contact form
3. Fill out the form and submit
4. Check your email to verify that it works

## Troubleshooting

If your contact form doesn't work on Vercel:

1. Check Vercel logs for any errors
2. Verify that your environment variable was set correctly
3. Make sure your Resend API key is valid
4. Confirm that your Resend account is properly set up 