import { Injectable } from '@angular/core';
import { CamelotKeyPair } from '../models/camelot-key-pair.model';
import {
    CamelotKeyMatcherResult,
    CamelotKeyShiftResult,
    CamelotKeyShiftResultPair,
} from '../models/camelot-key-matcher-result.model';
import * as camelotWheel from 'camelot-wheel';
import { CamelotKey } from '../models/camelot-key.model';

@Injectable({
  providedIn: 'root'
})
export class CamelotKeyMatcherService {


    match(camelotKeyPairToMatch: CamelotKeyPair): CamelotKeyMatcherResult[] {
        const firstKeyToMatch = camelotKeyPairToMatch.first!;
        const secondKeyToMatch = camelotKeyPairToMatch.second!;

        if (this.isSameSection(firstKeyToMatch, secondKeyToMatch)) {
            return [ this.createIdentityResult(camelotKeyPairToMatch) ];
        } else if (firstKeyToMatch.mode === secondKeyToMatch.mode) {
            return this.matchSameMode(camelotKeyPairToMatch);
        } else {
            return this.matchDifferentMode(camelotKeyPairToMatch);
        }
    }

    private matchSameMode(camelotKeyPairToMatch: CamelotKeyPair): CamelotKeyMatcherResult[] {
        const firstKeyToMatch = camelotKeyPairToMatch.first!;
        const secondKeyToMatch = camelotKeyPairToMatch.second!;

        const result: CamelotKeyMatcherResult[] = [];

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 12; j++) {
                const shiftedFirstKey = this.shiftKey(i, firstKeyToMatch);
                const shiftedSecondKey = this.shiftKey(j, secondKeyToMatch);

                if (this.isNeighborOnSameMode(shiftedFirstKey, shiftedSecondKey)) {
                    const shiftedPair = <CamelotKeyPair>{
                        first: shiftedFirstKey,
                        second: shiftedSecondKey,
                    };

                    result.push(this.createResult(camelotKeyPairToMatch, shiftedPair));
                }
            }
        }

        return result;
    }

    private matchDifferentMode(camelotKeyPairToMatch: CamelotKeyPair): CamelotKeyMatcherResult[] {
        const firstKeyToMatch = camelotKeyPairToMatch.first!;
        const secondKeyToMatch = camelotKeyPairToMatch.second!;

        const result: CamelotKeyMatcherResult[] = [];

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 12; j++) {
                const shiftedFirstKey = this.shiftKey(i, firstKeyToMatch);
                const shiftedSecondKey = this.shiftKey(j, secondKeyToMatch);

                if (this.isNeighborOnDifferentMode(shiftedFirstKey, shiftedSecondKey)) {
                    const shiftedPair = <CamelotKeyPair>{
                        first: shiftedFirstKey,
                        second: shiftedSecondKey,
                    };

                    result.push(this.createResult(camelotKeyPairToMatch, shiftedPair));
                }
            }
        }

        return result;
    }

    private isNeighborOnSameMode(camelotKeyFirst: CamelotKey, camelotKeySecond: CamelotKey): boolean {
        const isNeighborHour = this.positionDifference(camelotKeyFirst, camelotKeySecond) <= 1;
        const isSameMode = camelotKeyFirst.mode === camelotKeySecond.mode;

        return isNeighborHour && isSameMode;
    }

    private isNeighborOnDifferentMode(camelotKeyFirst: CamelotKey, camelotKeySecond: CamelotKey): boolean {
        const isSameHour = this.positionDifference(camelotKeyFirst, camelotKeySecond) === 0;
        const isNeighborMode = camelotKeyFirst.mode !== camelotKeySecond.mode;

        return isSameHour && isNeighborMode;
    }

    private positionDifference(camelotKeyFirst: CamelotKey, camelotKeySecond: CamelotKey): number {
        const firstPosition = camelotKeyFirst.camelotPosition;
        const secondPosition = camelotKeySecond.camelotPosition;

        if ((firstPosition === 12 && secondPosition === 1) || (firstPosition === 1 && secondPosition === 12)) {
            return 1;
        }

        return Math.abs(firstPosition - secondPosition);
    }

    private pitchDifference(camelotKeyFirst: CamelotKey, camelotKeySecond: CamelotKey): number {
        const fullInfoFirstKey = camelotWheel.getKey(camelotKeyFirst);
        const fullInfoSecondKey = camelotWheel.getKey(camelotKeySecond);

        const firstPitch = fullInfoFirstKey.pitchClass + 1;
        const secondPitch = fullInfoSecondKey.pitchClass + 1;

        if ((firstPitch === 12 && secondPitch === 1) || (firstPitch === 1 && secondPitch === 12)) {
            return 1;
        }

        return Math.abs(firstPitch - secondPitch);
    }

    private isSameSection(camelotKeyFirst: CamelotKey, camelotKeySecond: CamelotKey): boolean {
        return camelotKeyFirst.mode === camelotKeySecond.mode && camelotKeyFirst.camelotPosition === camelotKeySecond.camelotPosition;
    }

    private shiftKey(shift: number, camelotKey: CamelotKey): CamelotKey {
        const shiftedPosition = (camelotKey.camelotPosition + shift) % 12;


        return <CamelotKey>{
            camelotPosition: shiftedPosition === 0
                ? 12
                : shiftedPosition,
            mode: camelotKey.mode,
        };
    }

    createIdentityResult(originPair: CamelotKeyPair): CamelotKeyMatcherResult {
        const firstCamelotKeyOriginalResult = new CamelotKeyShiftResult(
            0,
            originPair.first!,
        );
        const secondCamelotKeyOriginalResult = new CamelotKeyShiftResult(
            0,
            originPair.second!,
        );

        const camelotKeyShiftResultPair = new CamelotKeyShiftResultPair(
            firstCamelotKeyOriginalResult,
            secondCamelotKeyOriginalResult,
        );

        return new CamelotKeyMatcherResult(0, camelotKeyShiftResultPair, true);
    }

    private createResult(originPair: CamelotKeyPair, shiftedPair: CamelotKeyPair): CamelotKeyMatcherResult {
        const shiftBetweenFirsts = this.pitchDifference(originPair.first!, shiftedPair.first!);
        const shiftBetweenSeconds = this.pitchDifference(originPair.second!, shiftedPair.second!);
        const totalShift = shiftBetweenFirsts + shiftBetweenSeconds;
        const perfectMatch = this.isSameSection(shiftedPair.first!, shiftedPair.second!);

        const firstCamelotKeyShiftResult = new CamelotKeyShiftResult(
            shiftBetweenFirsts,
            shiftedPair.first!,
        );
        const secondCamelotKeyShiftResult = new CamelotKeyShiftResult(
            shiftBetweenSeconds,
            shiftedPair.second!,
        );

        const camelotKeyShiftResultPair = new CamelotKeyShiftResultPair(
            firstCamelotKeyShiftResult,
            secondCamelotKeyShiftResult,
        );

        return new CamelotKeyMatcherResult(totalShift, camelotKeyShiftResultPair, perfectMatch);
    }
}
