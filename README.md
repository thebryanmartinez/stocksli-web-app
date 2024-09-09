# Stocksli web app

This is a web application made with React + Vite + Yarn for tracking stocks, their margin changes in real time via websockets and checking their metrics in a graph via APIs using the Finnhub API.

## Tech Stack

### Libraries

- **Redux Toolkit**: Manage state globally.
- **React Hook Form**: Flexible forms for easy use.
- **React Icons**: Utilize icons via Component import.
- **ESLint**: Lints JavaScript code to maintain code quality.
- **Prettier**: Formats code for consistency.
- **React Query**: Fetches data from APIs.
- **React Finnhub**: Fetches data from Finnhub APIs.
- **Tailwind CSS and DaisyUI**: Styling.
- **React Modal Sheet**: Modals for forms.

## Run Locally

Clone the project

```bash
  git clone git@github.com:thebryanmartinez/stocksli-web-app.git
```

Go to the project directory

```bash
  cd stocksli-web-app
```

Install dependencies

```bash
  yarn install
```

Start the application

```bash
  yarn dev
```

## Production build

To create build run the following command:

```bash
  yarn build
```

To preview the build recently created, run the following command:

```bash
  yarn preview
```

It will open the build in the localhost:4173 URL.

## File structure

```arduino
    react-project-boilerplate/
├── src/
│   ├── data/
│   │   ├── store/
        ├── api/
        ├── adapters/
│   ├── domain/
│   │   ├── constants/
│   └── ui/
│       ├── components/
│       ├── hooks/
│       ├── pages/
├── App.tsx
├── main.tsx
├── index.css
├── .env
├── .eslintrc.cjs
├── .gitignore
├── dockerfile
├── index.html
├── package.json
├── prettierrc.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

- **src/**: Contains all source code of the application
  - **data/**: Contains code related to sources of information, API, local storage, store
    - **store/**: Redux toolkit code and store configuration
    - **api/**: APIs configuration
    - **adapters/**: Adapters for APIs responses
  - **domain/**: Contains models, entities, interfaces, use cases for projects functionality
    - **constants/**: Constants for the domain code
  - **ui/**: UI related code
    - **components/**: React components organized by Atomic Design architecture
    - **hooks/**: Custom hooks
    - **pages/**: Pages for the application
