#!/usr/bin/env node

const red = require('@f0c1s/color-red')
const yellow = require('@f0c1s/color-yellow')
const blue = require('@f0c1s/color-blue')
const green = require('@f0c1s/color-green')
const {rot13, rot47, rot13n, rotations} = require('@f0c1s/security-rot')

const {execSync} = require('child_process')

const input = process.argv[2]

const fns = [rot13, rot47]

console.log(blue('Start'))

fns.map(fn => [input, fn.name, fn(input)])
    .map(([a, b, c]) => [green(a), yellow(b), red(c)])
    .forEach(([a, b, c]) => console.log(a, b, c))

rotations(input)
    .map(({i, rot}) => [input, `rot13n(${i})`, rot])
    .map(([a, b, c]) => [green(a), yellow(b), red(c)])
    .forEach(([a, b, c]) => console.log(a, b, c))

console.log(blue('End'))
