import { Proizvodjac } from "./proizvodjac.model";

export class Proizvod {
    constructor(public id: number, 
                public naziv: string, 
                public proizvodjac: Proizvodjac){

    }
}