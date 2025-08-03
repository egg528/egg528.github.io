# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Management
**IMPORTANT**: This project uses **pnpm**, not npm. Always use pnpm commands for package management.

## Development Commands
- `pnpm run dev` - Start development server (localhost:4321)
- `pnpm run dev:network` - Start dev server accessible on network
- `pnpm run build` - Type check and build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run preview:network` - Preview production build on network
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Auto-fix ESLint issues

## Technology Stack
- **Astro v5.0.5** - Static site generator with TypeScript support
- **Tailwind CSS v3.4.1** - Utility-first CSS framework
- **MDX** - Markdown with component support for content
- **Internationalization (i18n)** - Korean (default) + English with subpath routing
- **RSS & Sitemap** - @astrojs/rss, @astrojs/sitemap for SEO
- **Sharp** - Image optimization and processing
- **ESLint** - Code quality and accessibility (jsx-a11y)

## Project Architecture

### Source Structure (`src/`)
- `components/` - Reusable Astro components (Header, Footer, ArrowCard, LanguageSelector, etc.)
- `content/` - Content collections with schema validation
  - `blog/` - Category-based blog structure with numeric IDs
  - `work/` - Company-based work experience structure
- `layouts/` - Page layout templates
- `pages/` - File-based routing with dynamic routes
  - `en/` - English language routes (/en/*)
- `lib/` - Utility functions (i18n, slug processing, date formatting, reading time calculation)
- `styles/` - Global CSS styles

### Content Management
- Content is managed through type-safe collections defined in `src/content/config.ts`
- Use `getCollection()` API to fetch content
- Frontmatter provides metadata with Zod schema validation
- **Blog Structure**: Category-based directories with numeric post IDs
- **Language Support**: File-based language separation (`ko.md`, `en.md`)

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
- Korean (default): `/`, `/blog/{category}/{id}`, `/work`
- English: `/en/`, `/en/blog/{category}/{id}`, `/en/work`
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
getCurrentLanguageFromUrl(pathname: string): Language
createLocalizedUrl(path: string, lang: Language): string
LANGUAGES: { ko: {...}, en: {...} }
DEFAULT_LANGUAGE: "ko"
```

#### Content Localization
- **File-based language separation**: `ko.md` for Korean, `en.md` for English
- **No frontmatter locale field needed**: Language detected from filename
- **Category from directory**: Category automatically extracted from directory path
- **Slug utilities**: Use functions from `src/lib/slug-utils.ts` for language/category detection

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

## Work Experience Management

### Creating Work Entries

1. **Create Company Directory**
   ```bash
   # Create company directory
   mkdir -p src/content/work/company-name
   ```

2. **Create Language Files**
   ```bash
   # Korean version (required)
   touch src/content/work/company-name/ko.md
   
   # English version (optional)
   touch src/content/work/company-name/en.md
   ```

3. **Add Frontmatter**
   ```markdown
   ---
   company: "회사명"
   role: "직책"
   logo: "/company-logos/logo.png"
   dateStart: "2022-01-01"
   dateEnd: "2024-12-31"  # or "현재" for current job
   ---
   
   경력 내용...
   ```

### Work Entry Structure
- **Company**: Automatically extracted from directory name
- **Language**: Determined by filename (`ko.md` vs `en.md`)
- **No locale field needed**: Language detection is file-based

## Available Sub-Agents
This project includes specialized agents in `.claude/agents/` for blog management:

### Content Creation & Analysis
- **code-refactoring-assistant** - Code refactoring focused on readability and simplicity
- **content-editing-assistant** - Content editing and proofreading with style improvements  
- **content-publisher** - Final publishing preparation with consistent formatting
- **korean-english-translator** - Korean to English translation with technical accuracy
- **markdown-structure-optimizer** - Optimize markdown structure using advanced features
- **tech-content-reviewer** - Technical content review and structure analysis
- **seo-specialist** - SEO optimization for maximum search visibility and performance

### Agent Configuration
- Agents are configured in `.claude/agents/` directory
- Each agent has specific tools and permissions defined
- Use `.claude/settings.local.json` for local agent customization

### Agent Usage Best Practices
**IMPORTANT**: Always use sub-agents in parallel when possible to maximize efficiency:

```
// Good: Parallel agent usage
Use multiple Task tool calls in a single message:
- Task(content-editing-assistant) + Task(tech-content-reviewer) for content review
- Task(markdown-structure-optimizer) + Task(content-editing-assistant) for structure optimization
- Task(korean-english-translator) for translation work
- Multiple analysis agents simultaneously for comprehensive feedback

// Avoid: Sequential single-agent usage
Using one agent at a time when multiple could provide better insights
```

### Recommended Agent Combinations
- **Content Review**: `content-editing-assistant` + `tech-content-reviewer` in parallel
- **Structure Optimization**: `markdown-structure-optimizer` + `content-editing-assistant` together
- **Translation**: `korean-english-translator` for Korean to English content
- **Code Quality**: `code-refactoring-assistant` for readability and simplicity improvements
- **SEO Optimization**: `seo-specialist` for search engine visibility improvements
- **Publishing**: `content-publisher` after all other agents complete
- **Full Analysis**: All suggestion-only agents in parallel for comprehensive feedback

## Development Workflow
1. Run `pnpm run dev` for development
2. Build runs automatic type checking before compilation
3. ESLint enforces code quality and accessibility standards
4. Content is pre-rendered at build time for optimal performance
5. **Use sub-agents in parallel** for efficient blog content management