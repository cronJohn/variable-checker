import { RegexChecker } from './RegexChecker'; // Import the class to be tested

describe('Check RegexChecker', () => {
    it('should return a Promise array containing all regex checks', async () => {
        const input = 'foo';
        const expectedArr = [
            [ true, 'JavaScript' ],
            [ true, 'Go' ],
            [ true, 'Python' ],
            [ true, 'Rust' ],
            [ true, 'Java' ],
            [ true, 'C#' ],
            [ true, 'C++' ],
            [ true, 'Swift' ],
            [ true, 'Kotlin' ],
            [ true, 'Ruby Local' ],
            [ true, 'Perl Local' ]
        ]

        const actual = await RegexChecker.test(input)

        expect(actual).toStrictEqual(expectedArr)
    })
})
