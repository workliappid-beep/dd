# Deployment Guide

## ✅ Prerequisites

- **Node.js**: 18+ or higher
- **pnpm**: 9.0.0 or higher (specified in package.json)
- **Supabase Project**: With valid API credentials

## 🚀 Local Development

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your Supabase credentials
   ```

3. **Run Development Server**
   ```bash
   pnpm dev
   ```

4. **Build for Production**
   ```bash
   pnpm build
   ```

## 📦 Vercel Deployment

### Prerequisites

- Vercel account connected to GitHub repository
- Supabase API credentials

### Environment Variables to Set in Vercel

1. Go to **Project Settings → Environment Variables**
2. Add the following variables from your Supabase project:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`

### Deploy Steps

1. **Push to GitHub** (on `main` or `fix-npm-error` branch)
   ```bash
   git push origin main
   ```

2. **Vercel Auto-Deploy**
   - Vercel will automatically detect the `vercel.json` configuration
   - Uses `pnpm` as the package manager (specified in `vercel.json`)
   - Build command: `pnpm build`
   - Install command: `pnpm install`

3. **Verify Deployment**
   - Check build logs in Vercel dashboard
   - Ensure environment variables are loaded correctly
   - Test application functionality

## 🔧 Configuration Files

### vercel.json
- Specifies `pnpm` as the package manager
- Sets build command and output directory
- Lists required environment variables

### package.json
- `"packageManager": "pnpm@9.0.0"` enforces pnpm usage

### .npmrc
- Contains `engine-strict=true` to prevent npm/yarn usage

## ⚠️ Troubleshooting

### Build Fails with "npm ci" Error
**Solution**: Ensure all 3 files are properly configured:
1. `vercel.json` has `"installCommand": "pnpm install"`
2. `package.json` has `"packageManager": "pnpm@9.0.0"`
3. Repository uses `pnpm-lock.yaml` (not package-lock.json)

### Missing Environment Variables
**Solution**: Add variables in Vercel project settings:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

### Supabase Connection Fails
**Solution**: 
1. Verify keys are valid in Supabase project settings
2. Check that URLs are correct (should start with `https://`)
3. Ensure Supabase project is active and not paused

## 📝 Security Notes

- ⚠️ **Never** commit `.env` to GitHub
- ✅ Use `.env.example` as template
- ✅ Add environment variables in Vercel dashboard (not in code)
- ✅ Supabase `PUBLISHABLE_KEY` is safe to expose (it's public)
- ✅ Never expose `SUPABASE_SERVICE_ROLE_KEY` in client code

## 🎯 Next Steps

After deployment:
1. Monitor build logs for any warnings
2. Test authentication flow
3. Verify Supabase connections work
4. Monitor application performance
