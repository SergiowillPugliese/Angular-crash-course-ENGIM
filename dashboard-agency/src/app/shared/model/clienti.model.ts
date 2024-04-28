export class ClientiDTO {
    id: number;
    nome: string;
    cognome: string;
    dataNascita: Date;
    luogoNascita: string;
    codiceFiscale: string;
    indirizzo: string;
    citta: string;
    cap: string;
    telefono: string;
    email: string;
    professione: string;
    reddito: number;

    constructor(id: number, nome: string, cognome: string, dataNascita: Date, luogoNascita: string, codiceFiscale: string, indirizzo: string, citta: string, cap: string, telefono: string, email: string, professione: string, reddito: number) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.luogoNascita = luogoNascita;
        this.codiceFiscale = codiceFiscale;
        this.indirizzo = indirizzo;
        this.citta = citta;
        this.cap = cap;
        this.telefono = telefono;
        this.email = email;
        this.professione = professione;
        this.reddito = reddito;
    }
}