import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";

const Navbar = () => {
    return ( 
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    This will be a store switcher
                </div>
                <div>
                <MainNav />
                </div>
                <div className="ml-auto flex items-center spcae-x-4">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;