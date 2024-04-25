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

    constructor(init: any) {
        Object.assign(this, init);
    }
}