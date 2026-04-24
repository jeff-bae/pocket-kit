# Pocket UI — Design System Context

PocketBase Admin UI 디자인 시스템 기반의 순수 HTML/CSS/JS 컴포넌트 라이브러리.
빌드 도구 없음. 외부 의존성 없음. 모든 에셋 로컬 번들.

---

## Setup

```html
<html lang="ko" data-color-scheme="light">  <!-- light | dark | auto -->
<head>
  <!-- 필수 -->
  <link rel="stylesheet" href="lib/fonts/remixicon/remixicon.css">
  <link rel="stylesheet" href="common.css">

  <!-- 필요한 컴포넌트만 선택 -->
  <link rel="stylesheet" href="components/css/buttons.css">
  <link rel="stylesheet" href="components/css/forms.css">
  <link rel="stylesheet" href="components/css/navigation.css">
  <link rel="stylesheet" href="components/css/dropdowns.css">
  <link rel="stylesheet" href="components/css/tables.css">
  <link rel="stylesheet" href="components/css/modals.css">
  <link rel="stylesheet" href="components/css/alerts.css">
  <link rel="stylesheet" href="components/css/loader.css">
  <link rel="stylesheet" href="components/css/layout.css">
  <link rel="stylesheet" href="components/css/typography.css">
</head>
<body>
  <!-- JS (필요한 것만) -->
  <script src="components/js/theme.js"></script>
  <script src="components/js/modal.js"></script>
  <script src="components/js/dropdown.js"></script>
  <script src="components/js/toast.js"></script>
</body>
```

---

## Design Tokens (CSS Variables)

모든 변수는 `common.css`의 `:root`에 정의. 다크 모드는 `[data-color-scheme="dark"]`에서 재정의.

### Typography
| Variable | Value |
|---|---|
| `--fontFamily` | IBM Plex Sans, system-ui |
| `--monoFontFamily` | IBM Plex Mono, Courier New |
| `--fontSize` | 14px |
| `--smFontSize` | 13px |
| `--lgFontSize` | 15px |
| `--lineHeight` | 22px |

### Spacing
| Variable | Value |
|---|---|
| `--spacing` | 30px |
| `--smSpacing` | 20px |
| `--sidebarSpacing` | 14px |
| `--tableSpacing` | 12px |
| `--siblingSpacing` | 8px |
| `--gridGap` | 20px |

### Sizes
| Variable | Value |
|---|---|
| `--btnHeight` | 45px |
| `--smBtnHeight` | 35px |
| `--lgBtnHeight` | 52px |
| `--borderRadius` | 5px |
| `--lgBorderRadius` | 15px |
| `--pageSidebarWidth` | 240px |
| `--wrapperWidth` | 840px |
| `--smWrapperWidth` | 430px |
| `--lgWrapperWidth` | 1150px |

### Brand Colors
| Variable | Light | Dark |
|---|---|---|
| `--accentColor` | #1055c9 | #1055c9 |
| `--successColor` | #22a96d | #27865d |
| `--dangerColor` | #c33751 | #bb303e |
| `--warningColor` | #e57534 | #cf4e17 |
| `--infoColor` | #3376e5 | #4273bd |

### Surface Colors
| Variable | Light | Dark |
|---|---|---|
| `--surfaceColor` | #fff | #1f1f1f |
| `--surfaceAlt1Color` | #f6f7f9 | surface + white 3% |
| `--surfaceAlt2Color` | #e8eaee | surface + white 7% |
| `--surfaceAlt3Color` | #dfe2e7 | surface + white 12% |
| `--surfaceTxtColor` | #25272d | #dedede |
| `--surfaceTxtHintColor` | #6b747b | txt 45% transparent |
| `--pageBgColor` | #fff | #000 |

---

## Page Layout Structure

```html
<div class="app">
  <header class="app-header accent-surface"> ... </header>
  <div class="page">
    <aside class="page-sidebar"> ... </aside>
    <main class="page-content">
      <div class="wrapper">...</div>       <!-- max-width: 840px -->
      <div class="wrapper lg">...</div>    <!-- max-width: 1150px -->
      <div class="wrapper sm">...</div>    <!-- max-width: 430px -->
    </main>
  </div>
</div>
```

