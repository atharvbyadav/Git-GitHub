# 🚀 Git and GitHub Guide

Welcome to your **all-in-one guide** to mastering Git and GitHub! Whether you're a beginner just starting out or an experienced developer brushing up on advanced features, this guide covers everything with easy-to-understand commands, explanations, and best practices.

<p align="center">
  <!-- GitHub Stats -->
  <img src="https://img.shields.io/github/stars/atharvbyadav/Git-GitHub?color=yellow&style=for-the-badge" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/atharvbyadav/Git-GitHub?color=orange&style=for-the-badge" alt="GitHub Forks">
  <img src="https://img.shields.io/github/issues/atharvbyadav/Git-GitHub?style=for-the-badge" alt="Issues">
  <img src="https://img.shields.io/github/pull-requests/atharvbyadav/Git-GitHub?style=for-the-badge" alt="PRs">
  <img src="https://img.shields.io/github/last-commit/atharvbyadav/Git-GitHub?color=brightgreen&style=for-the-badge" alt="Last Commit">
  <img src="https://img.shields.io/github/license/atharvbyadav/Git-GitHub?style=for-the-badge" alt="License">
</p>
<p align="center">
  <!-- General Tech Stack / Topic Tags -->
  <img src="https://img.shields.io/badge/Markdown-%23f7df1e.svg?style=for-the-badge&logo=markdown&logoColor=black" alt="Markdown">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/Open%20Source-%2300b894?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="Open Source">
  <img src="https://img.shields.io/badge/Version%20Control-E44D27?style=for-the-badge&logo=git&logoColor=white" alt="Version Control">
</p>
<p align="center">
  <!-- Extra Utility Badges -->
  <img src="https://img.shields.io/badge/Beginner%20Friendly-33CC99?style=for-the-badge" alt="Beginner Friendly">
  <img src="https://img.shields.io/badge/Documentation%20Project-3366FF?style=for-the-badge" alt="Documentation Project">
  <img src="https://img.shields.io/badge/Contributions%20Welcome-ff69b4?style=for-the-badge" alt="Contributions Welcome">
</p>


> 📌 *Version control is not just a tool — it's a discipline. The cleaner your history, the clearer your future.*

---
<p align="center">
  <img src="https://raw.githubusercontent.com/atharvbyadav/Git-GitHub/main/banner.png" alt="Mastering WSL" width="500" />
</p>

---

## 📚 Table of Contents

