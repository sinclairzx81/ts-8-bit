// -------------------------------------------------------------------------
//       _______ _____       ___        _     _ _   
//      |__   __/ ____|     / _ \      | |   (_) |  
//         | | | (___ _____| (_) |_____| |__  _| |_ 
//         | |  \___ \______> _ <______| '_ \| | __|
//         | |  ____) |    | (_) |     | |_) | | |_ 
//         |_| |_____/      \___/      |_.__/|_|\__|
//                                             
//    Using the TypeScript type system for 8-bit arithmetic
//
//                    sinclair 2020 | MIT                                         
//                                        
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Bit
// -------------------------------------------------------------------------

export type Bit = 0 | 1

// -------------------------------------------------------------------------
// Gates
// -------------------------------------------------------------------------

export type BitNot<T extends Bit> =
    T extends 0 ? 1 :
    T extends 1 ? 0 :
    never

export type BitAnd<T extends [Bit, Bit]> =
    T extends [0, 0] ? 0 :
    T extends [0, 1] ? 0 :
    T extends [1, 0] ? 0 :
    T extends [1, 1] ? 1 :
    never

export type BitOr<T extends [Bit, Bit]> =
    T extends [0, 0] ? 0 :
    T extends [0, 1] ? 1 :
    T extends [1, 0] ? 1 :
    T extends [1, 1] ? 1 :
    never

export type BitXor<T extends [Bit, Bit]> =
    T extends [0, 0] ? 0 :
    T extends [0, 1] ? 1 :
    T extends [1, 0] ? 1 :
    T extends [1, 1] ? 0 :
    never

// -------------------------------------------------------------------------
// Iterator
// -------------------------------------------------------------------------

export type Index = keyof Iterator
export type Prev<T extends keyof Iterator> = Iterator[T][0]
export type Next<T extends keyof Iterator> = Iterator[T][1]
export type Iterator = {
    0: [7, 1], 
    1: [0, 2],   
    2: [1, 3],   
    3: [2, 4],   
    4: [3, 5],   
    5: [4, 6],   
    6: [5, 7],   
    7: [6, 0],   
}

// -------------------------------------------------------------------------
// Bitwise
// -------------------------------------------------------------------------

export type Not<T extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]> = [
    BitNot<T[0]>,
    BitNot<T[1]>,
    BitNot<T[2]>,
    BitNot<T[3]>,
    BitNot<T[4]>,
    BitNot<T[5]>,
    BitNot<T[6]>,
    BitNot<T[7]>,
]

export type And<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = [
    BitAnd<[A[0], B[0]]>,
    BitAnd<[A[1], B[1]]>,
    BitAnd<[A[2], B[2]]>,
    BitAnd<[A[3], B[3]]>,
    BitAnd<[A[4], B[4]]>,
    BitAnd<[A[5], B[5]]>,
    BitAnd<[A[6], B[6]]>,
    BitAnd<[A[7], B[7]]>,
]

export type Or<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = [
    BitOr<[A[0], B[0]]>,
    BitOr<[A[1], B[1]]>,
    BitOr<[A[2], B[2]]>,
    BitOr<[A[3], B[3]]>,
    BitOr<[A[4], B[4]]>,
    BitOr<[A[5], B[5]]>,
    BitOr<[A[6], B[6]]>,
    BitOr<[A[7], B[7]]>,
]

export type Xor<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = [
    BitXor<[B[0], A[0]]>,
    BitXor<[B[1], A[1]]>,
    BitXor<[B[2], A[2]]>,
    BitXor<[B[3], A[3]]>,
    BitXor<[B[4], A[4]]>,
    BitXor<[B[5], A[5]]>,
    BitXor<[B[6], A[6]]>,
    BitXor<[B[7], A[7]]>,
]

export type Rsh<T extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit], I extends Index> =
    I extends 0 ? T : Rsh<[T[1], T[2], T[3], T[4], T[5], T[6], T[7], 0], Prev<I>>

