# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Management
**IMPORTANT**: This project uses **pnpm**, not npm. Always use pnpm commands for package management.

## Production Site
- **URL**: https://egg528.github.io
- **Deployment**: GitHub Pages (automatic deployment on push to main)

## Development Commands
- `pnpm run dev` - Start development server (localhost:4321)
- `pnpm run dev:network` - Start dev server accessible on network
- `pnpm run build` - Type check and build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run preview:network` - Preview production build on network
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Auto-fix ESLint issues

## Technology Stack
- **Astro v5.15.4** - Static site generator with TypeScript support
- **TypeScript v5.9.3** - Type safety with strict mode enabled
- **Tailwind CSS v3.4.1** - Utility-first CSS framework with typography plugin
- **MDX** - Markdown with component support for content
- **Internationalization (i18n)** - Korean (default) + English with subpath routing
- **RSS & Sitemap** - @astrojs/rss, @astrojs/sitemap for SEO
- **Sharp v0.34.5** - Image optimization and WebP processing
- **ESLint** - Code quality and accessibility (jsx-a11y)

## Project Architecture

### Source Structure (`src/`)
- `components/` - Reusable Astro components (Header, Footer, ArrowCard, LanguageSelector, etc.)
- `content/` - Content collections with schema validation
  - `blog/` - Category-based blog structure with numeric IDs
- `layouts/` - Page layout templates
- `pages/` - File-based routing with dynamic routes
  - `en/` - English language routes (/en/*)
- `lib/` - Utility functions (i18n, slug processing, date formatting, reading time calculation)
- `styles/` - Global CSS styles

### TypeScript Configuration
- **Strict mode enabled**: `extends "astro/tsconfigs/strict"`
- **Path aliases**: `@*` maps to `./src/*` for cleaner imports
- **Example**: `import { LANGUAGES } from "@lib/i18n"` instead of `"../../lib/i18n"`

### Content Management
- Content is managed through type-safe collections defined in `src/content/config.ts`
- Use `getCollection()` API to fetch content
- **Blog Collection Schema** (Zod validation):
  - `title`: string (required, non-empty)
  - `description`: string (required, non-empty)
  - `date`: date (coerced from string)
  - `draft`: boolean (default: false)
- **Blog Structure**: Category-based directories with numeric post IDs
  - Example: `src/content/blog/{category}/{id}/ko.md`
- **Language Support**: File-based language separation (`ko.md`, `en.md`)
  - No `locale` field needed in frontmatter - language auto-detected from filename

### Image Management
**IMPORTANT**: Use co-located images strategy for blog posts.

#### File Structure
```
src/content/blog/
├── toy-project/              # Category directory
│   ├── 1/                    # Numeric post ID
│   │   ├── ko.md            # Korean content
│   │   ├── en.md            # English content
│   │   ├── cover.webp       # Shared cover image
│   │   ├── diagram-1.webp   # Technical diagrams
│   │   └── screenshot-example.webp
│   └── 2/                    # Next post
└── web-development/          # Another category
    └── 1/
        ├── ko.md
        ├── en.md
        └── *.webp
```

#### Image Guidelines
- **Co-located**: Store images in the same folder as the markdown files
- **WebP format**: Use `.webp` for optimal compression (Sharp auto-optimization)
- **Relative paths**: Reference images as `![설명](./image-name.webp)`
- **Meaningful names**: Use descriptive filenames in English
- **Korean alt text**: Write alt text in Korean for accessibility
- **Shared Images**: Both language versions share the same image files (no duplication)

#### File Naming Convention
- `cover.webp` - Post thumbnail/cover image
- `diagram-[number].webp` - Technical diagrams
- `screenshot-[description].webp` - Screenshots
- `code-example-[number].webp` - Code examples
- `[feature-name].webp` - Feature-specific images

#### Usage in Markdown
```markdown
## 구현 방법

다음과 같이 설정 파일을 수정합니다:

![Astro 설정 파일 예시](./screenshot-astro-config.webp)

위 이미지와 같이 integrations 배열에 추가하면...
```

### Styling
- Tailwind CSS with dark/light theme support
- Typography plugin for markdown content
- Custom font configuration (SUIT font family)
- Responsive design patterns throughout

### Internationalization (i18n)
**IMPORTANT**: This project supports Korean (default) and English with subpath routing.

**IMPORTANT**: When modifying files in `/pages` or `/content` directories, always consider both Korean (default) and English versions. Updates should be applied to both locales to maintain consistency across languages.

#### URL Structure
- Korean (default): `/`, `/blog`, `/blog/{category}/{id}`
- English: `/en/`, `/en/blog`, `/en/blog/{category}/{id}`
- Example: `/blog/toy-project/1`, `/en/blog/toy-project/1`

#### i18n Implementation
- **Central configuration**: `src/lib/i18n.ts`
- **Language detection**: File-based detection from filename (`ko.md`, `en.md`)
- **URL generation**: Centralized `createLocalizedUrl()` utility
- **Components**: Custom `LanguageSelector` with minimal dropdown design
- **SEO**: hreflang meta tags, language-specific sitemaps

#### Key i18n Functions
```typescript
// Core utilities in src/lib/i18n.ts
getLocaleFromPath(pathname: string): Language
createLocalizedUrl(path: string, lang: Language): string
getAlternateLanguageUrl(currentPath: string, targetLocale: Language): string
normalizeLanguage(lang: string): Language
isValidLanguage(lang: string): boolean

// Constants
LANGUAGES: { ko: { code: "ko", label: "한국어" }, en: { code: "en", label: "English" } }
DEFAULT_LANGUAGE: "ko"
```

#### Content Localization
- **File-based language separation**: `ko.md` for Korean, `en.md` for English
- **No frontmatter locale field needed**: Language detected from filename
- **Category from directory**: Category automatically extracted from directory path
- **Slug utilities** (`src/lib/slug-utils.ts`):
  ```typescript
  parseBlogSlug(slug: string): BlogSlugInfo | null
  getLanguageFromFilename(filename: string): Language | null
  createBlogSlug(category: string, id: number): string
  getCollectionSlug(entry: CollectionEntry<"blog">): string
  getBlogEntryLanguage(entry: CollectionEntry<"blog">): Language
  getBlogEntryCategory(entry: CollectionEntry<"blog">): string
  ```

#### Blog Categories
- Categories are centrally managed in `src/lib/categories.ts`
- Available categories with Korean/English translations:
  - `toy-project`: 토이 프로젝트 / Toy Project
  - `book`: 책 / Book
  - `data-oriented-programming`: 데이터 지향 프로그래밍 / Data-Oriented Programming
  - `clean-architecture`: 만들면서 배우는 클린 아키텍처 / Clean Architecture
  - `system-design-interview`: 가상 면접 사례로 배우는 대규모 시스템 설계 기초 1 / System Design Interview 1
- Use `getCategoryName(key, locale)` and `getAllCategories(locale)` utilities

### Key Configuration Files
- `astro.config.mjs` - Astro configuration with i18n, MDX, sitemap, Tailwind
- `tailwind.config.mjs` - Tailwind customization with typography plugin
- `.eslintrc.cjs` - ESLint rules for TypeScript, Astro, and accessibility
- `tsconfig.json` - TypeScript with path aliases (`@*` → `./src/*`)
- `src/lib/i18n.ts` - Internationalization utilities and configuration
- `src/lib/slug-utils.ts` - Centralized slug processing utilities for content collections
- `src/lib/categories.ts` - Blog category definitions with i18n support
- `package.json` - Project dependencies and scripts (pnpm workspace)

## Blog Post Creation Guide

### Creating New Blog Posts

1. **Choose or Create Category Directory**
   ```bash
   # Create category directory if it doesn't exist
   mkdir -p src/content/blog/web-development
   ```

2. **Create Post Directory with Numeric ID**
   ```bash
   # Use next available number in the category
   mkdir src/content/blog/web-development/1
   ```

3. **Create Language-Specific Files**
   ```bash
   # Korean version (required)
   touch src/content/blog/web-development/1/ko.md
   
   # English version (optional)
   touch src/content/blog/web-development/1/en.md
   ```

4. **Add Frontmatter to Each File**
   ```markdown
   ---
   title: "포스트 제목"
   description: "포스트 설명"
   date: "2024-01-15"
   draft: false
   ---
   
   포스트 내용...
   ```

5. **Add Images (Optional)**
   ```bash
   # Place images in the same directory
   cp cover.webp src/content/blog/web-development/1/
   cp diagram-1.webp src/content/blog/web-development/1/
   ```

### URL Structure
- **Korean**: `/blog/web-development/1`
- **English**: `/en/blog/web-development/1`

### Important Notes
- **Category**: Automatically extracted from directory name (`web-development`)
- **ID**: Must be numeric and unique within each category
- **Language**: Determined by filename (`ko.md` vs `en.md`)
- **Images**: Shared between language versions (no duplication needed)
- **Draft Posts**: Set `draft: true` to hide from production

## Available Sub-Agents
This project includes specialized agents in `.claude/agents/` for blog management:

### Content Creation & Analysis
- **content-editing-assistant** - Content editing and proofreading with style improvements
- **korean-english-translator** - Korean to English translation with technical accuracy
- **markdown-structure-optimizer** - Optimize markdown structure using advanced features
- **seo-specialist** - SEO optimization for maximum search visibility and performance
- **content-publisher** - Final publishing preparation with consistent formatting

### Agent Configuration
- Agents are configured in `.claude/agents/` directory
- Each agent has specific tools and permissions defined
- Use `.claude/settings.local.json` for local agent customization

### Agent Usage Best Practices
**IMPORTANT**: Always use sub-agents in parallel when possible to maximize efficiency:

```
// Good: Parallel agent usage
Use multiple Task tool calls in a single message:
- Task(content-editing-assistant) + Task(markdown-structure-optimizer) for content review
- Task(seo-specialist) + Task(content-editing-assistant) for SEO-optimized content
- Task(korean-english-translator) for translation work
- Multiple analysis agents simultaneously for comprehensive feedback

// Avoid: Sequential single-agent usage
Using one agent at a time when multiple could provide better insights
```

### Recommended Agent Combinations
- **Content Review**: `content-editing-assistant` + `markdown-structure-optimizer` in parallel
- **SEO-Optimized Content**: `seo-specialist` + `content-editing-assistant` together
- **Translation**: `korean-english-translator` for Korean to English content
- **Publishing**: `content-publisher` after all other agents complete (validates formatting and runs build tests)
- **Full Analysis**: Run `content-editing-assistant`, `markdown-structure-optimizer`, and `seo-specialist` in parallel for comprehensive feedback

## Development Workflow
1. **Development**: Run `pnpm run dev` for local development (localhost:4321)
2. **Type Safety**: Build runs automatic type checking (`astro check`) before compilation
3. **Code Quality**: ESLint enforces code quality and accessibility standards (jsx-a11y)
4. **Performance**: Content is pre-rendered at build time for optimal performance
5. **Image Optimization**: Sharp automatically processes and optimizes images to WebP
6. **Content Management**: Use sub-agents in parallel for efficient blog content creation and review
7. **Deployment**: Automatic deployment to GitHub Pages on push to main branch

## Common Issues & Solutions

### Adding New Blog Categories
1. Add category to `src/lib/categories.ts` with Korean/English translations
2. Create directory under `src/content/blog/{category-name}/`
3. Category key must match directory name (kebab-case)

### TypeScript Import Errors
- Use path aliases: `@lib/utils` instead of relative paths
- Check `tsconfig.json` for path mapping configuration
- Run `pnpm astro check` to verify type errors

### i18n URL Issues
- Korean (default) URLs have no locale prefix: `/blog/...`
- English URLs have `/en/` prefix: `/en/blog/...`
- Use `createLocalizedUrl()` utility instead of manual URL construction