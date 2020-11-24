# ts-8-bit

Using TypeScript's Type System to do 8-bit Arithmetic [Demo](https://www.typescriptlang.org/play?#code/PTAEFpK6dv4YpcBQJQc6A+rv2d8tM9iTiCCM0xiAfXE7MfO4l0AHTLbYwApsASlB8aZTL1GhBjfNjaCRDVqMY5eBcROl9OpffIB8OUAB55C0AHICnKbjraJUwrmVZFw6Z7UfNoM48Vip4tFiGzMEAdLjADHSGTug6qWnpZEEAqgDOAJYAdgDmoAAuABYApqAAKgCeAA6VAMoAxgBOeQ2lZY3VOXU5pZUAtqAAZgD27aAAHOAARnk9AIadFSOVpXmtNEEZmPkFrQA2K3kzAEwADDfSALIAkjV7KRLlpaUNOQBcIEXLcoAVwW0VakxGwCOp3O7QAXgAPWYARmApRy4HmSx6B1xGX2eMJWHEyFJZPJFKgKHEAEF1uVNttdqU+qAaaAALygAByQJGZjZABNBeZQAAhOrDMzIy4AZiMABpxZLKmZLpcTJrQOh+DLZaAANQYdUiLnIgAsAFYUCymuLOTy+QLmiDRRKpeaAOyKjDu1UyrUmHVejDgDAy02gWXW23VADCDt5-NA9yBJzdKrMsuRPvNWtSOuzGAAVJhzZGZebqegAKIARyBKxOyzqNtZABEHfWM1LkdcfX7pf3QCYC2A+5yOWbrg7Su0gZU23aaw6ADI9AWDvsDzPbkdpdATgUTjBc8ZNnKL2OgABiDoA4hvlVKbjve8PRzp0HcTCfZ-Or1Ze81ylZ9-X7JUtw-A9xxnMxp1PMoAKXaoAAkH1AwdX0g3doLHUAfwQ-8F2rMAxWWAB3PJLxQ0BHkTJ1QAAJRycoe1VAA2PMlXlfd8P4LiMCMUdZUjWZaIAKQY5NV1Y9i1XlJUNT4r8wH4OUMDMAUCMjABOS5aIAaWkgUAHkZnk2VFLAsxvX3T9C31HxQE9SNZV0wJr1XEy2QKEVN13DUcKlS1A0wHUZQwAAyTBLUjKtr3uHyAA1pnk9U339T17P3HV1QwAA9cNXIdT1aO5HzuUmJ8sMtXj83wgBtZElWuJUWtADquva9qAF1tTAS46pQIlRqatrOtaqbQAm2bWv679SIgSkVtWlbxHI0oSTWnbdoQalKgRBpph6a9NodGc2GRJa9tuu7wHEe8VmGHJtvu971pQQ7jvaU7WU2qrSjMGpQEO4Y-JycVlhMDkRswEGwcqCGZtAAB+TrQB+OGMARhFwcFSHkTRlGsawApKgAN0qdoDqOk7ejtTaaT84HQbxpGCdARrNsg5Zeph7HajZ-HIca2b+vRmdSfh4WOdFibkQlknBdxkWuY664lallXZeR5q+uJonpYwcmqZpr66d+hnqk28zWcRvWeah0p+c5HWHc5sX5uJ7WsFVuWuYVpWjfd9m9Y14PMdDtX9c6yPjdAU3qdpn6-sZ5ZUvae2w89p3Ntd2G-d1z3xZ9qOi49+WDfRkOK5z0WI8N8uZcr9Xq+VsnKeTt6Pt70lxEeYZ2me6Ye778f4BT+nr0ePzDodABrSo6kmcY6KHkeae+6fWQABXaSns7VpeV7Xwfqc3mH14v0ppkamperF3qLdT62eTBo+A5P1fr+H2-2ivufP+d8H7NWftvK2M8N7-wdAAb0FtcH4XNPR9SVILZESCvYEV6kqagWBLiYI6rKHBmBBaykwZcJU5oSF4LLJg2USpLQ0MCFgS0mDzRKg4swwWHFMGWiVJ6bhWBPSYI4vNXBgQAC+N0J6yNQOgTaVEaLoDkao6AU9IGskBp-R2yxealH0YY52Ri858yvo1QWANqrAyfoqSxyxtE1DAXYrAVigZOMuPzBU9jSiOMasQlxmA3E2OoYE30DjrFOKYWE52fiuExOCU4wRdjn4vx3naZmgozCC3ZK3bmejjGFNMQYopBT87eNccXUWxSTFlLqSU4pz9zE+MyWYRqNIn6QSfl4lpLN2lgK6YrHprjlitP6Z4rpnjhlBNGX0jpxCunEOmeE0oYyOnUK6dQ5Zzs1mNSYV0ph2ymZzMalwrpXCjmzKyf0wRXTBE9NSRAtO1Q7Y5KqVzGppSGn1NqS7CpQT3n5O+cC35oLnZNIdBYkZpQ7b9M1l0zWlyYVZ36YrQZvUkWwo6RM8UjUpkJOWFi-xJCxTEsxSi9ZJLGpbIJcitpHT9m4sObSolZzcUXJZRSxqtzcX3JSRo55oBM7ZKwLk+uHyflfLBY0-5vpAWfIVZKxpKBmnQuFdzTpbJum0vVaStFWqhk6umG00lOLsUYqNSi0lCytVLMtSa6lJDKVIt1Xsp1bqXXGo1WyjpHLZXO1dTyjpfLvGPMtoKli5QdG5yVbGkFXySH0VbrPQUh0BZYCTeKmc6MQZIMjW0px+qPEkKcTapxGzahuqVE4tlSSSHwtAPvQ+jxhICrfrJKN-tdHxsVT2+pib3kprTW7DN7zs1CyQR2tpE0nENsLSWvFC6y2OurVWytFylRNopmYFtRhqRjzURPcQ9ZGzNhZAew9fc23XnrCKzAYqY69ulXGnBlj5VxufX2l2KqHQPoDmKYmc4FyYwmBeRcaTNF2nXKZBod6MB-u7Z+pD4L-UAbyU+qVmHymC0zWrIdCIf1cgQ5zAD6NzwnEvM3DA-THhUto-1PJpd0bQdgzSSCm6D7bt3VRrmHTaNdPo4CrqSsWNmDY+KDjzbhI8Zo3RjFQnvZkbAzJvjcmGPiqwYrQDAEePkZohBwV644NsnfV+5DMq33oY-Vhl93ir6ifE2KARe6DPtqlG8qzZmbNftfZUzz5nrPYfMbexzPojOhfUzHIDlQlR6cqEraLMmQuQTC0DCLgK4tKmiwlnTSDBZxevUBGFsGPMaYw+V-tqHTMBa89h0dya54EavsRyGpHQMUeqAnWTAn5OMcU6AR8MGxPscbZxnd0muuqZ65FgOsctPo0G6xkbW7xsmEm41fjuLBN9bjsTOLKmNtqYUzNHLwGE4Fdc9eR8xmWsStq4FyrlmysPfu8C19V9FvDYky5FzTy36PlVKVx9L2au+YBf57zoO7OQuS+KH0130t5Oi7FsDp3OuC0arDsU8O0spZm3rTLSEFxo5A-lsDMjL2yNpMKZYeRJgFAvZT96hW7Q3jTCcGkwpqbRuqS+9NLcNNzRO8TLBmseNds9hrfrscxcJwl1XSawv0Yy-6nL47jdldB3F4CoX8227C7V3kqXu3NcG0N4LnqJvA5m+jrN7qVu5uq8Fknc2f3ryc8FENoHs2Kuvf0WDuVEPfefoD3RQdjX-WmXeZtQjt52ce+51C+9h2ev+twwHcdUshSe6W99lbLb2p7v5o1UyYbX7u+FDd6rkOa91fB89v3te+ax6T-B4UQ3HPTQgjk9vuenOK+76K3vX3++UJmjEj3HeRsMPH-6yffeqGtQn8PzvoB+Gz57znkfnCl9z5XyNlBG-UkqKZ0e9ALoFhzhWK0bY9PGen9uiz6obOTgnAv1fm-xr5d3d+QXW3eshcxdTcDd-9Jcu8lYVdtcdsNd9ctNzcY57cgDrcQC64Y5dcIDhMoCNNjc9dRcndUDZsFZ25NN8CBcEDLdcDMCE4Xcn9QAL8vdRVq9g9vNQ80MG8asQ809w9U0ERI9o9lhY8X838QQP9-42kckU8ttQ909kZM8QN6CF9RspNC8UBi9S9aCL8q8g8QcWCqttDG9e0IUuRW86CQQp9vtZoYkFDt8B8rCzDFCx9B9MBrDV8Z8nCMAXCRsOEN8sBPDvt193DTCFhzD+8xEfDnD7CbDD9u9j8wAH9x5xBUwThtgGgThWwT94iPpaCkiGD70mCdDDC9D2Cm9XtpDuDDpY8ZDOZx0AMkEcjc8PcR8fR89W1LtWQkitDijmDCins8NGtY96iR9MwII4d90MjMj7pxA4x6czYh5XpxiJjH9aJmg8g4RKgiZIVNZljVjKhLhEJGpohDiVi1iOpDjohjj1jn5rwLinJjCziLix97idjPFti1jzR9ini1iZ9PjKhiFXjKhLQPijidjvCfjqF-iOIgTzidj18fimF-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-PdmXcgA)

