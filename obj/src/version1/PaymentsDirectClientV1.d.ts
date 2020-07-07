import { DirectClient } from 'pip-services3-rpc-node';
import { PaymentV1 } from './PaymentV1';
import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { OrderV1 } from './OrderV1';
export declare class PaymentsDirectClientV1 extends DirectClient<any> implements IPaymentsClientV1 {
    constructor(config?: any);
    makeCreditPayment(correlationId: string, platformId: string, methodId: string, order: OrderV1, callback: (err: any, payment: PaymentV1) => void): void;
    confirmCreditPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void;
    makeDebitPayment(correlationId: string, platformId: string, transactionId: string, destinationAccount: string, callback: (err: any, payment: PaymentV1) => void): void;
    cancelPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void;
}
