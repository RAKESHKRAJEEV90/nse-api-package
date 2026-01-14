---
description: Publish the package to NPM with 2FA
---
# Publish to NPM

This workflow guides you through publishing your package to NPM, which now requires 2FA.

1. **Update Version**: Ensure your `package.json` version is updated.
   ```powershell
   npm version patch
   ```
   (Or `minor`/`major` as needed)

2. **Publish with OTP/Passkey**: Run the publish command. Use your 6-digit OTP **OR** your lengthy passkey if that's what you have.
   ```powershell
   npm publish --otp <YOUR_OTP_OR_PASSKEY>
   ```