```typescript
import { Byte, Num, Add, Sub, Mul } from './ts-8-bit'

type A  = Byte<42>     // type A  = [0, 1, 0, 1, 0, 1, 0, 0]
type B  = Byte<33>     // type B  = [1, 0, 0, 0, 0, 1, 0, 0]

type T0 = Add<A, B>    // type T0 = [1, 1, 0, 1, 0, 0, 1, 0]
type T1 = Sub<A, B>    // type T1 = [1, 0, 0, 1, 0, 0, 0, 0]
type T2 = Mul<A, 3>    // type T2 = [0, 1, 1, 1, 1, 1, 1, 0]

type R0 = Num<T0>      // type R0 = 75
type R1 = Num<T1>      // type R1 = 9
type R2 = Num<T2>      // type R2 = 126
```

## Overview

ts-8-bit is an experimental library that does 8-bit arithmetic on TypeScript's type system. It does so by applying bitwise operations on tuples of length 8 (1 byte) and leverages TypeScript conditional and type inference to infer the result. This project was written as a exercise in TypeScript and is offered as is for anyone who may find it of use.

Requires TypeScript 4.1.2 and above.

License MIT

### Usage

Operations are carried out on 8-component tuples representing a byte. The following creates two tuples, `A = 1` and `B = 2` expressed in binary and adds them together. The result of `Add<A, B>` will be `C = 3` also expressed in binary.

