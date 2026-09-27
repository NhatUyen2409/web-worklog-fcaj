# 🚀 Deploying to GitHub Pages

This guide shows you how to publish your FCAJ portfolio to GitHub Pages using the automated workflow already included in this project.

---

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your project already pushed to a GitHub repository

---

## Step 1 — Replace the repository name in Vite config

Open [`vite.config.js`](./vite.config.js) and find this line:

```js
const GITHUB_REPO_NAME = 'YOUR_REPOSITORY_NAME'
```

Replace `YOUR_REPOSITORY_NAME` with the **exact name of your GitHub repository**.

**Example:**
```js
const GITHUB_REPO_NAME = 'fcaj-portfolio'
```

> ⚠️ This value is **case-sensitive** and must match your GitHub repo name exactly.

---

## Step 2 — Enable GitHub Pages in your repository settings

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save

---

## Step 3 — Push to GitHub

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

GitHub Actions will automatically:
1. Install dependencies
2. Build the production bundle (`npm run build`)
3. Deploy the `dist/` folder to GitHub Pages

---

## Step 4 — View your live site

After the Action completes (1–2 minutes), your site will be available at:

```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

**Example:**
```
https://nhatuyen-sec.github.io/fcaj-portfolio/
```

---

## Triggering a new deployment

Every push to the `main` branch automatically triggers a new deployment.

You can also trigger it manually:
1. Go to your repository → **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Site shows 404 | Double-check `GITHUB_REPO_NAME` in `vite.config.js` |
| Actions tab shows red ✗ | Click the failed run → read the error log |
| White screen on live site | Ensure Pages source is set to **GitHub Actions** |
| Old version still showing | Wait 2–3 min or force-refresh with Ctrl+Shift+R |

---

## Local development (unchanged)

The `base` path is automatically set to `/` when running locally, so `npm run dev` continues to work normally at `http://localhost:3000/`.

```bash
# Install
npm install

# Develop locally
npm run dev

# Build & preview production
npm run build
npm run preview
```
