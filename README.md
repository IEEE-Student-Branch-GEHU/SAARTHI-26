# SAARTHI-26 Official Website

The official portal for SAARTHI-26, hosted by the IEEE Student Branch Graphic Era Hill University (GEHU). This repository hosts the interactive, Minecraft-themed hackathon landing website.

## Overview

SAARTHI-26 is a flagship hackathon platform bringing together student developers, engineers, and designers to build solutions across tracks including Web3, Artificial Intelligence, Open Innovation, and more.

## Repository Structure

```
SAARTHI-26/
|-- .github/
|   |-- workflows/
|   |   `-- codeql.yml          # Automated static analysis security scanning
|   |-- CODEOWNERS              # Repository code ownership and reviewers
|   `-- dependabot.yml          # Automated dependency updates
|-- css/                        # Stylesheets and layout definitions
|-- fonts/                      # Typography assets
|-- images/                     # Graphic assets and section media
|-- js/                         # Client-side scripts and interaction logic
|-- media/                      # Audio and background video media
|-- index.html                  # Main application entry point
|-- CODE_OF_CONDUCT.md          # Community standards and conduct expectations
|-- CONTRIBUTING.md             # Contribution workflows and guidelines
|-- LICENSE                     # Project license terms (MIT)
|-- README.md                   # Project documentation
`-- SECURITY.md                 # Security reporting and vulnerability disclosure
```

## Local Development

The project is built as a client-side web application and does not require complex build pipelines or external runtimes to preview.

### Prerequisites

- A modern standards-compliant web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari)
- Git (for version control)
- Optional: A lightweight HTTP server (for example, Python `http.server`, Node.js `live-server`, or the VS Code Live Server extension)

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/IEEE-Student-Branch-GEHU/SAARTHI-26.git
   cd SAARTHI-26
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Development Workflow and Standards

- Branch naming: Use descriptive prefixes such as `feature/`, `fix/`, or `docs/` (for example, `fix/timeline-alignment`).
- Commit messages: Follow conventional commit standards (for example, `feat: add partner section`, `fix: correct mobile padding`).
- Automated checks: Pull requests trigger automated CodeQL vulnerability scans.
- Code review: All contributions must be reviewed and approved by repository maintainers as specified in `.github/CODEOWNERS`.

## Security and Vulnerability Reporting

Please review our [Security Policy](SECURITY.md) for guidelines on responsibly disclosing vulnerabilities. Do not report security vulnerabilities via public GitHub issues.

## Contributing

We welcome community contributions. Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
