//Proveedores
export interface Proveedores {
  id?: number | string;
  typeProviders: TypeProviders;
  name?: string;
  status: Status;
  special: Special;
  typePerson: TypePerson;
  typeDocument: TypeDocument;
  numberDocument: NumberDocument;
  city: City;
  especialty: string;
  departament: Deparment;
  date_start?: Date_start;
  date_finish?: Date_finish;
  code?: string | number;
  active?: Active;
  sedePrincipal ?: PrincipalSede;
}

//part the interface of the providers(proveedores)


export interface TypeProviders {
  name: string;
  audit?: string;
  investigator?: string;
  laboratory?: string;
  IPS?: string;
  clinic?: string;
  hospital?: string;
}

export interface Status {
  status: string;
}

export interface TypePerson {
  typePerson: string;
}

export interface TypeDocument {
  identification?: string | number;
  cc?: string | number;
  nit?: string | number;
  passport?: string | number;
}

export interface NumberDocument {
  number: string | number;
  typeDocument: string;
}

export interface City {
  city: string;
  deparment?: string;
}

export interface Deparment {
  name?: string;
  region?: string;
}

export interface Date_start {
  date_start: string | Date | number;
}
export interface Date_finish {
  date_finish: string | Date | number;
}

export interface Special{
  name: string;
}

export interface Active{
  name: string;
}

export interface PrincipalSede{
  name: string;
}

