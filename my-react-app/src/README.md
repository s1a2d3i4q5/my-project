# Kudi: Personal Finance Dashboard

**Level:** Intermediate to Advanced  |  **Time:** 1 to 2 weeks  |  **Stack:** React + Vite, React Router, Context or Reducer, `json-server`, Chart library of choice

Kudi ("money" in Hausa) is a personal finance tracker. A user logs income and expenses, sees where their money goes, sets monthly budgets, and reviews reports. All amounts are in Naira (₦).

---

## What's in this package

```
kudi-dashboard/
├── README.md              <- this brief
├── assets/
│   ├── logo.svg           <- full logo (uses currentColor for the word)
│   ├── logo-mark.svg      <- icon-only logo, good for favicon/collapsed sidebar
│   ├── avatar.svg         <- default user avatar
│   ├── empty-state.svg    <- illustration for empty lists
│   └── icons/             <- 23 SVG icons (24x24, stroke=currentColor)
├── design/
│   ├── tokens.css         <- colors, spacing, type scale, dark theme
│   ├── png/               <- 10 screen designs as images (5 pages x desktop + mobile)
│   └── screens/           <- the same 10 designs as HTML pages you can open and inspect
└── data/
    ├── db.json            <- ready for json-server
    ├── transactions.json  <- 56 transactions (Aug to Oct 2026)
    └── categories.json    <- 8 categories with colors and icon names
```

Icons use `stroke="currentColor"`, so you can color them with CSS (`color: var(--primary-600)`). Import them as React components with `vite-plugin-svgr`, or use them as `<img>` tags.

---

## The designs

Open the PNGs in `design/png/` to see what you are building. Every page has a **desktop (1280px)** and a **mobile (390px)** version:

| Page | Desktop | Mobile |
|---|---|---|
| Dashboard | `dashboard-desktop.png` | `dashboard-mobile.png` |
| Transactions | `transactions-desktop.png` | `transactions-mobile.png` |
| Budgets | `budgets-desktop.png` | `budgets-mobile.png` |
| Reports | `reports-desktop.png` | `reports-mobile.png` |
| Settings | `settings-desktop.png` | `settings-mobile.png` |

The files in `design/screens/` are the same screens as plain HTML. Open them in a browser and use DevTools to read exact sizes, spacing and colors. Their links jump between screens. Do not copy and paste the HTML: rebuild it as React components.

Things the designs show that you need to build:
- **Desktop** uses a left sidebar. **Mobile** swaps it for a bottom tab bar.
- On mobile, the transactions table becomes stacked cards.
- Budget bars are green under 75%, amber from 75% to 100%, and red over 100%. Each card also says "On track", "Near limit" or "Over budget" in words, so color is never the only signal.
- The mock numbers in the designs match `data/db.json` for October 2026. Budget limits are not in the data, so create a `budgets` collection (the designs use these limits in naira: Food 60,000, Transport 30,000, Bills 25,000, Shopping 50,000, Health 30,000, Other 15,000).
- Not designed on purpose: the Add/Edit modal, the delete confirmation, loading skeletons and error states. Design these yourself using the same tokens.
- The designs use the Inter font from Google Fonts.

---

## Getting started

```bash
npm create vite@latest kudi -- --template react
cd kudi && npm install
npm install react-router-dom recharts
npm install -D json-server@0.17.4
```

Copy `assets/`, `design/tokens.css` and `data/db.json` into the project, then add this script to `package.json`:

```json
"api": "json-server --watch data/db.json --port 3001"
```

Run `npm run api` in one terminal and `npm run dev` in another.

**API endpoints you get for free:**

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/transactions` | list all |
| GET | `/transactions?category=food&_sort=date&_order=desc` | filter and sort |
| GET | `/transactions?q=bolt` | full-text search |
| POST | `/transactions` | add |
| PATCH | `/transactions/:id` | edit |
| DELETE | `/transactions/:id` | remove |
| GET | `/categories` | list categories |

---

## Pages and requirements

### 1. Dashboard `/`
- Four summary cards: **Balance**, **Income this month**, **Expenses this month**, **Savings rate** (%).
- Each card shows change vs last month (arrow-up / arrow-down icon, green or red).
- **Spending by category**: donut or pie chart for the selected month.
- **Income vs Expenses**: bar or line chart across the last 3 months.
- **Recent transactions**: last 5, with category icon and colored amount.
- Month selector that updates every widget.

### 2. Transactions `/transactions`
- Table on desktop, stacked cards on mobile.
- Search by title (debounced), filter by category, type (income/expense) and date range.
- Sort by date or amount.
- Pagination (10 per page) or "Load more".
- **Add / Edit** in a modal with validation: title required, amount greater than 0, date not in the future.
- Delete with a confirmation dialog.
- Empty state using `empty-state.svg` when filters return nothing.

### 3. Budgets `/budgets`
- Set a monthly limit per expense category (save to the API, add a `budgets` collection).
- Progress bar per category: green under 75%, amber 75 to 100%, red over 100%.
- Warning banner when any category is over budget.

### 4. Reports `/reports`
- Pick a date range and see totals, top 3 spending categories and the biggest single expense.
- **Export to CSV** button (build the CSV in JS and trigger a download).

### 5. Settings `/settings`
- Light / dark theme toggle (persist in `localStorage`, apply via `data-theme` on `<html>`).
- Profile name field shown in the header greeting.

---

## Technical requirements

- React Router with a shared layout (sidebar on desktop, bottom nav or drawer on mobile).
- Global state with Context + `useReducer` (or Zustand if you want a stretch).
- At least **3 custom hooks**, for example `useFetch`, `useDebounce`, `useLocalStorage`.
- Loading skeletons and error states for every request.
- Format currency with `Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" })`.
- Fully responsive: 375px, 768px, 1280px.
- Keyboard accessible: focus states, labelled inputs, `aria-label` on icon buttons, modal traps focus and closes on Esc.
- Clean folder structure (`components/`, `pages/`, `hooks/`, `context/`, `utils/`).

## Stretch goals

- Recurring transactions (monthly rent, subscriptions).
- Drag a receipt image onto a transaction (preview with `URL.createObjectURL`).
- Unit tests for utils and a hook with Vitest + React Testing Library.
- Deploy: frontend on Vercel or Netlify, API on Render (or swap json-server for Supabase).
- Replace json-server with a real backend (Express + MongoDB).

---

## Grading rubric (100 pts)

| Area | Points |
|---|---|
| Functionality: all CRUD, filters, budgets, export work | 30 |
| Code quality: structure, reusable components, hooks | 20 |
| State management and data flow | 15 |
| UI fidelity to the tokens, spacing and consistency | 15 |
| Responsiveness and accessibility | 10 |
| Error / loading / empty states | 5 |
| Git history and README of the student's own repo | 5 |

---

## Notes for the student

- Build the **layout and Transactions page first**, then Dashboard, since the dashboard just summarises that data.
- Put money math (totals, grouping by category, month filtering) in `utils/` as pure functions so they're easy to test.
- Amounts are stored as positive numbers, with `type` saying whether it's income or expense.
- Dates are `YYYY-MM-DD` strings. Parse them carefully to avoid timezone surprises.
