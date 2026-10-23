# iPhone Codespaces + Claude Code (GitHub API)

This branch sets up a Codespace that installs the official Claude Code CLI on a Node 22 devcontainer automatically.

## Create via GitHub REST API

Create a *fine-grained* personal access token at https://github.com/settings/personal-access-tokens/new

- Resource owner: your own GitHub account
- Repository access: **Only select repositories** > `my-linux-shell`
- Repository permissions > **Codespaces: Read and write**
- Set a short expiration. Never commit, paste in chat, or publish the token.

Make an iPhone **Shortcuts** shortcut:

1. Action **Ask for Input** (Text): paste the token when running; don't embed it in the shortcut.
2. Action **Get Contents of URL**:
   - URL: `https://api.github.com/repos/abuahmad-21/my-linux-shell/codespaces`
   - Method: `POST`
   - Request Body: JSON
   - JSON body fields:
     - `ref`: `setup/iphone-claude-codespace`
     - `devcontainer_path`: `.devcontainer/devcontainer.json`
     - `idle_timeout_minutes`: `15` (number)
     - `display_name`: `Claude iPhone`
   - Headers:
     - `Authorization`: `Bearer ` followed by **Ask for Input** result
     - `Accept`: `application/vnd.github+json`
     - `X-GitHub-Api-Version`: `2026-03-10`
     - `Content-Type`: `application/json`
3. Action **Get Dictionary Value** > `web_url` from previous response.
4. Action **Open URLs** with the returned URL.

The successful API response has HTTP 201 and a `web_url`, while 202 can indicate creation is being retried. If you get HTTP 401, check the token; 403, check permissions/quota; 404, check the repo and authorized owner.

Optional: List your codespaces with `GET https://api.github.com/user/codespaces` using the same Authorization and Accept headers. To reduce free-hour usage, stop active Codespaces when not using them, from https://github.com/codespaces.

## Using Claude Code

The devcontainer installs the official Claude CLI during creation. From its integrated terminal, run:

```bash
~/.local/bin/claude --version
bash .devcontainer/run-claude.sh
```

Claude Code's native login/payment and OpenAI's API billing are **separate** from ChatGPT Plus. This setup only provisions the environment; it does not automatically connect a ChatGPT Plus subscription to Claude Code. The Kilo Code OAuth connection does not supply a transferable OpenAI API key. Any bridge to ChatGPT subscription usage needs independent, supported authorization and compatibility verification, and may not be appropriate for a hosted Codespace.

GitHub Codespaces itself has separate usage and potential charges. Check your GitHub billing before starting a Codespace, and avoid adding payment details if you want to keep within the included GitHub quota.

Official API: https://docs.github.com/en/rest/codespaces/codespaces
