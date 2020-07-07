"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeContentHttpClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PracticeContentHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/practice_content');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getPractices(correlationId, filter, paging, callback) {
        this.callCommand('get_practices', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getLatestPracticeVersions(correlationId, filter, paging, callback) {
        this.callCommand('get_versioned_practices', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getPracticeById(correlationId, practiceId, callback) {
        this.callCommand('get_practice_by_id', correlationId, {
            practice_id: practiceId
        }, callback);
    }
    getLatestPracticeVersionById(correlationId, practiceId, callback) {
        this.callCommand('get_latest_practice_by_id', correlationId, {
            practice_id: practiceId
        }, callback);
    }
    getPracticeVersionById(correlationId, practiceId, versionId, callback) {
        this.callCommand('get_versioned_practice_by_id', correlationId, {
            practice_id: practiceId,
            version_id: versionId
        }, callback);
    }
    addPracticeVersion(correlationId, practiceId, version, callback) {
        this.callCommand('add_versioned_practice', correlationId, {
            practice_id: practiceId,
            versioned_practice: version
        }, callback);
    }
    removePracticeVersion(correlationId, practiceId, versionId, callback) {
        this.callCommand('remove_versioned_practice', correlationId, {
            practice_id: practiceId,
            version_id: versionId
        }, callback);
    }
    addPracticeUser(correlationId, practiceId, versionId, userId, callback) {
        this.callCommand('add_practice_user', correlationId, {
            practice_id: practiceId,
            version_id: versionId,
            user_id: userId
        }, callback);
    }
    removePracticeUser(correlationId, practiceId, versionId, userId, callback) {
        this.callCommand('remove_practice_user', correlationId, {
            practice_id: practiceId,
            version_id: versionId,
            user_id: userId
        }, callback);
    }
    addPractice(correlationId, practice, callback) {
        this.callCommand('add_practice', correlationId, {
            practice: practice
        }, callback);
    }
    deletePracticeById(correlationId, practiceId, callback) {
        this.callCommand('delete_practice_by_id', correlationId, {
            practice_id: practiceId
        }, callback);
    }
}
exports.PracticeContentHttpClientV1 = PracticeContentHttpClientV1;
//# sourceMappingURL=PracticeContentHttpClientV1.js.map