export type Lsh<T extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit], I extends Index> =
    I extends 0 ? T : Lsh<[0, T[0], T[1], T[2], T[3], T[4], T[5], T[6]], Prev<I>>


// -------------------------------------------------------------------------
// Equality
// -------------------------------------------------------------------------

export type Eq<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = A extends B ? true : false

export type LtOp<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    I extends Index
> = A extends B ? false :
    [A[I], B[I]] extends [0, 0] ? LtOp<A, B, Prev<I>> :
    [A[I], B[I]] extends [1, 1] ? LtOp<A, B, Prev<I>> :
    [A[I], B[I]] extends [1, 0] ? false :
    [A[I], B[I]] extends [0, 1] ? true :
    false

export type Lt<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
> = LtOp<A, B, 7>

export type Lte<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
> = [Eq<A, B>, Lt<A, B>] extends [true, false] ? true :
    [Eq<A, B>, Lt<A, B>] extends [false, true] ? true : 
    false

export type GtOp<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    I extends Index
> = A extends B ? false :
    [A[I], B[I]] extends [0, 0] ? GtOp<A, B, Prev<I>> :
    [A[I], B[I]] extends [1, 1] ? GtOp<A, B, Prev<I>> :
    [A[I], B[I]] extends [0, 1] ? false :
    [A[I], B[I]] extends [1, 0] ? true :
    false

export type Gt<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
> = GtOp<A, B, 7>

export type Gte<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
> = [Eq<A, B>, Gt<A, B>] extends [true, false] ? true :
    [Eq<A, B>, Gt<A, B>] extends [false, true] ? true : 
    false

// -------------------------------------------------------------------------
// Addition
// -------------------------------------------------------------------------

export type FullAdder<T extends [Bit, Bit, Bit]> =
    T extends [0, 0, 0] ? [0, 0] :
    T extends [1, 0, 0] ? [1, 0] :
    T extends [0, 1, 0] ? [1, 0] :
    T extends [1, 1, 0] ? [0, 1] :
    T extends [0, 0, 1] ? [1, 0] :
    T extends [1, 0, 1] ? [0, 1] :
    T extends [0, 1, 1] ? [0, 1] :
    T extends [1, 1, 1] ? [1, 1] :
    never

export type AddOp<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    I extends Index,
    O extends Bit
> = FullAdder<[
    A[I], B[I],
    I extends 0 ? 0 : AddOp<A, B, Prev<I>, 1>
]>[O]

export type Add<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = [
    AddOp<A, B, 0, 0>,
    AddOp<A, B, 1, 0>,
    AddOp<A, B, 2, 0>,
    AddOp<A, B, 3, 0>,
    AddOp<A, B, 4, 0>,
    AddOp<A, B, 5, 0>,
    AddOp<A, B, 6, 0>,
    AddOp<A, B, 7, 0>,
]

// -------------------------------------------------------------------------
// Subtraction
// -------------------------------------------------------------------------

export type FullSubtractor<T extends [Bit, Bit, Bit]> =
    T extends [0, 0, 0] ? [0, 0] :
    T extends [1, 0, 0] ? [1, 0] :
    T extends [0, 1, 0] ? [1, 1] :
    T extends [1, 1, 0] ? [0, 0] :
    T extends [0, 0, 1] ? [1, 1] :
    T extends [1, 0, 1] ? [0, 0] :
    T extends [0, 1, 1] ? [0, 1] :
    T extends [1, 1, 1] ? [1, 1] :
    never

export type SubOp<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    I extends Index,
    O extends Bit
> = FullSubtractor<[
    A[I], B[I],
    I extends 0 ? 0 : SubOp<A, B, Prev<I>, 1>
]>[O]

export type Sub<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = [
    SubOp<A, B, 0, 0>,
    SubOp<A, B, 1, 0>,
    SubOp<A, B, 2, 0>,
    SubOp<A, B, 3, 0>,
    SubOp<A, B, 4, 0>,
    SubOp<A, B, 5, 0>,
    SubOp<A, B, 6, 0>,
    SubOp<A, B, 7, 0>,
]

