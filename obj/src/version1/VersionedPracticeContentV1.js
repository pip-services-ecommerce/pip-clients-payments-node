"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionedPracticeContentV1 = void 0;
class VersionedPracticeContentV1 {
    constructor(id, content_version, author_id, title, category, create_time, content, user_count) {
        this.id = id;
        this.version_id = content_version;
        this.author_id = author_id;
        this.title = title;
        this.category = category;
        this.create_time = create_time;
        this.content = content;
        this.user_count = user_count;
    }
    static fromPracticeContent(practice) {
        if (practice == null || practice.id == null || practice.content_version == null)
            return null;
        return new VersionedPracticeContentV1(practice.id, practice.content_version, practice.author_id, practice.title, practice.category, practice.create_time, practice.content, practice.user_count);
    }
}
exports.VersionedPracticeContentV1 = VersionedPracticeContentV1;
//# sourceMappingURL=VersionedPracticeContentV1.js.map