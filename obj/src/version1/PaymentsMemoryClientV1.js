"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const PaymentV1_1 = require("./PaymentV1");
const PaymentStatusV1_1 = require("./PaymentStatusV1");
const PaymentSystemV1_1 = require("./PaymentSystemV1");
const PayoutStatusV1_1 = require("./PayoutStatusV1");
class PaymentsMemoryClientV1 {
    constructor() {
        this._maxPageSize = 100;
        this._payments = [];
        this._payouts = [];
    }
    makePayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        this.submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, (err, payment) => {
            this.authorizePayment(correlationId, system, account, payment, callback);
        });
    }
    submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        if (system == PaymentSystemV1_1.PaymentSystemV1.Stripe) {
            if (!paymentMethod || !paymentMethod.id)
                throw new pip_services3_commons_node_3.BadRequestException(correlationId, 'ERR_PAYMENT_METHOD_REQUIRED', 'Payment method id required');
        }
        let payment = new PaymentV1_1.PaymentV1();
        payment.id = pip_services3_commons_node_2.IdGenerator.nextLong();
        payment.system = system;
        payment.confirm_data = pip_services3_commons_node_1.RandomText.text(10, 20);
        payment.status = PaymentStatusV1_1.PaymentStatusV1.Unconfirmed;
        payment.status_details = 'Call the authorizepayment method to confirm';
        this._payments.push(payment);
        if (callback)
            callback(null, payment);
    }
    authorizePayment(correlationId, system, account, payment, callback) {
        if (payment.status == PaymentStatusV1_1.PaymentStatusV1.Confirmed)
            throw new pip_services3_commons_node_3.BadRequestException(correlationId, 'ERR_PAYMENT_STATUS', 'Payment has already been authorized')
                .withDetails('payment', payment);
        payment.status = PaymentStatusV1_1.PaymentStatusV1.Confirmed;
        if (callback)
            callback(null, payment);
    }
    checkPayment(correlationId, system, account, payment, callback) {
        if (!payment.id) {
            callback(null, null);
            return null;
        }
        let items = this._payments.filter(x => x.id == payment.id);
        let item = items.length > 0 ? items[0] : null;
        if (callback)
            callback(null, item);
    }
    refundPayment(correlationId, system, account, payment, callback) {
        let items = this._payments.filter(x => x.id == payment.id);
        let item = items.length > 0 ? items[0] : null;
        if (item) {
            if (item.status == PaymentStatusV1_1.PaymentStatusV1.Confirmed) {
                item.status = PaymentStatusV1_1.PaymentStatusV1.Canceled;
                item.status_details = 'refund';
            }
            else {
                item.status = PaymentStatusV1_1.PaymentStatusV1.Canceled;
                item.status_details = 'cancel';
            }
        }
        if (callback)
            callback(null, (item !== null && item !== void 0 ? item : payment));
    }
    makePayout(correlationId, system, account, seller, description, amount, currencyCode, callback) {
        var payout = {
            id: pip_services3_commons_node_2.IdGenerator.nextLong(),
            system: system,
            status: PayoutStatusV1_1.PayoutStatusV1.Confirmed,
            account_id: pip_services3_commons_node_2.IdGenerator.nextLong()
        };
        this._payouts.push(payout);
        if (callback)
            callback(null, payout);
    }
    checkPayout(correlationId, system, account, payout, callback) {
        if (!payout.id) {
            callback(null, null);
            return null;
        }
        let items = this._payouts.filter(x => x.id == payout.id);
        let item = items.length > 0 ? items[0] : null;
        if (callback)
            callback(null, item);
    }
    cancelPayout(correlationId, system, account, payout, callback) {
        if (!payout.id) {
            callback(null, null);
            return null;
        }
        let items = this._payouts.filter(x => x.id == payout.id);
        let item = items.length > 0 ? items[0] : null;
        item.status = PaymentStatusV1_1.PaymentStatusV1.Canceled;
        if (callback)
            callback(null, item);
    }
}
exports.PaymentsMemoryClientV1 = PaymentsMemoryClientV1;
//# sourceMappingURL=PaymentsMemoryClientV1.js.map