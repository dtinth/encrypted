const assert = require('assert')
const Encrypted = require('./')
const encrypted = Encrypted('XY0GiHz+mzZsNWP78v4fVdsoIFkfadNNh+kKuKRJUSI=')
assert.deepStrictEqual(
  encrypted('BarWjHyYfhOowXguGxMQiUrMpDO2xwgM./5Ibctetf70d8rfZvESJbBUfFJ9D78gODjJqxXPFAfPbpfc='),
  {meow: 'It works'}
)
