export interface Auditorias{
    id?: number | string;
    nitProvider: NIT_IPS;
    numberIdentificationAuditor: number;
    numberAuthorization: number;
    numberAuditoria: number;
    departament: Departament;
    city: City;
    typeAuditoria: Type;
    state: State;
    ramo: Ramo;
    plate: string;
    numberFacture: NumberFacture;
    numberPolicy: number;
    numberAccident: number;
    auditsNoNumberAccident: string;
    user: string;
    // Filter for date
    dateAuditinitial: string;
    dateAuditEnd: string;
    dateAccidentInitial: string;
    dateAccidentEnd: string;
    dateAuthorizationInitial: string;
    dateAuthorizationEnd: string;
    //Filter for person
    typeDocument: TypeDocument;
    numberIdentificationPerson: number;
    namePerson: string;
}

// export interface AuditoriasDate{
    
// }

// export interface AuditoriasPerson{
    
// }


export interface NIT_IPS{
    nit: string | number;
}

export interface Type{
    type: string;
}

export interface Departament{
    departament: string;
}

export interface City{
    city: string;
}

export interface State{
    state: string;
}


export interface Ramo{
    ramo: string;
}

export interface NumberFacture{
    numberfacture: number;
}

export interface TypeDocument{
    type: string;
}