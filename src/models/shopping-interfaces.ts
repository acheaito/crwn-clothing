export interface SectionItem {
    id: number;
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl?: string
}

export interface ShopItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface ShopPage {
    id: number;
    title: string;
    routeName: string;
    items: ShopItem[];
}