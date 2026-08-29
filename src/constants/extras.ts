export type Extra = {
    category_id: string;
    extras: {
        modifier_id: string;
        name: string;
        price: number;
    }[];
};

export const EXTRAS: Extra[] = [
    {
        category_id: "712594ad-1032-4842-b8cc-59dd15f70768",
        extras: [
            {
                modifier_id: "c3e94f41-c06c-4cef-8edf-832ab8d8509e",
                name: "Aguacate",
                price: 50,
            },
            {
                modifier_id: "031bc5d7-ff9b-417b-9ac2-361cd24b1a19",
                name: "Extra de embutido",
                price: 50,
            },
            {
                modifier_id: "02bbf75c-88db-4103-9c6d-d76d7cbe7b75",
                name: "Queso",
                price: 50,
            },
            {
                modifier_id: "345f61b7-bbcb-4d95-99cb-6b456e18ea6e",
                name: "Tabasco",
                price: 20,
            },
            {
                modifier_id: "08eb227f-ea17-4c12-b7fe-92c242b53265",
                name: "Tomate",
                price: 20,
            }
        ]
    },
    {
        category_id: "77f4e454-e58b-4c22-8237-6d6924cd812d",
        extras: [
            {
                modifier_id: "f1274fe3-7631-42e2-b044-1d607545a34d",
                name: "Pan",
                price: 100,
            },
        ]
    },
];