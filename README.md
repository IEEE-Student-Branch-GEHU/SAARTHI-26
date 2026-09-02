# SAARTHI-26

[![CodeQL](https://github.com/IEEE-Student-Branch-GEHU/SAARTHI-26/actions/workflows/codeql.yml/badge.svg)](https://github.com/IEEE-Student-Branch-GEHU/SAARTHI-26/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Dependabot](https://img.shields.io/badge/Dependabot-Active-brightgreen.svg)](.github/dependabot.yml)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)

Official web portal and participant landing page for **SAARTHI-26**, organized by the IEEE Student Branch at Graphic Era Hill University (GEHU).

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
- [Engineering Standards](#engineering-standards)
  - [Branching Model](#branching-model)
  - [Commit Conventions](#commit-conventions)
  - [Code Quality & Security](#code-quality--security)
- [Community & Governance](#community--governance)
- [Security Policy](#security-policy)
- [License](#license)

---

## Overview

SAARTHI-26 is a student-centric hackathon designed to foster collaborative problem-solving, technical innovation, and product engineering. The platform serves as the central hub for event schedules, speaker line-ups, prize breakdowns, track details, sponsor packages, and participant registration.

The interface incorporates an interactive, retro-gaming pixel aesthetic designed with vanilla web standards for fast load times and universal cross-device accessibility.

---

## Key Features

- **Hero & Landing Interface**: Full-screen responsive viewport showcasing event branding, countdown badge, and quick action controls.
- **Dynamic Schedule Timeline**: Chronological event schedule covering participant milestones, tech talks, and review phases.
- **Prize Pool & Chests**: Visual tier representation showcasing award distributions and partner tracks.
- **Track Exploration**: Interactive modules detailing challenge categories across Web3, Artificial Intelligence, and Open Innovation.
- **Sponsors & Partner Showcase**: Structured showcase section for academic, community, and corporate partners.
- **Audio & Ambient Controls**: Integrated soundtrack toggle and responsive background canvas animations.
- **Responsive Layout Engine**: Mobile-first architecture tested across mobile, tablet, and widescreen viewports.

---

## Architecture & Tech Stack

| Domain | Implementation | Rationale |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic Architecture | High search accessibility, predictable DOM hierarchy, zero build overhead. |
| **Styling** | Modern CSS3 (Grid, Flexbox, Custom Properties) | Responsive breakpoint rules, smooth CSS transitions, GPU-accelerated transforms. |
| **Interaction** | Native Vanilla JavaScript (ES6+) | Instant DOM operations, no framework overhead, lightweight bundle footprint. |
| **Typography** | Press Start 2P, Pixeloid, Poppins, Inter | Pixel-art gaming identity paired with high-legibility body typography. |
| **Security** | GitHub CodeQL static analysis | Continuous AST vulnerability scanning across pull requests and scheduled runs. |
| **Maintenance**| GitHub Dependabot | Scheduled dependency checks and automated workflow action updates. |

---

## Repository Structure

```
SAARTHI-26/
|-- .github/
|   |-- workflows/
|   |   `-- codeql.yml          # Automated static analysis security scanning
|   |-- CODEOWNERS              # Repository code ownership and reviewer routing
|   `-- dependabot.yml          # Automated dependency updater configuration
|-- css/                        # Core stylesheet definitions
|-- fonts/                      # Typography files and web font formats
|-- images/                     # Graphic assets, banners, and partner logos
|-- js/                         # Client scripts and interactive controllers
|-- media/                      # Audio media and background video loops
|-- index.html                  # Main application entry point
|-- CODE_OF_CONDUCT.md          # Community conduct standards (Contributor Covenant 2.1)
|-- CONTRIBUTING.md             # Contribution guidelines and pull request protocol
|-- LICENSE                     # Permissive MIT License terms
|-- README.md                   # Primary project documentation
`-- SECURITY.md                 # Vulnerability disclosure and security contacts
```

---

## Getting Started

### Prerequisites

To run and preview the website locally, ensure you have:
- A modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge).
- Git installed on your local machine.
- Optional: Python 3.x, Node.js (`npx serve`), or the VS Code Live Server extension.

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/IEEE-Student-Branch-GEHU/SAARTHI-26.git
   cd SAARTHI-26
   ```

2. Start a local HTTP development server:
   ```bash
   # Option A: Python 3
   python -m http.server 8000

   # Option B: Node.js
   npx serve . -l 8000
   ```

3. Navigate to the local URL in your web browser:
   ```
   http://localhost:8000
   ```

---

## Engineering Standards

### Branching Model

All features, bug fixes, and documentation improvements must originate from dedicated topic branches branched off the latest `main`:

```bash
git checkout main
git pull origin main
git checkout -b <type>/<description>
```

Branch naming conventions:
- `feature/<description>` for new interface features or sections.
- `fix/<description>` for bug, layout, or responsiveness fixes.
- `docs/<description>` for documentation and project hygiene updates.
- `chore/<description>` for maintenance and workflow updates.

### Commit Conventions

Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short summary>

[optional body]
```

Examples:
- `feat(timeline): update Day 1 milestone descriptions`
- `fix(hero): resolve mobile banner vertical alignment`
- `docs(readme): add architectural overview and tech stack breakdown`

### Code Quality & Security

- **Semantic Standards**: HTML markup must follow semantic hierarchy (`header`, `nav`, `main`, `section`, `footer`).
- **Responsive Validation**: All visual updates must be verified across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (480px, 360px).
- **Automated Verification**: Every pull request undergoes automated CodeQL static security analysis before merging.

---

## Community & Governance

This project is governed by the maintainers and contributors of IEEE Student Branch GEHU. Code review assignments and ownership domains are managed via [`.github/CODEOWNERS`](.github/CODEOWNERS).

Please review:
- [Contributing Guidelines](CONTRIBUTING.md) for pull request expectations and coding standards.
- [Code of Conduct](CODE_OF_CONDUCT.md) for community participation and interaction guidelines.

---

## Security Policy

Security vulnerabilities should be reported responsibly in accordance with our [Security Policy](SECURITY.md). Please use GitHub's private vulnerability advisory reporting or contact the maintainers directly. Do not report security issues through public channels.

---

## License

This repository is licensed under the **MIT License**. Refer to the [LICENSE](LICENSE) file for full details.

Copyright (c) 2026 IEEE Student Branch Graphic Era Hill University.
