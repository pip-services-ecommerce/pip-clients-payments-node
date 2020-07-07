let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IPaymentsClientV1 } from '../../src/version1/IPaymentsClientV1';
import { TestModel } from '../data/TestModel';
import { OrderV1 } from '../../src/version1/OrderV1';

var now = new Date();

export class PaymentsClientFixtureV1 {
    private _client: IPaymentsClientV1;

    constructor(client: IPaymentsClientV1) {
        this._client = client;
    }

    testMakeCreditPayment(done) {
        let order: OrderV1 = TestModel.createOrder();

        async.series([
            // Create one practice
            (callback) => {
                this._client.makeCreditPayment(
                    null,
                    'stripe',
                    'md-907172',
                    order,
                    (err, payment) => {
                        assert.isNull(err);

                        assert.isObject(payment);
                        assert.isNotNull(payment.id);
                        assert.isNotNull(payment.platform_data.order_id);        

                        assert.equal(order.id, payment.order_id);
                        assert.equal('unconfirmed', payment.status);
                        assert.equal('credit', payment.type);
                        assert.equal('stripe', payment.platform_data.platform_id);

                        callback();
                    }
                );
            }
        ], done);
    }
}
