**## 🔗 Link Management System (`linksMap` + `linkHref`)**

This project uses a centralized system to define and use routes across the application, ensuring consistency, safety, and developer convenience.

---

**### 📁 Where**

All links are stored in:

```ts
assets/data/linksMap.ts
```

---

**### ✍️ How to Add or Edit Links**

Define your link structure using `linksMap`. Example:

```ts
export const linksMap = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    children: [
      {
        id: 'seo',
        label: 'SEO',
        href: '/services/seo',
      },
      {
        id: 'web',
        label: 'Websites',
        href: '/services/websites',
      },
    ],
  },
] as const satisfies readonly NavLink[];
```

✅ Each object must have a unique `id`, `label`, and `href`. You can nest items using `children`.

---

**### ⚙️ How to Use `linkHref(id)`**

The utility function `linkHref()` returns the corresponding path (`href`) based on the `id`.

```tsx
import { linkHref } from '@/lib/nav/links';
import Link from 'next/link';

<Link href={linkHref('about')}>About</Link>
<Link href={linkHref('seo')}>SEO</Link>
```

You can also use it programmatically:

```ts
router.push(linkHref('home'));
```

> ❗ If you pass an invalid ID, TypeScript will warn you. At runtime, the function throws a descriptive error.

---

## 🧠 Header Behavior Hook (`useHeaderBehavior`)

This custom hook provides dynamic header behavior, such as hiding on scroll or changing background color after a scroll threshold.

---

### 📦 Import

```ts
import { useHeaderBehavior } from '@/hooks/useHeaderBehavior';
```

---

### ⚙️ Usage

```ts
const { showNav, bgColor } = useHeaderBehavior({
  scrollHide: true,              // Header hides on scroll down, shows on scroll up
  changeColorOnScroll: true,    // Changes background color after threshold
  scrollThreshold: 150,         // Scroll threshold in px (default: 100)
  fixedColor: '#fff',           // Color after crossing threshold
  defaultColor: 'transparent',  // Default color before scroll
});
```

You can use `showNav` to control header visibility and `bgColor` for dynamic styling.

---

### 💡 Notes

* `scrollHide` and `changeColorOnScroll` can be used independently or together.
* Default settings:

  ```ts
  {
    scrollHide: false,
    changeColorOnScroll: false,
    scrollThreshold: 100,
    fixedColor: 'lightgray',
    defaultColor: 'transparent',
  }
  ```
