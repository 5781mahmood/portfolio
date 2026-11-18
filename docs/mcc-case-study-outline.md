# My Code Club case study — outline for review

Not a page. Review this before any MCC case study page is built.
Approved approximate metrics only: 100+ registered families; newsletter reach of approximately 500. No other numbers.
No real family names, emails, or identifying data in any screenshot.

## Header

- Title: My Code Club
- Role: Backend Developer & Curriculum Developer
- Type: Contract, part-time
- Dates: Jul 2026 – Nov 2026 (ended)
- Place: Mississauga, Ontario
- Live site: https://www.mycodeclub.io/
- Stack: Node.js Cloud Functions, Firebase Firestore, Firebase Authentication, Stripe (Checkout Sessions and webhooks), PHP email API, HTML, Tailwind CSS, JavaScript
- How it was built: with Cursor. I owned requirements, review, testing and deployment.

## 1. Overview

Joined an existing production registration and payments platform (`mycodeclub.io`) and owned the backend: Node.js Cloud Functions, Firestore, Stripe, and the PHP email API. Built with Cursor; I owned requirements, review, testing and deployment. One or two sentences in this voice — no invented origin story.

## 2. The system I joined

There was already a live production site. The previous registration flow required parents to re-enter a child's information for every registration. Do not invent the old stack, team size, or original authors unless confirmed later.

## 3. Architecture contributions

1. **Registration backend.** Backend for parent and student registrations using Firestore, Firebase Authentication, and Node.js Cloud Functions.
2. **Data model.** Saved child profiles under each parent account, role-based admin access control, and program capacity management — replacing the re-enter-every-time flow.
3. **Transactional email.** PHP email API, called from Cloud Functions through a shared-secret server-to-server API.
4. **Stripe billing.** One-time and recurring monthly billing via Checkout Sessions, with webhook-based confirmation so a registration is marked paid only after a verified transaction.
5. **Admin and user UI.** Rewrote major sections of the admin panel, user panel, and registration / trial interfaces (HTML, Tailwind CSS, JavaScript) to support the updated programs-and-sessions data model.

## 4. The Stripe debugging story

Diagnosed and resolved a Stripe API key configuration issue that was blocking live payment processing in production. Keep this as a short, factual incident — no credential values, no step-by-step exploit framing.

Also cover the intended payment design: Checkout Sessions + webhooks so payment state follows a verified transaction, not the client.

## 5. Security

Security review of the registration and payment system. Firestore security rules enforcing admin-only access and preventing client-side changes to payment and registration status fields. Closed a client-side path that allowed registrations to bypass payment verification, on a live platform with 100+ registered families.

No exploit reproduction steps. No rule snippets that teach the bypass. Redacted screenshots only.

## 6. Free-trial and import workflows

1. **Free-trial approval.** Free-trial approval workflow: Firebase Auth user creation, forced password reset, and automated email notifications.
2. **CSV parent import.** CSV-based parent import tool with a dry-run safety default so staff can preview before writing live data.

## 7. Newsletter pipeline

Newsletter composition and batch-send pipeline with a reach of approximately 500. Internal technical documentation for handoff to non-technical staff.

## 8. Approximate scale

Approved figures only:

- 100+ registered families
- Newsletter reach of approximately 500

## 9. Lessons learned

Payment state has to follow a verified transaction, not the client. A saved child profile is a product decision as much as a schema one. Shared-secret server-to-server calls and dry-run defaults are how you keep a live platform safe when non-technical staff also use it. Keep this short.

## Assets still needed before a page is built

- Redacted screenshots: registration, Stripe checkout confirmation state, admin filtering, trial approval, newsletter composer (placeholder data only)
- Optional architecture diagram: client → Cloud Functions → Firestore / Stripe / PHP email API
