import { it, expect, describe } from 'vitest';
import { formatMoney } from './money.js';

describe("FormatMoney function", () => {
    it('Formats 1999 as $19.99', () => {
        expect(formatMoney(1999)).toBe('$19.99');
    });

    it('Displays 2 decimals', () => {
        expect(formatMoney(1990)).toBe('$19.90');
        expect(formatMoney(10000)).toBe('$100.00');
    });
})
