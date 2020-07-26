import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { PaymentSystemAccountV1 } from 'pip-services-payments-node';
import { BuyerV1 } from 'pip-services-payments-node';
import { OrderV1 } from 'pip-services-payments-node';
import { PaymentMethodV1 } from 'pip-services-payments-node';
import { PaymentV1 } from 'pip-services-payments-node';
import { SellerV1 } from 'pip-services-payments-node';
import { PayoutV1 } from 'pip-services-payments-node';

export class PaymentsDirectClientV1 extends DirectClient<any> implements IPaymentsClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-services-payments', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    makePayment(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, 
        amount: number, currencyCode: string, 
        callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.make_payment');
        this._controller.makePayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    submitPayment(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string, 
        callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.submit_payment');
        this._controller.submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    authorizePayment(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        payment: PaymentV1, 
        callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.authorize_payment');
        this._controller.authorizePayment(correlationId, system, account, payment, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    checkPayment(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        payment: PaymentV1, 
        callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.check_payment');
        this._controller.checkPayment(correlationId, system, account, payment, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    refundPayment(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        payment: PaymentV1, 
        callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.refund_payment');
        this._controller.refundPayment(correlationId, system, account, payment, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    makePayout(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        seller: SellerV1, description: string, amount: number, currencyCode: string, 
        callback: (err: any, payout: PayoutV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.make_payout');
        this._controller.makePayout(correlationId, system, account, seller, description, amount, currencyCode, (err, payout) => {
            timing.endTiming();
            callback(err, payout);
        });
    }

    checkPayout(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        payout: PayoutV1, 
        callback: (err: any, payout: PayoutV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.check_payout');
        this._controller.checkPayout(correlationId, system, account, payout, (err, payout) => {
            timing.endTiming();
            callback(err, payout);
        });
    }

    cancelPayout(correlationId: string, system: string, account: PaymentSystemAccountV1, 
        payout: PayoutV1, 
        callback: (err: any, payout: PayoutV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.cancel_payout');
        this._controller.cancelPayout(correlationId, system, account, payout, (err, payout) => {
            timing.endTiming();
            callback(err, payout);
        });
    }
}