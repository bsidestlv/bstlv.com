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

1. **Clone the repository**

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Install Playwright browsers:**
   ```bash
   pnpm exec playwright install
   ```

4. **Set up environment variables (optional):**
   ```bash
   # Create .env.local with your Sessionize event ID
   SESSIONIZE_EVENT_ID=your_event_id_here
   ```

5. **Run the development server:**
   ```bash
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Development

**⚠️ IMPORTANT: Always bold and test everything before completing work!**

See [DEVELOPMENT.md](./DEVELOPMENT.md) for comprehensive development guidelines, best practices, and troubleshooting.

### Quick Development Checklist
```bash
# Before submitting any changes:
pnpm lint     # ✅ Lint code
pnpm build    # ✅ Build project  
pnpm test     # ✅ Run all tests
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Playwright tests
- `pnpm test:headed` - Run tests with browser UI
- `pnpm test:debug` - Debug tests interactively

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
└── mdx-components.tsx    # MDX component definitions
```

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Content**: MDX for maintainable content
- **Testing**: Playwright for e2e testing
- **API**: Sessionize integration for dynamic content
- **TypeScript**: Full type safety

## Troubleshooting

### ERR_PNPM_OUTDATED_LOCKFILE
If you encounter lockfile issues:
```bash
rm package-lock.json              # Remove npm lockfile
pnpm install --no-frozen-lockfile  # Update pnpm lockfile
```

### Missing Browsers for Testing
```bash
pnpm exec playwright install
```

For more detailed troubleshooting, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## Contributing

1. Follow the development guidelines in [DEVELOPMENT.md](./DEVELOPMENT.md)
2. Always run the full test suite before submitting changes
3. Ensure mobile responsiveness on all changes
4. Test API integrations and fallback behavior

## License

This project is licensed under the MIT License.
