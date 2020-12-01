// @ts-check
const nacl = require('tweetnacl')

/**
 * @param {string} secret 
 */
function Encrypted(secret = getDefaultEncryptionSecret()) {
  const secretBuffer = Buffer.from(secret, 'base64')
  /**
   * @param {string} ciphertext 
   */
  function decrypt(ciphertext) {
    const parts = ciphertext.split('.')
    return JSON.parse(Buffer.from(nacl.secretbox.open(
      Buffer.from(parts[1], 'base64'),
      Buffer.from(parts[0], 'base64'),
      secretBuffer
    )).toString())
  }
  return decrypt
}

function getDefaultEncryptionSecret(envName = 'ENCRYPTION_SECRET') {
  const secret = process.env[envName]
  if (!secret) {
    throw new Error(`Missing environment variable ${envName}`)
  }
  return secret
}

module.exports = Encrypted