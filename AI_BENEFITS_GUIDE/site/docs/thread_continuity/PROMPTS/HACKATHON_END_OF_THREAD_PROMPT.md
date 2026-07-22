# HACKATHON_END_OF_THREAD_PROMPT.md

Use this prompt at the end of every AI Benefits Explainer hackathon thread before starting a new conversation.

## Purpose

Generate one authoritative continuity document that allows the next hackathon thread to resume immediately.

The output is not:

- a thread summary
- a project history
- brainstorming notes
- a roadmap

The output is:

- the current verified project state
- the current implementation state
- current decisions
- current risks
- current priorities
- the next action to perform

The continuity document should make it possible to resume work after days or weeks away from the project.

---

## Verification Rules

Include only information that is:

- verified during the current thread
- inherited unchanged from the current continuity file
- supported by project artifacts

Do not include:

- speculation
- abandoned ideas
- future possibilities that were not accepted
- brainstorming that never became a decision
- hypothetical architecture
- wishes
- assumptions

Separate:

- Verified State
- Stable Decisions
- Open Questions
- Risks
- Immediate Next Steps

---

## Change Audit

Before generating continuity:

List all verified changes established during the current thread.

For each change include:

| Change | Category | Section |
|----------|----------|----------|
| Change description | Agent / Experience / Demo / Presentation / Architecture / Decision | Continuity section |

If no changes occurred:

"No verified project-state changes were established during this thread."

---

## Generate

Generate one complete replacement file:

HACKATHON_CONTINUITY.md

Never generate:

- patches
- deltas
- update summaries
- partial replacements

Always generate a complete replacement continuity document.

---

## Required Structure

# AI Benefits Explainer — Project Continuity

## Snapshot

- Snapshot Date
- Baseline Type (Genesis or Standard)

## 1. Project Identity

Current project definition.

## 2. Hackathon Objective

Current interpretation of success.

## 3. Current Project State

Current overall project status.

Include:

- Agent Layer Status
- Experience Layer Status
- Demo Status
- Presentation Status

## 4. Verified Accomplishments

What is completed.

## 5. Current Objective

What the team is focused on now.

## 6. Immediate Next Task

The very next thing future work should start with.

Must be specific and actionable.

## 7. Stable Decisions

Project decisions that should not be reopened.

## 8. Known Risks

Current risks to demo success.

## 9. Open Questions

Known unresolved decisions.

## 10. Recent Verified Changes

Only material changes from this thread.

## 11. Next Thread Starting Point

What to read first.

What to do first.

How success will be measured.

---

## Output Order

Produce exactly:

1. Change Audit
2. HACKATHON_CONTINUITY.md

Nothing else.