import type { StaticPathname } from "./pathnames";

import type { Metadata } from "next";

// Only records static pathnames because dynamic paths will have varying metadata.
const metadata: Record<StaticPathname, Metadata> = Object.freeze({
  "/": Object.freeze({
    title: "Agapay | Tap to Prosper",
    description:
      "Welcome to Agapay, an e-wallet inspired idle clicker game. Start building your wealth and prestige today!",
  }),
  "/login": Object.freeze({
    title: "Agapay | Log In",
    description: "Already a member? Log in to continue your progress and earnings in Agapay.",
  }),
  "/signup": Object.freeze({
    title: "Agapay | Sign Up",
    description: "Join Agapay today! Create your account and begin your tapping journey to success.",
  }),
  "/home": Object.freeze({
    title: "Agapay | Home",
    description:
      "Tap your way to riches! Earn money, unlock upgrades, and boost your income in this addictive clicker game.",
  }),
  "/prestige": Object.freeze({
    title: "Agapay | Prestige",
    description:
      "Reset your progress for massive and permanent long-term gains. Prestige to multiply your income and climb faster.",
  }),
  "/support": Object.freeze({
    title: "Agapay | Support",
    description: "Consider supporting this indie web project!",
  }),
  "/inbox": Object.freeze({
    title: "Agapay | Inbox",
    description: "Check your messages, rewards, and announcements from Agapay.",
  }),
  "/profile": Object.freeze({
    title: "Agapay | Profile",
    description: "View and manage your account, track your stats, and personalize your Agapay experience.",
  }),
});

export const index: Metadata = Object.freeze(metadata["/"]);
export const login: Metadata = Object.freeze(metadata["/login"]);
export const signup: Metadata = Object.freeze(metadata["/signup"]);

export const home: Metadata = Object.freeze(metadata["/home"]);
export const prestige: Metadata = Object.freeze(metadata["/prestige"]);
export const support: Metadata = Object.freeze(metadata["/support"]);
export const inbox: Metadata = Object.freeze(metadata["/inbox"]);
export const profile: Metadata = Object.freeze(metadata["/profile"]);
