# Agapay

Agapay is an e-wallet inspired idle clicker game, a fusion of a digital wallet app and a casual tapping game. It’s a practice project to help me dive into backend and fullstack development for the first time, so features are intentionally minimal. A database will be used for storing user progress which is linked to their account.

## Pages

These are the pages of the Agapay web app along with the features each of them contain. Unauthorized users can only access unprotected pages which has [/](src/app/page.tsx) as its default redirect page. Authorized users can only access protected pages and will be redirected to [/home](src/app/(tabs)/home/page.tsx) by default. In order for an authorized user to access unprotected pages, they must first log out from [/profile](src/app/(tabs)/profile/page.tsx) in order to rescind their authorized status.

### Unprotected

* [/](src/app/page.tsx): First page an unauthenticated user will see which has the log in and sign up button.
* [/login](src/app/(auth)/login/page.tsx): Has the log in form and authenticates a user that already has an account.
* [/signup](src/app/(auth)/signup/page.tsx): Has the sign up form and creates a user that does not have an account.

### Protected 

* [/home](src/app/(tabs)/home/page.tsx): Core feature of the base game where the user can tap or idle to earn game currency.
* [/prestige](src/app/(tabs)/prestige/page.tsx): Progression feature that allows restarting to gain permanent upgrades.
* [/support](src/app/(tabs)/support/page.tsx): Optional developer support page for an indie game web app.
* [/inbox](src/app/(tabs)/inbox/page.tsx): Contains minor one-way messages which the game only has a limited amount of.
* [/profile](src/app/(tabs)/profile/page.tsx): View and manage user account as well as their settings preferences.

## Tech Stack

[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS/)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)](https://pnpm.io/)
[![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## License

This project is licensed under the **[MIT license](LICENSE)**. Feel free to edit and distribute this project as you like.