- [🚀 Git and GitHub Guide](#-git-and-github-guide)
  - [📚 Table of Contents](#-table-of-contents)
  - [🛠️ What is Git?](#️-what-is-git)
    - [🔑 Key Features:](#-key-features)
  - [☁️ What is GitHub?](#️-what-is-github)
    - [💡 Why Use GitHub?](#-why-use-github)
  - [🧱 Installing Git](#-installing-git)
    - [🔽 For Windows:](#-for-windows)
    - [🍎 For macOS:](#-for-macos)
    - [🐧 For Linux:](#-for-linux)
    - [✅ Verify Installation:](#-verify-installation)
  - [🔧 Git Configuration](#-git-configuration)
    - [Optional Goodies:](#optional-goodies)
  - [🧰 Basic Git Commands](#-basic-git-commands)
    - [🔹 Initialize a Repository](#-initialize-a-repository)
    - [🔹 Clone a Repository](#-clone-a-repository)
    - [🔹 Check Status](#-check-status)
    - [🔹 Stage Files](#-stage-files)
    - [🔹 Commit Changes](#-commit-changes)
    - [🔹 View Commit History](#-view-commit-history)
    - [🔹 Undo Last Commit (Keep Changes)](#-undo-last-commit-keep-changes)
  - [🌐 Working with GitHub](#-working-with-github)
    - [🔗 Connect Local Repo to GitHub](#-connect-local-repo-to-github)
    - [🚀 Push Changes](#-push-changes)
    - [⬇️ Pull Changes](#️-pull-changes)
    - [🔁 Clone Then Push to New Repo](#-clone-then-push-to-new-repo)
  - [✏️ Renaming \& Removing Files](#️-renaming--removing-files)
    - [📝 Rename a File](#-rename-a-file)
    - [🗑️ Remove a File](#️-remove-a-file)
    - [✅ Commit and Push](#-commit-and-push)
  - [🌿 Branching \& Merging](#-branching--merging)
    - [🌱 Create a New Branch](#-create-a-new-branch)
    - [🔄 Switch to a Branch](#-switch-to-a-branch)
    - [➕ Create \& Switch in One Step](#-create--switch-in-one-step)
    - [🔁 Merge a Branch into Main](#-merge-a-branch-into-main)
    - [🧹 Delete a Merged Branch](#-delete-a-merged-branch)
    - [🧭 See All Branches](#-see-all-branches)
    - [🌍 Push a Branch to GitHub](#-push-a-branch-to-github)
  - [📦 Stashing \& Cleaning](#-stashing--cleaning)
    - [🧳 Temporarily Save Changes (Stash)](#-temporarily-save-changes-stash)
    - [🎯 Reapply Stashed Changes](#-reapply-stashed-changes)
    - [🧼 Remove Untracked Files](#-remove-untracked-files)
  - [🕘 Rewriting History](#-rewriting-history)
    - [🔄 Amend Last Commit](#-amend-last-commit)
    - [🚫 Undo a Commit (Soft Reset)](#-undo-a-commit-soft-reset)
    - [💥 Hard Reset to Last Commit](#-hard-reset-to-last-commit)
  - [📜 Logs \& Diffs](#-logs--diffs)
    - [📖 View Commit History](#-view-commit-history-1)
    - [🔍 View File Differences](#-view-file-differences)
  - [🏷️ Tags](#️-tags)
    - [🔖 Create a Tag](#-create-a-tag)
    - [🚀 Push Tags to GitHub](#-push-tags-to-github)
    - [📋 List Tags](#-list-tags)
  - [🌱 Rebasing \& Cherry Picking](#-rebasing--cherry-picking)
    - [🔄 Rebase a Branch](#-rebase-a-branch)
    - [🍒 Cherry Pick a Commit](#-cherry-pick-a-commit)
  - [📦 Git Submodules](#-git-submodules)
    - [➕ Add a Submodule](#-add-a-submodule)
    - [🔄 Init \& Update](#-init--update)
  - [⚡ Git Aliases](#-git-aliases)
  - [🤝 Collaborating with Others](#-collaborating-with-others)
    - [🍴 Fork a Repository](#-fork-a-repository)
    - [🌲 Clone Your Fork](#-clone-your-fork)
    - [🔀 Add the Original Repository as "Upstream"](#-add-the-original-repository-as-upstream)
    - [🔄 Sync Your Fork](#-sync-your-fork)
    - [📤 Create a Pull Request (PR)](#-create-a-pull-request-pr)
  - [⚔️ Resolving Merge Conflicts](#️-resolving-merge-conflicts)
    - [🧩 To Resolve:](#-to-resolve)
  - [💡 Best Practices](#-best-practices)
    - [📄 Sample `.gitignore` for Node.js](#-sample-gitignore-for-nodejs)
  - [🎯 Final Words](#-final-words)
  - [🙌 Stay Connected](#-stay-connected)

---

## 🛠️ What is Git?

**Git** is like a time machine for your code. It tracks changes, helps multiple developers work together, and lets you rewind to any point in your project history.

### 🔑 Key Features:
- Keeps track of file changes
- Supports branching and merging
- Works offline and distributed
- Safe experimentation with branches

---

## ☁️ What is GitHub?

**GitHub** is where Git comes alive online. It's a platform for storing your Git repositories in the cloud, working with others, managing projects, and automating tasks with CI/CD.

### 💡 Why Use GitHub?
- Host code in the cloud  
- Collaborate via pull requests  
- Track issues and tasks  
- Automate with GitHub Actions  

---

## 🧱 Installing Git

### 🔽 For Windows:
- Download Git from [git-scm.com](https://git-scm.com/)
- Follow the installation wizard (use defaults if unsure)

### 🍎 For macOS:
```bash
brew install git
```

### 🐧 For Linux:
```bash
sudo apt install git       # Ubuntu/Debian
sudo yum install git       # RHEL/CentOS
```

### ✅ Verify Installation:
```bash
git --version
```

---

## 🔧 Git Configuration

Configure Git globally so it knows who you are:

```bash
git config --global user.name "Pro User"
git config --global user.email "User@example.com"
```

### Optional Goodies:
```bash
git config --global core.editor "code --wait"   # VSCode as default editor
git config --global color.ui auto               # Enable colored output
git config --global alias.co checkout           # Shortcut for checkout
```

---

## 🧰 Basic Git Commands

Here's your day-to-day Git toolkit:

### 🔹 Initialize a Repository
```bash
git init
```
*Creates a new Git repository in the current folder.*

---

### 🔹 Clone a Repository
```bash
git clone https://github.com/user/repo.git
```
*Copies a remote repo to your local machine.*

---

### 🔹 Check Status
```bash
git status
```
*Shows what's changed and what's ready to commit.*

---

### 🔹 Stage Files
```bash
git add filename.ext     # Stage one file
git add .                # Stage everything
```
*Tells Git what changes to include in the next commit.*

---

### 🔹 Commit Changes
```bash
git commit -m "Your commit message"
```
*Saves your changes to the project history.*

---

### 🔹 View Commit History
```bash
git log
git log --oneline
```
*Shows the list of past commits.*

---

### 🔹 Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

---

## 🌐 Working with GitHub

### 🔗 Connect Local Repo to GitHub
```bash
git remote add origin https://github.com/yourusername/repo.git
git branch -M main
git push -u origin main
```
*Links your local Git project to a GitHub repository and pushes the main branch.*

---

### 🚀 Push Changes
```bash
git push
```
*Sends your local commits to GitHub.*

---

### ⬇️ Pull Changes
```bash
git pull
```
*Fetches and merges changes from GitHub into your local branch.*

---

### 🔁 Clone Then Push to New Repo
```bash
git clone https://github.com/user/repo.git
cd repo
# make changes
git add .
git commit -m "Initial commit"
git push origin main
```

---

## ✏️ Renaming & Removing Files

### 📝 Rename a File
```bash
git mv old_name.txt new_name.txt
```
*Git tracks this as a rename (rather than delete + add).*

---

### 🗑️ Remove a File
```bash
git rm unwanted_file.txt
```

### ✅ Commit and Push
```bash
git commit -m "Renamed and removed files"
git push
```

---

## 🌿 Branching & Merging

### 🌱 Create a New Branch
```bash
git branch feature-xyz
```

### 🔄 Switch to a Branch
```bash
git checkout feature-xyz
```

### ➕ Create & Switch in One Step
```bash
git checkout -b bugfix-login
```

---

### 🔁 Merge a Branch into Main
```bash
git checkout main
git merge feature-xyz
```

---

### 🧹 Delete a Merged Branch
```bash
git branch -d feature-xyz
```

---

### 🧭 See All Branches
```bash
git branch        # local only
git branch -r     # remote only
git branch -a     # all
```

---

### 🌍 Push a Branch to GitHub
```bash
git push origin feature-xyz
```

---

## 📦 Stashing & Cleaning

### 🧳 Temporarily Save Changes (Stash)
```bash
git stash
```
*Hides your uncommitted changes so you can switch branches safely.*

### 🎯 Reapply Stashed Changes
```bash
git stash pop
```

### 🧼 Remove Untracked Files
```bash
git clean -f
```
*Deletes untracked files. Use with caution!*

---

## 🕘 Rewriting History

### 🔄 Amend Last Commit
```bash
git commit --amend
```
*Edit the previous commit message or add forgotten changes.*

---

### 🚫 Undo a Commit (Soft Reset)
```bash
git reset --soft HEAD~1
```
*Keeps changes but removes the commit.*

### 💥 Hard Reset to Last Commit
```bash
git reset --hard HEAD
```
*⚠️ WARNING: This erases all changes permanently.*

---

## 📜 Logs & Diffs

### 📖 View Commit History
```bash
git log
git log --oneline --graph --all
```

### 🔍 View File Differences
```bash
git diff                # unstaged vs working dir
git diff --staged       # staged vs last commit
```

---

## 🏷️ Tags

### 🔖 Create a Tag
```bash
git tag v1.0.0
```

### 🚀 Push Tags to GitHub
```bash
git push origin v1.0.0
```

### 📋 List Tags
```bash
git tag
```

---

## 🌱 Rebasing & Cherry Picking

### 🔄 Rebase a Branch
```bash
git checkout feature
git rebase main
```
*Rewrites your branch history on top of another branch.*

---

### 🍒 Cherry Pick a Commit
```bash
git cherry-pick <commit-hash>
```
*Applies a specific commit to your current branch.*

---

## 📦 Git Submodules

### ➕ Add a Submodule
```bash
git submodule add https://github.com/user/repo.git path/to/module
```

### 🔄 Init & Update
```bash
git submodule init
git submodule update
```

*Submodules let you include another Git repo inside your repo (e.g., plugins, libs).*

---

## ⚡ Git Aliases

Speed up commands using aliases:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
```

Then use:
```bash
git st        # Instead of git status
git co main   # Instead of git checkout main
```

---

## 🤝 Collaborating with Others

### 🍴 Fork a Repository
On GitHub, click **Fork** to create your own copy of someone else's repo.

> 💡 Great for contributing to open-source projects!

---

### 🌲 Clone Your Fork
```bash
git clone https://github.com/yourusername/repo.git
cd repo
```

---

### 🔀 Add the Original Repository as "Upstream"
```bash
git remote add upstream https://github.com/original/repo.git
```
*This helps you keep your fork updated with the original.*

---

### 🔄 Sync Your Fork
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

### 📤 Create a Pull Request (PR)

1. Push your changes to your forked repo:
   ```bash
   git push origin your-branch-name
   ```
2. On GitHub, click **"Compare & pull request"**.
3. Write a clear title and description.
4. Submit it for review.

> ✅ Tip: Make sure your branch is up-to-date before opening a PR.

---

## ⚔️ Resolving Merge Conflicts

When Git can't merge changes automatically, it creates **conflict markers** in the file:

```txt
<<<<<<< HEAD
your version
=======
their version
>>>>>>> branch-name
```

### 🧩 To Resolve:

1. Edit the file to fix the conflict.
2. Stage it again:
   ```bash
   git add conflicted_file
   ```
3. Commit the resolution:
   ```bash
   git commit
   ```

---

## 💡 Best Practices

✅ **Commit messages** should be clear and descriptive:  
   _"Fix: resolve login token expiration issue"_

✅ **Use branches** for every feature or bug fix.  
   Keeps `main` clean and deployable.

✅ **Pull often** to avoid diverging too far from the main branch.

✅ **Push regularly** so work isn't lost.

✅ **Don't commit sensitive files** (like `.env`, API keys).

✅ **Use `.gitignore** to exclude files that shouldn't be tracked.

---

### 📄 Sample `.gitignore` for Node.js
```gitignore
node_modules/
.env
*.log
.DS_Store
```

---

## 🎯 Final Words

You got it! Here's a strong, inspiring, and professional ending to cap off your README:

Mastering Git and GitHub is more than just learning commands — it's about developing a workflow that brings order, collaboration, and control to your development process. Whether you're building solo projects, working on a team, or contributing to open-source, **Git is your time machine, safety net, and collaboration tool all in one.**

Take your time to **experiment, break things, fix them, and learn** — that's how real growth happens.

> 🧠 *"The best developers aren't those who never make mistakes — they're the ones who track, manage, and learn from them."*

Keep pushing code, keep pulling knowledge, and let your commit history tell the story of your evolution as a developer. 🌱✨

---

## 🙌 Stay Connected

If you found this guide helpful, give the repository a ⭐ on GitHub, share it with others, or fork it and build your own version!

Have suggestions or want to contribute? Open a pull request — **collaboration starts here.** 💡

---

Ready to take the next step?  
> **"Go build. Break things. Fix them. Version everything."**

Happy coding! 💻🔥

---
