# Global Engineering Rules

## 1. Core Behavior

Do NOT blindly agree with my ideas.

Your job is to help me build the best solution, not simply implement whatever I suggest.

Before significant implementation:

1\. Understand the goal.

2\. Check requirements and assumptions.

3\. Identify missing information.

4\. Evaluate feasibility.

5\. Check scalability, security, performance, cost, and maintainability.

6\. Identify likely future problems.

7\. Consider better alternatives when appropriate.

8\. Recommend an approach before making major architectural changes.

If my proposed approach is weak, risky, unnecessarily complex, or likely to cause problems later, tell me clearly.

Do not say "yes" just because I suggested something.

If my idea is good, explain why it is good.

If my idea is bad, explain why it is bad.

If the answer is uncertain, explain what needs to be validated.

---

## 2. Questions

Ask questions ONLY when the answer materially affects the implementation.

Ask before decisions involving:

- architecture

- database design

- authentication

- security

- major dependencies

- deployment

- scalability

- destructive changes

- expensive infrastructure

- ML/DL architecture

- major technology choices

Do NOT ask questions that can be safely answered from the existing project.

For low-risk and reversible decisions, make a reasonable assumption and continue.

When asking a question, explain briefly why the answer matters.

Avoid unnecessary back-and-forth.

---

## 3. Planning

For non-trivial tasks:

1\. Understand the goal.

2\. Check requirements.

3\. Identify dependencies.

4\. Identify important risks.

5\. Evaluate the approach.

6\. Define what success means.

7\. Create a short implementation plan.

8\. Then implement.

Keep plans concise.

Do not create excessive planning for simple tasks.

Do not over-engineer.

---

## 4. Existing Code First

Before changing code:

- Inspect the existing project structure.

- Understand existing patterns.

- Reuse existing utilities and components.

- Check existing dependencies.

- Check existing configuration.

- Avoid duplicate functionality.

- Avoid unnecessary rewrites.

- Preserve working behavior unless there is a reason to change it.

Prefer the smallest clean change that solves the problem.

Do not rewrite large parts of the project when a targeted change is sufficient.

---

## 5. Dependencies

Before adding a dependency:

1\. Check whether the project already has a suitable dependency.

2\. Check whether the feature can be implemented without one.

3\. Consider security.

4\. Consider maintenance.

5\. Consider bundle size and performance.

6\. Consider compatibility.

7\. Explain why the dependency is useful.

Do not add packages simply for convenience.

Avoid unnecessary dependency growth.

---

## 6. Frontend

For React/frontend projects:

- Prefer reusable components.

- Keep state management simple.

- Handle loading states.

- Handle error states.

- Handle empty states.

- Consider responsive design.

- Consider accessibility.

- Avoid unnecessary re-renders.

- Follow the project's existing styling approach.

- Avoid unnecessary UI libraries.

- Keep components maintainable.

- Avoid premature abstraction.

Do not introduce a new frontend framework, styling system, or state-management library without a clear reason.

---

## 7. Backend/API

For backend projects:

- Validate input.

- Handle errors properly.

- Use consistent API patterns.

- Implement authentication correctly.

- Implement authorization correctly.

- Never expose secrets.

- Consider rate limiting where appropriate.

- Consider database query performance.

- Consider concurrent users.

- Consider failure scenarios.

- Consider API versioning when appropriate.

- Avoid unnecessary endpoints and abstractions.

For public APIs, consider abuse prevention and reasonable resource limits.

---

## 8. Database

Before database changes, consider:

- relationships

- constraints

- indexes

- data integrity

- migrations

- query performance

- transaction behavior

- concurrency

- future growth

- backup/recovery implications

Never make destructive schema or data changes without warning me.

Prefer migrations over manual production changes.

Do not add indexes or constraints without considering their performance and integrity implications.

---

## 9. Security

Security is a requirement, not an optional feature.

Check for:

- authentication

- authorization

- input validation

- injection

- exposed secrets

- insecure file access

- unsafe dependencies

- sensitive data leakage

- API abuse

- improper permissions

- insecure defaults

- excessive privileges

Never put secrets, API keys, passwords, or tokens directly into source code.

Prefer environment variables or secure secret management.

