# Deployment Guide — Badrinaath R Portfolio

## Is it ready to deploy?

**Yes — with one thing to do first.**

The app builds cleanly (no TypeScript errors, all routes are statically generated). The only blocker is the **resume PDF** — the resume link points to `/resume/Badrinaath_R_Resume.pdf` but that file is not yet in the project. Add it before deploying or the button will 404.

---

## Step 0 — Add your resume PDF

1. Create the folder `public/resume/` inside the project root.
2. Place your resume PDF inside it, named exactly:

```
public/resume/Badrinaath_R_Resume.pdf
```

That's it. Next.js serves everything in `public/` as static files automatically.

---

## Recommended: Vercel (Free)

Vercel is made by the Next.js team. Zero configuration needed — it auto-detects the framework, handles all routes including dynamic ones, and deploys globally on a CDN. The free Hobby plan covers personal portfolios with no limits on deployments.

**Free tier includes:**
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- Custom domain support
- Preview URLs for every push
- Analytics (basic)

### Step 1 — Push the project to GitHub

If you don't have a GitHub repo yet:

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial portfolio commit"
```

Then create a new repository at [github.com/new](https://github.com/new) (name it something like `badrinaath-portfolio`) and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/badrinaath-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in with your GitHub account.
2. Click **Add New → Project**.
3. Find and select your `badrinaath-portfolio` repository.
4. Vercel auto-detects Next.js — leave all settings as default.
5. Click **Deploy**.

Vercel will build and deploy in about 60–90 seconds.

### Step 3 — Get your live URL

After deployment you get a URL like:
```
https://badrinaath-portfolio.vercel.app
```

You can share this immediately. It updates automatically every time you push to `main`.

### Step 4 — (Optional) Add a custom domain

If you have a domain (e.g., `badrinaath.dev`):

1. In the Vercel dashboard → your project → **Settings → Domains**.
2. Add your domain and follow the DNS instructions shown.
3. Vercel handles HTTPS automatically.

---

## Alternative: Netlify (Free)

Similar to Vercel. Use this if you already have a Netlify account.

**Free tier includes:**
- 100 GB bandwidth/month
- Custom domain + HTTPS
- Continuous deployment from GitHub

### Steps

1. Go to [netlify.com](https://netlify.com) and log in with GitHub.
2. Click **Add new site → Import an existing project**.
3. Select your GitHub repository.
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**.

> Netlify requires the [Next.js Runtime](https://docs.netlify.com/frameworks/next-js/overview/) plugin — it usually installs automatically for Next.js projects detected via `next.config.ts`.

---

## After deployment — making updates

The workflow from here is simple:

```bash
# Make your changes locally, then:
git add .
git commit -m "Update portfolio content"
git push
```

Vercel/Netlify automatically picks up the push and redeploys within ~60 seconds. No manual steps needed.

---

## Checklist before going live

- [ ] Resume PDF added to `public/resume/Badrinaath_R_Resume.pdf`
- [ ] Run `npm run build` locally to catch any build errors before pushing
- [ ] Check all nav links scroll to the correct sections
- [ ] Test on mobile (the portfolio is responsive but worth a quick check)
- [ ] Verify the GitHub and LinkedIn links open correctly
- [ ] Test dark/light theme toggle
- [ ] Check the NVIDIA achievement card reads correctly

---

## Local build test (run this before pushing)

```bash
npm run build
```

A successful output ending in something like:
```
✓ Compiled successfully
Route (app)                Size     First Load JS
┌ ○ /                      ...
├ ○ /projects/[slug]       ...
```
means the build is clean and ready to deploy.
