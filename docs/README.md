# <BRAND_NAME> Monorepo

## Setup

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies: `npm install`.
3. Run tests: `npm test`.
4. Develop app: `npm --prefix app run dev`.
5. Theme files reside in `/theme`.

## Deployment

CI runs via GitHub Actions using `ops/workflows/ci.yml`.
Deploy theme by pushing to main branch.

## Seed Data

Run `node ops/seed/import.js` to import sample data.
