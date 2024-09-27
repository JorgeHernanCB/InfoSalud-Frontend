export interface Facturas{
    id?: number | string;
    numberAccident: number;
    numberFactureAssigned: number;
    paymentStatus: PaymentStatus;
    ramo: Ramo;
    agreementNumber: number;
    branch: string;
    typeDocumentProvider: TypeDocumentProvider;
    numberIdentification: number;
    stateFactura: StateFacture;
    numberFactura: number;
    user: string;
    // Filter for date
    dateEmisioninitial: string;
    dateEmisionEnd: string;
    dateRegisterInitial: string;
    dateRegisterEnd: string;
    dateReceptionInitial: string;
    dateReceptionEnd: string;
    datePayInitial: string;
    datePayEnd: string;
}

export interface PaymentStatus{
    status: string;
}

export interface Ramo{
    ramo: string;
}

export interface TypeDocumentProvider{
    document: string;
}

export interface StateFacture{
    status: string;
}