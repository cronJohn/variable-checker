import { RegexFunctions } from './RegexFunctions';

class Tester {
    static test(lang: string, validNames: string[], invalidNames: string[]){
        describe(`Check ${lang} regex checker`, () => {
            it('should return [true, ...] for valid variable names', async () => {

                for (const variableName of validNames) {
                    const result = await RegexFunctions[lang.toUpperCase()](variableName)
                    expect(result[0]).toEqual(true);
                }
            })

            it('should return [false, ...] for invalid variable names', async () => {

                for (const variableName of invalidNames) {
                    const result = await RegexFunctions[lang.toUpperCase()](variableName)
                    expect(result[0]).toEqual(false);
                }
            })
        })
    }
}

Tester.test("JavaScript", 
    ["foo", "_bar", "$baz", "baz1"],
    ["🚀", "if", "foo bar"]
);

Tester.test("Go",
    ["foo", "_bar", "baz1"],
    ["🚀","if","$baz","foo bar"]
);

Tester.test("Python",
    ["foo", "_bar", "baz1"],
    ["🚀", "if", "$baz", "foo bar"]
);


Tester.test("Rust",
    ["foo", "_bar", "baz1"],
    ["🚀", "if", "$baz", "foo bar"]
);

Tester.test("Java",
    ["foo", "_bar", "baz1", "$test"],
    ["🚀", "if", "foo bar"]
);

Tester.test("C#",
    ["foo", "_bar", "baz1", "@if"],
    ["🚀", "if", "$foo", "foo bar"]
);

Tester.test("C++",
    ["foo", "_bar", "baz1"],
    ["🚀", "if", "$foo", "foo bar"]
);

Tester.test("Swift",
    ["foo", "🚀", "_bar", "baz1"],
    ["if", "$foo", "foo bar"]
);

Tester.test("Kotlin",
    ["foo", "_bar", "$bar", "baz1"],
    ["🚀", "if", "foo bar"]
);

Tester.test("Ruby",
    ["foo", "_bar", "baz1", "$global", "@instance", "@@class"],
    ["🚀", "if", "foo bar"]
);

Tester.test("Perl",
    ["foo", "_bar", "baz1", "baz$", "$Scalar", "@Array", "%Hash"],
    ["🚀", "if", "foo bar"]
);

