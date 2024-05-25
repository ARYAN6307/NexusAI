import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
const SettingsPage = async () => {

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          { "You are currently on a Pro plan." }
        </div>
      </div>
    </div>
   );
}
 
export default SettingsPage;
