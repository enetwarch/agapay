// Add more pathnames if necessary to maintain typesafety.

export const authPathnames = ["/", "/login", "/signup"] as const;
export type AuthPathname = (typeof authPathnames)[number];

export function isAuthPathname(value: string): value is AuthPathname {
  return authPathnames.includes(value as AuthPathname);
}

export const tabPathnames = ["/home", "/prestige", "/support", "/inbox", "/profile"] as const;
export type TabPathname = (typeof tabPathnames)[number];

export function isTabPathname(value: string): value is TabPathname {
  return tabPathnames.includes(value as TabPathname);
}

export const unprotectedPathnames = [...authPathnames] as const;
export type UnprotectedPathname = (typeof unprotectedPathnames)[number];

export function isUnprotectedPathname(value: string): value is UnprotectedPathname {
  return unprotectedPathnames.includes(value as UnprotectedPathname);
}

export const protectedPathnames = [...tabPathnames] as const;
export type ProtectedPathname = (typeof protectedPathnames)[number];

export function isProtectedPathname(value: string): value is ProtectedPathname {
  return protectedPathnames.includes(value as ProtectedPathname);
}

export const staticPathnames = [...authPathnames, ...tabPathnames] as const;
export type StaticPathname = (typeof staticPathnames)[number];

export function isStaticPathname(value: string): value is StaticPathname {
  return staticPathnames.includes(value as StaticPathname);
}

export const pathnames = [...staticPathnames] as const;
export type Pathname = (typeof pathnames)[number];

export function isPathname(value: string): value is Pathname {
  return pathnames.includes(value as Pathname);
}
