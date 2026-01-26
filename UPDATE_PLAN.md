# Landing Page Update Plan

Update the landing page to reflect new features shipped since initial build.

**Note:** Leave .env support out (surprise for users to discover).

---

## New Features to Add

### 1. JSON Read Mode (collapsible tree view)
**What:** JSON files now have a "Read" mode with a beautiful collapsible tree view — not just raw text with validation.

**Where to add:**
- Update the "Dual Modes" feature card — currently only mentions "real-time validation"
- Add to hero visual? Could show JSON tree view as alternate state

**Suggested copy:**
> **JSON:** Collapsible tree view for reading. Real-time validation. Click errors to jump to the problem.

### 2. Quick Paste / Scratchpad (Cmd+Shift+N)
**What:** Paste anything from clipboard → auto-detects JSON vs markdown → saves to scratchpad folder → ready to view/edit. Perfect for capturing Claude output.

**This is a headline feature.** Key workflow: Claude Code terminal → Cmd+Shift+N → instant preview.

**Where to add:**
- New feature card (maybe replace "Drag & Drop" which is table stakes)
- Or add to hero description — this is THE use case for AI workers

**Suggested copy:**
> **Quick Paste**  
> `Cmd+Shift+N` — Paste from clipboard, auto-detect format, instant preview.  
> Copy that Claude output. Paste. Done.

### 3. Click-to-Jump JSON Errors
**What:** Error bar shows line/column. Click it → jumps to the exact error position.

**Where to add:**
- Fold into "Dual Modes" JSON description (already partially covered)

**Suggested copy:**
> Click the error → jump to the problem. No hunting.

### 4. Tabs
**What:** Multiple files open as tabs. Quick switching.

**Where to add:**
- Maybe not a headline feature (expected behavior)
- Could mention in the VS Code comparison as "Open multiple files without the overhead"
- Or update hero visual to show tabs

---

## Hero Section Updates

### Option A: Update the hero visual
Current visual shows a simple sidebar + editor. Could enhance:
- Add tab bar showing multiple files
- Show the JSON tree view as an alternate panel

### Option B: Update typed files animation
Current: `README.md, notes.md, prompt.md, config.json, response.json, MEMORY.md...`
Could add scratchpad-style files: `scratch-2026-01-26.md, claude-output.json`

### Option C: Add Quick Paste to description
Current description focuses on "don't want to open an IDE to read a file."
Could add the capture workflow: "Copy from Claude, paste, preview."

---

## Features Grid Updates

### Current (6 features):
1. Instant Open ✓ (keep)
2. Syntax Highlighting ✓ (keep)
3. Dual Modes — **UPDATE** (add JSON tree view, click-to-jump)
4. Dark Mode Forever ✓ (keep)
5. Auto-Save ✓ (keep)
6. Drag & Drop — **CONSIDER REPLACING** with Quick Paste

### Proposed:
1. Instant Open ✓
2. Syntax Highlighting ✓
3. Dual Modes — **UPDATED copy**
4. Dark Mode Forever ✓
5. Auto-Save ✓
6. **Quick Paste** (Cmd+Shift+N) — **NEW, replaces Drag & Drop**

Drag & Drop is still supported, just not headline-worthy. Quick Paste is the differentiator.

---

## VS Code Comparison Update

Current markjason side is minimal:
```
- Double-click file
- Read your file
```

Could expand to show tabs/scratchpad workflow without being bloated:
```
- Double-click file (or Cmd+Shift+N to paste)
- Read your file
- Open more in tabs
- Still using 30MB of RAM
```

---

## What NOT to Add
- .env support (keeping as surprise)
- Technical performance details (users don't care about O(n) optimizations)
- Detailed keyboard shortcuts (keep it simple)

---

## Recommended Priority

1. **High:** Update "Dual Modes" feature copy (JSON tree view + click-to-jump)
2. **High:** Replace "Drag & Drop" with "Quick Paste" feature
3. **Medium:** Update hero description to mention clipboard capture
4. **Low:** Update hero visual to show tabs
5. **Low:** Update VS Code comparison

---

## Implementation Notes

Files to edit:
- `index.html` — Feature cards, hero text, comparison section
- `style.css` — Only if adding new visual elements
- `script.js` — Only if adding new interactions

Keep the tone: dry wit, confident, minimal. Don't oversell.
