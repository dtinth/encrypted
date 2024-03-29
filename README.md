# @dtinth/encrypted

Simple library for encrypted secrets with pre-shared key powered by
TweetNaCl.js. It helps you store keys directly inside source code in encrypted
form.

## Example

Use as a tagged template literal:

```js
const encrypted = require('@dtinth/encrypted')()

const accessKeyId = encrypted`H7WwoocLJnbDgKk1+5vH47JvLp49FQZn.0KlZf2igrh8
hzoKG9zGv1t9rmrUZ4PYftuOy3lV96ygthjpFBlQ=`
const secretAccessKey = encrypted`pg2ozvrK9nun1TGuycfCAV50qgjdgc3Y.WSweWkt
y/OSqppfOcbTEGn0jmdoHy+6fCkV0cnij9S7UVC0rihIygjFZ5S8TBYd8+Rl8LEKLDDuSFA==`
```

Use as a function:

```js
const encrypted = require('@dtinth/encrypted')()

const accessKeyId = encrypted(`
  H7WwoocLJnbDgKk1+5vH47JvLp49FQZn.0KlZf2igrh8hzoKG9zGv1t9rmrUZ4PYftuOy3lV
  96ygthjpFBlQ=
`)
const secretAccessKey = encrypted(`
  pg2ozvrK9nun1TGuycfCAV50qgjdgc3Y.WSweWkty/OSqppfOcbTEGn0jmdoHy+6fCkV0cni
  j9S7UVC0rihIygjFZ5S8TBYd8+Rl8LEKLDDuSFA==
`)
```

The encryption keys will be loaded from the environment variable
`ENCRYPTION_SECRET`.

## Documentation

For more information, check out the
[project documention page](https://docs.dt.in.th/encrypted/index.html).

[![Project documention page](https://ss.dt.in.th/api/screenshots/docs-encrypted__index.png)](https://docs.dt.in.th/encrypted/index.html)

## API reference

<https://apiref.page/package/@dtinth/encrypted>

[![API reference screenshot](https://ss.dt.in.th/api/screenshots/apiref-dtinth-encrypted.png)](https://apiref.page/package/@dtinth/encrypted)
