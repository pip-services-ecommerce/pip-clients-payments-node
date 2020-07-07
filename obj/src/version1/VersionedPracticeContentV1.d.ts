import { IStringIdentifiable } from 'pip-services3-commons-node';
import { PracticeContentV1 } from './PracticeContentV1';
export declare class VersionedPracticeContentV1 implements IStringIdentifiable {
    constructor(id: string, content_version: string, author_id: string, title: string, category: string, create_time: Date, content: any, user_count: number);
    id: string;
    version_id: string;
    author_id: string;
    title: string;
    category: string;
    create_time: Date;
    content_version: string;
    content: any;
    user_count: number;
    static fromPracticeContent(practice: PracticeContentV1): VersionedPracticeContentV1;
}