```typescript
import { Add } from './ts-8-bit'

type A = [1, 0, 0, 0, 0, 0, 0, 0]
type B = [0, 1, 0, 0, 0, 0, 0, 0]
type C = Add<A, B> // type C = [1, 1, 0, 0, 0, 0, 0, 0]
```

### Convert

You can convert between `number` and `binary` representations of the byte using the `Byte<T>` and `Num<T>` types. The following is the same as the example above using conversions.

```typescript
import { Byte, Num, Add } from './ts-8-bit'

type A = Byte<1>        // type A = [1, 0, 0, 0, 0, 0, 0, 0]
type B = Byte<2>        // type B = [0, 1, 0, 0, 0, 0, 0, 0]
type C = Add<A, B>      // type C = [1, 1, 0, 0, 0, 0, 0, 0]
type D = Num<C>         // type D = 3
```

### Operations

The following operations are currently implemented for this library.

```typescript
import { Byte, Num, Add, Sub, Mul, Eq, Lt, Gt, Lte, Gte, Lsh, Rsh, And, Xor, Or, Not } from './ts-8-bit'

type A   = Byte<100>
type B   = Byte<50>
type C   = Byte<33>

// Arithmetic
type T0 = Add<A, B>   // A + B
type T1 = Sub<A, B>   // A - B
type T2 = Mul<C, 3>   // C * 3

// Equality
type T3 = Eq  <A, B>  // A === B
type T4 = Lt  <A, B>  // A < B
type T5 = Gt  <A, B>  // A > B
type T6 = Lte <A, B>  // A <= B
type T7 = Gte <A, B>  // A >= B

// Bitwise
type T8  = Lsh <A, 1>  // A << 1
type T9  = Rsh <A, 2>  // A >> 2
type T10 = And <A, B>  // A & B
type T11 = Xor <A, B>  // A ^ B
type T12 = Or  <A, B>  // A | B
type T13 = Not <A>     // !A
```