---

## Components

### Buttons

```html
<!-- Variants -->
<button class="btn">Primary (dark)</button>
<button class="btn secondary">Secondary</button>
<button class="btn accent">Accent (blue)</button>
<button class="btn success">Success</button>
<button class="btn danger">Danger</button>
<button class="btn warning">Warning</button>
<button class="btn info">Info</button>

<!-- Outline -->
<button class="btn outline">Outline</button>
<button class="btn outline accent">Outline Accent</button>
<button class="btn outline danger">Outline Danger</button>

<!-- Transparent -->
<button class="btn transparent">Transparent</button>
<button class="btn transparent secondary">Transparent Hint</button>

<!-- Sizes -->
<button class="btn sm accent">Small</button>
<button class="btn accent">Default</button>
<button class="btn lg accent">Large</button>

<!-- Shapes -->
<button class="btn pill accent">Pill</button>
<button class="btn circle secondary"><i class="ri-settings-3-line"></i></button>
<button class="btn sm circle transparent secondary"><i class="ri-more-2-line"></i></button>
<button class="btn block accent">Full Width</button>

<!-- With icon -->
<button class="btn accent"><i class="ri-add-line"></i> New Record</button>

<!-- Arrow / next -->
<button class="btn accent next">
  Continue <i class="ri-arrow-right-line"></i>
</button>

<!-- Loading (spin icon) -->
<button class="btn secondary rotate-btn loading">
  <i class="ri-refresh-line"></i> Refresh
</button>

<!-- Disabled -->
<button class="btn accent" disabled>Disabled</button>
```

### Forms

```html
<!-- Basic field -->
<div class="field">
  <label for="name">Name</label>
  <input type="text" id="name" placeholder="Enter name">
</div>

<!-- Textarea -->
<div class="field">
  <label>Description</label>
  <textarea placeholder="Enter description"></textarea>
</div>

<!-- Select -->
<div class="field">
  <label>Type</label>
  <select>
    <option>Option A</option>
    <option>Option B</option>
  </select>
</div>

<!-- Checkbox -->
<div class="field">
  <input type="checkbox" id="chk">
  <label for="chk">Enable feature</label>
</div>

<!-- Radio -->
<div class="field">
  <input type="radio" name="type" id="r1">
  <label for="r1">Option A</label>
</div>

<!-- Switch / Toggle -->
<input type="checkbox" class="switch" id="sw">
<label for="sw">Active</label>
<input type="checkbox" class="switch sm" id="sw2">

<!-- Horizontal fields row -->
<div class="fields">
  <div class="field"><label>First</label><input type="text"></div>
  <div class="field"><label>Last</label><input type="text"></div>
</div>

<!-- Vertical fields column -->
<div class="fields fields-col">
  <div class="field">...</div>
  <div class="field">...</div>
</div>

<!-- Addon field (prefix/suffix fused with input) -->
<div class="field addon">
  <span class="input-addon">https://</span>
  <input type="text" placeholder="example.com">
</div>
<div class="field addon">
  <input type="text" placeholder="Search...">
  <button class="input-addon"><i class="ri-search-line"></i></button>
</div>

<!-- Input with leading icon -->
<div class="input-icon field">
  <i class="ri-search-line"></i>
  <input type="text" placeholder="Search...">
</div>

<!-- Error / hint text -->
<div class="field">
  <label>Email</label>
  <input type="email">
  <div class="field-error">Invalid email address</div>
  <div class="field-hint">We will never share your email.</div>
</div>

<!-- Searchbar (page-level filter bar) -->
<div class="searchbar">
  <input type="text" class="searchbar-input" placeholder="Search records...">
  <button class="btn sm secondary">Filter</button>
</div>

<!-- Form group (section with top-border separator between groups) -->
<div class="form-group">
  <div class="field">...</div>
</div>
<div class="form-group">
  <div class="field">...</div>
</div>
```

### Navigation

