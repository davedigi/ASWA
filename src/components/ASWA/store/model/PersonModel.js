import { UserModel } from "./UserModel";

export const PersonModel = {
   id: Number,
   name: String,
   surname: String,
   sex: String,
   fiscalCode: String,
   user: UserModel,
   state: String,
   createdAt: String,
   updateAt: String
};
