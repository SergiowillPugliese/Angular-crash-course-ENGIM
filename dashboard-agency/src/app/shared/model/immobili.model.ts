import { ClientiDTO } from "./clienti.model";

export class ImmobiliDTO {
    id: number;
    tipo: string;
    categoria: string;
    prezzo: number;
    caratteristiche?: CaratteristicheImmobile;
    stato?: statoImmobile;
    datiInquilinoAttuale?: ClientiDTO;


    constructor(init: ImmobiliDTO) {
        this.id = init.id;
        this.tipo = init.tipo;
        this.categoria = init.categoria;
        this.prezzo = init.prezzo;
        this.caratteristiche = init.caratteristiche;
        this.stato = init.stato;
        this.datiInquilinoAttuale = init.datiInquilinoAttuale;
    }
}

interface CaratteristicheImmobile {
    bagno: number;
    area: number;
    balcone: number;
    garage: boolean;
    ascensore: boolean;
    classeEnergetica: string;
    annoCostruzione: number;
    riscaldamento: string;
    condizionatore: boolean;
    arredato: boolean;
    ristrutturato: boolean;
    cucina: string;
    piano: number;
    numPiani: number;
    numLocali: number;
}

interface statoImmobile {
    dataVendita: Date;
    dataAffitto: Date;
    affittato: boolean;
    venduto: boolean;
    trattativaInCorso: boolean;
    scadenzaContrattoAffitto: Date;
    primaAllerta: boolean;
    ultimaAllerta: boolean;
}