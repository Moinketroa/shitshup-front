import { Component } from '@angular/core';
import { isNullOrUndefined } from '../shared/util/util';
import { CamelotKeyPair } from '../shared/models/camelot-key-pair.model';
import { CamelotKeyMatcherService } from '../shared/services/camelot-key-matcher.service';
import { CamelotKey } from '../shared/models/camelot-key.model';
import { CamelotKeyMatcherResult } from '../shared/models/camelot-key-matcher-result.model';

@Component({
    selector: 'shitshup-camelot-wheel-tile',
    templateUrl: './camelot-wheel.component.html',
    styleUrls: [ './camelot-wheel.component.scss' ],
})
export class CamelotWheelComponent {

    private readonly MAX_REPITCH: number = 3;
    private readonly MAX_MATCH_RESULTS: number = 3;

    activeKeys: CamelotKeyPair = {};

    matches: CamelotKeyMatcherResult[] = [];
    perfectMatches: CamelotKeyMatcherResult[] = [];
    imperfectMatches: CamelotKeyMatcherResult[] = [];

    constructor(private readonly camelotKeyMatcher: CamelotKeyMatcherService) {
    }

    onActivate(section: any): void {
        if (isNullOrUndefined(this.activeKeys.first)) {
            this.activeKeys.first = new CamelotKey(section);
        } else {
            this.activeKeys.second = new CamelotKey(section);

            this.buildMatches(this.activeKeys);
        }
    }

    onDeactivate(): void {
        this.activeKeys.first = undefined;
        this.activeKeys.second = undefined;

        this.deleteMatches();
    }

    buildMatches(activeKeys: CamelotKeyPair): void {
        this.matches = this.camelotKeyMatcher.match(activeKeys)
            .filter(match => match.totalShift !== 0)
            .sort((a, b) => {
                return a.totalShift - b.totalShift;
            });

        const perfectMatches = this.matches
            .filter(match => match.perfectMatch)
            .filter(match => match.camelotKeyShiftResultPair.first.shift <= this.MAX_REPITCH && match.camelotKeyShiftResultPair.second.shift <= this.MAX_REPITCH);
        const imperfectMatches = this.matches
            .filter(match => !match.perfectMatch)
            .filter(match => match.camelotKeyShiftResultPair.first.shift <= this.MAX_REPITCH && match.camelotKeyShiftResultPair.second.shift <= this.MAX_REPITCH);

        this.perfectMatches = perfectMatches.slice(0, this.MAX_MATCH_RESULTS);
        this.imperfectMatches = imperfectMatches.slice(0, this.MAX_MATCH_RESULTS);
    }

    deleteMatches(): void {
        this.matches = [];
        this.perfectMatches = [];
        this.imperfectMatches = [];
    }
}
