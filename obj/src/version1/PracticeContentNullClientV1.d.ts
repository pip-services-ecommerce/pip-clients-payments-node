import { IPracticeContentClientV1 } from './IPracticeContentClientV1';
import { PracticeContentSetV1 } from './PracticeContentSetV1';
import { VersionedPracticeContentV1 } from './VersionedPracticeContentV1';
export declare class PracticeContentNullClientV1 implements IPracticeContentClientV1 {
    getPractices(correlationId: string, filter: any, paging: any, callback: (err: any, page: any) => void): void;
    getLatestPracticeVersions(correlationId: string, filter: any, paging: any, callback: (err: any, page: any) => void): void;
    getPracticeById(correlationId: string, practiceId: string, callback: (err: any, practice: PracticeContentSetV1) => void): void;
    getLatestPracticeVersionById(correlationId: string, practiceId: string, callback: (err: any, practice: VersionedPracticeContentV1) => void): void;
    getPracticeVersionById(correlationId: string, practiceId: string, versionId: string, callback: (err: any, practice: VersionedPracticeContentV1) => void): void;
    addPracticeVersion(correlationId: string, practiceId: string, version: VersionedPracticeContentV1, callback: (err: any, practice: VersionedPracticeContentV1) => void): void;
    removePracticeVersion(correlationId: string, practiceId: string, versionId: string, callback: (err: any, practice: VersionedPracticeContentV1) => void): void;
    addPracticeUser(correlationId: string, practiceId: string, versionId: string, userId: string, callback: (err: any, practice: PracticeContentSetV1) => void): void;
    removePracticeUser(correlationId: string, practiceId: string, versionId: string, userId: string, callback: (err: any, practice: PracticeContentSetV1) => void): void;
    addPractice(correlationId: string, practice: PracticeContentSetV1, callback: (err: any, practice: PracticeContentSetV1) => void): void;
    deletePracticeById(correlationId: string, practiceId: string, callback: (err: any, practice: PracticeContentSetV1) => void): void;
}
