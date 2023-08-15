"use client"

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/ui/modals/store-model";

export const ModalProvider =() => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    //don't do anything befor it's mounted-> to prevent hydration errors
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
};
