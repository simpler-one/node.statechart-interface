import { AutoIndex } from './auto-index';

describe('AutoIndex', () => {
    it('None', () => {
        // Given
        const autoIndex = AutoIndex.None;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe(undefined);
    });

    it('Number', () => {
        // Given
        const autoIndex = AutoIndex.Number;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('(1)');
    });

    it('NumberDot', () => {
        // Given
        const autoIndex = AutoIndex.NumberDot;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('1.');
    });

    it('NumberColon', () => {
        // Given
        const autoIndex = AutoIndex.NumberColon;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('1:');
    });

    it('Alpha', () => {
        // Given
        const autoIndex = AutoIndex.Alpha;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('a');
    });

    it('NumIndex', () => {
        // Given
        const autoIndex = AutoIndex.NumIndex;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('(1.1)');
    });

    it('AlphaNumIndex', () => {
        // Given
        const autoIndex = AutoIndex.AlphaNumIndex;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('(a1)');
    });

    it('LargeAlphaNumIndex', () => {
        // Given
        const autoIndex = AutoIndex.LargeAlphaNumIndex;
        // When
        const result = autoIndex([0, 0], 1);
        // Then
        expect(result).toBe('(A1)');
    });
});
