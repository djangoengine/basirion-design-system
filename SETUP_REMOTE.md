# Setting Up Remote Repository

## Option 1: GitHub (Recommended)

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `basirion-design-system`
3. Description: "Basirion Design System - A modern design system with fiery theme"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /home/drquadeer/basirion-design-system

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/basirion-design-system.git

# Push to remote
git push -u origin main
```

### Alternative: Using SSH

If you have SSH keys set up:

```bash
git remote add origin git@github.com:YOUR_USERNAME/basirion-design-system.git
git push -u origin main
```

## Option 2: GitLab

### Step 1: Create Repository on GitLab

1. Go to https://gitlab.com/projects/new
2. Create blank project
3. Name: `basirion-design-system`
4. Visibility: Public or Private

### Step 2: Add Remote and Push

```bash
cd /home/drquadeer/basirion-design-system
git remote add origin https://gitlab.com/YOUR_USERNAME/basirion-design-system.git
git push -u origin main
```

## Option 3: Bitbucket

### Step 1: Create Repository on Bitbucket

1. Go to https://bitbucket.org/repo/create
2. Repository name: `basirion-design-system`
3. Access level: Public or Private

### Step 2: Add Remote and Push

```bash
cd /home/drquadeer/basirion-design-system
git remote add origin https://bitbucket.org/YOUR_USERNAME/basirion-design-system.git
git push -u origin main
```

## Verify

After pushing, verify with:

```bash
git remote -v
git log --oneline
```

## Next Steps

After pushing to remote:

1. Update `package.json` with the correct repository URL
2. Add badges to README.md
3. Create releases/tags for versions
4. Set up GitHub Actions for CI/CD (optional)

