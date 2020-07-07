import { PaymentV1 } from './PaymentV1';
import { OrderV1 } from './OrderV1';
export interface IPaymentsClientV1 {
    makeCreditPayment(correlationId: string, platformId: string, methodId: string, order: OrderV1, callback: (err: any, payment: PaymentV1) => void): void;
    confirmCreditPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void;
    makeDebitPayment(correlationId: string, platformId: string, transactionId: string, destinationAccount: string, callback: (err: any, payment: PaymentV1) => void): void;
    cancelPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void;
}
