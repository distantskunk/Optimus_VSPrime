# Personas

Purpose: Mock member profiles for the AI Benefits Guide demo.

This file is the primary source of truth for:

- Member identity
- Plan type
- Eligibility context
- Coverage usage
- Billing context
- Personalization logic

Use these personas as the source of truth for member-specific context.

## How to use this file

- Always identify the selected demo member before answering member-specific benefit questions.
- Use the member profile, situation, usage history, and demo response anchors below to ground answers.
- Do not invent member IDs, dates of birth, addresses, dependent names, claim details, provider status, or dollar amounts not listed here or in the approved provider/claims files.
- If the selected member is unknown, ask which demo member should be used:
  - Maria Lopez
  - Sara Kim
  - James Ochoa
  - David Chen
  - Priya Patel
  - Robert Nguyen
- Use this file to support the demo pattern:
  - Interpret
  - Answer
  - Guide
  - Escalate

---

# Maria Lopez

## Member Profile

- Member Type: Returning member
- Plan Tier: Commercial (Choice)
- Employer: Beacon Health Systems
- Age: 42
- Plan: VSP Choice, effective 01/01/2026
- Coverage: Member Only
- Exam Copay: $15
- Materials Copay: $25
- Frame Allowance: $180
- Contact Allowance: $130 (in lieu of glasses)
- Last WellVision Exam: Jul 2024
- Frame Allowance Used: Last used Jul 2024. Renewed Jan 1, 2026. Not yet used this benefit period.
- Situation: Thinks she is due for new glasses but is not sure. Wants to know what she is covered for.

## Demo Metadata

- Preferred Demo Scenario: Benefits and Eligibility
- Demo Purpose: Show that the same eligibility question can produce a member-specific answer.

### Common Questions

- Am I due for new glasses?
- What's my frame allowance?
- Show my claim history
- Find a doctor near me

### Expected Answer Anchors

- Maria is due for new glasses.
- Maria's frame allowance renewed on January 1, 2026.
- Maria has not used the frame allowance this benefit period.
- Maria has a $180 frame allowance and a $25 materials copay.

### Suggested Action Buttons

- Find Doctor
- View Benefits
- Claims History

---

# Sara Kim

## Member Profile

- Member Type: Parent
- Plan Tier: Commercial (Signature)
- Employer: Acme Corp
- Age: 38
- Plan: VSP Signature, effective 01/01/2026
- Coverage: Family Plan (self + son age 12)
- Exam Copay: $10
- Materials Copay: $25
- Frame Allowance: $200 (Featured Frame Brands: $220)
- Contact Allowance: $150 (in lieu of glasses)
- Last WellVision Exam:
  - Self: Sep 2024
  - Son: Jun 2024
- Frame Allowance Used:
  - Self: Not used this benefit period
  - Son: Not used this benefit period
- Situation: Wants to get her son an eye exam before school starts. Looking for a doctor and wondering what is covered.

## Demo Metadata

- Preferred Demo Scenario: Family Coverage and Provider Guidance
- Demo Purpose: Show dependent-aware guidance and selective clarification.

### Common Questions

- Where can I get an eye exam?
- Is my son covered for an exam?
- Find a doctor near me
- Can I use Warby Parker?

### Expected Answer Anchors

- Sara has a VSP Signature family plan covering herself and her son.
- Sara has a $10 exam copay and a $25 materials copay.
- Sara and her son have not used their frame allowance this benefit period.
- If asking about an exam, clarify whether the appointment is for Sara or her son.
- Warby Parker is out of network.

### Suggested Action Buttons

- Find Doctor
- Book for Son
- Find In-Network Location
- Reimbursement Help

---

# James Ochoa

## Member Profile

- Member Type: New Member
- Plan Tier: Commercial (Advantage)
- Employer: Northlake Manufacturing
- Age: 27
- Plan: VSP Advantage, effective 05/01/2026
- Coverage: Member Only
- Exam Copay: $20
- Materials Copay: $25
- Frame Allowance: $150
- Contact Allowance: $120 (in lieu of glasses)
- Last WellVision Exam: None on file
- Frame Allowance Used: Not used
- Situation: Just enrolled. Doesn't know what to do first. Has his ID card and wants to use his benefits.

## Demo Metadata

- Preferred Demo Scenario: New Member Guidance
- Demo Purpose: Show onboarding guidance.

### Common Questions

- What should I do first?
- Is Dr. Torres in network?
- Find a doctor near me
- Show my ID card

### Expected Answer Anchors

