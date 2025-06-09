import Header from "@/components/header";
import { Div, Main, Section } from "@/components/primitives/block";
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
    <Div size="screen">
      <Header label="Profile" />
      <Main size="hastabbar">
        <Section size="nospace" className="shadow-lg">
          <h2 className="sr-only">User</h2>
          <Div size="nospace">
            <Information variant="primary" icon={faUser} title="JohnDoe" description="johndoe@gmail.com" />
          </Div>
        </Section>
        <Section size="nospace" className="shadow-lg">
          <h2 className="sr-only">Information</h2>
          <Div size="nospace">
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
          </Div>
          <Information variant="secondary" icon={faCertificate} title="Total badge earned" description="*69,000,000" />
        </Section>
        <Section size="nospace" className="shadow-lg">
          <h2 className="sr-only">Settings</h2>
          <Div size="nospace">
            <Settings icon={faCloudMoon} label="Dark Mode" />
            <Settings icon={faVolumeHigh} label="Sound Effects" />
            <Settings icon={faMoneyBillWave} label="Animations" />
          </Div>
        </Section>
        <Section size="nospace" className="shadow-lg">
          <h2 className="sr-only">Account Actions</h2>
          <Div size="nospace">
            <Action variant="secondary" icon={faKey} label="Change Password" />
            <Action variant="secondary" icon={faArrowRightFromBracket} label="Log Out" />
          </Div>
        </Section>
        <Section size="nospace" className="shadow-lg">
          <h2 className="sr-only">Danger Zone</h2>
          <Div size="nospace">
            <Action variant="primary" icon={faBarsProgress} label="Reset Progress" />
            <Action variant="primary" icon={faTrash} label="Delete Account" />
          </Div>
        </Section>
      </Main>
      <TabBar currentPage="/profile" />
    </Div>
  );
}
