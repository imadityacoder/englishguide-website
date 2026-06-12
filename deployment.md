# Vercel Deployment Configuration Guide

Follow these steps to deploy the optimized **English Guide** project to Vercel.

## 1. Environment Variables Configuration

Configure the following environment variables in your Vercel Project Settings under **Environment Variables**:

| Variable Name | Required | Value / Description | Location |
|---|---|---|---|
| `WEB3FORMS_ACCESS_KEY` | **Yes** | Server-side key for email submissions (keep hidden) | Server (API Route) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 Measurement ID (e.g., `G-XXXXXXX`) | Client (Script) |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager Container ID (e.g., `GTM-XXXXXX`) | Client (Script) |
| `NEXT_PUBLIC_CLARITY_ID` | No | Microsoft Clarity Tracking ID (e.g., `clarityid123`) | Client (Script) |

## 2. Deploying via Vercel CLI

To deploy manually using the CLI, run the following commands:

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Link to project and configure
vercel link

# Deploy production build
vercel --prod
```

## 3. Production Build Validation

Vercel will run the following build configuration:

- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Node.js Version:** `20.x` or `22.x`

## 4. Post-Deployment Checks

1. Verify that **Robots** is served at `https://englishguidepatna.in/robots.txt`.
2. Verify that the **Sitemap** is served at `https://englishguidepatna.in/sitemap.xml`.
3. Test the inquiry form submission and verify that:
   - Request is processed successfully by `/api/inquiry`.
   - Email notifications arrive via Web3Forms.
   - Click events are triggered (monitor in GA4 debug view).
4. Run a Lighthouse/Pagespeed Insights audit to confirm FCP < 1s and LCP < 2.5s.
