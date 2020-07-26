"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PaymentsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor('pip-services-payments', 'controller', '*', '*', '*'));
        if (config)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    makePayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        let timing = this.instrument(correlationId, 'payments.make_payment');
        this._controller.makePayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        let timing = this.instrument(correlationId, 'payments.submit_payment');
        this._controller.submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    authorizePayment(correlationId, system, account, payment, callback) {
        let timing = this.instrument(correlationId, 'payments.authorize_payment');
        this._controller.authorizePayment(correlationId, system, account, payment, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    checkPayment(correlationId, system, account, payment, callback) {
        let timing = this.instrument(correlationId, 'payments.check_payment');
        this._controller.checkPayment(correlationId, system, account, payment, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    refundPayment(correlationId, system, account, payment, callback) {
        let timing = this.instrument(correlationId, 'payments.refund_payment');
        this._controller.refundPayment(correlationId, system, account, payment, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    makePayout(correlationId, system, account, seller, description, amount, currencyCode, callback) {
        let timing = this.instrument(correlationId, 'payments.make_payout');
        this._controller.makePayout(correlationId, system, account, seller, description, amount, currencyCode, (err, payout) => {
            timing.endTiming();
            callback(err, payout);
        });
    }
    checkPayout(correlationId, system, account, payout, callback) {
        let timing = this.instrument(correlationId, 'payments.check_payout');
        this._controller.checkPayout(correlationId, system, account, payout, (err, payout) => {
            timing.endTiming();
            callback(err, payout);
        });
    }
    cancelPayout(correlationId, system, account, payout, callback) {
        let timing = this.instrument(correlationId, 'payments.cancel_payout');
        this._controller.cancelPayout(correlationId, system, account, payout, (err, payout) => {
            timing.endTiming();
            callback(err, payout);
        });
    }
}
exports.PaymentsDirectClientV1 = PaymentsDirectClientV1;
//# sourceMappingURL=PaymentsDirectClientV1.js.map