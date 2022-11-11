import Postagem from "./Postagem";

interface User {
    id: number;
    nome: string;
    foto: string;
    usuario: string;
    senha: string;
    postagem?: Postagem[] 
}

export default User;