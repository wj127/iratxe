import Anisette from '../assets/categories/anisette_liquor.png';
import Gin from '../assets/categories/ginebras.png';
import Refrescos from '../assets/categories/refrescos.png';
import Infusiones from '../assets/categories/infusiones.png';
import Juices from '../assets/categories/juices.png';
import Coffees from '../assets/categories/coffees.png';
import Brandy from '../assets/categories/brandy.png';
import Rum from '../assets/categories/rum.png';
import Wines from '../assets/categories/wines.png';
import Beers from '../assets/categories/beers.png';
import Whiskeys from '../assets/categories/whiskeys.png';
import Sandwiches from '../assets/categories/sandwiches.png';
import Dishes from '../assets/categories/dishes.png';
import Aperitivos from '../assets/categories/apperol.png';
import Others from '../assets/categories/others.png';
import { getImage } from 'astro:assets';

export type Category = {
    category_id: string;
    name: string;
    heading: string;
    subtitle: string;
    items_count: number;
    image_url: ImageMetadata | null;
    type: 'food' | 'drink' | 'other';
};

export type CategoryWithOptimizedImage = Omit<Category, 'image_url'> & {
    image_url: Awaited<ReturnType<typeof getImage>>;
};

export const CATEGORIES: Category[] = [
    {
        category_id: "d50c192e-3406-48ad-9091-7d3201d91c1c",
        name: "Anís",
        heading: "Anises y Licores",
        subtitle: "Herbal anisettes and sweet liqueurs from the bar shelf.",
        items_count: 3,
        image_url: Anisette,
        type: 'drink',
    },
    {
        category_id: "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        name: "Ginebras",
        heading: "Gins & Botanicals",
        subtitle: "London dry, Mediterranean, and Spanish gins for copas and combinados.",
        items_count: 5,
        image_url: Gin,
        type: 'drink',
    },
    {
        category_id: "8c762215-9c50-4f6e-aae2-28e748de77ce",
        name: "Refrescos",
        heading: "Refrescos y Soft Drinks",
        subtitle: "Classic sodas and mixers to pair with any round.",
        items_count: 11,
        image_url: Refrescos,
        type: 'drink',
    },
    {
        category_id: "752714ec-dcbf-4db0-86da-249a82ff6259",
        name: "Infusiones",
        heading: "Tés e Infusiones",
        subtitle: "Hot infusions for a slower afternoon at the bar.",
        items_count: 5,
        image_url: Infusiones,
        type: 'drink',
    },
    {
        category_id: "671790c1-3550-46fd-bd6a-88b03b33b87b",
        name: "Zumos",
        heading: "Zumos Naturales",
        subtitle: "Fresh juices, served as they are or as mixers.",
        items_count: 5,
        image_url: Juices,
        type: 'drink',
    },
    {
        category_id: "c401cc02-a403-4111-92a4-404dee62af7a",
        name: "Cafés",
        heading: "Cafés de Barra",
        subtitle: "Espresso, cortados, and the house coffee ritual.",
        items_count: 9,
        image_url: Coffees,
        type: 'drink',
    },
    {
        category_id: "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        name: "Brandy",
        heading: "Brandies y Coñacs",
        subtitle: "Spanish brandies and classic cognacs for after dinner.",
        items_count: 5,
        image_url: Brandy,
        type: 'drink',
    },
    {
        category_id: "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        name: "Rones",
        heading: "Rones del Caribe",
        subtitle: "White and aged rums for sipping or mixing.",
        items_count: 9,
        image_url: Rum,
        type: 'drink',
    },
    {
        category_id: "712594ad-1032-4842-b8cc-59dd15f70768",
        name: "Bocadillos",
        heading: "Bocadillos de la Casa",
        subtitle: "Hearty sandwiches in the Basque tavern tradition.",
        items_count: 22,
        image_url: Sandwiches,
        type: 'food',
    },
    {
        category_id: "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        name: "Vinos",
        heading: "Vinos de Copa y Botella",
        subtitle: "A short list of reds, whites, and local pours.",
        items_count: 8,
        image_url: Wines,
        type: 'drink',
    },
    {
        category_id: "773a37d5-1735-4c10-bd5c-d2cfa7188681",
        name: "Otros",
        heading: "Otros de la Barra",
        subtitle: "Odds and extras from behind the bar.",
        items_count: 1,
        image_url: Others,
        type: 'other',
    },
    {
        category_id: "e5c18a17-afa6-4a94-b55b-00d798168af0",
        name: "Cervezas",
        heading: "Nuestros Grifos y Botellas",
        subtitle: "Cold draught selections from Canary breweries and international stables.",
        items_count: 10,
        image_url: Beers,
        type: 'drink',
    },
    {
        category_id: "77f4e454-e58b-4c22-8237-6d6924cd812d",
        name: "Platos",
        heading: "Platos para Compartir",
        subtitle: "Hot dishes and plates to share at the table.",
        items_count: 3,
        image_url: Dishes,
        type: 'food',
    },
    {
        category_id: "350df0e5-1fc2-4397-900e-03c6af6c4065",
        name: "Aperitivos",
        heading: "Aperitivos de la Casa",
        subtitle: "Light bites and aperitif pours to start the evening.",
        items_count: 5,
        image_url: Aperitivos,
        type: 'drink',
    },
    {
        category_id: "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        name: "Whiskey",
        heading: "Premium Malts & Blends",
        subtitle: "Our handpicked selection of Scottish, Irish, and American spirits.",
        items_count: 5,
        image_url: Whiskeys,
        type: 'drink',
    }
];