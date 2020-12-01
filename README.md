# @dtinth/encrypted

```js
const encrypted = require('@dtinth/encrypted')()

const decodedSecret = encrypted(
  'BarWjHyYfhOowXguGxMQiUrMpDO2xwgM./5Ibctetf70d8rfZvESJbBUfFJ9D78gODjJqxXPFAfPbpfc='
)
```

The encryption secret is `process.env.ENCRYPTION_SECRET`.

Generating secret:
