export class CamelotKey {
    camelotPosition: number;
    mode: 1 | 0;

    constructor(sectionString: string) {
        const section = sectionString.split('-');

        this.camelotPosition = +section[0];
        this.mode = section[1] === "B"
            ? 1
            : 0;
    }
}
