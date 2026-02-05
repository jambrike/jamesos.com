# Personal Website Fork & Personalization Guide

## Overview
This is a Next.js 14 personal portfolio website with built-in AI chat support, blog, projects showcase, and more. This guide will help you completely customize it for your own use and deploy it to Cloudflare Pages.

---

## Part 1: Setup Prerequisites

### What You Need Before Starting
1. **A GitHub account** - to fork/clone this repo
2. **Node.js 18+** - for local development
3. **A Cloudflare account** - for deployment
4. **OpenRouter API Key** - for AI chat (get at https://openrouter.ai)
5. **Optional: Resend account** - for email notifications (get at https://resend.com)

---

## Part 2: Information You Must Provide

Please provide the following information so the AI can customize your site:

### A. Personal Identity
```
Full Name: James O'Sullivan
Short Bio (1-2 sentences): 17 Year old from Ireland. Aspiring software and mechatronics engineer. Active gym goer and such.
Title/Role: Software Engineer
Profile Picture URL: ill give later
```

### B. Contact & Social Links
```
Email: jamesmosullivan1@yahoo.com
Phone (optional): 0857438614
LinkedIn: www.linkedin.com/in/jamesosullivan123
GitHub: https://github.com/jambrike
Twitter/X: no twitter get rid of
Portfolio/Website: jamesos.pages.dev
Instagram/Other (optional): https://www.instagram.com/james_os08/
```

### C. Content Customization

#### Home Page
```
Main Greeting: Hello, Monsieur/Madame 
Main Description: I am an extremely overworked 
Chat Support Name: Friendly Tech Support
Escalation Text: ___________________________
Escalation Link Text: ___________________________
Escalation Link URL: ___________________________
```

#### About/Experience
```
Years of Experience: 2 years of experience
Main Tech Stack: React
Work Environment: Companys/Hackathons/
Key Skills (comma-separated): 
Current Role: Current Role:Very unemployed
```

#### Career/Experience Timeline
```
List your past/current positions:
1. Title: ___________ | Company: ___________ | Start: ___ | End: ___
2. Title: ___________ | Company: ___________ | Start: ___ | End: ___
3. Title: ___________ | Company: ___________ | Start: ___ | End: ___
```

#### Education
```
List your education:
1. School: ___________ | Degree: ___________ | Year: ___
2. School: ___________ | Degree: ___________ | Year: ___
```

#### Projects
```
For each project you want to showcase:
1. 
   Name: ___________________________
   Description: ___________________________
   Tags (comma-separated): ___________________________
   Link: ___________________________
   GitHub: ___________________________
   
2. 
   Name: ___________________________
   Description: ___________________________
   Tags (comma-separated): ___________________________
   Link: ___________________________
   GitHub: ___________________________
```

### D. AI Chat Configuration
```
OpenRouter API Key: ___________________________
Default Model (e.g., openrouter/auto): ___________________________
Chat System Prompt (what should the AI know about you?):
___________________________________
___________________________________
```

### E. Deployment Configuration
```
Domain Name: ___________________________
Cloudflare Account Email: ___________________________
Resend API Key (for email, optional): ___________________________
Analytics/Tracking ID (optional): ___________________________
```

### F. Customization Preferences
```
Color Scheme Preference (light/dark/auto): ___________________________
Font Style Preference: ___________________________
Display Blog Posts? (yes/no): ___________________________
Display Projects? (yes/no): ___________________________
Display Contact Form? (yes/no): ___________________________
Enable Chat? (yes/no): ___________________________
```

---

## Part 3: File-by-File Customization Checklist

### Configuration Files
- [ ] `package.json` - Update name to your domain
- [ ] `.env.local` - Create with OpenRouter API key and other secrets
- [ ] `next.config.mjs` - Update image domains if needed

### Content Data Files (`src/data/`)
- [ ] `home.json` - Main greeting, descriptions, chat setup
- [ ] `socials.json` - Your social media links
- [ ] `routes.json` - Navigation structure (keep as-is or customize)
- [ ] `career.json` - Work experience timeline
- [ ] `education.json` - Education history
- [ ] `projects.json` - Your projects showcase

### Component Files to Review
- [ ] `src/components/Header.tsx` - Site header/navigation
- [ ] `src/components/Footer.tsx` - Footer content
- [ ] `src/components/ChatPrompts.tsx` - AI chat initial prompts
- [ ] `src/app/layout.tsx` - Global layout, metadata

### Page Files (`src/app/`)
- [ ] `src/app/page.tsx` - Home page
- [ ] `src/app/blog/page.tsx` - Blog listing
- [ ] `src/app/projects/page.tsx` - Projects page
- [ ] `src/app/contact/page.tsx` - Contact page

### API Routes (`src/app/api/`)
- [ ] `src/app/api/chat/route.ts` - **IMPORTANT:** Change to OpenRouter integration
- [ ] `src/app/api/revalidate/route.ts` - Content revalidation

---


## Part 4: Final Setup & Cloudflare Pages Deployment

### 1. Local Setup
```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root with:
```
OPENROUTER_API_KEY=your_openrouter_key
OPENROUTER_MODEL=openrouter/auto
# Optional for email:
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_DOMAIN=jamesos.pages.dev
```

### 3. Add Your Images
- Place your profile picture as `public/img/profile.png` (or .jpg)
- For project images:
   - Edith Glasses: `public/img/edith-glasses.png`
   - Red-light Green-light: `public/img/redlight-greenlight.png`
- For each certificate, add as `public/img/cert-1.png`, `cert-2.png`, etc.
- Use only lowercase, hyphenated filenames (no spaces).

### 4. Test Locally
```bash
npm run dev
# Visit http://localhost:3000
```

### 5. Deploy to Cloudflare Pages
#### A. Using Cloudflare Dashboard
1. Push your repo to GitHub
2. In Cloudflare Pages, create a new project from your repo
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Add all environment variables from `.env.local` in the dashboard
6. Deploy!

#### B. Using Wrangler CLI (optional)
```bash
npm install -g wrangler
wrangler pages deploy .next
```

### 6. After Deploying
- Visit your site at `https://jamesos.pages.dev`
- Check all images and certificates display correctly
- If you add new images/certificates, just upload to `public/img/` and reference them in your data files or certificates page

---

## Image Naming Reference

- Profile: `profile.png` (or .jpg)
- Edith Glasses: `edith-glasses.png`
- Red-light Green-light: `redlight-greenlight.png`
- Certificates: `cert-1.png`, `cert-2.png`, ...

---

## What To Do Next

1. Add your images to `public/img/` with the names above
2. Add your OpenRouter API key to `.env.local`
3. Push to GitHub and deploy on Cloudflare Pages
4. Enjoy your new site!

---

## Part 5: Key Features to Understand

### Blog System
- Posts in MDX format live in your content directory
- Use the `extract` script to index them
- Supports code highlighting, images, and custom components

### Chat System (Currently)
- Uses a custom backend API
- **You'll need to switch to OpenRouter** for this fork
- Supports conversation history via chat IDs
- Implemented as an edge function

### Responsive Design
- Built with Tailwind CSS
- Mobile-first approach
- Works on all devices

### Dark Mode Support
- Integrated with `next-themes`
- User preference is saved locally

---

## Part 6: Common Customizations

### Change Site Colors
Edit `tailwind.config.ts` and update the color scheme in theme

### Add New Navigation Routes
1. Add entry to `src/data/routes.json`
2. Create page in `src/app/[route-name]/page.tsx`

### Customize Contact Form
Edit `src/components/ContactForm.tsx` and `src/components/email/ContactFormEmail.tsx`

### Add Blog Posts
Create MDX files in your blog directory with frontmatter:
```yaml
---
title: "Post Title"
date: "2024-02-05"
description: "Post description"
---
```

---

## Part 7: OpenRouter Integration (AI Chat)

The current `src/app/api/chat/route.ts` needs to be modified to support OpenRouter. Here's what needs changing:

### Current Setup
- Points to custom backend at `TACOS_API_URL`
- Uses `X-TACOS-Key` for authentication

### Required Changes
- Replace with OpenRouter API endpoint: `https://openrouter.ai/api/v1/chat/completions`
- Use `Authorization: Bearer` header with OpenRouter API key
- Support streaming responses
- Optional: Track usage with OpenRouter headers

---

## Part 8: Deployment on Cloudflare Pages

### Benefits of Cloudflare Pages
- Free tier available
- Edge-powered static asset delivery
- Integrated with Cloudflare DNS
- Automatic HTTPS/SSL
- Good CI/CD integration

### Build Requirements
- Next.js 14 supports edge runtime
- All API routes marked with `export const runtime = "edge"`
- Static generation preferred where possible

### Environment Variables Setup
In Cloudflare Pages dashboard:
1. Settings > Environment Variables
2. Add `OPENROUTER_API_KEY` and other secrets
3. Ensure they're available to both production and preview

---

## Part 9: What The AI Will Do For You

Once you provide the information above, I will:

1. ✅ Update all JSON data files with your information
2. ✅ Rewrite component text for your site
3. ✅ Replace all links and URLs
4. ✅ Update API route for OpenRouter support
5. ✅ Configure environment variables
6. ✅ Test locally to ensure everything works
7. ✅ Provide deployment instructions for Cloudflare Pages
8. ✅ Create a summary of all changes made

---

## Part 10: Next Steps

### To Get Started:
1. **Provide the information** from Part 2 above
2. **Confirm deployment choice** (Cloudflare Pages)
3. **I'll customize everything** automatically
4. **You deploy** using the provided instructions

### Timeline
- Customization: ~15-30 minutes
- Local testing: ~5 minutes
- Deploy: ~2-5 minutes

---

## Troubleshooting Common Issues

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Build Fails
- Ensure Node.js 18+ installed
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

### OpenRouter Connection Issues
- Verify API key is correct
- Check rate limits at openrouter.ai dashboard
- Ensure `.env.local` is in root directory

### Cloudflare Pages Deploy Fails
- Verify `package.json` scripts are correct
- Check build output directory matches `.next`
- Ensure all environment variables are set

---

## Additional Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **OpenRouter API:** https://openrouter.ai/docs
- **Cloudflare Pages:** https://developers.cloudflare.com/pages
- **Radix UI Components:** https://www.radix-ui.com

---

## Support Commands

Once customized, you'll use these commands:

```bash
npm run dev          # Local development server
npm run build        # Production build
npm run start        # Run built server
npm run lint         # Check code quality
npm run format       # Auto-format code with Prettier
npm run extract      # Extract & index blog content
npm run push         # Push content to services
```

---

**Ready to customize? Provide the information from Part 2 and let's get started!**
Okay down here is my cv just like add in extra inforation u think is necccasarry for randoms parts but keep my wording 

James O’ Sullivan
13 Sundrive Park, Ballinlough, Cork.
Linkedin.com/in/jamesosullivan123
Email: jamesmosullivan1@yahoo.com / Phone: 085 743 8614
Personal Statement
A responsible and motivated 5th-year student at St. Francis College with a diverse range of skills
and experience. I am a qualified Lifeguard/First aid and UCC certified math tutor, showing that I
am self-disciplined and hard-working. Available to work any hours possible.
Employment History:
Admin Assistant – 2025
Coakley Moloney Solicitors
• Filed documents and Logging information
• Boxed and delivered files
• Organized storage rooms
• Summer job
Math’s Tutoring – 2025
UCC
• Week course learning key teaching skills.
• Honorable mentions in Olympiads.
• Tutoring local junior cert students
Work Experience – January-2025
Workvivo - Zoom
• Experienced web development at scale.
• Helped Market research for social media companies.
Dunnes Stores
• Stacked shelves/display cases.
• Moved inventory from the stock room.
Cork Penny Dinners
• I volunteered for a week.
• Cleaned and prepared meals.
Education:
St. Francis College
Rochestown, Cork – 2020 - present
5
th year
Junior Certificate:

Achievements & Projects
International Engineering event | Austria
• Competed in a weeklong IT engineering hackathon.
• Sponsored to go there by companies such as Dell and Microsoft.
• Placed 7th out of 90 participants.

10k Cork Marathon
• Trained for two months
• Shows self-discipline and goal setting
Meitheal team
• Organized activities for first year students
• Created and showcased presentations

featured projects/
Edith glasses:
Bone conduction glasses basically merging hearing aids and connecting to the pcb of old airbuds. 3d printed casing
 for my profile pick and the image of this and the next project js chuck into em
 image folder and tell me what to name the pngs. and ill put them into folder.

 Red-light Green-light:
 The game from squid game from where i revised a c++ vision training model to fit onto esp32 and track u and if it caught u moving during red light u die!! 
 Sending signal to a homemade laser tag vest that lit up
 Made in the rage of a 32 hour hackathon.
