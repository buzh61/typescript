import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originalName: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: Array<string>,
    readonly duration: string,
    readonly price: number,
  ) {  }
}
