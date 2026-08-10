# CHIROPE Webroot Deployment

This package is a prebuilt static production package for the CHIROPE website.

## What To Upload

Upload all files and folders in this package to the web server website root.

The package root should contain:

- `index.html`
- `_redirects`
- `assets/`
- `DEPLOYMENT.md`

Do not upload the zip file itself as the website root. Extract it first.

## No Build Required

IT does not need to run:

- `npm install`
- `npm run build`
- any Node.js command

The JavaScript, CSS, images, logo files, and favicon files are already built.

## Important Route Rewrite

This site is a Vite/Vue single page application. URLs such as:

- `/air-freight`
- `/warehouse-distribution`
- `/news/freight-mode-selection`

must serve `index.html` when the requested file does not exist.

Cloudflare Pages and Netlify can use the included `_redirects` file:

```text
/* /index.html 200
```

For Nginx, use:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

For Apache, use an `.htaccess` rewrite similar to:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Verification

After deployment, check these URLs:

- `/`
- `/air-freight`
- `/fba-logistics`
- `/warehouse-distribution`
- `/news`
- `/news/freight-mode-selection`
- `/quote`

If direct page refresh on a nested URL returns 404, the server rewrite is missing.
