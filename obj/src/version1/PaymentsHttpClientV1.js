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
    makeCreditPayment(correlationId, platformId, methodId, order, callback) {
        this.callCommand('make_credit_payment', correlationId, {
            platform_id: platformId,
            method_id: methodId,
            order: order
        }, callback);
    }
    confirmCreditPayment(correlationId, paymentId, callback) {
        this.callCommand('confirm_credit_payment', correlationId, {
            payment_id: paymentId
        }, callback);
    }
    makeDebitPayment(correlationId, platformId, transactionId, destinationAccount, callback) {
        this.callCommand('make_debit_payment', correlationId, {
            platform_id: platformId,
            transaction_id: transactionId,
            destination_account: destinationAccount
        }, callback);
    }
    cancelPayment(correlationId, paymentId, callback) {
        this.callCommand('cancel_payment', correlationId, {
            payment_id: paymentId
        }, callback);
    }
}
exports.PaymentsHttpClientV1 = PaymentsHttpClientV1;
//# sourceMappingURL=PaymentsHttpClientV1.js.map