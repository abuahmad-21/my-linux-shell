# Claude Code from an iPhone — Codespaces setup

This is an **isolated preparation branch**. Your existing main branch has not been changed.

## What is installed automatically

- A 2-core GitHub Codespaces-compatible Node.js 22 Linux development container.
- Official Claude Code CLI: `npm install -g @anthropic-ai/claude-code`.

No credentials, third-party proxy, or ChatGPT token are automatically installed. No Codespace is created until you explicitly start one.

## Start on iPhone

1. In Safari, sign into GitHub as `abuahmad-21`.
2. Open this link:
   https://github.com/codespaces/new?repo=1230508950&ref=setup%2Fiphone-claude-codespace
3. Choose the `setup/iphone-claude-codespace` branch and **2 cores** (if offered), then create the Codespace. Check billing and storage limits first.
4. After the VS Code web environment opens, use Terminal → New Terminal.
5. Check the installation with `claude --version`.

## Optional experimental ChatGPT subscription bridge

**Important:** Claude Code does not natively accept the OpenAI Sign in with ChatGPT OAuth token. A third-party adapter is required, and compatibility, account policy, and plan usage are not guaranteed. It is **not** a normal OpenAI API key, and it does not run Claude's underlying models.

Only if you have reviewed and chosen to trust the third-party proxy project:

```bash
curl -fsSL https://raw.githubusercontent.com/raine/claude-code-proxy/main/scripts/install.sh | bash
claude-code-proxy codex auth device
claude-code-proxy models
claude-code-proxy serve
```

For headless sign-in, the device-code command provides a link and code. Sign in yourself in your browser. Do not copy tokens into GitHub source files, chats, logs, public ports, or environment variable screenshots.

Leave the proxy running in that terminal. Open a second Terminal and run:

```bash
bash .devcontainer/run-claude.sh
```

The wrapper sets `ANTHROPIC_BASE_URL=http://127.0.0.1:18765` and explicitly clears any `ANTHROPIC_API_KEY` variable to avoid inadvertently using paid Anthropic API billing. The proxy must run in the **same Codespace**. Never publicly forward TCP port 18765; the proxy listens without client authentication.

Upstream resources:
- Official OpenAI ChatGPT plan usage documentation:
  https://developers.openai.com/siwc/token-sharing-open-source
- Official OpenAI guidance for self-hosted VMs:
  https://developers.openai.com/siwc/token-sharing-open-source/self-hosted-vms
- Unofficial bridge documentation:
  https://claude-code-proxy.raine.dev/getting-started/

**Please note:** This proxy may use a different authentication protocol than OpenAI's documented public Sign in with ChatGPT / Responses API. Do not treat the methods as interchangeable, or assume that the use complies with all provider conditions without reviewing them.

## Costs and security

- ChatGPT Plus **does not** cover GitHub Codespaces compute/storage, which has a separate GitHub free quota.
- Codespaces and any installed third-party tools can potentially incur charges if billing is configured. Confirm spending limits and stop idle environments.
- **Do not share your GitHub Personal Access Token with anyone in chat.** The already-connected GitHub app can manage files; Codespaces creation needs a GitHub-authenticated browser session or a separately authorized Codespaces API integration.
- The green Connected status in Kilo Code is specific to Kilo and is not an exportable API key for Claude Code.
- You must verify the setup by successfully sending a real prompt and checking both the proxy logs and ChatGPT plan usage; installing tools alone is not proof of a working OAuth session.

## What has not been completed

A Codespace has **not** been created by this repository commit. The automated browser session hit GitHub's login page, so creating the Codespace and authenticating any accounts require you to sign in through the browser.
