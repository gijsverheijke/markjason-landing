# markjason Feature List

> **Exhaustive reference for landing page content**
> 
> Audience: Developers who work with AI (Claude Code, Codex, Cursor, etc.), accumulate config files, and need to share specs with non-technical colleagues.

---

## The Elevator Pitch

A stupidly fast native macOS app for `.md`, `.json`, and `.env` files. Opens in 0.3 seconds. Uses 50MB RAM. No Electron, no web tech—just SwiftUI done right.

**Core value prop:** Beautiful viewer for AI terminal output → instant sharing with colleagues.

---

## 🚀 Headline Features

### 1. Instant Create from Clipboard (`⌘⇧N`)
**The killer feature for AI workflows.**

Paste anything from your clipboard → markjason auto-detects if it's JSON, Markdown, or ENV → instant preview.

- **Use case:** Claude Code spits out a config. You copy it. `⌘⇧N`. Done.
- **Use case:** Agent drops a massive JSON response. You paste it. Instantly readable.
- Files auto-save to a `~/Documents/markjason` scratchpad folder with timestamp names
- "Rename & Move" badge appears for scratchpad files—click to give it a real name

### 2. Instant Filename Copy (`⌃⌘C` or click)
**A lifesaver when talking to AI agents.**

Click any filename → copies to clipboard with "Copied!" feedback.

- Agents constantly ask "which file?" — now you just click and paste
- Works in the tab bar, document header, and sidebar
- Double-click to rename instead

### 3. One-Click ENV Variable Copy
**Not even VS Code has this.**

In `.env` read mode:
- Click any **key** → copies the key
- Click any **value** → copies the value
- Hover shows copy icon, click shows "Copied!" feedback
- Filter/search through variables with `⌘F`

### 4. Live External Change Detection
**Essential for AI-assisted coding.**

When an external process (your agent, git, another editor) modifies the file:
- If you have no local edits → **seamless silent reload**
- If you have local edits → **conflict banner** appears: "Reload" or "Keep Local"
- File watcher runs in background, detects size/mtime changes instantly

### 5. JSON Collapsible Tree View
**Read mode for JSON that actually works.**

Toggle with `⌘E`:
- Collapsible tree with chevrons for objects/arrays
- Color-coded values: strings (green), numbers (orange), booleans (purple), null (gray)
- Real-time search (`⌘F`) with match highlighting and keyboard navigation (↑↓)
- Click error badge → jump to the exact error line in raw mode

### 6. Markdown Preview with Scroll Sync
Toggle with `⌘E`:
- Clean preview with proper typography (iA Writer fonts)
- Code blocks with syntax highlighting
- Scroll position preserved when switching modes (sub-line precision!)
- Tables rendered correctly

---

## ⌨️ Keyboard-First Design

### The Essentials (memorize these)
| Shortcut | Action |
|----------|--------|
| `⌘E` | Toggle Read/Raw mode |
| `⌘⇧N` | New from Clipboard |
| `⌘K` | Quick Open (search recents, tabs) |
| `⌘N` | New file |
| `⌘W` | Close tab |
| `⌘/` | All shortcuts guide |

