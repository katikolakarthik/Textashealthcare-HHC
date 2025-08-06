# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Your project should be in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect it's a Next.js project

2. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

3. **Environment Variables** (if needed):
   - Add any environment variables in the Vercel dashboard
   - Currently, no environment variables are required for this project

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site automatically

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Configuration Files

### vercel.json
- Optimized for Next.js deployment
- Configured for optimal performance
- Set function timeout to 30 seconds

### .gitignore
- Excludes unnecessary files from deployment
- Optimized for Vercel's build process

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

### Environment Variables
If you add environment variables later:
1. Go to project dashboard → "Settings" → "Environment Variables"
2. Add variables for Production, Preview, and Development environments

## Performance Optimization

Your project is already optimized for Vercel with:
- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Optimized image domains in `next.config.js`
- ✅ Proper build configuration

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation

2. **Image Loading Issues**:
   - Verify image domains in `next.config.js`
   - Use Next.js Image component for optimization

3. **Environment Variables**:
   - Ensure all required env vars are set in Vercel dashboard
   - Use `NEXT_PUBLIC_` prefix for client-side variables

### Support
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js deployment guide: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

## Automatic Deployments

Once connected to your Git repository, Vercel will:
- Automatically deploy on every push to main branch
- Create preview deployments for pull requests
- Provide instant rollbacks to previous deployments 