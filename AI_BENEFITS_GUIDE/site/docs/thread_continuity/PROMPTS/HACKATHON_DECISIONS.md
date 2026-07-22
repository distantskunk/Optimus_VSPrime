# AI Benefits Explainer - Decisions Log

Purpose

This document captures significant project decisions that should persist across conversations and prevent re-litigating previously resolved topics.

Use this document to record:

- Scope changes
- Architecture changes
- Demo strategy changes
- UX decisions
- Major project decisions
- Explicitly rejected ideas

Do not use this document to track status, task completion, or implementation progress.

That information belongs in HACKATHON_CONTINUITY.md.

---

## Decision Status Types

Accepted
Current project direction.

Superseded
Replaced by a newer decision.

Deferred
Valid but intentionally moved outside hackathon scope.

Rejected
Considered and intentionally not pursued.

---

# Decision 001

Category:
Project Strategy

Decision:
Build a guided experience, not a generic chatbot.

Status:
Accepted

Reason:
Directly aligns with challenge objectives.

Impact:
Every interaction should follow:

Interpret
→ Answer
→ Guide
→ Escalate

Date:
YYYY-MM-DD

---

# Decision 002

Category:
Success Criteria

Decision:
Optimize for demo clarity and member value over technical complexity.

Status:
Accepted

Reason:
Judges will primarily experience the solution through a short live demonstration.

Impact:
Preference given to:

- Reliability
- Personalization
- Structured answers
- Guided next actions
- Demo story

Date:
YYYY-MM-DD

---

# Decision 003

Category:
Architecture

Decision:
The solution consists of two workstreams.

Status:
Accepted

Reason:
Separates intelligence from experience.

Architecture:

Experience Layer
↓
Benefits Guide
↓
Agent Layer
↓
Skills
↓
Mock Data

Impact:
Distinguish between:

- Agent work
- Experience work

Date:
YYYY-MM-DD

---

# Decision 004

Category:
Architecture

Decision:
Use mock data instead of production integrations.

Status:
Accepted

Reason:
Challenge explicitly permits mocked systems and data.

Impact:
Build interaction patterns.
Mock system integrations.

Date:
YYYY-MM-DD

---

# Decision 005

Category:
Experience Strategy

Decision:
The final experience should look and feel like a VSP feature.

Status:
Accepted

Reason:
The project should resemble a future VSP member experience.

Impact:
Prioritize:

- VSP shell
- Drawer experience
- Cards
- Actions
- Destination screens

over Copilot Studio-only demonstrations.

Date:
YYYY-MM-DD

---

# Decision 006

Category:
Demo Strategy

Decision:
Demonstrate quality over quantity.

Status:
Accepted

Reason:
A small number of polished member journeys creates more impact than broad shallow coverage.

Impact:
Prefer:

5-10 strong scenarios

over

50 lightly implemented scenarios.

Date:
YYYY-MM-DD

---

Decision 007

Category:
Knowledge Architecture

Decision:
Consolidate plan data into persona context.
Use only:

- Personas.md
- Providers.md
- Claims.md

Status:
Accepted

Reason:
Simplifies grounding.
Reduces duplication.
Supports personalization-first demo.

Impact:
Agent retrieves member context first,
then provider and claim context as needed.

---

# Decision 008

Category:
Knowledge Architecture

Decision:
Personas.md expanded with Action Buttons,
Escalation Triggers, and stronger role definitions.

Reason:
Align persona grounding with Response Cards,
Action Buttons, and guided-answer architecture.

Impact:
Improves consistency, personalization,
and demo reliability.

Status:
Accepted

---

# Decision 009

Category:
Agent Architecture

Decision:
Add personalization rules, knowledge source grounding,
and standardized action-button guidance.

Reason:
Supports member-specific answers and aligns the
agent with the Member Selector experience.

Impact:
Improves consistency, grounding, and demo reliability.

Status:
Accepted

---

# Decision 010

Category:
Execution Strategy

Decision:
Pause Agent Layer work and shift focus to
Experience Layer implementation.

Reason:
Instructions and skills are sufficiently mature
for MVP testing.

Impact:
Reduces prompt-engineering churn and advances
the visible demo experience.

Status:
Accepted

---

# Decision 011

Category:
UX Strategy

Decision:
Complete all Destination Screens for the MVP.

Screens:

- Find Doctor
- Benefits
- ID Card
- Claims
- Billing

Reason:
Support the complete guided experience pattern:
Interpret → Answer → Guide → Next Step

Impact:
Provides judges with a full end-to-end product experience
instead of isolated AI responses.

Status:
Completed

---

# Decision 012

Category:
Demo Strategy

Decision:
Adopt a five-scenario primary demo with a billing backup scenario.

Reason:
Maximizes personalization, guided action, provider intelligence, and responsible escalation while keeping the live story concise.

Impact:
Establishes the official MVP demo flow and prevents future scenario sprawl.

Status:
Accepted (pending team approval)

---

# Decision Log Rules

A new decision entry should be created whenever:

- Scope changes
- Architecture changes
- Demo strategy changes
- UX strategy changes
- New major project decisions occur
- A previously accepted decision is reversed
- An idea is deliberately rejected and future discussion should reference the rejection

Never silently overwrite a previous decision.

If a decision changes:

- preserve the original
- mark it Superseded
- create a new decision entry

This document is the authoritative record of why major project decisions were made.
