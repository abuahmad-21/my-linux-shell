#!/usr/bin/env bash
set -euo pipefail
# Starts the official Claude Code CLI, using its configured provider.
# An OpenAI/ChatGPT Plus subscription is NOT an Anthropic API key.
if [ -x "/home/node/.local/bin/claude" ]; then
  exec "/home/node/.local/bin/claude" "$@"
fi
exec claude "$@"
