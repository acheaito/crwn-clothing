export interface SectionItem {
    id: number;
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl?: string;
}

export interface CollItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export interface Collection {
    id: number;
    title: string;
    routeName: string;
    items: CollItem[];
}