export interface IPlaylist {
    codigo: number;
    nome: string;
    audios: IAudio[];
}

export interface IAudio {
    codigo: number;
    nome: string;
    duracao: string;
}