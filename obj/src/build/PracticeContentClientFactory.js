"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeContentClientFactory = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const PracticeContentNullClientV1_1 = require("../version1/PracticeContentNullClientV1");
const PracticeContentDirectClientV1_1 = require("../version1/PracticeContentDirectClientV1");
const PracticeContentHttpClientV1_1 = require("../version1/PracticeContentHttpClientV1");
class PracticeContentClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(PracticeContentClientFactory.NullClientV1Descriptor, PracticeContentNullClientV1_1.PracticeContentNullClientV1);
        this.registerAsType(PracticeContentClientFactory.DirectClientV1Descriptor, PracticeContentDirectClientV1_1.PracticeContentDirectClientV1);
        this.registerAsType(PracticeContentClientFactory.HttpClientV1Descriptor, PracticeContentHttpClientV1_1.PracticeContentHttpClientV1);
    }
}
exports.PracticeContentClientFactory = PracticeContentClientFactory;
PracticeContentClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('guru-practicecontent', 'factory', 'default', 'default', '1.0');
PracticeContentClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('guru-practicecontent', 'client', 'null', 'default', '1.0');
PracticeContentClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('guru-practicecontent', 'client', 'direct', 'default', '1.0');
PracticeContentClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('guru-practicecontent', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=PracticeContentClientFactory.js.map