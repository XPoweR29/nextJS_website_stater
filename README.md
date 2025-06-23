## 🔗 Link Management System (`linksMap` + `linkHref`)

This project uses a centralized system to define and use routes across the application, ensuring consistency, safety, and developer convenience.

---

### 📁 Where

All links are stored in:

```ts
lib/nav/links.ts
```

---

### ✍️ How to Add or Edit Links

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

### ⚙️ How to Use `linkHref(id)`

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