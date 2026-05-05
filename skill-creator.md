---
name: skill-creator
description: Create new Claude skills from scratch, improve or update existing skills, and optimize skill descriptions for better triggering. Use this skill whenever the user wants to build a custom skill, capture a repeatable workflow as a skill, turn a conversation into a reusable skill, fix a skill that isn't working well, or make a skill trigger more reliably. Make sure to use this skill whenever the user mentions building a skill, writing a SKILL.md, automating a workflow with a skill, or says things like "turn this into a skill", "help me make a skill", "my skill isn't triggering", or "I want Claude to always do X automatically."
---

# Skill Creator

A skill for creating, testing, and iteratively improving Claude skills on Claude.ai.

## Your role

Help the user go from idea → working skill. The core loop is:

1. Understand what they want
2. Write a draft SKILL.md
3. Test it by following the skill's own instructions on realistic prompts
4. Show results, gather feedback
5. Improve and repeat

Jump into wherever the user is in this process. If they already have a draft, skip to testing. If they want to vibe rather than run formal evals, that's fine too.

---

## Step 1: Understand the skill

Start by capturing intent. If the current conversation already shows a workflow the user wants to capture (they asked you to do something several times, or they said "turn this into a skill"), extract answers from the conversation history first — the steps taken, corrections made, output formats used.

Otherwise, ask:

1. What should this skill enable Claude to do?
2. When should it trigger? What would the user type to kick it off?
3. What does a good output look like?
4. Are there edge cases or things it should never do?

Don't write the skill until you have enough to make it useful. But don't over-interview — 2–3 questions max before taking a first pass.

---

## Step 2: Write the SKILL.md

### File structure

Every skill is a folder containing at minimum a `SKILL.md`:

```
skill-name/
├── SKILL.md          ← required; YAML frontmatter + instructions
└── references/       ← optional; extra docs Claude loads when needed
    └── guide.md
```

### SKILL.md format

```
---
name: your-skill-name
description: What it does and exactly when to use it. Be specific and a little "pushy" — Claude tends to undertrigger, so include the trigger phrases explicitly.
---

# Skill Title

Brief overview of what this skill does.

## When to use
[conditions, trigger phrases, contexts]

## Instructions
[step-by-step instructions in imperative form]

## Output format
[what the result should look like]

## Examples
[1–2 concrete examples if helpful]
```

### Frontmatter rules

- `name`: lowercase, hyphens only, max 64 characters (e.g. `design-brief-writer`)
- `description`: max 1024 characters. This is the **most important field** — it's the only thing Claude reads to decide whether to load the skill. Include what it does AND specific trigger phrases. Be slightly "pushy": instead of *"Use when writing briefs"*, write *"Use whenever the user mentions briefs, design documents, project scopes, or says 'write me a brief' — even if they don't use the word 'brief' exactly."*

### Writing style

- Use imperative form: "Extract the key colors", not "You should extract..."
- Explain *why* behind important steps — Claude reasons better with context than rigid rules
- Avoid ALWAYS/NEVER in caps unless truly critical. Explain the reasoning instead.
- Keep SKILL.md under 500 lines. Move detailed reference content to `references/` files.
- Include 1–2 concrete examples of good outputs if the format matters

### Progressive disclosure pattern

Skills load in three stages:
1. **Frontmatter only** — name + description, always in context (~100 tokens)
2. **Full SKILL.md** — loaded when the skill triggers
3. **Reference files** — loaded on-demand when SKILL.md mentions them

This means you can have a lean SKILL.md that points to a detailed `references/guide.md` for edge cases.

---

## Step 3: Test the skill (Claude.ai version)

Since Claude.ai doesn't have subagents, testing works differently here. For each test case:

1. Read the skill's SKILL.md yourself
2. Follow its instructions to complete the test prompt as if you were a fresh Claude instance with only that skill loaded
3. Show the user the output and ask: "How does this look? Anything you'd change?"

Pick 2–3 realistic test prompts — things the user would actually type, not abstract descriptions. Share them with the user before running:

> "Here are the test prompts I'll use — do these look right, or would you add others?"

Then run each one and show results inline.

---

## Step 4: Review and improve

After showing results, read the feedback and improve the skill. When revising:

- **Generalize from feedback** — don't over-fit to the specific test cases. If one example was wrong, ask: why was it wrong in general? Fix the root cause.
- **Keep the prompt lean** — remove instructions that aren't pulling weight
- **Explain the why** — instead of rigid rules, tell Claude what outcome you're aiming for
- **Look for repeated work** — if every test run does the same multi-step thing (builds the same structure, uses the same format), bake it into the skill directly

Repeat: improve → test again → review → until the user is happy.

---

## Step 5: Optimize the description

Once the skill content is good, offer to optimize the `description` field so the skill triggers reliably.

A well-optimized description:
- States what the skill does in third person
- Lists specific trigger phrases and contexts
- Mentions edge cases where it SHOULD trigger even if the user is indirect
- Is slightly "pushy" — Claude undertriggers by default

**How to test triggering**: Write 8–10 realistic prompts that should trigger the skill, and 8–10 near-misses that should not. Near-misses are most useful when they share keywords but need something different. Review with the user, then revise the description until it correctly handles all of them.

---

## Step 6: Package the skill

When the skill is ready, zip it:

```
skill-name/
└── SKILL.md
```

The user installs it by going to **Customize → Skills → "+" → Upload ZIP** in Claude.ai.

If there are reference files:
```
skill-name/
├── SKILL.md
└── references/
    └── guide.md
```

Tell the user the folder structure and offer to create the ZIP for them.

---

## Updating an existing skill

If the user wants to update an installed skill:

1. Keep the original `name` field unchanged — renaming breaks installation
2. Make a copy before editing so you can diff before/after
3. Package and re-upload as a ZIP with the same folder name

---

## Quick reference: skill writing checklist

- [ ] Name: lowercase, hyphens, under 64 chars
- [ ] Description: clear trigger conditions, specific phrases, slightly pushy
- [ ] Instructions: imperative form, explain the why
- [ ] Output format: defined clearly if it matters
- [ ] Examples: 1–2 if the format is non-obvious
- [ ] Length: under 500 lines; move detail to references/
- [ ] Tested: ran 2–3 realistic prompts and reviewed results
- [ ] Description optimized: trigger phrases checked
