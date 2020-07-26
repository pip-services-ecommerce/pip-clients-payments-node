import { ConfigParams } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { IPaymentsClientV1 } from './IPaymentsClientV1';
import { PaymentSystemAccountV1 } from 'pip-services-payments-node';
import { BuyerV1 } from 'pip-services-payments-node';
import { OrderV1 } from 'pip-services-payments-node';
import { PaymentMethodV1 } from 'pip-services-payments-node';
import { PaymentV1 } from 'pip-services-payments-node';
import { SellerV1 } from 'pip-services-payments-node';
import { PayoutV1 } from 'pip-services-payments-node';

export class PaymentsHttpClientV1 extends CommandableHttpClient implements IPaymentsClientV1 {

    constructor(config?: any) {
        super('v1/payments');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    makePayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string,
        callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'make_payment',
            correlationId,
            {
                system: system,
                account: account,
                buyer: buyer,
                order: order,
                payment_method: paymentMethod,
                amount: amount,
                currency_code: currencyCode
            },
            callback
        );
    }

    submitPayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        buyer: BuyerV1, order: OrderV1, paymentMethod: PaymentMethodV1, amount: number, currencyCode: string,
        callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'submit_payment',
            correlationId,
            {
                system: system,
                account: account,
                buyer: buyer,
                order: order,
                payment_method: paymentMethod,
                amount: amount,
                currency_code: currencyCode
            },
            callback
        );
    }

    authorizePayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payment: PaymentV1,
        callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'authorize_payment',
            correlationId,
            {
                system: system,
                account: account,
                payment: payment
            },
            callback
        );
    }

    checkPayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payment: PaymentV1,
        callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'check_payment',
            correlationId,
            {
                system: system,
                account: account,
                payment: payment
            },
            callback
        );
    }

    refundPayment(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payment: PaymentV1,
        callback: (err: any, payment: PaymentV1) => void): void {
        this.callCommand(
            'refund_payment',
            correlationId,
            {
                system: system,
                account: account,
                payment: payment
            },
            callback
        );
    }

    makePayout(correlationId: string, system: string, account: PaymentSystemAccountV1,
        seller: SellerV1, description: string, amount: number, currencyCode: string,
        callback: (err: any, payout: PayoutV1) => void): void {
        this.callCommand(
            'make_payout',
            correlationId,
            {
                system: system,
                account: account,
                seller: seller,
                description: description,
                amount: amount,
                currency_code: currencyCode
            },
            callback
        );
    }

    checkPayout(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payout: PayoutV1,
        callback: (err: any, payout: PayoutV1) => void): void {
        this.callCommand(
            'check_payout',
            correlationId,
            {
                system: system,
                account: account,
                payout: payout
            },
            callback
        );
    }

    cancelPayout(correlationId: string, system: string, account: PaymentSystemAccountV1,
        payout: PayoutV1,
        callback: (err: any, payout: PayoutV1) => void): void {
        this.callCommand(
            'cancel_payout',
            correlationId,
            {
                system: system,
                account: account,
                payout: payout
            },
            callback
        );
    }
}
