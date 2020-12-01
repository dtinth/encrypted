# @dtinth/encrypted

```js
const encrypted = require('@dtinth/encrypted')()

const decodedSecret = encrypted(
  'BarWjHyYfhOowXguGxMQiUrMpDO2xwgM./5Ibctetf70d8rfZvESJbBUfFJ9D78gODjJqxXPFAfPbpfc='
)
```

The encryption secret is `process.env.ENCRYPTION_SECRET`.

Generating secret programmatically:

```js
const { encrypt } = require('@dtinth/encrypted')()
encrypt({ thing: 'to encrypt' })
```

Generating secret with a CLI:

```sh
# If input is valid JSON, then it encrypts the input as JSON object.
# If you want to encrypt it as raw string, convert the input to JSON string first.
echo '{"thing":"to encrypt"}' | npx -p @dtinth/encrypted encrypt-json

# If input is not valid JSON, then it encrypts the input as string.
echo 'string' | npx -p @dtinth/encrypted encrypt-json
```
