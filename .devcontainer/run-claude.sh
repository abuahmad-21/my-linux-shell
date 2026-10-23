#!/usr/bin/env bash
set -euo pipefail

# Only call the locally running proxy; never expose it as a public forwarded port.
unset ANTHROPIC_API_KEY || true
export ANTHROPIC_BASE_URL="http://127.0.0.1:18765"
export ANTHROPIC_AUTH_TOKEN="unused"
export ANTHROPIC_MODEL="${ANTHROPIC_MODEL:-gpt-6-sol[1m]}"
export ANTHROPIC_SMALL_FAST_MODEL="${ANTHROPIC_SMALL_FAST_MODEL:-gpt-6-luna[1m]}"
export CLAUDE_CODE_AUTO_COMPACT_WINDOW="272000"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1"
export CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK="1"

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code is not installed; reopen/rebuild the Codespace." >&2
  exit 1
fi

echo "Launching Claude Code via local proxy: $ANTHROPIC_BASE_URL"
echo "If requests fail, start claude-code-proxy serve in a second terminal."
exec claude "$@"
