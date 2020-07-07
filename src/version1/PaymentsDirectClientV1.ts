import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { PaymentV1 } from './PaymentV1';
import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { OrderV1 } from './OrderV1';

export class PaymentsDirectClientV1 extends DirectClient<any> implements IPaymentsClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-services-payments', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    makeCreditPayment(correlationId: string, platformId: string, methodId: string, order: OrderV1, callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.make_credit_payment');
        this._controller.makeCreditPayment(correlationId, platformId, methodId, order, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    confirmCreditPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.confirm_credit_payment');
        this._controller.confirmCreditPayment(correlationId, paymentId, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    makeDebitPayment(correlationId: string, platformId: string, transactionId: string, destinationAccount: string, callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.make_debit_payment');
        this._controller.makeDebitPayment(correlationId, platformId, transactionId, destinationAccount, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }

    cancelPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void {
        let timing = this.instrument(correlationId, 'payments.cancel_payment');
        this._controller.cancelPayment(correlationId, paymentId, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
}