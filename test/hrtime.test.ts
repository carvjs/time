import { hrtime } from '../src'

test('hrtime', () => {
  const time = hrtime()

  expect(Array.isArray(time)).toBe(true)
  expect(time).toHaveLength(2)
})
