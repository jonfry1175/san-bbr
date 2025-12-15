# Git Hooks (local)

This repository includes local git hooks in `.githooks/`. They are not active by default.

To enable them for your clone, run:

```sh
./scripts/setup-githooks.sh
```

What the hooks do:

- `.githooks/pre-commit`: sets the local `user.email` to `jonfrymarbun@gmail.com` before a commit is created.
- `.githooks/pre-push`: amends the most recent commit author to `Galuh Pradipta <galuhpradipta95@gmail.com>` before pushing.

Security & privacy notes:

- These hooks modify local git configuration and local commits. They do not transmit secrets.
- Hooks run locally and can be changed by anyone with access to the repository. Review their
  content before enabling them on a machine you trust.
- Changing author/committer metadata can have legal or audit implications; ensure this
  behaviour aligns with your team's policy.

If you prefer not to use these hooks, do not run the setup script. You can also inspect and
modify the scripts under `.githooks/` before enabling them.
