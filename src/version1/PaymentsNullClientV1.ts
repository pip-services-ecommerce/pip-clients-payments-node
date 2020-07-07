import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { PaymentV1 } from './PaymentV1';
import { OrderV1 } from './OrderV1';

export class PaymentsNullClientV1 implements IPaymentsClientV1 {
    makeCreditPayment(correlationId: string, platformId: string, methodId: string, order: OrderV1, callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }
    confirmCreditPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }
    makeDebitPayment(correlationId: string, platformId: string, transactionId: string, destinationAccount: string, callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }
    cancelPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }
}