```html
<!-- App header (white) -->
<header class="app-header">
  <a href="/" class="logo"><img src="logo.svg" alt="Logo"></a>
  <nav class="app-main-nav">
    <a href="#" class="header-link active">Collections</a>
    <a href="#" class="header-link">Logs</a>
  </nav>
  <div class="app-header-separator"></div>
  <button class="btn sm circle transparent secondary"><i class="ri-settings-3-line"></i></button>
</header>

<!-- App header (accent / blue background) -->
<header class="app-header accent-surface">...</header>

<!-- Sidebar -->
<aside class="page-sidebar">
  <div class="sidebar-search">
    <div class="fields">
      <div class="field">
        <input type="text" placeholder="Search collections...">
      </div>
    </div>
  </div>
  <div class="sidebar-content">
    <details class="nav-group" open>
      <summary>Collections</summary>
      <button class="nav-item active">
        <i class="ri-folder-2-line"></i>
        <span class="txt">posts</span>
        <i class="ri-pushpin-line pin"></i>
      </button>
      <button class="nav-item">
        <i class="ri-folder-2-line"></i>
        <span class="txt">messages</span>
      </button>
    </details>
  </div>
</aside>

<!-- Page header -->
<div class="page-header">
  <div class="breadcrumbs">
    <div>Collections</div>
    <div>posts</div>
  </div>
  <div class="page-header-secondary-btns">
    <button class="btn sm outline">API</button>
  </div>
  <div class="page-header-primary-btns">
    <button class="btn sm accent"><i class="ri-add-line"></i> New Record</button>
  </div>
</div>

<!-- Compact page header -->
<div class="page-header compact">...</div>

<!-- Page footer -->
<div class="page-footer">
  <div class="total-count">25 records</div>
  <button class="btn sm transparent secondary"><i class="ri-arrow-left-s-line"></i></button>
  <button class="btn sm transparent secondary"><i class="ri-arrow-right-s-line"></i></button>
</div>
```

### Dropdowns

Preferred: native Popover API. Fallback: `.dropdown-wrapper` + JS.

```html
<!-- Popover API (modern browsers) -->
<button class="btn sm secondary" popovertarget="menu1">
  <i class="ri-more-2-line"></i>
</button>
<div id="menu1" class="dropdown" popover>
  <button class="dropdown-item"><i class="ri-edit-2-line"></i> Edit</button>
  <button class="dropdown-item"><i class="ri-file-copy-line"></i> Duplicate</button>
  <hr>
  <button class="dropdown-item txt-danger"><i class="ri-delete-bin-7-line"></i> Delete</button>
</div>

<!-- JS fallback (.dropdown-wrapper) -->
<div class="dropdown-wrapper left">
  <button class="btn sm secondary" data-dropdown-trigger aria-expanded="false">
    Options <i class="ri-arrow-down-s-line"></i>
  </button>
  <div class="dropdown">
    <button class="dropdown-item active"><i class="ri-check-line"></i> Selected</button>
    <button class="dropdown-item">Another item</button>
  </div>
</div>

<!-- Dropdown with search -->
<div class="dropdown-wrapper">
  <button class="btn sm secondary" data-dropdown-trigger>Filter</button>
  <div class="dropdown" style="min-width:220px;">
    <div class="dropdown-search">
      <input type="text" placeholder="Search...">
    </div>
    <button class="dropdown-item">Item A</button>
    <button class="dropdown-item">Item B</button>
  </div>
</div>

<!-- Item modifiers -->
<button class="dropdown-item active">Active item</button>
<button class="dropdown-item txt-danger">Danger action</button>
```

### Modals

HTML: `.modal-overlay[data-modal="id"]` 안에 `.modal` 배치.
Open/close: `data-modal-open` / `data-modal-close` 속성 또는 JS API.

