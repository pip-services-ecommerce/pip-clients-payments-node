"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentsNullClientV1 {
    makeCreditPayment(correlationId, platformId, methodId, order, callback) {
        callback(null, null);
    }
    confirmCreditPayment(correlationId, paymentId, callback) {
        callback(null, null);
    }
    makeDebitPayment(correlationId, platformId, transactionId, destinationAccount, callback) {
        callback(null, null);
    }
    cancelPayment(correlationId, paymentId, callback) {
        callback(null, null);
    }
}
exports.PaymentsNullClientV1 = PaymentsNullClientV1;
//# sourceMappingURL=PaymentsNullClientV1.js.map