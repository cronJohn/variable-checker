import { RegexFunctions } from './RegexFunctions'; // Import the class to be tested

describe('Check JavaScript regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            '$baz',
            'baz1'
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['JS_ES5_1'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['JS_ES5_1'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Go regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1'
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['GO'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            '$baz',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['GO'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Python regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1'
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['PYTHON'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            '$baz',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['PYTHON'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Rust regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1'
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['RUST'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            '$baz',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['RUST'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Java regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1',
            '$test'
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['JAVA'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['JAVA'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check C# regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1',
            '@if'
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['CS'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            '$foo',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['CS'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check C++ regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['CPP'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            '$foo',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['CPP'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Swift regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '🚀',
            '_bar',
            'baz1',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['SWIFT'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            'if',
            '$foo',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['SWIFT'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Kotlin regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            '$bar',
            'baz1',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['KOTLIN'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['KOTLIN'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Ruby regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1',
            '$global',
            '@instance',
            '@@class',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['RUBY'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['RUBY'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})

describe('Check Perl regex checker', () => {
    it('should return [true, ...] for valid variable names', async () => {
        const validVariableNames = [
            'foo',
            '_bar',
            'baz1',
            'baz$',
            '$Scalar',
            '@Array',
            '%Hash',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['PERL'](variableName)
            expect(result[0]).toEqual(true);
        }
    })

    it('should return [false, ...] for invalid variable names', async () => {
        const validVariableNames = [
            '🚀',
            'if',
            'foo bar',
        ];

        for (const variableName of validVariableNames) {
            const result = await RegexFunctions['PERL'](variableName)
            expect(result[0]).toEqual(false);
        }
    })
})
