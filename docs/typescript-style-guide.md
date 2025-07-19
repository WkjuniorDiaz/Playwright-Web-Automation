# 📘 TypeScript Style Guide for Automation

This document outlines best practices and conventions for using **TypeScript** in the context of our test automation framework.

TypeScript helps us:
- Avoid common runtime bugs
- Improve readability and code hinting
- Enforce consistent data usage

---

## 📌 Basics of TypeScript

### ✅ Enable Strict Typing

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}
````

This ensures you always declare types intentionally.

---

## ✍️ Type Annotations

Always annotate:

* Function parameters
* Return types
* Object structures
* Variables when not immediately inferred

### ❌ Bad

```ts
const user = {};
function login(email, password) {
  // ...
}
```

### ✅ Good

```ts
const user: { email: string; password: string } = {
  email: 'test@example.com',
  password: '123456',
};

function login(email: string, password: string): Promise<void> {
  // ...
}
```

---

## 🧩 Use Interfaces and Types

Prefer **interfaces** for object shapes, especially for test data, user models, or form fields.

```ts
interface UserCredentials {
  email: string;
  password: string;
}
```

And use them:

```ts
const validUser: UserCredentials = {
  email: 'user@example.com',
  password: '123456',
};
```

You may also use `type` when you need unions or mapped types:

```ts
type Role = 'admin' | 'editor' | 'viewer';
```

---

## ⛔ Avoid `any`

`any` disables all type-checking.

### ❌ Bad

```ts
let response: any;
```

### ✅ Use `unknown` if necessary:

```ts
let response: unknown;

if (typeof response === 'object' && response !== null) {
  // handle safely
}
```

---

## 🧠 Inference is OK — Within Limits

Let TypeScript infer obvious types, but annotate complex structures.

### ✅ Acceptable

```ts
const count = 5;
const isVisible = true;
```

### ✅ Still annotate functions

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

---

## 💡 Optional Properties

Use `?` for optional fields in interfaces or function arguments.

```ts
interface User {
  id: number;
  name?: string;
}
```

---

## 🪝 Use Enums or Literal Types for Constants

### ✅ With enum:

```ts
enum Environment {
  STAGING = 'staging',
  PRODUCTION = 'production',
}
```

### ✅ Or type literal:

```ts
type Environment = 'staging' | 'production';
```

---

## 🧼 Clean Code with Types

Avoid large nested `any` or `object` structures.

Instead, break them into named types or interfaces.

```ts
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

const cart: OrderItem[] = [
  { name: 'Shirt', price: 25, quantity: 2 },
];
```

---

## 🧪 Typing Playwright Page Objects

Each Page Object class should receive a `page` object from Playwright, and it must be typed.

```ts
import { Page } from '@playwright/test';

class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string): Promise<void> {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}
```

---

## ✅ Summary

| ✅ Do This                           | ❌ Avoid This                 |
| ----------------------------------- | ---------------------------- |
| Annotate function args & returns    | Using `any`                  |
| Use interfaces for object shapes    | Large inline object types    |
| Use union types or enums for values | Magic strings or booleans    |
| Prefer type-safe page interactions  | Untyped Playwright usage     |
| Write predictable and readable code | Implicit types or bad naming |

---

Use TypeScript to **protect your test code**, **improve collaboration**, and **scale with confidence**.

If you have doubts about typing something, ask in the team chat or propose a type in a PR for review.

```