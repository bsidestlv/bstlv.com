# MDX Content Editing Guide

This guide explains how to edit content for the BSidesTLV website using MDX files.

## What is MDX?

MDX allows you to write content using Markdown syntax (like formatting text, creating lists, and adding links) in files that can be easily edited by non-developers. All the textual content for the website pages is stored in the `content/` directory.

## File Locations

The content files are located in the `content/` directory:

- `content/home.mdx` - Homepage content
- `content/code-of-conduct.mdx` - Code of Conduct page
- `content/cfp.mdx` - Call for Papers page  
- `content/volunteers.mdx` - Volunteers page

## Editing Content

### Basic Markdown Syntax

```markdown
# Main Heading
## Section Heading  
### Subsection Heading

**Bold text**
*Italic text*

- Bullet point
- Another bullet point

1. Numbered list
2. Second item

[Link text](https://example.com)
```

### Comments for Guidance

Each MDX file contains helpful comments at the top that explain what content is in that file and how to edit it safely. Comments look like this:

```markdown
{/* 
  This is a comment that won't appear on the website.
  Edit this file to update the content that appears on the page.
*/}
```

### What You Can Edit

✅ **Safe to edit:**
- Headings and text content
- Bullet points and numbered lists
- Dates and times
- Descriptions and announcements
- Link text (but be careful with URLs)

⚠️ **Edit with caution:**
- URLs and email addresses
- File paths in links (like `/volunteers`)

❌ **Do not edit:**
- Comments in `{/* */}` blocks (these are helpful instructions)
- Anything that looks like code

## Examples

### Updating Event Dates

In `content/cfp.mdx`, you can update dates like this:

```markdown
- **CFP Opens**: February 16th, 2025 at 10:00
- **CFP Closes**: April 15th, 2025 at 23:59  
```

### Updating Announcements

In `content/home.mdx`, you can modify the main announcement:

```markdown
### 📢 BSidesTLV 2025 - new date announcement, 11.12.2025

#### 📢 Greetings Hackers & earthlings!

Following the June 2025 postponement, we have an update...
```

### Adding or Removing Content

You can add new sections or remove sections entirely. Just follow the existing format:

```markdown
## New Section Title

Your new content here. You can use **bold text**, *italics*, and [links](https://example.com).

### Subsection

More detailed information in subsections.
```

## Testing Changes

After making changes:

1. Save the file
2. The website will automatically rebuild with your changes
3. Check the website to make sure your changes look correct
4. If something looks wrong, you can always revert your changes

## Getting Help

If you need help or something goes wrong:

1. Check the comments at the top of each MDX file for guidance
2. Look at the existing content format as examples
3. Contact the development team if you need assistance

## Important Notes

- Always save your files after editing
- Keep the same structure and formatting style as existing content
- Test your changes on the website after editing
- Don't delete the comment blocks at the top of files - they contain helpful instructions
- When in doubt, make small changes and test them before making larger edits