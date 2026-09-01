# SalesLens AI

**Turn sales data into clear business insights.**

SalesLens AI is a browser-first sales intelligence MVP. A business can upload a CSV and immediately see revenue, transactions, top product, top region, trend visualization, business signals and an executive summary.

## What is actually implemented
- Premium responsive SaaS-style workspace
- CSV upload with quoted-field parsing
- Automatic detection of common revenue, date, product and region column names
- Demo dataset for sales demonstrations
- Revenue, transaction, product and region KPIs
- Revenue trend chart
- Product revenue-mix chart
- Automatic rule-based business signals
- Executive summary generated from the loaded dataset
- Copy-summary action
- Responsive desktop/tablet/mobile layout
- Browser-side processing for the core MVP

## Important product boundary
The current MVP does **not** pretend to contain a cloud AI model, authentication system, billing system, database, Excel engine or production-grade report export. Those are the next product layers and require backend infrastructure and/or third-party services. No secret API keys are stored in this repository.

## Product roadmap
### Phase 1 — MVP
- CSV analysis
- Dashboard
- Business signals
- Executive summary

### Phase 2 — SaaS foundation
- Excel import
- Saved datasets/workspaces
- Authentication
- PostgreSQL/Supabase persistence
- Team permissions

### Phase 3 — AI layer
- Secure server-side AI endpoint
- Natural-language questions about uploaded data
- Explainable answers grounded in dataset calculations
- Prompt/input limits and privacy controls

### Phase 4 — Paid product
- PDF/CSV report export
- Scheduled reports
- Usage metering
- Subscription plans
- Secure billing integration

## Technology
- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js
- GitHub

## Privacy
The core analysis happens locally in the browser. Uploaded CSV contents are not automatically sent to an AI provider by the MVP.

## Run locally
Open `index.html` in a modern browser, or serve the repository through any static web server. Use **Load demo data** to test the dashboard immediately.
