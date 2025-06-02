// Add more pathnames if necessary to maintain typesafety.

export type AuthPathname = (typeof authPathnames)[number];
export const authPathnames = [
  "/auth", // @/app/(auth)/auth/page.tsx
  "/login", // @/app/(auth)/login/page.tsx
  "/signup", // @/app/(auth)/signup/page.tsx
  "/forgot-password", // @/app/(auth)/forgot-password/page.tsx
  "/reset-password", // @/app/(auth)/reset-password/page.tsx
] as const;

export function isAuthPathname(value: string): value is AuthPathname {
  return authPathnames.includes(value as AuthPathname);
}

export type HomePathname = (typeof homePathnames)[number];
export const homePathnames = [
  "/home", // @/app/(home)/(pages)/home/page.tsx
  "/cards", // @/app/(home)/(pages)/cards/page.tsx
  "/support", // @/app/(home)/(pages)/support/page.tsx
  "/inbox", // @/app/(home)/(pages)/inbox/page.tsx
  "/profile", // @/app/(home)/(pages)/profile/page.tsx
] as const;

export function isHomePathname(value: string): value is HomePathname {
  return homePathnames.includes(value as HomePathname);
}

export type Pathname = (typeof pathnames)[number];
export const pathnames = [
  "/", // @/app/page.tsx
  ...authPathnames, // @/app/(auth)/
  ...homePathnames, // @/app/(home)/(pages)/
] as const;

export function isPathname(value: string): value is Pathname {
  return pathnames.includes(value as Pathname);
}