```html
<!-- Trigger -->
<button class="btn accent" data-modal-open="my-modal">Open</button>

<!-- Modal markup -->
<div class="modal-overlay hidden" data-modal="my-modal">
  <div class="modal">                     <!-- .modal.lg (840px) | .modal.xl (1150px) -->
    <div class="modal-header">
      <span class="modal-title">Edit Record</span>
      <button class="modal-close-btn" data-modal-close="my-modal">
        <i class="ri-close-line"></i>
      </button>
    </div>
    <div class="modal-content">
      <!-- form fields etc. -->
    </div>
    <div class="modal-footer">
      <button class="btn secondary" data-modal-close="my-modal">Cancel</button>
      <button class="btn accent">Save</button>
    </div>
  </div>
</div>

<!-- Slide panel / drawer (right side) -->
<div class="modal-overlay hidden" data-modal="my-panel">
  <div class="slide-panel">
    <div class="modal-header">
      <span class="modal-title">Details</span>
      <button class="modal-close-btn" data-modal-close="my-panel">
        <i class="ri-close-line"></i>
      </button>
    </div>
    <div class="modal-content">...</div>
    <div class="modal-footer">...</div>
  </div>
</div>
```

### Alerts

```html
<div class="alert success">
  <i class="ri-checkbox-circle-line"></i>
  <span>Record saved successfully.</span>
</div>
<div class="alert danger">
  <i class="ri-error-warning-line"></i>
  <span>Something went wrong.</span>
</div>
<div class="alert warning">
  <i class="ri-alert-line"></i>
  <span>This action cannot be undone.</span>
</div>
<div class="alert info">
  <i class="ri-information-line"></i>
  <span>Update available.</span>
</div>
<div class="alert accent">
  <i class="ri-notification-3-line"></i>
  <span>New feature released.</span>
</div>
```

### Labels / Badges

```html
<span class="label">Default</span>
<span class="label success">Active</span>
<span class="label danger">Deleted</span>
<span class="label warning">Pending</span>
<span class="label info">Draft</span>
<span class="label accent">New</span>
```

### Toasts (JS API)

```js
PocketUI.toast.success("Record saved!");
PocketUI.toast.danger("Failed to save.");
PocketUI.toast.warning("Check your input.");
PocketUI.toast.info("Loading complete.");
PocketUI.toast.show("Custom message", "default", 5000); // type, duration ms (0 = sticky)
```

### Tables

```html
<div class="page-table-wrapper">
  <table class="records-table">
    <thead class="sticky">
      <tr>
        <th class="col-bulk-select"><input type="checkbox"></th>
        <th class="sort-handle asc">Title</th>
        <th class="sort-handle desc">Created</th>
        <th class="col-meta"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="selected">
        <td class="col-bulk-select"><input type="checkbox" checked></td>
        <td>
          <div class="record-field-view">
            <span class="thumb sm"><img src="photo.jpg" alt=""></span>
            <span class="txt">Example title</span>
          </div>
        </td>
        <td>
          <div class="formatted-date">
            <span class="primary-date">2026-04-24</span>
            <span class="secondary-date">14:32:00</span>
          </div>
        </td>
        <td class="col-meta">
          <button class="btn sm circle transparent secondary">
            <i class="ri-more-2-line"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Bulk action bar -->
<div class="bulkbar-wrapper">
  <div class="bulkbar">
    <span>3 records selected</span>
    <div class="flex-fill"></div>
    <button class="btn sm danger outline"><i class="ri-delete-bin-7-line"></i> Delete</button>
  </div>
</div>
```

### Layout & Cards

```html
<!-- Card -->
<div class="card">
  <div class="card-header">
    <span class="card-title">Card Title</span>
    <button class="btn sm circle transparent secondary"><i class="ri-more-2-line"></i></button>
  </div>
  <div class="card-content">...</div>
  <div class="card-footer">
    <button class="btn sm secondary">Cancel</button>
    <button class="btn sm accent">Save</button>
  </div>
</div>

<!-- Section (siblings auto-get top border divider) -->
<div class="section">
  <div class="section-title">Section Title</div>
  <div class="section-hint">Helper text below title</div>
</div>
<div class="section">...</div>

<!-- Grid (collapses to 1 column on mobile) -->
<div class="grid grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
<div class="grid grid-3">...</div>
<div class="grid grid-4">...</div>

<!-- Empty state -->
<div class="empty-state">
  <i class="ri-inbox-2-line"></i>
  <h5>No records found</h5>
  <p>Create your first record to get started.</p>
  <button class="btn accent"><i class="ri-add-line"></i> New Record</button>
</div>

<!-- Accordion -->
<div class="accordion">
  <details>
    <summary class="accordion-header">Section A</summary>
    <div class="accordion-content">Content A</div>
  </details>
  <details open>
    <summary class="accordion-header">Section B</summary>
    <div class="accordion-content">Content B</div>
  </details>
</div>

<!-- Divider -->
<hr class="divider">
```

