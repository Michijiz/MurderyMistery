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
        "Elogia Laura, ma al contempo quando nessuno ti vede discuti con Giovanni",
        "Pianifica di creare un antidoto al vaccino",
        "Ha Giuggi come complice fedele",
        ,
      ],
      inventory: [],
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
        "Ha una relazione segreta con Giovanni Geno, interloquisci ma neanche troppo con lui",
        "Sai che in laboratorio sono presenti delle fiale di tetradotossina per uccidere senza dolore gli animali che non passano il test",
        "Sei impaurita che Valentina possa scoprire della relazione con Giovanni Geno",
        "Teme che Laura riveli il vostro segreto",
        "Confida a Lorenzo la paura che Laura possa sperperare la relazione tra te e Giovi Geno",
        "Si sente professionally sottovalutata",
      ],
      inventory: [],
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
        "Difendi a spada tratta Lorenzo qualsiasi cosa succeda",
        "Per conto di Lorenzo cerca di avere delle informazioni top secret dalla figlia di Laura",
      ],
      inventory: [],
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
        "Sei la moglie di Giovanni Geno",
        "Giovanni non te la racconta giusta, controllalo",

        "Laura minaccia di denunciarla",
      ],
      inventory: [],
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
        "Hai notato che Michi è un pò giù di morale, osserva i suoi movimenti, motivalo",
        "Fratello di Lucinao, collabora con lui",
        "fai il vago",
        "Raccomandato da Papà Nino",
        "Limitate competenze scientifiche",
        "Potenzialmente manipolato dal padre",
        "Accesso al laboratorio come tirocinante",
      ],
      inventory: [],
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
        "Hai notato che Michi è un pò giù di morale, osserva i suoi movimenti, motivalo",
        "Raccomandato da Nino",
        "fai il vago",
        "Fratello di Mattia, collabora con lui",
        "Possibile coinvolgimento nei piani di sabotaggio",
        "Presente nei momenti chiave della ricerca",
        "Sostieni tuo padre nelle possibili sfrutiate con Laura",
      ],
      inventory: [],
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
        "In disaccordo con Laura sulla tempistica per il rilascio del vaccino",
        "Ha raccomandato i suoi figli",
        "Problemi finanziari in altre attività",
        "Preoccupato per i rischi del progetto",
        "Fatti vedere un pò disperato",
      ],
      inventory: [],
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
        "Fatti vedere molto amorevole con lei",
        "Accordo sui diritti del brevetto",
        "Conflitti passati sulla gestione",
        "Ha rinunciato ai diritti esclusivi",
        "Osserva Lorenzo e qulache volta inserisciti nel discorso",
      ],
      inventory: [],
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
        "Amico d'infanzia con Laura",
        "Predica a tutti la fede in per cui crede che questo vaccino sia contro le leggi naturali",
        "Conflitto tra fede e scienza",
        "Conoscenza del passato di Laura",
        "Hai un comportamento da ecclesiastico molto rigido, non sei molto aperto alle discussioni del vaccino.",
      ],
      inventory: [],
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
        "Intervista tutti per ottenere più scandali possibili",
        "Possiede informazioni compromettenti",
        "Conosce la storia del brevetto, interroga peppe",
      ],
      inventory: [],
    },
  },
  Miki: {
    password: "nonmiavretemai",
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
      inventory: [],
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
        "confidati con Marco tuo zio di tutte queste cose",
      ],
      inventory: [],
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
      inventory: [],
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
        "Sei contro il vaccino, infatti ti troverai a discutere con il cardinale Amato",
        "Mostra un pò d'invidia nella realizazzione di Laura",
        "Hai un antidoto che ti permette di neutralizzare il vaccino",
        "Qualche volta ridi senza senso per dar l'impressione di essere uno scienziato pazzo",
      ],
      inventory: [],
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
        "Interagisci con Aurora",
      ],
      inventory: [],
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
        "Sii il più distaccato possibile con gli altri invitati",
        " Cerca di far trappelare da Nino che ha delle gravi difficoltà finanziarie",
        "Conosce le attività illegali",
        "Protegge gli interessi dell'azienda",
        "Ha accesso a informazioni riservate",
      ],
      inventory: [],
    },
  },
};

export default players;
