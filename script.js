const fs = require('fs');

const readmeContent = `
# OpenDaClosedSRC

**OpenDaClosedSRC** is a community-driven project to help open-source enthusiasts document, interoperate with, and build clean-room alternatives to popular closed-source software—legally and ethically!

## Goals

- Document features, protocols, and file formats of closed-source programs
- Develop open-source tools to interoperate with proprietary systems
- Enable clean-room, legal reimplementations of legacy or important closed software
- Educate about legal reverse engineering and open development

## Piracy Security

OpenDaClosedSRC is strictly opposed to software piracy and copyright infringement.

- **No proprietary code or binaries:** Do not upload, link, or share any closed-source software, decompiled binaries, or copyrighted material.
- **Legal Reverse Engineering Only:** All reverse engineering and documentation must be done legally, respecting fair use, interoperability, and clean-room principles.
- **Enforcement:** Any contributions or discussions violating these guidelines will be removed, and repeat offenders may be banned.

We encourage contributors to help us identify and remove any content that could violate these principles.

## Guidelines

- **No piracy or illegal sharing of proprietary code**
- **All work must be original, or based on public information, or legally obtained**
- **Focus on interoperability and documentation**

## Project Structure

- \`/docs\` — Documentation about closed-source software, protocols, etc.
- \`/tools\` — Compatibility tools, format converters, protocol analyzers.
- \`/alternatives\` — Links or projects for open-source alternatives.
- \`/legal\` — Resources about legal reverse engineering and clean-room development.

## Get Involved

1. Check out the \`/docs\` folder for current documentation efforts
2. Contribute to \`/tools\` by building converters, analyzers, or wrappers
3. Join discussions about clean-room reimplementations in \`/alternatives\`
4. Read our \`/legal\` section to understand the boundaries

---

*Let’s open the closed, together!*
`.trimStart();

const piracySecurityContent = `
# Piracy Security Policy

OpenDaClosedSRC is committed to legal and ethical software practices.

## What is Strictly Prohibited

- Sharing or distributing proprietary code, binaries, or assets.
- Providing instructions or tools for bypassing software licenses or protections.
- Linking to pirated content or crack sites.

## What is Encouraged

- Clean-room reverse engineering for the purpose of interoperability or learning.
- Original documentation, analysis, and open-source reimplementations.
- Reporting any violation of these policies to the maintainers.

By contributing, you agree to uphold these standards.
`.trimStart();

fs.writeFileSync("README.md", readmeContent, { encoding: "utf-8" });
fs.writeFileSync("PIRACY-SECURITY.md", piracySecurityContent, { encoding: "utf-8" });

console.log("README.md and PIRACY-SECURITY.md have been generated!");
