import { UserButton } from "@clerk/nextjs";

import  MobileSidebar  from "@/components/mobile-sidebar";

const Navbar = async () => {

  return ( 
    <div className="flex items-center bg-black border-zinc-600 border-spacing-y-3 p-2">
      <MobileSidebar isPro={true} apiLimitCount={10} />
      <div className="flex w-full mb-4 pb-2 z-10 justify-end">
        <UserButton  afterSignOutUrl="/" />
      </div>
    </div>
   );
}
 
export default Navbar;