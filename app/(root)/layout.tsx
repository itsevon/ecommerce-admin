import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
    children
}: {
    children: React.ReactNode;
}) {
    
    //check current active user
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId
        }
    });

    if (store) {
        redirect(`/${store.id}`);
    }

    return (
        <>
            {children}
        </>
    )
}

