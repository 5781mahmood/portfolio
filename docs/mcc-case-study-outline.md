# My Code Club case study — outline for review

Not a page. Do not publish this as the case study until the open questions at the bottom are answered. Claims below are limited to the LinkedIn experience bullets supplied as the canonical source, plus the two approximate metrics previously approved (100+ families, newsletter reach of about 500). Older resume lines that do not appear in that LinkedIn paste are listed as questions, not facts.

## Header

- Title: My Code Club
- Role: Curriculum Developer & Junior Backend Developer
- Type: Contract, part-time
- Dates: Jul 2026 – Present
- Place: Mississauga, Ontario
- Live site: https://www.mycodeclub.io/
- Stack named in the source: Firebase Firestore, Firebase Authentication, Cloud Functions, Stripe (Checkout Sessions and webhooks)

## 1. Overview

Joined an existing production registration and payments platform and took on backend work for parent and student registrations. The job also includes curriculum and teaching, and it continues through the school year. One or two sentences in this voice, no invented origin story.

## 2. The system I joined

State only what the source supports: there was already a production site, and the previous registration flow required parents to re-enter a child's information for every registration. Do not describe the old stack, team size, or who built it unless that is confirmed.

## 3. Architecture contributions

Three pieces, each one screen or diagram if assets exist:

1. Backend architecture for parent and student registrations: Firestore, Firebase Authentication, Cloud Functions.
2. Data model: saved child profiles under each parent account, role-based admin access, program capacity management.
3. Stripe: one-time and recurring monthly billing via Checkout Sessions, with webhook confirmation so a registration is marked paid only after a verified transaction.

## 4. Payments story

The canonical source does not describe a Stripe API-key debugging incident. It describes implementing Checkout Sessions and webhooks so payment status is set only after a verified transaction. Write this section that way unless the older key-configuration story is explicitly reinstated.

## 5. Security

A security audit of the registration and payment system. Firestore security rules to block unauthorized access, and removal of a client-side path that let a registration skip payment verification. No exploit steps, no rule snippets that reveal how the bypass worked, no real family data in screenshots.

## 6. Scale

Only if still approved: 100+ registered families, and newsletter reach of approximately 500. Neither number is in the LinkedIn bullets pasted as the canonical source. If either is dropped, this section becomes qualitative (live production system used by parents registering students) with no substitute figures.

## 7. Lessons

One short section in the existing voice: payment state has to follow a verified transaction, not the client; a saved child profile is a product decision as much as a schema decision. No new outcomes.

## Assets still needed before a page is built

- Screenshots of admin and parent flows with names, emails, and payment details removed or replaced
- Optional: a simple architecture sketch (client, Cloud Functions, Firestore, Stripe webhooks) if one exists
- Confirmation of which open questions below are in or out

## Open questions — do not write these into the page yet

These appeared on an earlier resume and are not in the LinkedIn bullets treated as canonical:

- PHP / PHPMailer transactional email and a count of templates
- Firebase Cloud Functions called through a shared-secret server-to-server API
- Stripe API key misconfiguration that blocked live checkout
- Free-trial approval workflow (Auth user creation, forced password reset, email)
- CSV parent import with a dry-run default
- Rewrites of the admin panel, user panel, and registration UI in HTML, Tailwind, and JavaScript
- Newsletter composition and batch-send pipeline (the ~500 reach figure depends on this)
