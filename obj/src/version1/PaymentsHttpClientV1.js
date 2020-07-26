"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PaymentsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/payments');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    makePayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        this.callCommand('make_payment', correlationId, {
            system: system,
            account: account,
            buyer: buyer,
            order: order,
            payment_method: paymentMethod,
            amount: amount,
            currency_code: currencyCode
        }, callback);
    }
    submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        this.callCommand('submit_payment', correlationId, {
            system: system,
            account: account,
            buyer: buyer,
            order: order,
            payment_method: paymentMethod,
            amount: amount,
            currency_code: currencyCode
        }, callback);
    }
    authorizePayment(correlationId, system, account, payment, callback) {
        this.callCommand('authorize_payment', correlationId, {
            system: system,
            account: account,
            payment: payment
        }, callback);
    }
    checkPayment(correlationId, system, account, payment, callback) {
        this.callCommand('check_payment', correlationId, {
            system: system,
            account: account,
            payment: payment
        }, callback);
    }
    refundPayment(correlationId, system, account, payment, callback) {
        this.callCommand('refund_payment', correlationId, {
            system: system,
            account: account,
            payment: payment
        }, callback);
    }
    makePayout(correlationId, system, account, seller, description, amount, currencyCode, callback) {
        this.callCommand('make_payout', correlationId, {
            system: system,
            account: account,
            seller: seller,
            description: description,
            amount: amount,
            currency_code: currencyCode
        }, callback);
    }
    checkPayout(correlationId, system, account, payout, callback) {
        this.callCommand('check_payout', correlationId, {
            system: system,
            account: account,
            payout: payout
        }, callback);
    }
    cancelPayout(correlationId, system, account, payout, callback) {
        this.callCommand('cancel_payout', correlationId, {
            system: system,
            account: account,
            payout: payout
        }, callback);
    }
}
exports.PaymentsHttpClientV1 = PaymentsHttpClientV1;
//# sourceMappingURL=PaymentsHttpClientV1.js.map