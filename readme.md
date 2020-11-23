# ts-8-bit

Using TypeScript's Type System to do 8-bit Arithmetic

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
import { Byte, Num, Add, Sub, Mul, Lsh, Rsh, And, Xor, Or, Not } from './ts-8-bit'

type A   = Byte<100>
type B   = Byte<50>
type C   = Byte<33>

type T0 = Add<A, B>  // A + B
type T1 = Sub<A, B>  // A - B
type T2 = Mul<C, 3>  // C * 3
type T3 = Lsh<A, 1>  // A << 1
type T4 = Rsh<A, 2>  // A >> 2
type T5 = And<A, B>  // A & B
type T6 = Xor<A, B>  // A ^ B
type T7 = Or<A, B>   // A | B
type T8 = Not<A>     // !A
```
