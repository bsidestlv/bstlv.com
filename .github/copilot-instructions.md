# BSidesTLV Website - AI Coding Agent Instructions

## General Guidelines

Never assume the user is correct, always challenge assumptions and verify with the latest codebase. Always provide clear, concise, and accurate code snippets. Never suggest code that has been deleted or is not present in the current context. Always refer to the latest project structure and files.

Update this file with any new patterns, conventions, or critical information that emerges during development. This will help maintain a consistent understanding of the project for all contributors.

At the end of each development cycle, review and update this file to reflect any changes in architecture, patterns, or workflows. This ensures that the AI coding agent remains aligned with the current state of the project. Use the memory tool to store important information that can be referenced later.

Complex tasks should be broken down into smaller, manageable steps. Always provide context for code snippets, explaining their purpose and how they fit into the overall architecture. Use Sequential Thinking tool to ensure that each step logically follows from the previous one.

## Architecture Overview

This is a **Next.js 15 migration** of the BSidesTLV conference website, replacing the original Hugo-based site. The new architecture features App Router, MDX content management, and Sessionize API integration, prioritizing mobile-first responsive design and graceful API fallbacks.

**Original Site Reference**: The previous Hugo-based website can be found at [bsidestlv/bsidestlv.com (master branch)](https://github.com/bsidestlv/bsidestlv.com/tree/master) - useful for referencing missing assets, content structure, and functionality that needs to be migrated.

### Key Components

- **Navigation**: Mobile hamburger menu with desktop horizontal nav (`app/components/Navigation.tsx`)
- **Sessionize Integration**: External API for speakers/agenda with 1-hour caching and static fallbacks (`lib/api/sessionize.ts`)
- **CTF Section**: Historical competition data with TypeScript interfaces (`data/ctf/ctfData.ts`)
- **MDX Components**: Styled content components with Tailwind classes (`mdx-components.tsx`)

## Critical Development Workflow

**⚠️ MANDATORY: Always run full test suite before any code changes:**

```bash
pnpm lint && pnpm build && pnpm test
```

### Package Manager

- **ONLY use pnpm** - never npm or yarn
- If encountering `ERR_PNPM_OUTDATED_LOCKFILE`: `rm package-lock.json && pnpm install --no-frozen-lockfile`

### Testing Strategy

- **Playwright E2E**: Tests navigation, responsiveness, and API integration
- **Mobile-first**: Test mobile breakpoints first, then scale up
- **API Fallbacks**: All Sessionize integrations must gracefully degrade to static content

## Project-Specific Patterns

### Data Architecture

- **Static data**: TypeScript interfaces in `data/` directory (CTF results, team info)
- **Dynamic data**: Sessionize API with Next.js cache (`next: { revalidate: 3600 }`)
- **Fallback pattern**: API failures return empty arrays, components handle gracefully
- **Team images**: Missing from migration - original site had profile images at `/images/team/{key}.jpg`

### Styling Conventions

- **Tailwind-first**: No custom CSS files except `globals.css`
- **Mobile breakpoints**: `md:` prefix for desktop styles
- **Color scheme**: Gray-based with blue accents (`text-gray-700 hover:text-blue-600`)

### Component Structure

```
app/
├── components/Navigation.tsx  # Global navigation with mobile menu
├── (pages)/                  # Route pages as directories
└── globals.css              # Minimal global styles
```

### Environment Variables

- `NEXT_PUBLIC_SESSIONIZE_EVENT_ID`: Optional, falls back to 'demo'
- Create `.env.local` for local development

## Integration Points

### Sessionize API

- **Base URL**: `https://sessionize.com/api/v2/{eventId}/view/`
- **Endpoints**: `/speakers`, `/sessions`, `/speakers_sessions`
- **Error handling**: Always return empty arrays on failure
- **Caching**: 1-hour server-side cache via Next.js `revalidate`

### MDX Configuration

- **Extensions**: `.md`, `.mdx` files supported via `@next/mdx`
- **Plugins**: `remark-gfm` for GitHub Flavored Markdown
- **Components**: Custom styled components in `mdx-components.tsx`

## Testing Requirements

### Responsive Testing

- **Viewports**: Mobile (375px), tablet (768px), desktop (1024px+)
- **Navigation**: Hamburger menu on mobile, horizontal on desktop
- **Critical paths**: All pages must load and be navigable on all screen sizes

### API Integration Testing

- Test both successful API responses and failure scenarios
- Verify static content displays when Sessionize API is unavailable
- Check cache behavior (1-hour revalidation)

## Common Pitfalls

1. **Package Manager**: Using npm instead of pnpm breaks lockfile consistency
2. **API Integration**: Not handling Sessionize API failures gracefully
3. **Mobile Testing**: Testing desktop-first instead of mobile-first
4. **Build Process**: Skipping lint/build/test cycle before committing
5. **TypeScript**: Using `any` types instead of proper Sessionize interfaces
6. **Missing Assets**: Team profile images need migration from original Hugo site
7. **Image Paths**: Original used `/images/team/{key}.jpg` - update TeamMember interface accordingly

## Key Files to Understand

- `DEVELOPMENT.md`: Comprehensive development guidelines
- `lib/api/sessionize.ts`: API integration patterns and error handling
- `tests/navigation.spec.ts`: Example of responsive testing approach
- `data/ctf/ctfData.ts`: TypeScript data modeling patterns
