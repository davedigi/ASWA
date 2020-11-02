import { PersonModel } from "./PersonModel"

export const typeBuyer = {
   PRIVATE: 'PRIVATE',
   COMPANY: 'COMPANY'
}

export const BuyerModel = {
   id: Number,
   typeBuyer: typeBuyer,
   person: PersonModel,
   fiscalCode: String,
   VATNumber: String,
   active: Number,
   state: String,
   createdAt: String,
   updateAt: String
}