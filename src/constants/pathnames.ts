// Add more pathnames if necessary to maintain typesafety.

export type RootPathname = (typeof rootPathnames)[number];
export const rootPathnames = [
  "/", // @/app/page.tsx
] as const;

export function isRootPathname(value: string): value is RootPathname {
  return rootPathnames.includes(value as RootPathname);
}

export type AuthPathname = (typeof authPathnames)[number];
export const authPathnames = [
  "/login", // @/app/(auth)/login/page.tsx
  "/signup", // @/app/(auth)/signup/page.tsx
] as const;

export function isAuthPathname(value: string): value is AuthPathname {
  return authPathnames.includes(value as AuthPathname);
}

export type TabPathname = (typeof tabPathnames)[number];
export const tabPathnames = [
  "/home", // @/app/(tabs)/home/page.tsx
  "/prestige", // @/app/(tabs)/prestige/page.tsx
  "/support", // @/app/(tabs)/support/page.tsx
  "/inbox", // @/app/(tabs)/inbox/page.tsx
  "/profile", // @/app/(tabs)/profile/page.tsx
] as const;

export function isTabPathname(value: string): value is TabPathname {
  return tabPathnames.includes(value as TabPathname);
}

export type Pathname = (typeof pathnames)[number];
export const pathnames = [
  ...rootPathnames,
  ...authPathnames, // @/app/(auth)/
  ...tabPathnames, // @/app/(tabs)/
] as const;

export function isPathname(value: string): value is Pathname {
  return pathnames.includes(value as Pathname);
}
