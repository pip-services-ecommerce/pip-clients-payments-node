import { ConfigParams } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { PaymentV1 } from './PaymentV1';
import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { OrderV1 } from './OrderV1';

export class PaymentsHttpClientV1 extends CommandableHttpClient implements IPaymentsClientV1 {

    constructor(config?: any) {
        super('v1/payments');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    makeCreditPayment(correlationId: string, platformId: string, methodId: string, order: OrderV1, callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'make_credit_payment',
            correlationId,
            {
                platform_id: platformId,
                method_id: methodId,
                order: order
            },
            callback
        );
    }

    confirmCreditPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'confirm_credit_payment',
            correlationId,
            {
                payment_id: paymentId
            },
            callback
        );
    }

    makeDebitPayment(correlationId: string, platformId: string, transactionId: string, destinationAccount: string, callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'make_debit_payment',
            correlationId,
            {
                platform_id: platformId,
                transaction_id: transactionId,
                destination_account: destinationAccount
            },
            callback
        );
    }

    cancelPayment(correlationId: string, paymentId: string, callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'cancel_payment',
            correlationId,
            {
                payment_id: paymentId
            },
            callback
        );
    }
}
