# Push to Remote Repository

## Quick Setup Guide

### Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `basirion-design-system`
3. Description: `Basirion Design System - A modern design system with fiery theme`
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### Step 2: Add Remote and Push

After creating the repository, run these commands:

```bash
cd /home/drquadeer/basirion-design-system

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/basirion-design-system.git

# Push to remote
git push -u origin main
```

### Alternative: Use Setup Script

```bash
cd /home/drquadeer/basirion-design-system
./setup-remote.sh
```

Follow the prompts, then run:
```bash
git push -u origin main
```

## Using GitHub CLI (if installed)

If you have GitHub CLI (`gh`) installed:

```bash
cd /home/drquadeer/basirion-design-system

# Create repository and push
gh repo create basirion-design-system --public --source=. --remote=origin --push
```

## Verify

After pushing:

```bash
# Check remote
git remote -v

# View commits
git log --oneline

# Check status
git status
```

## Next Steps

1. ✅ Repository created and pushed
2. Update `package.json` repository URL if needed
3. Add badges to README.md (optional)
4. Create releases/tags for versions
5. Set up GitHub Pages for documentation (optional)

