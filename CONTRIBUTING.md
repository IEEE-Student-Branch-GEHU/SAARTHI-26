# Contributing to SAARTHI-26

Thank you for your interest in contributing to the SAARTHI-26 website repository. We value contributions that help improve performance, accessibility, code quality, and design fidelity.

## Code of Conduct

By participating in this project, you agree to abide by the terms outlined in our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. Fork the repository on GitHub.
2. Clone your forked repository locally:
   ```bash
   git clone https://github.com/<your-username>/SAARTHI-26.git
   cd SAARTHI-26
   ```
3. Set up upstream remote tracking:
   ```bash
   git remote add upstream https://github.com/IEEE-Student-Branch-GEHU/SAARTHI-26.git
   git fetch upstream
   ```

## Contribution Workflow

1. Create a descriptive branch from the latest `main` branch:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. Make your modifications following our code standards:
   - Write clean, well-structured semantic HTML, CSS, and modern JavaScript.
   - Maintain mobile-responsive design across all common device breakpoints (desktop, tablet, mobile).
   - Preserve performance: optimize all image, video, and audio assets before committing.
   - Ensure visual consistency with the established Minecraft-inspired theme.

3. Test your changes locally:
   - Verify layout rendering on multiple screen resolutions and browsers.
   - Ensure browser console has no uncaught JavaScript exceptions or broken resource links.

4. Commit your changes:
   - Use clear, professional commit messages following conventional commits format:
     - `feat: add accessibility tags to hero buttons`
     - `fix: correct timeline mobile viewport overlap`
     - `docs: update deployment guidelines in readme`

5. Push to your fork and submit a Pull Request:
   ```bash
   git push origin feature/your-feature-name
   ```
   - Provide a clear summary of what changed, why it changed, and testing evidence in the PR description.
   - Link any related issues where appropriate.

## Code Review Process

- All pull requests require review and approval from repository maintainers defined in `.github/CODEOWNERS`.
- Pull requests must pass automated static analysis checks (CodeQL) without introducing new vulnerabilities.
- Reviewers may request adjustments to maintain styling conventions, responsiveness, or code clarity.
