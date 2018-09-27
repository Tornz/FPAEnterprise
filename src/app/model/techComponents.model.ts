import { TechnologyItem } from "./TechnolonogyItem.model";

export class TechComponents {
    public frontend: TechnologyItem[];
    public backend: TechnologyItem[];
    public report: TechnologyItem[];
    public storage: TechnologyItem[];


    constructor(frontend: TechnologyItem[], backend: TechnologyItem[],
        report: TechnologyItem[], storage: TechnologyItem[]) {

        this.frontend = frontend.slice();
        this.backend = backend.slice();
        this.report = report.slice();
        this.storage = storage.slice();
    }
}
