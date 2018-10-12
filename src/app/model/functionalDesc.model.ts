export class FunctionalDesc {
    id: number;
    code: string;
    functionDesc: string;
    userStoryId: number;

    constructor(id: number, code: string, functionDesc: string, userStoryId: number) {
        this.id = id;
        this.code = code;
        this.functionDesc = functionDesc;
        this.userStoryId = userStoryId;
    }
}