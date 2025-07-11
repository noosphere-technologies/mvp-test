# MVP Test App

A simple Node.js Express application for testing GitHub Actions attestations and build provenance.

## Features

- Simple REST API with health checks
- Automated testing
- GitHub Actions workflow with comprehensive attestations
- SLSA Build Provenance
- Software Bill of Materials (SBOM)
- Custom attestations
- Ruleset compliance tracking

## API Endpoints

- `GET /` - Welcome message with app info
- `GET /health` - Health check endpoint
- `GET /api/data` - Sample data endpoint

## Local Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Install dependencies
npm install

# Run the application
npm start

# Run tests
npm test

# Build the application
npm run build
```

The app will be available at `http://localhost:3000`

## GitHub Actions Workflow

This project includes a comprehensive GitHub Actions workflow that:

1. **Builds** the application
2. **Tests** the code
3. **Creates attestations** for:
   - SLSA Build Provenance
   - Software Bill of Materials (SBOM)
   - Custom build metadata
   - Repository ruleset compliance

### Attestations Created

When pushed to GitHub, the workflow automatically creates several types of attestations:

- **🛡️ SLSA Build Provenance**: Cryptographically signed provenance information
- **📋 SBOM**: Complete software bill of materials
- **🔧 Custom Attestation**: Build environment and quality check details
- **📏 Compliance**: Repository ruleset and security feature compliance

### Verification

After the workflow runs, you can verify the attestations using the GitHub CLI:

```bash
# Download the artifact and verify attestations
gh attestation verify dist/mvp-app-[SHA].tar.gz --owner [repository-owner]
```

## Project Structure

```
mvp-test/
├── .github/
│   └── workflows/
│       └── build-with-attestations.yml
├── src/
│   └── index.js
├── test/
│   └── test.js
├── package.json
└── README.md
```

## Getting Started with GitHub

1. Initialize git repository:
   ```bash
   cd mvp-test
   git init
   git add .
   git commit -m "Initial commit with attestation workflow"
   ```

2. Create a new repository on GitHub

3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/yourusername/mvp-test.git
   git branch -M main
   git push -u origin main
   ```

The GitHub Actions workflow will automatically run and create attestations for your build!

## Security Features

This project demonstrates several security best practices:

- Automated testing in CI/CD
- Build provenance tracking
- Software composition analysis (SBOM)
- Compliance monitoring
- Cryptographic attestations

All build artifacts are cryptographically signed and verifiable, providing a complete audit trail from source code to deployment.
