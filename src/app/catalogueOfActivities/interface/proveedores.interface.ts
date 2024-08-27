
  // numberDocument?: string | number;
  // typeSupplier?: string;
  // specialty?: string;
  // estado?: strin
  // marcas?: string;
  // businessName?: string;

export interface TypePerson {
  naturalPerson: string;
  legalPerson: string;
}

export interface TypeDocument {
  cc: string | number;
  nit: string | number;
  passport: string | number;
}

// export interface Deparment {
//   name: string;
//   region: string;
// }

export interface City {
  id?: number;
  name: string;
  deparment: string;
}

export interface numberDocument {
  number: string | number;
  typeDocument: string;
}


