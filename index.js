// @ts-check
const nacl = require('tweetnacl')

/**
 * @param {string} secret
 */
function Encrypted(secret = getDefaultEncryptionSecret()) {
  const secretBuffer = Buffer.from(secret, 'base64')

  /**
   * @param {string | [string]} ciphertext
   */
  function decrypt(ciphertext) {
    if (Array.isArray(ciphertext)) {
      if (ciphertext.length > 1) {
        throw new Error('Interpolations are not supported in ciphertext')
      }
      ciphertext = ciphertext[0]
    }
    const parts = ciphertext.split('.')
    return JSON.parse(
      Buffer.from(
        nacl.secretbox.open(
          Buffer.from(parts[1], 'base64'),
          Buffer.from(parts[0], 'base64'),
          secretBuffer
        )
      ).toString()
    )
  }

  /**
   * @param {any} thing
   */
  function encrypt(thing) {
    const nonce = nacl.randomBytes(nacl.secretbox.nonceLength)
    return (
      Buffer.from(nonce).toString('base64') +
      '.' +
      Buffer.from(
        nacl.secretbox(Buffer.from(JSON.stringify(thing)), nonce, secretBuffer)
      ).toString('base64')
    )
  }

  return Object.assign(decrypt, { decrypt, encrypt })
}

function getDefaultEncryptionSecret(envName = 'ENCRYPTION_SECRET') {
  const secret = process.env[envName]
  if (!secret) {
    throw new Error(`Missing environment variable ${envName}`)
  }
  return secret
}

module.exports = Encrypted