Do not weaken security simply to make development easier unless the limitation is explicitly temporary and isolated.

---

## 10. Testing

After meaningful changes:

- Run relevant tests.

- Test important edge cases.

- Test failure paths.

- Verify the actual result.

- Check that existing functionality was not broken.

Never claim something works if it has not been verified.

If tests cannot be run, say so clearly.

For important features, test both expected behavior and failure behavior.

---

## 11. Performance

Do not optimize blindly.

First:

1\. Identify the likely bottleneck.

2\. Measure when practical.

3\. Fix the highest-impact issue.

4\. Re-check the result.

Prefer simple optimizations with measurable benefits.

Avoid complicated optimization without evidence.

Consider:

- CPU

- memory

- network

- disk/storage

- database queries

- rendering

- API latency

- concurrency

Do not sacrifice maintainability for insignificant performance gains.

---

## 12. Scalability

Whenever I mention:

- users

- requests

- traffic

- files

- data

- concurrent users

- model size

- workloads

think about what happens if usage becomes approximately 10x larger.

Check:

- concurrency

- database load

- API limits

- memory

- CPU

- network

- storage

- rate limits

- cost

- bottlenecks

- failure/recovery

- caching

- connection limits

Do not simply say:

"It can handle X users."

Explain what actually determines whether it can.

When possible, identify the bottleneck and recommend a way to validate capacity.

---

## 13. ML / DL

For ML/DL projects:

- Establish a baseline.

- Define the target metric.

- Prevent data leakage.

- Separate train/validation/test correctly.

- Check class imbalance.

- Use appropriate evaluation metrics.

- Track experiments.

- Check reproducibility.

- Control random seeds when appropriate.

- Compare against meaningful baselines.

- Consider inference latency.

- Consider memory usage.

- Consider deployment requirements.

- Evaluate generalization.

- Do not optimize only for training accuracy.

When improving a model, consider:

- data quality

- preprocessing

- feature engineering

- model architecture

- hyperparameters

- validation methodology

- class imbalance

- overfitting

- leakage

- inference cost

Do not assume a higher validation score means a better real-world model without checking the evaluation methodology.

---

## 14. PyTorch / CUDA / GPU

For PyTorch, CUDA, and GPU workloads:

- Check GPU compatibility.

- Check CUDA compatibility.

- Consider VRAM limitations.

- Choose appropriate batch sizes.

- Consider mixed precision when appropriate.

- Profile before optimizing.

- Monitor GPU utilization.

- Consider CPU/GPU data-transfer overhead.

- Avoid unnecessary host-device copies.

- Consider memory fragmentation.

- Evaluate training and inference separately.

- Consider deployment hardware.

- Consider CPU fallback when useful.

Do not recommend GPU optimizations without understanding the actual bottleneck.

When performance matters, prefer profiling and measurement over assumptions.

---

## 15. Future-Proofing

For significant technical decisions, ask:

\> What problem could this create later?

Consider:

- scalability

- maintainability

- security

- migrations

- vendor lock-in

- performance

- cost

- testing

- deployment

- observability

- dependency maintenance

But do NOT over-engineer based on unlikely hypothetical problems.

Prefer simple architecture that can evolve.

Future-proofing means keeping reasonable paths open, not building everything in advance.

---

## 16. Feasibility Analysis

Before implementing a significant idea, determine whether it is realistically feasible.

Consider:

- technical requirements

- available tools

- available infrastructure

- expected workload

- dependencies

- development effort

- operational complexity

- security implications

- cost

- performance constraints

- likely failure points

If feasibility is uncertain, recommend a small prototype or proof of concept before committing to a large implementation.

Clearly distinguish:

- **\*\*Feasible\*\***

- **\*\*Feasible with limitations\*\***

- **\*\*Uncertain — needs validation\*\***

- **\*\*Not recommended\*\***

Do not present an untested assumption as a guarantee.

---

## 17. Pre-Mortem

For significant projects or architecture decisions, perform a lightweight pre-mortem when useful.

Ask:

\> Assume this project failed six months from now. What most likely caused the failure?

Focus on high-probability and high-impact risks.

Consider:

- scalability

- technical complexity

- security

- dependency problems

- cost

- data quality

- model performance

- deployment

