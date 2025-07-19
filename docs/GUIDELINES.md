# 🧭 Automation Guidelines

This document outlines the core guidelines and standards for writing scalable, readable, and maintainable automated tests using **Playwright**, **TypeScript**, **Mocha**, and design patterns like **Page Object Model (POM)** and **Factory**.

---

## 🔳 SOLID Principles in Automation

We follow the **SOLID principles** to structure our automation code. For now, we place special emphasis on:

### **S – Single Responsibility Principle**
> A class or method should have one and only one reason to change.

- Each Page Object class should only handle its specific page.
- Utility/helper classes should focus on a single task (e.g., date formatting, data transformation).

### **O – Open/Closed Principle**
> Software entities (classes, modules, functions) should be open for extension, but closed for modification.

This means you should be able to **extend the behavior** of a class without **changing its source code**.

### 🔍 Example:

Suppose you have a `PaymentProcessor` class that handles different payment types:

```typescript
class PaymentProcessor{
    process(payment_type : string){
        if (payment_type == "credit_card"){
            # process credit card
        }else if (payment_type == "paypal"){
            # process PayPal
        }
}
```

This violates OCP — each time a new payment method is added, you must **modify** this class.

---

## 📦 Naming Conventions

### **Classes**
- Use PascalCase (each word capitalized).
- Class names should be clear and reflect their purpose.

Examples:
```ts
LoginPage
CartSummary
POManager
````

### **Values and Variables**

* Use `camelCase` for variables and function names.
* Name variables based on **meaning**, not type or length.

Bad:

```ts
let x;
let list1;
```

Good:

```ts
let userEmail;
let cartItems;
```

---

## 🔐 TypeScript Best Practices

We enforce the use of **TypeScript's static typing** and **strong typing** to improve code safety and developer experience.

🔗 See the [TypeScript Style Guide](./typescript-style-guide.md) for more details on:

* Type annotations
* Interfaces
* Optional chaining
* Type inference vs explicit types
* Using `unknown` vs `any`

---

## ❌ XPath Usage Guidelines

Avoid full/absolute XPath expressions, as they are fragile and break easily.

✅ **Instead**, use:

* CSS selectors
* Data attributes (`data-testid`, `data-qa`)
* **Dynamic XPath** with parameterized values

🔗 Learn about XPath here: [XPath tutorial](https://www.mclibre.org/consultar/xml/lecciones/xml-xpath.html)

---

## 🧰 Design Patterns Used

### 1. **Page Object Model (POM)**

> Encapsulates page elements and actions in a class to promote reusability and clarity.

* All logic to interact with a page lives in its own `PageObject` class.
* Use descriptive methods (e.g., `fillLoginForm`, `submitOrder`).

### 2. **Factory Design Pattern**

> Abstracts the initialization of page objects.

* Centralized in the `POManager.ts` file.
* Promotes clean and consistent instantiation across test files.

Example:

```ts
const pom = new POManager(page);
const loginPage = pom.getLoginPage();
```

---

## 🔁 Avoid Common Anti-Patterns

### ❌ Avoid:

```ts
for (let i = 0; i < list.length; i++) {
  if (list[i] === targetValue) {
    // do something
  }
}
```

This approach is fragile and not maintainable when dealing with dynamic content.

### ✅ Instead, use **dynamic locators**:

Use a method that receives a dynamic value and returns the correct locator:

```ts
getItemByName(itemName: string) {
  return this.page.locator(`//div[text()='${itemName}']`);
}
```

And then:

```ts
await this.getItemByName('My Item').click();
```

This approach:

* Improves readability
* Reduces unnecessary iteration
* Adapts easily to changes in data


---

## 📚 Additional Recommendations

* Keep all static test data inv`dataSet/` directory.
* Avoid hardcoding values inside tests.
* Remember that Playwright has in-built waiting mechanisms so only used waits when needed.
* Use `beforeEach` and `afterEach` for test setup/cleanup if needed.

---

Have questions or need to propose a new convention? Open a pull request to suggest updates to this guideline.

```
