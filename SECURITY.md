# Security Policy

## Supported Versions

Currently, all code in this repository is automatically generated.
Therefore, I cannot provide support for code older than the latest push to the master branch.

As this entire repository only contains decleration types for the PixInsight JavaScript Runtime (PJSR), there are no direct security issues.
The code here can only be used with the TypeScript Compiler (tsc), which translates TypeScript code into Javascript.
The generated JavaScript code is then executed in PixInsight with its JavaScript runtime.

I'm not in control of either tsc or the PJSR.

## Reporting a Vulnerability

If, for whatever reason, there is a vulnerability, feel free to open an issue in this very repository.
I'll look into them fairly regularly.