- James is a new VSP Advantage member.
- James has no WellVision Exam on file.
- James has not used his frame allowance.
- Dr. Rachel Torres is in network.
- Dr. Rachel Torres is approximately 0.4 miles away and has Tuesday availability.

### Suggested Action Buttons

- Book With Dr. Torres
- See Other Doctors
- View ID Card
- View Benefits

---

# David Chen

## Member Profile

- Member Type: Individual Plan (IP)
- Plan Tier: Enhanced Advantage
- Employer: Self-purchased
- Age: 51
- Plan: VSP Enhanced Advantage, effective 03/01/2026
- Coverage: Member Only
- Exam Copay: $15
- Materials Copay: $25
- Frame Allowance: $220 (Featured Frame Brands: $240)
- Contact Allowance: $180 (in lieu of glasses)
- Monthly Premium: $34.78
- Autopay Date: 15th of each month
- Last Payment: Sep 15, 2026 (successful)
- Situation: Wants to confirm billing details and manage payment information.

## Demo Metadata

- Preferred Demo Scenario: Individual Plan Billing
- Demo Purpose: Demonstrate billing support.

### Common Questions

- When is my next payment due?
- How do I update my credit card?
- Why was I charged this month?
- How do I get reimbursed for an out-of-network visit?

### Expected Answer Anchors

- David has an individual plan.
- Premium is $34.78 per month.
- Autopay occurs on the 15th.
- Last successful payment was Sep 15, 2026.
- David has an out-of-network reimbursement claim from Jun 15, 2026.

### Suggested Action Buttons

- View Billing
- Update Payment Method
- View Claim Details
- Reimbursement Help

---

# Priya Patel

## Member Profile

- Member Type: Contact Wearer
- Plan Tier: Commercial (Signature)
- Employer: Meridian Bank
- Age: 34
- Plan: VSP Signature, effective 01/01/2026
- Coverage: Member Only
- Exam Copay: $10
- Frame Allowance: $200 (not eligible this year because contacts were selected)
- Contact Allowance: $150 used Feb 2026
- Last WellVision Exam: Feb 2026
- Situation: Wants backup glasses and wonders whether benefits can be switched.

## Demo Metadata

- Preferred Demo Scenario: Glasses Versus Contacts
- Demo Purpose: Show same-question/different-member personalization.

### Common Questions

- Am I due for new glasses?
- Can I get glasses if I already used contacts?
- Can I switch from contacts to glasses?
- Show my claim history

### Expected Answer Anchors

- Priya used her contact benefit in February 2026.
- Her frame allowance is unavailable during this benefit period.
- Frame and lens benefits renew January 2027.
- She may still purchase glasses using member discounts.

### Suggested Action Buttons

- View VSP Discounts
- Shop on Eyeconic
- Claims History

---

# Robert Nguyen

## Member Profile

- Member Type: Complex Needs
- Plan Tier: Commercial (Enhanced Advantage)
- Employer: Acme Corp
- Age: 58
- Plan: VSP Enhanced Advantage, effective 01/01/2026
- Coverage: Member + Spouse
- Exam Copay: $15
- Materials Copay: $25
- Medical Eye Care Exam Copay: $20
- Frame Allowance: $220 (Featured Frame Brands: $240)
- Contact Allowance: $180 (in lieu of glasses)
- Health Context: Type 2 diabetes
- Eligible Benefit: Covered-in-full retinal imaging
- Last WellVision Exam: Jan 2026
- Situation: Wants to understand what diabetic eye care benefits are covered.

## Demo Metadata

- Preferred Demo Scenario: Medical Eye Care and Responsible Escalation
- Demo Purpose: Demonstrate useful guidance while avoiding unsupported medical decisions.

### Common Questions

- Is diabetic eye care covered?
- Is retinal imaging covered?
- Show my claim history
- Why is my medical eye care claim pending?

### Expected Answer Anchors

- Robert has VSP Enhanced Advantage.
- Robert has Type 2 diabetes.
- Robert is eligible for covered-in-full retinal imaging.
- Robert's medical eye care exam copay is $20.
- Robert has a pending Essential Medical Eye Care claim dated Apr 2, 2026.
- Medical necessity and coverage exception requests should escalate.

### Suggested Action Buttons

- View Medical Eye Care Benefits
- View Claim Details
- Contact Support
- Schedule Callback

### Escalation Triggers

- Medical necessity decisions
- Coverage exceptions
- Appeals
- Clinical recommendations
- Human representative requests