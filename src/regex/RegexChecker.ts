import { DataPair, PromisePair, RegexFunctions } from "./RegexFunctions";

export class RegexChecker {
    static async test(input: string): Promise<DataPair[]> {
        const results: PromisePair[] = [];

        for (const functionName in RegexFunctions) {
            if (RegexFunctions.hasOwnProperty(functionName)) {
                results.push(Promise.resolve(RegexFunctions[functionName](input)))
            }
        }
        return await Promise.all(results)
    }
}
