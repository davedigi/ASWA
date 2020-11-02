import { PersonModel } from "./PersonModel"

export const typeSupplier = {
   "AUTONOMO": 'AUTONOMO',
   "SOCIETA": 'SOCIETA'
}

export const SupplierModel = {
   id: Number,
   typeSupplier: typeSupplier,
   person: PersonModel,
   legalName: String,
   businessName: String,
   fiscalCode: String,
   VATNumber: String,
   active: Number,
   state: String,
   createdAt: String,
   updateAt: String
}