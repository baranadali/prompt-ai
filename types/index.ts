export interface PromptItem {
    title: string;
    content: string;
    creator: string;
    creator_link: string;
    creator_image_id: string;
    category: string[];
}

export interface CategoryCount {
    name: string;
    count: number;
}
