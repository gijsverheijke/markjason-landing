# markjason

<div align="center">

<br>

<h3><code>#</code><code>{</code><code>}</code></h3>

**The fastest way to read specs, edit prompts, and manage configs.**

*Built for the only human tasks left in agentic coding.*

<br>

[Website](https://markjason.sh) · [Download](https://markjason.sh/#download) · [Report Issue](https://github.com/gijsverheijke/markjason-landing/issues)

<br>

</div>

---

## What is markjason?

A stupidly fast macOS app for `.md`, `.json`, and `.env` files.

If you work with AI and accumulate lots of markdown specs, JSON configs, and .env files, you know the pain: opening a heavyweight IDE just to read a file, waiting for Electron apps to boot, or fighting with cluttered file browsers.

markjason is the antidote:

- ⚡ **Fast** — Native Swift, no Electron.
- 🎯 **Focused** — Just markdown, JSON, and .env. Nothing else.
- 🌙 **Dark mode only** — As nature intended.
- 💾 **Auto-save** — With clear feedback. Never lose work.
- 📁 **Lots of carefully crafted details** For the vibes.

---

## Install

1. **[Download the DMG](https://github.com/gijsverheijke/markjason-landing/releases/download/0.27/markjason-0.28.dmg)**
2. Drag markjason to Applications
3. Open and enjoy

---

## Features

### Realtime updates
- Your agent edits AGENTS.md while you have it open? Boom, it's there in markjason
- You and your agent are editing at the same time and something drifts? Instant warning

### Uniquely crafted for vibecoding
- See full filepath and ballpark token count of the file with ⇧⌘I 
- Insta-copy filename with ⌃⌘C so you can paste it into your terminal
- Insta-copy markdown as image to share on messaging
- One-click copy of env keys and values to paste them to your other envs
- FAST! and low RAM (~1/5th of VS Code i.e. ~100megs)

### For Markdown
- Read mode toggle (⌘E)
- Syntax highlighting and font sizes
- Bold, italic, links, code formatting (⌘B, ⌘I, ⌘L, ⇧⌘C)
- Copy rendered preview as image (⇧⌘C in read mode)
- Markdown syntax guide (⇧⌘M)

### For JSON
- Real-time validation
- Jump to error location (⌥⌘J)
- Collapsible tree view in read mode
- Pretty formatting
- Sort keys alphabetically (⇧⌘K)
- Breadcrumb navigation — click any node, see the full path
- Copy JSON Pointer — right-click any value to copy its path
- Smart Paste — paste minified or broken JSON, it auto-formats and repairs
- Multi-line string editor — edit long string values inline in read mode

### For .env
- Clean key-value display
- One-click copy of keys and values

### Navigation
- Sidebar file browser with pinned files (⌘D)
- Quick Open (⌘K) — fuzzy search across all recent files and tabs
- Tabs with drag reordering (⌘1-9 to switch)

---

## Keyboard Shortcuts

### Most Used
| Shortcut | Action |
|----------|--------|
| ⌘E | Toggle Preview/Raw mode |
| ⌘N | New file |
| ⌘⇧N | New from Clipboard |
| ⌘W | Close tab |
| ⌘/ | Show all shortcuts |

### Navigation
| Shortcut | Action |
|----------|--------|
| ⌘K | Quick Open |
| ⌘⇧[ | Previous tab |
| ⌘⇧] | Next tab |
| ⌘1-9 | Switch to tab 1-9 |
| ⌘0 | Toggle sidebar |

### Editing (Markdown)
| Shortcut | Action |
|----------|--------|
| ⌘B | Bold (**text**) |
| ⌘I | Italic (*text*) |
| ⌘U | Underline |
| ⇧⌘X | Strikethrough |
| ⌘L | Insert link |
| ⇧⌘C | Inline code (\`code\`) |
| ⌥⇧⌘C | Code block |

### JSON
| Shortcut | Action |
|----------|--------|
| ⇧⌘K | Sort JSON keys (A→Z) |
| ⌥⌘J | Jump to JSON error |

### Files
| Shortcut | Action |
|----------|--------|
| ⌘O | Open file |
| ⌘S | Save |
| ⌘⇧S | Save As... |
| ⌘D | Toggle pin |
| ⌘F | Find in file |
| ⇧⌘I | Show file info |
| ⌃⌘C | Copy filename |

### JSON-specific
| Shortcut | Action |
|----------|--------|
| ⌥⌘J | Jump to JSON error |

---

## Design and UX

markjason's dark interface is meant to be easy on the eyes, and optimized for focus.

The logo `#{}` is a mashup of:
- `#` — Markdown heading syntax
- `{}` — JSON object syntax

Indicators in markjason are inspired by the Apollo Command Module. A warm, vintage light. I love them and I hope you will too.

---

## Requirements

- macOS 14.0 (Sonoma) or later
- Apple Silicon or Intel

---

## Why is this repo the landing page?

markjason itself is not open source. This repo hosts the landing page and the DMG releases. The setup is like this so the app can be completely free without any hosting costs (GitHub handles the downloads).

If you're interested in the source or want to contribute, feel free to open an issue or DM.

---

## About

Created by [Gijs Verheijke](https://gijs.substack.com) for people who read too many AI outputs.

Built with Swift and SwiftUI. No Electron. No dependencies. No drama.

---

## Feedback

Found a bug? Have a feature request?

→ [Open an issue](https://github.com/gijsverheijke/markjason-landing/issues)

---

<div align="center">

**[markjason.sh](https://markjason.sh)**

</div>
