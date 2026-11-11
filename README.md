# Rosie’s UI Garden — Assignment 13

Rosie Guillen’s React and TypeScript component library includes 13 components, a Create React App showcase, and separate Storybook examples. Assignment 13 adds the same Prettier, ESLint, and Jest checks to local commits, GitHub Actions, and the Docker build.

## Run the production app

Install and start Docker Desktop in Linux-container mode. Open a terminal in the project folder containing the Dockerfile.

```powershell
docker build -t guillen_rosie_coding_assignment13 .
docker run -d --name guillen_rosie_coding_assignment13 -p 127.0.0.1:8018:8018 guillen_rosie_coding_assignment13
```

Open [http://localhost:8018](http://localhost:8018) or [http://127.0.0.1:8018](http://127.0.0.1:8018). Try the button counter, fruit dropdown, delivery radio buttons, and **Disable showcase components** toggle.

```powershell
docker ps --filter name=guillen_rosie_coding_assignment13
docker inspect --format '{{.Config.WorkingDir}}' guillen_rosie_coding_assignment13
curl.exe --fail http://127.0.0.1:8018/
```

Expect an **Up** container, the working directory `/guillen_rosie_ui_garden_build_checks`, and a successful HTTP response. Use `curl` on macOS or Linux.

The Node 24 build stage installs the locked dependencies, runs all quality checks, and produces the optimized React files. The Nginx stage serves those files on port 8018 from `/guillen_rosie_ui_garden_build_checks`. The published port is bound to your computer’s loopback interface.

Use `docker stop guillen_rosie_coding_assignment13` to stop the container and `docker start guillen_rosie_coding_assignment13` to restart it. To run a rebuilt image, stop and remove the old container with `docker rm guillen_rosie_coding_assignment13`, then repeat the build and run commands above.

## Install and run the local checks

Use Git and Node.js 24 with npm. Work from a Git clone so `npm ci` can install the Husky hook through the `prepare` script. For an extracted submission, run `git init` before installing if you want to test commits. The commands use `npm.cmd` for Windows PowerShell. Use `npm` on macOS or Linux.

```powershell
npm.cmd ci
npm.cmd run check
```

| Check            | Command                    | What it checks                                                      |
| ---------------- | -------------------------- | ------------------------------------------------------------------- |
| Prettier         | `npm.cmd run format:check` | Formatting in supported project files                               |
| ESLint           | `npm.cmd run lint`         | Application and Storybook source, with warnings treated as failures |
| Jest             | `npm.cmd run test:ci`      | App and component tests, including the existing `.tests.tsx` files  |
| Production build | `npm.cmd run build`        | Optimized Create React App output and TypeScript compilation        |

Use `npm.cmd run format` to fix formatting, then review and stage the changes. The project has 14 test suites and 32 tests. Run `npm.cmd start` for the development showcase at [http://localhost:3000](http://localhost:3000), or `npm.cmd run storybook` for the component stories at [http://localhost:6006](http://localhost:6006).

### Demonstrate the pre-commit hook

On a disposable branch with a clean working tree, add deliberately misformatted TypeScript and attempt a commit.

```powershell
git switch -c demo/local-checks
'export const qualityDemo={value:1}' | Set-Content src/quality-demo.ts
git add src/quality-demo.ts
git commit -m "Demonstrate failing Prettier check"
```

Expect Prettier and Husky to report a failure and Git to leave the file staged. To demonstrate ESLint separately, format the file, add an unused variable using normal formatting, stage it, and retry. To demonstrate Jest separately, remove the demo file and temporarily change an expected value in an existing test before staging and retrying. Restore the demo changes before returning to the submission branch.

## GitHub Actions

`.github/workflows/build-checks.yml` runs on every push and pull request, and can also be started from the **Actions** tab. The **Build checks** job installs dependencies with `npm ci`, runs the same `npm run check` command as Husky, builds the production app, and checks that the Docker container responds on port 8018. A failed check marks the run and the commit or pull request status as failed.

To demonstrate the remote check, repeat the formatting example on a disposable branch and commit with `git commit --no-verify -m "Demonstrate failing GitHub check"`. Push that branch and open **Actions → Assignment 13 CI**. The job log should show the Prettier failure. Fix the formatting or remove the demo file, commit normally, and push again to see the successful run.

For failed-run alerts on runs you trigger, open **GitHub Settings → Notifications → System → Actions**, choose GitHub or email notifications, and select **Only notify for failed workflows**. [GitHub’s notification instructions](https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-github-actions-notifications)

To prevent a failed check from being merged into your submission branch, configure a GitHub branch protection rule or ruleset that requires a pull request and the **Build checks** status. Select the check after it has run in your repository. [GitHub’s required status check instructions](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
