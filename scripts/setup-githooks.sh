#!/usr/bin/env bash
# Setup script to enable repository-local git hooks from .githooks
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOOKS_DIR="$REPO_ROOT/.githooks"

echo "Setting git core.hooksPath to ${HOOKS_DIR} (local repo)"
git config core.hooksPath "$HOOKS_DIR"

echo "Making hooks executable"
chmod +x "$HOOKS_DIR"/* || true

echo "Githooks enabled. To disable, run: git config --unset core.hooksPath"
