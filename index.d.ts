export = Encrypted;
/**
 * @param {string} secret
 */
declare function Encrypted(secret?: string): (ciphertext: string) => any;
