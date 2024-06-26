import BuyerModel from ''
import typeProduct from '../../actionServices/TypesAuction'
import { SupplierModel } from './SupplierModel'

export const TransactionState = {
   CANCELLED: 'CANCELLED',
   REGISTERED: 'REGISTERED'
}

export const TransactionModel = {
   id: Number,
   typeProduct: typeProduct,
   supplier: SupplierModel,
   buyer: BuyerModel,
   price: Number,
   state: TransactionState,
   createdAt: String,
   updateAt: String
}

export interface ITransactionModel {
   Label?: string;
   Transact: TransactionModel;
}
// class Demo extends React.Component<IclockStates> {}
// let d = <Demo Transact={Transact.buyer} />