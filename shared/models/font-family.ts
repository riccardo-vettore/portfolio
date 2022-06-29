export interface FontWeight {
    type: string;
    400: string[],
    500?: string[],
    600: string[]
}

export interface FontFamily {
    name: string,
    styles: FontWeight[]
}