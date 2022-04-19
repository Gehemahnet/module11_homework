const countDown = require('./11.2')

// Юнит тесты для проверки функции
describe('countDown simple check', () => {
  it('countDown check', () => {
    expect(countDown(3)).toStrictEqual([3, 2, 1]);
  }),
  it('countDown check', () => {
    expect(countDown(4)).toStrictEqual([4, 3, 2, 1])
  }),
  it('countDown check', () => {
    expect(countDown(0)).toStrictEqual(3)
  })
});

describe('countDown cornerCase check', () => {
  it('countDown cornerCase check',() => {
    expect(countDown('this is a string')).toStrictEqual(0)
  })
  it('countDown cornerCase check',() => {
    expect(countDown(undefined)).toBe(null)
  })
})
// Используем строку и undefined вместо числа и ожидаем любую ошибку от программы