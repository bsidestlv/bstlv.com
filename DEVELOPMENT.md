# BSidesTLV Website Development Guide

This guide provides best practices for developing the BSidesTLV website to ensure a smooth development experience.

## Prerequisites

- Node.js 20+
- pnpm (package manager)

## Initial Setup

### 1. Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Install Playwright Browsers (for testing)

```bash
pnpm exec playwright install
```

## Development Workflow

### Start Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Always Bold and Test Everything

Before completing any work, follow this checklist:

#### ✅ Lint Your Code

```bash
pnpm lint
```

Fix any linting errors before proceeding.

#### ✅ Build the Project

```bash
pnpm build
```

Ensure the project builds without errors.

#### ✅ Run Tests

```bash
pnpm test
```

All tests must pass before submitting changes.

#### ✅ Test Responsiveness

```bash
# Run tests with headed browser to visually verify
pnpm test:headed
```

## Common Issues and Solutions

### ERR_PNPM_OUTDATED_LOCKFILE

If you encounter this error:

1. **Remove conflicting lockfiles:**

   ```bash
   rm package-lock.json  # Remove npm lockfile if present
   ```

2. **Update pnpm lockfile:**

   ```bash
   pnpm install --no-frozen-lockfile
   ```

3. **Verify dependencies are correct:**
   ```bash
   pnpm install
   ```

### TypeScript Errors

If you encounter TypeScript compatibility issues:

1. Check that TypeScript version is compatible with ESLint:

   ```bash
   pnpm ls typescript
   ```

2. Our project uses TypeScript `^5.8.3` for compatibility with ESLint rules.

### Missing Playwright Browsers

If tests fail with missing browser executables:

```bash
pnpm exec playwright install
```

## Project Structure

```
.
├── app/                 # Next.js app directory
│   ├── (routes)/       # Page routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── data/               # JSON data files
├── lib/                # Utility functions
├── public/             # Static assets
├── tests/              # Playwright tests
└── mdx-components.tsx  # MDX component definitions
```

## Testing Strategy

### E2E Testing with Playwright

- **Navigation tests:** Verify menu functionality across screen sizes
- **Responsive tests:** Ensure all pages work on mobile, tablet, and desktop
- **Content tests:** Validate all major components are visible

### API Integration Testing

- **Sessionize API:** Test speaker and agenda data fetching
- **Fallback behavior:** Ensure graceful degradation when API is unavailable

## Best Practices

### 1. Always Test Before Submitting

Never submit code without running the full test suite:

```bash
pnpm lint && pnpm build && pnpm test
```

### 2. Mobile-First Development

Test on mobile devices first, then scale up to desktop.

### 3. API Integration

- Always provide fallback content for API failures
- Use proper error handling and loading states
- Cache API responses appropriately (1 hour for Sessionize)

### 4. Performance

- Optimize images using Next.js Image component
- Use static generation where possible
- Minimize JavaScript bundle size

### 5. Accessibility

- Use semantic HTML
- Include proper ARIA labels
- Test keyboard navigation
- Ensure sufficient color contrast

## Environment Variables

Create a `.env.local` file for local development:

```env
# Sessionize API (optional - falls back to static content)
SESSIONIZE_EVENT_ID=your_event_id_here
```

## Deployment

The site is deployed automatically via GitHub Actions. Ensure all tests pass before merging to main.

## Getting Help

- Check this guide first
- Review existing tests for examples
- Open an issue for bugs or feature requests
- Follow the mobile-first, test-driven approach outlined here

## Summary Checklist

Before completing any work:

- [ ] Code lints without errors (`pnpm lint`)
- [ ] Project builds successfully (`pnpm build`)
- [ ] All tests pass (`pnpm test`)
- [ ] Mobile responsiveness verified
- [ ] API integration tested
- [ ] Performance optimized
- [ ] Accessibility validated

Following these practices ensures a robust, maintainable, and user-friendly website.
