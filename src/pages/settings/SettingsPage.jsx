import { useState } from "react";
import SettingsNav from "./SettingsNav";
import ProfileSection from "./ProfileSection";
import AppearanceSection from "./AppearanceSection";
import NotificationsSection from "./NotificationsSection";
import PreferencesSection from "./PreferencesSection";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("Profile");

  const sections = {
    Profile: <ProfileSection />,
    Appearance: <AppearanceSection />,
    Notifications: <NotificationsSection />,
    Preferences: <PreferencesSection />,
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="font-display text-2xl font-medium">Settings</h1>
        <p className="text-ink/60">Manage your profile and app preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <SettingsNav active={activeSection} onSelect={setActiveSection} />
        <div className="flex-1 bg-white border border-line rounded-lg p-6">
          {sections[activeSection]}
        </div>
      </div>
    </div>
  );
}
