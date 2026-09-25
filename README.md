# Amr Abouzaid Executive Website

Premium one-page personal brand site built with React, Vite and Framer Motion.

## 1. Personalize assets

Add these files to `public/`:
- `profile.jpg` if you later update the Photo component to display it
- `amr-abouzaid-resume.pdf` so Download Resume works
- project screenshots, after removing confidential information

The contact email and LinkedinIcon link are already set from the CV.

## 2. Run locally

```bash
npm install
npm run dev
```

Open the local address shown in Terminal.

## 3. Build a production version

```bash
npm run build
```

The deployable website will be generated in `dist/`.

## 4. Publish with Vercel

1. Create a new GitHub repository.
2. Upload all files from this project.
3. Sign in to Vercel and choose **Add New > Project**.
4. Import the GitHub repository.
5. Vercel detects Vite automatically. Keep the build command as `npm run build` and output directory as `dist`.
6. Select **Deploy**.
7. In the Vercel project, open **Settings > Domains** and add your personal domain.
8. Follow the DNS values shown by Vercel at your domain registrar.

## 5. Publish without GitHub

Install the Vercel command-line tool and run:

```bash
npm install
npm run build
npx vercel
```

Follow the prompts, then run `npx vercel --prod` for the public production deployment.

## Launch checklist

- Replace both portrait placeholders with approved professional photos.
- Add the resume PDF at the exact filename above.
- Review every metric and statement.
- Add a 1200 x 630 social sharing image.
- Replace gallery placeholders with compressed WebP photos.
- Replace project placeholders only with non-confidential, approved screenshots.
- Connect the contact form to an approved service, or keep the email CTA.
- Test on phone, tablet and desktop.
- Add a privacy notice before collecting form data or analytics.
- Set a custom domain and professional email address.
