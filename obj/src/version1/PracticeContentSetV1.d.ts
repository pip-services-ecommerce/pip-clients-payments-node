import { IStringIdentifiable } from 'pip-services3-commons-node';
import { PracticeContentV1 } from './PracticeContentV1';
export declare class PracticeContentSetV1 implements IStringIdentifiable {
    id: string;
    author_id: string;
    create_time: Date;
    update_time: Date;
    deleted: boolean;
    versions: PracticeContentV1[];
    user_count: number;
}
