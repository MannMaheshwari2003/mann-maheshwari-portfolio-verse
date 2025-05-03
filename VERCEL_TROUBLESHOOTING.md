# Vercel Deployment Troubleshooting

If you're experiencing issues with the contact form on your Vercel deployment, follow these steps to diagnose and fix the problem.

## Common Issues

### 1. API Key Configuration

Make sure your Resend API key is properly set in Vercel's environment variables:

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Go to "Environment Variables"
4. Verify that `RESEND_API_KEY` is set with your Resend API key
5. If you make any changes, redeploy your application

### 2. Testing the API Endpoint

To check if your API is working correctly:

1. Visit `https://your-domain.vercel.app/api/test` in your browser
2. You should see a JSON response with information about your environment
3. Check if `apiKeyExists` is `true`

### 3. CORS Issues

If you're getting CORS errors:

1. Verify that the API headers in `api/send-email.ts` include the correct CORS settings
2. Make sure your frontend is making requests to the correct URL

### 4. Debugging Server Errors

If you're still seeing 500 errors:

1. Go to your Vercel project dashboard
2. Click on "Deployments"
3. Select your latest deployment
4. Click on "Functions" tab
5. Look for the `/api/send-email` function and check its logs

### 5. API Function Format

Ensure your API function follows Vercel's serverless format:

```typescript
export default function handler(req, res) {
  // Function code here
}
```

### 6. Redeploying

After making changes:

1. Push your changes to your repository
2. Go to your Vercel project dashboard
3. Click on "Deployments"
4. Click "Redeploy" on your latest deployment, or wait for automatic deployment

## Testing the Contact Form

1. Fill out all fields in the contact form
2. Submit the form
3. Check the browser console for any errors
4. If you receive an error, copy the full error message for debugging

## Getting Help

If you're still having issues:

1. Check Vercel's documentation: https://vercel.com/docs
2. Verify your Resend account status: https://resend.com/dashboard
3. Test sending emails directly through Resend's dashboard

Remember that serverless functions can sometimes take a moment to "warm up" if they haven't been used recently. 