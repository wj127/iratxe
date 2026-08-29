import { resolveStringsLocale, type LocaleCode, type StringsLocale } from './config';

export type UIStringKey =
  | 'welcomeSubtitle'
  | 'welcomeDescription'
  | 'ctaSeeMenu'
  | 'heroTagline'
  | 'searchButtonAria'
  | 'backAria'
  | 'searchPlaceholder'
  | 'searchInputAria'
  | 'sectionDrinks'
  | 'sectionFood'
  | 'sectionOther'
  | 'typeDrink'
  | 'typeFood'
  | 'typeOther'
  | 'itemsLabel'
  | 'emptyCategory'
  | 'extrasTitle'
  | 'extrasSubtitle'
  | 'extraTag'
  | 'searchHint'
  | 'searchNoResults'
  | 'resultsCategories'
  | 'resultsItems'
  | 'resultsExtras'
  | 'dailyTitle'
  | 'dailyText'
  | 'languageSelectorAria';

type UIStrings = Record<UIStringKey, string>;

const UI_STRINGS: Record<StringsLocale, UIStrings> = {
  es: {
    welcomeSubtitle: 'Taberna Euskalduna en el Atlántico',
    welcomeDescription:
      'Pintxos vascos tradicionales, cervezas artesanas canarias y vinos seleccionados con brisa del Atlántico.',
    ctaSeeMenu: 'Ver la carta',
    heroTagline: 'Alma vasca, espíritu isleño',
    searchButtonAria: 'Buscar',
    backAria: 'Volver a la carta',
    searchPlaceholder: 'Buscar en la carta...',
    searchInputAria: 'Buscar en la carta',
    sectionDrinks: 'Bebidas',
    sectionFood: 'Comida',
    sectionOther: 'Otros',
    typeDrink: 'Bebidas',
    typeFood: 'Comida',
    typeOther: 'Otros',
    itemsLabel: 'artículos',
    emptyCategory: 'No hay artículos en esta categoría.',
    extrasTitle: 'Extras',
    extrasSubtitle: 'Añade lo que quieras por un pequeño precio adicional.',
    extraTag: 'Extra',
    searchHint: 'Escribe para buscar en categorías, artículos y extras.',
    searchNoResults: 'No hay resultados para “{query}”.',
    resultsCategories: 'Categorías',
    resultsItems: 'Artículos',
    resultsExtras: 'Extras',
    dailyTitle: 'Recomendación del Día',
    dailyText: 'Prueba nuestras IPAs artesanas locales con croquetas de bacalao.',
    languageSelectorAria: 'Cambiar idioma',
  },
  eu: {
    welcomeSubtitle: 'Taberna Euskalduna Atlantikoan',
    welcomeDescription:
      'Euskal pintxo tradizionalak, Kanariar garagardo artisau bikainak eta ozeanoko haizearekin hautatutako ardoak.',
    ctaSeeMenu: 'Ikusi karta',
    heroTagline: 'Euskal arima, uharteko izpiritua',
    searchButtonAria: 'Bilatu',
    backAria: 'Itzuli kartara',
    searchPlaceholder: 'Bilatu kartan...',
    searchInputAria: 'Bilatu kartan',
    sectionDrinks: 'Edariak',
    sectionFood: 'Janaria',
    sectionOther: 'Bestelakoak',
    typeDrink: 'Edariak',
    typeFood: 'Janaria',
    typeOther: 'Bestelakoak',
    itemsLabel: 'produktu',
    emptyCategory: 'Ez dago artikulurik kategoria honetan.',
    extrasTitle: 'Gehigarriak',
    extrasSubtitle: 'Gehitu nahi duzuna prezio txiki baten truke.',
    extraTag: 'Gehigarria',
    searchHint: 'Idatzi kategorietan, artikuluetan eta gehigarrietan bilatzeko.',
    searchNoResults: 'Ez dago emaitzarik “{query}” bilaketarako.',
    resultsCategories: 'Kategoriak',
    resultsItems: 'Artikuluak',
    resultsExtras: 'Gehigarriak',
    dailyTitle: 'Eguneko Gomendioa',
    dailyText: 'Probatu gure tokiko IPA artisauak bakailao-kroketekin.',
    languageSelectorAria: 'Aldatu hizkuntza',
  },
  en: {
    welcomeSubtitle: 'Basque Tavern on the Atlantic',
    welcomeDescription:
      'Traditional Basque pintxos, premium local Canarian craft beers, and selected wines with ocean breezes.',
    ctaSeeMenu: 'See menu',
    heroTagline: 'Basque soul, island spirit',
    searchButtonAria: 'Search',
    backAria: 'Back to the menu',
    searchPlaceholder: 'Search the menu...',
    searchInputAria: 'Search the menu',
    sectionDrinks: 'Drinks',
    sectionFood: 'Food',
    sectionOther: 'Other',
    typeDrink: 'Drinks',
    typeFood: 'Food',
    typeOther: 'Other',
    itemsLabel: 'items',
    emptyCategory: 'There are no items in this category.',
    extrasTitle: 'Extras',
    extrasSubtitle: 'Add whatever you like for a small extra charge.',
    extraTag: 'Extra',
    searchHint: 'Type to search categories, items and extras.',
    searchNoResults: 'No results for “{query}”.',
    resultsCategories: 'Categories',
    resultsItems: 'Items',
    resultsExtras: 'Extras',
    dailyTitle: 'Daily Recommendation',
    dailyText: 'Try our local craft IPAs paired with cod croquettes.',
    languageSelectorAria: 'Change language',
  },
  fr: {
    welcomeSubtitle: "Taverne Basque sur l'Atlantique",
    welcomeDescription:
      "Pintxos basques traditionnels, bières artisanales canariennes premium et vins sélectionnés avec la brise de l'océan.",
    ctaSeeMenu: 'Voir la carte',
    heroTagline: 'Âme basque, esprit insulaire',
    searchButtonAria: 'Rechercher',
    backAria: 'Retour à la carte',
    searchPlaceholder: 'Rechercher dans la carte...',
    searchInputAria: 'Rechercher dans la carte',
    sectionDrinks: 'Boissons',
    sectionFood: 'Plats',
    sectionOther: 'Autres',
    typeDrink: 'Boissons',
    typeFood: 'Plats',
    typeOther: 'Autres',
    itemsLabel: 'articles',
    emptyCategory: "Il n'y a aucun article dans cette catégorie.",
    extrasTitle: 'Suppléments',
    extrasSubtitle: 'Ajoutez ce que vous voulez pour un petit supplément.',
    extraTag: 'Supplément',
    searchHint: 'Tapez pour rechercher des catégories, des articles et des suppléments.',
    searchNoResults: 'Aucun résultat pour « {query} ».',
    resultsCategories: 'Catégories',
    resultsItems: 'Articles',
    resultsExtras: 'Suppléments',
    dailyTitle: 'Recommandation du Jour',
    dailyText: 'Essayez nos IPA artisanales locales accompagnées de croquettes de morue.',
    languageSelectorAria: 'Changer de langue',
  },
  it: {
    welcomeSubtitle: "Taverna Basca sull'Atlantico",
    welcomeDescription:
      "Pintxos baschi tradizionali, birre artigianali canarie di qualità e vini selezionati con la brezza dell'oceano.",
    ctaSeeMenu: 'Vedi il menu',
    heroTagline: 'Anima basca, spirito isolano',
    searchButtonAria: 'Cerca',
    backAria: 'Torna al menu',
    searchPlaceholder: 'Cerca nel menu...',
    searchInputAria: 'Cerca nel menu',
    sectionDrinks: 'Bevande',
    sectionFood: 'Cibo',
    sectionOther: 'Altro',
    typeDrink: 'Bevande',
    typeFood: 'Cibo',
    typeOther: 'Altro',
    itemsLabel: 'articoli',
    emptyCategory: 'Non ci sono articoli in questa categoria.',
    extrasTitle: 'Extra',
    extrasSubtitle: 'Aggiungi quello che vuoi con un piccolo supplemento.',
    extraTag: 'Extra',
    searchHint: 'Digita per cercare categorie, articoli ed extra.',
    searchNoResults: 'Nessun risultato per “{query}”.',
    resultsCategories: 'Categorie',
    resultsItems: 'Articoli',
    resultsExtras: 'Extra',
    dailyTitle: 'Consiglio del Giorno',
    dailyText: 'Prova le nostre IPA artigianali locali con crocchette di baccalà.',
    languageSelectorAria: 'Cambia lingua',
  },
  de: {
    welcomeSubtitle: 'Baskische Taverne am Atlantik',
    welcomeDescription:
      'Traditionelle baskische Pintxos, erstklassige kanarische Craft-Biere und ausgewählte Weine mit Meeresbrise.',
    ctaSeeMenu: 'Zur Speisekarte',
    heroTagline: 'Baskische Seele, Inselgeist',
    searchButtonAria: 'Suchen',
    backAria: 'Zurück zur Speisekarte',
    searchPlaceholder: 'In der Speisekarte suchen...',
    searchInputAria: 'In der Speisekarte suchen',
    sectionDrinks: 'Getränke',
    sectionFood: 'Speisen',
    sectionOther: 'Sonstiges',
    typeDrink: 'Getränke',
    typeFood: 'Speisen',
    typeOther: 'Sonstiges',
    itemsLabel: 'Artikel',
    emptyCategory: 'In dieser Kategorie gibt es keine Artikel.',
    extrasTitle: 'Extras',
    extrasSubtitle: 'Füge nach Belieben etwas gegen einen kleinen Aufpreis hinzu.',
    extraTag: 'Extra',
    searchHint: 'Tippe, um Kategorien, Artikel und Extras zu durchsuchen.',
    searchNoResults: 'Keine Ergebnisse für „{query}“.',
    resultsCategories: 'Kategorien',
    resultsItems: 'Artikel',
    resultsExtras: 'Extras',
    dailyTitle: 'Tagesempfehlung',
    dailyText: 'Probiere unsere lokalen Craft-IPAs mit Kabeljau-Kroketten.',
    languageSelectorAria: 'Sprache ändern',
  },
};

export function translate(
  locale: LocaleCode,
  key: UIStringKey,
  params?: Record<string, string | number>,
): string {
  const stringsLocale = resolveStringsLocale(locale);
  const template = UI_STRINGS[stringsLocale][key];

  if (!params) {
    return template;
  }

  return Object.entries(params).reduce(
    (result, [token, value]) => result.replaceAll(`{${token}}`, String(value)),
    template,
  );
}
