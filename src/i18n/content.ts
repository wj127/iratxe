import type { Category } from '../constants/categories';
import type { Item } from '../constants/items';
import { normalizeText } from '../utils/helpers';
import { resolveStringsLocale, type LocaleCode, type StringsLocale } from './config';

type CategoryStrings = { name: string; heading: string; subtitle: string };

type LocalizedCategoryFields = Pick<Category, 'category_id' | 'name' | 'heading' | 'subtitle'>;

// Categories include an `es` entry so the default locale gets Spanish subtitles
// (the base data mixes Spanish names with English subtitles).
const CATEGORY_TRANSLATIONS: Record<string, Partial<Record<StringsLocale, CategoryStrings>>> = {
  'd50c192e-3406-48ad-9091-7d3201d91c1c': {
    es: { name: 'Anís', heading: 'Anises y Licores', subtitle: 'Anisados de hierbas y licores dulces de la estantería del bar.' },
    en: { name: 'Anisette', heading: 'Anisettes & Liqueurs', subtitle: 'Herbal anisettes and sweet liqueurs from the bar shelf.' },
    eu: { name: 'Anisa', heading: 'Anisak eta Likoreak', subtitle: 'Belar-anisak eta likore gozoak barrako apaletik.' },
    fr: { name: 'Anisette', heading: 'Anisettes et liqueurs', subtitle: "Anisettes aux herbes et liqueurs douces de l'étagère du bar." },
    it: { name: 'Anice', heading: 'Anici e liquori', subtitle: 'Anaci alle erbe e liquori dolci dallo scaffale del bar.' },
    de: { name: 'Anis', heading: 'Anis & Liköre', subtitle: 'Kräuter-Anis und süße Liköre aus dem Barregal.' },
  },
  'f5b37c7c-c84f-471e-8f03-3b2afbf7c956': {
    es: { name: 'Ginebras', heading: 'Ginebras y Botánicos', subtitle: 'Ginebras London dry, mediterráneas y españolas para copas y combinados.' },
    en: { name: 'Gins', heading: 'Gins & Botanicals', subtitle: 'London dry, Mediterranean, and Spanish gins for copas and combinados.' },
    eu: { name: 'Ginak', heading: 'Ginak eta Botanikoak', subtitle: 'London dry, Mediterraneoko eta Espainiako ginak kopa eta konbinatuetarako.' },
    fr: { name: 'Gins', heading: 'Gins et botaniques', subtitle: 'Gins London dry, méditerranéens et espagnols pour verres et cocktails.' },
    it: { name: 'Gin', heading: 'Gin e botaniche', subtitle: 'Gin London dry, mediterranei e spagnoli per bicchieri e cocktail.' },
    de: { name: 'Gin', heading: 'Gins & Botanicals', subtitle: 'London Dry, mediterrane und spanische Gins für Gläser und Longdrinks.' },
  },
  '8c762215-9c50-4f6e-aae2-28e748de77ce': {
    es: { name: 'Refrescos', heading: 'Refrescos', subtitle: 'Refrescos clásicos y mezcladores para acompañar cualquier ronda.' },
    en: { name: 'Soft drinks', heading: 'Soft Drinks', subtitle: 'Classic sodas and mixers to pair with any round.' },
    eu: { name: 'Freskagarriak', heading: 'Freskagarriak', subtitle: 'Freskagarri klasikoak eta nahasgarriak edozein txandarekin.' },
    fr: { name: 'Sodas', heading: 'Sodas', subtitle: 'Sodas classiques et mélangeurs pour accompagner chaque tournée.' },
    it: { name: 'Bibite', heading: 'Bibite', subtitle: 'Bibite classiche e miscelatori per accompagnare ogni giro.' },
    de: { name: 'Erfrischungsgetränke', heading: 'Erfrischungsgetränke', subtitle: 'Klassische Limonaden und Filler für jede Runde.' },
  },
  '752714ec-dcbf-4db0-86da-249a82ff6259': {
    es: { name: 'Infusiones', heading: 'Tés e Infusiones', subtitle: 'Infusiones calientes para una tarde tranquila en el bar.' },
    en: { name: 'Infusions', heading: 'Teas & Infusions', subtitle: 'Hot infusions for a slower afternoon at the bar.' },
    eu: { name: 'Infusioak', heading: 'Teak eta Infusioak', subtitle: 'Infusio beroak barrako arratsalde lasairako.' },
    fr: { name: 'Infusions', heading: 'Thés et infusions', subtitle: 'Infusions chaudes pour un après-midi tranquille au bar.' },
    it: { name: 'Infusi', heading: 'Tè e infusi', subtitle: 'Infusi caldi per un pomeriggio tranquillo al bar.' },
    de: { name: 'Aufgüsse', heading: 'Tees & Aufgüsse', subtitle: 'Heiße Aufgüsse für einen ruhigen Nachmittag an der Bar.' },
  },
  '671790c1-3550-46fd-bd6a-88b03b33b87b': {
    es: { name: 'Zumos', heading: 'Zumos Naturales', subtitle: 'Zumos frescos, solos o como mezcladores.' },
    en: { name: 'Juices', heading: 'Fresh Juices', subtitle: 'Fresh juices, served as they are or as mixers.' },
    eu: { name: 'Zukuak', heading: 'Zuku Naturalak', subtitle: 'Zuku freskoak, bakarrik edo nahasgarri gisa.' },
    fr: { name: 'Jus', heading: 'Jus frais', subtitle: 'Jus frais, servis nature ou en mélange.' },
    it: { name: 'Succhi', heading: 'Succhi freschi', subtitle: 'Succhi freschi, serviti al naturale o come miscelatori.' },
    de: { name: 'Säfte', heading: 'Frische Säfte', subtitle: 'Frische Säfte, pur oder als Filler serviert.' },
  },
  'c401cc02-a403-4111-92a4-404dee62af7a': {
    es: { name: 'Cafés', heading: 'Cafés de Barra', subtitle: 'Espresso, cortados y el ritual del café de la casa.' },
    en: { name: 'Coffees', heading: 'Bar Coffees', subtitle: 'Espresso, cortados, and the house coffee ritual.' },
    eu: { name: 'Kafeak', heading: 'Barrako Kafeak', subtitle: 'Espressoa, ebakiak eta etxeko kafe-errituala.' },
    fr: { name: 'Cafés', heading: 'Cafés du comptoir', subtitle: 'Espresso, cortados et le rituel du café maison.' },
    it: { name: 'Caffè', heading: 'Caffè al banco', subtitle: 'Espresso, cortado e il rito del caffè della casa.' },
    de: { name: 'Kaffees', heading: 'Kaffee an der Theke', subtitle: 'Espresso, Cortados und das hauseigene Kaffee-Ritual.' },
  },
  '09614781-40ad-42ec-b7d9-743fe32cd5c5': {
    es: { name: 'Brandy', heading: 'Brandies y Coñacs', subtitle: 'Brandies españoles y coñacs clásicos para después de cenar.' },
    en: { name: 'Brandy', heading: 'Brandies & Cognacs', subtitle: 'Spanish brandies and classic cognacs for after dinner.' },
    eu: { name: 'Brandya', heading: 'Brandyak eta Koniakak', subtitle: 'Espainiako brandyak eta koniak klasikoak afalostetarako.' },
    fr: { name: 'Brandy', heading: 'Brandies et cognacs', subtitle: "Brandies espagnols et cognacs classiques pour l'après-dîner." },
    it: { name: 'Brandy', heading: 'Brandy e cognac', subtitle: 'Brandy spagnoli e cognac classici per il dopocena.' },
    de: { name: 'Brandy', heading: 'Brandys & Cognacs', subtitle: 'Spanische Brandys und klassische Cognacs für nach dem Essen.' },
  },
  '4da55cd0-26a4-42e4-b747-e0044a0536aa': {
    es: { name: 'Rones', heading: 'Rones del Caribe', subtitle: 'Rones blancos y añejos para tomar solos o mezclados.' },
    en: { name: 'Rums', heading: 'Caribbean Rums', subtitle: 'White and aged rums for sipping or mixing.' },
    eu: { name: 'Ronak', heading: 'Karibeko Ronak', subtitle: 'Ron zuriak eta zaharrak, bakarrik edo nahastuta hartzeko.' },
    fr: { name: 'Rhums', heading: 'Rhums des Caraïbes', subtitle: 'Rhums blancs et vieux à déguster seuls ou en cocktail.' },
    it: { name: 'Rum', heading: 'Rum caraibici', subtitle: 'Rum bianchi e invecchiati da bere lisci o miscelati.' },
    de: { name: 'Rum', heading: 'Karibische Rums', subtitle: 'Weiße und gereifte Rums pur oder gemixt.' },
  },
  '712594ad-1032-4842-b8cc-59dd15f70768': {
    es: { name: 'Bocadillos', heading: 'Bocadillos de la Casa', subtitle: 'Bocadillos contundentes en la tradición de la taberna vasca.' },
    en: { name: 'Sandwiches', heading: 'House Sandwiches', subtitle: 'Hearty sandwiches in the Basque tavern tradition.' },
    eu: { name: 'Ogitartekoak', heading: 'Etxeko Ogitartekoak', subtitle: 'Ogitarteko mamitsuak euskal tabernaren tradizioan.' },
    fr: { name: 'Sandwichs', heading: 'Sandwichs maison', subtitle: 'Sandwichs généreux dans la tradition des tavernes basques.' },
    it: { name: 'Panini', heading: 'Panini della casa', subtitle: 'Panini sostanziosi nella tradizione della taverna basca.' },
    de: { name: 'Sandwiches', heading: 'Hausgemachte Sandwiches', subtitle: 'Herzhafte Sandwiches in der baskischen Tavernentradition.' },
  },
  'ccf14ca7-b26f-4392-b015-bb7c2a433928': {
    es: { name: 'Vinos', heading: 'Vinos de Copa y Botella', subtitle: 'Una breve selección de tintos, blancos y vinos locales.' },
    en: { name: 'Wines', heading: 'Wines by Glass & Bottle', subtitle: 'A short list of reds, whites, and local pours.' },
    eu: { name: 'Ardoak', heading: 'Kopako eta Botilako Ardoak', subtitle: 'Ardo beltz, zuri eta bertakoen aukera laburra.' },
    fr: { name: 'Vins', heading: 'Vins au verre et en bouteille', subtitle: 'Une courte sélection de rouges, blancs et vins locaux.' },
    it: { name: 'Vini', heading: 'Vini al calice e in bottiglia', subtitle: 'Una breve selezione di rossi, bianchi e vini locali.' },
    de: { name: 'Weine', heading: 'Weine im Glas & in der Flasche', subtitle: 'Eine kurze Auswahl an Rot-, Weiß- und lokalen Weinen.' },
  },
  '773a37d5-1735-4c10-bd5c-d2cfa7188681': {
    es: { name: 'Otros', heading: 'Otros de la Barra', subtitle: 'Cosillas y extras de detrás de la barra.' },
    en: { name: 'Other', heading: 'Other from the Bar', subtitle: 'Odds and extras from behind the bar.' },
    eu: { name: 'Bestelakoak', heading: 'Barrako Bestelakoak', subtitle: 'Barra atzeko gauzatxoak eta gehigarriak.' },
    fr: { name: 'Autres', heading: 'Autres du bar', subtitle: 'Petites choses et extras de derrière le bar.' },
    it: { name: 'Altro', heading: 'Altro dal bancone', subtitle: 'Piccolezze ed extra da dietro il bancone.' },
    de: { name: 'Sonstiges', heading: 'Sonstiges von der Bar', subtitle: 'Kleinigkeiten und Extras hinter der Theke.' },
  },
  'e5c18a17-afa6-4a94-b55b-00d798168af0': {
    es: { name: 'Cervezas', heading: 'Nuestros Grifos y Botellas', subtitle: 'Selección de cervezas de barril de fábricas canarias e internacionales.' },
    en: { name: 'Beers', heading: 'Our Taps & Bottles', subtitle: 'Cold draught selections from Canary breweries and international stables.' },
    eu: { name: 'Garagardoak', heading: 'Gure Kanila eta Botilak', subtitle: 'Kanariar eta nazioarteko garagardotegietako upel-garagardoak.' },
    fr: { name: 'Bières', heading: 'Nos pressions et bouteilles', subtitle: 'Sélections de bières pression des brasseries canariennes et internationales.' },
    it: { name: 'Birre', heading: 'Le nostre spine e bottiglie', subtitle: 'Selezioni di birra alla spina da birrifici canari e internazionali.' },
    de: { name: 'Biere', heading: 'Unsere Zapfhähne & Flaschen', subtitle: 'Fassbier-Auswahl von kanarischen und internationalen Brauereien.' },
  },
  '77f4e454-e58b-4c22-8237-6d6924cd812d': {
    es: { name: 'Platos', heading: 'Platos para Compartir', subtitle: 'Platos calientes y raciones para compartir en la mesa.' },
    en: { name: 'Dishes', heading: 'Dishes to Share', subtitle: 'Hot dishes and plates to share at the table.' },
    eu: { name: 'Platerak', heading: 'Partekatzeko Platerak', subtitle: 'Plater beroak eta errazioak mahaian partekatzeko.' },
    fr: { name: 'Plats', heading: 'Plats à partager', subtitle: 'Plats chauds et assiettes à partager à table.' },
    it: { name: 'Piatti', heading: 'Piatti da condividere', subtitle: 'Piatti caldi e porzioni da condividere a tavola.' },
    de: { name: 'Gerichte', heading: 'Gerichte zum Teilen', subtitle: 'Warme Gerichte und Platten zum Teilen am Tisch.' },
  },
  '350df0e5-1fc2-4397-900e-03c6af6c4065': {
    es: { name: 'Aperitivos', heading: 'Aperitivos de la Casa', subtitle: 'Bocados ligeros y aperitivos para empezar la noche.' },
    en: { name: 'Aperitifs', heading: 'House Aperitifs', subtitle: 'Light bites and aperitif pours to start the evening.' },
    eu: { name: 'Aperitiboak', heading: 'Etxeko Aperitiboak', subtitle: 'Mokadu arinak eta aperitiboak gaua hasteko.' },
    fr: { name: 'Apéritifs', heading: 'Apéritifs maison', subtitle: 'Petites bouchées et apéritifs pour commencer la soirée.' },
    it: { name: 'Aperitivi', heading: 'Aperitivi della casa', subtitle: 'Stuzzichini leggeri e aperitivi per iniziare la serata.' },
    de: { name: 'Aperitifs', heading: 'Aperitifs des Hauses', subtitle: 'Kleine Häppchen und Aperitifs für den Abendbeginn.' },
  },
  'd44f2522-9d9c-4f17-a26c-fa6cac38fe35': {
    es: { name: 'Whisky', heading: 'Maltas y Blends Premium', subtitle: 'Nuestra selección de destilados escoceses, irlandeses y americanos.' },
    en: { name: 'Whiskey', heading: 'Premium Malts & Blends', subtitle: 'Our handpicked selection of Scottish, Irish, and American spirits.' },
    eu: { name: 'Whiskya', heading: 'Malta eta Blend Premiumak', subtitle: 'Eskoziar, irlandar eta amerikar destilatuen gure aukera.' },
    fr: { name: 'Whisky', heading: 'Malts et blends premium', subtitle: 'Notre sélection de spiritueux écossais, irlandais et américains.' },
    it: { name: 'Whisky', heading: 'Malti e blend premium', subtitle: 'La nostra selezione di distillati scozzesi, irlandesi e americani.' },
    de: { name: 'Whiskey', heading: 'Premium Malts & Blends', subtitle: 'Unsere handverlesene Auswahl schottischer, irischer und amerikanischer Spirituosen.' },
  },
};

