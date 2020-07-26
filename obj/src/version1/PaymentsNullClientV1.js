"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentsNullClientV1 {
    makePayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        callback(null, null);
    }
    submitPayment(correlationId, system, account, buyer, order, paymentMethod, amount, currencyCode, callback) {
        callback(null, null);
    }
    authorizePayment(correlationId, system, account, payment, callback) {
        callback(null, null);
    }
    checkPayment(correlationId, system, account, payment, callback) {
        callback(null, null);
    }
    refundPayment(correlationId, system, account, payment, callback) {
        callback(null, null);
    }
    makePayout(correlationId, system, account, seller, description, amount, currencyCode, callback) {
        callback(null, null);
    }
    checkPayout(correlationId, system, account, payout, callback) {
        callback(null, null);
    }
    cancelPayout(correlationId, system, account, payout, callback) {
        callback(null, null);
    }
}
exports.PaymentsNullClientV1 = PaymentsNullClientV1;
//# sourceMappingURL=PaymentsNullClientV1.js.map