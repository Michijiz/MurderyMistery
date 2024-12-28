const players = {
  Laura: {
    password: "123",
    role: "vittima",
    sheet: {
      name: "Dr. Laura Cos",
      background:
        "Geniale e carismatica scienziata, pioniera della telomerizzazione e fondatrice della Eternal Life Corp. Vedova da vent'anni, ha dedicato la sua vita alla ricerca dell'immortalità dopo la morte del marito. È l'unica paziente vaccinata (Paziente 0) con il TEL-072L.",
      clues: [
        "Ha scoperto esperimenti non autorizzati di Valentina",
        "Ricattava Giovanni Geno per la sua relazione con Alice Lentini",
        "Ha avuto una relazione passata con Peppe",
        "Era amica d'infanzia di Alessandro Amato",
        "Ha sempre negato ruoli di leadership ad Aurora",
      ],
      inventory: [
        "Vaccino TEL-072L",
        "Documenti riservati della Eternal Life Corp",
      ],
    },
  },
  Lorenzo: {
    password: "123",
    role: "scienziato traditore",
    sheet: {
      name: "Lorenzo Mancuso",
      background:
        "Braccio destro di Laura, è in realtà un infiltrato che collabora segretamente con Giovanni per sabotare la Eternal Life Corp.",
      clues: [
        "Collabora segretamente con Giovanni",
        "Pianifica di creare un antidoto al vaccino",
        "Ha Giuggi come complice fedele",
        "Lavora come doppio agente all'interno dell'azienda",
      ],
      inventory: ["Documenti compromettenti", "Chiave del laboratorio"],
    },
  },
  Alice: {
    password: "123",
    role: "scienziata senior",
    sheet: {
      name: "Alice Lentini",
      background:
        "Scienziata senior della Eternal Life Corp, nutre rancore verso Laura per essere stata sempre messa in ombra professionalmente.",
      clues: [
        "Ha una relazione segreta con Giovanni Geno",
        "Teme che Laura riveli il suo segreto",
        "Si sente professionally sottovalutata",
        "Conosce i segreti del laboratorio",
      ],
      inventory: ["Badge di accesso", "Appunti di ricerca"],
    },
  },
  Giuggi: {
    password: "123",
    role: "segretaria complice",
    sheet: {
      name: "Giuggi",
      background:
        "Segretaria di Lorenzo Mancuso, fedelmente devota al suo capo e disposta a tutto per proteggerlo.",
      clues: [
        "Aiuta Lorenzo nei suoi piani segreti",
        "Conosce le attività clandestine di Lorenzo",
        "Ha accesso a informazioni riservate",
        "Gestisce la documentazione sensibile",
      ],
      inventory: ["Agenda di Lorenzo", "Chiavi dell'ufficio"],
    },
  },
  Valentina: {
    password: "123",
    role: "medico interno",
    sheet: {
      name: "Valentina",
      background:
        "Medico interno della Eternal Life Corp e migliore amica di Laura, coinvolta in esperimenti non autorizzati su pazienti.",
      clues: [
        "Conduce esperimenti non autorizzati",
        "È ricattata da Giovanni Geno",
        "Laura minaccia di denunciarla",
        "Sa della relazione del marito con Alice",
      ],
      inventory: ["Cartelle cliniche segrete", "Chiave dell'archivio medico"],
    },
  },
  Mattia: {
    password: "123",
    role: "tirocinante",
    sheet: {
      name: "Mattia",
      background:
        "Figlio di Nino, tirocinante con competenze limitate, inserito nel progetto grazie alla raccomandazione del padre.",
      clues: [
        "Raccomandato da Nino",
        "Limitate competenze scientifiche",
        "Potenzialmente manipolato dal padre",
        "Accesso al laboratorio come tirocinante",
      ],
      inventory: ["Badge di tirocinante", "Appunti del progetto"],
    },
  },
  Luciano: {
    password: "123",
    role: "tirocinante",
    sheet: {
      name: "Luciano",
      background:
        "Fratello di Mattia e figlio di Nino, anche lui tirocinante con accesso al progetto grazie al padre.",
      clues: [
        "Raccomandato da Nino",
        "Fratello di Mattia",
        "Possibile coinvolgimento nei piani di sabotaggio",
        "Presente nei momenti chiave",
      ],
      inventory: ["Badge di tirocinante", "Telefono con messaggi sospetti"],
    },
  },
  Nino: {
    password: "123",
    role: "investitore principale",
    sheet: {
      name: "Nino",
      background:
        "Principale investitore della Eternal Life Corp, sta affrontando gravi perdite finanziarie in un'altra sua azienda.",
      clues: [
        "In disaccordo con Laura sulla tempistica",
        "Ha raccomandato i suoi figli",
        "Problemi finanziari in altre attività",
        "Preoccupato per i rischi del progetto",
      ],
      inventory: ["Documenti finanziari", "Contratti di investimento"],
    },
  },
  Peppe: {
    password: "123",
    role: "titolare brevetto",
    sheet: {
      name: "Peppe",
      background:
        "Titolare del brevetto TEL-072L e ex amante di Laura, ha accettato di cedere i diritti esclusivi in cambio di profitti futuri.",
      clues: [
        "Ex relazione con Laura",
        "Accordo sui diritti del brevetto",
        "Conflitti passati sulla gestione",
        "Ha rinunciato ai diritti esclusivi",
      ],
      inventory: ["Documenti del brevetto", "Contratto di cessione diritti"],
    },
  },
  Alessandro: {
    password: "123",
    role: "cardinale",
    sheet: {
      name: "Alessandro Amato",
      background:
        "Cardinale di Palermo e amico d'infanzia di Laura, tormentato dal senso di colpa per non averla fermata nel suo progetto.",
      clues: [
        "Amicizia d'infanzia con Laura",
        "Preoccupazioni morali sul vaccino",
        "Conflitto tra fede e scienza",
        "Conoscenza del passato di Laura",
      ],
      inventory: ["Lettere personali di Laura", "Rosario antico"],
    },
  },
  Sara: {
    password: "123",
    role: "giornalista",
    sheet: {
      name: "Sara Caviglia",
      background:
        "Giornalista investigativa che stava preparando un'inchiesta scottante sulla Eternal Life Corp.",
      clues: [
        "Indagine in corso sulla Eternal Life Corp",
        "Possiede informazioni compromettenti",
        "Interesse nel clamore mediatico",
        "Accesso a fonti riservate",
      ],
      inventory: ["Taccuino con appunti", "Registratore nascosto"],
    },
  },
  Miki: {
    password: "123",
    role: "assassino",
    sheet: {
      name: "Miki Cos",
      background:
        "Figlio maggiore di Laura, fortemente contrario al progetto di immortalità della madre, convinto che stia giocando a fare Dio.",
      clues: [
        "Ha accesso al laboratorio come figlio di Laura",
        "Conosce la tetradotossina",
        "Ha conflitti etici con il progetto della madre",
        "Presente alla cena fatale",
      ],
      inventory: ["Fiala di tetradotossina", "Chiave di casa di Laura"],
    },
  },
  Aurora: {
    password: "123",
    role: "figlia delusa",
    sheet: {
      name: "Aurora Cos",
      background:
        "Figlia minore di Laura, frustrata per non aver mai ottenuto un ruolo di leadership nell'azienda nonostante il suo impegno.",
      clues: [
        "Conflitti sulla successione aziendale",
        "Si sente sminuita dalla madre",
        "Conosce i segreti familiari",
        "Ha accesso a informazioni riservate",
      ],
      inventory: ["Documenti sulla successione", "Diario personale"],
    },
  },
  Giovanni_Geno: {
    password: "123",
    role: "capo sicurezza",
    sheet: {
      name: "Giovanni Geno",
      background:
        "Capo della sicurezza della Eternal Life Corp, ricattato da Laura per la sua relazione con Alice Lentini.",
      clues: [
        "Relazione segreta con Alice",
        "Ricattato da Laura",
        "Controlla gli accessi al laboratorio",
        "Matrimonio in crisi",
      ],
      inventory: ["Badge di sicurezza master", "Registri di accesso"],
    },
  },
  Giovanni: {
    password: "123",
    role: "scienziato rivale",
    sheet: {
      name: "Giovanni",
      background:
        "Ex compagno di università di Laura e scienziato rivale, nutre rancore per i suoi successi.",
      clues: [
        "Collabora segretamente con Lorenzo",
        "Competizione scientifica con Laura",
        "Piano per sabotare il progetto",
        "Ricerca sull'antidoto",
      ],
      inventory: ["Progetti di ricerca alternativi", "Prove del sabotaggio"],
    },
  },
  Marco: {
    password: "123",
    role: "fratello",
    sheet: {
      name: "Marco",
      background:
        "Fratello minore di Laura e imprenditore fallito, ha sempre vissuto all'ombra della sorella.",
      clues: [
        "Invidia il successo della sorella",
        "Problemi finanziari",
        "Tensioni familiari",
        "Cerca di ottenere benefici dal progetto",
      ],
      inventory: ["Debiti documentati", "Chiave di casa della famiglia"],
    },
  },
  Simone: {
    password: "123",
    role: "avvocato",
    sheet: {
      name: "Simone",
      background:
        "Avvocato della compagnia, sospettato di coprire operazioni illegali all'interno della Eternal Life Corp.",
      clues: [
        "Gestisce documenti sensibili",
        "Conosce le attività illegali",
        "Protegge gli interessi dell'azienda",
        "Ha accesso a informazioni riservate",
      ],
      inventory: ["Documenti legali riservati", "Chiave della cassaforte"],
    },
  },
};

export default players;