### Navigation
| Shortcut | Action |
|----------|--------|
| `⌘⇧[` | Previous tab |
| `⌘⇧]` | Next tab |
| `⌘1-9` | Jump to tab 1-9 |
| `⌘\` | Toggle sidebar |

### Editing (Markdown-specific)
| Shortcut | Action |
|----------|--------|
| `⌘B` | **Bold** |
| `⌘I` | *Italic* |
| `⌘U` | <u>Underline</u> |
| `⇧⌘X` | ~~Strikethrough~~ |
| `⌘L` | Insert [link](url) |
| `⇧⌘C` | Inline `code` |
| `⌥⇧⌘C` | Code block |

### Search & Navigation
| Shortcut | Action |
|----------|--------|
| `⌘F` | Find in file |
| `⌥⌘J` | Jump to JSON error |
| `⇧⌘M` | Markdown syntax guide |

### Files
| Shortcut | Action |
|----------|--------|
| `⌘O` | Open file |
| `⌘S` | Save |
| `⇧⌘S` | Save As... |
| `⌃⌘C` | Copy filename |

---

## 🎨 Apollo Design System

Inspired by NASA's Apollo mission control panels. The aesthetic says: *precision, reliability, calm under pressure.*

### Visual Language
- **Warm dark theme** — browns/creams instead of cold grays, easier on the eyes for long sessions
- **Apollo LED toggles** — backlit button aesthetic with radial gradients and soft glow effects
- **File type indicators** — color-coded dots: blue (markdown), orange (json), purple (env)
- **iA Writer typography** — Mono for editing, Quattro for reading

### Deliberate Constraints
- **Dark mode only** — light mode users, seek help
- **No light theme toggle** — one palette, done right
- **No theming options** — decision fatigue is the enemy

---

## 🏎️ Performance

### Speed
| Metric | markjason | VS Code |
|--------|-----------|---------|
| Cold start | ~0.3s | ~3s |
| Open 10MB JSON | instant | "loading..." spinner |
| Switch tabs | instant | noticeable delay |

### Memory
- **~50MB RAM** with one tab open
- Native SwiftUI = no Electron bloat
- Lazy loading for large files
- LRU cache for syntax highlighting

### Why It's Fast
- Native macOS (SwiftUI + AppKit hybrid where needed)
- No JavaScript runtime
- No plugin system to load
- No language servers to spawn

---

## 📁 File Management

### Sidebar
- **Pinned section** — pin frequently-used files/folders (`⌘D`)
- **Recents section** — automatically tracks opened files
- Hover → X button appears to remove from recents
- Paths abbreviated with `~` for home directory
- Color-coded icons by file type

### Tabs
- Multiple files open as tabs
- Drag to reorder (coming soon)
- Overflow indicator (+N) when too many tabs → click to open `⌘K` search
- "Close Saved" button — close all saved tabs in one click
- Color-coded dot per file type
- Red unsaved indicator when changes pending

### Quick Open (`⌘K`)
- Search across recents, open tabs, and pinned items
- Keyboard navigation (↑↓, Enter to open)
- Grouped by category: Open Tabs, Recent Files, Pinned

### Create & Rename
- `⌘N` → file naming dialog
- Double-click filename → rename dialog
- Choose destination folder
- Validates filename (no invalid characters)

---

## 💾 Auto-Save

### How It Works
- Debounced save after 1.5 seconds of inactivity
- Visual feedback: spinning icon while saving, checkmark when done
- Never lose work accidentally

### Toggle Auto-Save
- Click the indicator in the toolbar
- When OFF: red alert styling, "AUTO-SAVE OFF" badge
- Manual save with `⌘S` when auto-save is off

### Conflict Handling
- External changes detected via file watcher
- If you have unsaved local changes + external change → banner appears
- Choose: "Reload from Disk" or "Keep Local Changes"

---

## 📄 File Type Details

### Markdown (`.md`, `.markdown`)
**Two modes:**
- **Raw mode** — syntax highlighting, editing shortcuts
- **Read mode** — rendered preview with proper typography

**Rendering features:**
- Headers (H1-H6) with size hierarchy
- Bold, italic, strikethrough, underline
- Code blocks with language detection
- Tables (properly rendered!)
- Block quotes
- Task lists with checkboxes
- Links (clickable in read mode)
- Images (embedded in read mode)

**Editing shortcuts:** `⌘B`, `⌘I`, `⌘U`, `⇧⌘X`, `⌘L`, `⇧⌘C`, `⌥⇧⌘C`

### JSON (`.json`)
**Two modes:**
- **Raw mode** — syntax highlighting, real-time validation, error badge
- **Read mode** — collapsible tree view

**Validation:**
- Real-time JSON validation as you type
- Error badge shows line/column of first error
- Click error → jump to problem line
- Invalid JSON → can't enter Read mode (graceful fallback)

**Tree view features:**
- Collapsible objects/arrays with count badges
- Color-coded values by type
- Search with `⌘F`, highlights matches
- Navigate matches with ↑↓

### ENV (`.env`, files starting with `.env`)
**Two modes:**
- **Raw mode** — syntax highlighting
- **Read mode** — key/value list with one-click copy

**Special features:**
- Click key → copy key
- Click value → copy value
- Export keyword detected and styled
- Comments styled differently (#)
- Filter/search variables with `⌘F`

**Auto-detection:**
- When you paste content that looks like env vars, markjason suggests renaming to `.env`
- Banner: "This looks like environment variables. Rename to .env?"

---

## 🔍 Find in File (`⌘F`)

- Unified find bar across all file types
- Match count with current position indicator
- Navigate with ↑↓ or Enter/Shift+Enter
- Yellow highlight for matches
- Brighter highlight for current match
- Escape to dismiss

---

## 📦 Drag & Drop

- Drag `.md`, `.json`, or `.env` files onto the window
- Opens immediately as a new tab
- Works from Finder, desktop, or other apps

---

## 🧭 Onboarding

### First Run
- Welcome overlay with 4 key shortcuts
- Clean, non-intrusive
- One-time only (remembered)

### Help Access
- `⌘/` — Keyboard shortcuts guide (always available)
- `⇧⌘M` — Markdown syntax guide
- Bottom-right corner hints when no overlays are open

---

## 🚫 Anti-Features (What We'll Never Add)

These are **features**, not missing functionality.

- ❌ **Git integration** — use git
- ❌ **Cloud sync** — it's your computer
- ❌ **Plugins/extensions** — that's how you become VS Code
- ❌ **Accounts/login** — absolutely not
- ❌ **Light mode** — seek help
- ❌ **Multiple themes** — we picked the right one
- ❌ **Settings panel** — minimal = powerful
- ❌ **Telemetry** — we literally don't know you're here

---

## 🛠️ Technical Notes

### Requirements
- macOS 12+
- Universal Binary (Apple Silicon + Intel)
- ~8MB download

### Architecture
- SwiftUI for UI
- AppKit NSTextView for the editor (needed for undo/redo, IME, etc.)
- Observation framework for state
- Security-scoped bookmarks for folder access

---

## 📝 Copywriting Notes for Landing Page

### Tone
- Dry wit, confident, minimal
- Don't oversell — let the speed speak
- Technical but accessible
- Slightly irreverent ("seek help")

### Key phrases
- "Stupidly fast"
- "Because the code writes itself now"
- "Read specs, edit prompts, manage configs"
- "No drama"
- "Just an app"

### ICP messaging
| Their pain | Our solution |
|------------|--------------|
| "I just want to read this JSON" | Open in 0.3s, done |
| "Where did Claude put that file?" | `⌘K` to search, click to copy filename |
| "I need to share this spec" | Read mode → screenshot → done |
| "This config is too big to read" | Collapsible tree view |
| "VS Code takes forever to open" | Native = instant |
| "I don't need an IDE" | We agree |

---

## 🔮 Roadmap Hints (don't publish)

Currently in TODO.md:
- Copy as Image (`⌘⇧C`) — render markdown as styled image for sharing
- Token count estimate — for AI prompt files
- Tab bar bugs — overflow still needs work
- RAM optimization — currently ~150MB with max recents

---

*Last updated: 2026-01-29*
*Source: markjason app codebase analysis*
