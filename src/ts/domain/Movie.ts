import Buyable from './Buyable'

export default class Movie implements Buyable {
    constructor(
        readonly name: string,
        readonly originalName: string | null,
        year: number,
        origin: string[],
        slogan: string | null,
        genre: string[],
        time: number     
    ) {}

    }
