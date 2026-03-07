# Trackover Static Site

A very basic static landing page for **Trackover**, ready for GitHub Pages hosting.

## Files
- `index.html`
- `styles.css`
- `CNAME`

## 1) Push to GitHub
Run these commands from this project folder:

```bash
git add .
git commit -m "Create basic Trackover static site"
git push origin main
```

## 2) Enable GitHub Pages
1. Open your GitHub repository.
2. Go to **Settings** -> **Pages**.
3. In **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save.

Your site will be live on:
`https://<github-username>.github.io/<repo-name>/`

## 3) Connect your custom domain
1. Replace the value inside `CNAME` with your real domain (for example `trackover.in` or `www.trackover.in`).
2. Commit and push again.
3. In your domain DNS panel, add records:

If using root domain (example `trackover.in`):
- Type `A` -> Host `@` -> Value `185.199.108.153`
- Type `A` -> Host `@` -> Value `185.199.109.153`
- Type `A` -> Host `@` -> Value `185.199.110.153`
- Type `A` -> Host `@` -> Value `185.199.111.153`

If using subdomain (example `www.trackover.in`):
- Type `CNAME` -> Host `www` -> Value `<github-username>.github.io`

4. Back in GitHub **Settings** -> **Pages**, verify custom domain is detected.
5. Enable **Enforce HTTPS** once certificate is issued.

## 4) Wait for DNS propagation
It can take from a few minutes up to 24 hours (sometimes 48 hours).

## Notes
- This is a pure static site, no backend needed.
- Update `index.html` content anytime and push to redeploy.
