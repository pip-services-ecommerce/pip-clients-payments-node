let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IPaymentsClientV1 } from '../../src/version1/IPaymentsClientV1';
import { TestModel } from '../data/TestModel';
import { PaymentStatusV1, PaymentSystemV1, OrderV1, PaymentV1 } from 'pip-services-payments-node';

let STRIPE_ACCESS_KEY: string = process.env["STRIPE_ACCESS_KEY"];

export class PaymentsClientFixtureV1 {
    private _client: IPaymentsClientV1;

    constructor(client: IPaymentsClientV1) {
        this._client = client;
    }

    testStripeMakePayment(done) {
        let order: OrderV1 = TestModel.createOrder();
        let paymentMethodId: string;

        async.series([
            (callback) => {
                TestModel.findPaymentMethod(STRIPE_ACCESS_KEY, '2', (err, methodId) =>{
                    assert.isNull(err);
                    assert.isNotNull(methodId);

                    paymentMethodId = methodId;
                    callback(); 
                });
            },
            // make payment
            (callback) => {
                this._client.makePayment(
                    null,
                    'stripe',
                    {   // account
                        access_key: STRIPE_ACCESS_KEY
                    },
                    {   // buyer
                        id: '2',
                        name: 'Steve Jobs',
                    },
                    order,
                    {   // payment method
                        id: paymentMethodId,
                        type: 'card'
                    },
                    order.total,
                    order.currency_code,
                    (err, payment) => {
                        assert.isNull(err);

                        assert.isObject(payment);
                        assert.isNotNull(payment.id);
                        assert.isNotNull(payment.capture_id);

                        assert.equal(payment.status, PaymentStatusV1.Confirmed);
                        assert.equal(payment.system, PaymentSystemV1.Stripe);

                        callback();
                    }
                );
            }
        ], done);
    }

    testStripeSubmitAndAuthorizePayment(done) {
        let order: OrderV1 = TestModel.createOrder();
        let payment1: PaymentV1;
        let paymentMethodId: string;

        async.series([
            (callback) => {
                TestModel.findPaymentMethod(STRIPE_ACCESS_KEY, '2', (err, methodId) =>{
                    assert.isNull(err);
                    assert.isNotNull(methodId);

                    paymentMethodId = methodId;
                    callback(); 
                });
            },
            // make payment
            (callback) => {
                this._client.submitPayment(
                    null,
                    'stripe',
                    {   // account
                        access_key: STRIPE_ACCESS_KEY
                    },
                    {   // buyer
                        id: '2',
                        name: 'Steve Jobs',
                    },
                    order,
                    {   // payment method
                        id: paymentMethodId,
                        type: 'card'
                    },
                    order.total,
                    order.currency_code,
                    (err, payment) => {
                        assert.isNull(err);

                        assert.isObject(payment);
                        assert.isNotNull(payment.id);
                        assert.isNotNull(payment.order_id);

                        assert.equal(payment.status, PaymentStatusV1.Unconfirmed);
                        assert.equal(payment.system, PaymentSystemV1.Stripe);

                        payment1 = payment;
                        callback();
                    }
                );
            },
            // authorize submitted payment
            (callback) => {
                this._client.authorizePayment(
                    null,
                    'stripe',
                    {   // account
                        access_key: STRIPE_ACCESS_KEY
                    },
                    payment1,
                    (err, payment) => {
                        assert.isNull(err);

                        assert.isObject(payment);
                        assert.isNotNull(payment.id);
                        assert.isNotNull(payment.capture_id);

                        assert.equal(payment.status, PaymentStatusV1.Confirmed);
                        assert.equal(payment.system, PaymentSystemV1.Stripe);

                        payment1 = payment;
                        callback();
                    }
                );
            },
            // check status of authorized payment
            (callback) => {
                this._client.checkPayment(
                    null,
                    'stripe',
                    {   // account
                        access_key: STRIPE_ACCESS_KEY
                    },
                    payment1,
                    (err, payment) => {
                        assert.isNull(err);

                        assert.isObject(payment);
                        assert.isNotNull(payment.id);
                        assert.isNotNull(payment.capture_id);

                        assert.equal(payment.status, PaymentStatusV1.Confirmed);
                        assert.equal(payment.system, PaymentSystemV1.Stripe);

                        callback();
                    }
                );
            },
            // refund authorized payment
            (callback) => {
                this._client.refundPayment(
                    null,
                    'stripe',
                    {   // account
                        access_key: STRIPE_ACCESS_KEY
                    },
                    payment1,
                    (err, payment) => {
                        assert.isNull(err);

                        assert.isObject(payment);
                        assert.isNotNull(payment.id);
                        assert.isNotNull(payment.capture_id);

                        assert.equal(payment.status, PaymentStatusV1.Canceled);
                        assert.equal(payment.system, PaymentSystemV1.Stripe);

                        callback();
                    }
                );
            },
        ], done);
    }
}
