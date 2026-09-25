# Git

### `git init`
- Initializes a new Git repository in the current folder.
- Creates a hidden `.git` directory.

### `git status`
- Shows the current state of the repository.

### `git add`
- Moves changes into Git's staging area.

### `git commit`
- Creates a permanent snapshot/commit of what's currently in the staging area.
- After the commit, it's stored in the local `.git` repository.

### `git log`
- Shows commit history. Each commit has a unique identifier called a commit hash.
- A useful shorter version `git log --oneline`.

### `git diff`
- It shows what has changed.
- `git diff` shows changes that haven't staged yet.
- `git diff --staged` shows changes that are staged.

### `git branch`
- A branch is simply a movable pointer to a commit.

### `git switch`
- It is used to move from one branch to another.
- Create and switch in one command `git switch -c`.

### `git merge`
- It combines the history of one branch into the current branch.
- It can create a new commit or result in fast-forward merge.

### `git restore`
- It discards or recover changes.
- Unstaged changes are discarded. `git restore --staged` changes staged file to unstaged.

### `git stash`
- It temporarily put changes aside.
