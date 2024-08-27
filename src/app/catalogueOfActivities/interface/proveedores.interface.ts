// numberDocument?: string | number;
// typeSupplier?: string;
// specialty?: string;
// estado?: strin
// marcas?: string;
// businessName?: string;

//✔
export interface TypePerson {
  typePerson: string;
  naturalPerson?: string;
  legalPerson?: string;
}

  //✔
export interface City {
  id?: number;
  name: string;
  deparment: string;
}
  //✔
export interface TypeDocument {
  identification?: string | number;
  cc?: string | number;
  nit?: string | number;
  passport?: string | number;
}

  //✔
export interface Deparment {
  name?: string;
  region?: string;
}

export interface Estado {
  estado: string;
}

export interface numberDocument {
  number: string | number;
  typeDocument: string;
}