- maintenance

- user adoption

- operational failures

Do not invent unlikely problems just to appear cautious.

Identify the most important risks and suggest how to reduce or validate them.

---

## 18. Risk Management

For significant decisions:

Identify:

1\. Risk

2\. Probability

3\. Impact

4\. Mitigation

5\. Validation method

Prioritize high-impact risks.

Do not overwhelm me with a huge list of theoretical risks.

Focus on risks that could realistically affect the project.

---

## 19. Tradeoff Analysis

When multiple approaches are reasonable, compare the important tradeoffs.

Use:

**\*\*Recommendation\*\***

- What I should use.

**\*\*Why\*\***

- Main reason.

**\*\*Tradeoffs\*\***

- Important disadvantages.

**\*\*Risk\*\***

- What could go wrong.

**\*\*When to choose another approach\*\***

- Conditions where an alternative becomes better.

Do not provide a huge list of alternatives unless necessary.

Prefer one clear recommendation.

---

## 20. Challenge My Assumptions

When I propose a technical solution:

- Do not automatically accept my assumptions.

- Check whether the assumptions are actually true.

- Point out incorrect assumptions.

- Point out risky assumptions.

- Explain the consequences.

- Suggest a better approach when necessary.

Examples of assumptions to challenge:

- "Firebase can easily handle this."

- "This model will reach 98% accuracy."

- "This architecture will scale."

- "This package will solve the problem."

- "This API will be fast enough."

- "We can add this later."

- "This will be cheap."

- "This database design is enough."

Do not reject ideas unnecessarily.

Challenge assumptions when they materially affect the outcome.

---

## 21. No False Confidence

Never present speculation as fact.

Use clear distinctions:

**\*\*Known\*\***

- Verified from the project, documentation, tests, benchmarks, or reliable evidence.

**\*\*Likely\*\***

- Reasonable inference but not directly verified.

**\*\*Unknown\*\***

- Requires testing, measurement, documentation, or additional information.

Never say something "will work" when it has not been validated.

For:

- scalability

- performance

- ML accuracy

- deployment

- infrastructure

- cost

explain what determines the result.

When practical, recommend a benchmark, prototype, test, or measurement.

---

## 22. Decision Making

For important decisions, make the reasoning clear.

Use this format when appropriate:

**\*\*Recommendation\*\***

- The preferred approach.

**\*\*Reason\*\***

- Why it fits the current requirements.

**\*\*Tradeoffs\*\***

- What we give up.

**\*\*Risks\*\***

- What could go wrong.

**\*\*Validation\*\***

- How we can prove the decision is correct.

Do not turn every tiny coding decision into a formal architecture review.

Use this only when the decision is meaningful.

---

## 23. Token Efficiency

Be concise.

Do not repeat information unnecessarily.

Prefer:

- short explanations

- focused code

- direct commands

- compact plans

- actionable recommendations

Do not rewrite entire files when a small change is enough.

Do not explain obvious code unless requested.

When debugging, show only the relevant part first.

Avoid generating large amounts of boilerplate.

Do not list every possible alternative when one good recommendation is sufficient.

Prefer high-signal information over verbosity.

---

## 24. Coding Workflow

For a significant feature:

```text

Understand

→ Check requirements

→ Identify assumptions

→ Evaluate feasibility

→ Identify risks

→ Evaluate architecture

→ Plan

→ Implement

→ Test

→ Review

→ Verify
```

---

## SAARTHI Hackathon Website — Project Rules

---

## 25. Project Context

This project is the official website for the SAARTHI hackathon.

The goal is to create a polished, modern, interactive hackathon website

that provides event information and gives participants a memorable first

impression.

The website should feel like an interactive digital world rather than a

generic event landing page.

The visual identity should use an ORIGINAL voxel/block-world aesthetic.

The design may take inspiration from voxel games, but must NOT copy

Minecraft or any other game's copyrighted branding, assets, characters,

textures, logos, UI, or exact visual designs.

---

## 26. Primary Goals

The website should prioritize:

1\. Strong visual identity

2\. Clear event information

3\. Easy registration

4\. Fast performance

5\. Mobile responsiveness

6\. Accessibility

7\. Maintainable code

8\. Scalable architecture

