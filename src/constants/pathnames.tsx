// Add more pathnames if necessary to maintain typesafety.

export type TabPathname = (typeof tabPathnames)[number];
export const tabPathnames = [
  "/home", // @/app/(tabs)/(pages)/home/page.tsx
  "/cards", // @/app/(tabs)/(pages)/cards/page.tsx
  "/inbox", // @/app/(tabs)/(pages)/inbox/page.tsx
  "/profile", // @/app/(tabs)/(pages)/profile/page.tsx
] as const;

export function isTabPathname(value: string): value is TabPathname {
  return tabPathnames.includes(value as TabPathname);
}

export type Pathname = (typeof pathnames)[number];
export const pathnames = [
  "/", // @/app/page.tsx
  ...tabPathnames, // @/app/(tabs)/(pages)/
] as const;

export function isPathname(value: string): value is Pathname {
  return pathnames.includes(value as Pathname);
}
