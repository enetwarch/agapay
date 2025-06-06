import Header from "@/components/header";
import TabBar from "../_components/tab-bar";
import Action from "./_components/action";
import Information from "./_components/information";
import Settings from "./_components/settings";

import {
  faArrowRightArrowLeft,
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBarsProgress,
  faCertificate,
  faKey,
  faMoneyBill,
  faMoon,
  faTrash,
  faUser,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile(): React.JSX.Element {
  return (
    <>
      <Header label="Profile" />
      <main className="flex h-full w-full flex-1 grow flex-col items-center gap-4 px-4 pb-24">
        <section className="flex w-full flex-col items-center justify-center">
          <Information variant="primary" icon={faUser} title="JohnDoe" description="johndoe@gmail.com" />
        </section>
        <section className="flex w-full flex-col items-center justify-center">
          <Information
            variant="secondary"
            icon={faArrowRightToBracket}
            title="Joined on June 26, 2024"
            description="300 days ago"
          />
          <Information
            variant="secondary"
            icon={faMoneyBill}
            title="Total money earned"
            description="$69,420,000,000,000"
          />
          <Information variant="secondary" icon={faCertificate} title="Total badge earned" description="*69,000,000" />
        </section>
        <section className="flex w-full flex-col items-center justify-center">
          <Settings icon={faMoon} label="Dark Mode" />
          <Settings icon={faVolumeHigh} label="Sound Effects" />
          <Settings icon={faArrowRightArrowLeft} label="Animations" />
        </section>
        <section className="flex w-full flex-col items-center justify-center">
          <Action variant="secondary" icon={faKey} label="Change Password" />
          <Action variant="secondary" icon={faArrowRightFromBracket} label="Log Out" />
        </section>
        <section className="flex w-full flex-col items-center justify-center">
          <Action variant="destructive" icon={faBarsProgress} label="Reset Progress" />
          <Action variant="destructive" icon={faTrash} label="Delete Account" />
        </section>
      </main>
      <TabBar currentPage="/profile" />
    </>
  );
}
