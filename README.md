# Playwright Test Automation Framework (TypeScript)

📄 **Project Guidelines**: Please refer to the [Guidelines File](./docs/GUIDELINES.md) for folder structure rules, naming conventions, and contribution standards.

---

## 🧪 Overview

This is an end-to-end (E2E) test automation framework built using **Playwright** and **TypeScript**. It follows a scalable architecture using the **Page Object Model (POM)** and integrates the **Factory Design Pattern** with **Page Object Manager (POManager)** to streamline page interactions.

The framework supports two flexible data-driven testing approaches:
- Using **fixture files**
- Using external **`.json` datasets**

---

## 📁 Project Structure

```bash
.
├── tests/                # Playwright test specs
├── pageObject/           
│   ├── POManager.ts      # Centralized Page Object Manager
│   └── *.ts              # Individual page classes
├── dataSet/              # Test data in JSON format, Static fixture data
├── utils/                # Utility functions (optional)
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── package.json
└── README.md
````

---

## ⚙️ Technologies Used

* [Playwright](https://playwright.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* Node.js

---

## 🚀 Getting Started

### 📦 Installation

```bash
npm install
```

```bash
npx playwright install
```

### ▶️ Running Tests

```bash
npm run regression
```

To run by tag:

```bash
npm run tag
```

---

## 🏗️ Design Patterns Used

### ✅ Page Object Model (POM)

Each page of the application under test is abstracted into its own class located in the `pageObject/` directory.

### 🧰 POManager (Page Object Manager)

The `POManager` class centralizes the creation and reuse of page object instances. This promotes:

* Easier maintenance
* Consistent instantiation
* Cleaner test code

**Example usage:**

```ts
import { POManager } from '../pageObject/POManager';

const pom = new POManager(page);
const loginPage = pom.getLoginPage();
```

---

## 📊 Data Management

You can manage test data using two approaches:

1. **Fixtures**

   * Suitable for quick access to static or reusable data.
   * Example:

     ```ts
     import user from '../fixtures/user';
     ```

2. **JSON Files**

   * Ideal for managing structured or large datasets.
   * Example:

     ```ts
     const loginData = require('../dataSet/loginData.json');
     ```

---

## 🧹 Scripts

| Command                  | Description                     |
| ------------------------ | ------------------------------- |
| `npm run regression`     | Run all tests                   |
| `npm run tag`            | Run the tests filter by the tag |
| `npm run firefox`        | Run all tests on firefox browser|

---

## 🧪 Sample Test with POManager

```ts
import { POManager } from '../pageObject/POManager';

describe('Login Suite', () => {
  it('should login successfully', async () => {
    const page = await browser.newPage();
    const pom = new POManager(page);
    const loginPage = pom.getLoginPage();

    await loginPage.navigate();
    await loginPage.login('user', 'pass');
    expect(await loginPage.isLoggedIn()).to.be.true;
  });
});
```

---

## 🤝 Contribution

We welcome contributions! Please make sure to review the [Guidelines File](./docs/GUIDELINES.md) before submitting PRs to ensure consistency in code style and structure.

---

## 📄 License

[MIT License](LICENSE)

```
