#!/usr/bin/env node
const bufs = []
require('dotenv').config()
const { encrypt } = require('./')()
process.stdin.on('data', (b) => {
  bufs.push(b)
})
process.stdin.on('end', () => {
  const thing = JSON.parse(Buffer.concat(bufs).toString())
  const text = encrypt(thing)
  const prefix = 'encrypted(`'
  const wrapLength = 72
  let remainingSize = wrapLength - prefix.length
  let i = 0
  const out = [prefix]
  while (i < text.length) {
    if (i > 0) out.push('\n')
    const chunk = text.substr(i, remainingSize)
    out.push(chunk)
    i += remainingSize
    remainingSize = wrapLength
  }
  out.push('`)')
  console.log(out.join(''))
})
