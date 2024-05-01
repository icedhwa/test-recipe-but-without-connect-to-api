import { IMG_MAP } from "./mappings";

export function GetLandingImage(): LandingImageInfo {
    const number = Math.floor(Math.random() * 30) + 1;
    const itemName = `food${number}`;
    const creditsInfo = IMG_MAP[itemName as keyof typeof IMG_MAP];

    return {
        landingImgPath: `assets/pics/landing/${itemName}.webp`,
        landingImgCredits: {
            authorHref: creditsInfo['author']['link'],
            authorName: creditsInfo['author']['name'],
            siteHref: creditsInfo['site']['link']
        }
    };
}

interface LandingImageInfo {
    landingImgPath: string,
    landingImgCredits: LandingImageCredits
}

export interface LandingImageCredits {
    authorHref: string,
    authorName: string,
    siteHref: string
}
