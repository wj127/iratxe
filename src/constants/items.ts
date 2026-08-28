export type Item = {
    item_id: string;
    name: string;
    category_ids: string[];
    image_urls: string[];
    options: unknown[];
    type: string;
    variants: {
        variant_id: string;
        price_type: string;
        price: {
            amount: {
                currency: string;
                value: number;
            };
            amount_net: {
                currency: string;
                value: number;
            };
            amount_gross: {
                currency: string;
                value: number;
            };
            tax_included: boolean;
        };
        options: unknown[];
        name: string;
    }[];
    variants_count: number;
    description: string;
    reporting_category_id: string;
    unit_id: string;
    sell_online: boolean;
};

export function getItemsByCategoryId(categoryId: string) {
    return ITEMS.filter((item) => item.category_ids.includes(categoryId)).sort((a, b) =>
        a.name.localeCompare(b.name, 'es'),
    );
}

export const ITEMS: Item[] = [
    {
        "item_id": "1b3370d4-777d-4889-93ff-8884eaed055a",
        "name": "100 pipers",
        "category_ids": [
            "d44f2522-9d9c-4f17-a26c-fa6cac38fe35"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5ND0VTXR7Y9DQAE0E2YGB9P1GQ"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "9898f707-a601-4b06-925a-45257004e2e6",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "09a93c3c-6d0f-4ae9-ba76-c8c7ec5786b5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "cc630685-c740-4189-b8a2-65251c76190c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "859742db-6226-4aaa-ac26-23eb16448056",
        "name": "43",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5F1ZZT5YP28KAR986V1NZ91S7Y"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5af4c443-c0f2-4482-bce5-6eba3e353ed0",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "43cd4c7d-78f8-49a1-a345-d7670912f07f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "f1f92aab-33bd-4165-9fd3-1811dfcc1dac",
        "name": "Abulaga (afrutado)",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_2Y53CQYQJ4859A60ZX45HNMJS3"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f5d1da0b-6891-4dcc-b1a3-924fecfcfbfb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "2238ecfd-a936-4472-a53b-7de54903997d",
        "name": "Aguas",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_42X2D8C3029D8SZVBNPWX9YRY4"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "6f740eab-eb16-43f7-a10d-8a2456c12a6f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Grande (sin gas)"
            },
            {
                "variant_id": "c93e7397-4cea-4b94-ba74-662bd366b0bb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Pequeña (con y sin gas)"
            },
            {
                "variant_id": "563809d7-02b1-49ec-ac23-3ed26faef78f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Grande (con gas)"
            },
            {
                "variant_id": "ee8bf52e-1cf2-4ca2-9cc2-265e8c673ca5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 80
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 80
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 80
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Botellin Perrier"
            }
        ],
        "variants_count": 4,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "537842fb-3b31-481f-81b4-57af4c076050",
        "name": "Alacer (Ribera)",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3CYSR22HX69GD94VY2TN541FAR"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "3851b55c-8efb-49f3-863b-01f18da374ed",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "b4c6b5f0-0b4e-4a0c-9a22-84b81c5ac759",
        "name": "Alahcer ribera (roble)",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "6e6f65cb-710d-4f80-9e3c-a05e24c8ebbc",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 220
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 220
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 220
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "8818dc6c-3beb-4baa-84ca-27ea965be905",
        "name": "Aldea (dorado y blanco)",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_2X98SCHVRR8MKVAA03T2GM1QJ8",
            "https://images.sumup.com/img_0WX8YYZKW182389SBXPD31SXZG"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "56f5aa27-0f12-476b-b7d1-6981cf4922be",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "e17046e7-480a-4b7c-b5e0-5c53748a4202",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "8685a0d8-2325-4f57-bfbd-1612d89263d8",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "bd6a2799-ce0e-487c-bfe3-3c735987a2f1",
        "name": "Alhambra",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3Q48CJ8N568HDAZ289QDN9Z3PG"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "08fd3dfe-2c49-405b-a09e-7e1520d05755",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 230
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 230
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 230
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "a4f28de8-8ef8-4c09-a1e8-a69c47c28872",
        "name": "Americano",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5TJB1X1GRR98CRVENH8ZH0XBNC"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f9620764-3938-4a11-9d79-a161bce98ce3",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "50a15961-eef8-497b-bcbc-2e877126faca",
        "name": "Anís del mono",
        "category_ids": [
            "d50c192e-3406-48ad-9091-7d3201d91c1c"
        ],
        "image_urls": [
            "https://images.sumup.com/img_048H203XA09MSSR2B2YWWHANV9"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "56b1bcd4-097b-4974-af08-a39252727fa4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "7e4e33da-9383-44eb-bbee-c6730462fe00",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "d50c192e-3406-48ad-9091-7d3201d91c1c",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "d0522873-8945-49cd-8f1a-136e3f993660",
        "name": "Aperol",
        "category_ids": [
            "350df0e5-1fc2-4397-900e-03c6af6c4065"
        ],
        "image_urls": [
            "https://images.sumup.com/img_48YAP4DGFD9268VFFFTA184HZB"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "859d6e1e-4170-42ae-a569-9e31813f1607",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            },
            {
                "variant_id": "28e4a7c7-9572-4657-99b9-98f4374ee8e1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinado"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "350df0e5-1fc2-4397-900e-03c6af6c4065",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "9cee49d9-5765-40fe-8e0e-24da3744a90c",
        "name": "Appletizer",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_21KMHPSD9C993SXCDCGW88C5CY"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d747c6a0-731f-4492-bf84-2c51c67695ab",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "1618fe18-739d-4363-9e3d-f60d9e2e34d6",
        "name": "Aquarius",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_6D2R3J3E7W92DVFJXEN3KG4GWB"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "8943d5c3-b7b6-4899-b201-0026ef9c7893",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Naranja"
            },
            {
                "variant_id": "8e006342-2bbb-4a6e-bd75-056d5be017ab",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Limon"
            },
            {
                "variant_id": "83448932-d29c-48f9-9048-c007d277cf44",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Melocotón"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "7fb0b90c-4da4-47e9-ba20-981031cfd47c",
        "name": "Arehucas blanco",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_280ZV5T5R197V8GHYRK17SH5W1"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "09cf08cf-b350-4181-b3f8-b71d48d50e05",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "67f4d322-0a66-459a-80b0-eabe174b22a2",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "de6650f0-e73e-44f3-b1de-978cfe421e34",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "0f94883b-f06c-4574-b89c-b420aa9fdb07",
        "name": "Arehucas Oro",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_4DGS84WC9Q8A7VXXWMP0TF5VJQ"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "b56fe61c-92f5-4102-b7d5-64b4ab2faf77",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "ab2d2411-8289-4594-a669-055fc5968be5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinado"
            },
            {
                "variant_id": "7218a551-ae8d-458e-88c1-a7581c2e53a6",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "27b932c1-33ab-446e-8522-2c7477c96fd7",
        "name": "Bacardí ",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1NX4A95CY88C7T6Q094PXKGNZ0"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "a293aba7-43c8-4413-a7b1-6ccafae6d196",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "5c8dd440-b4c9-4228-8286-24c6810b9748",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "4377f9ff-5591-43e5-91e4-72a4d21c780a",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "c803e14b-03bd-4ffd-9e36-f037e19ec474",
        "name": "Bacon",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "6a610dfe-6260-46fd-9967-ca6c1daf716d",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero "
            },
            {
                "variant_id": "06fdf8f7-c8cd-4971-b371-a76fd06b73b1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "27472e31-e68b-4512-a9e4-a051eac59ae3",
        "name": "Baileys",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1YAKJ2HY049ZAVY8RFE1DV8R7H"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "4079af18-d143-46fe-8bd8-c24fb1528f55",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "37009b3d-3411-40ed-a8cc-20e441906b0c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "5f7015c2-771e-481e-a399-a8d904fe8030",
        "name": "Barceló",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_03JFEGPCSH8JJ8X2MWMB85WE6D"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "e62e689a-433b-406f-a4b5-d6032edab529",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "33b124d9-e4cf-42c5-b78e-ec9e524c1e17",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "95c9d856-b92d-496d-8c66-199ff07ef12b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "d844ae15-b3bf-4c27-b042-72161052ef7b",
        "name": "Barraquito",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "989a264d-d5c4-436f-b357-aaa1676bc2a5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "373a24cf-212b-4024-b768-c5559613bfa2",
        "name": "Beefeater",
        "category_ids": [
            "f5b37c7c-c84f-471e-8f03-3b2afbf7c956"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0HDQKFCZSA9QQTTQJHJKDZTBMA"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "809e3956-bfec-4e82-aa48-7736ac741ffd",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "1e334754-47df-4658-9d1a-48c1c3233b85",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "dd61a008-239d-46eb-829c-538103980cc7",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "fb2adae5-a111-4d7c-b2c2-c19af1d75c01",
        "name": "Bitter Kas",
        "category_ids": [
            "350df0e5-1fc2-4397-900e-03c6af6c4065"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7HY8G2JV5Q8JJTW8YJWY4G13ZP"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "c4c3af9a-b8cd-4354-a703-831a1cf36f7c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "350df0e5-1fc2-4397-900e-03c6af6c4065",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "8d391b4e-5465-4ee3-a627-6d360d5387cc",
        "name": "Bocos (Ribera)",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_07D6SDCDV98DT9D5XGZTSQPPQY"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "435081f0-770c-4c33-a30f-d463519fe279",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "9720d51d-e95b-4aff-a0a9-8a5264bcf37c",
        "name": "Bombay Saphire",
        "category_ids": [
            "f5b37c7c-c84f-471e-8f03-3b2afbf7c956"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7QWTSX0FHH9ZRSXNEVK63MTB25"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "45c5e5d2-bab1-4d5c-99b6-5f73eeca5849",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "ca22fc1a-658e-4c34-918f-749590b36095",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 372
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "0a2b29d2-58d0-4ee3-8135-8af20e13a541",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 289
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "29b3c8f0-3868-4aec-9c1d-55617a68582c",
        "name": "Café con leche",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7NZ55R68CY86ZTG82FXAY79GEF"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "20557a9d-6f2f-4422-a1e9-41a1a3603c3f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "f3c0b77a-1758-4238-9ad8-62ef41d8191f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Condensada"
            },
            {
                "variant_id": "06964db4-453a-4f44-aea6-45b7518f76db",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Capuchino"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "7ceb0bea-2d32-4513-8022-7ebf1e9cf4cf",
        "name": "Cafe solo",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0GYSTMYQAM9V3B4VH7DA2E3HC9"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "897959f1-a57a-4b9f-90dd-df1eacf216b7",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "27fb4634-ad6f-4343-84a9-2363b9c2133f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Doble expresso"
            },
            {
                "variant_id": "202a89cb-33ec-491a-b332-fcc9c546b626",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Santiguado"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "736c52c3-ebe4-4cd9-bcd8-49d556730b39",
        "name": "Campari",
        "category_ids": [
            "350df0e5-1fc2-4397-900e-03c6af6c4065"
        ],
        "image_urls": [
            "https://images.sumup.com/img_50NZHFX3Z69DZ9RFC3H2DY22NM"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "8e9fe140-ccde-456f-af8f-a24a84283621",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            },
            {
                "variant_id": "836e1249-e5d1-4332-b9e2-528f11e2f12c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinado"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "350df0e5-1fc2-4397-900e-03c6af6c4065",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "06054e1a-654c-4a9f-a496-3a2d67c09c7e",
        "name": "Cañas",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_4JYRY71A1R8P196CJHFPDWF8AN"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "4805e3f3-5c78-4a51-a3b6-96dd5fa5e025",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Normal"
            },
            {
                "variant_id": "f6350f0b-8b84-443c-a9e3-1676235deac4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Jarra"
            },
            {
                "variant_id": "8c2106e9-d398-4b51-90a2-0b50fd7500fa",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Clara"
            },
            {
                "variant_id": "615b15c4-353e-4a8b-8315-1b6a7a02c8f1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "1/2"
            }
        ],
        "variants_count": 4,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "c0d807c6-f9f9-42e7-ab31-b54e113f4e9c",
        "name": "Carajillo",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "60bf6239-8775-41aa-a41d-bee9e3f9c9aa",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 180
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "a440e544-c2bd-4843-975e-bab50c73b03f",
        "name": "Cardenal Mendoza",
        "category_ids": [
            "09614781-40ad-42ec-b7d9-743fe32cd5c5"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1VNAC2G2QH8YKV6D6HR3JWP8Q1"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "769c4844-c963-4358-97f4-0dcf7c3a4676",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "64c3653b-0315-40b7-92df-dac1b28c226e",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 413
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "2d983438-426b-4dd7-9bc6-9b2a1e8832ca",
        "name": "Carlos 1",
        "category_ids": [
            "09614781-40ad-42ec-b7d9-743fe32cd5c5"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3WCBJWJK229TDRBA651KPNYJ9D"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "3686c248-94d5-4217-996a-1f65fb704d01",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "fd310c4b-a189-40a0-a486-28d157579d6c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 413
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "d3126c2b-289c-4366-b543-8f31b1455afe",
        "name": "Carlsberg",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_43YTXVG85W9Z8S5QQ8E3QHYYV2"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "40c19571-6fd0-4c69-bb24-cd2b40c3680d",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "a5895363-e125-4378-88f0-49d14efde913",
        "name": "Chinchón",
        "category_ids": [
            "d50c192e-3406-48ad-9091-7d3201d91c1c"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0GGZK98ST69VRBERM0CMHRQPH5"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "679a3c9f-dbb5-4550-9c9a-32890d7b1efb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "5cb42ec5-5be5-4ac1-a853-7c20dd4bc5d8",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 207
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "d50c192e-3406-48ad-9091-7d3201d91c1c",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "09a9125f-0296-478f-9ff4-46376fee0d18",
        "name": "Chocolate",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_220FR5KQ2W8E5SSEETKY0HCRSW"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "cbe78984-7b18-4b30-beca-abcb6cdd1f1a",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "cf3712d5-80bc-479e-b46a-f9ded2042a9b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Cola-cao"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "b0fb33a3-2598-42c5-bc3a-afe9fd65bf7d",
        "name": "Chorizo Ibérico",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "734851f3-2d65-4094-acd1-3fe38bae6b5e",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "c41c44ca-e836-44d8-b5a0-48a2b650dfd5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "70549c11-d4e2-43a5-a786-2b44b280a0cf",
        "name": "Chorizo picante",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "57a1afea-e8d6-4a96-992a-aab836da8d95",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "4fc02a93-0b1a-480b-9043-7e12d9dba976",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "7dbcdc6a-5ab5-4b6e-9973-a395e540778a",
        "name": "Coca-cola",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1HXVP93DKC812VCWRDQ6PPQNR0"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "7dd6327e-ec00-4e92-bb1f-f14255120fbf",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Normal"
            },
            {
                "variant_id": "e093adae-4d81-41aa-904f-bfe16a5472b1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Zero zero"
            },
            {
                "variant_id": "e03bb9ff-7fe4-48e8-bbd5-cb764b8b88ee",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Zero"
            },
            {
                "variant_id": "254367fa-d855-4fe2-9564-6684a7e6d3fd",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Lata normal"
            },
            {
                "variant_id": "48e67efe-0a22-45ad-a3c6-68c8ddc95cb4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Lata Zero"
            }
        ],
        "variants_count": 5,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "890cadaa-c195-4a3c-8c87-5f45400fefd9",
        "name": "CocaCola de lata",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_4N9HBWE4VK9SX9H8Q668K81FFK"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "a9875b90-83c2-4708-b53e-e7e864d3b9fd",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "e6b6a648-7a7d-479f-902c-53c534c56b8a",
        "name": "Cortado largo",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1RJF5DF3548EJ8DD1VWQ8348Q6"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d3a1a1ed-979a-435e-a8af-fa6129ca5893",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "6f9ee2da-f594-4cc5-81cb-c5eb94502bf5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Leche y leche"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "07c0e7f7-aa71-41cd-a6f1-e54ae7b52e7e",
        "name": "Cortado natural",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1J5ZJQ4GPC89T8NV185CYJ6NAG"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0bf1187b-1e72-4b7c-bf06-565c5fe06b3e",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "d13cd82a-8a9e-4b9c-aea7-601521648936",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Leche y leche"
            },
            {
                "variant_id": "f1b1c243-3df2-4656-9cfd-9236541314ca",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 110
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Bombón"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "359d2199-081e-4896-8e22-f809d879a94a",
        "name": "Damn",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_363JJGKTN49V8A706WNMHZJGDR"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "70283b19-7b83-4437-b532-3f20d0d3a048",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Tostada"
            },
            {
                "variant_id": "c0bd6afd-a33d-41c0-95e3-19dac038e278",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "0.0 sin gluten"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "1b47c540-bdb3-42e0-bcbe-b0e53f319389",
        "name": "Dewar's white label",
        "category_ids": [
            "d44f2522-9d9c-4f17-a26c-fa6cac38fe35"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1CRPYB5ZK88F2VWP8HMPN35R1V"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "c63a6f7b-bfc7-4595-b360-e9a4e3c4e7a2",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "c0bf2454-37e5-4d98-b31f-5292f1496c5c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "bf282138-3142-4929-b263-eccabe861b88",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "22fa2f21-7672-4bb4-8131-fb355ef432e5",
        "name": "Disaronno Amaretto",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7B1N1CR0AS8Y0TR30RRE0D8ZFP"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d21314ec-6894-4387-8520-a85f1e952f08",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "037fc619-8a0a-4a5b-a874-c40c0ad6733f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "37c68fd4-0552-4e34-8ca2-c95d748b5e09",
        "name": "Dorada",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1R913G94DX9W3VQCQ3QT6P1CPZ"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f1b0b7c2-17d9-4f3d-97fc-ead39fd29a07",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Pilsen normal"
            },
            {
                "variant_id": "421a8cf0-ddba-42f9-9222-dc86d5b6ebd0",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Especial"
            },
            {
                "variant_id": "e444a0aa-e280-475a-a23c-191983a90aa2",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Tostada"
            },
            {
                "variant_id": "bc8fc9ab-4bd7-4cd7-bffa-6c44c0bae6fa",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Tostada 0.0"
            },
            {
                "variant_id": "85594166-8fc0-494b-acd7-3716b2f22982",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Sin alcohol"
            },
            {
                "variant_id": "c1f89761-bcce-4d60-a824-3b26d734ecc4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Sin de limón "
            }
        ],
        "variants_count": 6,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "c3114020-a8b5-4e30-be1e-4f1ac6cc7880",
        "name": "Embutido variado Grande",
        "category_ids": [
            "77f4e454-e58b-4c22-8237-6d6924cd812d"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0ac09e46-c198-4a90-a18b-33e324c479ec",
                "price_type": "VARIABLE",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "77f4e454-e58b-4c22-8237-6d6924cd812d",
        "unit_id": "each.each",
        "sell_online": false
    },
    {
        "item_id": "5b09fde8-aa6d-4cc5-b2d5-690c1de87ed9",
        "name": "Embutido variado Pequeño",
        "category_ids": [
            "77f4e454-e58b-4c22-8237-6d6924cd812d"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f1ac03ae-b110-42e6-aec6-2902617f4e10",
                "price_type": "VARIABLE",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "77f4e454-e58b-4c22-8237-6d6924cd812d",
        "unit_id": "each.each",
        "sell_online": false
    },
    {
        "item_id": "3b9bbd78-d50a-4ce0-853f-d2c8675d9a2b",
        "name": "Estrella galicia",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_34N18F0DMV8R0VBV0HX35DJ3GN"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "55415611-e157-4851-9e88-b77e97272f72",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "f78b93f7-daf1-46ba-b05f-9d0791738cc6",
        "name": "Estrella Galicia mini",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5CDDR9T3W28VTA3TNS578HA547"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "746326dd-017c-42bb-8e48-5ca4044fbdea",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "7c2544b6-7666-40df-bcbd-76fbffdc2951",
        "name": "Fanta",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0KVETGZEBZ988VN3NFWVV76885"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "cd2029c3-1e38-4817-9ce5-35fea3f82b85",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Limón "
            },
            {
                "variant_id": "ecaeeff4-bd09-4aa5-b890-e2ab95858bbb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Naranja"
            },
            {
                "variant_id": "1a87e956-426a-4522-aef7-8b9e6c5786ca",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Lata naranja"
            },
            {
                "variant_id": "09dcdda5-cac8-45ad-a152-fbdc0833e5bc",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Lata naranja 0"
            }
        ],
        "variants_count": 4,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "274a46e1-9fb2-4101-9a6b-8b58c4d3d37c",
        "name": "Frangelico",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_6NY7EYFKTK8FSTSANYN59H8G94"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "9ca1348e-08c0-4994-947e-5a772da5f92b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "aa267516-45f6-40a0-8add-06defa65513c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "1a4d8076-fcb4-45f9-bd3d-83174390c890",
        "name": "Gordon's",
        "category_ids": [
            "f5b37c7c-c84f-471e-8f03-3b2afbf7c956"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1CKCBBWDCF9ERBWK8Y6PC6YSJV"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0cfacb7e-0e60-4153-aea2-184ebb88b6bb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "b109c902-4a45-411f-88bd-3659cf8a5c21",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "93b30906-c453-4c03-8633-268a6fffb5bb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "b1c5c6b8-0d6f-4697-9847-5181c42b32d2",
        "name": "Gran Duque D'Alba",
        "category_ids": [
            "09614781-40ad-42ec-b7d9-743fe32cd5c5"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1543CJ67VJ93J9E6FNHCJBYH7R"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f85f02d0-ea29-42f0-a0ff-cc14db469b26",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "36dd0bbe-aad6-4bdb-9c5d-811e415da6ac",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 413
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "77761838-443e-4f0a-9dff-c0a1c127a2f9",
        "name": "Guayaba",
        "category_ids": [
            "671790c1-3550-46fd-bd6a-88b03b33b87b"
        ],
        "image_urls": [
            "https://images.sumup.com/img_2FXQ8HPP858KYR6Y63RBADB5C4"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "7f2db7c2-4e1d-410e-a43d-4e9521c61b04",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "671790c1-3550-46fd-bd6a-88b03b33b87b",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "5eb6cfb5-66d7-4444-93df-c6ae0ab03622",
        "name": "Habana club 3",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3BRA2BTQDJ8GBR10FGWA5A046Q"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "9942602a-0d6e-4d0e-9f19-ed89a053895a",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "3084fa3f-0740-43c2-afc7-6acb10039cff",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "6975fafa-6ea1-474c-b7a3-29c1f6bb5ffa",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "808f6f2e-1a4f-4a64-aa45-3fda12ad4e5b",
        "name": "Habana Club 5",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_66A1KDZP3S83N8P0YPFNXPMH0B"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d3bafa7a-3438-4d3f-98e5-ef7bcdd00ec5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "e4f0b59c-5ce4-416d-937f-4fd474613316",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "a0e65381-2c83-4849-8af0-5fba0a66f315",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "11f3f90d-06c6-473b-aecd-ee03c6305799",
        "name": "Habana club 7",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0WV1JF1DFF8W0VPBPY7VYDA0DA",
            "https://images.sumup.com/img_667S1QMR6G82CRK30BV87SCTZ5"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "70b0da75-0afc-42fd-9168-56e7fd572d41",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "0f77d098-c605-4735-9597-97cb8a53f2bc",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "4a503fe9-6f95-4372-a7db-fb632df3a5fa",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "b5940639-5bea-46e8-aac7-caf42b82bfd2",
        "name": "Heineken",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1MPE7831S69JMV0XRXPNCDJ0RT"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "e8788233-a04d-4040-940c-8f9697cec9bb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "44bea227-afd6-4909-bdd8-6b146e4e9c65",
        "name": "Infusion frutos del bosque",
        "category_ids": [
            "c401cc02-a403-4111-92a4-404dee62af7a"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1WMD5GWTBM9HQ99FDDDRPCRXCZ"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "9db8b96c-f978-4744-bd79-9c41c9cdb6b1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "c401cc02-a403-4111-92a4-404dee62af7a",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "025000d8-5f10-4177-8638-4026f32a90e9",
        "name": "Jägermeister",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_6TM639B93C90JR6K2B6NSW69AC"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d5d8cdb7-5fa5-4a14-a5c4-7254b65939d5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "1daa9384-e352-46d9-8700-229df0fb8879",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 289
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "b0a147ed-7772-4b13-a0cc-043cacd7029d",
        "name": "Jamón Serrano",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "a645d38f-043c-45c8-95af-4013067b5683",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "de507e5a-aeec-427f-8720-d1f5adbda09a",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "2d969c77-5ea2-4fc7-82bc-478cc60ef57a",
        "name": "Jamón serrano con queso",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "fde7b695-eaea-4fc1-a673-16427b6a2d63",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "cf28452e-f819-4bc8-aeb7-a837a62389b4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "60bf5e98-7c43-4d0a-8ebc-9304000bffce",
        "name": "Jamón York",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0619abfc-a82e-41fc-aedd-cee596438c99",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "ecfd3dd9-3414-405e-ae56-0a0bc5091cc1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "81a79da9-1aa5-4608-bc95-9ac293bae161",
        "name": "Jamón York con queso",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "99f3b29e-8bf1-44f6-b4c6-ee7736f8cab4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "46d01f5e-106d-4d1f-8e70-e206bd792d5b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "ab6dbeb7-47cc-4256-b7ea-5f35a8287a28",
        "name": "JB",
        "category_ids": [
            "d44f2522-9d9c-4f17-a26c-fa6cac38fe35"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7Y5H42NSW88Z3V817KKA94VMHP"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "7e2ad570-dcf2-4d49-b760-7d98bbf2547b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "58e99458-8ed0-47a3-b717-8379ac3fd58f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "a8cb4bf7-7154-469e-ad8e-d0dc4456d939",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "759a2b50-a429-4844-9c58-9a8bcd02c4fe",
        "name": "Johnnie Walker et. Negra",
        "category_ids": [
            "d44f2522-9d9c-4f17-a26c-fa6cac38fe35"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7MNDHZGKDQ9K4TC289N27EVP9S"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "e8bdd1d1-1db7-4d81-ba88-9f2ff8735d95",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "43e1e204-5968-464e-8d58-b6ffbff9c489",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "d427c2e1-9c02-4a8b-a0b6-63e2034a3eae",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "1efdd760-3bf0-4398-be94-1662e4c973ef",
        "name": "Johnnie Walker et. Roja",
        "category_ids": [
            "d44f2522-9d9c-4f17-a26c-fa6cac38fe35"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7H72ZQM3VE9XZB7892KEN14DNN"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "7eb6a250-4abd-4997-9bcf-74eb221aa727",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "8634d101-fd9d-4737-8b09-1a3b112b83c4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "f9e63535-10de-43c6-a850-50b4b5c4c25b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "d44f2522-9d9c-4f17-a26c-fa6cac38fe35",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "cb6e3069-d9e4-4b97-946f-04e9abbd3ba8",
        "name": "José Cuervo",
        "category_ids": [
            "e759e875-cf4b-4ff4-b045-054c1efee417"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "c49041df-e2e4-4642-9ea1-f4b602736aab",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "eebed592-bbfb-4932-bd88-911882a9318f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "e759e875-cf4b-4ff4-b045-054c1efee417",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "4110f16c-1e0d-40d9-83d3-9da6117d8657",
        "name": "Keller",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0D9XYFFAZ78Y5T5NJ6JPT59A8B"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5f12eefb-2895-4674-9a3b-bda139c87790",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "708bc056-b612-4bbf-858c-c3b7c72a79b5",
        "name": "Lomo adobado",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "e867ac0e-db41-422b-85e5-ffac5aefb12a",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "bbfa3306-7d2a-42db-8d64-9edc15b8a054",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "3390bd2e-fc54-47bb-a3c8-ae4a0c7d8c5c",
        "name": "Lomo ibérico",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "ee792b67-ac8e-41ce-8320-ab92ce41d165",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "fec600cf-e367-45d9-b170-c120a233403f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "fec77751-0540-470e-a25c-a26849cdac1f",
        "name": "Lomo ibérico con queso",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "9cfb3350-12c1-4f43-80fa-28cc320e05b1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 550
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 550
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 550
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "8e76abcf-fda2-49e9-b4bb-4716ed0c9ce1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "efbc51e2-42ef-430f-8707-de0f4d539e58",
        "name": "Magno",
        "category_ids": [
            "09614781-40ad-42ec-b7d9-743fe32cd5c5"
        ],
        "image_urls": [
            "https://images.sumup.com/img_6GHJ38H59K9VFV1ZVH4FZZFY3T"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0eaebcab-4eee-4abc-b2c5-2eaab7e11bf1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "fb84f51c-7760-4b4b-bfa6-c818bff81b3c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "d8a1d399-8c36-412b-88fc-13fb947e9152",
        "name": "Mango",
        "category_ids": [
            "671790c1-3550-46fd-bd6a-88b03b33b87b"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5J4MC5Y87Q9019PZEC2HVW2CBB"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "dfa5c639-f2e8-46d2-ab68-ab3be49949d0",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "671790c1-3550-46fd-bd6a-88b03b33b87b",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "5bbac365-5772-4887-a562-afb5cc7b4fb6",
        "name": "Manzanilla",
        "category_ids": [
            "752714ec-dcbf-4db0-86da-249a82ff6259"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "e95589dc-a41d-43af-a9b8-2d19f36cfaff",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "752714ec-dcbf-4db0-86da-249a82ff6259",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "f8c0431a-f649-47d6-8e73-87ff239ea799",
        "name": "Marie Blizzard",
        "category_ids": [
            "d50c192e-3406-48ad-9091-7d3201d91c1c"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5CPQJC0VGA8AN835T184QVBVX3"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "60d990f5-0459-4761-ba26-d6429eb793e0",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "59336937-d2ee-45a7-b8a3-addc3d15f05b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 289
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "d50c192e-3406-48ad-9091-7d3201d91c1c",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "ec64c30e-5cec-4127-98fe-3d3923967ce8",
        "name": "Marqués de Turia",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7P9JWB0W6P93T9VSFJHQKRM7DZ"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5e104105-4af5-4736-9ace-c8c4efebc6ca",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "fe9c803a-ddb7-4668-8a85-05f2e7de9cdb",
        "name": "Martini Bianco",
        "category_ids": [
            "350df0e5-1fc2-4397-900e-03c6af6c4065"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5R4DZNRZ8T8XX927DZ4NV4RBW9"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "e925012d-a642-495b-bda1-fbff303a9a21",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "350df0e5-1fc2-4397-900e-03c6af6c4065",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "cad8502f-df1b-4542-96ea-ba1c058f9b0e",
        "name": "Martini Rojo",
        "category_ids": [
            "350df0e5-1fc2-4397-900e-03c6af6c4065"
        ],
        "image_urls": [
            "https://images.sumup.com/img_058HG1HAJQ8A3VEQ5EMMVTYQEX"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "53dde8ce-cbf9-4350-8229-0c98cebbc52f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "350df0e5-1fc2-4397-900e-03c6af6c4065",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "2c059555-9c8c-4565-8772-76ed8a73324c",
        "name": "Melocotón ",
        "category_ids": [
            "671790c1-3550-46fd-bd6a-88b03b33b87b"
        ],
        "image_urls": [
            "https://images.sumup.com/img_02CWA7VWA29GFBZ8MWCZPKFWX2"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f38a99f7-cf1a-4213-b275-7a0b1f1df21e",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "671790c1-3550-46fd-bd6a-88b03b33b87b",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "28863fc2-df5e-4291-956f-ac67004f583b",
        "name": "Menta poleo",
        "category_ids": [
            "752714ec-dcbf-4db0-86da-249a82ff6259"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3WHGTBYA4D9VFVYTC9V21D5A4C"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "3e77bb61-7ce6-4236-8c38-61fbb0c07273",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "752714ec-dcbf-4db0-86da-249a82ff6259",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "057f3114-ecd4-4076-b7aa-344b49e82de0",
        "name": "Natural Naranja",
        "category_ids": [
            "671790c1-3550-46fd-bd6a-88b03b33b87b"
        ],
        "image_urls": [
            "https://images.sumup.com/img_354T2DY4NZ8S6VX4PNYT6HYF4Q"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f9111066-ec00-496a-9648-de34a0a4ce1f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "671790c1-3550-46fd-bd6a-88b03b33b87b",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "472cd3fd-c567-4291-99cd-e62916eac982",
        "name": "Nestea",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5H06N5T26P8NA88HJRJH94W06Q"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "aa6efd4d-7418-4d03-8009-0ac3ab608ea5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Mango piña"
            },
            {
                "variant_id": "6bfa2182-787f-49ca-a5e1-cce978b9ae2f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 160
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Maracuyá"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "c5b071a7-59d6-40b6-a7bd-ddd60d0575d4",
        "name": "Pan",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [
            "https://images.sumup.com/img_105G5C36V58VWSQ327HXE6S8WW"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "fc4002dc-d784-4dba-a401-1442eec98252",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 60
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 60
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 60
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "9d5e042b-5139-417a-9084-c7940a42e9c3",
        "name": "Pata Asada",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "48ad481a-380a-4d94-964e-cba93de1893c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "ea214bd7-1096-4bd5-b521-15cf5ad09926",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "21a490f7-1e85-4c5b-850b-4b1db8f3c5b9",
        "name": "Pata Asada, queso y tomate",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "63def28d-207a-4f55-a85a-bf6ea822f29f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "0eadf1d5-ef83-4411-8223-4c3056cc60fd",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "6dd7712f-f26d-42cd-a8c1-e8f59844d277",
        "name": "Patxaran Zoco",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3KF6ZKR4S484D94FCRTFXR829H"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "22fedd3b-6ac4-4c78-a61f-f169aed48153",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "1d4052fe-ff2e-4119-8328-03bac51bc3dd",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "36ca48f6-9f77-486e-b20b-cfc1ce5f728b",
        "name": "Pera piña",
        "category_ids": [
            "671790c1-3550-46fd-bd6a-88b03b33b87b"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7HADWXVGAR98TBPAVDETYX4H1J"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f6d54149-94d0-4db1-820b-5cf2f5786d98",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "671790c1-3550-46fd-bd6a-88b03b33b87b",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "823f6afe-deb2-4d83-9d9b-8b5db93ae24e",
        "name": "Pollo",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "b9ff0b43-3df6-4a74-95a5-23fd0e32ae50",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "46ceb321-c5b1-40ac-85d6-1a82d6ea19c8",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "5d72f288-5632-43ea-a84e-b8a70ae57c49",
        "name": "Ponche Caballero",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0KEJCE0J1D8HGVGRCG8QFET8BF"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "086f1f2a-23dd-43dd-8d4c-594d000befe6",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "7f27d819-c3be-4d54-ad89-bba42902b568",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 207
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "3af4131a-5349-411a-8e6e-8e8983b1dbb3",
        "name": "Puros",
        "category_ids": [
            "773a37d5-1735-4c10-bd5c-d2cfa7188681"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "c1324e67-389d-4ed4-a879-399b25920ca1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Grande"
            },
            {
                "variant_id": "54c1e40b-5ce5-4461-ae3a-667edbd8cf71",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 30
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 30
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 30
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Señorita"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "773a37d5-1735-4c10-bd5c-d2cfa7188681",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "743dbf8a-84b0-41d7-89c5-ec4e95284cee",
        "name": "Queso",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "386d4562-b49a-4a72-81c0-602d3e17aef4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "14ebf14d-6c81-4a66-9e9a-9565ec19057d",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "bfaa4cc3-4786-4313-a18d-f4466a5bc942",
        "name": "Red Bull",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_6MGZ18V975967VRZC40TV38R2W"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "23f65469-78a2-457a-b699-df95de4a2b71",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "75b0481e-9f58-4947-8bf4-d401404e9f9e",
        "name": "Ron Caramelo ",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_3NEMMRMB4K96HVZ511T98KH6HM"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "ee56b199-d0ea-4b31-92e4-10f1ccfdb628",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "38b099af-90a9-42a2-96aa-07916d14fd7f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "1f9bb16f-07e6-491b-b285-31e45b3a0696",
        "name": "Ronmiel",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_33GYRHM94G8NV9H3ZHA71SA704"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "00f785bb-69e6-4862-bd3f-84c770ff419d",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "09633f2d-7776-4fbd-975a-1e00dff34f53",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 207
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "9dae61ff-4c37-484d-ac04-772c8fa97af3",
        "name": "Rooibos",
        "category_ids": [
            "752714ec-dcbf-4db0-86da-249a82ff6259"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5BKNN9GE1H97KAGSCBT8XA42Q7"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5d778ad6-cb44-43e3-86e7-116895080228",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "752714ec-dcbf-4db0-86da-249a82ff6259",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "6a5b773a-013a-4432-83e6-ef0d94280f6f",
        "name": "Royal Bliss",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_77WTK2X47A85RRFJ585N4P76YR"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "71cb608b-de74-4f64-be7c-12dfb9c99698",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Tónica "
            },
            {
                "variant_id": "d9684700-6070-4a21-a800-b7a96a4fd741",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "De limón"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "a562183d-5afb-46e2-aaac-654b32bac593",
        "name": "Ruavieja Crema",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_571Q90PZHN83Z8J0WPHGCCKNHT"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f3cab101-e0e0-4df1-aff8-3ffa7ededd9c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "f0543d32-db4b-4e39-b61a-8df7e7f6432c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "f5feebcc-a6c8-4372-b93e-e1dcde44b366",
        "name": "Ruavieja Licor de hierbas",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_4DH0F5FTT99ZC874A7XE5HZ3GH"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "12218208-6e4e-4c02-8a03-9fb57b326fb8",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "c0027167-5a8f-4f57-bdba-70de29a6d29f",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "9898e593-53b5-417f-adc9-818ca1bea7d2",
        "name": "Salami",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "8d0ad059-43e2-454b-b117-575309dae387",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero "
            },
            {
                "variant_id": "4238a03c-9d41-4885-a69d-87bd5fc4885b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "e4086862-2699-4f3b-970f-d6a55abe7e57",
        "name": "Salami con queso",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f473ca75-2c37-42c1-a017-f174d8d7ed7d",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero "
            },
            {
                "variant_id": "553165f9-b7c4-4d9d-b261-9ccc0018ce45",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "a604640c-8386-4af2-8a19-1a9053b53ee3",
        "name": "Salchichón Ibérico",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "c783c5c1-1fea-4aa8-a1e7-cbfe85063dc4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "99d549a2-8d99-487b-8401-afa7e1b4c360",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "93d618b1-141a-44ee-a58d-bcb52c410de0",
        "name": "Salchichón ibérico con queso",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "828f87af-3cd3-4413-b9c3-b0e7df90ecaf",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero"
            },
            {
                "variant_id": "119bdd86-5825-4b51-b70f-7d23bd6d57d3",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "f6a6cb80-a69d-454c-a36c-dcc511d1e9a6",
        "name": "Sandwich variados",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5c2e04c0-4d41-486a-9391-8825dc51857c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "44497c69-5571-4e85-afa3-b373db0173a3",
        "name": "Santa Teresa",
        "category_ids": [
            "4da55cd0-26a4-42e4-b747-e0044a0536aa"
        ],
        "image_urls": [
            "https://images.sumup.com/img_75M6AF2AQG9589KTDPV0WDV7Z1"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "c87a73d2-c231-4c61-a388-7a1156552aa8",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "fa06269b-aa46-41f1-9d59-4373dde43a4c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 360
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "3003da5f-970f-4f44-b375-302c27d9f0f0",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "4da55cd0-26a4-42e4-b747-e0044a0536aa",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "338f508f-cec9-4ff8-8132-35588c3fcf14",
        "name": "Seagram's",
        "category_ids": [
            "f5b37c7c-c84f-471e-8f03-3b2afbf7c956"
        ],
        "image_urls": [
            "https://images.sumup.com/img_15DHYR9KAQ9009P42G9AQ2D1BH"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5b7fe4c7-8e1f-4f80-8500-a5a4b3f6ceaf",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "fc820957-4bb8-40f2-978a-617cae2c1998",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 372
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 450
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "d958e7c2-ab1a-49ea-bb1e-c5dc3cee7f73",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 289
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "2384bdd4-c0d5-411b-b7a1-eeab1209ed39",
        "name": "SevenUp",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7EG14QC5E79QPSAE8BNJ1JZ7C8"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d0851f22-fa8a-466f-a484-fb8357d4e5ee",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "70d31033-6b99-4ec0-9714-36837c57df6e",
        "name": "Tanquery",
        "category_ids": [
            "f5b37c7c-c84f-471e-8f03-3b2afbf7c956"
        ],
        "image_urls": [
            "https://images.sumup.com/img_59ZQNGBRC08NNBZ7JM1VBRNGW8"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "f91103dc-8e78-4bde-89cb-37c6030aeed5",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 207
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "c559b05a-af10-40aa-999c-610b9d753f52",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 413
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 500
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Combinados"
            },
            {
                "variant_id": "03d4bba2-8894-4945-8bd3-028202bfa94c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 289
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "f5b37c7c-c84f-471e-8f03-3b2afbf7c956",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "c5e6670e-50eb-4985-86ac-3df5767a3ead",
        "name": "Tapa de almogrote",
        "category_ids": [
            "77f4e454-e58b-4c22-8237-6d6924cd812d"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "1070080f-9455-4bff-9eee-347c6cb43ff9",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Grande"
            },
            {
                "variant_id": "71b2961c-f9e6-4d03-a3b0-569d6e0c1239",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Media"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "77f4e454-e58b-4c22-8237-6d6924cd812d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "ea274145-05c9-4640-8195-6e17d706a1c1",
        "name": "Tapa tortilla ",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "195aa9a4-d364-47ee-b570-711aa5f2a89c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "3bb7b5be-4688-4401-868b-7590d8034dfa",
        "name": "Te",
        "category_ids": [
            "752714ec-dcbf-4db0-86da-249a82ff6259"
        ],
        "image_urls": [
            "https://images.sumup.com/img_122VW1TN0J9E6SWF7N51DK38DE"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "362c7d6f-3764-490e-a1ec-9440fa686255",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            },
            {
                "variant_id": "f68802d7-7634-4725-8806-57a6813a1c0e",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Verde"
            },
            {
                "variant_id": "76c3bf57-1c8f-4d32-a022-4676c466e2c1",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Rojo"
            },
            {
                "variant_id": "0f58e1e1-8f3c-474e-b834-cbc8feb7d0cc",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Negro"
            }
        ],
        "variants_count": 4,
        "description": "",
        "reporting_category_id": "752714ec-dcbf-4db0-86da-249a82ff6259",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "42117574-35f3-4b53-9ec3-68d917b70369",
        "name": "Tía María ",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0CPSAQ7HR3883RBZ4E2TPPHVV7"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "2610afd7-ef65-45ee-b5e4-2fd5fc2e615b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 165
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "49d3cb05-d827-4b0e-bde1-bc3e073785eb",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 289
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 350
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "eee906f2-fd7c-4fed-81fd-27d96a9613ee",
        "name": "Tila",
        "category_ids": [
            "752714ec-dcbf-4db0-86da-249a82ff6259"
        ],
        "image_urls": [
            "https://images.sumup.com/img_0RT0CYPD2X8TN8DBT1V8FYKA0Y"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "ea249e4f-9797-4a60-95a4-51d05aa266fe",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "752714ec-dcbf-4db0-86da-249a82ff6259",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "596c316c-e3fd-46c8-b8ca-b110939dd83f",
        "name": "Tinto Verano",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_2SSHK5HW349B29MA6KAE457DRQ",
            "https://images.sumup.com/img_0GSFQGK9KX9DGAT5TBG02RQP30"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "2d42abad-04e8-41e7-bfa1-d1d64706e293",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Grifo"
            },
            {
                "variant_id": "e877f2fa-3b64-4418-a09b-d5423bfe5c94",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 200
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Botella"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "96b626b0-b9a1-43d7-b86d-79cfc1b4b00f",
        "name": "Tónica Schweppes",
        "category_ids": [
            "8c762215-9c50-4f6e-aae2-28e748de77ce"
        ],
        "image_urls": [
            "https://images.sumup.com/img_31DBP78HX69CBV194NC6DMS2TY"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "fd8e2db1-8cdc-4309-820b-0ebc73c2a626",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Tónica"
            },
            {
                "variant_id": "7481d703-0ba2-4997-8589-d0ea9ec6e2b7",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "De limón"
            },
            {
                "variant_id": "db04d3bd-6bb9-4a7f-9e54-641b511d112c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 140
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Lata naranja zero"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "8c762215-9c50-4f6e-aae2-28e748de77ce",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "9b6274c4-b461-4e95-a420-eac32920daee",
        "name": "Torre tallada",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1K8Z1S9GR29H7RYF7QDG4K8221"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "d055575e-fb39-4160-8df0-46498f5d1a0a",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "e0411108-2cd5-4aa0-81bf-d08d1fc5c49d",
        "name": "Tortilla",
        "category_ids": [
            "712594ad-1032-4842-b8cc-59dd15f70768"
        ],
        "image_urls": [],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0018d325-cfb8-41c7-9034-9d342d1bd5b4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 400
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Entero "
            },
            {
                "variant_id": "4766ed88-f2a5-4cc9-b656-acb41bfff252",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Medio"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "712594ad-1032-4842-b8cc-59dd15f70768",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "19300bc2-dcf7-44ca-bb94-b93956faf963",
        "name": "Veterano",
        "category_ids": [
            "09614781-40ad-42ec-b7d9-743fe32cd5c5"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1J87N2XANM9FFVQDXMHRR290HD"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "5e417bf2-694c-490f-9d11-80c8f3900295",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "f4b70017-61c6-4a4d-b975-851e41906337",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 250
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "09614781-40ad-42ec-b7d9-743fe32cd5c5",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "c2625a23-3606-4505-afb3-eab7fbb5be0f",
        "name": "Victoria",
        "category_ids": [
            "e5c18a17-afa6-4a94-b55b-00d798168af0"
        ],
        "image_urls": [
            "https://images.sumup.com/img_4ZMTJ67A86876819FG92HSYN1N"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "589a169b-0f09-404c-a3ed-8d0188954fd4",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Normal"
            },
            {
                "variant_id": "bfe84323-f976-43c5-9b23-92f0020263bf",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "0.0"
            },
            {
                "variant_id": "7c1f33d3-b5ef-4d98-8de6-1b8e92cfe198",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 120
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Lata"
            }
        ],
        "variants_count": 3,
        "description": "",
        "reporting_category_id": "e5c18a17-afa6-4a94-b55b-00d798168af0",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "320a616a-584c-4ee6-9fb1-c5b9a65a6a75",
        "name": "Viore",
        "category_ids": [
            "ccf14ca7-b26f-4392-b015-bb7c2a433928"
        ],
        "image_urls": [
            "https://images.sumup.com/img_7RRXATKSWT8S99PR35GW0VDFW5"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "32256655-8989-44c0-b355-d035d9abac41",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": ""
            }
        ],
        "variants_count": 1,
        "description": "",
        "reporting_category_id": "ccf14ca7-b26f-4392-b015-bb7c2a433928",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "96e66f88-1ada-420c-9212-024955f13048",
        "name": "Vodka Caramelo",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_1VSH6VXBQE9NMRG9QTSW399KS4"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "908a87e6-7b8f-4997-b4f9-20ebaacecc0c",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "c28c174f-d629-4d74-bf26-58b6f8220aa0",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    },
    {
        "item_id": "1a5cbbc7-9980-4c90-9599-4f4ecd9faa57",
        "name": "Vodka Pomelo",
        "category_ids": [
            "aeca112e-9718-4612-80a3-544609c01f0d"
        ],
        "image_urls": [
            "https://images.sumup.com/img_5PXTM50SX09FM9Z73DB4EYDH8P"
        ],
        "options": [],
        "type": "ITEM",
        "variants": [
            {
                "variant_id": "0257d49c-125a-4af5-9258-8b86ce4069f7",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 124
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 150
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Chupito"
            },
            {
                "variant_id": "d535094c-afd6-4676-b012-1c85eaed2a5b",
                "price_type": "FIXED",
                "price": {
                    "amount": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "amount_net": {
                        "currency": "EUR",
                        "value": 248
                    },
                    "amount_gross": {
                        "currency": "EUR",
                        "value": 300
                    },
                    "tax_included": true
                },
                "options": [],
                "name": "Copa"
            }
        ],
        "variants_count": 2,
        "description": "",
        "reporting_category_id": "aeca112e-9718-4612-80a3-544609c01f0d",
        "unit_id": "each.each",
        "sell_online": true
    }
];