// Food item names benefit from translation; drink brand names fall back to the
// Spanish base (no `es` entries needed here).
const ITEM_NAME_TRANSLATIONS: Record<string, Partial<Record<StringsLocale, string>>> = {
  'c803e14b-03bd-4ffd-9e36-f037e19ec474': { en: 'Bacon', eu: 'Hirugihar', fr: 'Bacon', it: 'Bacon', de: 'Speck' },
  'b0fb33a3-2598-42c5-bc3a-afe9fd65bf7d': { en: 'Iberian chorizo', eu: 'Chorizo Iberikoa', fr: 'Chorizo ibérique', it: 'Chorizo iberico', de: 'Iberischer Chorizo' },
  '70549c11-d4e2-43a5-a786-2b44b280a0cf': { en: 'Spicy chorizo', eu: 'Chorizo pikantea', fr: 'Chorizo piquant', it: 'Chorizo piccante', de: 'Scharfer Chorizo' },
  'b0a147ed-7772-4b13-a0cc-043cacd7029d': { en: 'Serrano ham', eu: 'Serrano urdaiazpikoa', fr: 'Jambon serrano', it: 'Prosciutto serrano', de: 'Serrano-Schinken' },
  '2d969c77-5ea2-4fc7-82bc-478cc60ef57a': { en: 'Serrano ham with cheese', eu: 'Serrano urdaiazpikoa gaztarekin', fr: 'Jambon serrano au fromage', it: 'Prosciutto serrano con formaggio', de: 'Serrano-Schinken mit Käse' },
  '60bf5e98-7c43-4d0a-8ebc-9304000bffce': { en: 'Cooked ham', eu: 'York urdaiazpikoa', fr: 'Jambon blanc', it: 'Prosciutto cotto', de: 'Kochschinken' },
  '81a79da9-1aa5-4608-bc95-9ac293bae161': { en: 'Cooked ham with cheese', eu: 'York urdaiazpikoa gaztarekin', fr: 'Jambon blanc au fromage', it: 'Prosciutto cotto con formaggio', de: 'Kochschinken mit Käse' },
  '708bc056-b612-4bbf-858c-c3b7c72a79b5': { en: 'Marinated pork loin', eu: 'Marinatutako txerri-solomoa', fr: 'Longe de porc marinée', it: 'Lombo di maiale marinato', de: 'Mariniertes Schweinefilet' },
  '3390bd2e-fc54-47bb-a3c8-ae4a0c7d8c5c': { en: 'Iberian pork loin', eu: 'Txerri-solomo iberikoa', fr: 'Longe de porc ibérique', it: 'Lombo di maiale iberico', de: 'Iberisches Schweinefilet' },
  'fec77751-0540-470e-a25c-a26849cdac1f': { en: 'Iberian pork loin with cheese', eu: 'Txerri-solomo iberikoa gaztarekin', fr: 'Longe de porc ibérique au fromage', it: 'Lombo di maiale iberico con formaggio', de: 'Iberisches Schweinefilet mit Käse' },
  'c5b071a7-59d6-40b6-a7bd-ddd60d0575d4': { en: 'Bread', eu: 'Ogia', fr: 'Pain', it: 'Pane', de: 'Brot' },
  '9d5e042b-5139-417a-9084-c7940a42e9c3': { en: 'Roast ham', eu: 'Erretako urdaiazpikoa', fr: 'Jambon rôti', it: 'Prosciutto arrosto', de: 'Gebratener Schinken' },
  '21a490f7-1e85-4c5b-850b-4b1db8f3c5b9': { en: 'Roast ham, cheese and tomato', eu: 'Erretako urdaiazpikoa, gazta eta tomatea', fr: 'Jambon rôti, fromage et tomate', it: 'Prosciutto arrosto, formaggio e pomodoro', de: 'Gebratener Schinken, Käse und Tomate' },
  '823f6afe-deb2-4d83-9d9b-8b5db93ae24e': { en: 'Chicken', eu: 'Oilaskoa', fr: 'Poulet', it: 'Pollo', de: 'Hähnchen' },
  '743dbf8a-84b0-41d7-89c5-ec4e95284cee': { en: 'Cheese', eu: 'Gazta', fr: 'Fromage', it: 'Formaggio', de: 'Käse' },
  '9898e593-53b5-417f-adc9-818ca1bea7d2': { en: 'Salami', eu: 'Salama', fr: 'Salami', it: 'Salame', de: 'Salami' },
  'e4086862-2699-4f3b-970f-d6a55abe7e57': { en: 'Salami with cheese', eu: 'Salama gaztarekin', fr: 'Salami au fromage', it: 'Salame con formaggio', de: 'Salami mit Käse' },
  'a604640c-8386-4af2-8a19-1a9053b53ee3': { en: 'Iberian salchichón', eu: 'Salchichón Iberikoa', fr: 'Salchichón ibérique', it: 'Salchichón iberico', de: 'Iberischer Salchichón' },
  '93d618b1-141a-44ee-a58d-bcb52c410de0': { en: 'Iberian salchichón with cheese', eu: 'Salchichón Iberikoa gaztarekin', fr: 'Salchichón ibérique au fromage', it: 'Salchichón iberico con formaggio', de: 'Iberischer Salchichón mit Käse' },
  'f6a6cb80-a69d-454c-a36c-dcc511d1e9a6': { en: 'Assorted sandwiches', eu: 'Sandwich anitzak', fr: 'Sandwichs variés', it: 'Panini assortiti', de: 'Verschiedene Sandwiches' },
  'ea274145-05c9-4640-8195-6e17d706a1c1': { en: 'Spanish omelette tapa', eu: 'Tortilla tapa', fr: "Tapa d'omelette", it: 'Tapa di frittata', de: 'Tortilla-Tapa' },
  'e0411108-2cd5-4aa0-81bf-d08d1fc5c49d': { en: 'Spanish omelette', eu: 'Patata-tortilla', fr: 'Tortilla (omelette)', it: 'Frittata di patate', de: 'Kartoffel-Tortilla' },
  'c3114020-a8b5-4e30-be1e-4f1ac6cc7880': { en: 'Assorted cold cuts (large)', eu: 'Hestebete anitza (handia)', fr: 'Charcuterie variée (grande)', it: 'Salumi misti (grande)', de: 'Gemischte Wurstplatte (groß)' },
  '5b09fde8-aa6d-4cc5-b2d5-690c1de87ed9': { en: 'Assorted cold cuts (small)', eu: 'Hestebete anitza (txikia)', fr: 'Charcuterie variée (petite)', it: 'Salumi misti (piccola)', de: 'Gemischte Wurstplatte (klein)' },
  'c5e6670e-50eb-4985-86ac-3df5767a3ead': { en: 'Almogrote tapa', eu: 'Almogrote tapa', fr: "Tapa d'almogrote", it: 'Tapa di almogrote', de: 'Almogrote-Tapa' },
};

