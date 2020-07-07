"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const PaymentsNullClientV1_1 = require("../version1/PaymentsNullClientV1");
const PaymentsDirectClientV1_1 = require("../version1/PaymentsDirectClientV1");
const PaymentsHttpClientV1_1 = require("../version1/PaymentsHttpClientV1");
class PaymentsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(PaymentsClientFactory.NullClientV1Descriptor, PaymentsNullClientV1_1.PaymentsNullClientV1);
        this.registerAsType(PaymentsClientFactory.DirectClientV1Descriptor, PaymentsDirectClientV1_1.PaymentsDirectClientV1);
        this.registerAsType(PaymentsClientFactory.HttpClientV1Descriptor, PaymentsHttpClientV1_1.PaymentsHttpClientV1);
    }
}
exports.PaymentsClientFactory = PaymentsClientFactory;
PaymentsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payments', 'factory', 'default', 'default', '1.0');
PaymentsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payments', 'client', 'null', 'default', '1.0');
PaymentsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payments', 'client', 'direct', 'default', '1.0');
PaymentsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payments', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=PaymentsClientFactory.js.map