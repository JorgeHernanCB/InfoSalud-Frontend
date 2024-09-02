//Proveedores
export interface Proveedores {
  id?: number;
  name: string;
  codigo: string;
  typePerson: TypePerson;
  typeDocument: TypeDocument;
  numberIndentification: NumberIndentification;
  city: City;
  deparment: Deparment;
  state: State;
  typeSuppliers: TypeSuppliers;
  specialtyByLocation: SpecialtyByLocation;
  companyName: companyName;
  businessReason: BusinessReason;
}

//part the interface of the providers(proveedores)

export interface TypePerson {
  typePerson: string;
  naturalPerson?: string;
  legalPerson?: string;
}

export interface TypeDocument {
  identification?: string | number;
  cc?: string | number;
  nit?: string | number;
  passport?: string | number;
}

export interface NumberIndentification {
  number: string | number;
  typeDocument: string;
}

export interface TypeSuppliers {
  type: string;
}

export interface City {
  id?: number;
  name: string;
  deparment?: string;
}

export interface Deparment {
  name?: string;
  region?: string;
}

export interface State {
  condition?: string;
}

export interface SpecialtyByLocation {
  code?: string | number;
  name?: string;
  adress?: string | number;
  active?: boolean;
  headOffice?: string; //Sede principal
  department?: Deparment;
  city?: City;
}

export interface companyName {
  name : string;
}

export interface BusinessReason{
  reason: string;
}
