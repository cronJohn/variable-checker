# About
- Check whether a variable name is valid in a variety of programming languages

---
# How to add your language?
## Prerequisite
- There should be 2 names you need to remember for your language
    1. An all caps version (langCaps)
    2. A case insensitive version (langI)
- These 2 names will be used in different parts of the app and different usages must be the same
## Add your regex test
- Go to `src/regex/RegexFunctions.ts`
- Add a key value pair at the end that follows the FunctionCollection interface
    - The key is your language (langCaps)
    - The value is an async function that tests an input parameter
        - You define the regex for what constitues a valid variable name in your language
        - Test the regex on the input
        - Return a Promise resolving to an array of `[regex.test(input), langI]`

## Test your regex
- Go to `src/regex/RegexFunctions.test.ts`
- Add a `Tester.test(a,b,c)` statement. It takes 3 arguments:
    - a: string | langI
    - b: string[] | an array of valid variable names
    - c: string[] | an array of invalid variable names
- Go to `src/regex/RegexChecker.test.ts`
    - Add an array literal to the end of `expectedArr` which follows the format:
        - [isFooValid, langI]
- Run the test suite using `npm run test`

## Add an icon
> **Note:** This project uses iconify's Skill Icons set. If you want an icon for your language, please create one [here](https://github.com/tandpfun/skill-icons). If one already exists, then continue ahead...
- Go to `src/components/language/index.tsx`
- Add a key-value pair to langToIconMapping
    - The key is langI
    - The value is the name of the icon in the skill icon set on iconify. It's usually the part after `*skill-icons:`

## Next steps
- That should be it!
- You can fork the repo and create a pull request doing the above actions. I will then probably merge it into the main repo

