# Rosie's UI Garden

**Assignment 12: Web Component Library**  
**Rosie Guillen**

For this assignment, I created a component library using React, TypeScript, Create React App, Storybook, and styled-components. I also made a simple webpage where the components can be tried together.

The production webpage runs in Docker at [http://localhost:8083](http://localhost:8083).


### 1. Introduce the project

For Assignment 12, I created Rosie's UI Garden, a reusable component library. The idea is to keep the appearance and behaviour of common interface elements consistent instead of rebuilding them for every page.

I used React to create the components, TypeScript to define their properties, styled-components for their styles, and Storybook to show them individually. I also made a simple React webpage that puts them together.

### 2. webpage

Open [http://localhost:8083](http://localhost:8083).

This is the production version running in Docker. My page shows the required components, including the button, label, dropdown, radio buttons, text, images, card, and table.

During the demo:

1. Click the button to show the counter changing.
2. Select a different fruit in the dropdown.
3. Switch between the two delivery options. Only one radio button can be selected at a time.
4. Turn on **Disable showcase components**. Point out the grey backgrounds and the not-allowed cursor, and show that the form controls cannot be used.
5. Turn the checkbox off to enable the components again.
6. Make the browser narrower to show how the layout, text, and images adjust.

The table uses my Table, TableHeader, TableRow, TableCell, and TableFooter components together. It contains a few example rows to keep the page simple.

### 3. Storybook

Start Storybook in another terminal if it is not already running:

```powershell
npm.cmd run storybook
```

Open [http://localhost:6006](http://localhost:6006).

Storybook lets me view and try each component without needing to open the full webpage. Each required component has a Default story and a Disabled story.

During the demo:

1. Open **Components > Button > Default**.
2. Change the label and background colour using Controls.
3. Turn on disabled and show the appearance changing.
4. Open another component, such as Dropdown or TableCell, to show its controls.

These controls change the example's properties, so I can try different states without editing the component code.

### 4. component files

Open `src/components/button` in VS Code.

I followed the same five-file structure for every component:

| File | What I use it for |
| --- | --- |
| `Button.tsx` | The component markup, behaviour, and styled-components styles |
| `Button.types.tsx` | The properties the component accepts and their TypeScript types |
| `Button.stories.tsx` | The Storybook examples and controls |
| `Button.tests.tsx` | Automated checks for the component |
| `Index.ts` | Exports the component and its property type |

For example, the Button accepts a label, a background colour, and standard button properties such as disabled and onClick. I can reuse it by importing it and passing different properties.

### 5. Run the tests

In the project terminal, run:

```powershell
npm.cmd test -- --watchAll=false --testMatch="**/src/**/*.test.tsx" "**/src/**/*.tests.tsx"
```

The expected result is **14 passing suites and 32 passing tests**.

Every component has a visibility test and a test that checks its background colour changes when disabled. There are also interaction tests for selecting dropdown options, selecting radio buttons, and disabling and re-enabling the webpage's button.

The tests check specific behaviour automatically. I also use the browser to check the layout, actual images, and cursor appearance.

### 6. build and Docker

Open `Dockerfile`.

My Dockerfile has two stages. The first uses Node to install the dependencies and create the optimized React build. The second uses Nginx to serve the finished site files.

The development app is useful while editing because it updates when files change. The production build creates optimized files for deployment. My Docker container serves those production files.

Show the running container:

```powershell
docker ps
```

Point out the required container name, **guillen_rosie_coding_assignment12**, and port **8083**.

Both Docker stages use **/guillen_rosie_ui_garden** as the working directory. The webpage is available at **localhost:8083**.

### Remember:

- Start Docker Desktop and the project container.
- Open the webpage at localhost:8083.
- Start Storybook and open localhost:6006.
- Open the project in VS Code, with the Button folder and Dockerfile ready.
- Keep a terminal ready to run the tests.
- If the container already exists but is stopped, use `docker start guillen_rosie_coding_assignment12`.

The sections below contain the complete setup, build, deployment, and verification instructions.

## Tools used

- React and TypeScript for the components
- Create React App to set up and build the application
- styled-components for styling
- Storybook to display the components and change their properties
- React Testing Library and Jest for testing
- Docker and Nginx to serve the production build

## Before running the project

Install Node.js and npm, and install Docker Desktop if you want to run the Docker version. I used Node.js 24.21.0 and npm 11.19.0 on Windows.

Start Docker Desktop and wait for the engine to be running before using the Docker commands. This project uses Linux containers.

Run the commands below from the `guillen_rosie_ui_garden` folder. I use `npm.cmd` because PowerShell blocked the normal npm script on my computer. On macOS or Linux, use `npm` instead.

## Project setup

I originally created the project with this command:

```powershell
npx.cmd create-react-app@latest guillen_rosie_ui_garden --template typescript
```

To run the submitted project, extract or clone the project and open a terminal in its folder. There is no need to create the project again.

Install the dependencies:

```powershell
npm.cmd ci
```

Start the development app:

```powershell
npm.cmd start
```

Open [http://localhost:3000](http://localhost:3000). Press Ctrl+C in the terminal to stop it.

## My components

My library includes these 13 components:

- Button
- Label
- Text
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter

Each component has its own folder inside `src/components`. Each folder contains these five files, using the component's name:

```text
Button.tsx
Button.stories.tsx
Button.types.tsx
Button.tests.tsx
Index.ts
```

I used responsive widths, wrapping text, media queries, and a scrolling table container to help the components fit different screen sizes.

## Running Storybook

Start Storybook with:

```powershell
npm.cmd run storybook
```

Open [http://localhost:6006](http://localhost:6006).

Under Components, choose a component and open its Default or Disabled story. The Controls panel lets you change properties such as text, background colour, and disabled state. The available controls depend on the component. For example, Dropdown has an options control, and TableCell has a text control for its contents.

Every required component has a disabled example with a grey background and a not-allowed cursor. Interactive controls also prevent their normal interaction when disabled.

To build Storybook:

```powershell
npm.cmd run build-storybook
```

The output is saved in `storybook-static`. The Docker container serves my React webpage; Storybook runs separately.

## Running the tests

Run all component tests and the app tests with:

```powershell
npm.cmd test -- --watchAll=false --testMatch="**/src/**/*.test.tsx" "**/src/**/*.tests.tsx"
```

The expected result is **14 passing test suites and 32 passing tests**.

Each component has at least two tests: one checks that it is visible, and one checks that its background changes when disabled. I also included interaction tests for the dropdown, radio buttons, and the webpage's disable checkbox, plus a test for table header semantics.

The command includes both `.test.tsx` and `.tests.tsx` because the assignment requires the plural filename, while the app test uses the singular filename.

If Windows reports a test-cache permission error, try a local cache:

```powershell
npm.cmd test -- --watchAll=false --runInBand --cacheDirectory=./node_modules/.cache/assignment12-jest --testMatch="**/src/**/*.test.tsx" "**/src/**/*.tests.tsx"
```

The image tests check the image elements and their styles. The actual pictures should also be checked in the browser.

## Building the React app

Create the optimized production build with:

```powershell
npm.cmd run build
```

The production files are saved in `build`. This build also checks the application's TypeScript code.

The main `tsconfig.json` keeps the Create React App settings and excludes Storybook stories from the app's type check. The separate `src/components/tsconfig.json` uses bundler resolution for editing the components and stories. In VS Code, use its built-in TypeScript version, version 5 or newer, for that editor configuration.

## Building and running with Docker

With Docker Desktop running, build the image:

```powershell
docker build -t guillen_rosie_assignment12 .
```

The final dot tells Docker to use the current project folder.

Create and start the container:

```powershell
docker run -d --name guillen_rosie_coding_assignment12 -p 8083:8083 guillen_rosie_assignment12
```

Open [http://localhost:8083](http://localhost:8083).

My Dockerfile builds the React app in a Node stage, then copies the production files into an Nginx stage. Both stages use `/guillen_rosie_ui_garden` as the working directory. The Nginx configuration serves the site on port 8083.

The `.dockerignore` file keeps local dependencies, generated builds, and Git files out of the Docker build context.

### Checking the container

```powershell
docker ps
docker inspect --format '{{.Config.WorkingDir}}' guillen_rosie_coding_assignment12
(Invoke-WebRequest -Uri http://localhost:8083 -UseBasicParsing).StatusCode
```

The container should be named `guillen_rosie_coding_assignment12` and have an Up status. The port mapping should include 8083:8083, the working directory should be `/guillen_rosie_ui_garden`, and the webpage should return HTTP status 200.

On macOS or Linux, use `curl -I http://localhost:8083` for the HTTP check.

### Stopping and restarting

Stop the container:

```powershell
docker stop guillen_rosie_coding_assignment12
```

Start the same container again:

```powershell
docker start guillen_rosie_coding_assignment12
```

If the source code changes, rebuild the image and replace the old container:

```powershell
docker build -t guillen_rosie_assignment12 .
docker stop guillen_rosie_coding_assignment12
docker rm guillen_rosie_coding_assignment12
docker run -d --name guillen_rosie_coding_assignment12 -p 8083:8083 guillen_rosie_assignment12
```

## Checking the assignment requirements

| Requirement | Where to check it |
| --- | --- |
| React application created with Create React App | `package.json` and `src/App.tsx` |
| All required components | The 13 folders in `src/components` |
| Five required files per component | Each component folder |
| styled-components styling | Component `.tsx` files and the app layout |
| Responsive components | Resize the webpage and Storybook examples |
| Storybook controls | Controls panel for each component |
| Default and disabled states | Default and Disabled stories |
| Disabled colour and cursor | Disabled stories and the webpage's disable checkbox |
| Visibility and disabled-background tests | Each component's `.tests.tsx` file |
| Optimized production app | `npm.cmd run build` and the Dockerfile |
| Webpage on localhost:8083 | Docker port mapping and browser |
| Required container name | `guillen_rosie_coding_assignment12` in `docker ps` |
| Required working directory | `/guillen_rosie_ui_garden` in the Dockerfile and container inspection |

### Browser checks

To check the webpage manually:

1. Open localhost:8083 and confirm the components and pictures appear.
2. Click the button and check that the count increases.
3. Choose a fruit and select each delivery option.
4. Turn on Disable showcase components. Check the grey backgrounds, disabled cursor, and blocked form interactions.
5. Turn the checkbox off and check that the controls work again.
6. Check the layout at approximately 375px, 768px, and desktop widths. Look for text wrapping, images fitting their containers, and the table staying within the page.
7. Use the keyboard to move through the form controls and check their focus indicators.
8. Open each required component in Storybook and try its controls and both states.

## Files to submit

My submission includes:

- `Dockerfile`, `nginx.conf`, and `.dockerignore`
- `README.md`
- `package.json` and `package-lock.json`
- `tsconfig.json`
- `.storybook/`
- `public/`
- `src/`

The `node_modules`, `build`, `storybook-static`, and `.git` folders do not need to be submitted. Dependencies and build files can be recreated with the commands above. Hidden configuration files such as `.dockerignore` and the `.storybook` folder should be included.
