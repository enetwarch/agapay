import Header from "@/components/header";
import TabBar from "../_components/tab-bar";
import Action from "./_components/action";
import Information from "./_components/information";
import Settings from "./_components/settings";

import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBarsProgress,
  faCertificate,
  faCloudMoon,
  faKey,
  faMoneyBill,
  faMoneyBillWave,
  faTrash,
  faUser,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export { profile as metadata } from "@/constants/metadata";
export default function Profile(): React.JSX.Element {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <Header label="Profile" />
      <main className="flex h-full w-full flex-1 grow flex-col items-center gap-4 px-8 pb-28">
        <section className="flex w-full flex-col items-center justify-center shadow-lg">
          <h2 className="sr-only">User</h2>
          <div className="flex w-full flex-col items-center justify-center">
            <Information variant="primary" icon={faUser} title="JohnDoe" description="johndoe@gmail.com" />
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-center shadow-lg">
          <h2 className="sr-only">Information</h2>
          <div className="flex w-full flex-col items-center justify-center">
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
          </div>
          <Information variant="secondary" icon={faCertificate} title="Total badge earned" description="*69,000,000" />
        </section>
        <section className="flex w-full flex-col items-center justify-center shadow-lg">
          <h2 className="sr-only">Settings</h2>
          <div className="flex w-full flex-col items-center justify-center">
            <Settings icon={faCloudMoon} label="Dark Mode" />
            <Settings icon={faVolumeHigh} label="Sound Effects" />
            <Settings icon={faMoneyBillWave} label="Animations" />
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-center shadow-lg">
          <h2 className="sr-only">Account Actions</h2>
          <div className="flex w-full flex-col items-center justify-center">
            <Action variant="secondary" icon={faKey} label="Change Password" />
            <Action variant="secondary" icon={faArrowRightFromBracket} label="Log Out" />
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-center shadow-lg">
          <h2 className="sr-only">Danger Zone</h2>
          <div className="flex w-full flex-col items-center justify-center">
            <Action variant="primary" icon={faBarsProgress} label="Reset Progress" />
            <Action variant="primary" icon={faTrash} label="Delete Account" />
          </div>
        </section>
      </main>
      <TabBar currentPage="/profile" />
    </div>
  );
}
