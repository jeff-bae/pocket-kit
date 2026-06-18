# Pocket Kit

PocketBase Admin UI 디자인 시스템을 기반으로 한 순수 HTML/CSS/JS 컴포넌트 라이브러리입니다.  
빌드 도구나 프레임워크 없이 바로 브라우저에서 실행됩니다.

## 구조

```
pocket-kit/
├── index.html              # 컴포넌트 갤러리 (진입점)
├── common.css              # 디자인 토큰, 테마, 전역 스타일
├── themes.css              # 액센트 컬러 테마 (9가지)
├── components/
│   ├── css/                # 컴포넌트별 스타일시트
│   │   ├── alerts.css
│   │   ├── buttons.css
│   │   ├── dropdowns.css
│   │   ├── forms.css
│   │   ├── layout.css
│   │   ├── loader.css
│   │   ├── modals.css
│   │   ├── navigation.css
│   │   ├── prism-theme.css
│   │   ├── tables.css
│   │   └── typography.css
│   └── js/                 # 컴포넌트별 스크립트
│       ├── api-preview.js
│       ├── dropdown.js
│       ├── modal.js
│       ├── theme.js
│       ├── toast.js
│       └── utils.js
├── lib/
│   ├── fonts/
│   │   ├── ibm-plex-sans/  # IBM Plex Sans (400, 400i, 600)
│   │   ├── ibm-plex-mono/  # IBM Plex Mono (400, 600)
│   │   └── remixicon/      # Remixicon 아이콘 폰트
│   └── prism/              # Prism.js 코드 하이라이터
└── pages/                  # 컴포넌트 데모 페이지
    ├── alerts.html
    ├── buttons.html
    ├── demo.html           # 전체 대시보드 데모 (Classic Layout)
    ├── dropdowns.html
    ├── forms.html
    ├── icons.html
    ├── layout.html
    ├── layout2.html        # 대시보드 데모 (Icon Toolbar Layout)
    ├── modals.html
    ├── navigation.html
    ├── tables.html
    └── typography.html
```

## 컴포넌트 목록

| 컴포넌트 | 설명 |
|---|---|
| **Buttons** | variants (accent/secondary/outline/transparent), sizes, shapes, icons |
| **Forms** | input, textarea, select, checkbox, radio, switch/toggle |
| **Tables** | 레코드 테이블, bulk select, 정렬, 썸네일 |
| **Navigation** | 앱 헤더, 사이드바, 브레드크럼, 페이지 헤더/푸터 |
| **Dropdowns** | 메뉴, 검색 드롭다운, 컬럼 토글 |
| **Modals** | 다이얼로그, 확인 창, 슬라이드 패널/드로어 |
| **Alerts & Toasts** | 알림 배너, 토스트 알림, 라벨/배지, 툴팁 |
| **Typography & Colors** | 헤딩, 본문, 코드, 컬러 팔레트, Remixicon 아이콘 |
| **Layout & Cards** | 카드, 섹션, 그리드, 아코디언, 빈 상태 |

## 디자인 토큰

`common.css`에 CSS 변수로 정의되어 있습니다.

### 주요 색상

| 변수 | 용도 | 기본값 (Light) |
|---|---|---|
| `--accentColor` | 브랜드 강조색 | `#1055c9` |
| `--successColor` | 성공 | `#22a96d` |
| `--dangerColor` | 위험/오류 | `#c33751` |
| `--warningColor` | 경고 | `#e57534` |
| `--infoColor` | 정보 | `#3376e5` |

### 폰트

- 기본 텍스트: `IBM Plex Sans` (400, 400 italic, 600)
- 코드/고정폭: `IBM Plex Mono` (400, 600)
- 아이콘: `Remixicon`

## 테마 시스템

### 다크 모드 (Color Scheme)

라이트 / 다크 / 자동(시스템 설정) 세 가지 모드를 지원합니다.  
`localStorage`의 `pocket-kit-color-scheme` 키로 사용자 선택이 저장됩니다.

