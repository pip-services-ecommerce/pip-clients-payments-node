import { IStringIdentifiable } from 'pip-services3-commons-node';
import { VersionedPracticeContentV1 } from './VersionedPracticeContentV1';
export declare class PracticeContentV1 implements IStringIdentifiable {
    constructor(id: string, author_id: string, title: string, category: string, create_time: Date, version_id: string, content: any, user_count: number);
    id: string;
    author_id: string;
    title: string;
    category: string;
    create_time: Date;
    content_version: string;
    content: any;
    user_count: number;
    verified: boolean;
    published: boolean;
    static fromVersionedPracticeContent(practice: VersionedPracticeContentV1): PracticeContentV1;
}
