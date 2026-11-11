# Meridian Learning Academy

A simple, responsive website for an online tutoring academy serving pupils from Class 1 upward, worldwide. Guardians and pupils can browse subjects and tutors, read the blog, send an enquiry, enrol for tutorials and chat with the site assistant. The design uses a navy-blue and gold palette.

Plain HTML, CSS and JavaScript. No build step and no dependencies to install.

## Features

- **Home**: hero, subject overview, how enrolment works, why families choose us, testimonials, calls to action
- **Subjects**: English, Mathematics, French, IT, Science, Data Science, Coding, Study Skills, with class ranges
- **Our Tutors**: tutor portfolio cards with qualifications, subjects, time zone and rating
- **Blog**: post cards by category
- **Enquiry**: contact form and other contact channels
- **Enrol**: enrolment form with multi-subject selection, class format and time zone
- **Chat widget**: floating assistant with quick replies and keyword answers
- Single-page navigation, mobile menu, visible keyboard focus, reduced-motion support

## Files

```
.
├── index.html    # All pages and the chat widget markup
├── style.css     # Full design (blue and gold theme, responsive layout)
├── script.js     # Page navigation, form messages, chat widget
├── .gitignore
└── README.md
```

Keep the three site files in the same folder, since `index.html` loads `style.css` and `script.js` by relative path.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

Fonts (Fraunces, Inter, Space Mono) load from Google Fonts, so the first load needs an internet connection. Offline, the site falls back to system serif and sans-serif fonts.

## Deploy

It is a static site, so any static host works.

- **GitHub Pages**: push to GitHub, then Settings, Pages, deploy from the `main` branch root.
- **Netlify, Vercel or Cloudflare Pages**: import the repository. No build command is needed, and the publish directory is the repository root.

## Current behaviour and limits

- Forms validate in the browser and show a success message, but **nothing is stored or sent**. Connect a backend before using them for real enquiries.
- The chat assistant is rule-based (keyword replies), not an AI model, and conversations are not saved.
- Tutors, blog posts and testimonials are static content written in `index.html`.
- The contact email and phone number are placeholders; replace them.
- Blog "Read the full post" links are placeholders; there is no single-post page yet.

## Optional: add a Supabase backend

A Supabase backend (database schema, Row Level Security, storage buckets, Edge Functions and a `supabase-integration.js` script) was prepared separately in the `meridian-learning-academy-site` package. To use it:

1. Copy its `supabase/` folder, `js/config.js` and `js/supabase-integration.js` into this project.
2. Run the SQL files in the Supabase SQL Editor in this order: `schema.sql`, `rls_policies.sql`, `storage.sql`, `seed.sql`.
3. Put your project URL and **anon** key in `config.js`. Never commit the `service_role` key.
4. In `index.html`, load the scripts at the end of the page in this order: the pinned Supabase SDK, `config.js`, `script.js`, then `supabase-integration.js`.

## Contributing and license

Add a license of your choice (for example MIT) before publishing the repository.
