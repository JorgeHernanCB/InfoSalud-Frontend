//Convenios
export interface Convenios {
  id?: number | string;
  numberAgreement: NumberAgreement;
  nameAgreement: NameAgreement;
  typeAgreement: typeAgreement;
  statusAgreement: StatusAgreement;
  nitProviders: NitProviders;
  companyNameProviders: CompanyNameProviders;
  businessNameProviders: BusinessNameProviders;
  codeProvider: CodeProvider;
  dateStart: DateStart;
  dateFinish: DateFinish;
  ramo: Ramo;
  product: Product;
  automaticRenewal: AutomaticRenewal;
  departament: Departament;
  city: City;
  user: User;
}

// Part the interface of the Agreement (Covenios)

export interface typeAgreement {
  typeAgreement?: string | number;
  general?: string | number;
  specialNetwork?: string | number;
}

export interface NumberAgreement {
  numberAgreement?: string | number;
}

export interface NameAgreement {
  nameAgreement?: string | number;
}

export interface StatusAgreement {
  statusAgreement?: string | number;
}
export interface NitProviders {
  nitProviders?: string | number;
}
export interface CompanyNameProviders {
  companyNameProviders?: string | number;
}
export interface BusinessNameProviders {
  businessNameProviders?: string | number;
}
export interface CodeProvider {
  codeProvider: string | number;
}
export interface DateStart {
  dateStart: string | number | Date;
}
export interface DateFinish {
  dateFinish: string | number | Date;
}

export interface Product {
  product: string | number;
}
export interface Ramo {
  ramo: string | number;
}
export interface AutomaticRenewal {
  automaticRenewal: string | number;
}
export interface Departament {
  departament: string | number;
}
export interface City {
  city: string | number;
}
export interface User {
  user: string | number;
}
