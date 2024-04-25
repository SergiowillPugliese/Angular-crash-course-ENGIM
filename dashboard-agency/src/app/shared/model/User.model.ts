export class User {
    id: number = 0;
    ruolo: string = '';
    nome: string = '';
    cognome: string = '';
    email: string = '';
    telefono: string = '';
    indirizzo = {
        via: '',
        citta: '',
        cap: 0,
    };

    constructor(init: User) {
        this.id = init.id;
        this.ruolo = init.ruolo;
        this.nome = init.nome;
        this.cognome = init.cognome;
        this.email = init.email;
        this.telefono = init.telefono;
        this.indirizzo = init.indirizzo;
    }
}