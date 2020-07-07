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
    makeCreditPayment(correlationId, platformId, methodId, order, callback) {
        let timing = this.instrument(correlationId, 'payments.make_credit_payment');
        this._controller.makeCreditPayment(correlationId, platformId, methodId, order, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    confirmCreditPayment(correlationId, paymentId, callback) {
        let timing = this.instrument(correlationId, 'payments.confirm_credit_payment');
        this._controller.confirmCreditPayment(correlationId, paymentId, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    makeDebitPayment(correlationId, platformId, transactionId, destinationAccount, callback) {
        let timing = this.instrument(correlationId, 'payments.make_debit_payment');
        this._controller.makeDebitPayment(correlationId, platformId, transactionId, destinationAccount, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
    cancelPayment(correlationId, paymentId, callback) {
        let timing = this.instrument(correlationId, 'payments.cancel_payment');
        this._controller.cancelPayment(correlationId, paymentId, (err, payment) => {
            timing.endTiming();
            callback(err, payment);
        });
    }
}
exports.PaymentsDirectClientV1 = PaymentsDirectClientV1;
//# sourceMappingURL=PaymentsDirectClientV1.js.map