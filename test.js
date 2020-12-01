const assert = require('assert')

{
  const encrypted = require('./')()
  assert.deepStrictEqual(
    encrypted(
      'BarWjHyYfhOowXguGxMQiUrMpDO2xwgM./5Ibctetf70d8rfZvESJbBUfFJ9D78gODjJqxXPFAfPbpfc='
    ),
    { meow: 'It works' }
  )
}

{
  const encrypted = require('./')(
    'vCwvyPFOdNlQpEdMIAD+xFguITij+eMcXZTfpwCMM70='
  )
  const thing = [{ x: [{}] }]
  assert.deepStrictEqual(encrypted(encrypted.encrypt(thing) + '   '), thing)
}
