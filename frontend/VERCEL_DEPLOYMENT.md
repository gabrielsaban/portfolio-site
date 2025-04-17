# Vercel Deployment Guide

## Required Environment Variables

When deploying to Vercel, you'll need to set up the following environment variables:

### `NEXT_PUBLIC_API_URL`

- **Description**: The URL of your backend API
- **Example**: `https://your-backend-api.onrender.com`
- **Required**: Yes

### `NEXT_PUBLIC_FORMSPREE_ID`

- **Description**: Your Formspree form ID for fallback contact form
- **Example**: `xyzabcdef123`
- **Required**: Recommended as a fallback

## How to Set Environment Variables in Vercel

1. Go to your project's dashboard in Vercel
2. Navigate to "Settings" > "Environment Variables"
3. Add each variable with its name and value
4. Click "Save" to apply the changes
5. Redeploy your application to apply the environment variables

## Deployment Settings

- **Framework Preset**: Next.js
- **Root Directory**: `frontend` (if your repository has both frontend and backend)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Contact Form Setup

The contact form is designed to first try your custom backend API and fall back to Formspree if there are any issues. This provides redundancy and ensures users can always contact you.

To set up Formspree:

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form
3. Copy the form ID (the part after `f/` in the form endpoint)
4. Set this as the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in Vercel 