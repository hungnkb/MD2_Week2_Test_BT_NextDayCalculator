import { NextDayCalculator } from '../NextDayCalculator'
import { describe, expect, test } from '@jest/globals'



describe('Next Day Calculator Function', () => {
    test('Next Day Calculator Function'), () => {
        let expectedDay = [2,1,2018]
        expect(NextDayCalculator.nextDayCalculate(1,1,2018)).toEqual(expectedDay)
    }

})