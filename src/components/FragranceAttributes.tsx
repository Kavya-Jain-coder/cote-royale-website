import { Content } from "@prismicio/client";
import { IconType } from "react-icons";
import { LuCrown, LuDroplet, LuFlame, LuGem, LuTreePine, LuZap } from "react-icons/lu";


type AttributeData = {
    label: string;
    Icon: IconType;
}


const SCENT_PROFILES: Record<Content.FragranceDocumentData["scent_profile"], AttributeData> = {
    spicy: {label: "Spicy & Smoky", Icon : LuFlame},
    woody: {label: "Woody & Herbal", Icon : LuTreePine},
    fresh: {label: "Fresh & Aquatic", Icon : LuDroplet},
}


const MOODS: Record<Content.FragranceDocumentData["mood"], AttributeData> = {
    bold: {label: "Bold & Seductive", Icon : LuCrown},
    grounded: {label: "Grounded & Sophisticated", Icon : LuGem},
    refreshing: {label: "Refreshing & Invigorating", Icon : LuZap},
}

type FragranceAttributesProps = {
    scent_profile: Content.FragranceDocumentData["scent_profile"];
    mood: Content.FragranceDocumentData["mood"];
    className?: string;
}


export const FragranceAttributes = ({
    mood: providedMood,
    scent_profile: providedScentProfile,
    className
}: FragranceAttributesProps) => {

    const mood = MOODS[providedMood];
    const scent_profile = SCENT_PROFILES[providedScentProfile];

    return (
        <div className={className}>
            <p className="text-base mb-2 font-semibold uppercase">Features</p>

            <div className="grid gap-2">
                <p className="flex item-center gap-2">
                    <scent_profile.Icon className="size-6"/>
                    {scent_profile.label}
                </p>
                <p className="flex item-center gap-2">
                    <mood.Icon className="size-6"/>
                    {mood.label}
                </p>
            </div>
        </div>
    )


}