import { Postagem } from "./Postagem"

export class UsuarioLogin{
    public id: number
    public nome: string
    public usuario: string
    public nickname: string
    public foto: string
    public senha: string
    public token: string
    public telefone: string
    public tipo: string
    public postagem: Postagem[]
}
