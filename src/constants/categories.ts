import Anisette from '../assets/categories/anisette_liquor.png';
import Gin from '../assets/categories/ginebras.png';

export type Category = {
    category_id: string;
    name: string;
    items_count: number;
    image_url: ImageMetadata | null;
    type: 'food' | 'drink' | 'other';
};

export const CATEGORIES: Category[] = [
    {
        category_id: "d50c192e-3406-48ad-9091-7d3201d91c1c",
        name: "Anís",
        items_count: 3,
        image_url: Anisette,
        type: 'drink',
    },
    {
        category_id: "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        name: "Ginebras",
        items_count: 5,
        image_url: Gin,
        type: 'drink',
    },
    {
        category_id: "8c762215-9c50-4f6e-aae2-28e748de77ce",
        name: "Refrescos",
        items_count: 11,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "752714ec-dcbf-4db0-86da-249a82ff6259",
        name: "Infusiones",
        items_count: 5,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "671790c1-3550-46fd-bd6a-88b03b33b87b",
        name: "Zumos",
        items_count: 5,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "c401cc02-a403-4111-92a4-404dee62af7a",
        name: "Cafés ",
        items_count: 9,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        name: "Brandy",
        items_count: 5,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        name: "Rones",
        items_count: 9,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "712594ad-1032-4842-b8cc-59dd15f70768",
        name: "Bocadillos",
        items_count: 22,
        image_url: null,
        type: 'food',
    },
    {
        category_id: "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        name: "Vinos",
        items_count: 8,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "773a37d5-1735-4c10-bd5c-d2cfa7188681",
        name: "Otros",
        items_count: 1,
        image_url: null,
        type: 'other',
    },
    {
        category_id: "e5c18a17-afa6-4a94-b55b-00d798168af0",
        name: "Cervezas",
        items_count: 10,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "77f4e454-e58b-4c22-8237-6d6924cd812d",
        name: "Platos",
        items_count: 3,
        image_url: null,
        type: 'food',
    },
    {
        category_id: "350df0e5-1fc2-4397-900e-03c6af6c4065",
        name: "Aperitivos",
        items_count: 5,
        image_url: null,
        type: 'drink',
    },
    {
        category_id: "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        name: "Whiskey",
        items_count: 5,
        image_url: null,
        type: 'drink',
    }
];