// Keyed by modifier_id; Spanish falls back to the base data.
const EXTRA_TRANSLATIONS: Record<string, Partial<Record<StringsLocale, string>>> = {
  'c3e94f41-c06c-4cef-8edf-832ab8d8509e': { en: 'Avocado', eu: 'Ahuakatea', fr: 'Avocat', it: 'Avocado', de: 'Avocado' },
  '031bc5d7-ff9b-417b-9ac2-361cd24b1a19': { en: 'Extra cold cuts', eu: 'Hestebete gehigarria', fr: 'Supplément charcuterie', it: 'Supplemento salumi', de: 'Extra Wurst' },
  '02bbf75c-88db-4103-9c6d-d76d7cbe7b75': { en: 'Cheese', eu: 'Gazta', fr: 'Fromage', it: 'Formaggio', de: 'Käse' },
  '345f61b7-bbcb-4d95-99cb-6b456e18ea6e': { en: 'Tabasco', eu: 'Tabasco', fr: 'Tabasco', it: 'Tabasco', de: 'Tabasco' },
  '08eb227f-ea17-4c12-b7fe-92c242b53265': { en: 'Tomato', eu: 'Tomatea', fr: 'Tomate', it: 'Pomodoro', de: 'Tomate' },
  'f1274fe3-7631-42e2-b044-1d607545a34d': { en: 'Bread', eu: 'Ogia', fr: 'Pain', it: 'Pane', de: 'Brot' },
};

