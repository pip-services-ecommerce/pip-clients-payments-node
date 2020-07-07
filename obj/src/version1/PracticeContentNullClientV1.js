"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeContentNullClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class PracticeContentNullClientV1 {
    getPractices(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getLatestPracticeVersions(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getPracticeById(correlationId, practiceId, callback) {
        callback(null, null);
    }
    getLatestPracticeVersionById(correlationId, practiceId, callback) {
        callback(null, null);
    }
    getPracticeVersionById(correlationId, practiceId, versionId, callback) {
        callback(null, null);
    }
    addPracticeVersion(correlationId, practiceId, version, callback) {
        callback(null, null);
    }
    removePracticeVersion(correlationId, practiceId, versionId, callback) {
        callback(null, null);
    }
    addPracticeUser(correlationId, practiceId, versionId, userId, callback) {
        callback(null, null);
    }
    removePracticeUser(correlationId, practiceId, versionId, userId, callback) {
        callback(null, null);
    }
    addPractice(correlationId, practice, callback) {
        callback(null, null);
    }
    deletePracticeById(correlationId, practiceId, callback) {
        callback(null, null);
    }
}
exports.PracticeContentNullClientV1 = PracticeContentNullClientV1;
//# sourceMappingURL=PracticeContentNullClientV1.js.map