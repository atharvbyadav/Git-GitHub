document.addEventListener('DOMContentLoaded', () => {
    // Parse README content
    const readmeContent = `# 🚀 Git and GitHub Guide

Welcome to your **all-in-one guide** to mastering Git and GitHub! Whether you're a beginner just starting out or an experienced developer brushing up on advanced features, this guide covers everything with easy-to-understand commands, explanations, and best practices.

> 📌 *Version control is not just a tool — it's a discipline. The cleaner your history, the clearer your future.*

## 🛠️ What is Git?

**Git** is like a time machine for your code. It tracks changes, helps multiple developers work together, and lets you rewind to any point in your project history.

### 🔑 Key Features:
- Keeps track of file changes
- Supports branching and merging
- Works offline and distributed
- Safe experimentation with branches

## ☁️ What is GitHub?

**GitHub** is where Git comes alive online. It's a platform for storing your Git repositories in the cloud, working with others, managing projects, and automating tasks with CI/CD.

### 💡 Why Use GitHub?
- Host code in the cloud  
- Collaborate via pull requests  
- Track issues and tasks  
- Automate with GitHub Actions  

## 🧱 Installing Git

### 🔽 For Windows:
- Download Git from [git-scm.com](https://git-scm.com/)
- Follow the installation wizard (use defaults if unsure)

### 🍎 For macOS:
\`\`\`bash
brew install git
\`\`\`

### 🐧 For Linux:
\`\`\`bash
sudo apt install git       # Ubuntu/Debian
sudo yum install git       # RHEL/CentOS
\`\`\`

### ✅ Verify Installation:
\`\`\`bash
git --version
\`\`\`

## 🔧 Git Configuration

Configure Git globally so it knows who you are:

\`\`\`bash
git config --global user.name "Jane Doe"
git config --global user.email "jane@example.com"
\`\`\`

### Optional Goodies:
\`\`\`bash
git config --global core.editor "code --wait"   # VSCode as default editor
git config --global color.ui auto               # Enable colored output
git config --global alias.co checkout           # Shortcut for checkout
\`\`\`

## 🧰 Basic Git Commands

Here's your day-to-day Git toolkit:

### 🔹 Initialize a Repository
\`\`\`bash
git init
\`\`\`
*Creates a new Git repository in the current folder.*

### 🔹 Clone a Repository
\`\`\`bash
git clone https://github.com/user/repo.git
\`\`\`
*Copies a remote repo to your local machine.*

### 🔹 Check Status
\`\`\`bash
git status
\`\`\`
*Shows what's changed and what's ready to commit.*

### 🔹 Stage Files
\`\`\`bash
git add filename.ext     # Stage one file
git add .                # Stage everything
\`\`\`
*Tells Git what changes to include in the next commit.*

### 🔹 Commit Changes
\`\`\`bash
git commit -m "Your commit message"
\`\`\`
*Saves your changes to the project history.*

### 🔹 View Commit History
\`\`\`bash
git log
git log --oneline
\`\`\`
*Shows the list of past commits.*

### 🔹 Undo Last Commit (Keep Changes)
\`\`\`bash
git reset --soft HEAD~1
\`\`\`

## 🌐 Working with GitHub

### 🔗 Connect Local Repo to GitHub
\`\`\`bash
git remote add origin https://github.com/yourusername/repo.git
git branch -M main
git push -u origin main
\`\`\`
*Links your local Git project to a GitHub repository and pushes the main branch.*

### 🚀 Push Changes
\`\`\`bash
git push
\`\`\`
*Sends your local commits to GitHub.*

### ⬇️ Pull Changes
\`\`\`bash
git pull
\`\`\`
*Fetches and merges changes from GitHub into your local branch.*

### 🔁 Clone Then Push to New Repo
\`\`\`bash
git clone https://github.com/user/repo.git
cd repo
# make changes
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

## ✏️ Renaming & Removing Files

### 📝 Rename a File
\`\`\`bash
git mv old_name.txt new_name.txt
\`\`\`
*Git tracks this as a rename (rather than delete + add).*

### 🗑️ Remove a File
\`\`\`bash
git rm unwanted_file.txt
\`\`\`

### ✅ Commit and Push
\`\`\`bash
git commit -m "Renamed and removed files"
git push
\`\`\`

## 🌿 Branching & Merging

### 🌱 Create a New Branch
\`\`\`bash
git branch feature-xyz
\`\`\`

### 🔄 Switch to a Branch
\`\`\`bash
git checkout feature-xyz
\`\`\`

### ➕ Create & Switch in One Step
\`\`\`bash
git checkout -b bugfix-login
\`\`\`

### 🔁 Merge a Branch into Main
\`\`\`bash
git checkout main
git merge feature-xyz
\`\`\`

### 🧹 Delete a Merged Branch
\`\`\`bash
git branch -d feature-xyz
\`\`\`

### 🧭 See All Branches
\`\`\`bash
git branch        # local only
git branch -r     # remote only
git branch -a     # all
\`\`\`

### 🌍 Push a Branch to GitHub
\`\`\`bash
git push origin feature-xyz
\`\`\`

## 📦 Stashing & Cleaning

### 🧳 Temporarily Save Changes (Stash)
\`\`\`bash
git stash
\`\`\`
*Hides your uncommitted changes so you can switch branches safely.*

### 🎯 Reapply Stashed Changes
\`\`\`bash
git stash pop
\`\`\`

### 🧼 Remove Untracked Files
\`\`\`bash
git clean -f
\`\`\`
*Deletes untracked files. Use with caution!*

## 🕘 Rewriting History

### 🔄 Amend Last Commit
\`\`\`bash
git commit --amend
\`\`\`
*Edit the previous commit message or add forgotten changes.*

### 🚫 Undo a Commit (Soft Reset)
\`\`\`bash
git reset --soft HEAD~1
\`\`\`
*Keeps changes but removes the commit.*

### 💥 Hard Reset to Last Commit
\`\`\`bash
git reset --hard HEAD
\`\`\`
*⚠️ WARNING: This erases all changes permanently.*

## 📜 Logs & Diffs

### 📖 View Commit History
\`\`\`bash
git log
git log --oneline --graph --all
\`\`\`

### 🔍 View File Differences
\`\`\`bash
git diff                # unstaged vs working dir
git diff --staged       # staged vs last commit
\`\`\`

## 🏷️ Tags

### 🔖 Create a Tag
\`\`\`bash
git tag v1.0.0
\`\`\`

### 🚀 Push Tags to GitHub
\`\`\`bash
git push origin v1.0.0
\`\`\`

### 📋 List Tags
\`\`\`bash
git tag
\`\`\`

## 🌱 Rebasing & Cherry Picking

### 🔄 Rebase a Branch
\`\`\`bash
git checkout feature
git rebase main
\`\`\`
*Rewrites your branch history on top of another branch.*

### 🍒 Cherry Pick a Commit
\`\`\`bash
git cherry-pick <commit-hash>
\`\`\`
*Applies a specific commit to your current branch.*

## 📦 Git Submodules

### ➕ Add a Submodule
\`\`\`bash
git submodule add https://github.com/user/repo.git path/to/module
\`\`\`

### 🔄 Init & Update
\`\`\`bash
git submodule init
git submodule update
\`\`\`

*Submodules let you include another Git repo inside your repo (e.g., plugins, libs).*

## ⚡ Git Aliases

Speed up commands using aliases:

\`\`\`bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
\`\`\`

Then use:
\`\`\`bash
git st        # Instead of git status
git co main   # Instead of git checkout main
\`\`\`

## 🤝 Collaborating with Others

### 🍴 Fork a Repository
On GitHub, click **Fork** to create your own copy of someone else's repo.

> 💡 Great for contributing to open-source projects!

### 🌲 Clone Your Fork
\`\`\`bash
git clone https://github.com/yourusername/repo.git
cd repo
\`\`\`

### 🔀 Add the Original Repository as "Upstream"
\`\`\`bash
git remote add upstream https://github.com/original/repo.git
\`\`\`
*This helps you keep your fork updated with the original.*

### 🔄 Sync Your Fork
\`\`\`bash
git fetch upstream
git checkout main
git merge upstream/main
\`\`\`

### 📤 Create a Pull Request (PR)

1. Push your changes to your forked repo:
   \`\`\`bash
   git push origin your-branch-name
   \`\`\`
2. On GitHub, click **"Compare & pull request"**.
3. Write a clear title and description.
4. Submit it for review.

> ✅ Tip: Make sure your branch is up-to-date before opening a PR.

## ⚔️ Resolving Merge Conflicts

When Git can't merge changes automatically, it creates **conflict markers** in the file:

\`\`\`txt
<<<<<<< HEAD
your version
=======
their version
>>>>>>> branch-name
\`\`\`

### 🧩 To Resolve:

1. Edit the file to fix the conflict.
2. Stage it again:
   \`\`\`bash
   git add conflicted_file
   \`\`\`
3. Commit the resolution:
   \`\`\`bash
   git commit
   \`\`\`

## 💡 Best Practices

✅ **Commit messages** should be clear and descriptive:  
   *"Fix: resolve login token expiration issue"*

✅ **Use branches** for every feature or bug fix.  
   Keeps \`main\` clean and deployable.

✅ **Pull often** to avoid diverging too far from the main branch.

✅ **Push regularly** so work isn't lost.

✅ **Don't commit sensitive files** (like \`.env\`, API keys).

✅ **Use \`.gitignore\`** to exclude files that shouldn't be tracked.

### 📄 Sample \`.gitignore\` for Node.js
\`\`\`gitignore
node_modules/
.env
*.log
.DS_Store
\`\`\`

## 🎯 Final Words

You got it! Here's a strong, inspiring, and professional ending to cap off your README:

Mastering Git and GitHub is more than just learning commands — it's about developing a workflow that brings order, collaboration, and control to your development process. Whether you're building solo projects, working on a team, or contributing to open-source, **Git is your time machine, safety net, and collaboration tool all in one.**

Take your time to **experiment, break things, fix them, and learn** — that's how real growth happens.

> 🧠 *"The best developers aren't those who never make mistakes — they're the ones who track, manage, and learn from them."*

Keep pushing code, keep pulling knowledge, and let your commit history tell the story of your evolution as a developer. 🌱✨

## 🙌 Stay Connected

If you found this guide helpful, give the repository a ⭐ on GitHub, share it with others, or fork it and build your own version!

Have suggestions or want to contribute? Open a pull request — **collaboration starts here.** 💡

Ready to take the next step?  
> **"Go build. Break things. Fix them. Version everything."**

Happy coding! 💻🔥`;

    // Generate Table of Contents
    generateTOC(readmeContent);

    // Generate Content Sections
    generateContent(readmeContent);

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        pre.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            const code = block.textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyButton.classList.add('copied');
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            });
        });
    });
});

