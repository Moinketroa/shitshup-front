import { CamelotKey } from './camelot-key.model';

export class CamelotKeyMatcherResult {
    totalShift: number;
    camelotKeyShiftResultPair: CamelotKeyShiftResultPair;
    perfectMatch: boolean;

    constructor(shift: number, camelotKeyShiftResultPair: CamelotKeyShiftResultPair, perfectMatch: boolean) {
        this.totalShift = shift;
        this.camelotKeyShiftResultPair = camelotKeyShiftResultPair;

        this.perfectMatch = perfectMatch;
    }
}

export class CamelotKeyShiftResult {
    shift: number;
    camelotKey: CamelotKey;

    constructor(shift: number, camelotKey: CamelotKey) {
        this.shift = shift;
        this.camelotKey = camelotKey;
    }
}

export class CamelotKeyShiftResultPair {
    first: CamelotKeyShiftResult;
    second: CamelotKeyShiftResult;

    constructor(first: CamelotKeyShiftResult, second: CamelotKeyShiftResult) {
        this.first = first;
        this.second = second;
    }
}

