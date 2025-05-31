// Add more pathnames if necessary to maintain typesafety.

export type TabPathname = (typeof tabPathnames)[number];
export const tabPathnames = [
  "/home", // @/app/(tabs)/home/page.tsx
  "/cards", // @/app/(tabs)/cards/page.tsx
  "/support", // @/app/(tabs)/support/page.tsx
  "/inbox", // @/app/(tabs)/inbox/page.tsx
  "/profile", // @/app/(tabs)/profile/page.tsx
] as const;

export function isTabPathname(value: string): value is TabPathname {
  return tabPathnames.includes(value as TabPathname);
}

export type Pathname = (typeof pathnames)[number];
export const pathnames = [
  "/", // @/app/page.tsx
  ...tabPathnames, // @/app/(tabs)/
] as const;

export function isPathname(value: string): value is Pathname {
  return pathnames.includes(value as Pathname);
}
