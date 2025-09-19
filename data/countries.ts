// data/countries.ts
export interface Country {
  id: string;
  name: string;
  continent: 'asia' | 'europe';
  neighbors: string[]; // country IDs
  borderCrossings: BorderCrossing[];
}

export interface BorderCrossing {
  id: string;
  name: string;
  fromCountry: string;
  toCountry: string;
  requirements: {
    documents: string[];
    vehicleRequirements: string[];
    restrictions: string[];
  };
  status: 'open' | 'closed' | 'restricted';
  waitTime?: number; // in minutes
  lastUpdated: Date;
}

// Sample data for Asia and Europe
export const countries: Country[] = [
  // European countries
  {
  id: 'fr',
  name: 'France',
  continent: 'europe',
  neighbors: ['be', 'lu', 'de', 'ch', 'it', 'es', 'ad', 'mc'],
  borderCrossings: [
    // France - Belgium (2 crossings)
    {
      id: 'fr-be-1',
      name: 'Lille-Mouscron',
      fromCountry: 'fr',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance (Green Card)'],
        restrictions: ['Customs check', 'Agricultural restrictions']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fr-be-2',
      name: 'Maubeuge-Erquelinnes',
      fromCountry: 'fr',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance (Green Card)'],
        restrictions: ['Customs check', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // France - Germany (2 crossings)
    {
      id: 'fr-de-1',
      name: 'Strasbourg-Kehl',
      fromCountry: 'fr',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fr-de-2',
      name: 'Forbach-Saarbrücken',
      fromCountry: 'fr',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Industrial area']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // France - Spain (2 crossings)
    {
      id: 'fr-es-1',
      name: 'Le Perthus-La Jonquera',
      fromCountry: 'fr',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain pass']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fr-es-2',
      name: 'Hendaye-Irun',
      fromCountry: 'fr',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // France - Italy (2 crossings)
    {
      id: 'fr-it-1',
      name: 'Ventimiglia-Menton',
      fromCountry: 'fr',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fr-it-2',
      name: 'Mont Blanc Tunnel',
      fromCountry: 'fr',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Tunnel permit'],
        restrictions: ['Toll road', 'Mountain conditions', 'Weather dependent']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    // France - Switzerland (2 crossings)
    {
      id: 'fr-ch-1',
      name: 'Geneva-Annemasse',
      fromCountry: 'fr',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fr-ch-2',
      name: 'Basel-Saint-Louis',
      fromCountry: 'fr',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Industrial area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'es',
  name: 'Spain',
  continent: 'europe',
  neighbors: ['pt', 'fr', 'ad'],
  borderCrossings: [
    // Spain - France (2 crossings)
    {
      id: 'es-fr-1',
      name: 'La Jonquera-Le Perthus',
      fromCountry: 'es',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Agricultural restrictions']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'es-fr-2',
      name: 'Irun-Hendaye',
      fromCountry: 'es',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Spain - Portugal (2 crossings)
    {
      id: 'es-pt-1',
      name: 'Tui-Valença',
      fromCountry: 'es',
      toCountry: 'pt',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'es-pt-2',
      name: 'Badajoz-Elvas',
      fromCountry: 'es',
      toCountry: 'pt',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Spain - Andorra (2 crossings)
    {
      id: 'es-ad-1',
      name: 'Pas de la Casa',
      fromCountry: 'es',
      toCountry: 'ad',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Mountain pass', 'Winter conditions']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'es-ad-2',
      name: 'Sant Julià de Lòria',
      fromCountry: 'es',
      toCountry: 'ad',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Limited hours']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'de',
  name: 'Germany',
  continent: 'europe',
  neighbors: ['dk', 'pl', 'cz', 'at', 'ch', 'fr', 'lu', 'be', 'nl'],
  borderCrossings: [
    // Germany - Poland (2 crossings)
    {
      id: 'de-pl-1',
      name: 'Frankfurt (Oder)-Świecko',
      fromCountry: 'de',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-pl-2',
      name: 'Görlitz-Zgorzelec',
      fromCountry: 'de',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Czech Republic (2 crossings)
    {
      id: 'de-cz-1',
      name: 'Dresden-Petrohrad',
      fromCountry: 'de',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain area']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-cz-2',
      name: 'Bavaria Forest-Všeruby',
      fromCountry: 'de',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Forest area']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Austria (2 crossings)
    {
      id: 'de-at-1',
      name: 'Kufstein-Kiefersfelden',
      fromCountry: 'de',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Alpine route']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-at-2',
      name: 'Salzburg-Freilassing',
      fromCountry: 'de',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Switzerland (2 crossings)
    {
      id: 'de-ch-1',
      name: 'Basel-Weil am Rhein',
      fromCountry: 'de',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-ch-2',
      name: 'Konstanz-Kreuzlingen',
      fromCountry: 'de',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Lake border']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - France (2 crossings)
    {
      id: 'de-fr-1',
      name: 'Kehl-Strasbourg',
      fromCountry: 'de',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-fr-2',
      name: 'Saarbrücken-Forbach',
      fromCountry: 'de',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Industrial area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Denmark (2 crossings)
    {
      id: 'de-dk-1',
      name: 'Flensburg-Padborg',
      fromCountry: 'de',
      toCountry: 'dk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Border region']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-dk-2',
      name: 'Puttgarden-Rødby',
      fromCountry: 'de',
      toCountry: 'dk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Ferry ticket'],
        restrictions: ['Ferry crossing', 'Weather dependent']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Netherlands (2 crossings)
    {
      id: 'de-nl-1',
      name: 'Gronau-Enschede',
      fromCountry: 'de',
      toCountry: 'nl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-nl-2',
      name: 'Venlo-Kaldenkirchen',
      fromCountry: 'de',
      toCountry: 'nl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River region']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Belgium (2 crossings)
    {
      id: 'de-be-1',
      name: 'Aachen-Eupen',
      fromCountry: 'de',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-be-2',
      name: 'Trier-Arlon',
      fromCountry: 'de',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Forest area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Germany - Luxembourg (2 crossings)
    {
      id: 'de-lu-1',
      name: 'Trier-Wasserbillig',
      fromCountry: 'de',
      toCountry: 'lu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'de-lu-2',
      name: 'Saarburg-Mertert',
      fromCountry: 'de',
      toCountry: 'lu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Industrial area']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'it',
  name: 'Italy',
  continent: 'europe',
  neighbors: ['fr', 'ch', 'at', 'si', 'sm', 'va'],
  borderCrossings: [
    // Italy - France (2 crossings)
    {
      id: 'it-fr-1',
      name: 'Ventimiglia-Menton',
      fromCountry: 'it',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'it-fr-2',
      name: 'Mont Blanc Tunnel',
      fromCountry: 'it',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Tunnel permit'],
        restrictions: ['Toll road', 'Mountain conditions', 'Weather dependent']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    // Italy - Switzerland (2 crossings)
    {
      id: 'it-ch-1',
      name: 'Chiasso-Como',
      fromCountry: 'it',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'it-ch-2',
      name: 'Domodossola-Brig',
      fromCountry: 'it',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain route', 'Tunnel access']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Italy - Austria (2 crossings)
    {
      id: 'it-at-1',
      name: 'Brenner Pass',
      fromCountry: 'it',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'it-at-2',
      name: 'Tarvisio-Arnoldstein',
      fromCountry: 'it',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Alpine route', 'Winter restrictions']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Italy - Slovenia (2 crossings)
    {
      id: 'it-si-1',
      name: 'Gorizia-Nova Gorica',
      fromCountry: 'it',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'it-si-2',
      name: 'Trieste-Škofije',
      fromCountry: 'it',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Italy - San Marino (2 crossings)
    {
      id: 'it-sm-1',
      name: 'Rimini-Serravalle',
      fromCountry: 'it',
      toCountry: 'sm',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain route', 'Limited hours']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'it-sm-2',
      name: 'Coriano-Montegiardino',
      fromCountry: 'it',
      toCountry: 'sm',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Rural area', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    },
    // Italy - Vatican City (2 crossings)
    {
      id: 'it-va-1',
      name: 'Rome-Vatican (Via della Conciliazione)',
      fromCountry: 'it',
      toCountry: 'va',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Special permit required', 'Restricted access'],
        restrictions: ['Urban area', 'Security check', 'Limited vehicle access']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'it-va-2',
      name: 'Rome-Vatican (Via di Porta Angelica)',
      fromCountry: 'it',
      toCountry: 'va',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Special permit required', 'Restricted access'],
        restrictions: ['Urban area', 'Security check', 'Pedestrian priority']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'pt',
  name: 'Portugal',
  continent: 'europe',
  neighbors: ['es'],
  borderCrossings: [
    // Portugal - Spain (4 crossings since it only has one neighbor)
    {
      id: 'pt-es-1',
      name: 'Valença-Tui',
      fromCountry: 'pt',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pt-es-2',
      name: 'Vilar Formoso-Fuentes de Oñoro',
      fromCountry: 'pt',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain area', 'Weather conditions']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pt-es-3',
      name: 'Caia-Badajoz',
      fromCountry: 'pt',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Agricultural inspection', 'River crossing']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pt-es-4',
      name: 'Castro Marim-Ayamonte',
      fromCountry: 'pt',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route', 'Tourist area']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ad',
  name: 'Andorra',
  continent: 'europe',
  neighbors: ['es', 'fr'],
  borderCrossings: [
    // Andorra - Spain (2 crossings)
    {
      id: 'ad-es-1',
      name: 'Pas de la Casa',
      fromCountry: 'ad',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Mountain pass', 'Winter conditions', 'Customs check']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ad-es-2',
      name: 'Sant Julià de Lòria',
      fromCountry: 'ad',
      toCountry: 'es',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Limited hours', 'Urban area']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    },
    // Andorra - France (2 crossings)
    {
      id: 'ad-fr-1',
      name: 'Port d\'Envalira',
      fromCountry: 'ad',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Winter tires (seasonal)'],
        restrictions: ['High mountain pass', 'Weather dependent', 'Customs check']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ad-fr-2',
      name: 'Port de Cabús',
      fromCountry: 'ad',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Mountain pass', 'Limited services', 'Customs check']
      },
      status: 'open',
      waitTime: 8,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'al',
  name: 'Albania',
  continent: 'europe',
  neighbors: ['me', 'xk', 'mk', 'gr'],
  borderCrossings: [
    // Albania - Montenegro (2 crossings)
    {
      id: 'al-me-1',
      name: 'Hani i Hotit-Bozhaj',
      fromCountry: 'al',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'al-me-2',
      name: 'Tuzi-Muriqan',
      fromCountry: 'al',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural inspection', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Albania - Kosovo (2 crossings)
    {
      id: 'al-xk-1',
      name: 'Qafë Morinë-Vërmicë',
      fromCountry: 'al',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'al-xk-2',
      name: 'Qafë Prush-Bllatë',
      fromCountry: 'al',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Remote area', 'Limited services']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Albania - North Macedonia (2 crossings)
    {
      id: 'al-mk-1',
      name: 'Qafë Thanë-Blato',
      fromCountry: 'al',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'al-mk-2',
      name: 'Bllatë-Debar',
      fromCountry: 'al',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Lake region', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Albania - Greece (2 crossings)
    {
      id: 'al-gr-1',
      name: 'Kakavijë-Krystallopigi',
      fromCountry: 'al',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border control', 'Agricultural restrictions']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'al-gr-2',
      name: 'Qafë Botë-Filiates',
      fromCountry: 'al',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Seasonal restrictions']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'at',
  name: 'Austria',
  continent: 'europe',
  neighbors: ['de', 'cz', 'sk', 'hu', 'si', 'it', 'ch', 'li'],
  borderCrossings: [
    // Austria - Germany (2 crossings)
    {
      id: 'at-de-1',
      name: 'Kufstein-Kiefersfelden',
      fromCountry: 'at',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Alpine route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-de-2',
      name: 'Salzburg-Freilassing',
      fromCountry: 'at',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Czech Republic (2 crossings)
    {
      id: 'at-cz-1',
      name: 'Drasenhofen-Mikulov',
      fromCountry: 'at',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Agricultural inspection', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-cz-2',
      name: 'Wullowitz-Dolni Dvořiště',
      fromCountry: 'at',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Slovakia (2 crossings)
    {
      id: 'at-sk-1',
      name: 'Berg-Petrzalka',
      fromCountry: 'at',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'River crossing']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-sk-2',
      name: 'Kittsee-Jarovce',
      fromCountry: 'at',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Agricultural area', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Hungary (2 crossings)
    {
      id: 'at-hu-1',
      name: 'Nickelsdorf-Hegyeshalom',
      fromCountry: 'at',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Plains region', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-hu-2',
      name: 'Sopron-Klingenbach',
      fromCountry: 'at',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Wine region', 'Tourist area']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Slovenia (2 crossings)
    {
      id: 'at-si-1',
      name: 'Spielberg-Sentilj',
      fromCountry: 'at',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountainous area', 'Weather dependent']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-si-2',
      name: 'Loibl-Ljubelj',
      fromCountry: 'at',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain tunnel', 'Toll road']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Italy (2 crossings)
    {
      id: 'at-it-1',
      name: 'Brenner Pass',
      fromCountry: 'at',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'High mountain pass', 'Winter restrictions']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-it-2',
      name: 'Arnoldstein-Tarvisio',
      fromCountry: 'at',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Alpine route', 'Weather dependent']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Switzerland (2 crossings)
    {
      id: 'at-ch-1',
      name: 'Lustenau-St. Margrethen',
      fromCountry: 'at',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'River crossing', 'Urban area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-ch-2',
      name: 'Feldkirch-Buchs',
      fromCountry: 'at',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain valley', 'Limited services']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Austria - Liechtenstein (2 crossings)
    {
      id: 'at-li-1',
      name: 'Feldkirch-Schaanwald',
      fromCountry: 'at',
      toCountry: 'li',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Small border', 'Limited capacity']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'at-li-2',
      name: 'Nendeln-Bendern',
      fromCountry: 'at',
      toCountry: 'li',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River valley', 'Tourist area']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'by',
  name: 'Belarus',
  continent: 'europe',
  neighbors: ['lt', 'lv', 'pl', 'ru', 'ua'],
  borderCrossings: [
    // Belarus - Lithuania (2 crossings)
    {
      id: 'by-lt-1',
      name: 'Kamenny Log-Kalvarija',
      fromCountry: 'by',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'by-lt-2',
      name: 'Kotlovka-Lavoriškės',
      fromCountry: 'by',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Belarus - Latvia (2 crossings)
    {
      id: 'by-lv-1',
      name: 'Urbany-Grigorovshchina',
      fromCountry: 'by',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 80,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'by-lv-2',
      name: 'Bigosovo-Silene',
      fromCountry: 'by',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Rural area', 'Document verification']
      },
      status: 'open',
      waitTime: 70,
      lastUpdated: new Date('2024-01-15')
    },
    // Belarus - Poland (2 crossings)
    {
      id: 'by-pl-1',
      name: 'Brest-Terespol',
      fromCountry: 'by',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'by-pl-2',
      name: 'Bruzgi-Kuźnica',
      fromCountry: 'by',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Document verification']
      },
      status: 'open',
      waitTime: 100,
      lastUpdated: new Date('2024-01-15')
    },
    // Belarus - Russia (2 crossings)
    {
      id: 'by-ru-1',
      name: 'Krasnaya Gorka-Kamenny Log',
      fromCountry: 'by',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Union State border', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'by-ru-2',
      name: 'Vysokoye-Gusino',
      fromCountry: 'by',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Belarus - Ukraine (2 crossings)
    {
      id: 'by-ua-1',
      name: 'Alexandrovka-Vilcha',
      fromCountry: 'by',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Ukraine visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Security check', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'by-ua-2',
      name: 'Novaya Guta-Novo Yarilovichi',
      fromCountry: 'by',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Ukraine visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'be',
  name: 'Belgium',
  continent: 'europe',
  neighbors: ['fr', 'lu', 'de', 'nl'],
  borderCrossings: [
    // Belgium - France (2 crossings)
    {
      id: 'be-fr-1',
      name: 'Mouscron-Lille',
      fromCountry: 'be',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance (Green Card)'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'be-fr-2',
      name: 'Erquelinnes-Maubeuge',
      fromCountry: 'be',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance (Green Card)'],
        restrictions: ['Customs check', 'Industrial area', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Belgium - Luxembourg (2 crossings)
    {
      id: 'be-lu-1',
      name: 'Arlon-Luxembourg',
      fromCountry: 'be',
      toCountry: 'lu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'be-lu-2',
      name: 'Martelange-Esch-sur-Sûre',
      fromCountry: 'be',
      toCountry: 'lu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Rural area', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Belgium - Germany (2 crossings)
    {
      id: 'be-de-1',
      name: 'Eupen-Aachen',
      fromCountry: 'be',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'be-de-2',
      name: 'St. Vith-Prüm',
      fromCountry: 'be',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Forest area', 'Mountainous terrain']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Belgium - Netherlands (2 crossings)
    {
      id: 'be-nl-1',
      name: 'Enschede-Gronau',
      fromCountry: 'be',
      toCountry: 'nl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Document verification']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'be-nl-2',
      name: 'Antwerp-Bergen op Zoom',
      fromCountry: 'be',
      toCountry: 'nl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Port area', 'Industrial inspection']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ba',
  name: 'Bosnia and Herzegovina',
  continent: 'europe',
  neighbors: ['hr', 'me', 'rs'],
  borderCrossings: [
    // Bosnia and Herzegovina - Croatia (2 crossings)
    {
      id: 'ba-hr-1',
      name: 'Svilaj-Odra',
      fromCountry: 'ba',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'River crossing', 'EU border control']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ba-hr-2',
      name: 'Gradiška-Stara Gradiška',
      fromCountry: 'ba',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Bridge crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Bosnia and Herzegovina - Montenegro (2 crossings)
    {
      id: 'ba-me-1',
      name: 'Šćepan Polje-Hum',
      fromCountry: 'ba',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ba-me-2',
      name: 'Metaljka-Vraćenovići',
      fromCountry: 'ba',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Bosnia and Herzegovina - Serbia (2 crossings)
    {
      id: 'ba-rs-1',
      name: 'Rača-Kotroman',
      fromCountry: 'ba',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ba-rs-2',
      name: 'Badovinci-Bijeljina',
      fromCountry: 'ba',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'bg',
  name: 'Bulgaria',
  continent: 'europe',
  neighbors: ['gr', 'mk', 'ro', 'rs', 'tr'],
  borderCrossings: [
    // Bulgaria - Greece (2 crossings)
    {
      id: 'bg-gr-1',
      name: 'Kulata-Promachonas',
      fromCountry: 'bg',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border control', 'Agricultural restrictions']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bg-gr-2',
      name: 'Ilinden-Exochi',
      fromCountry: 'bg',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Mountainous area', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Bulgaria - North Macedonia (2 crossings)
    {
      id: 'bg-mk-1',
      name: 'Gyueshevo-Blato',
      fromCountry: 'bg',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bg-mk-2',
      name: 'Stanke Lisichkovo-Delchevo',
      fromCountry: 'bg',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Bulgaria - Romania (2 crossings)
    {
      id: 'bg-ro-1',
      name: 'Ruse-Giurgiu',
      fromCountry: 'bg',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Bridge crossing', 'EU border']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bg-ro-2',
      name: 'Vidin-Calafat',
      fromCountry: 'bg',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Bridge crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Bulgaria - Serbia (2 crossings)
    {
      id: 'bg-rs-1',
      name: 'Kalotina-Gradina',
      fromCountry: 'bg',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bg-rs-2',
      name: 'Bregovo-Brashlyan',
      fromCountry: 'bg',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Limited capacity']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Bulgaria - Turkey (2 crossings)
    {
      id: 'bg-tr-1',
      name: 'Kapitan Andreevo-Kapıkule',
      fromCountry: 'bg',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Turkish visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Major trade route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bg-tr-2',
      name: 'Lesovo-Hamzabeyli',
      fromCountry: 'bg',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Turkish visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Secondary route', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'hr',
  name: 'Croatia',
  continent: 'europe',
  neighbors: ['si', 'hu', 'rs', 'ba', 'me'],
  borderCrossings: [
    // Croatia - Slovenia (2 crossings)
    {
      id: 'hr-si-1',
      name: 'Bregana-Obrežje',
      fromCountry: 'hr',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hr-si-2',
      name: 'Macelj-Gruškovje',
      fromCountry: 'hr',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Croatia - Hungary (2 crossings)
    {
      id: 'hr-hu-1',
      name: 'Goričan-Letenye',
      fromCountry: 'hr',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hr-hu-2',
      name: 'Dubosevica-Barcs',
      fromCountry: 'hr',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'River crossing', 'Limited services']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Croatia - Serbia (2 crossings)
    {
      id: 'hr-rs-1',
      name: 'Bajakovo-Batrovci',
      fromCountry: 'hr',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hr-rs-2',
      name: 'Tovarnik-Šid',
      fromCountry: 'hr',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Croatia - Bosnia and Herzegovina (2 crossings)
    {
      id: 'hr-ba-1',
      name: 'Odra-Svilaj',
      fromCountry: 'hr',
      toCountry: 'ba',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'EU border control']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hr-ba-2',
      name: 'Stara Gradiška-Gradiška',
      fromCountry: 'hr',
      toCountry: 'ba',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Bridge crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Croatia - Montenegro (2 crossings)
    {
      id: 'hr-me-1',
      name: 'Karasovići-Debeli Brijeg',
      fromCountry: 'hr',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Coastal route', 'Tourist area']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hr-me-2',
      name: 'Kobila-Igalo',
      fromCountry: 'hr',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Limited capacity']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'cz',
  name: 'Czech Republic',
  continent: 'europe',
  neighbors: ['de', 'pl', 'sk', 'at'],
  borderCrossings: [
    // Czech Republic - Germany (2 crossings)
    {
      id: 'cz-de-1',
      name: 'Rozvadov-Waidhaus',
      fromCountry: 'cz',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cz-de-2',
      name: 'Folmava-Furth im Wald',
      fromCountry: 'cz',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Czech Republic - Poland (2 crossings)
    {
      id: 'cz-pl-1',
      name: 'Cieszyn-Czechowice-Dziedzice',
      fromCountry: 'cz',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Urban area', 'River crossing']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cz-pl-2',
      name: 'Kudowa Słone-Pstrążna',
      fromCountry: 'cz',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain area', 'Tourist region']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Czech Republic - Slovakia (2 crossings)
    {
      id: 'cz-sk-1',
      name: 'Bratislava-Berg',
      fromCountry: 'cz',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Urban area', 'River crossing']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cz-sk-2',
      name: 'Mosty u Jablunkova-Svrčinovec',
      fromCountry: 'cz',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Czech Republic - Austria (2 crossings)
    {
      id: 'cz-at-1',
      name: 'Dolní Dvořiště-Wullowitz',
      fromCountry: 'cz',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cz-at-2',
      name: 'Mikulov-Drasenhofen',
      fromCountry: 'cz',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Wine region', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'dk',
  name: 'Denmark',
  continent: 'europe',
  neighbors: ['de'],
  borderCrossings: [
    // Denmark - Germany (4 crossings since it only has one land neighbor)
    {
      id: 'dk-de-1',
      name: 'Padborg-Flensburg',
      fromCountry: 'dk',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'dk-de-2',
      name: 'Frøslev-Harrislee',
      fromCountry: 'dk',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Secondary route', 'Limited services']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'dk-de-3',
      name: 'Rødby-Puttgarden (Ferry)',
      fromCountry: 'dk',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Ferry ticket'],
        restrictions: ['Ferry schedule', 'Weather dependent', 'Customs check']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'dk-de-4',
      name: 'Gedser-Rostock (Ferry)',
      fromCountry: 'dk',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Ferry ticket'],
        restrictions: ['Ferry schedule', 'Weather dependent', 'Customs check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ee',
  name: 'Estonia',
  continent: 'europe',
  neighbors: ['lv', 'ru'],
  borderCrossings: [
    // Estonia - Latvia (2 crossings)
    {
      id: 'ee-lv-1',
      name: 'Ikla-Ainaži',
      fromCountry: 'ee',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Coastal route']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ee-lv-2',
      name: 'Valga-Valka',
      fromCountry: 'ee',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Urban area', 'Shared city border']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Estonia - Russia (2 crossings)
    {
      id: 'ee-ru-1',
      name: 'Narva-Ivangorod',
      fromCountry: 'ee',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Security check']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ee-ru-2',
      name: 'Luhamaa-Shumilkino',
      fromCountry: 'ee',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'fi',
  name: 'Finland',
  continent: 'europe',
  neighbors: ['se', 'no', 'ru'],
  borderCrossings: [
    // Finland - Sweden (2 crossings)
    {
      id: 'fi-se-1',
      name: 'Tornio-Haparanda',
      fromCountry: 'fi',
      toCountry: 'se',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'River crossing']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fi-se-2',
      name: 'Karesuvanto-Karesuando',
      fromCountry: 'fi',
      toCountry: 'se',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Arctic area', 'Winter conditions']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Finland - Norway (2 crossings)
    {
      id: 'fi-no-1',
      name: 'Kilpisjärvi-Skibotn',
      fromCountry: 'fi',
      toCountry: 'no',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Arctic area', 'Mountain pass']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fi-no-2',
      name: 'Utsjoki-Karasjok',
      fromCountry: 'fi',
      toCountry: 'no',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Sami region', 'Remote area']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Finland - Russia (2 crossings)
    {
      id: 'fi-ru-1',
      name: 'Vaalimaa-Torfyanovka',
      fromCountry: 'fi',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'fi-ru-2',
      name: 'Niirala-Värtsilä',
      fromCountry: 'fi',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'gr',
  name: 'Greece',
  continent: 'europe',
  neighbors: ['al', 'mk', 'bg', 'tr'],
  borderCrossings: [
    // Greece - Albania (2 crossings)
    {
      id: 'gr-al-1',
      name: 'Krystallopigi-Kakavijë',
      fromCountry: 'gr',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border control', 'Mountainous terrain']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'gr-al-2',
      name: 'Filiates-Qafë Botë',
      fromCountry: 'gr',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Greece - North Macedonia (2 crossings)
    {
      id: 'gr-mk-1',
      name: 'Evzoni-Bogorodica',
      fromCountry: 'gr',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'gr-mk-2',
      name: 'Niki-Medzitlija',
      fromCountry: 'gr',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Greece - Bulgaria (2 crossings)
    {
      id: 'gr-bg-1',
      name: 'Promachonas-Kulata',
      fromCountry: 'gr',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Agricultural restrictions']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'gr-bg-2',
      name: 'Exochi-Ilinden',
      fromCountry: 'gr',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountainous area', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Greece - Turkey (2 crossings)
    {
      id: 'gr-tr-1',
      name: 'Kipoi-Ipsala',
      fromCountry: 'gr',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Turkish visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'gr-tr-2',
      name: 'Kastanies-Pazarkule',
      fromCountry: 'gr',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Turkish visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main trade route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'hu',
  name: 'Hungary',
  continent: 'europe',
  neighbors: ['at', 'sk', 'ua', 'ro', 'rs', 'hr', 'si'],
  borderCrossings: [
    // Hungary - Austria (2 crossings)
    {
      id: 'hu-at-1',
      name: 'Hegyeshalom-Nickelsdorf',
      fromCountry: 'hu',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-at-2',
      name: 'Klingenbach-Sopron',
      fromCountry: 'hu',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Wine region', 'Tourist area']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Hungary - Slovakia (2 crossings)
    {
      id: 'hu-sk-1',
      name: 'Rajka-Rusovce',
      fromCountry: 'hu',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'River crossing', 'Urban area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-sk-2',
      name: 'Sátoraljaújhely-Trebisov',
      fromCountry: 'hu',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Hungary - Ukraine (2 crossings)
    {
      id: 'hu-ua-1',
      name: 'Záhony-Chop',
      fromCountry: 'hu',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rail bridge', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-ua-2',
      name: 'Lónya-Beregsurány',
      fromCountry: 'hu',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Hungary - Romania (2 crossings)
    {
      id: 'hu-ro-1',
      name: 'Nagylak-Nădlac',
      fromCountry: 'hu',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Plains region', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-ro-2',
      name: 'Ártánd-Borş',
      fromCountry: 'hu',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Hungary - Serbia (2 crossings)
    {
      id: 'hu-rs-1',
      name: 'Röszke-Horgoš',
      fromCountry: 'hu',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 70,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-rs-2',
      name: 'Tompa-Kelebija',
      fromCountry: 'hu',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    // Hungary - Croatia (2 crossings)
    {
      id: 'hu-hr-1',
      name: 'Letenye-Goričan',
      fromCountry: 'hu',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-hr-2',
      name: 'Barcs-Dubosevica',
      fromCountry: 'hu',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'River crossing', 'Limited services']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Hungary - Slovenia (2 crossings)
    {
      id: 'hu-si-1',
      name: 'Rédics-Dobova',
      fromCountry: 'hu',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountainous area', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'hu-si-2',
      name: 'Hodoš-Salovci',
      fromCountry: 'hu',
      toCountry: 'si',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Rural area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'xk',
  name: 'Kosovo',
  continent: 'europe',
  neighbors: ['rs', 'mk', 'al', 'me'],
  borderCrossings: [
    // Kosovo - Serbia (2 crossings)
    {
      id: 'xk-rs-1',
      name: 'Merdare-Ribarić',
      fromCountry: 'xk',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'xk-rs-2',
      name: 'Jarinje-Brjak',
      fromCountry: 'xk',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Kosovo - North Macedonia (2 crossings)
    {
      id: 'xk-mk-1',
      name: 'Hani i Elezit-Blagoevgrad',
      fromCountry: 'xk',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main trade route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'xk-mk-2',
      name: 'Vrbnica-Stenkovac',
      fromCountry: 'xk',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Kosovo - Albania (2 crossings)
    {
      id: 'xk-al-1',
      name: 'Vërmicë-Qafë Morinë',
      fromCountry: 'xk',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'xk-al-2',
      name: 'Bllatë-Qafë Prush',
      fromCountry: 'xk',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Remote area', 'Limited services']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Kosovo - Montenegro (2 crossings)
    {
      id: 'xk-me-1',
      name: 'Rozhajë-Kula',
      fromCountry: 'xk',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'xk-me-2',
      name: 'Vrbnica-Božaj',
      fromCountry: 'xk',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'lv',
  name: 'Latvia',
  continent: 'europe',
  neighbors: ['ee', 'ru', 'by', 'lt'],
  borderCrossings: [
    // Latvia - Estonia (2 crossings)
    {
      id: 'lv-ee-1',
      name: 'Ainaži-Ikla',
      fromCountry: 'lv',
      toCountry: 'ee',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Coastal route']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lv-ee-2',
      name: 'Valka-Valga',
      fromCountry: 'lv',
      toCountry: 'ee',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Urban area', 'Shared city border']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Latvia - Russia (2 crossings)
    {
      id: 'lv-ru-1',
      name: 'Terehova-Burachki',
      fromCountry: 'lv',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lv-ru-2',
      name: 'Grebneva-Pededze',
      fromCountry: 'lv',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Latvia - Belarus (2 crossings)
    {
      id: 'lv-by-1',
      name: 'Grigorovshchina-Urbany',
      fromCountry: 'lv',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 80,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lv-by-2',
      name: 'Silene-Bigosovo',
      fromCountry: 'lv',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Rural area', 'Document verification']
      },
      status: 'open',
      waitTime: 70,
      lastUpdated: new Date('2024-01-15')
    },
    // Latvia - Lithuania (2 crossings)
    {
      id: 'lv-lt-1',
      name: 'Meitene-Medumi',
      fromCountry: 'lv',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Agricultural area']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lv-lt-2',
      name: 'Riga-Panevėžys (Via A6)',
      fromCountry: 'lv',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Main highway', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'li',
  name: 'Liechtenstein',
  continent: 'europe',
  neighbors: ['ch', 'at'],
  borderCrossings: [
    // Liechtenstein - Switzerland (2 crossings)
    {
      id: 'li-ch-1',
      name: 'Schaanwald-Buchs',
      fromCountry: 'li',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Small border', 'Limited capacity']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'li-ch-2',
      name: 'Bendern-Nendeln',
      fromCountry: 'li',
      toCountry: 'ch',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River valley', 'Tourist area']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    },
    // Liechtenstein - Austria (2 crossings)
    {
      id: 'li-at-1',
      name: 'Feldkirch-Schaanwald',
      fromCountry: 'li',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Small border', 'Limited capacity']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'li-at-2',
      name: 'Nendeln-Bendern',
      fromCountry: 'li',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'River valley', 'Tourist area']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'lt',
  name: 'Lithuania',
  continent: 'europe',
  neighbors: ['lv', 'by', 'pl', 'ru'],
  borderCrossings: [
    // Lithuania - Latvia (2 crossings)
    {
      id: 'lt-lv-1',
      name: 'Medumi-Meitene',
      fromCountry: 'lt',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Agricultural area']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lt-lv-2',
      name: 'Panevėžys-Riga (Via A6)',
      fromCountry: 'lt',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Main highway', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Lithuania - Belarus (2 crossings)
    {
      id: 'lt-by-1',
      name: 'Kalvarija-Kamenny Log',
      fromCountry: 'lt',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lt-by-2',
      name: 'Lavoriškės-Kotlovka',
      fromCountry: 'lt',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Lithuania - Poland (2 crossings)
    {
      id: 'lt-pl-1',
      name: 'Kalvarija-Budzisko',
      fromCountry: 'lt',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Forest area']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lt-pl-2',
      name: 'Lazdijai-Ogrodniki',
      fromCountry: 'lt',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Lake district', 'Tourist area']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Lithuania - Russia (Kaliningrad) (2 crossings)
    {
      id: 'lt-ru-1',
      name: 'Kybartai-Chernyshevskoye',
      fromCountry: 'lt',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'EU-Russia border', 'Security check']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lt-ru-2',
      name: 'Nida-Morskoye',
      fromCountry: 'lt',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Curonian Spit', 'Environmental restrictions']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'lu',
  name: 'Luxembourg',
  continent: 'europe',
  neighbors: ['be', 'de', 'fr'],
  borderCrossings: [
    // Luxembourg - Belgium (2 crossings)
    {
      id: 'lu-be-1',
      name: 'Luxembourg-Arlon',
      fromCountry: 'lu',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lu-be-2',
      name: 'Esch-sur-Sûre-Martelange',
      fromCountry: 'lu',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Rural area', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Luxembourg - Germany (2 crossings)
    {
      id: 'lu-de-1',
      name: 'Wasserbillig-Trier',
      fromCountry: 'lu',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River crossing', 'Urban area']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lu-de-2',
      name: 'Mertert-Saarburg',
      fromCountry: 'lu',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Industrial area', 'River port']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Luxembourg - France (2 crossings)
    {
      id: 'lu-fr-1',
      name: 'Pétange-Audun-le-Tiche',
      fromCountry: 'lu',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Industrial region', 'Steel industry area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lu-fr-2',
      name: 'Esch-sur-Alzette-Villerupt',
      fromCountry: 'lu',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'mk',
  name: 'North Macedonia',
  continent: 'europe',
  neighbors: ['rs', 'bg', 'gr', 'al', 'xk'],
  borderCrossings: [
    // North Macedonia - Serbia (2 crossings)
    {
      id: 'mk-rs-1',
      name: 'Tabanovce-Presevo',
      fromCountry: 'mk',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mk-rs-2',
      name: 'Jazince-Djeneral Jankovic',
      fromCountry: 'mk',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // North Macedonia - Bulgaria (2 crossings)
    {
      id: 'mk-bg-1',
      name: 'Blato-Gyueshevo',
      fromCountry: 'mk',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mk-bg-2',
      name: 'Delchevo-Stanke Lisichkovo',
      fromCountry: 'mk',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // North Macedonia - Greece (2 crossings)
    {
      id: 'mk-gr-1',
      name: 'Bogorodica-Evzoni',
      fromCountry: 'mk',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Main trade route', 'EU border control']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mk-gr-2',
      name: 'Medzitlija-Niki',
      fromCountry: 'mk',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Schengen visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // North Macedonia - Albania (2 crossings)
    {
      id: 'mk-al-1',
      name: 'Blato-Qafë Thanë',
      fromCountry: 'mk',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mk-al-2',
      name: 'Debar-Bllatë',
      fromCountry: 'mk',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Lake region', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // North Macedonia - Kosovo (2 crossings)
    {
      id: 'mk-xk-1',
      name: 'Blagoevgrad-Hani i Elezit',
      fromCountry: 'mk',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main trade route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mk-xk-2',
      name: 'Stenkovac-Vrbnica',
      fromCountry: 'mk',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'md',
  name: 'Moldova',
  continent: 'europe',
  neighbors: ['ro', 'ua'],
  borderCrossings: [
    // Moldova - Romania (2 crossings)
    {
      id: 'md-ro-1',
      name: 'Leușeni-Albița',
      fromCountry: 'md',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'md-ro-2',
      name: 'Sculeni-Sculeni',
      fromCountry: 'md',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Moldova - Ukraine (2 crossings)
    {
      id: 'md-ua-1',
      name: 'Otaci-Mohyliv-Podilskyi',
      fromCountry: 'md',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Security check']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'md-ua-2',
      name: 'Criva-Mamalyha',
      fromCountry: 'md',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'mc',
  name: 'Monaco',
  continent: 'europe',
  neighbors: ['fr'],
  borderCrossings: [
    // Monaco - France (4 crossings since it only has one land neighbor)
    {
      id: 'mc-fr-1',
      name: 'Avenue de la Costa-Menton',
      fromCountry: 'mc',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mc-fr-2',
      name: 'Boulevard du Jardin Exotique-Cap d\'Ail',
      fromCountry: 'mc',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route', 'Tourist area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mc-fr-3',
      name: 'Avenue Saint-Martin-Roquebrune-Cap-Martin',
      fromCountry: 'mc',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Residential area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mc-fr-4',
      name: 'Tunnel de la Basse Corniche-Beausoleil',
      fromCountry: 'mc',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Tunnel route', 'Peak hour congestion']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'me',
  name: 'Montenegro',
  continent: 'europe',
  neighbors: ['hr', 'ba', 'rs', 'xk', 'al'],
  borderCrossings: [
    // Montenegro - Croatia (2 crossings)
    {
      id: 'me-hr-1',
      name: 'Debeli Brijeg-Karasovići',
      fromCountry: 'me',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Coastal route', 'Tourist area']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'me-hr-2',
      name: 'Igalo-Kobila',
      fromCountry: 'me',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Limited capacity']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Montenegro - Bosnia and Herzegovina (2 crossings)
    {
      id: 'me-ba-1',
      name: 'Bozhaj-Hani i Hotit',
      fromCountry: 'me',
      toCountry: 'ba',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'me-ba-2',
      name: 'Muriqan-Tuzi',
      fromCountry: 'me',
      toCountry: 'ba',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural inspection', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Montenegro - Serbia (2 crossings)
    {
      id: 'me-rs-1',
      name: 'Dobrakovo-Boljare',
      fromCountry: 'me',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'me-rs-2',
      name: 'Čakor-Rožaje',
      fromCountry: 'me',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'High altitude', 'Seasonal restrictions']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Montenegro - Kosovo (2 crossings)
    {
      id: 'me-xk-1',
      name: 'Kula-Rozhajë',
      fromCountry: 'me',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'me-xk-2',
      name: 'Božaj-Vrbnica',
      fromCountry: 'me',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Montenegro - Albania (2 crossings)
    {
      id: 'me-al-1',
      name: 'Sukobin-Muriqan',
      fromCountry: 'me',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Lake Skadar area', 'Tourist route']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'me-al-2',
      name: 'Tuzi-Hani i Hotit',
      fromCountry: 'me',
      toCountry: 'al',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'nl',
  name: 'Netherlands',
  continent: 'europe',
  neighbors: ['de', 'be'],
  borderCrossings: [
    // Netherlands - Germany (2 crossings)
    {
      id: 'nl-de-1',
      name: 'Enschede-Gronau',
      fromCountry: 'nl',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Document verification']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'nl-de-2',
      name: 'Venlo-Kaldenkirchen',
      fromCountry: 'nl',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River region', 'Industrial area']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Netherlands - Belgium (2 crossings)
    {
      id: 'nl-be-1',
      name: 'Eindhoven-Hasselt',
      fromCountry: 'nl',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban corridor', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'nl-be-2',
      name: 'Bergen op Zoom-Antwerp',
      fromCountry: 'nl',
      toCountry: 'be',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Port area', 'Industrial inspection']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'no',
  name: 'Norway',
  continent: 'europe',
  neighbors: ['se', 'fi', 'ru'],
  borderCrossings: [
    // Norway - Sweden (2 crossings)
    {
      id: 'no-se-1',
      name: 'Svinesund-Strömstad',
      fromCountry: 'no',
      toCountry: 'se',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Bridge crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'no-se-2',
      name: 'Kornsjø-Strömstad',
      fromCountry: 'no',
      toCountry: 'se',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Norway - Finland (2 crossings)
    {
      id: 'no-fi-1',
      name: 'Skibotn-Kilpisjärvi',
      fromCountry: 'no',
      toCountry: 'fi',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Arctic area', 'Mountain pass']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'no-fi-2',
      name: 'Karasjok-Utsjoki',
      fromCountry: 'no',
      toCountry: 'fi',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Sami region', 'Remote area']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Norway - Russia (2 crossings)
    {
      id: 'no-ru-1',
      name: 'Storskog-Borisoglebsky',
      fromCountry: 'no',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Arctic border', 'Security check']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'no-ru-2',
      name: 'Grense Jakobselv-Rajakoski',
      fromCountry: 'no',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Remote area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'pl',
  name: 'Poland',
  continent: 'europe',
  neighbors: ['de', 'cz', 'sk', 'ua', 'by', 'lt', 'ru'],
  borderCrossings: [
    // Poland - Germany (2 crossings)
    {
      id: 'pl-de-1',
      name: 'Świecko-Frankfurt (Oder)',
      fromCountry: 'pl',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Main highway', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-de-2',
      name: 'Zgorzelec-Görlitz',
      fromCountry: 'pl',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'River crossing', 'Urban area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Poland - Czech Republic (2 crossings)
    {
      id: 'pl-cz-1',
      name: 'Cieszyn-Czechowice-Dziedzice',
      fromCountry: 'pl',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Urban area', 'River crossing']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-cz-2',
      name: 'Kudowa Słone-Pstrążna',
      fromCountry: 'pl',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain area', 'Tourist region']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Poland - Slovakia (2 crossings)
    {
      id: 'pl-sk-1',
      name: 'Chyżne-Trstená',
      fromCountry: 'pl',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-sk-2',
      name: 'Barwinek-Vyšný Komárnik',
      fromCountry: 'pl',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Poland - Ukraine (2 crossings)
    {
      id: 'pl-ua-1',
      name: 'Korczowa-Krakovets',
      fromCountry: 'pl',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-ua-2',
      name: 'Hrebenne-Rava-Ruska',
      fromCountry: 'pl',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Poland - Belarus (2 crossings)
    {
      id: 'pl-by-1',
      name: 'Terespol-Brest',
      fromCountry: 'pl',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-by-2',
      name: 'Kuźnica-Bruzgi',
      fromCountry: 'pl',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU border', 'Document verification']
      },
      status: 'open',
      waitTime: 100,
      lastUpdated: new Date('2024-01-15')
    },
    // Poland - Lithuania (2 crossings)
    {
      id: 'pl-lt-1',
      name: 'Budzisko-Kalvarija',
      fromCountry: 'pl',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Forest area']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-lt-2',
      name: 'Ogrodniki-Lazdijai',
      fromCountry: 'pl',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Lake district', 'Tourist area']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Poland - Russia (Kaliningrad) (2 crossings)
    {
      id: 'pl-ru-1',
      name: 'Bezledy-Bagrationovsk',
      fromCountry: 'pl',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'EU-Russia border', 'Security check']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'pl-ru-2',
      name: 'Gronowo-Mamonovo',
      fromCountry: 'pl',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ro',
  name: 'Romania',
  continent: 'europe',
  neighbors: ['hu', 'rs', 'bg', 'md', 'ua'],
  borderCrossings: [
    // Romania - Hungary (2 crossings)
    {
      id: 'ro-hu-1',
      name: 'Nădlac-Nagylak',
      fromCountry: 'ro',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Plains region', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ro-hu-2',
      name: 'Borș-Ártánd',
      fromCountry: 'ro',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Romania - Serbia (2 crossings)
    {
      id: 'ro-rs-1',
      name: 'Moravița-Vršac',
      fromCountry: 'ro',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ro-rs-2',
      name: 'Porțile de Fier-Djerdap',
      fromCountry: 'ro',
      toCountry: 'rs',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Danube crossing', 'Industrial area']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Romania - Bulgaria (2 crossings)
    {
      id: 'ro-bg-1',
      name: 'Giurgiu-Ruse',
      fromCountry: 'ro',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Bridge crossing', 'EU border']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ro-bg-2',
      name: 'Calafat-Vidin',
      fromCountry: 'ro',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Bridge crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Romania - Moldova (2 crossings)
    {
      id: 'ro-md-1',
      name: 'Albița-Leușeni',
      fromCountry: 'ro',
      toCountry: 'md',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ro-md-2',
      name: 'Sculeni-Sculeni',
      fromCountry: 'ro',
      toCountry: 'md',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Romania - Ukraine (2 crossings)
    {
      id: 'ro-ua-1',
      name: 'Siret-Porubne',
      fromCountry: 'ro',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ro-ua-2',
      name: 'Sighetu Marmației-Solotvyno',
      fromCountry: 'ro',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'sm',
  name: 'San Marino',
  continent: 'europe',
  neighbors: ['it'],
  borderCrossings: [
    // San Marino - Italy (4 crossings since it only has one land neighbor)
    {
      id: 'sm-it-1',
      name: 'Serravalle-Rimini',
      fromCountry: 'sm',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain route', 'Limited hours']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sm-it-2',
      name: 'Montegiardino-Coriano',
      fromCountry: 'sm',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Rural area', 'Agricultural inspection']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sm-it-3',
      name: 'Borgo Maggiore-San Leo',
      fromCountry: 'sm',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Mountain pass', 'Tourist route']
      },
      status: 'open',
      waitTime: 8,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sm-it-4',
      name: 'Domagnano-Montefeltro',
      fromCountry: 'sm',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Historic area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 7,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'rs',
  name: 'Serbia',
  continent: 'europe',
  neighbors: ['hu', 'ro', 'bg', 'mk', 'xk', 'me', 'ba', 'hr'],
  borderCrossings: [
    // Serbia - Hungary (2 crossings)
    {
      id: 'rs-hu-1',
      name: 'Horgoš-Röszke',
      fromCountry: 'rs',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 70,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-hu-2',
      name: 'Kelebija-Tompa',
      fromCountry: 'rs',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - Romania (2 crossings)
    {
      id: 'rs-ro-1',
      name: 'Vršac-Moravița',
      fromCountry: 'rs',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-ro-2',
      name: 'Djerdap-Porțile de Fier',
      fromCountry: 'rs',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Danube crossing', 'Industrial area']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - Bulgaria (2 crossings)
    {
      id: 'rs-bg-1',
      name: 'Gradina-Kalotina',
      fromCountry: 'rs',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-bg-2',
      name: 'Brashlyan-Bregovo',
      fromCountry: 'rs',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Limited capacity']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - North Macedonia (2 crossings)
    {
      id: 'rs-mk-1',
      name: 'Presevo-Tabanovce',
      fromCountry: 'rs',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-mk-2',
      name: 'Djeneral Jankovic-Jazince',
      fromCountry: 'rs',
      toCountry: 'mk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - Kosovo (2 crossings)
    {
      id: 'rs-xk-1',
      name: 'Ribarić-Merdare',
      fromCountry: 'rs',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-xk-2',
      name: 'Brjak-Jarinje',
      fromCountry: 'rs',
      toCountry: 'xk',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - Montenegro (2 crossings)
    {
      id: 'rs-me-1',
      name: 'Boljare-Dobrakovo',
      fromCountry: 'rs',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-me-2',
      name: 'Rožaje-Čakor',
      fromCountry: 'rs',
      toCountry: 'me',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'High altitude', 'Seasonal restrictions']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - Bosnia and Herzegovina (2 crossings)
    {
      id: 'rs-ba-1',
      name: 'Kotroman-Rača',
      fromCountry: 'rs',
      toCountry: 'ba',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountainous terrain', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-ba-2',
      name: 'Bijeljina-Badovinci',
      fromCountry: 'rs',
      toCountry: 'ba',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Serbia - Croatia (2 crossings)
    {
      id: 'rs-hr-1',
      name: 'Batrovci-Bajakovo',
      fromCountry: 'rs',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'rs-hr-2',
      name: 'Šid-Tovarnik',
      fromCountry: 'rs',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport', 'Visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'sk',
  name: 'Slovakia',
  continent: 'europe',
  neighbors: ['cz', 'pl', 'ua', 'hu', 'at'],
  borderCrossings: [
    // Slovakia - Czech Republic (2 crossings)
    {
      id: 'sk-cz-1',
      name: 'Petrohrad-Dresden',
      fromCountry: 'sk',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain area', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sk-cz-2',
      name: 'Svrčinovec-Mosty u Jablunkova',
      fromCountry: 'sk',
      toCountry: 'cz',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovakia - Poland (2 crossings)
    {
      id: 'sk-pl-1',
      name: 'Trstená-Chyżne',
      fromCountry: 'sk',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain pass', 'Weather dependent']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sk-pl-2',
      name: 'Vyšný Komárnik-Barwinek',
      fromCountry: 'sk',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovakia - Ukraine (2 crossings)
    {
      id: 'sk-ua-1',
      name: 'Vyšné Nemecké-Uzhhorod',
      fromCountry: 'sk',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'open',
      waitTime: 85,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sk-ua-2',
      name: 'Ubľa-Maly Bereznyi',
      fromCountry: 'sk',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Ukrainian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 65,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovakia - Hungary (2 crossings)
    {
      id: 'sk-hu-1',
      name: 'Rusovce-Rajka',
      fromCountry: 'sk',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'River crossing', 'Urban area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sk-hu-2',
      name: 'Trebisov-Sátoraljaújhely',
      fromCountry: 'sk',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountain area', 'Limited services']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovakia - Austria (2 crossings)
    {
      id: 'sk-at-1',
      name: 'Berg-Petrzalka',
      fromCountry: 'sk',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'River crossing']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sk-at-2',
      name: 'Jarovce-Kittsee',
      fromCountry: 'sk',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Agricultural area', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'si',
  name: 'Slovenia',
  continent: 'europe',
  neighbors: ['it', 'at', 'hu', 'hr'],
  borderCrossings: [
    // Slovenia - Italy (2 crossings)
    {
      id: 'si-it-1',
      name: 'Nova Gorica-Gorizia',
      fromCountry: 'si',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Urban area', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'si-it-2',
      name: 'Škofije-Trieste',
      fromCountry: 'si',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Coastal route', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovenia - Austria (2 crossings)
    {
      id: 'si-at-1',
      name: 'Sentilj-Spielberg',
      fromCountry: 'si',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountainous area', 'Weather dependent']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'si-at-2',
      name: 'Ljubelj-Loibl',
      fromCountry: 'si',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain tunnel', 'Toll road']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovenia - Hungary (2 crossings)
    {
      id: 'si-hu-1',
      name: 'Dobova-Rédics',
      fromCountry: 'si',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Mountainous area', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'si-hu-2',
      name: 'Salovci-Hodoš',
      fromCountry: 'si',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Rural area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Slovenia - Croatia (2 crossings)
    {
      id: 'si-hr-1',
      name: 'Obrežje-Bregana',
      fromCountry: 'si',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'EU border', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'si-hr-2',
      name: 'Gruškovje-Macelj',
      fromCountry: 'si',
      toCountry: 'hr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'se',
  name: 'Sweden',
  continent: 'europe',
  neighbors: ['no', 'fi'],
  borderCrossings: [
    // Sweden - Norway (2 crossings)
    {
      id: 'se-no-1',
      name: 'Strömstad-Svinesund',
      fromCountry: 'se',
      toCountry: 'no',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Bridge crossing', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'se-no-2',
      name: 'Strömstad-Kornsjø',
      fromCountry: 'se',
      toCountry: 'no',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Sweden - Finland (2 crossings)
    {
      id: 'se-fi-1',
      name: 'Haparanda-Tornio',
      fromCountry: 'se',
      toCountry: 'fi',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'River crossing', 'EU border']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'se-fi-2',
      name: 'Karesuando-Karesuvanto',
      fromCountry: 'se',
      toCountry: 'fi',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Green Card'],
        restrictions: ['Customs check', 'Arctic area', 'Winter conditions']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ch',
  name: 'Switzerland',
  continent: 'europe',
  neighbors: ['de', 'fr', 'it', 'at', 'li'],
  borderCrossings: [
    // Switzerland - Germany (2 crossings)
    {
      id: 'ch-de-1',
      name: 'Weil am Rhein-Basel',
      fromCountry: 'ch',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ch-de-2',
      name: 'Kreuzlingen-Konstanz',
      fromCountry: 'ch',
      toCountry: 'de',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Lake border', 'Tourist area']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    // Switzerland - France (2 crossings)
    {
      id: 'ch-fr-1',
      name: 'Annemasse-Geneva',
      fromCountry: 'ch',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ch-fr-2',
      name: 'Saint-Louis-Basel',
      fromCountry: 'ch',
      toCountry: 'fr',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Industrial area', 'River crossing']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    // Switzerland - Italy (2 crossings)
    {
      id: 'ch-it-1',
      name: 'Como-Chiasso',
      fromCountry: 'ch',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Urban area', 'Peak hour delays']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ch-it-2',
      name: 'Brig-Domodossola',
      fromCountry: 'ch',
      toCountry: 'it',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain route', 'Tunnel access']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: new Date('2024-01-15')
    },
    // Switzerland - Austria (2 crossings)
    {
      id: 'ch-at-1',
      name: 'St. Margrethen-Lustenau',
      fromCountry: 'ch',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'River crossing', 'Urban area']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ch-at-2',
      name: 'Buchs-Feldkirch',
      fromCountry: 'ch',
      toCountry: 'at',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance', 'Vignette'],
        restrictions: ['Customs check', 'Mountain valley', 'Limited services']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    // Switzerland - Liechtenstein (2 crossings)
    {
      id: 'ch-li-1',
      name: 'Buchs-Schaanwald',
      fromCountry: 'ch',
      toCountry: 'li',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'Small border', 'Limited capacity']
      },
      status: 'open',
      waitTime: 10,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ch-li-2',
      name: 'Kreuzlingen-Nendeln',
      fromCountry: 'ch',
      toCountry: 'li',
      requirements: {
        documents: ['Passport or EU ID Card'],
        vehicleRequirements: ['Vehicle registration', 'Insurance'],
        restrictions: ['Customs check', 'River valley', 'Tourist area']
      },
      status: 'open',
      waitTime: 5,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ua',
  name: 'Ukraine',
  continent: 'europe',
  neighbors: ['pl', 'sk', 'hu', 'ro', 'md', 'by', 'ru'],
  borderCrossings: [
    // Ukraine - Poland (2 crossings)
    {
      id: 'ua-pl-1',
      name: 'Krakovets-Korczowa',
      fromCountry: 'ua',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport', 'Polish visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-pl-2',
      name: 'Rava-Ruska-Hrebenne',
      fromCountry: 'ua',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport', 'Polish visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Agricultural area', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Ukraine - Slovakia (2 crossings)
    {
      id: 'ua-sk-1',
      name: 'Uzhhorod-Vyšné Nemecké',
      fromCountry: 'ua',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport', 'Slovak visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'open',
      waitTime: 85,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-sk-2',
      name: 'Maly Bereznyi-Ubľa',
      fromCountry: 'ua',
      toCountry: 'sk',
      requirements: {
        documents: ['Passport', 'Slovak visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 65,
      lastUpdated: new Date('2024-01-15')
    },
    // Ukraine - Hungary (2 crossings)
    {
      id: 'ua-hu-1',
      name: 'Chop-Záhony',
      fromCountry: 'ua',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport', 'Hungarian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rail bridge', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-hu-2',
      name: 'Beregsurány-Lónya',
      fromCountry: 'ua',
      toCountry: 'hu',
      requirements: {
        documents: ['Passport', 'Hungarian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited capacity']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Ukraine - Romania (2 crossings)
    {
      id: 'ua-ro-1',
      name: 'Porubne-Siret',
      fromCountry: 'ua',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport', 'Romanian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Mountain pass', 'Security check']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-ro-2',
      name: 'Solotvyno-Sighetu Marmației',
      fromCountry: 'ua',
      toCountry: 'ro',
      requirements: {
        documents: ['Passport', 'Romanian visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Ukraine - Moldova (2 crossings)
    {
      id: 'ua-md-1',
      name: 'Mohyliv-Podilskyi-Otaci',
      fromCountry: 'ua',
      toCountry: 'md',
      requirements: {
        documents: ['Passport', 'Moldovan visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'River crossing', 'Security check']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-md-2',
      name: 'Mamalyha-Criva',
      fromCountry: 'ua',
      toCountry: 'md',
      requirements: {
        documents: ['Passport', 'Moldovan visa if required'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited services']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: new Date('2024-01-15')
    },
    // Ukraine - Belarus (2 crossings)
    {
      id: 'ua-by-1',
      name: 'Vilcha-Alexandrovka',
      fromCountry: 'ua',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Security check', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-by-2',
      name: 'Novo Yarilovichi-Novaya Guta',
      fromCountry: 'ua',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Belarus visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Forest area', 'Limited services']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Ukraine - Russia (2 crossings)
    {
      id: 'ua-ru-1',
      name: 'Hoptivka-Nekhoteyevka',
      fromCountry: 'ua',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Main highway', 'Security check']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ua-ru-2',
      name: 'Milove-Millerovo',
      fromCountry: 'ua',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance'],
        restrictions: ['Customs inspection', 'Rural area', 'Limited capacity']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
  {
  id: 'ru',
  name: 'Russia',
  continent: 'europe',
  neighbors: ['no', 'fi', 'ee', 'lv', 'lt', 'pl', 'by', 'ua', 'ge', 'az', 'kz', 'mn', 'cn', 'kp'], // Includes European and Asian neighbors
  borderCrossings: [
    // Russia - Norway
    {
      id: 'ru-no-1',
      name: 'Borisoglebsk-Storskog',
      fromCountry: 'ru',
      toCountry: 'no',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Arctic crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-no-2',
      name: 'Nikel-Kirkenes',
      fromCountry: 'ru',
      toCountry: 'no',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Winter equipment'],
        restrictions: ['Limited hours', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Finland
    {
      id: 'ru-fi-1',
      name: 'Vyborg-Torfyanovka',
      fromCountry: 'ru',
      toCountry: 'fi',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'EU compliance certificate'],
        restrictions: ['Busy crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-fi-2',
      name: 'Svetogorsk-Imatra',
      fromCountry: 'ru',
      toCountry: 'fi',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Industrial area', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Estonia
    {
      id: 'ru-ee-1',
      name: 'Ivangorod-Narva',
      fromCountry: 'ru',
      toCountry: 'ee',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['River crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-ee-2',
      name: 'Shumilkino-Luhamaa',
      fromCountry: 'ru',
      toCountry: 'ee',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical certificate'],
        restrictions: ['Rural area', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Latvia
    {
      id: 'ru-lv-1',
      name: 'Terehova-Buraki',
      fromCountry: 'ru',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Forest area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-lv-2',
      name: 'Grebenhina-Grebneva',
      fromCountry: 'ru',
      toCountry: 'lv',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Vehicle inspection'],
        restrictions: ['Agricultural area', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Lithuania
    {
      id: 'ru-lt-1',
      name: 'Sovetsk-Panemune',
      fromCountry: 'ru',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['River crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-lt-2',
      name: 'Kybartai-Chernyshevskoye',
      fromCountry: 'ru',
      toCountry: 'lt',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Rail and road crossing', 'Customs inspection', 'Commercial traffic']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Poland
    {
      id: 'ru-pl-1',
      name: 'Bagrationovsk-Bezledy',
      fromCountry: 'ru',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'EU compliance certificate'],
        restrictions: ['Historical area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-pl-2',
      name: 'Gusev-Goldap',
      fromCountry: 'ru',
      toCountry: 'pl',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical certificate'],
        restrictions: ['Lake area', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Belarus
    {
      id: 'ru-by-1',
      name: 'Krasnoye-Kamenny Log',
      fromCountry: 'ru',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Belarus visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Union State crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-by-2',
      name: 'Semyonovka-Grigorovshchina',
      fromCountry: 'ru',
      toCountry: 'by',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Belarus visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Vehicle inspection'],
        restrictions: ['Rural area', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Ukraine
    {
      id: 'ru-ua-1',
      name: 'Izvaryne-Donbas',
      fromCountry: 'ru',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Ukrainian visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict zone', 'Highly restricted', 'Security clearance required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-ua-2',
      name: 'Matveyev Kurgan-Uspenka',
      fromCountry: 'ru',
      toCountry: 'ua',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Ukrainian visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict zone', 'Highly restricted', 'Security clearance required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Georgia
    {
      id: 'ru-ge-1',
      name: 'Verkhny Lars-Larsi',
      fromCountry: 'ru',
      toCountry: 'ge',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Georgian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-ge-2',
      name: 'Nizhny Zaramag-Upper Lars',
      fromCountry: 'ru',
      toCountry: 'ge',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Georgian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', '4x4 recommended'],
        restrictions: ['High altitude', 'Seasonal closure', 'Customs inspection']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    // Russia - Azerbaijan
    {
      id: 'ru-az-1',
      name: 'Yarag-Kazmalyar',
      fromCountry: 'ru',
      toCountry: 'az',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Azerbaijani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Caspian coastal crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ru-az-2',
      name: 'Samur-Yalama',
      fromCountry: 'ru',
      toCountry: 'az',
      requirements: {
        documents: ['Passport', 'Russian visa', 'Azerbaijani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountainous area', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'iq',
  name: 'Iraq',
  continent: 'asia',
  neighbors: ['tr', 'sy', 'jo', 'sa', 'kw', 'ir'],
  borderCrossings: [
    // Iraq - Turkey
    {
      id: 'iq-tr-1',
      name: 'Ibrahim Khalil Border Crossing',
      fromCountry: 'iq',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Mountainous area', 'Security concerns', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'iq-tr-2',
      name: 'Habur Border Gate',
      fromCountry: 'iq',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Commercial route', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Iraq - Syria
    {
      id: 'iq-sy-1',
      name: 'Al-Qa\'im Border Crossing',
      fromCountry: 'iq',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Syrian visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Security concerns']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'iq-sy-2',
      name: 'Rabia Border Crossing',
      fromCountry: 'iq',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Syrian visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Limited access']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    // Iraq - Jordan
    {
      id: 'iq-jo-1',
      name: 'Al Karama Border Crossing',
      fromCountry: 'iq',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert crossing', 'Sand storms', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'iq-jo-2',
      name: 'Treibil Border Crossing',
      fromCountry: 'iq',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Iraq - Saudi Arabia
    {
      id: 'iq-sa-1',
      name: 'Arar Border Crossing',
      fromCountry: 'iq',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'iq-sa-2',
      name: 'Jumaima Border Crossing',
      fromCountry: 'iq',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Iraq - Kuwait
    {
      id: 'iq-kw-1',
      name: 'Safwan Border Crossing',
      fromCountry: 'iq',
      toCountry: 'kw',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Kuwaiti visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'iq-kw-2',
      name: 'Abdali Border Crossing',
      fromCountry: 'iq',
      toCountry: 'kw',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Kuwaiti visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Iraq - Iran
    {
      id: 'iq-ir-1',
      name: 'Mehran Border Crossing',
      fromCountry: 'iq',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountainous area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'iq-ir-2',
      name: 'Shalamcheh Border Crossing',
      fromCountry: 'iq',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Iraqi visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Marshy area', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'il',
  name: 'Israel',
  continent: 'asia',
  neighbors: ['lb', 'sy', 'jo', 'eg', 'ps'],
  borderCrossings: [
    // Israel - Jordan crossings
    {
      id: 'il-jo-1',
      name: 'Allenby Bridge/King Hussein Bridge',
      fromCountry: 'il',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Israeli exit permit', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Limited to specific nationalities', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'il-jo-2',
      name: 'Jordan River/Sheikh Hussein Crossing',
      fromCountry: 'il',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Israeli exit permit', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'il-jo-3',
      name: 'Yitzhak Rabin/Arava Crossing',
      fromCountry: 'il',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Israeli exit permit', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Southern desert crossing', 'Customs inspection', 'Heat precautions']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Israel - Egypt crossings
    {
      id: 'il-eg-1',
      name: 'Taba Border Crossing',
      fromCountry: 'il',
      toCountry: 'eg',
      requirements: {
        documents: ['Passport', 'Israeli exit permit', 'Egyptian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Sinai Peninsula access', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'il-eg-2',
      name: 'Nitzana Border Crossing',
      fromCountry: 'il',
      toCountry: 'eg',
      requirements: {
        documents: ['Passport', 'Israeli exit permit', 'Egyptian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Commercial permit'],
        restrictions: ['Commercial vehicles only', 'Customs inspection', 'Limited hours']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Israel - Palestine crossings
    {
      id: 'il-ps-1',
      name: 'Erez Crossing',
      fromCountry: 'il',
      toCountry: 'ps',
      requirements: {
        documents: ['Passport', 'Special permit', 'Security clearance'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['Gaza access', 'Highly secured', 'Limited to specific purposes']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'il-ps-2',
      name: 'Qalandia Checkpoint',
      fromCountry: 'il',
      toCountry: 'ps',
      requirements: {
        documents: ['Passport', 'Special permit', 'Security clearance'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['West Bank access', 'Security screening', 'Possible delays']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'il-ps-3',
      name: 'Allenby Bridge (Palestinian side)',
      fromCountry: 'il',
      toCountry: 'ps',
      requirements: {
        documents: ['Passport', 'Special permit', 'Security clearance'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['West Bank access', 'Customs inspection', 'Security screening']
      },
      status: 'restricted',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    // Israel - Lebanon (closed due to political situation)
    {
      id: 'il-lb-1',
      name: 'Rosh HaNikra Crossing',
      fromCountry: 'il',
      toCountry: 'lb',
      requirements: {
        documents: ['Passport', 'Special diplomatic permit', 'Security clearance'],
        vehicleRequirements: ['Diplomatic vehicles only', 'Military escort', 'UN approval'],
        restrictions: ['Closed to general public', 'Diplomatic access only', 'Heavily fortified']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    // Israel - Syria (closed due to political situation)
    {
      id: 'il-sy-1',
      name: 'Quneitra Crossing',
      fromCountry: 'il',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Special diplomatic permit', 'Security clearance'],
        vehicleRequirements: ['Diplomatic vehicles only', 'Military escort', 'UN approval'],
        restrictions: ['Closed to general public', 'Diplomatic access only', 'Heavily fortified']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ge',
  name: 'Georgia',
  continent: 'asia',
  neighbors: ['ru', 'az', 'am', 'tr'],
  borderCrossings: [
    // Georgia - Russia crossings
    {
      id: 'ge-ru-1',
      name: 'Verkhny Lars-Larsi',
      fromCountry: 'ge',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ge-ru-2',
      name: 'Zemo Larsi-Kazbegi',
      fromCountry: 'ge',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', '4x4 recommended'],
        restrictions: ['High altitude', 'Seasonal closure', 'Customs inspection']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    // Georgia - Azerbaijan crossings
    {
      id: 'ge-az-1',
      name: 'Red Bridge-Sadakhlo',
      fromCountry: 'ge',
      toCountry: 'az',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Azerbaijani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Historic crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ge-az-2',
      name: 'Lagodekhi-Balakan',
      fromCountry: 'ge',
      toCountry: 'az',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Azerbaijani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Georgia - Armenia crossings
    {
      id: 'ge-am-1',
      name: 'Sadakhlo-Bagratashen',
      fromCountry: 'ge',
      toCountry: 'am',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Armenian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ge-am-2',
      name: 'Ninotsminda-Bavra',
      fromCountry: 'ge',
      toCountry: 'am',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Armenian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['High altitude crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Georgia - Turkey crossings
    {
      id: 'ge-tr-1',
      name: 'Sarpi-Sarp',
      fromCountry: 'ge',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Black Sea coastal crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ge-tr-2',
      name: 'Vale-Posof',
      fromCountry: 'ge',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Georgian visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountainous area', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'kp',
  name: 'North Korea',
  continent: 'asia',
  neighbors: ['cn', 'kr', 'ru'],
  borderCrossings: [
    // North Korea - China crossings
    {
      id: 'kp-cn-1',
      name: 'Sinuiju-Dandong',
      fromCountry: 'kp',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'North Korean visa', 'Chinese visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Diplomatic clearance'],
        restrictions: ['Highly restricted', 'Military escort required', 'Limited access']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kp-cn-2',
      name: 'Namyang-Tumen',
      fromCountry: 'kp',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'North Korean visa', 'Chinese visa', 'Military permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Border zone', 'Limited access', 'Customs inspection']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    // North Korea - South Korea crossings
    {
      id: 'kp-kr-1',
      name: 'Panmunjom Joint Security Area',
      fromCountry: 'kp',
      toCountry: 'kr',
      requirements: {
        documents: ['Passport', 'Special permit', 'Military escort'],
        vehicleRequirements: ['Approved vehicles only', 'Security clearance', 'Military escort'],
        restrictions: ['DMZ crossing', 'Diplomatic access only', 'Highly secured']
      },
      status: 'restricted',
      waitTime: 360,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kp-kr-2',
      name: 'Kaesong Industrial Region',
      fromCountry: 'kp',
      toCountry: 'kr',
      requirements: {
        documents: ['Passport', 'Special economic zone permit', 'Security clearance'],
        vehicleRequirements: ['Approved commercial vehicles', 'Security inspection', 'Escort required'],
        restrictions: ['Industrial zone only', 'Limited access', 'Security checks']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    // North Korea - Russia crossings
    {
      id: 'kp-ru-1',
      name: 'Tumangang-Khasan',
      fromCountry: 'kp',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'North Korean visa', 'Russian visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Limited access', 'Security concerns', 'Customs inspection']
      },
      status: 'restricted',
      waitTime: 300,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'kr',
  name: 'South Korea',
  continent: 'asia',
  neighbors: ['kp'],
  borderCrossings: [
    // South Korea - North Korea crossings
    {
      id: 'kr-kp-1',
      name: 'Panmunjom Joint Security Area',
      fromCountry: 'kr',
      toCountry: 'kp',
      requirements: {
        documents: ['Passport', 'Special permit', 'Military escort'],
        vehicleRequirements: ['Approved vehicles only', 'Security clearance', 'Military escort'],
        restrictions: ['DMZ crossing', 'Diplomatic access only', 'Highly secured']
      },
      status: 'restricted',
      waitTime: 360,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kr-kp-2',
      name: 'Kaesong Industrial Region',
      fromCountry: 'kr',
      toCountry: 'kp',
      requirements: {
        documents: ['Passport', 'Special economic zone permit', 'Security clearance'],
        vehicleRequirements: ['Approved commercial vehicles', 'Security inspection', 'Escort required'],
        restrictions: ['Industrial zone only', 'Limited access', 'Security checks']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'bn',
  name: 'Brunei',
  continent: 'asia',
  neighbors: ['my'],
  borderCrossings: [
    // Brunei - Malaysia crossings
    {
      id: 'bn-my-1',
      name: 'Sungai Tujoh Border Post',
      fromCountry: 'bn',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Brunei visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Rainforest crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bn-my-2',
      name: 'Labu Border Post',
      fromCountry: 'bn',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Brunei visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Coastal crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'bn-my-3',
      name: 'Ujong Jalan Border Post',
      fromCountry: 'bn',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Brunei visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Mountainous terrain', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'id',
  name: 'Indonesia',
  continent: 'asia',
  neighbors: ['my', 'pg', 'tl'],
  borderCrossings: [
    // Indonesia - Malaysia crossings (Borneo island)
    {
      id: 'id-my-1',
      name: 'Entikong-Tebedu',
      fromCountry: 'id',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Indonesian visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Rainforest crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'id-my-2',
      name: 'Aruk-Biawak',
      fromCountry: 'id',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Indonesian visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Remote area', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'id-my-3',
      name: 'Nanga Badau-Lubok Antu',
      fromCountry: 'id',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Indonesian visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'River crossing permit'],
        restrictions: ['River crossing', 'Boat required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Indonesia - Papua New Guinea crossings
    {
      id: 'id-pg-1',
      name: 'Skouw-Wutung',
      fromCountry: 'id',
      toCountry: 'pg',
      requirements: {
        documents: ['Passport', 'Indonesian visa', 'Papua New Guinea visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountainous terrain', '4x4 required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Indonesia - Timor-Leste crossings
    {
      id: 'id-tl-1',
      name: 'Motaain-Batugade',
      fromCountry: 'id',
      toCountry: 'tl',
      requirements: {
        documents: ['Passport', 'Indonesian visa', 'Timor-Leste visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Coastal crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'id-tl-2',
      name: 'Wini-Napan',
      fromCountry: 'id',
      toCountry: 'tl',
      requirements: {
        documents: ['Passport', 'Indonesian visa', 'Timor-Leste visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountainous terrain', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'mn',
  name: 'Mongolia',
  continent: 'asia',
  neighbors: ['ru', 'cn'],
  borderCrossings: [
    // Mongolia - Russia crossings
    {
      id: 'mn-ru-1',
      name: 'Altanbulag-Kyakhta',
      fromCountry: 'mn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Mongolia visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Steppe crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mn-ru-2',
      name: 'Tsagaannuur-Tashanta',
      fromCountry: 'mn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Mongolia visa', 'Russian visa', 'Mountain permit'],
        vehicleRequirements: ['4x4 vehicle required', 'Winter equipment', 'High altitude insurance'],
        restrictions: ['Altai Mountains', 'Seasonal closure', 'Limited services']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Mongolia - China crossings
    {
      id: 'mn-cn-1',
      name: 'Zamyn-Üüd-Erenhot',
      fromCountry: 'mn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Mongolia visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Gobi Desert crossing', 'Sand storms possible', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mn-cn-2',
      name: 'Bichigt-Takashiken',
      fromCountry: 'mn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Mongolia visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Gobi Desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'mn-cn-3',
      name: 'Mondy-Handagai',
      fromCountry: 'mn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Mongolia visa', 'Chinese visa', 'Border permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountainous terrain', 'Seasonal access', 'Customs inspection']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'kz',
  name: 'Kazakhstan',
  continent: 'asia',
  neighbors: ['ru', 'cn', 'kg', 'uz', 'tm'],
  borderCrossings: [
    // Kazakhstan - Russia crossings
    {
      id: 'kz-ru-1',
      name: 'Petropavl-Kurgan',
      fromCountry: 'kz',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Customs inspection', 'Agricultural check', 'Security screening']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kz-ru-2',
      name: 'Oral-Uralsk',
      fromCountry: 'kz',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Customs inspection', 'Document verification', 'Possible delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Kazakhstan - China crossings
    {
      id: 'kz-cn-1',
      name: 'Khorgos Gateway',
      fromCountry: 'kz',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['One of the busiest crossings', 'Customs inspection', 'Commercial vehicle queues']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kz-cn-2',
      name: 'Dostyk-Alashankou',
      fromCountry: 'kz',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Major rail and road crossing', 'Customs inspection', 'Commercial traffic']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Kazakhstan - Kyrgyzstan crossings
    {
      id: 'kz-kg-1',
      name: 'Korday-Bordubash',
      fromCountry: 'kz',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Mountainous area', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kz-kg-2',
      name: 'Aktilek-Avtodorozhny',
      fromCountry: 'kz',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical certificate'],
        restrictions: ['Steppe crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Kazakhstan - Uzbekistan crossings
    {
      id: 'kz-uz-1',
      name: 'Gisht Kuprik-Saryagash',
      fromCountry: 'kz',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Sand storms possible', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kz-uz-2',
      name: 'Zhibek Zholy-Dustlik',
      fromCountry: 'kz',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Vehicle inspection'],
        restrictions: ['Commercial route', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Kazakhstan - Turkmenistan crossings
    {
      id: 'kz-tm-1',
      name: 'Beyneu-Zhetybai',
      fromCountry: 'kz',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert terrain', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kz-tm-2',
      name: 'Kazakhstan-Turkmenistan Friendship Bridge',
      fromCountry: 'kz',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Kazakhstan visa', 'Turkmenistan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Bridge toll'],
        restrictions: ['Bridge crossing', 'Height restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'af',
  name: 'Afghanistan',
  continent: 'asia',
  neighbors: ['cn', 'ir', 'pk', 'tj', 'tm', 'uz'],
  borderCrossings: [
    // Afghanistan - China borders
    {
      id: 'af-cn-wakhjir',
      name: 'Wakhjir Pass',
      fromCountry: 'af',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Chinese visa', 'Military permit'],
        vehicleRequirements: ['Military escort required', 'Special vehicle permit', 'Security clearance'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'closed',
      waitTime: 360,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Pakistan borders
    {
      id: 'af-pk-torkham',
      name: 'Torkham Border Crossing',
      fromCountry: 'af',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Pakistani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Security escort required', 'Limited hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-pk-chaman',
      name: 'Chaman-Spin Boldak Border',
      fromCountry: 'af',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Pakistani visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security escort'],
        restrictions: ['High security area', 'Limited access', 'Customs inspection']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Iran borders
    {
      id: 'af-ir-islam-qala',
      name: 'Islam Qala-Dogharoun Border',
      fromCountry: 'af',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert driving permit'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-ir-milak',
      name: 'Milak-Zaranj Border',
      fromCountry: 'af',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Off-road capability'],
        restrictions: ['Remote area', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Tajikistan borders
    {
      id: 'af-tj-nizhny-pyanj',
      name: 'Nizhny Pyanj-Bridge of Friendship',
      fromCountry: 'af',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border permit'],
        restrictions: ['Bridge crossing', 'Security checks', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-tj-shir-khan',
      name: 'Shir Khan Bandar-Border',
      fromCountry: 'af',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferry ticket'],
        restrictions: ['River crossing', 'Ferry required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Turkmenistan borders
    {
      id: 'af-tm-torghundi',
      name: 'Torghundi-Border',
      fromCountry: 'af',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert permit'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Limited services']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'af-tm-aqina',
      name: 'Aqina-Border',
      fromCountry: 'af',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Remote border', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: '2024-01-15'
    },
    // Afghanistan - Uzbekistan borders
    {
      id: 'af-uz-hairatan',
      name: 'Hairatan-Termez Border',
      fromCountry: 'af',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Afghan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferry ticket'],
        restrictions: ['Amu Darya river crossing', 'Ferry required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'np',
  name: 'Nepal',
  continent: 'asia',
  neighbors: ['cn', 'in'],
  borderCrossings: [
    // Nepal - China borders
    {
      id: 'np-cn-kodari',
      name: 'Zhangmu-Kodari Border',
      fromCountry: 'np',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Nepal visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Subject to weather conditions', 'Customs inspection', 'Currency declaration']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-cn-rasuwa',
      name: 'Gyirong-Rasuwa Border',
      fromCountry: 'np',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Nepal visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['High altitude crossing', 'Weather dependent', 'Limited facilities']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    // Nepal - India borders
    {
      id: 'np-in-ruknu',
      name: 'Raxaul-Birgunj Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Open to all traffic', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-in-sunauli',
      name: 'Sunauli-Bhairahawa Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major trade route', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-in-kakarbhitta',
      name: 'Kakarbhitta-Panitanki Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Eastern border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'np-in-mahendranagar',
      name: 'Mahendranagar-Banbassa Border',
      fromCountry: 'np',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Nepal visa on arrival for Indians', 'Indian visa for Nepalis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Western border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'bt',
  name: 'Bhutan',
  continent: 'asia',
  neighbors: ['cn', 'in'],
  borderCrossings: [
    // Bhutan - China borders
    {
      id: 'bt-cn-tulung',
      name: 'Tulung La Pass',
      fromCountry: 'bt',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Bhutan visa', 'Chinese visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    // Bhutan - India borders
    {
      id: 'bt-in-phuentsholing',
      name: 'Phuentsholing-Jaigaon Border',
      fromCountry: 'bt',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bhutan visa for non-Indians', 'Indian visa for non-Bhutanese'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Main trading border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bt-in-samdrup',
      name: 'Samdrup Jongkhar-Border',
      fromCountry: 'bt',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bhutan visa for non-Indians', 'Indian visa for non-Bhutanese'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Eastern border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bt-in-geylegphug',
      name: 'Geylegphug-Border',
      fromCountry: 'bt',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bhutan visa for non-Indians', 'Indian visa for non-Bhutanese'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Central border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'bd',
  name: 'Bangladesh',
  continent: 'asia',
  neighbors: ['in', 'mm'],
  borderCrossings: [
    // Bangladesh - India borders
    {
      id: 'bd-in-petrapole',
      name: 'Petrapole-Benapole Border',
      fromCountry: 'bd',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bangladesh visa for non-Indians', 'Indian visa for non-Bangladeshis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major trading border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bd-in-dawki',
      name: 'Dawki-Tamabil Border',
      fromCountry: 'bd',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bangladesh visa for non-Indians', 'Indian visa for non-Bangladeshis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Hilly terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bd-in-hili',
      name: 'Hili-Border',
      fromCountry: 'bd',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Bangladesh visa for non-Indians', 'Indian visa for non-Bangladeshis'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    // Bangladesh - Myanmar borders
    {
      id: 'bd-mm-nathong',
      name: 'Nathong-River Border',
      fromCountry: 'bd',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Bangladesh visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'bd-mm-teknaf',
      name: 'Teknaf-Maungdaw Border',
      fromCountry: 'bd',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Bangladesh visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'mm',
  name: 'Myanmar',
  continent: 'asia',
  neighbors: ['bd', 'cn', 'in', 'la', 'th'],
  borderCrossings: [
    // Myanmar - Bangladesh borders
    {
      id: 'mm-bd-nathong',
      name: 'Nathong-River Border',
      fromCountry: 'mm',
      toCountry: 'bd',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Bangladesh visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-bd-teknaf',
      name: 'Maungdaw-Teknaf Border',
      fromCountry: 'mm',
      toCountry: 'bd',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Bangladesh visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - China borders
    {
      id: 'mm-cn-ruili',
      name: 'Ruili-Muse Border',
      fromCountry: 'mm',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Chinese visa', 'Border permit'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Chinese insurance'],
        restrictions: ['Commercial vehicles require special permits', 'Customs inspection', 'Restricted hours']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-cn-wanding',
      name: 'Wanding-Jiegao Border',
      fromCountry: 'mm',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Limited to certain vehicle types', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - India borders
    {
      id: 'mm-in-moreh',
      name: 'Moreh-Tamu Border',
      fromCountry: 'mm',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Indian visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northwestern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-in-zokhawthar',
      name: 'Zokhawthar-Rih Border',
      fromCountry: 'mm',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Indian visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northeastern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - Laos borders
    {
      id: 'mm-la-kenghat',
      name: 'Kenghat-Kentung Border',
      fromCountry: 'mm',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Myanmar - Thailand borders
    {
      id: 'mm-th-maesot',
      name: 'Myawaddy-Mae Sot Border',
      fromCountry: 'mm',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'mm-th-ranong',
      name: 'Kawthoung-Ranong Border',
      fromCountry: 'mm',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Myanmar visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Ferry service']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'la',
  name: 'Laos',
  continent: 'asia',
  neighbors: ['cn', 'mm', 'th', 'vn', 'kh'],
  borderCrossings: [
    // Laos - China borders
    {
      id: 'la-cn-boten',
      name: 'Boten-Mohan Border',
      fromCountry: 'la',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Currency declaration', 'Agricultural restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-cn-dengta',
      name: 'Deng Ta-Mengla Border',
      fromCountry: 'la',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Limited hours', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Laos - Myanmar borders
    {
      id: 'la-mm-kenghat',
      name: 'Kenghat-Kentung Border',
      fromCountry: 'la',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Laos - Thailand borders
    {
      id: 'la-th-friendship1',
      name: 'First Thai-Lao Friendship Bridge',
      fromCountry: 'la',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-th-friendship2',
      name: 'Second Thai-Lao Friendship Bridge',
      fromCountry: 'la',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    // Laos - Vietnam borders
    {
      id: 'la-vn-nambo',
      name: 'Nam Phao-Cau Treo Border',
      fromCountry: 'la',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-vn-laobao',
      name: 'Lao Bao-Dansavanh Border',
      fromCountry: 'la',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['International checkpoint', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Laos - Cambodia borders
    {
      id: 'la-kh-voeungkham',
      name: 'Voeung Kham-Dong Kralor Border',
      fromCountry: 'la',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'la-kh-nongnok',
      name: 'Nong Nok Khiene-Trapeang Kriel Border',
      fromCountry: 'la',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Laos visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Remote border', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'th',
  name: 'Thailand',
  continent: 'asia',
  neighbors: ['mm', 'la', 'kh', 'my'],
  borderCrossings: [
    // Thailand - Myanmar borders
    {
      id: 'th-mm-maesot',
      name: 'Mae Sot-Myawaddy Border',
      fromCountry: 'th',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-mm-ranong',
      name: 'Ranong-Kawthoung Border',
      fromCountry: 'th',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Ferry service']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    // Thailand - Laos borders
    {
      id: 'th-la-friendship1',
      name: 'First Thai-Lao Friendship Bridge',
      fromCountry: 'th',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-la-friendship2',
      name: 'Second Thai-Lao Friendship Bridge',
      fromCountry: 'th',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Bridge crossing', 'Customs inspection', 'Toll fee required']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    // Thailand - Cambodia borders
    {
      id: 'th-kh-aranyaprathet',
      name: 'Aranyaprathet-Poipet Border',
      fromCountry: 'th',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-kh-hatlek',
      name: 'Hat Lek-Cham Yeam Border',
      fromCountry: 'th',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Thailand - Malaysia borders
    {
      id: 'th-my-sadao',
      name: 'Sadao-Bukit Kayu Hitam Border',
      fromCountry: 'th',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major southern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'th-my-wangprachan',
      name: 'Wang Prachan-Pengkalan Hulu Border',
      fromCountry: 'th',
      toCountry: 'my',
      requirements: {
        documents: ['Passport', 'Thailand visa', 'Malaysia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'vn',
  name: 'Vietnam',
  continent: 'asia',
  neighbors: ['cn', 'la', 'kh'],
  borderCrossings: [
    // Vietnam - China borders
    {
      id: 'vn-cn-hekou',
      name: 'Hekou-Lao Cai Border',
      fromCountry: 'vn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Chinese visa'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Vietnamese insurance'],
        restrictions: ['Commercial vehicles require permits', 'Restricted hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-cn-pingxiang',
      name: 'Pingxiang-Dong Dang Border',
      fromCountry: 'vn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Chinese visa', 'Border pass'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountain crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-cn-dongxing',
      name: 'Dongxing-Mong Cai Border',
      fromCountry: 'vn',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Coastal permit'],
        restrictions: ['Coastal crossing', 'Tidal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    // Vietnam - Laos borders
    {
      id: 'vn-la-cautreo',
      name: 'Cau Treo-Nam Phao Border',
      fromCountry: 'vn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-la-laobao',
      name: 'Lao Bao-Dansavanh Border',
      fromCountry: 'vn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['International checkpoint', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Vietnam - Cambodia borders
    {
      id: 'vn-kh-mocbai',
      name: 'Moc Bai-Bavet Border',
      fromCountry: 'vn',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'vn-kh-vinhxuong',
      name: 'Vinh Xuong-Kaam Samnor Border',
      fromCountry: 'vn',
      toCountry: 'kh',
      requirements: {
        documents: ['Passport', 'Vietnam visa', 'Cambodia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mekong River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'kh',
  name: 'Cambodia',
  continent: 'asia',
  neighbors: ['la', 'th', 'vn'],
  borderCrossings: [
    // Cambodia - Laos borders
    {
      id: 'kh-la-dongkralor',
      name: 'Dong Kralor-Voeung Kham Border',
      fromCountry: 'kh',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'kh-la-trapeangkriel',
      name: 'Trapeang Kriel-Nong Nok Khiene Border',
      fromCountry: 'kh',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Remote border', 'Customs inspection', 'Limited facilities']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: '2024-01-15'
    },
    // Cambodia - Thailand borders
    {
      id: 'kh-th-poipet',
      name: 'Poipet-Aranyaprathet Border',
      fromCountry: 'kh',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'kh-th-chamyeam',
      name: 'Cham Yeam-Hat Lek Border',
      fromCountry: 'kh',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    },
    // Cambodia - Vietnam borders
    {
      id: 'kh-vn-bavet',
      name: 'Bavet-Moc Bai Border',
      fromCountry: 'kh',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major border crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'kh-vn-kaamsamnor',
      name: 'Kaam Samnor-Vinh Xuong Border',
      fromCountry: 'kh',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Cambodia visa', 'Vietnam visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mekong River crossing', 'Ferry service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 55,
      lastUpdated: '2024-01-15'
    }
  ]
},
{
  id: 'my',
  name: 'Malaysia',
  continent: 'asia',
  neighbors: ['th', 'bn', 'id'],
  borderCrossings: [
    // Malaysia - Thailand borders
    {
      id: 'my-th-bukitkayu',
      name: 'Bukit Kayu Hitam-Sadao Border',
      fromCountry: 'my',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Major southern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 50,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'my-th-pengkalan',
      name: 'Pengkalan Hulu-Wang Prachan Border',
      fromCountry: 'my',
      toCountry: 'th',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Thailand visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: '2024-01-15'
    },
    // Malaysia - Brunei borders
    {
      id: 'my-bn-sungaitujuh',
      name: 'Sungai Tujoh Border Crossing',
      fromCountry: 'my',
      toCountry: 'bn',
      requirements: {
        documents: ['Passport', 'Malaysia visa for non-Bruneians', 'Brunei visa for non-Malaysians'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Coastal border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'my-bn-ulam',
      name: 'Ulam Border Crossing',
      fromCountry: 'my',
      toCountry: 'bn',
      requirements: {
        documents: ['Passport', 'Malaysia visa for non-Bruneians', 'Brunei visa for non-Malaysians'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Inland border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: '2024-01-15'
    },
    // Malaysia - Indonesia borders
    {
      id: 'my-id-tebedu',
      name: 'Tebedu-Entikong Border',
      fromCountry: 'my',
      toCountry: 'id',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Indonesia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Borneo island crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 40,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'my-id-padangbesar',
      name: 'Padang Besar-Bukit Kayu Hitam Border',
      fromCountry: 'my',
      toCountry: 'id',
      requirements: {
        documents: ['Passport', 'Malaysia visa', 'Indonesia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Northern border', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 35,
      lastUpdated: '2024-01-15'
    }
  ]
},
  {
  id: 'kg',
  name: 'Kyrgyzstan',
  continent: 'Asia',
  neighbors: ['kz', 'cn', 'tj', 'uz'],
  borderCrossings: [
    {
      id: 'kg-kz-1',
      name: 'Korday Border Crossing',
      fromCountry: 'kg',
      toCountry: 'kz',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 60,
      status: 'open',
      crossingType: 'road'
    },
    {
      id: 'kg-kz-2',
      name: 'Chaldovar Border Crossing',
      fromCountry: 'kg',
      toCountry: 'kz',
      requirements: {
        visa: false,
        passport: true,
        vehiclePermit: true,
        customsDeclaration: true,
        covidTest: false
      },
      waitTime: 45,
      status: 'open',
      crossingType: 'road'
    }
  ]
},
{
  id: 'jo',
  name: 'Jordan',
  continent: 'asia',
  neighbors: ['sy', 'iq', 'sa', 'il', 'ps'],
  borderCrossings: [
    // Jordan - Syria crossings
    {
      id: 'jo-sy-1',
      name: 'Jaber Border Crossing',
      fromCountry: 'jo',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Jordanian visa', 'Syrian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'jo-sy-2',
      name: 'Ramtha Border Crossing',
      fromCountry: 'jo',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Jordanian visa', 'Syrian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Jordan - Iraq crossings
    {
      id: 'jo-iq-1',
      name: 'Al Karama Border Crossing',
      fromCountry: 'jo',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Jordanian visa', 'Iraqi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert crossing', 'Sand storms', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'jo-iq-2',
      name: 'Treibil Border Crossing',
      fromCountry: 'jo',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Jordanian visa', 'Iraqi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // Jordan - Saudi Arabia crossings
    {
      id: 'jo-sa-1',
      name: 'Al Mudawara Border Crossing',
      fromCountry: 'jo',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Jordanian visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'jo-sa-2',
      name: 'Durra Border Crossing',
      fromCountry: 'jo',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Jordanian visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Jordan - Israel crossings
    {
      id: 'jo-il-1',
      name: 'Allenby Bridge/King Hussein Bridge',
      fromCountry: 'jo',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Jordanian exit permit', 'Israeli visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Limited to specific nationalities', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'jo-il-2',
      name: 'Jordan River/Sheikh Hussein Crossing',
      fromCountry: 'jo',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Jordanian exit permit', 'Israeli visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'jo-il-3',
      name: 'Yitzhak Rabin/Arava Crossing',
      fromCountry: 'jo',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Jordanian exit permit', 'Israeli visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Southern desert crossing', 'Customs inspection', 'Heat precautions']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Jordan - Palestine crossings
    {
      id: 'jo-ps-1',
      name: 'Allenby Bridge (Palestinian side)',
      fromCountry: 'jo',
      toCountry: 'ps',
      requirements: {
        documents: ['Passport', 'Jordanian exit permit', 'Palestinian authorization'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['West Bank access', 'Customs inspection', 'Security screening']
      },
      status: 'restricted',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'lb',
  name: 'Lebanon',
  continent: 'asia',
  neighbors: ['sy', 'il'],
  borderCrossings: [
    // Lebanon - Syria crossings
    {
      id: 'lb-sy-1',
      name: 'Masnaa Border Crossing',
      fromCountry: 'lb',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Lebanese visa', 'Syrian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountainous area', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lb-sy-2',
      name: 'Aabboudiyeh Border Crossing',
      fromCountry: 'lb',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Lebanese visa', 'Syrian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lb-sy-3',
      name: 'Al-Qaa Border Crossing',
      fromCountry: 'lb',
      toCountry: 'sy',
      requirements: {
        documents: ['Passport', 'Lebanese visa', 'Syrian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Eastern crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // Lebanon - Israel crossings (closed due to political situation)
    {
      id: 'lb-il-1',
      name: 'Rosh HaNikra Crossing',
      fromCountry: 'lb',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Special diplomatic permit', 'Security clearance'],
        vehicleRequirements: ['Diplomatic vehicles only', 'Military escort', 'UN approval'],
        restrictions: ['Closed to general public', 'Diplomatic access only', 'Heavily fortified']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'lb-il-2',
      name: 'Naqoura Crossing',
      fromCountry: 'lb',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Special diplomatic permit', 'Security clearance'],
        vehicleRequirements: ['Diplomatic vehicles only', 'Military escort', 'UN approval'],
        restrictions: ['UN-controlled area', 'Diplomatic access only', 'Heavily secured']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'om',
  name: 'Oman',
  continent: 'asia',
  neighbors: ['sa', 'ye', 'ae'],
  borderCrossings: [
    // Oman - Saudi Arabia crossings
    {
      id: 'om-sa-1',
      name: "Ruba' al Khali Border Crossing",
      fromCountry: 'om',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Omani visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Empty Quarter desert', '4x4 required', 'GPS navigation mandatory']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'om-sa-2',
      name: 'Ibri Border Crossing',
      fromCountry: 'om',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Omani visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Oman - Yemen crossings
    {
      id: 'om-ye-1',
      name: 'Sarfeit Border Crossing',
      fromCountry: 'om',
      toCountry: 'ye',
      requirements: {
        documents: ['Passport', 'Omani visa', 'Yemeni visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Security concerns']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'om-ye-2',
      name: 'Hafeet Border Crossing',
      fromCountry: 'om',
      toCountry: 'ye',
      requirements: {
        documents: ['Passport', 'Omani visa', 'Yemeni visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Mountainous area', 'Limited access', 'Security screening']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    // Oman - United Arab Emirates crossings
    {
      id: 'om-ae-1',
      name: 'Hatta Border Crossing',
      fromCountry: 'om',
      toCountry: 'ae',
      requirements: {
        documents: ['Passport', 'Omani visa', 'UAE visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'om-ae-2',
      name: 'Khatmat Malaha Border Crossing',
      fromCountry: 'om',
      toCountry: 'ae',
      requirements: {
        documents: ['Passport', 'Omani visa', 'UAE visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'om-ae-3',
      name: 'Wadi Jizzi Border Crossing',
      fromCountry: 'om',
      toCountry: 'ae',
      requirements: {
        documents: ['Passport', 'Omani visa', 'UAE visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Copper mining area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ps',
  name: 'Palestine',
  continent: 'asia',
  neighbors: ['il', 'jo', 'eg'],
  borderCrossings: [
    // Palestine - Israel crossings
    {
      id: 'ps-il-1',
      name: 'Erez Crossing',
      fromCountry: 'ps',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Special permit', 'Security clearance'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['Gaza access', 'Highly secured', 'Limited to specific purposes']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ps-il-2',
      name: 'Qalandia Checkpoint',
      fromCountry: 'ps',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Special permit', 'Security clearance'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['West Bank access', 'Security screening', 'Possible delays']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ps-il-3',
      name: 'Allenby Bridge (Palestinian side)',
      fromCountry: 'ps',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Special permit', 'Security clearance'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['West Bank access', 'Customs inspection', 'Security screening']
      },
      status: 'restricted',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    // Palestine - Jordan crossings
    {
      id: 'ps-jo-1',
      name: 'Allenby Bridge (Jordanian side)',
      fromCountry: 'ps',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Palestinian authorization', 'Jordanian visa'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['West Bank access', 'Customs inspection', 'Security screening']
      },
      status: 'restricted',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ps-jo-2',
      name: 'King Hussein Bridge',
      fromCountry: 'ps',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Palestinian authorization', 'Jordanian visa'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['Limited access', 'Customs inspection', 'Security checks']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Palestine - Egypt crossings (Gaza Strip)
    {
      id: 'ps-eg-1',
      name: 'Rafah Border Crossing',
      fromCountry: 'ps',
      toCountry: 'eg',
      requirements: {
        documents: ['Passport', 'Palestinian ID', 'Egyptian visa', 'Special permit'],
        vehicleRequirements: ['Approved vehicles only', 'Security inspection', 'Restricted access'],
        restrictions: ['Gaza access', 'Highly restricted', 'Limited opening hours']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'qa',
  name: 'Qatar',
  continent: 'asia',
  neighbors: ['sa'],
  borderCrossings: [
    // Qatar - Saudi Arabia crossing (only land border)
    {
      id: 'qa-sa-1',
      name: 'Abu Samra Border Crossing',
      fromCountry: 'qa',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Qatari visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'qa-sa-2',
      name: 'Salwa Border Crossing',
      fromCountry: 'qa',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Qatari visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'sa',
  name: 'Saudi Arabia',
  continent: 'asia',
  neighbors: ['jo', 'iq', 'kw', 'qa', 'ae', 'om', 'ye'],
  borderCrossings: [
    // Saudi Arabia - Jordan
    {
      id: 'sa-jo-1',
      name: 'Al Mudawara Border Crossing',
      fromCountry: 'sa',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-jo-2',
      name: 'Durra Border Crossing',
      fromCountry: 'sa',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Saudi Arabia - Iraq
    {
      id: 'sa-iq-1',
      name: 'Arar Border Crossing',
      fromCountry: 'sa',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Iraqi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-iq-2',
      name: 'Jumaima Border Crossing',
      fromCountry: 'sa',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Iraqi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Saudi Arabia - Kuwait
    {
      id: 'sa-kw-1',
      name: 'Al-Nuwaiseeb Border Crossing',
      fromCountry: 'sa',
      toCountry: 'kw',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Kuwaiti visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-kw-2',
      name: 'Al-Khafji Border Crossing',
      fromCountry: 'sa',
      toCountry: 'kw',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Kuwaiti visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Coastal crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-kw-3',
      name: 'Salmi Border Crossing',
      fromCountry: 'sa',
      toCountry: 'kw',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Kuwaiti visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert terrain', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Saudi Arabia - Qatar
    {
      id: 'sa-qa-1',
      name: 'Abu Samra Border Crossing',
      fromCountry: 'sa',
      toCountry: 'qa',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Qatari visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-qa-2',
      name: 'Salwa Border Crossing',
      fromCountry: 'sa',
      toCountry: 'qa',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Qatari visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Saudi Arabia - UAE
    {
      id: 'sa-ae-1',
      name: 'Al Batha Border Crossing',
      fromCountry: 'sa',
      toCountry: 'ae',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'UAE visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Saudi Arabia - Oman
    {
      id: 'sa-om-1',
      name: "Ruba' al Khali Border Crossing",
      fromCountry: 'sa',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Omani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Empty Quarter desert', '4x4 required', 'GPS navigation mandatory']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-om-2',
      name: 'Ibri Border Crossing',
      fromCountry: 'sa',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Omani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Saudi Arabia - Yemen
    {
      id: 'sa-ye-1',
      name: 'Al Tuwal Border Crossing',
      fromCountry: 'sa',
      toCountry: 'ye',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Yemeni visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Security concerns']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sa-ye-2',
      name: 'Shada Border Crossing',
      fromCountry: 'sa',
      toCountry: 'ye',
      requirements: {
        documents: ['Passport', 'Saudi visa', 'Yemeni visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Mountainous area', 'Limited access', 'Security screening']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'sy',
  name: 'Syria',
  continent: 'asia',
  neighbors: ['tr', 'iq', 'jo', 'il', 'lb'],
  borderCrossings: [
    // Syria - Turkey crossings
    {
      id: 'sy-tr-1',
      name: 'Bab al-Hawa Border Crossing',
      fromCountry: 'sy',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Conflict area', 'Security concerns', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sy-tr-2',
      name: 'Bab al-Salama Border Crossing',
      fromCountry: 'sy',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Syria - Iraq crossings
    {
      id: 'sy-iq-1',
      name: 'Al-Qa\'im Border Crossing',
      fromCountry: 'sy',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Iraqi visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Security concerns']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sy-iq-2',
      name: 'Rabia Border Crossing',
      fromCountry: 'sy',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Iraqi visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Limited access']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    // Syria - Jordan crossings
    {
      id: 'sy-jo-1',
      name: 'Jaber Border Crossing',
      fromCountry: 'sy',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sy-jo-2',
      name: 'Ramtha Border Crossing',
      fromCountry: 'sy',
      toCountry: 'jo',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Jordanian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // Syria - Israel crossings (closed due to political situation)
    {
      id: 'sy-il-1',
      name: 'Quneitra Crossing',
      fromCountry: 'sy',
      toCountry: 'il',
      requirements: {
        documents: ['Passport', 'Special diplomatic permit', 'Security clearance'],
        vehicleRequirements: ['Diplomatic vehicles only', 'Military escort', 'UN approval'],
        restrictions: ['Closed to general public', 'Diplomatic access only', 'Heavily fortified']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    // Syria - Lebanon crossings
    {
      id: 'sy-lb-1',
      name: 'Masnaa Border Crossing',
      fromCountry: 'sy',
      toCountry: 'lb',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Lebanese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountainous area', 'Customs inspection', 'Security screening']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sy-lb-2',
      name: 'Aabboudiyeh Border Crossing',
      fromCountry: 'sy',
      toCountry: 'lb',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Lebanese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'sy-lb-3',
      name: 'Al-Qaa Border Crossing',
      fromCountry: 'sy',
      toCountry: 'lb',
      requirements: {
        documents: ['Passport', 'Syrian visa', 'Lebanese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Eastern crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ye',
  name: 'Yemen',
  continent: 'asia',
  neighbors: ['sa', 'om'],
  borderCrossings: [
    // Yemen - Saudi Arabia crossings
    {
      id: 'ye-sa-1',
      name: 'Al Tuwal Border Crossing',
      fromCountry: 'ye',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Yemeni visa', 'Saudi visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Security concerns']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ye-sa-2',
      name: 'Shada Border Crossing',
      fromCountry: 'ye',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Yemeni visa', 'Saudi visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Mountainous area', 'Limited access', 'Security screening']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    // Yemen - Oman crossings
    {
      id: 'ye-om-1',
      name: 'Sarfeit Border Crossing',
      fromCountry: 'ye',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'Yemeni visa', 'Omani visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict area', 'Highly restricted', 'Security concerns']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ye-om-2',
      name: 'Hafeet Border Crossing',
      fromCountry: 'ye',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'Yemeni visa', 'Omani visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Mountainous area', 'Limited access', 'Security screening']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ye-om-3',
      name: 'Al Ghaydah Border Crossing',
      fromCountry: 'ye',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'Yemeni visa', 'Omani visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Coastal area', 'Limited access', 'Security screening']
      },
      status: 'restricted',
      waitTime: 210,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'ae',
  name: 'United Arab Emirates',
  continent: 'asia',
  neighbors: ['sa', 'om'],
  borderCrossings: [
    // UAE - Saudi Arabia crossings
    {
      id: 'ae-sa-1',
      name: 'Al Batha Border Crossing',
      fromCountry: 'ae',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'UAE visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ae-sa-2',
      name: 'Ghuwaifat Border Crossing',
      fromCountry: 'ae',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'UAE visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Coastal crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // UAE - Oman crossings
    {
      id: 'ae-om-1',
      name: 'Hatta Border Crossing',
      fromCountry: 'ae',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'UAE visa', 'Omani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ae-om-2',
      name: 'Khatmat Malaha Border Crossing',
      fromCountry: 'ae',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'UAE visa', 'Omani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Northern crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ae-om-3',
      name: 'Wadi Jizzi Border Crossing',
      fromCountry: 'ae',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'UAE visa', 'Omani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Copper mining area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ae-om-4',
      name: 'Al Darah Border Crossing',
      fromCountry: 'ae',
      toCountry: 'om',
      requirements: {
        documents: ['Passport', 'UAE visa', 'Omani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'kw',
  name: 'Kuwait',
  continent: 'asia',
  neighbors: ['iq', 'sa'],
  borderCrossings: [
    // Kuwait - Iraq crossings
    {
      id: 'kw-iq-1',
      name: 'Safwan Border Crossing',
      fromCountry: 'kw',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Kuwaiti visa', 'Iraqi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kw-iq-2',
      name: 'Abdali Border Crossing',
      fromCountry: 'kw',
      toCountry: 'iq',
      requirements: {
        documents: ['Passport', 'Kuwaiti visa', 'Iraqi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Kuwait - Saudi Arabia crossings
    {
      id: 'kw-sa-1',
      name: 'Al-Nuwaiseeb Border Crossing',
      fromCountry: 'kw',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Kuwaiti visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kw-sa-2',
      name: 'Al-Khafji Border Crossing',
      fromCountry: 'kw',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Kuwaiti visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Coastal crossing', 'Customs inspection', 'Possible delays']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kw-sa-3',
      name: 'Salmi Border Crossing',
      fromCountry: 'kw',
      toCountry: 'sa',
      requirements: {
        documents: ['Passport', 'Kuwaiti visa', 'Saudi visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert terrain', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
  {
  id: 'tr',
  name: 'Turkey',
  continent: 'asia',
  neighbors: ['bg', 'gr', 'sy', 'iq', 'ir', 'az', 'am', 'ge'],
  borderCrossings: [
    {
      id: 'tr-bg-1',
      name: 'Kapıkule-Kapitan Andreevo',
      fromCountry: 'tr',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport', 'Turkish visa', 'Bulgarian visa/Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Green Card'],
        restrictions: ['Customs inspection', 'EU regulations apply', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tr-bg-2',
      name: 'Dereköy-Malko Tarnovo',
      fromCountry: 'tr',
      toCountry: 'bg',
      requirements: {
        documents: ['Passport', 'Turkish visa', 'Bulgarian visa/Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountainous area', 'Limited hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tr-gr-1',
      name: 'İpsala-Kipi',
      fromCountry: 'tr',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Turkish visa', 'Greek visa/Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'EU compliance certificate'],
        restrictions: ['Customs inspection', 'EU regulations apply', 'Agricultural checks']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tr-gr-2',
      name: 'Kastanies-Pazarkule',
      fromCountry: 'tr',
      toCountry: 'gr',
      requirements: {
        documents: ['Passport', 'Turkish visa', 'Greek visa/Schengen visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Commercial vehicles priority', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tr-ir-1',
      name: 'Gürbulak-Bazargan',
      fromCountry: 'tr',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Turkish visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tr-ir-2',
      name: 'Esendere-Sero',
      fromCountry: 'tr',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Turkish visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', '4x4 recommended'],
        restrictions: ['Remote area', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'tm',
  name: 'Turkmenistan',
  continent: 'asia',
  neighbors: ['kz', 'uz', 'af', 'ir'],
  borderCrossings: [
    {
      id: 'tm-kz-1',
      name: 'Turkmenbashi-Beyneu',
      fromCountry: 'tm',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert crossing', 'Sand storms possible', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tm-kz-2',
      name: 'Turkmenistan-Kazakhstan Friendship Bridge',
      fromCountry: 'tm',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Kazakhstan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Bridge toll'],
        restrictions: ['Bridge crossing', 'Height restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tm-uz-1',
      name: 'Farap-Alat',
      fromCountry: 'tm',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Amu Darya river crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tm-uz-2',
      name: 'Khodzhayli-Shavat',
      fromCountry: 'tm',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Agricultural check']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tm-af-1',
      name: 'Serhetabat-Torghundi',
      fromCountry: 'tm',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Afghan visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tm-ir-1',
      name: 'Gaudan-Bajgiran',
      fromCountry: 'tm',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tm-ir-2',
      name: 'Sarakhs-Sarakhs',
      fromCountry: 'tm',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Turkmenistan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert crossing', 'Sand storms', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'uz',
  name: 'Uzbekistan',
  continent: 'asia',
  neighbors: ['kz', 'kg', 'tj', 'af', 'tm'],
  borderCrossings: [
    {
      id: 'uz-kz-1',
      name: 'Gisht Kuprik-Saryagash',
      fromCountry: 'uz',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Desert crossing', 'Sand storms possible', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-kz-2',
      name: 'Dustlik-Zhibek Zholy',
      fromCountry: 'uz',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Vehicle inspection'],
        restrictions: ['Commercial route', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-kg-1',
      name: 'Andijon-Dostuk',
      fromCountry: 'uz',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferghana Valley pass'],
        restrictions: ['Ferghana Valley', 'Densely populated area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-kg-2',
      name: 'Andijon-Osh',
      fromCountry: 'uz',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-tj-1',
      name: 'Uch-Qorgon-Fotehobod',
      fromCountry: 'uz',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferghana Valley pass'],
        restrictions: ['Ferghana Valley', 'Densely populated area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-tj-2',
      name: "Qo'shtepa-Konibodom",
      fromCountry: 'uz',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Agricultural area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-tm-1',
      name: 'Shavat-Khodzhayli',
      fromCountry: 'uz',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert terrain', 'Customs inspection', 'Agricultural check']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-tm-2',
      name: 'Alat-Farap',
      fromCountry: 'uz',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Amu Darya river crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'uz-af-1',
      name: 'Hairatan-Mazar-i-Sharif',
      fromCountry: 'uz',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Uzbekistan visa', 'Afghan visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'restricted',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'az',
  name: 'Azerbaijan',
  continent: 'asia',
  neighbors: ['ru', 'ge', 'am', 'ir', 'tr'],
  borderCrossings: [
    {
      id: 'az-ru-1',
      name: 'Samur-Yalama',
      fromCountry: 'az',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Caspian coastal crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-ru-2',
      name: 'Bilajari-Samur',
      fromCountry: 'az',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountainous area', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-ge-1',
      name: 'Red Bridge-Sadakhlo',
      fromCountry: 'az',
      toCountry: 'ge',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Georgian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Historic crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-ge-2',
      name: 'Lagodekhi-Balakan',
      fromCountry: 'az',
      toCountry: 'ge',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Georgian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-am-1',
      name: 'Aghdam-Askeran',
      fromCountry: 'az',
      toCountry: 'am',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Armenian visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict zone', 'Highly restricted', 'Security clearance required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-ir-1',
      name: 'Astara-Astara',
      fromCountry: 'az',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Caspian coastal crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-ir-2',
      name: 'Julfa-Jolfa',
      fromCountry: 'az',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['River crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-tr-1',
      name: 'Dilucu-Sadarak',
      fromCountry: 'az',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Nakhchivan exclave', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'az-tr-2',
      name: 'Aralik-Igdir',
      fromCountry: 'az',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Azerbaijan visa', 'Turkish visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'am',
  name: 'Armenia',
  continent: 'asia',
  neighbors: ['ge', 'az', 'ir', 'tr'],
  borderCrossings: [
    {
      id: 'am-ge-1',
      name: 'Bagratashen-Sadakhlo',
      fromCountry: 'am',
      toCountry: 'ge',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Georgian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Mountainous terrain', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-ge-2',
      name: 'Bavra-Ninotsminda',
      fromCountry: 'am',
      toCountry: 'ge',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Georgian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['High altitude crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-az-1',
      name: 'Voskepar-Qazax',
      fromCountry: 'am',
      toCountry: 'az',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Azerbaijani visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict zone', 'Highly restricted', 'Security clearance required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-az-2',
      name: 'Kornidzor-Qubadli',
      fromCountry: 'am',
      toCountry: 'az',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Azerbaijani visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Conflict zone', 'Highly restricted', 'Security clearance required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-ir-1',
      name: 'Meghri-Norduz',
      fromCountry: 'am',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountain pass', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-ir-2',
      name: 'Agarak-Poldasht',
      fromCountry: 'am',
      toCountry: 'ir',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Iranian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['River crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-tr-1',
      name: 'Alican-Dogukapı',
      fromCountry: 'am',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Turkish visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Diplomatic clearance'],
        restrictions: ['Closed border', 'Diplomatic access only', 'Special authorization required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'am-tr-2',
      name: 'Margara-Alican',
      fromCountry: 'am',
      toCountry: 'tr',
      requirements: {
        documents: ['Passport', 'Armenian visa', 'Turkish visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Diplomatic clearance'],
        restrictions: ['Closed border', 'Diplomatic access only', 'Special authorization required']
      },
      status: 'closed',
      waitTime: 0,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'cn',
  name: 'China',
  continent: 'asia',
  neighbors: ['mm', 'la', 'vn', 'in', 'np', 'bt', 'pk', 'af', 'tj', 'kg', 'kz', 'mn', 'ru'],
  borderCrossings: [
    // China - Myanmar (2 crossings)
    {
      id: 'cn-mm-1',
      name: 'Ruili-Muse',
      fromCountry: 'cn',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Commercial vehicles only', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-mm-2',
      name: 'Wanding-Jiegao',
      fromCountry: 'cn',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Limited to certain vehicle types', 'Customs inspection', 'Security checks']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Laos (2 crossings)
    {
      id: 'cn-la-1',
      name: 'Mohan-Boten',
      fromCountry: 'cn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Laos visa on arrival'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'International insurance'],
        restrictions: ['Currency declaration', 'Agricultural restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-la-2',
      name: 'Mengla-Deng Ta',
      fromCountry: 'cn',
      toCountry: 'la',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Laos visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Limited hours', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Vietnam (2 crossings)
    {
      id: 'cn-vn-1',
      name: 'Hekou-Lao Cai',
      fromCountry: 'cn',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Vietnam visa'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Vietnamese insurance'],
        restrictions: ['Commercial vehicles require permits', 'Restricted hours', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-vn-2',
      name: 'Pingxiang-Dong Dang',
      fromCountry: 'cn',
      toCountry: 'vn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Vietnam visa', 'Border pass'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Mountain crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    // China - India (2 crossings)
    {
      id: 'cn-in-1',
      name: 'Nathu La Pass',
      fromCountry: 'cn',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Indian visa', 'Special permit'],
        vehicleRequirements: ['International Driving Permit', 'Vehicle registration', 'Insurance'],
        restrictions: ['Only for commercial vehicles', 'Limited days', 'Heightened security']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-in-2',
      name: 'Shipkila Pass',
      fromCountry: 'cn',
      toCountry: 'in',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Indian visa', 'Mountain permit'],
        vehicleRequirements: ['4x4 vehicle required', 'Winter equipment', 'High altitude insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Weather dependent']
      },
      status: 'closed',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Nepal (2 crossings)
    {
      id: 'cn-np-1',
      name: 'Zhangmu-Kodari',
      fromCountry: 'cn',
      toCountry: 'np',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Nepal visa on arrival'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Subject to weather conditions', 'Customs inspection', 'Currency declaration']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-np-2',
      name: 'Gyirong-Rasuwa',
      fromCountry: 'cn',
      toCountry: 'np',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Nepal visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['High altitude crossing', 'Weather dependent', 'Limited facilities']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Bhutan (2 crossings)
    {
      id: 'cn-bt-1',
      name: 'Tulung La Pass',
      fromCountry: 'cn',
      toCountry: 'bt',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Bhutan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-bt-2',
      name: 'Pang La Pass',
      fromCountry: 'cn',
      toCountry: 'bt',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Bhutan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['High altitude crossing', 'Seasonal restrictions', 'Limited access']
      },
      status: 'restricted',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Pakistan (2 crossings)
    {
      id: 'cn-pk-1',
      name: 'Khunjerab Pass',
      fromCountry: 'cn',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Pakistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-pk-2',
      name: 'Karakoram Highway - Sost',
      fromCountry: 'cn',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Pakistan visa', 'Mountain permit'],
        vehicleRequirements: ['4x4 vehicle recommended', 'Winter tires', 'High altitude insurance'],
        restrictions: ['World highest border crossing', 'Weather dependent', 'Limited services']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Afghanistan (2 crossings)
    {
      id: 'cn-af-1',
      name: 'Wakhjir Pass',
      fromCountry: 'cn',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Afghan visa', 'Military permit'],
        vehicleRequirements: ['Military escort required', 'Special vehicle permit', 'Security clearance'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'closed',
      waitTime: 360,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-af-2',
      name: 'Irkeshtam Pass',
      fromCountry: 'cn',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Afghan visa', 'Security clearance'],
        vehicleRequirements: ['Military escort required', 'Special vehicle permit', 'Security clearance'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'closed',
      waitTime: 360,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Tajikistan (2 crossings)
    {
      id: 'cn-tj-1',
      name: 'Kulma Pass',
      fromCountry: 'cn',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Tajikistan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-tj-2',
      name: 'Qolma Pass',
      fromCountry: 'cn',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['Pamir Mountains crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Kyrgyzstan (2 crossings)
    {
      id: 'cn-kg-1',
      name: 'Irkeshtam Pass',
      fromCountry: 'cn',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-kg-2',
      name: 'Torugart Pass',
      fromCountry: 'cn',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kyrgyzstan visa', 'Border permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['High altitude crossing', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Kazakhstan (2 crossings)
    {
      id: 'cn-kz-1',
      name: 'Khorgos Pass',
      fromCountry: 'cn',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['One of the busiest crossings', 'Customs inspection', 'Commercial vehicle queues']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-kz-2',
      name: 'Dostyk-Alashankou',
      fromCountry: 'cn',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Major rail and road crossing', 'Customs inspection', 'Commercial traffic']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Mongolia (2 crossings)
    {
      id: 'cn-mn-1',
      name: 'Erenhot-Zamyn-Üüd',
      fromCountry: 'cn',
      toCountry: 'mn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Mongolia visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Desert crossing', 'Sand storms possible', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-mn-2',
      name: 'Takashiken-Bichigt',
      fromCountry: 'cn',
      toCountry: 'mn',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Mongolia visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Gobi desert crossing', '4x4 recommended', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // China - Russia (2 crossings)
    {
      id: 'cn-ru-1',
      name: 'Manzhouli-Zabaikalsk',
      fromCountry: 'cn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Russian insurance'],
        restrictions: ['Commercial vehicles common', 'Customs inspection', 'Long queues possible']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'cn-ru-2',
      name: 'Suifenhe-Pogranichny',
      fromCountry: 'cn',
      toCountry: 'ru',
      requirements: {
        documents: ['Passport', 'Chinese visa', 'Russian visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical certificate'],
        restrictions: ['Rail and road crossing', 'Customs inspection', 'Commercial traffic']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'tj',
  name: 'Tajikistan',
  continent: 'asia',
  neighbors: ['kg', 'uz', 'af', 'cn'],
  borderCrossings: [
    // Tajikistan - Kyrgyzstan (2 crossings)
    {
      id: 'tj-kg-1',
      name: 'Karamyk-Kyzyl-Bel',
      fromCountry: 'tj',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Kyrgyzstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['High altitude pass', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tj-kg-2',
      name: 'Kyzyl-Art-Bor-Dobo',
      fromCountry: 'tj',
      toCountry: 'kg',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Kyrgyzstan visa', 'Pamir permit'],
        vehicleRequirements: ['4x4 vehicle required', 'Winter equipment', 'High altitude insurance'],
        restrictions: ['Pamir Mountains', 'Extreme weather', 'Limited services']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    // Tajikistan - Uzbekistan (2 crossings)
    {
      id: 'tj-uz-1',
      name: 'Fotehobod-Uch-Qorgon',
      fromCountry: 'tj',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferghana Valley pass'],
        restrictions: ['Ferghana Valley', 'Densely populated area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tj-uz-2',
      name: 'Konibodom-Qo\'shtepa',
      fromCountry: 'tj',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Agricultural area', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Tajikistan - Afghanistan (2 crossings)
    {
      id: 'tj-af-1',
      name: 'Tem-Demogan',
      fromCountry: 'tj',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Afghan visa', 'Security clearance'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Military escort'],
        restrictions: ['Highly restricted', 'Security concerns', 'Limited access']
      },
      status: 'restricted',
      waitTime: 240,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tj-af-2',
      name: 'Ishkashim-Sultan-Eshkashim',
      fromCountry: 'tj',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Afghan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Pamir Mountains', 'Remote area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 150,
      lastUpdated: new Date('2024-01-15')
    },
    // Tajikistan - China (2 crossings)
    {
      id: 'tj-cn-1',
      name: 'Kulma Pass',
      fromCountry: 'tj',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Chinese visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
        restrictions: ['High altitude pass', 'Seasonal closure', 'Limited access']
      },
      status: 'restricted',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'tj-cn-2',
      name: 'Qolma Pass',
      fromCountry: 'tj',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Tajikistan visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['Pamir Mountains crossing', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'kg',
  name: 'Kyrgyzstan',
  continent: 'asia',
  neighbors: ['kz', 'uz', 'tj', 'cn'],
  borderCrossings: [
    // Kyrgyzstan - Kazakhstan (2 crossings)
    {
      id: 'kg-kz-1',
      name: 'Ak-Jol-Korday',
      fromCountry: 'kg',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Mountainous area', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kg-kz-2',
      name: 'Chaldovar-Aktilek',
      fromCountry: 'kg',
      toCountry: 'kz',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Kazakhstan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical certificate'],
        restrictions: ['Steppe crossing', 'Customs inspection', 'Document verification']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    // Kyrgyzstan - Uzbekistan (2 crossings)
    {
      id: 'kg-uz-1',
      name: 'Dostuk-Andijon',
      fromCountry: 'kg',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Ferghana Valley pass'],
        restrictions: ['Ferghana Valley', 'Densely populated area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kg-uz-2',
      name: 'Osh-Andijon',
      fromCountry: 'kg',
      toCountry: 'uz',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Uzbekistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    // Kyrgyzstan - Tajikistan (2 crossings)
    {
      id: 'kg-tj-1',
      name: 'Kyzyl-Bel-Karamyk',
      fromCountry: 'kg',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Tajikistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain permit'],
        restrictions: ['High altitude pass', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kg-tj-2',
      name: 'Bor-Dobo-Kyzyl-Art',
      fromCountry: 'kg',
      toCountry: 'tj',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Tajikistan visa', 'Pamir permit'],
        vehicleRequirements: ['4x4 vehicle required', 'Winter equipment', 'High altitude insurance'],
        restrictions: ['Pamir Mountains', 'Extreme weather', 'Limited services']
      },
      status: 'open',
      waitTime: 180,
      lastUpdated: new Date('2024-01-15')
    },
    // Kyrgyzstan - China (2 crossings)
    {
      id: 'kg-cn-1',
      name: 'Irkeshtam Pass',
      fromCountry: 'kg',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'Temporary import permit', 'Insurance'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'kg-cn-2',
      name: 'Torugart Pass',
      fromCountry: 'kg',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Kyrgyzstan visa', 'Chinese visa', 'Border permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain equipment'],
        restrictions: ['High altitude crossing', 'Seasonal restrictions', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
    {
    id: 'pk',
    name: 'Pakistan',
    continent: 'asia',
    neighbors: ['af', 'cn', 'in', 'ir'],
    borderCrossings: [
      {
        id: 'pk-af-torkham',
        name: 'Torkham Border Crossing',
        fromCountry: 'pk',
        toCountry: 'af',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Afghan visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
          restrictions: ['Security escort required', 'Limited hours', 'Customs inspection']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-af-chaman',
        name: 'Chaman-Spin Boldak Border',
        fromCountry: 'pk',
        toCountry: 'af',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Afghan visa', 'Special permit'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security escort'],
          restrictions: ['High security area', 'Limited access', 'Customs inspection']
        },
        status: 'restricted',
        waitTime: 180,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-cn-khunjerab',
        name: 'Khunjerab Pass',
        fromCountry: 'pk',
        toCountry: 'cn',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Chinese visa'],
          vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Insurance'],
          restrictions: ['High altitude pass', 'Seasonal closure', 'Customs inspection']
        },
        status: 'open',
        waitTime: 120,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-cn-sost',
        name: 'Karakoram Highway - Sost',
        fromCountry: 'pk',
        toCountry: 'cn',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Chinese visa', 'Mountain permit'],
          vehicleRequirements: ['4x4 vehicle recommended', 'Winter tires', 'High altitude insurance'],
          restrictions: ['World highest border crossing', 'Weather dependent', 'Limited services']
        },
        status: 'open',
        waitTime: 180,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-in-wagah',
        name: 'Wagah-Attari Border',
        fromCountry: 'pk',
        toCountry: 'in',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Indian visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
          restrictions: ['Ceremonial border closing daily', 'No photography during ceremony', 'Customs inspection']
        },
        status: 'open',
        waitTime: 45,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-in-munabao',
        name: 'Munabao-Khokhrapar Rail Crossing',
        fromCountry: 'pk',
        toCountry: 'in',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Indian visa'],
          vehicleRequirements: [],
          restrictions: ['Rail transport only', 'Limited passenger service', 'Customs inspection']
        },
        status: 'open',
        waitTime: 60,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-ir-taftan',
        name: 'Taftan-Mirjaveh Border',
        fromCountry: 'pk',
        toCountry: 'ir',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Iranian visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert driving permit'],
          restrictions: ['Desert crossing', 'Extreme temperatures', 'Customs inspection']
        },
        status: 'open',
        waitTime: 90,
        lastUpdated: '2024-01-15'
      },
      {
        id: 'pk-ir-kohmak',
        name: 'Kohmak Border Crossing',
        fromCountry: 'pk',
        toCountry: 'ir',
        requirements: {
          documents: ['Passport', 'Pakistani visa', 'Iranian visa'],
          vehicleRequirements: ['Vehicle registration', 'International insurance', 'Mountain driving permit'],
          restrictions: ['Mountainous terrain', 'Limited facilities', 'Customs inspection']
        },
        status: 'open',
        waitTime: 75,
        lastUpdated: '2024-01-15'
      }
    ]
  },
  {
  id: 'ir',
  name: 'Iran',
  continent: 'asia',
  neighbors: ['pk', 'af', 'tm', 'tr', 'az', 'am', 'iq'],
  borderCrossings: [
    {
      id: 'ir-pk-1',
      name: 'Mirjaveh-Taftan',
      fromCountry: 'ir',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Iranian visa', 'Pakistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert equipment'],
        restrictions: ['Desert crossing', 'Sand storms', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ir-pk-2',
      name: 'Rimdan-Gabd',
      fromCountry: 'ir',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Iranian visa', 'Pakistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Border pass'],
        restrictions: ['Remote area', 'Limited facilities', 'Customs inspection']
      },
      status: 'open',
      waitTime: 75,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ir-af-1',
      name: 'Islam Qala-Herat',
      fromCountry: 'ir',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Iranian visa', 'Afghan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Security clearance'],
        restrictions: ['Security concerns', 'Frequent closures', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ir-af-2',
      name: 'Milak-Zaranj',
      fromCountry: 'ir',
      toCountry: 'af',
      requirements: {
        documents: ['Passport', 'Iranian visa', 'Afghan visa', 'Special permit'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Desert survival kit'],
        restrictions: ['Desert terrain', '4x4 required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ir-tm-1',
      name: 'Bajgiran-Gaudan',
      fromCountry: 'ir',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Iranian visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'ir-tm-2',
      name: 'Sarakhs-Sarakhs',
      fromCountry: 'ir',
      toCountry: 'tm',
      requirements: {
        documents: ['Passport', 'Iranian visa', 'Turkmenistan visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Technical inspection'],
        restrictions: ['Desert crossing', 'Sand storms', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    }
  ]
},
{
  id: 'in',
  name: 'India',
  continent: 'asia',
  neighbors: ['bd', 'bt', 'cn', 'mm', 'np', 'pk'],
  borderCrossings: [
    {
      id: 'in-pk-wagah',
      name: 'Wagah-Attari Border',
      fromCountry: 'in',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Pakistani visa'],
        vehicleRequirements: ['Vehicle registration', 'International insurance', 'Customs declaration'],
        restrictions: ['Ceremonial border closing daily', 'No photography during ceremony', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-pk-munabao',
      name: 'Munabao-Khokhrapar Rail Crossing',
      fromCountry: 'in',
      toCountry: 'pk',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Pakistani visa'],
        vehicleRequirements: [],
        restrictions: ['Rail transport only', 'Limited passenger service', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-cn-nathula',
      name: 'Nathu La Pass',
      fromCountry: 'in',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Customs declaration'],
        restrictions: ['High altitude pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 120,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-cn-shipkila',
      name: 'Shipki La Pass',
      fromCountry: 'in',
      toCountry: 'cn',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Chinese visa'],
        vehicleRequirements: ['Vehicle registration', 'International Driving Permit', 'Customs declaration'],
        restrictions: ['Mountain pass', 'Weather dependent', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-np-ruknu',
      name: 'Raxaul-Birgunj Border',
      fromCountry: 'in',
      toCountry: 'np',
      requirements: {
        documents: ['Passport'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Busy crossing', 'Customs inspection']
      },
      status: 'open',
      waitTime: 30,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-np-sunauli',
      name: 'Sunauli-Bhairahawa Border',
      fromCountry: 'in',
      toCountry: 'np',
      requirements: {
        documents: ['Passport'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Busy crossing', 'Customs inspection']
      },
      status: 'open',
      waitTime: 25,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-bt-phuentsholing',
      name: 'Phuentsholing-Jaigaon Border',
      fromCountry: 'in',
      toCountry: 'bt',
      requirements: {
        documents: ['Passport'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Open market area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 20,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-bt-samdrup',
      name: 'Samdrup Jongkhar Border',
      fromCountry: 'in',
      toCountry: 'bt',
      requirements: {
        documents: ['Passport'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Remote area', 'Customs inspection']
      },
      status: 'open',
      waitTime: 15,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-bd-petrapole',
      name: 'Petrapole-Benapole Border',
      fromCountry: 'in',
      toCountry: 'bd',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Bangladesh visa'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Busy cargo crossing', 'Customs inspection']
      },
      status: 'open',
      waitTime: 60,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-bd-dawki',
      name: 'Dawki-Tamabil Border',
      fromCountry: 'in',
      toCountry: 'bd',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Bangladesh visa'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Mountain road', 'Customs inspection']
      },
      status: 'open',
      waitTime: 45,
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 'in-mm-moreh',
      name: 'Moreh-Tamu Border',
      fromCountry: 'in',
      toCountry: 'mm',
      requirements: {
        documents: ['Passport', 'Indian visa', 'Myanmar visa'],
        vehicleRequirements: ['Vehicle registration', 'Customs declaration'],
        restrictions: ['Security escort sometimes required', 'Customs inspection']
      },
      status: 'open',
      waitTime: 90,
      lastUpdated: new Date('2024-01-15')
    }
  ]
}
];
