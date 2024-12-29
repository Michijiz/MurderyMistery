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
        "Fai in modo che tutta l'attenzione ricada su di te, disprezzzando il lavoro di Laura, prendendoti i meriti che non ti sono stati riconosciuti",

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
        "Fai leva sulle fiale che avevi in laboratorio e che gli unici che potevano entrare sono coloro che possiedono il badge",
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
        "Sei stufa del comportamento di Lorenzo, esterna la tua frustrazione nei suoi confronti con un colloquo privato che sfocia in una cosa pubblica, esempio: urlando",
        "Ipotizza che è stato lui ha far fuori laura difronte a tutti, sbuggiardandolo sul su piano segreto, senza esplicitarlo del tutto",
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
        "Tu sei stata il medico che ha visto per primo la fiala del veleno, ricorda a tutti che qualcuno l'ha rimossa dalla scena del delitto",
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
        "Se qualcuno ti dovesse incolpare, continua ad essere vago e scariche le colpe a tuo fratello, aninamatamente",
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
        "Se qualcuno ti dovesse incolpare, continua ad essere vago e scariche le colpe a tuo fratello, aninamatamente",
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
        "Sfogati con tutti della tua crisi finanziaria, ricorda a tutti che questa azienda è in piedi grazie a te!",
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
        "Fai vedere i tuoi movimenti bancari da parte dell'azienda nel momento in cui ti incolpano, laura dice che capirai",
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
        "Padre, ripercorri le stazioni della via crucis, per trovare la verità assoluta, tutto questo borbottando. indizio: partendo dal pianoforte",
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
        "Ascolta tutti e riuniscili nel momento opportuno per deporre una conclusione",
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
        "Lamentati di tua madre con il cardinale di come tua madre ti ha trattato e svela informazioni interessanti di come ha maltrattato tuo fratello",
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
      clues: ["Perquisisci Simone"],
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
        "Ridi a più non posso, come se fosse una risata malvagia e svelia a tutti il suo vaccino anti tel",
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
        "Trova un modo per difendere a spada tratta tuo nipote, nel caso in cui venga incolpato",
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
        "Giustifica la detenzione della provetta di veleno per non danneggiare l'immagine dell'azienda",
      ],
      inventory: [],
    },
  },
};

export default players;
