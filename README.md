# BSidesTLV 2025 Website

Official website for BSidesTLV 2025 cybersecurity conference, built with Next.js 15, featuring mobile-responsive design and dynamic content management.

## Features

### 🏆 CTF Competition
- Historical CTF results from 2022-2024
- Challenge categories and participation information
- Practice resources and registration details

### 🎤 Sessionize Integration
- Dynamic speaker profiles via Sessionize API
- Real-time agenda updates
- Automatic fallback to static content when API is unavailable

### 📱 Mobile-Responsive Design
- Hamburger navigation menu for mobile devices
- Optimized layouts for desktop, tablet, and mobile
- Comprehensive Playwright testing for all screen sizes

### 📝 MDX Content Management
- Easy-to-maintain content using MDX files
- Structured data files for speakers, team members, and event information
- Consistent styling with Tailwind CSS components

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Sessionize event ID
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Playwright tests
- `npm run test:headed` - Run tests with browser UI
- `npm run test:debug` - Debug tests interactively

## Testing

The project includes comprehensive end-to-end tests using Playwright:

```bash
# Install browsers (first time only)
npx playwright install

# Run all tests
npm test

# Run specific test files
npx playwright test tests/navigation.spec.ts
npx playwright test tests/responsive.spec.ts
```

## Sessionize API Integration

The website integrates with Sessionize for dynamic speaker and agenda content:

1. Set your Sessionize event ID in `.env.local`:
   ```
   NEXT_PUBLIC_SESSIONIZE_EVENT_ID=your-event-id
   ```

2. The API automatically fetches:
   - Speaker profiles and bios
   - Session information and descriptions
   - Event schedule and room assignments

3. Fallback content is displayed when the API is unavailable

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # Reusable React components
│   ├── ctf/               # CTF competition page
│   ├── speakers/          # Speakers page with Sessionize integration
│   ├── agenda/            # Event agenda with dynamic content
│   └── ...                # Other pages
├── data/                  # Structured data files
│   ├── ctf/              # CTF historical data
│   ├── team/             # Team member information
│   └── sponsors/         # Sponsor information
├── lib/                  # Utility functions
│   └── api/              # API integration (Sessionize)
├── tests/                # Playwright test files
└── content/              # MDX content files
```

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content**: MDX for maintainable content
- **Testing**: Playwright for e2e testing
- **API**: Sessionize integration for dynamic content
- **TypeScript**: Full type safety

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
