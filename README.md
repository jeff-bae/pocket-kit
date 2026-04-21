# Pocket UI

PocketBase Admin UI 디자인 시스템을 기반으로 한 순수 HTML/CSS/JS 컴포넌트 라이브러리입니다.  
빌드 도구나 프레임워크 없이 바로 브라우저에서 실행됩니다.

## 구조

```
pocket-ui/
├── index.html              # 컴포넌트 갤러리 (진입점)
├── common.css              # 디자인 토큰, 테마, 전역 스타일
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
    ├── demo.html           # 전체 대시보드 데모
    ├── dropdowns.html
    ├── forms.html
    ├── layout.html
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

## 테마 (다크 모드)

라이트 / 다크 / 자동(시스템 설정) 세 가지 모드를 지원합니다.  
`localStorage`에 `pocket-ui-color-scheme` 키로 사용자 선택이 저장됩니다.

```html
<!-- HTML 루트 속성으로 테마 지정 -->
<html data-color-scheme="light">   <!-- light | dark | auto -->

<!-- 테마 전환 버튼 -->
<button data-theme-btn="light">Light</button>
<button data-theme-btn="dark">Dark</button>
<button data-theme-btn="auto">Auto</button>
```

```js
// JS API
PocketUI.theme.applyScheme('dark');
```

## 사용법

외부 의존성이 없으므로 파일을 직접 열어 사용합니다.

```html
<!-- 필수 -->
<link rel="stylesheet" href="lib/fonts/remixicon/remixicon.css">
<link rel="stylesheet" href="common.css">

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
