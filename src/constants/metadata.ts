import type { Pathname } from "./pathnames";

import type { Metadata } from "next";

export const index: Metadata = Object.freeze({
  title: "Agapay | Tap to Prosper",
  description:
    "Welcome to Agapay, an e-wallet inspired idle clicker game. Start building your wealth and prestige today!",
});

export const auth: Metadata = Object.freeze({
  title: "Agapay | Authentication",
  description: "",
});

export const login: Metadata = Object.freeze({
  title: "Agapay | Log In",
  description: "Already a member? Log in to continue your progress and earnings in Agapay",
});

export const signup: Metadata = Object.freeze({
  title: "Agapay | Sign Up",
  description: "Join Agapay today! Create your account and begin your tapping journey to success.",
});

export const home: Metadata = Object.freeze({
  title: "Agapay | Home",
  description:
    "Tap your way to riches! Earn money, unlock upgrades, and boost your income in this addictive clicker game.",
});

export const prestige: Metadata = Object.freeze({
  title: "Agapay | Prestige",
  description:
    "Reset your progress for massive and permanent long-term gains. Prestige to multiply your income and climb faster.",
});

export const support: Metadata = Object.freeze({
  title: "Agapay | Support",
  description: "Consider supporting this indie web project!",
});

export const inbox: Metadata = Object.freeze({
  title: "Agapay | Inbox",
  description: "Check your messages, rewards, and announcements from Agapay.",
});

export const profile: Metadata = Object.freeze({
  title: "Agapay | Profile",
  description: "View and manage your account, track your stats, and personalize your Agapay experience.",
});

/** @internal this is exported, but it should only be used to make sure all pages have metadata through the Record type. */
const _metadata: Record<Pathname, Metadata> = Object.freeze({
  "/": index,
  "/auth": auth,
  "/login": login,
  "/signup": signup,
  "/home": home,
  "/prestige": prestige,
  "/support": support,
  "/inbox": inbox,
  "/profile": profile,
});
