const app = require('C:/Ada_school/exercices_individuels/exercice10/script')

describe('comparer des mots', () => {
    it('si les deux mots sont les mêmes', () => {
        expect(app.tryWord('aaa','aaa')).toBe(true)
    })
    it('si les deux mots ne sont pas les mêmes', () => {
        expect(app.tryWord('a','b')).toEqual({"missplaced": [], "notInWord": ["a"], "wellPlaced": []})
    })
})