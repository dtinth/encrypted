#!/usr/bin/env node
const bufs = []
require('dotenv').config()
const { encrypt } = require('./')()
process.stdin.on('data', (b) => {
  bufs.push(b)
})
process.stdin.on('end', () => {
  let thing
  const str = Buffer.concat(bufs).toString()
  try {
    thing = JSON.parse(str)
    console.error('* Encrypting JSON object')
  } catch (error) {
    thing = str
    console.error('* Encrypting string')
  }
  const text = encrypt(thing)
  const prefix = 'encrypted`'
  const lineLength = 72
  let wrapLength = 72 - prefix.length
  let i = 0
  const out = [prefix]
  while (i < text.length) {
    if (i > 0) out.push('\n')
    const chunk = text.substr(i, wrapLength)
    out.push(chunk)
    i += wrapLength
    wrapLength = lineLength
  }
  out.push('`')
  console.log(out.join(''))
})
