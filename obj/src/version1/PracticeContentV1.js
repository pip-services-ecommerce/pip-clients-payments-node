"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeContentV1 = void 0;
class PracticeContentV1 {
    constructor(id, author_id, title, category, create_time, version_id, content, user_count) {
        this.id = id;
        this.author_id = author_id;
        this.title = title;
        this.category = category;
        this.create_time = create_time;
        this.content_version = version_id;
        this.content = content;
        this.user_count = user_count;
    }
    static fromVersionedPracticeContent(practice) {
        if (practice == null || practice.id == null || practice.version_id == null)
            return null;
        return new PracticeContentV1(practice.id, practice.author_id, practice.title, practice.category, practice.create_time, practice.version_id, practice.content, practice.user_count);
    }
}
exports.PracticeContentV1 = PracticeContentV1;
//# sourceMappingURL=PracticeContentV1.js.map