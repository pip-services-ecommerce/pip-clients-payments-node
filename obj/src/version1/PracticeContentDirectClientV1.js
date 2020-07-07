"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeContentDirectClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PracticeContentDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor("guru-practicecontent", "controller", "*", "*", "*"));
        if (config)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getPractices(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'practice_content.get_practices');
        this._controller.getPractices(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getLatestPracticeVersions(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'practice_content.get_versioned_practices');
        this._controller.getLatestPracticeVersions(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getPracticeById(correlationId, practiceId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.get_practice_by_id');
        this._controller.getPracticeById(correlationId, practiceId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    getLatestPracticeVersionById(correlationId, practiceId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.get_latest_practice_by_id');
        this._controller.getLatestPracticeVersionById(correlationId, practiceId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    getPracticeVersionById(correlationId, practiceId, versionId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.get_versioned_practice_by_id');
        this._controller.getPracticeVersionById(correlationId, practiceId, versionId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    addPracticeVersion(correlationId, practiceId, version, callback) {
        let timing = this.instrument(correlationId, 'practice_content.add_versioned_practice');
        this._controller.addPracticeVersion(correlationId, practiceId, version, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    removePracticeVersion(correlationId, practiceId, versionId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.remove_versioned_practice');
        this._controller.removePracticeVersion(correlationId, practiceId, versionId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    addPracticeUser(correlationId, practiceId, versionId, userId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.add_practice_user');
        this._controller.addPracticeUser(correlationId, practiceId, versionId, userId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    removePracticeUser(correlationId, practiceId, versionId, userId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.remove_practice_user');
        this._controller.removePracticeUser(correlationId, practiceId, versionId, userId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    addPractice(correlationId, practice, callback) {
        let timing = this.instrument(correlationId, 'practice_content.add_practice');
        this._controller.addPractice(correlationId, practice, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
    deletePracticeById(correlationId, practiceId, callback) {
        let timing = this.instrument(correlationId, 'practice_content.delete_practice_by_id');
        this._controller.deletePracticeById(correlationId, practiceId, (err, practice) => {
            timing.endTiming();
            callback(err, practice);
        });
    }
}
exports.PracticeContentDirectClientV1 = PracticeContentDirectClientV1;
//# sourceMappingURL=PracticeContentDirectClientV1.js.map