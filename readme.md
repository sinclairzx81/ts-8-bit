# ts-8bit

Does 8bit operations on TypeScript's type system

```typescript
import { Byte, Num, Add, Sub, Mul } from './ts-8bit'

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

ts-8bit is an experimental TypeScript library that performs 8-bit calculations on the TypeScript type system. It does so by applying bitwise ops on TypeScript tuples of length 8 (8-bit) and uses TypeScript type inference to give the result. This project was written as a exercise in TypeScript and is offered as is for anyone who may find it of use.

Requires TypeScript 4.1.2 and above.

License MIT

### Usage

Operations are carried out on 8-component tuples representing a byte. The following creates two tuples, `A = 1` and `B = 2` expressed in binary and adds them together. The result of `Add<A, B>` will be `C = 3` also expressed in binary.

```typescript
import { Add } from './ts-8bit'

type A = [1, 0, 0, 0, 0, 0, 0, 0]
type B = [0, 1, 0, 0, 0, 0, 0, 0]
type C = Add<A, B> // type C = [1, 1, 0, 0, 0, 0, 0, 0]
```

### Convert

You can convert between `number` and `binary` representations of the byte using the `Byte<T>` and `Num<T>` types. The following is the same as the example above using conversions.

```typescript
import { Byte, Num, Add } from './ts-8bit'

type A = Byte<1>        // type A = [1, 0, 0, 0, 0, 0, 0, 0]
type B = Byte<2>        // type B = [0, 1, 0, 0, 0, 0, 0, 0]
type C = Add<A, B>      // type C = [1, 1, 0, 0, 0, 0, 0, 0]
type D = Num<C>         // type D = 3
```

### Operations

The following operations are currently implemented for this library.

```typescript
import { Byte, Num, Add, Sub, Mul, Not, And, Or, Xor, LShift, RShift } from './ts-8bit'

type A   = Byte<100>
type B   = Byte<50>
type C   = Byte<33>

type T0 = Add<A, B>      // A + B
type T1 = Sub<A, B>      // A - B
type T2 = Mul<C, 3>      // C * 3
type T3 = Not   <A>      // Bitwise Unary Not
type T4 = And   <A, B>   // Bitwise And
type T5 = Or    <A, B>   // Bitwise Or
type T6 = Xor   <A, B>   // Bitwise Xor
type T7 = LShift<A, 1>   // Shift <<
type T8 = RShift<A, 2>   // Shift >>
```