```html
<!-- HTML 루트 속성으로 컬러 스킴 지정 -->
<html data-color-scheme="light">   <!-- light | dark | auto -->

<!-- 전환 버튼 -->
<button data-theme-btn="light">Light</button>
<button data-theme-btn="dark">Dark</button>
<button data-theme-btn="auto">Auto</button>
```

```js
PocketKit.theme.applyScheme('dark');
```

### 액센트 컬러 테마 (`themes.css`)

9가지 액센트 컬러 테마를 제공합니다. `data-accent` 속성 하나로 버튼, 링크, 폼, 네비게이션 등 전체 강조색이 일괄 교체됩니다.

| 이름 | Light | Dark |
|---|---|---|
| `blue` *(기본)* | `#1055c9` | `#105ce3` |
| `indigo` | `#4338ca` | `#4f46e5` |
| `violet` | `#6d28d9` | `#7c3aed` |
| `rose` | `#be185d` | `#db2777` |
| `crimson` | `#b91c1c` | `#dc2626` |
| `amber` | `#b45309` | `#d97706` |
| `emerald` | `#059669` | `#10b981` |
| `teal` | `#0e7490` | `#0891b2` |
| `slate` | `#374151` | `#4b5563` |

```html
<!-- HTML 루트 속성으로 액센트 테마 지정 -->
<html data-color-scheme="light" data-accent="emerald">

<!-- 전환 버튼 -->
<button data-accent-btn="blue">Blue</button>
<button data-accent-btn="violet">Violet</button>
<button data-accent-btn="emerald">Emerald</button>
```

```js
PocketKit.theme.applyAccent('rose');
```

두 속성은 독립적으로 동작하므로 `dark` + `emerald`, `light` + `violet` 등 조합이 자유롭습니다.

## 사용법

외부 의존성이 없으므로 파일을 직접 열어 사용합니다.

```html
<!-- 필수 -->
<link rel="stylesheet" href="lib/fonts/remixicon/remixicon.css">
<link rel="stylesheet" href="common.css">

<!-- 액센트 테마 (옵션 — 여러 테마 전환이 필요할 때만 포함) -->
<link rel="stylesheet" href="themes.css">

<!-- 필요한 컴포넌트만 선택하여 포함 -->
<link rel="stylesheet" href="components/css/buttons.css">
<link rel="stylesheet" href="components/css/forms.css">

<!-- 인터랙션이 필요한 컴포넌트 -->
<script src="components/js/theme.js"></script>
<script src="components/js/modal.js"></script>
<script src="components/js/dropdown.js"></script>
<script src="components/js/toast.js"></script>
```

## 데모 실행

`index.html`을 브라우저에서 열거나 로컬 서버로 서빙합니다.

```bash
# PHP 내장 서버 (php82 환경)
php -S localhost:8080

# 또는 Python
python -m http.server 8080
```

이후 `http://localhost:8080` 접속 → 각 컴포넌트 카드 클릭 → `pages/demo.html`에서 전체 대시보드 확인.

## 기술 스택

- HTML5 / CSS3 (CSS 변수, `color-mix()`)
- Vanilla JS (ES5+ IIFE 패턴, 빌드 불필요)
- [IBM Plex Sans / Mono](https://www.ibm.com/plex/) — 로컬 woff2 번들
- [Remixicon](https://remixicon.com/) — 로컬 번들
- [Prism.js](https://prismjs.com/) — 데모 페이지 코드 하이라이트용

## 브라우저 지원

`color-mix()` 등 최신 CSS 기능을 사용하므로 아래 버전 이상을 권장합니다.

| 브라우저 | 최소 버전 |
|---|---|
| Chrome / Edge | 111+ |
| Firefox | 113+ |
| Safari | 16.2+ |

## Contributing

버그 리포트, 기능 제안, PR 모두 환영합니다.

- 이슈 등록 시 재현 방법과 스크린샷을 함께 첨부해 주세요.
- PR은 변경 컴포넌트의 데모 페이지(`pages/`)도 함께 수정해 주세요.

## License

[MIT](./LICENSE) © cb.bae

번들된 서드파티 에셋(IBM Plex 폰트, Remixicon, Prism.js)의 라이선스는 [LICENSE](./LICENSE) 파일 하단을 참조하세요.
