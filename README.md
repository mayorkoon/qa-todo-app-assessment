
# QA Todo App – Full Stack Automated Testing Project

This project demonstrates end-to-end automation for a simple Todo application using a **React frontend**, **Express backend**, and **automated testing** with **Cypress** and **Postman**. It includes:
- UI tests with Cypress
- API tests with Postman
- Faker.js for dynamic test data
- GitHub Actions CI for both UI and API tests

---

## 📁 Project Structure

```
qa-todo-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── test/
│   ├── UI/
│   │   └── cypress/
│   │       ├── e2e/
│   │       ├── fixtures/
│   │       ├── support/
│   │       └── cypress.config.js
│   └── API/
│       ├── collections/
│       ├── environments/
├── package.json
├── README.md
└── .github/
    └── workflows/
        ├──tests.yml
```

---

## ✅ Prerequisites

- Node.js >= 18
- npm >= 7
- Git
- [Postman](https://www.postman.com/downloads/)

---

## 🔧 Project Setup

### 1. Clone the Repo

```bash
git https://github.com/mayorkoon/qa-todo-app-assessment.git
cd qa-todo-app-assessment
```

### 2. Install Root Dependencies

This wraps all folders and installs `concurrently` to run frontend & backend together.

```bash

npm install

```

### 3. Install Frontend and Backend Dependencies

```bash

npm run install-all

```
This command is defined in the root `package.json` as:

```json

"scripts": {
  "install-all": "npm --prefix frontend install && npm --prefix backend install && npm --prefix test/UI/cypress install"
}
```

### 4. Start the App (Frontend + Backend)

```bash

npm start

```

This uses `concurrently` to launch both apps:

```json

"scripts": {
  "start": "concurrently \"npm --prefix backend start\" \"npm --prefix frontend start\"",
}

```
---

## 🧪 UI Testing with Cypress

### Folder: `test/UI/cypress`

#### Key Features:

- Cypress tests with Faker.js for dynamic data

#### Run Locally:

```bash

npm run test

```

Where:

```json

"scripts": {
  "test": ""npm --prefix test/UI/cypress run test"
}

```

to run the test in cypress GUI, cd into the cypress folder and run the command 

```bash

npx cypress open

```
---

## 🌐 API Testing with Postman

### Folder: `test/API`

Includes:

- `Todo.postman_collection.json`
- `TODO_APP.postman_environment.json`

### Run API Tests with Newman:

```bash

npm run test_api

```

```json

"scripts": {
    "test_api": "newman run test/API/todo.postman_collection.json -e test/API/TODO_APPruns .postman_environment.json --reporters cli"
}

```

---

## 🤖 GitHub Actions CI/CD

CI for both UI and API is in `.github/workflows`.

- `tests.yml`: both Postman + Cypress tests


Ensure your secrets (`CYPRESS_USERNAME`, `CYPRESS_PASSWORD`) are set in GitHub settings.

---
---

## 🔄 Common Commands


# Install everything
```bash

npm run install-all

```
# Start app locally
```bash

npm start

```
# Run Cypress tests
```bash

npm run test

```
# Run API tests
```bash

npm run test_api

```
# Open Cypress dashboard
```bash

npx cypress open

```

---

## 🧼 Troubleshooting

- Ensure ports `3000` (frontend) and `5000` (backend) are not in use.
- For CI failures, check GitHub Actions logs under `Actions` tab.
- Make sure all `package-lock.json` files exist for GitHub `npm ci` to work.

---

## 👤 Author

Abiodun Oyawale  
QA Engineer
