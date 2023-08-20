"use client";

import { Store } from "@prisma/client";

import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface SettingFormProps {
    initialData: Store;
}

export const SettingsForm: React.FC<SettingFormProps> = ({
    initialData
}) => {
    return (
        <div className="flex items-center justify-between">
           <Heading
            title="Settings"
            description="Managa store preferences"
           />
           <Button
            variant="destructive"
            size="sm"
            onClicj={() => {}}
           >
            <Trash className="h-4 w-4"/>
           </Button>
        </div>
    );
};