import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { PaymentSystemAccountV1 } from 'pip-services-payments-node';
import { BuyerV1 } from 'pip-services-payments-node';
import { OrderV1 } from 'pip-services-payments-node';
import { PaymentMethodV1 } from 'pip-services-payments-node';
import { PaymentV1 } from 'pip-services-payments-node';
import { SellerV1 } from 'pip-services-payments-node';
import { PayoutV1 } from 'pip-services-payments-node';

export class PaymentsNullClientV1 implements IPaymentsClientV1 {
    makePayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string,
        callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }

    submitPayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string,
        callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }

    authorizePayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payment: PaymentV1,
        callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }

    checkPayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payment: PaymentV1,
        callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }

    refundPayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payment: PaymentV1,
        callback: (err: any, payment: PaymentV1) => void): void {
        callback(null, null);
    }

    makePayout(correlationId: string, system: string, account: PaymentSystemAccountV1,
        seller: SellerV1, description: string, amount: number, currencyCode: string,
        callback: (err: any, payout: PayoutV1) => void): void {
        callback(null, null);
    }

    checkPayout(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payout: PayoutV1,
        callback: (err: any, payout: PayoutV1) => void): void {
        callback(null, null);
    }

    cancelPayout(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payout: PayoutV1,
        callback: (err: any, payout: PayoutV1) => void): void {
        callback(null, null);
    }

}