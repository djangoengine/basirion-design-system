#!/bin/bash

# Basirion Design System - Remote Setup Script
# This script helps you set up a remote Git repository

echo "🚀 Basirion Design System - Remote Setup"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Run 'git init' first."
    exit 1
fi

# Get repository URL
echo "Please choose your Git hosting platform:"
echo "1) GitHub"
echo "2) GitLab"
echo "3) Bitbucket"
echo "4) Custom URL"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        read -p "Enter your GitHub username: " username
        REPO_URL="https://github.com/${username}/basirion-design-system.git"
        ;;
    2)
        read -p "Enter your GitLab username: " username
        REPO_URL="https://gitlab.com/${username}/basirion-design-system.git"
        ;;
    3)
        read -p "Enter your Bitbucket username: " username
        REPO_URL="https://bitbucket.org/${username}/basirion-design-system.git"
        ;;
    4)
        read -p "Enter your repository URL: " REPO_URL
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "📦 Repository URL: $REPO_URL"
echo ""
read -p "Do you want to add this as remote origin? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "Cancelled."
    exit 0
fi

# Add remote
git remote add origin "$REPO_URL" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Remote added successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Create the repository on your Git hosting platform"
    echo "2. Run: git push -u origin main"
else
    echo "⚠️  Remote might already exist. Checking..."
    git remote -v
    echo ""
    read -p "Do you want to update the remote URL? (y/n): " update
    if [ "$update" == "y" ]; then
        git remote set-url origin "$REPO_URL"
        echo "✅ Remote URL updated!"
    fi
fi

echo ""
echo "📋 To push your code, run:"
echo "   git push -u origin main"
echo ""