// Recurring serving-size / serving-type labels, keyed by the normalized Spanish
// label. Spanish falls back to the base data.
const VARIANT_LABEL_TRANSLATIONS: Record<string, Partial<Record<StringsLocale, string>>> = {
  copa: { en: 'Glass', eu: 'Kopa', fr: 'Verre', it: 'Bicchiere', de: 'Glas' },
  chupito: { en: 'Shot', eu: 'Txupito', fr: 'Shot', it: 'Cicchetto', de: 'Shot' },
  medio: { en: 'Half', eu: 'Erdia', fr: 'Demi', it: 'Mezzo', de: 'Halb' },
  entero: { en: 'Whole', eu: 'Osoa', fr: 'Entier', it: 'Intero', de: 'Ganz' },
  combinados: { en: 'Mixed drinks', eu: 'Konbinatuak', fr: 'Cocktails', it: 'Cocktail', de: 'Longdrinks' },
  combinado: { en: 'Mixed drink', eu: 'Konbinatua', fr: 'Cocktail', it: 'Cocktail', de: 'Longdrink' },
  normal: { en: 'Regular', eu: 'Arrunta', fr: 'Normal', it: 'Normale', de: 'Normal' },
  grande: { en: 'Large', eu: 'Handia', fr: 'Grand', it: 'Grande', de: 'Groß' },
};

export function localizeCategory<T extends LocalizedCategoryFields>(category: T, locale: LocaleCode): T {
  const strings = CATEGORY_TRANSLATIONS[category.category_id]?.[resolveStringsLocale(locale)];

  if (!strings) {
    return category;
  }

  return { ...category, name: strings.name, heading: strings.heading, subtitle: strings.subtitle };
}

export function localizeItem(item: Item, locale: LocaleCode): Item {
  const stringsLocale = resolveStringsLocale(locale);
  const name = ITEM_NAME_TRANSLATIONS[item.item_id]?.[stringsLocale] ?? item.name;

  const variants = item.variants.map((variant) => {
    const key = normalizeText(variant.name);
    const localizedLabel = key ? VARIANT_LABEL_TRANSLATIONS[key]?.[stringsLocale] : undefined;

    return localizedLabel ? { ...variant, name: localizedLabel } : variant;
  });

  return { ...item, name, variants };
}

export function localizeExtraName(modifierId: string, baseName: string, locale: LocaleCode): string {
  return EXTRA_TRANSLATIONS[modifierId]?.[resolveStringsLocale(locale)] ?? baseName;
}
