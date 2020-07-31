import { IPaymentsClientV1 } from "./IPaymentsClientV1";
import { PaymentSystemAccountV1 } from './PaymentSystemAccountV1';
import { BuyerV1 } from './BuyerV1';
import { OrderV1 } from './OrderV1';
import { PaymentMethodV1 } from './PaymentMethodV1';
import { PaymentV1 } from './PaymentV1';
import { SellerV1 } from './SellerV1';
import { PayoutV1 } from './PayoutV1';
export declare class PaymentsMemoryClientV1 implements IPaymentsClientV1 {
    private _maxPageSize;
    private _payments;
    private _payouts;
    constructor();
    makePayment(correlationId: string, system: string, account: PaymentSystemAccountV1, buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string, callback: (err: any, payment: PaymentV1) => void): void;
    submitPayment(correlationId: string, system: string, account: PaymentSystemAccountV1, buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string, callback: (err: any, payment: PaymentV1) => void): void;
    authorizePayment(correlationId: string, system: string, account: PaymentSystemAccountV1, payment: PaymentV1, callback: (err: any, payment: PaymentV1) => void): void;
    checkPayment(correlationId: string, system: string, account: PaymentSystemAccountV1, payment: PaymentV1, callback: (err: any, payment: PaymentV1) => void): void;
    refundPayment(correlationId: string, system: string, account: PaymentSystemAccountV1, payment: PaymentV1, callback: (err: any, payment: PaymentV1) => void): void;
    makePayout(correlationId: string, system: string, account: PaymentSystemAccountV1, seller: SellerV1, description: string, amount: number, currencyCode: string, callback: (err: any, payout: PayoutV1) => void): void;
    checkPayout(correlationId: string, system: string, account: PaymentSystemAccountV1, payout: PayoutV1, callback: (err: any, payout: PayoutV1) => void): void;
    cancelPayout(correlationId: string, system: string, account: PaymentSystemAccountV1, payout: PayoutV1, callback: (err: any, payout: PayoutV1) => void): void;
}
