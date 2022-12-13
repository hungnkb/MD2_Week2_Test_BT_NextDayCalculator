import { NextDayCalculator } from '../NextDayCalculator'
import { describe, expect, test } from '@jest/globals'



describe('Next Day Calculator Function', () => {
    test('Next Day Calculator Function'), () => {
        let a =1;
        let b =1;
        let c =1;
        expect(NextDayCalculator.nextDayCalculate(a,b,c)).toEqual(3,2,1)
    }
    
})