function generateTOC(content) {
    const tocList = document.getElementById('toc-list');
    const headings = content.match(/^##\s+(.+)$/gm);
    
    if (headings) {
        headings.forEach(heading => {
            const text = heading.replace('## ', '');
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = text;
            li.appendChild(a);
            tocList.appendChild(li);
        });
    }
}

function generateContent(content) {
    const mainContent = document.querySelector('.content');
    const sections = content.split(/\n(?=##\s)/);
    
    sections.forEach(section => {
        if (section.trim()) {
            const div = document.createElement('div');
            div.className = 'section';
            
            // Extract title
            const titleMatch = section.match(/^##\s+(.+)$/m);
            if (titleMatch) {
                const title = titleMatch[1];
                const id = title.toLowerCase().replace(/[^\w]+/g, '-');
                div.id = id;
                
                const h2 = document.createElement('h2');
                h2.textContent = title;
                div.appendChild(h2);
            }
            
            // Process content
            const content = section.replace(/^##\s+.+$/m, '').trim();
            const processedContent = processMarkdown(content);
            div.innerHTML += processedContent;
            
            mainContent.appendChild(div);
        }
    });
}

function processMarkdown(text) {
    // Convert markdown to HTML
    return text
        .replace(/###\s+(.+)$/gm, '<h3>$1</h3>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/```([\s\S]+?)```/g, '<pre>$1</pre>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        .replace(/\n/g, '<br>');
}

// Add animation to sections when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});
