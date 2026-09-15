# My Code Club case study — outline for review

Not a page. Review this before any MCC case study page is built.
Depth source: fuller Full-Stack resume material (confirmed). LinkedIn bullets are a shorter subset, not a ceiling.
Approved approximate metrics only: 100+ registered families; newsletter reach of approximately 500.
No real family names, emails, or identifying data in any screenshot.

## Header

- Title: My Code Club
- Role: Curriculum Developer & Junior Backend Developer
- Type: Contract, part-time
- Dates: Jul 2026 – Present
- Place: Mississauga, Ontario
- Live site: https://www.mycodeclub.io/
- Stack: Firebase Firestore, Firebase Authentication, Cloud Functions, Stripe (Checkout Sessions and webhooks), PHP / PHPMailer, HTML, Tailwind CSS, JavaScript

## 1. Overview

Joined an existing production registration and payments platform (`mycodeclub.io`) and took primary ownership of a major backend expansion. The role continues through the school year alongside curriculum and teaching. One or two sentences in this voice — no invented origin story.

## 2. The system I joined

There was already a live production site. The previous registration flow required parents to re-enter a child's information for every registration. Do not invent the old stack, team size, or original authors unless confirmed later.

## 3. Architecture contributions

1. **Registration backend.** Designed and built backend architecture for parent and student registrations using Firestore, Firebase Authentication, and Cloud Functions.
2. **Data model.** Saved child profiles under each parent account, role-based admin access control, and program capacity management — replacing the re-enter-every-time flow.
3. **Transactional email.** PHP / PHPMailer system with 11 templates, integrated with Firebase Cloud Functions through a shared-secret server-to-server API.
4. **Stripe billing.** One-time and recurring monthly billing via Checkout Sessions, with webhook-based confirmation so a registration is marked paid only after a verified transaction.
5. **Admin and user UI.** Rewrote major sections of the admin panel, user panel, and registration / trial interfaces (HTML, Tailwind CSS, JavaScript) to support the updated programs-and-sessions data model.

## 4. The Stripe debugging story

Diagnosed and resolved a Stripe API key configuration issue that was blocking live payment processing in production. Restored checkout through targeted debugging and configuration correction. Keep this as a short, factual incident — no credential values, no step-by-step exploit framing.

Also cover the intended payment design: Checkout Sessions + webhooks so payment state follows a verified transaction, not the client.

## 5. Security

Conducted a full security audit of the registration and payment system. Wrote Firestore security rules enforcing admin-only access control and preventing client-side manipulation of payment and registration status fields. Closed a client-side vulnerability that allowed registrations to bypass payment verification. Protecting data integrity on a live platform supporting 100+ registered families.

No exploit reproduction steps. No rule snippets that teach the bypass. Redacted screenshots only.

## 6. Free-trial and import workflows

1. **Free-trial approval.** Built and integrated a free-trial approval workflow: Firebase Auth user creation, forced password reset, and automated email notifications.
2. **CSV parent import.** CSV-based parent import tool with a dry-run safety default so staff can preview before writing live data.

## 7. Newsletter pipeline

Developed a newsletter composition and batch-send pipeline reaching approximately 500 recipients. Authored internal technical documentation to support non-technical staff handoff.

## 8. Approximate scale / results

Stick to approved figures only:

- 100+ registered families
- Newsletter reach of approximately 500

No other metrics.

## 9. Lessons learned

Payment state has to follow a verified transaction, not the client. A saved child profile is a product decision as much as a schema one. Shared-secret server-to-server calls and dry-run defaults are how you keep a live platform safe when non-technical staff also use it. Keep this short.

## Assets still needed before a page is built

- Redacted screenshots: registration, Stripe checkout confirmation state, admin filtering, trial approval, newsletter composer (placeholder data only)
- Optional architecture diagram: client → Cloud Functions → Firestore / Stripe / PHPMailer
- Confirmation that the 11-template count and ~500 newsletter reach still stand as the public figures