---

## JavaScript API

모든 JS는 `window.PocketUI` 네임스페이스 아래 IIFE 패턴으로 노출.

```js
// Theme
PocketUI.theme.applyScheme("dark");   // "light" | "dark" | "auto"

// Modal
PocketUI.modal.openModal("modal-id");
PocketUI.modal.closeModal("modal-id");

// Toast
PocketUI.toast.success("message", duration?);
PocketUI.toast.danger("message", duration?);
PocketUI.toast.warning("message", duration?);
PocketUI.toast.info("message", duration?);
PocketUI.toast.show("message", "type", duration);   // duration 0 = sticky

// Dropdown
PocketUI.dropdown.closeAll();
```

**Theme HTML hooks:**
```html
<button data-theme-btn="light">Light</button>
<button data-theme-btn="dark">Dark</button>
<button data-theme-btn="auto">Auto</button>
```

---

## Utility Classes (`common.css`)

### Display / Flex
```
.flex  .inline-flex  .flex-col  .flex-wrap  .flex-fill  .flex-center
.items-center  .items-start  .items-end
.justify-center  .justify-between  .justify-end
.block  .inline-block  .hidden  .full-width  .full-height
.scrollable  .scrollable-x
```

### Gap
`.gap-0` `.gap-5` `.gap-10` `.gap-15` `.gap-20` `.gap-25` `.gap-30` `.gap-sm` `.gap-base`

### Margin (`m-{dir}-{size}`)
Direction: `t` `r` `b` `l` (omit for all sides)
Size: `0` `5` `10` `15` `20` `auto` `sm` `base`
Example: `.m-t-20` `.m-l-auto` `.m-b-sm`

### Padding (`p-{dir}-{size}`)
Direction: `t` `r` `b` `l` (omit for all sides)
Size: `0` `5` `10` `15` `20` `sm` `base`
Example: `.p-20` `.p-t-sm` `.p-l-base`

### Accent surface
```html
<!-- 컨테이너의 모든 surface 변수를 accent-blue 팔레트로 재매핑 -->
<div class="accent-surface">...</div>
```

---

## Theme System

```html
<html data-color-scheme="light">  <!-- light | dark | auto -->
```

- `light` — 명시적 라이트 모드
- `dark` — 명시적 다크 모드
- `auto` — `prefers-color-scheme` 미디어쿼리 따름
- 사용자 선택은 `localStorage["pocket-ui-color-scheme"]`에 저장

---

## Browser Requirements

`color-mix()` 사용으로 아래 버전 이상 필요:

| Browser | Min version |
|---|---|
| Chrome / Edge | 111+ |
| Firefox | 113+ |
| Safari | 16.2+ |

---

## Icons

Remixicon 사용. 클래스명 패턴: `ri-{name}-{style}` (style: `line` or `fill`)

자주 쓰이는 아이콘:
```html
<i class="ri-add-line"></i>
<i class="ri-close-line"></i>
<i class="ri-more-2-line"></i>
<i class="ri-search-line"></i>
<i class="ri-settings-3-line"></i>
<i class="ri-delete-bin-7-line"></i>
<i class="ri-edit-2-line"></i>
<i class="ri-arrow-down-s-line"></i>
<i class="ri-arrow-right-line"></i>
<i class="ri-checkbox-circle-line"></i>
<i class="ri-error-warning-line"></i>
<i class="ri-alert-line"></i>
<i class="ri-information-line"></i>
<i class="ri-database-2-fill"></i>
<i class="ri-folder-2-line"></i>
<i class="ri-refresh-line"></i>
```

전체 아이콘 목록: https://remixicon.com