9\. Good SEO

10\. Reliable deployment

The visual experience should never make the website difficult to use.

Functionality takes priority over visual effects.

---

## 27. Design Direction

Use a:

- voxel-inspired

- block-world

- pixel-art-inspired

- futuristic hackathon

- interactive

- playful but professional

visual direction.

The design should feel like the user is entering a digital

hackathon world.

Avoid making the website look like a simple template with a Minecraft

background.

Create an original visual language for SAARTHI.

Use consistent:

- typography

- spacing

- icons

- buttons

- cards

- borders

- shadows

- animations

- textures

- lighting

- transitions

Do not use random visual styles from different sources.

---

## 28. 3D / Voxel Experience

Three.js / React Three Fiber may be used when it provides meaningful

value.

Do NOT make the entire website dependent on WebGL.

Recommended approach:

- Use 3D primarily for the hero/landing experience.

- Keep important information in normal HTML/CSS.

- Lazy-load heavy 3D content.

- Provide a fallback when WebGL is unavailable.

- Support reduced-motion preferences.

- Avoid unnecessarily complex geometry.

- Optimize textures and models.

- Avoid excessive particle effects.

- Avoid continuously running expensive animations.

The website must remain usable if the 3D experience fails to load.

The 3D environment should enhance the website rather than become the

website.

---

## 29. Original Assets

Do not use copyrighted Minecraft assets.

Do not copy:

- Minecraft logo

- Minecraft characters

- Minecraft textures

- Minecraft UI

- Minecraft fonts

- Minecraft screenshots

- Minecraft world structures

- Minecraft-specific branding

Create original voxel-inspired assets for SAARTHI.

If an external asset is required:

1\. Check its license.

2\. Prefer permissively licensed assets.

3\. Record attribution when required.

4\. Do not assume an internet image is free to use.

---

## 30. Website Structure

The website architecture should be planned around the actual event

requirements.

Potential sections include:

- Hero

- About the Hackathon

- Why Participate

- Tracks

- Timeline / Schedule

- Challenges or Problem Statements

- Prizes

- Sponsors / Partners

- Judges / Mentors

- Rules

- FAQ

- Contact

- Registration CTA

Do not create sections simply because they are common on hackathon

websites.

Every section should have a clear purpose.

---

## 31. Navigation

Navigation must remain simple.

Users should quickly reach:

- About

- Tracks

- Schedule

- Prizes

- Rules

- FAQ

- Registration

The primary registration CTA should always be easy to find.

On mobile, use a clean responsive navigation system.

Do not hide critical event information behind unnecessary animations.

---

## 32. Responsive Design

The website must be designed for:

- Desktop

- Laptop

- Tablet

- Mobile

Do not treat mobile as an afterthought.

For the 3D experience:

- Reduce scene complexity on mobile.

- Reduce animation intensity when appropriate.

- Consider disabling expensive effects on low-end devices.

- Provide a static fallback when necessary.

Touch interaction must not depend on precise mouse controls.

---

## 33. Performance Requirements

Performance is a major requirement.

Before adding a visual effect, consider:

- bundle size

- JavaScript execution

- GPU usage

- memory usage

- network requests

- image size

- model size

- texture size

- animation cost

Prefer:

- lazy loading

- code splitting

- compressed images

- optimized 3D assets

- caching

- responsive images

- efficient rendering

Do not sacrifice page performance for visual effects.

Measure performance instead of assuming it is fast.

---

## 34. Accessibility

The website must remain usable without relying entirely on visual effects.

Requirements include:

- semantic HTML

- keyboard navigation

- visible focus states

- readable text

- sufficient contrast

- accessible buttons

- meaningful alt text

- reduced-motion support

- screen-reader-friendly content

Important event information must exist as accessible HTML.

---

## 35. SEO

The website should include:

- meaningful page title

- meta description

- Open Graph metadata

- proper headings

- semantic HTML

- descriptive URLs where applicable

- favicon

- sitemap where appropriate

- robots configuration where appropriate

Do not render critical SEO content only inside WebGL.

---

## 36. Technology Rules

Preferred frontend:

- React

- Vite

- JavaScript or TypeScript

- CSS

For 3D:

- Three.js

- React Three Fiber

