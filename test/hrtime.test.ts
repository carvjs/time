import { hrtime } from '../src'

test('hrtime', () => {
  const time = hrtime()

  expect(time).toBeInstanceOf(Array)
})
