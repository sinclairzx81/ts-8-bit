
import { Byte, Num, Add, Sub, Mul, Not, And, Or, Xor, Lsh, Rsh } from './ts-8-bit'

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
type T7 = Lsh   <A, 1>   // Shift <<
type T8 = Rsh   <A, 2>   // Shift >>

