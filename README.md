# @dtinth/encrypted

Simple library for encrypted secrets with shared key powered by TweetNaCl.js.

**Use cases:**

- Secrets are long (e.g. private keys).
- Don't want to add each secret individually in e.g. Heroku, Vercel or GitHub
  Actions, but rather store a single secret that encrypts all the other secrets.

**Note:** This module trades security for convenience. Please exercise caution
when using this module.

```js
const encrypted = require('@dtinth/encrypted')()

const decodedSecret = encrypted(
  'BarWjHyYfhOowXguGxMQiUrMpDO2xwgM./5Ibctetf70d8rfZvESJbBUfFJ9D78gODjJqxXPFAfPbpfc='
)
```

The encryption secret is by default `process.env.ENCRYPTION_SECRET`.

**Generating secret programmatically:**

```js
const { encrypt } = require('@dtinth/encrypted')()
encrypt({ thing: 'to encrypt' })
```

**Generating secret with a CLI:** The provided CLI script generates a JavaScript
code that is ready to be copied-and-pasted.

**Note:** The CLI is aware of `.env` files.

```sh
# If input is valid JSON, then it encrypts the input as JSON object.
# If you want to encrypt it as raw string, convert the input to JSON string first.
$ echo '{"thing":"to encrypt"}' | npx -p @dtinth/encrypted encrypt-json
encrypted(`
4aFTSND4ovcfmZT0KBlV7sEDBcN6jYoB.99RSnND3oxjBE1zzGn4fOazD5ydBfhqFV+UZDXz
cijbApO5W3JA=
`)

# If input is not valid JSON, then it encrypts the input as string.
$ echo 'string' | npx -p @dtinth/encrypted encrypt-json
encrypted(`
pd7/d01Xvm4K3Yy8GE/NLPbBpsq6k0+f.paKyrwMXncv7UzH9TCDiRvSEpSVf57CjftA=
`)
```
