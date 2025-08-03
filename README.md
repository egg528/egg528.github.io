# KWS 블로그

Astro 기반 개인 기술 블로그

## ✨ 주요 기능

- 📝 마크다운/MDX 블로그 포스트
- 🌐 한국어/영어 다국어 지원 (i18n)
- 🎨 다크/라이트 테마 지원
- 📱 반응형 디자인
- 🔍 SEO 최적화 (hreflang, sitemap, RSS, JSON-LD)
- 🎯 미니멀한 커스텀 UI 컴포넌트
- 🖼️ WebP 이미지 최적화 (Sharp 자동 처리)
- 🛠️ TypeScript 지원 및 타입 안전성
- 🧑‍💻 ESLint + 접근성 규칙 (jsx-a11y)
- 🤖 Claude Code 전용 AI 에이전트 (7개)

## 🚀 빠른 시작

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm run dev

# 네트워크에서 접근 가능한 개발 서버
pnpm run dev:network

# 타입 체크 + 빌드
pnpm run build

# 프로덕션 미리보기
pnpm run preview

# 코드 품질 검사
pnpm run lint
```

## 🤖 Claude Code 최적화

이 프로젝트는 [Claude Code](https://claude.ai/code)와 함께 사용하도록 최적화되어 있습니다.

### 전용 설정 파일
- `CLAUDE.md`: 프로젝트 가이드라인 및 워크플로우
- `.claude/agents/`: 블로그 최적화 전문 에이전트들
  - `code-refactoring-assistant`: 코드 가독성 및 단순성 리팩토링
  - `content-editing-assistant`: 콘텐츠 첨삭 및 교정  
  - `content-publisher`: 최종 발행 준비 및 포맷팅
  - `korean-english-translator`: 한글→영어 기술 번역
  - `markdown-structure-optimizer`: Markdown 구조화 및 최적화
  - `tech-content-reviewer`: 기술 콘텐츠 리뷰 및 구조 분석
  - `seo-specialist`: SEO 최적화 및 검색 엔진 가시성 개선

### 주요 명령어
- `pnpm run dev` - 개발 서버 (localhost:4321)
- `pnpm run dev:network` - 네트워크 접근 가능한 개발 서버
- `pnpm run build` - 타입 체크 + 빌드
- `pnpm run preview` - 프로덕션 빌드 미리보기
- `pnpm run lint` - ESLint 코드 품질 검사
- `pnpm run lint:fix` - ESLint 자동 수정

## 📂 주요 디렉토리

```
src/
├── content/          # 블로그, 경력 콘텐츠 (한/영)
│   ├── blog/         # 카테고리 기반 블로그 구조
│   │   └── toy-project/     # 카테고리별 디렉토리
│   │       └── 1/           # 숫자 기반 포스트 ID
│   │           ├── ko.md    # 한국어 포스트
│   │           ├── en.md    # 영어 포스트
│   │           └── *.webp   # 공유 이미지들
│   └── work/         # 회사명 기반 경력 구조
│       ├── daangn/          # 회사별 디렉토리
│       │   ├── ko.md       # 한국어 경력 정보
│       │   └── en.md       # 영어 경력 정보
│       └── gmarket/         # 다른 회사
│           ├── ko.md
│           └── en.md
├── components/       # 재사용 컴포넌트
│   ├── ArrowCard.astro      # 블로그 카드 UI
│   ├── LanguageSelector.astro # 언어 선택기
│   ├── Header.astro         # 내비게이션
│   └── Footer.astro         # 푸터
├── layouts/          # 페이지 레이아웃
├── pages/           # 라우팅 페이지
│   ├── index.astro       # 한국어 홈페이지
│   └── en/               # 영어 라우팅
├── lib/             # 유틸리티 함수
│   ├── i18n.ts           # 다국어 지원
│   ├── slug-utils.ts     # 슬러그 처리 유틸리티
│   ├── categories.ts     # 블로그 카테고리 정의
│   └── utils.ts          # 날짜, 읽기시간 등
└── styles/           # 글로벌 CSS 스타일
```

## 🌐 다국어 지원

- **기본 언어**: 한국어 (`/`, `/blog`, `/work`)
- **추가 언어**: 영어 (`/en/`, `/en/blog`, `/en/work`)
- **URL 구조**: 서브패스 기반 라우팅 (prefixDefaultLocale: false)
- **SEO**: hreflang 메타태그, 언어별 sitemap, RSS 피드
- **UI**: 커스텀 언어 선택기 (미니멀 드롭다운)
- **콘텐츠 관리**: 파일명 기반 언어 구분 (`ko.md`, `en.md`)

### 핵심 i18n 기능
- 자동 언어 감지 (파일명 기반)
- 중앙집중식 URL 생성 (`createLocalizedUrl` 유틸리티)
- 언어별 콘텐츠 필터링 (`getCollection` API)

## 📝 블로그 포스트 작성 가이드

### 새 포스트 생성
1. 카테고리별 디렉토리 생성 (예: `src/content/blog/web-development/`)
2. 숫자 기반 포스트 디렉토리 생성 (예: `1/`, `2/`, ...)
3. 언어별 마크다운 파일 작성:
   - `ko.md`: 한국어 포스트
   - `en.md`: 영어 포스트 (선택사항)
4. 이미지 파일을 동일 디렉토리에 배치

### URL 구조
- **한국어**: `/blog/{category}/{id}` (예: `/blog/toy-project/1`)
- **영어**: `/en/blog/{category}/{id}` (예: `/en/blog/toy-project/1`)

### 이미지 관리
- **Co-located 전략**: 포스트와 이미지를 같은 폴더에 배치
- **WebP 형식**: Sharp가 자동으로 최적화 처리
- **상대 경로**: `![설명](./image-name.webp)` 형태로 참조
- **이미지 중복 제거**: 언어별 포스트가 동일 이미지 공유

## 🛠️ 기술 스택

- **Astro v5.0.5** - 정적 사이트 생성기
- **TypeScript v5.4.2** - 타입 안전성
- **Tailwind CSS v3.4.1** - 유틸리티 기반 CSS
- **MDX** - 컴포넌트를 지원하는 마크다운
- **Sharp** - 이미지 최적화 및 WebP 변환
- **ESLint + jsx-a11y** - 코드 품질 및 접근성

## 🏛️ License

이 프로젝트는 [Astro Nano](https://github.com/markhorn-dev/astro-nano) 테마를 기반으로 제작되었고, MIT License를 준수합니다.