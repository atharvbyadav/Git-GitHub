# Git and GitHub Guide

This README.md file serves as a comprehensive guide to using Git and GitHub for version control. It includes explanations, commands, and tips for getting started and mastering these tools.

---

## Table of Contents
1. [What is Git?](#what-is-git)
2. [What is GitHub?](#what-is-github)
3. [Installing Git](#installing-git)
4. [Basic Git Commands](#basic-git-commands)
5. [Working with GitHub](#working-with-github)
6. [Renaming a File and Pushing Changes](#renaming-a-file-and-pushing-changes)
7. [Branching and Merging](#branching-and-merging)
8. [Collaborating with Others](#collaborating-with-others)
9. [Advanced Git Commands](#advanced-git-commands)
10. [Best Practices](#best-practices)

---

## What is Git?
Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on a project simultaneously without interfering with each other’s changes.

### Key Features:
- Tracks changes to files.
- Allows collaboration.
- Enables branching and merging.
- Offers a history of changes.

---

## What is GitHub?
GitHub is a cloud-based hosting service that allows you to manage Git repositories. It provides additional tools for collaboration, issue tracking, and project management.

### Key Features:
- Repository hosting.
- Collaboration tools.
- Issue and project tracking.
- Actions for CI/CD workflows.

---

## Installing Git

### Installation Steps:
1. **Windows**:
   - Download the installer from [git-scm.com](https://git-scm.com/).
   - Run the installer and follow the instructions.

2. **Mac**:
   - Use Homebrew: `brew install git`.

3. **Linux**:
   - Use your package manager:
     ```bash
     sudo apt-get install git     # Ubuntu/Debian
     sudo yum install git         # CentOS/Fedora
     ```

### Verify Installation:
Run the following command to verify:
```bash
git --version
```

---

## Basic Git Commands

### Setting Up Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Initialize a Repository
```bash
git init
```
This initializes a Git repository in the current directory.

### Clone a Repository
```bash
git clone <repository-url>
```
This copies an existing repository to your local machine.

### Check Repository Status
```bash
git status
```
This shows the current status of the repository, including changes and staged files.

### Stage Changes
```bash
git add <file>
git add .
```
Stages specific files or all files for the next commit.

### Commit Changes
```bash
git commit -m "Commit message"
```
Records staged changes in the repository.

### View Commit History
```bash
git log
```
Displays the commit history.

---

## Working with GitHub

### Connect a Local Repository to GitHub
```bash
git remote add origin <repository-url>
git branch -M main
git push -u origin main
```
Links your local repository to a GitHub repository and pushes the code.

### Push Changes
```bash
git push
```
Uploads local commits to GitHub.

### Pull Changes
```bash
git pull
```
Fetches and integrates changes from GitHub into your local repository.

---

## Renaming a File and Pushing Changes

### Rename a File Locally
```bash
mv old_filename new_filename  # Linux/macOS
ren old_filename new_filename  # Windows (Command Prompt)
```

### Stage the Renamed File
```bash
git add old_filename new_filename
```

### Commit the Change
```bash
git commit -m "Renamed file from old_filename to new_filename"
```

### Push the Change to the Main Branch
```bash
git push origin main
```

---

## Branching and Merging

### Create a Branch
```bash
git branch <branch-name>
```

### Switch to a Branch
```bash
git checkout <branch-name>
```

### Create and Switch to a Branch
```bash
git checkout -b <branch-name>
```

### Merge a Branch
```bash
git checkout main
git merge <branch-name>
```

### Delete a Branch
```bash
git branch -d <branch-name>
```

---

## Collaborating with Others

### Fork a Repository
- Go to the repository on GitHub and click "Fork."

### Create a Pull Request
1. Push changes to your branch.
2. Navigate to the repository on GitHub.
3. Click "Pull Request" and follow the instructions.

### Resolving Merge Conflicts
If there are conflicts during a merge, Git will notify you. Open the conflicting files, resolve the conflicts, and then run:
```bash
git add <file>
git commit
```

---

## Advanced Git Commands

### Undo Changes
- **Unstage a file**:
  ```bash
  git reset <file>
  ```
- **Discard changes in a file**:
  ```bash
  git checkout -- <file>
  ```

### View Differences
```bash
git diff
```
Shows differences between working directory and staged changes.

### Stash Changes
```bash
git stash
git stash pop
```
Temporarily saves changes and restores them later.

### Revert a Commit
```bash
git revert <commit-hash>
```
Creates a new commit that undoes a specific commit.

### Amend a Commit
```bash
git commit --amend
```
Allows you to modify the last commit.

---

## Best Practices

1. Write clear and concise commit messages.
2. Use branches for features and bug fixes.
3. Pull changes from the main branch before starting new work.
4. Regularly push your work to avoid losing progress.
5. Use `.gitignore` to exclude unnecessary files.

### Example `.gitignore` File:
```
# Ignore node modules
node_modules/

# Ignore logs
*.log

# Ignore environment files
.env
```

---

By following this guide, you’ll be able to effectively manage your projects using Git and GitHub. Happy coding!

