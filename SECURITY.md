# Security notes

SalesLens MVP is browser-first. Do not place API keys, service-role keys, database passwords, or payment secrets in frontend files.

## Before production
- Move AI requests to a server-side endpoint.
- Add authentication and authorization.
- Store customer datasets in a protected database/object store only when needed.
- Enforce row-level access controls for team data.
- Validate file type, size, row count and parsed values server-side.
- Add rate limits and usage metering.
- Never trust client-side plan/usage values.
- Add billing webhooks and verify signatures server-side.
