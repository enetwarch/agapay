// Add more pathnames if necessary to maintain typesafety.

export type AuthPathname = (typeof authPathnames)[number];
export const authPathnames = [
  "/auth", // @/app/(auth)/auth/page.tsx
  "/login", // @/app/(auth)/login/page.tsx
  "/signup", // @/app/(auth)/signup/page.tsx
] as const;

export function isAuthPathname(value: string): value is AuthPathname {
  return authPathnames.includes(value as AuthPathname);
}

export type HomePathname = (typeof homePathnames)[number];
export const homePathnames = [
  "/home", // @/app/(home)/home/page.tsx
  "/prestige", // @/app/(home)/prestige/page.tsx
  "/support", // @/app/(home)/support/page.tsx
  "/inbox", // @/app/(home)/inbox/page.tsx
  "/profile", // @/app/(home)/profile/page.tsx
] as const;

export function isHomePathname(value: string): value is HomePathname {
  return homePathnames.includes(value as HomePathname);
}

export type Pathname = (typeof pathnames)[number];
export const pathnames = [
  "/", // @/app/page.tsx
  ...authPathnames, // @/app/(auth)/
  ...homePathnames, // @/app/(home)/
] as const;

export function isPathname(value: string): value is Pathname {
  return pathnames.includes(value as Pathname);
}