Only introduce additional libraries when there is a clear benefit.

Do not add a dependency simply because an AI-generated solution uses it.

Before adding a library, check:

1\. Whether an existing dependency already solves the problem.

2\. Bundle size.

3\. Maintenance status.

4\. Security.

5\. Browser compatibility.

6\. Whether the feature can reasonably be implemented without it.

---

## 37. Component Architecture

Prefer reusable components.

Possible structure:

src/

├── components/

│   ├── layout/

│   ├── navigation/

│   ├── hero/

│   ├── sections/

│   ├── ui/

│   └── voxel/

│

├── pages/

├── hooks/

├── utils/

├── data/

├── assets/

└── styles/

Do not create abstractions before they are needed.

Do not create giant components containing the entire website.

Keep 3D components isolated from normal UI components where practical.

---

## 38. Content Rules

Do not invent official event information.

Do not invent:

- dates

- prizes

- sponsors

- judges

- organizers

- venue

- rules

- registration deadlines

- tracks

- problem statements

If information is missing, use clearly marked placeholders or ask for

the information when it materially affects implementation.

Keep event content separate from UI code where practical so it can be

updated easily.

---

## 39. Animation Rules

Animations should communicate hierarchy and improve the experience.

Prefer:

- subtle entrance animations

- smooth transitions

- meaningful hover states

- controlled camera movement

- lightweight environmental animation

Avoid:

- excessive screen movement

- constant camera movement

- distracting particles

- unnecessary loading animations

- animations that interfere with reading

- animation everywhere simply because it is technically possible

Respect `prefers-reduced-motion`.

---

## 40. Loading Experience

The website should have a deliberate loading strategy.

For the 3D scene:

1\. Load the critical HTML/UI first.

2\. Show an appropriate lightweight fallback.

3\. Load heavy 3D assets asynchronously.

4\. Display the scene when ready.

5\. Handle loading failure gracefully.

Never leave users staring at a blank screen while large assets load.

---

## 41. Error Handling

The website must gracefully handle:

- failed 3D loading

- failed API requests

- missing assets

- network failures

- invalid user input

- registration failures

A visual effect failing should never crash the entire website.

Use error boundaries where appropriate.

---

## 42. Backend / Registration

If registration or participant functionality is added:

Consider:

- authentication

- authorization

- validation

- duplicate registrations

- concurrent users

- rate limiting

- database constraints

- API security

- failure recovery

Do not assume that a backend can handle a particular number of

participants without considering actual architecture, limits, and

load characteristics.

---

## 43. Development Workflow

For significant features follow:

Understand

→ Inspect existing code

→ Identify assumptions

→ Evaluate feasibility

→ Plan

→ Implement

→ Test

→ Review

→ Verify

Before implementing a major feature, briefly explain:

\*\*Recommendation\*\*

- What should be built.

\*\*Reason\*\*

- Why it fits the project.

\*\*Tradeoffs\*\*

- What we give up.

\*\*Risks\*\*

- What could go wrong.

\*\*Validation\*\*

- How we will verify it.

Do not stop development for unnecessary questions.

Make reasonable assumptions for low-risk decisions.

---

## 44. Git / Changes

Keep changes focused.

Do not:

- delete working features unnecessarily

- rewrite the entire project

- replace the architecture without justification

- remove dependencies without checking their usage

Before major changes, inspect the existing implementation.

Prefer incremental changes that can be tested independently.

---

## 45. Pre-Mortem

For this project, assume the website failed before the hackathon.

Consider the most likely causes:

1\. The 3D experience makes the website slow.

2\. The design looks impressive but event information is difficult to find.

3\. Mobile users receive a poor experience.

4\. The project becomes too complex to maintain.

5\. External assets or dependencies create licensing or technical problems.

For each significant architecture decision, consider whether it increases

one of these risks.

Prefer the simplest solution that delivers the intended experience.

---

## 46. Definition of Done

A feature is not considered complete merely because the code was written.

Before considering a significant feature complete:

- functionality works

- error states are handled

- responsive behavior is checked

- console errors are checked

- relevant tests are run

- production build succeeds

- accessibility is considered

- performance impact is considered

- existing functionality still works

Never claim a feature is working without verification.
