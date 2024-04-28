import { ClientiDTO } from "./clienti.model";

export class ImmobiliDTO {
    id: number;
    tipo: string;
    categoria: string;
    prezzo: number;


    constructor(init: ImmobiliDTO) {
        this.id = init.id;
        this.tipo = init.tipo;
        this.categoria = init.categoria;
        this.prezzo = init.prezzo;
    }
}

export class ImmobiliVM extends ImmobiliDTO {
    caratteristiche: CaratteristicheImmobile;
    stato: statoImmobile;
    datiInquilinoAttuale: ClientiDTO;

    constructor(immobili: ImmobiliDTO, caratteristiche: CaratteristicheImmobile, stato: statoImmobile, datiInquilinoAttuale: ClientiDTO) {
        super(immobili);
        this.caratteristiche = caratteristiche;
        this.stato = stato;
        this.datiInquilinoAttuale = datiInquilinoAttuale;
    }
}


class CaratteristicheImmobile {
    bagno: number;
    area: number;
    balcone: number;
    garage: boolean;
    ascensore: boolean;
    classeEbergetica: string;
    annoCostruzione: number;
    riscaldamento: string;
    condizionatore: boolean;
    arredato: boolean;
    ristrutturato: boolean;
    cucina: string;
    piano: number;
    numPiani: number;
    numLocali: number;

    constructor(bagno: number, area: number, balcone: number, garage: boolean, ascensore: boolean, classeEbergetica: string, annoCostruzione: number, riscaldamento: string, condizionatore: boolean, arredato: boolean, ristrutturato: boolean, cucina: string, piano: number, numPiani: number, numLocali: number) {
        this.bagno = bagno;
        this.area = area;
        this.balcone = balcone;
        this.garage = garage;
        this.ascensore = ascensore;
        this.classeEbergetica = classeEbergetica;
        this.annoCostruzione = annoCostruzione;
        this.riscaldamento = riscaldamento;
        this.condizionatore = condizionatore;
        this.arredato = arredato;
        this.ristrutturato = ristrutturato;
        this.cucina = cucina;
        this.piano = piano;
        this.numPiani = numPiani;
        this.numLocali = numLocali;
    }
}

class statoImmobile {
    dataVendita: Date;
    dataAffitto: Date;
    affittato: boolean;
    venduto: boolean;
    trattativaInCorso: boolean;
    scadenzaContrattoAffitto: Date;
    primaAllerta: boolean;
    ultimaAllerta: boolean;

    constructor(dataVendita: Date, dataAffitto: Date, affittato: boolean, venduto: boolean, trattativaInCorso: boolean, scadenzaContrattoAffitto: Date, primaAllerta: boolean, ultimaAllerta: boolean) {
        this.dataVendita = dataVendita;
        this.dataAffitto = dataAffitto;
        this.affittato = affittato;
        this.venduto = venduto;
        this.trattativaInCorso = trattativaInCorso;
        this.scadenzaContrattoAffitto = scadenzaContrattoAffitto;
        this.primaAllerta = primaAllerta;
        this.ultimaAllerta = ultimaAllerta;
    }
}