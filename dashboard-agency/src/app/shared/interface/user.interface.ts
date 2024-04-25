export interface UserResponse {
    id: number;
    ruolo: string;
    username: string;
    password: string;
    nome: string;
    cognome: string;
    email: string;
    telefono: string;
    indirizzo: {
        via: string,
        citta: string,
        cap: number,
    };
}