// -------------------------------------------------------------------------
// Multiply
// -------------------------------------------------------------------------

export type MulOp<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    I extends Index
> = I extends 0 ? B : MulOp<A, Add<A, B>, Prev<I>>

export type Mul<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends Index
> = MulOp<A, Byte<0>, B>


// -------------------------------------------------------------------------
// Converters
// -------------------------------------------------------------------------

type Size1  = [0]
type Size2  = [...Size1, ...Size1]
type Size3  = [...Size2, ...Size2]
type Size4  = [...Size3, ...Size3]
type Size5  = [...Size4, ...Size4]
type Size6  = [...Size5, ...Size5]
type Size7  = [...Size6, ...Size6]
type Size8  = [...Size7, ...Size7]
export type Num<T extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]> = [
    ...T[0] extends 1 ? Size1 : [],
    ...T[1] extends 1 ? Size2 : [],
    ...T[2] extends 1 ? Size3 : [],
    ...T[3] extends 1 ? Size4 : [],
    ...T[4] extends 1 ? Size5 : [],
    ...T[5] extends 1 ? Size6 : [],
    ...T[6] extends 1 ? Size7 : [],
    ...T[7] extends 1 ? Size8 : [],
]['length']

export type Byte<T extends number> =
    T extends 0  ? [0, 0, 0, 0, 0, 0, 0, 0] :
    T extends 1  ? [1, 0, 0, 0, 0, 0, 0, 0] :
    T extends 2  ? [0, 1, 0, 0, 0, 0, 0, 0] :
    T extends 3  ? [1, 1, 0, 0, 0, 0, 0, 0] :
    T extends 4  ? [0, 0, 1, 0, 0, 0, 0, 0] :
    T extends 5  ? [1, 0, 1, 0, 0, 0, 0, 0] :
    T extends 6  ? [0, 1, 1, 0, 0, 0, 0, 0] :
    T extends 7  ? [1, 1, 1, 0, 0, 0, 0, 0] :
    T extends 8  ? [0, 0, 0, 1, 0, 0, 0, 0] :
    T extends 9  ? [1, 0, 0, 1, 0, 0, 0, 0] :
    T extends 10 ? [0, 1, 0, 1, 0, 0, 0, 0] :
    T extends 11 ? [1, 1, 0, 1, 0, 0, 0, 0] :
    T extends 12 ? [0, 0, 1, 1, 0, 0, 0, 0] :
    T extends 13 ? [1, 0, 1, 1, 0, 0, 0, 0] :
    T extends 14 ? [0, 1, 1, 1, 0, 0, 0, 0] :
    T extends 15 ? [1, 1, 1, 1, 0, 0, 0, 0] :
    T extends 16 ? [0, 0, 0, 0, 1, 0, 0, 0] :
    T extends 17 ? [1, 0, 0, 0, 1, 0, 0, 0] :
    T extends 18 ? [0, 1, 0, 0, 1, 0, 0, 0] :
    T extends 19 ? [1, 1, 0, 0, 1, 0, 0, 0] :
    T extends 20 ? [0, 0, 1, 0, 1, 0, 0, 0] :
    T extends 21 ? [1, 0, 1, 0, 1, 0, 0, 0] :
    T extends 22 ? [0, 1, 1, 0, 1, 0, 0, 0] :
    T extends 23 ? [1, 1, 1, 0, 1, 0, 0, 0] :
    T extends 24 ? [0, 0, 0, 1, 1, 0, 0, 0] :
    T extends 25 ? [1, 0, 0, 1, 1, 0, 0, 0] :
    T extends 26 ? [0, 1, 0, 1, 1, 0, 0, 0] :
    T extends 27 ? [1, 1, 0, 1, 1, 0, 0, 0] :
    T extends 28 ? [0, 0, 1, 1, 1, 0, 0, 0] :
    T extends 29 ? [1, 0, 1, 1, 1, 0, 0, 0] :
    T extends 30 ? [0, 1, 1, 1, 1, 0, 0, 0] :
    T extends 31 ? [1, 1, 1, 1, 1, 0, 0, 0] :
    T extends 32 ? [0, 0, 0, 0, 0, 1, 0, 0] :
    T extends 33 ? [1, 0, 0, 0, 0, 1, 0, 0] :
    T extends 34 ? [0, 1, 0, 0, 0, 1, 0, 0] :
    T extends 35 ? [1, 1, 0, 0, 0, 1, 0, 0] :
    T extends 36 ? [0, 0, 1, 0, 0, 1, 0, 0] :
    T extends 37 ? [1, 0, 1, 0, 0, 1, 0, 0] :
    T extends 38 ? [0, 1, 1, 0, 0, 1, 0, 0] :
    T extends 39 ? [1, 1, 1, 0, 0, 1, 0, 0] :
    T extends 40 ? [0, 0, 0, 1, 0, 1, 0, 0] :
    T extends 41 ? [1, 0, 0, 1, 0, 1, 0, 0] :
    T extends 42 ? [0, 1, 0, 1, 0, 1, 0, 0] :
    T extends 43 ? [1, 1, 0, 1, 0, 1, 0, 0] :
    T extends 44 ? [0, 0, 1, 1, 0, 1, 0, 0] :
    T extends 45 ? [1, 0, 1, 1, 0, 1, 0, 0] :
    T extends 46 ? [0, 1, 1, 1, 0, 1, 0, 0] :
    T extends 47 ? [1, 1, 1, 1, 0, 1, 0, 0] :
    T extends 48 ? [0, 0, 0, 0, 1, 1, 0, 0] :
    T extends 49 ? [1, 0, 0, 0, 1, 1, 0, 0] :
    T extends 50 ? [0, 1, 0, 0, 1, 1, 0, 0] :
    T extends 51 ? [1, 1, 0, 0, 1, 1, 0, 0] :
    T extends 52 ? [0, 0, 1, 0, 1, 1, 0, 0] :
    T extends 53 ? [1, 0, 1, 0, 1, 1, 0, 0] :
    T extends 54 ? [0, 1, 1, 0, 1, 1, 0, 0] :
    T extends 55 ? [1, 1, 1, 0, 1, 1, 0, 0] :
    T extends 56 ? [0, 0, 0, 1, 1, 1, 0, 0] :
    T extends 57 ? [1, 0, 0, 1, 1, 1, 0, 0] :
    T extends 58 ? [0, 1, 0, 1, 1, 1, 0, 0] :
    T extends 59 ? [1, 1, 0, 1, 1, 1, 0, 0] :
    T extends 60 ? [0, 0, 1, 1, 1, 1, 0, 0] :
    T extends 61 ? [1, 0, 1, 1, 1, 1, 0, 0] :
    T extends 62 ? [0, 1, 1, 1, 1, 1, 0, 0] :
    T extends 63 ? [1, 1, 1, 1, 1, 1, 0, 0] :
    T extends 64 ? [0, 0, 0, 0, 0, 0, 1, 0] :
    T extends 65 ? [1, 0, 0, 0, 0, 0, 1, 0] :
    T extends 66 ? [0, 1, 0, 0, 0, 0, 1, 0] :
    T extends 67 ? [1, 1, 0, 0, 0, 0, 1, 0] :
    T extends 68 ? [0, 0, 1, 0, 0, 0, 1, 0] :
    T extends 69 ? [1, 0, 1, 0, 0, 0, 1, 0] :
    T extends 70 ? [0, 1, 1, 0, 0, 0, 1, 0] :
    T extends 71 ? [1, 1, 1, 0, 0, 0, 1, 0] :
    T extends 72 ? [0, 0, 0, 1, 0, 0, 1, 0] :
    T extends 73 ? [1, 0, 0, 1, 0, 0, 1, 0] :
    T extends 74 ? [0, 1, 0, 1, 0, 0, 1, 0] :
    T extends 75 ? [1, 1, 0, 1, 0, 0, 1, 0] :
    T extends 76 ? [0, 0, 1, 1, 0, 0, 1, 0] :
    T extends 77 ? [1, 0, 1, 1, 0, 0, 1, 0] :
    T extends 78 ? [0, 1, 1, 1, 0, 0, 1, 0] :
    T extends 79 ? [1, 1, 1, 1, 0, 0, 1, 0] :
    T extends 80 ? [0, 0, 0, 0, 1, 0, 1, 0] :
    T extends 81 ? [1, 0, 0, 0, 1, 0, 1, 0] :
    T extends 82 ? [0, 1, 0, 0, 1, 0, 1, 0] :
    T extends 83 ? [1, 1, 0, 0, 1, 0, 1, 0] :
    T extends 84 ? [0, 0, 1, 0, 1, 0, 1, 0] :
    T extends 85 ? [1, 0, 1, 0, 1, 0, 1, 0] :
    T extends 86 ? [0, 1, 1, 0, 1, 0, 1, 0] :
    T extends 87 ? [1, 1, 1, 0, 1, 0, 1, 0] :
    T extends 88 ? [0, 0, 0, 1, 1, 0, 1, 0] :
    T extends 89 ? [1, 0, 0, 1, 1, 0, 1, 0] :
    T extends 90 ? [0, 1, 0, 1, 1, 0, 1, 0] :
    T extends 91 ? [1, 1, 0, 1, 1, 0, 1, 0] :
    T extends 92 ? [0, 0, 1, 1, 1, 0, 1, 0] :
    T extends 93 ? [1, 0, 1, 1, 1, 0, 1, 0] :
    T extends 94 ? [0, 1, 1, 1, 1, 0, 1, 0] :
    T extends 95 ? [1, 1, 1, 1, 1, 0, 1, 0] :
    T extends 96 ? [0, 0, 0, 0, 0, 1, 1, 0] :
    T extends 97 ? [1, 0, 0, 0, 0, 1, 1, 0] :
    T extends 98 ? [0, 1, 0, 0, 0, 1, 1, 0] :
    T extends 99 ? [1, 1, 0, 0, 0, 1, 1, 0] :
    T extends 100 ? [0, 0, 1, 0, 0, 1, 1, 0] :
    T extends 101 ? [1, 0, 1, 0, 0, 1, 1, 0] :
    T extends 102 ? [0, 1, 1, 0, 0, 1, 1, 0] :
    T extends 103 ? [1, 1, 1, 0, 0, 1, 1, 0] :
    T extends 104 ? [0, 0, 0, 1, 0, 1, 1, 0] :
    T extends 105 ? [1, 0, 0, 1, 0, 1, 1, 0] :
    T extends 106 ? [0, 1, 0, 1, 0, 1, 1, 0] :
    T extends 107 ? [1, 1, 0, 1, 0, 1, 1, 0] :
    T extends 108 ? [0, 0, 1, 1, 0, 1, 1, 0] :
    T extends 109 ? [1, 0, 1, 1, 0, 1, 1, 0] :
    T extends 110 ? [0, 1, 1, 1, 0, 1, 1, 0] :
    T extends 111 ? [1, 1, 1, 1, 0, 1, 1, 0] :
    T extends 112 ? [0, 0, 0, 0, 1, 1, 1, 0] :
    T extends 113 ? [1, 0, 0, 0, 1, 1, 1, 0] :
    T extends 114 ? [0, 1, 0, 0, 1, 1, 1, 0] :
    T extends 115 ? [1, 1, 0, 0, 1, 1, 1, 0] :
    T extends 116 ? [0, 0, 1, 0, 1, 1, 1, 0] :
    T extends 117 ? [1, 0, 1, 0, 1, 1, 1, 0] :
    T extends 118 ? [0, 1, 1, 0, 1, 1, 1, 0] :
    T extends 119 ? [1, 1, 1, 0, 1, 1, 1, 0] :
    T extends 120 ? [0, 0, 0, 1, 1, 1, 1, 0] :
    T extends 121 ? [1, 0, 0, 1, 1, 1, 1, 0] :
    T extends 122 ? [0, 1, 0, 1, 1, 1, 1, 0] :
    T extends 123 ? [1, 1, 0, 1, 1, 1, 1, 0] :
    T extends 124 ? [0, 0, 1, 1, 1, 1, 1, 0] :
    T extends 125 ? [1, 0, 1, 1, 1, 1, 1, 0] :
    T extends 126 ? [0, 1, 1, 1, 1, 1, 1, 0] :
    T extends 127 ? [1, 1, 1, 1, 1, 1, 1, 0] :
    T extends 128 ? [0, 0, 0, 0, 0, 0, 0, 1] :
    T extends 129 ? [1, 0, 0, 0, 0, 0, 0, 1] :
    T extends 130 ? [0, 1, 0, 0, 0, 0, 0, 1] :
    T extends 131 ? [1, 1, 0, 0, 0, 0, 0, 1] :
    T extends 132 ? [0, 0, 1, 0, 0, 0, 0, 1] :
    T extends 133 ? [1, 0, 1, 0, 0, 0, 0, 1] :
    T extends 134 ? [0, 1, 1, 0, 0, 0, 0, 1] :
    T extends 135 ? [1, 1, 1, 0, 0, 0, 0, 1] :
    T extends 136 ? [0, 0, 0, 1, 0, 0, 0, 1] :
    T extends 137 ? [1, 0, 0, 1, 0, 0, 0, 1] :
    T extends 138 ? [0, 1, 0, 1, 0, 0, 0, 1] :
    T extends 139 ? [1, 1, 0, 1, 0, 0, 0, 1] :
    T extends 140 ? [0, 0, 1, 1, 0, 0, 0, 1] :
    T extends 141 ? [1, 0, 1, 1, 0, 0, 0, 1] :
    T extends 142 ? [0, 1, 1, 1, 0, 0, 0, 1] :
    T extends 143 ? [1, 1, 1, 1, 0, 0, 0, 1] :
    T extends 144 ? [0, 0, 0, 0, 1, 0, 0, 1] :
    T extends 145 ? [1, 0, 0, 0, 1, 0, 0, 1] :
    T extends 146 ? [0, 1, 0, 0, 1, 0, 0, 1] :
    T extends 147 ? [1, 1, 0, 0, 1, 0, 0, 1] :
    T extends 148 ? [0, 0, 1, 0, 1, 0, 0, 1] :
    T extends 149 ? [1, 0, 1, 0, 1, 0, 0, 1] :
    T extends 150 ? [0, 1, 1, 0, 1, 0, 0, 1] :
    T extends 151 ? [1, 1, 1, 0, 1, 0, 0, 1] :
    T extends 152 ? [0, 0, 0, 1, 1, 0, 0, 1] :
    T extends 153 ? [1, 0, 0, 1, 1, 0, 0, 1] :
    T extends 154 ? [0, 1, 0, 1, 1, 0, 0, 1] :
    T extends 155 ? [1, 1, 0, 1, 1, 0, 0, 1] :
    T extends 156 ? [0, 0, 1, 1, 1, 0, 0, 1] :
    T extends 157 ? [1, 0, 1, 1, 1, 0, 0, 1] :
    T extends 158 ? [0, 1, 1, 1, 1, 0, 0, 1] :
    T extends 159 ? [1, 1, 1, 1, 1, 0, 0, 1] :
    T extends 160 ? [0, 0, 0, 0, 0, 1, 0, 1] :
    T extends 161 ? [1, 0, 0, 0, 0, 1, 0, 1] :
    T extends 162 ? [0, 1, 0, 0, 0, 1, 0, 1] :
    T extends 163 ? [1, 1, 0, 0, 0, 1, 0, 1] :
    T extends 164 ? [0, 0, 1, 0, 0, 1, 0, 1] :
    T extends 165 ? [1, 0, 1, 0, 0, 1, 0, 1] :
    T extends 166 ? [0, 1, 1, 0, 0, 1, 0, 1] :
    T extends 167 ? [1, 1, 1, 0, 0, 1, 0, 1] :
    T extends 168 ? [0, 0, 0, 1, 0, 1, 0, 1] :
    T extends 169 ? [1, 0, 0, 1, 0, 1, 0, 1] :
    T extends 170 ? [0, 1, 0, 1, 0, 1, 0, 1] :
    T extends 171 ? [1, 1, 0, 1, 0, 1, 0, 1] :
    T extends 172 ? [0, 0, 1, 1, 0, 1, 0, 1] :
    T extends 173 ? [1, 0, 1, 1, 0, 1, 0, 1] :
    T extends 174 ? [0, 1, 1, 1, 0, 1, 0, 1] :
    T extends 175 ? [1, 1, 1, 1, 0, 1, 0, 1] :
    T extends 176 ? [0, 0, 0, 0, 1, 1, 0, 1] :
    T extends 177 ? [1, 0, 0, 0, 1, 1, 0, 1] :
    T extends 178 ? [0, 1, 0, 0, 1, 1, 0, 1] :
    T extends 179 ? [1, 1, 0, 0, 1, 1, 0, 1] :
    T extends 180 ? [0, 0, 1, 0, 1, 1, 0, 1] :
    T extends 181 ? [1, 0, 1, 0, 1, 1, 0, 1] :
    T extends 182 ? [0, 1, 1, 0, 1, 1, 0, 1] :
    T extends 183 ? [1, 1, 1, 0, 1, 1, 0, 1] :
    T extends 184 ? [0, 0, 0, 1, 1, 1, 0, 1] :
    T extends 185 ? [1, 0, 0, 1, 1, 1, 0, 1] :
    T extends 186 ? [0, 1, 0, 1, 1, 1, 0, 1] :
    T extends 187 ? [1, 1, 0, 1, 1, 1, 0, 1] :
    T extends 188 ? [0, 0, 1, 1, 1, 1, 0, 1] :
    T extends 189 ? [1, 0, 1, 1, 1, 1, 0, 1] :
    T extends 190 ? [0, 1, 1, 1, 1, 1, 0, 1] :
    T extends 191 ? [1, 1, 1, 1, 1, 1, 0, 1] :
    T extends 192 ? [0, 0, 0, 0, 0, 0, 1, 1] :
    T extends 193 ? [1, 0, 0, 0, 0, 0, 1, 1] :
    T extends 194 ? [0, 1, 0, 0, 0, 0, 1, 1] :
    T extends 195 ? [1, 1, 0, 0, 0, 0, 1, 1] :
    T extends 196 ? [0, 0, 1, 0, 0, 0, 1, 1] :
    T extends 197 ? [1, 0, 1, 0, 0, 0, 1, 1] :
    T extends 198 ? [0, 1, 1, 0, 0, 0, 1, 1] :
    T extends 199 ? [1, 1, 1, 0, 0, 0, 1, 1] :
    T extends 200 ? [0, 0, 0, 1, 0, 0, 1, 1] :
    T extends 201 ? [1, 0, 0, 1, 0, 0, 1, 1] :
    T extends 202 ? [0, 1, 0, 1, 0, 0, 1, 1] :
    T extends 203 ? [1, 1, 0, 1, 0, 0, 1, 1] :
    T extends 204 ? [0, 0, 1, 1, 0, 0, 1, 1] :
    T extends 205 ? [1, 0, 1, 1, 0, 0, 1, 1] :
    T extends 206 ? [0, 1, 1, 1, 0, 0, 1, 1] :
    T extends 207 ? [1, 1, 1, 1, 0, 0, 1, 1] :
    T extends 208 ? [0, 0, 0, 0, 1, 0, 1, 1] :
    T extends 209 ? [1, 0, 0, 0, 1, 0, 1, 1] :
    T extends 210 ? [0, 1, 0, 0, 1, 0, 1, 1] :
    T extends 211 ? [1, 1, 0, 0, 1, 0, 1, 1] :
    T extends 212 ? [0, 0, 1, 0, 1, 0, 1, 1] :
    T extends 213 ? [1, 0, 1, 0, 1, 0, 1, 1] :
    T extends 214 ? [0, 1, 1, 0, 1, 0, 1, 1] :
    T extends 215 ? [1, 1, 1, 0, 1, 0, 1, 1] :
    T extends 216 ? [0, 0, 0, 1, 1, 0, 1, 1] :
    T extends 217 ? [1, 0, 0, 1, 1, 0, 1, 1] :
    T extends 218 ? [0, 1, 0, 1, 1, 0, 1, 1] :
    T extends 219 ? [1, 1, 0, 1, 1, 0, 1, 1] :
    T extends 220 ? [0, 0, 1, 1, 1, 0, 1, 1] :
    T extends 221 ? [1, 0, 1, 1, 1, 0, 1, 1] :
    T extends 222 ? [0, 1, 1, 1, 1, 0, 1, 1] :
    T extends 223 ? [1, 1, 1, 1, 1, 0, 1, 1] :
    T extends 224 ? [0, 0, 0, 0, 0, 1, 1, 1] :
    T extends 225 ? [1, 0, 0, 0, 0, 1, 1, 1] :
    T extends 226 ? [0, 1, 0, 0, 0, 1, 1, 1] :
    T extends 227 ? [1, 1, 0, 0, 0, 1, 1, 1] :
    T extends 228 ? [0, 0, 1, 0, 0, 1, 1, 1] :
    T extends 229 ? [1, 0, 1, 0, 0, 1, 1, 1] :
    T extends 230 ? [0, 1, 1, 0, 0, 1, 1, 1] :
    T extends 231 ? [1, 1, 1, 0, 0, 1, 1, 1] :
    T extends 232 ? [0, 0, 0, 1, 0, 1, 1, 1] :
    T extends 233 ? [1, 0, 0, 1, 0, 1, 1, 1] :
    T extends 234 ? [0, 1, 0, 1, 0, 1, 1, 1] :
    T extends 235 ? [1, 1, 0, 1, 0, 1, 1, 1] :
    T extends 236 ? [0, 0, 1, 1, 0, 1, 1, 1] :
    T extends 237 ? [1, 0, 1, 1, 0, 1, 1, 1] :
    T extends 238 ? [0, 1, 1, 1, 0, 1, 1, 1] :
    T extends 239 ? [1, 1, 1, 1, 0, 1, 1, 1] :
    T extends 240 ? [0, 0, 0, 0, 1, 1, 1, 1] :
    T extends 241 ? [1, 0, 0, 0, 1, 1, 1, 1] :
    T extends 242 ? [0, 1, 0, 0, 1, 1, 1, 1] :
    T extends 243 ? [1, 1, 0, 0, 1, 1, 1, 1] :
    T extends 244 ? [0, 0, 1, 0, 1, 1, 1, 1] :
    T extends 245 ? [1, 0, 1, 0, 1, 1, 1, 1] :
    T extends 246 ? [0, 1, 1, 0, 1, 1, 1, 1] :
    T extends 247 ? [1, 1, 1, 0, 1, 1, 1, 1] :
    T extends 248 ? [0, 0, 0, 1, 1, 1, 1, 1] :
    T extends 249 ? [1, 0, 0, 1, 1, 1, 1, 1] :
    T extends 250 ? [0, 1, 0, 1, 1, 1, 1, 1] :
    T extends 251 ? [1, 1, 0, 1, 1, 1, 1, 1] :
    T extends 252 ? [0, 0, 1, 1, 1, 1, 1, 1] :
    T extends 253 ? [1, 0, 1, 1, 1, 1, 1, 1] :
    T extends 254 ? [0, 1, 1, 1, 1, 1, 1, 1] :
    T extends 255 ? [1, 1, 1, 1, 1, 1, 1, 1] :
    never