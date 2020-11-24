# ts-8-bit

Using TypeScript's Type System to do 8-bit Arithmetic [Demo](https://www.typescriptlang.org/play?#code/PTAEFpK6dv4YpcBQJQc6A+rv2d8tM9iTiCCM0xiAfXE7MfO4l0AHTLbYwApsASlB8aZTL1GhBjfNjaCRDVqMY5eBcROl9OpffIB8OUAB55C0AHICnKbjraJUwrmVZFw6Z7UfNoM48Vip4tFiGzMEAdLjADHSGTug6qWnpZEEAqgDOAJYAdgDmoAAuABYApqAAKgCeAA6VAMoAxgBOeQ2lZY3VOXU5pZUAtqAAZgD27aAAHOAARnk9AIadFSOVpXmtNEEZmPkFrQA2K3kzAEwADDfSALIAkjUHr6-7b59Y4si-f-8AqAocQAQXW5U2212pT6oBBoAAvKAAHIAVxGZjhABMseZQAAhOrDMwARkuAGYjAAaAlEypmS6XEzM0Dofhk8mgADUGEZIiRJIALABWFAwpoExEo9GY5qohZ4wnEwUAdmpGCV9LJLJMbNVGHAGDJ-NA5NF4uqAGEpWiMaB7qiToq6WZyST1YKWak2W6MAAqTCCk1kwXA9AAUQAjqiVidlnUxbCACJSqPO4kk67qzWkrOgEzesCZxEIgXXKWldqoyqJiXhqUAGR6mJzmezLrb+bS6GLmOLGCR41jORrFtAADEpQBxZu04k3dsZvMFnToO4mfsVquj2FTxvEudarM01vL7tF8tmMsDsrb2vVAAS04POYXJ47Z8LoHX1631bDYD4ssADueQjveoCPDaMqgAASjk5TpvSABsno0pSXZfvwqEYEYBbkiaswQQAUtBdoNghSEMpSNJMphq5gPwFIYGYmLfiaACclwQQA0mRmIAPIzFR5I0YeZhql2K4+pyPigCqJrkhxgRjg2-FwgUuIth2TLvsSwo6pgbJkhgABkmDCiaoZjvc6kABrTFRjKLlqKpSV2bKMhgAB6RoKVKKoQci6nIpMs6vsKGFel+ADaJI0tcNLxaAyWpUlSUALqsmAlyRSgXwFbFiUpQlpWgMVFUJVla4ARAgL1Q19XiEBpQ-I17UdQgwKVAAHg00w9GOLVSuWbAkrVnWTVN4DiFOKzDDkbXTctTUoL1-XtINsItaFpRmC8vXDJpOQEssJgIvlmAHT1R1Yid5YAPwpaAABcl0YNdt0nSSoBPeWb1YAUlQAG6VO03V9QNvQSi1IKaftoCHZUx2gDFLUnssGXne9tSIzdyN3ajFVZX9r0459BMnTFxUkiT5Vk1gFMo3FVW-fTANXXjX2o6ldM-RzGBA6D4NrZDm3Q9ULVCQjSPM+jp2lFjiLk1zlNE6zpMC7jsuE9TmVs-zKs61TyXXHzDOc8bPP609huAyDYMQxtW0w8sDntDL+Ny8sGOK9jjOq8zxNs-9Rte7rNPm1rTO66bUdh9zLMpXTof28LE0rZn-ziI8wztPN0xLVnxddaLzsS5Bmm9VKADWlR1JM4yQXnBfg+tUNjgACu0IOe9zdcN03udg6353NyPpTTDFNQZdTGVlx3sLIodfdqwPjfj-nk-tGPw9b1PM9xfP7fi2Oe+t1KADeOPXC9qMqplNI4ySd969+GU0tQWCXK-yXkh-mAcbklfpcGkgoAFf0DK-ckNJhQQMCFgYUr9BQ0mQvAnGyFX7ChpCqdBWAVSv2QlVT+gQAC+GcS6UNgM1ECYEazoCoYw6ATtF4Sl2qvb2pRfbcIVjw+W-DMZjxijjHaYV9pz2pCI5Y7CahH0kVgURe1ZGXCxlSKRpQZExX-vIzAijxHgJ0RqaRYjZFwMMQrTRaDzF6NkbgyR88F6n1hHDLEZgcbwitmjH2vCfECK4b47xLUP4iMDrrPxfDAmRP8X4+eQj1EuLMDFEEc8Txz1UfE+GSSj6pNpukhRywElZJUaklReTdEFMyck-+qT-5lKMaUQpyTwGpPAXUhWjSYpwNSXAtpsNKkxTQaktBvSKmuKybg1JuD0kOJPi7ao0t3GhKpuEgJ0SokRMVmohRSzUYrL2es1ZsSpTCPyaUaWWSzapLNiMs5Hssm0xyRlG55zknFIJDFUp1jlgvK0QA-Evznl3KaX8mKrSvm3MSckrp7yengp+YM95wy4VApihM95Uz7EsKcRKd2bisAePDssg5+y1mkt9sE7ZniSUbJpQrI5SITnlNKLitGKS4RpPBSy-5Dz2W5M5dMRJ-y3mvKefyu5-zqnstqWKwVoKAHApuVyzp8rlWKoFayhFySkVbKZUqtFySMVqJmWLOZcEEIcLCcSq1ZLDk0iglbR4Vcer+0wPawl9MnovDvvBcoiTZE8uUQA2RkrZHNNqMqmksiEW2IAZc0A3de6PDwli01FFfUxyJTa6lqzyV2p2Y6rEvUXUYDddzR6uM75psScVWRcb-VBo+Q2kNcrI0RvDcMmkCbgZmCTUYYERcmGUPEFGGMcYYQDsHcXFNFcox4swASxO2al1RIpbonZXis3WtpUElAY8F1q3xGzSs1ZXoTGHDWRxqazkNDnRgfdnDt1bttSEqlT7l2ktXSW-NTrd1SnvYTQ9T0hwnBHBbDAWTHggsg1lTxwcnpNgEjekEJ5O0927b2sDqNkmQdSdB9dvM2YIaQyh+NaGe14UwxBqDTz8MazPSB6oWsqO4Zo7Bm2t4T1a2A+BS9Fcmy3rhOu99j6P06o1EJt9knRO-qRERswyGCQ4L7bx1SxJFmvs3ZpkTn7JQaZE-pulaihGzoU-idU-HTNGBg+6mKx7Kg0m45UOmdnKMmZPOZvalnrOJ0czSOzzntynpxo56dY4ZyIYE-+zNBn306cPXpnNiWSU6dLWrAtvUZOCatoB+joGmPYeo95tWb8zZs3C8RxTpHE0UfyzFHD7y8OeII09cr8mSNdvIyYWr9X-mNZs5HNmjnKMFZY0V5mccj2Ba4+e0Lu49rqZs8JpLK6xO6cW1JmLmMjPPgi6ZpTs2JQznpAtxdG3lvScpetrT52NnBOM5GNrBJ1Qzke2Zsbus7MOfPQFzjOMYpuaezSF7Xn12+Y405ybnGEGYBCxOydmdQQ4mWHkSYBQ4fw+Wgd6o45HQnBBDiMGFrouHOLdrfrZVStPRK1laOtHyp0aTqV2nbGSrlTpozmnCditpTZ2zN+tNMMZvVvT5OfOJvM5s6bdj-POcBxZ814XAuJeJx5wLqnBGtZC0dip5xOIIsneK0t2Lq34tXc29doJq3Uso3Sz1VbAkdktUyzjk4eOCd3PcXV6jVudnlv+tiLEu32tkaTUlPtWMYoCWNeXMc+PXEG4fTdpPluX1m+T1J+lqN3F64q-iCn5i49B8q6bAvOfXu0QSqXwPuf0KV9W4XmvoAUHlSr0XvPoBsEt-r2XvboAiFd+z9X8v8k68oAcQwjHJdxBygWJWFYrRtio-R5PyaWOJy45n3PhfAqhcbtu6T3flVedU+Dsr7nFP2fi650HdKx-rai7P+N2-lPhdM+vxHMqav79K-fybT-7PT9f9FdpcBtH9Y5b8v8k4f805tdZkK4Z99d8UJMLczsU9LtTsUDMDc0cZrdCZbd7dHdlhncN95Qt9t5ElPcesvcfcrY-dT0EDG8OtQ8Upw8jBI9o9WFqgZ9ItkDzdtMTdeD09MDM9GUMAGDh8KpzFxDe8S9VtpCSNQEB8sB5DKsYElDMAVD29m9jwcZNDYFR9lD5Q29UEDCNCjDG8H4B9x8wAV8p10AHQThtgGgTgEwJ9bCVo18HDED51BCjdrU4tfDUD-CaD3VbdMtcD7o2ZD074vCKs49Xt1QmDk0dcJQHCeCEs-DNMAiHUf0x5YjXsXRjwnt+03D3DppxBLRUdhY85FpSiyjV8IJmg8gAAvSoH6Y5M2RoloyoS4G8GKaIAYpo1o5KAY6IIYto+eMccY2SBlUY8YxQuY7olRLo1owUPoxY1otQjYyof+FYyoYUdYwY7o5vbY8BPY5CQ4sY7ozvbYuBPYtyY5bY-vJ4yY2EcY2YS48Yyw7Y3BFI6oW0InXZII4QuJLAUY2td7b6NmcY-mVGHTcEo+HZH6J6eY09GKeEgYwNJE6E7ozkV+DE6IYNSE56FE44tEgk0NYk5E0AcYg4-E1bBEuBbE0k1oi4+knGBEtBZkmk7otydksEzE1FKknE1oj49k2eawE4ZGIoCoawDg7FSWF0IXAodEBYMGA-X3DAE-CnHUkXQAuXd1do9XXUo-U02XS2d1XovnGmE0k080j6HZWSY01nU0u0wXHZNY60z-W0vU+0snbmA4sXb0vUt0sAk6C4r01nKXEM3090q2B450nnV02MsMuYLU1-YM5Mt-A07mZSIMmM6Ms0uMw08tfnTM0MoAkkakqA8smM7Mi07mEybUkXJMisnMtWEkTkZ0m0l0tshsjstY5s1XH0+sh0q2EkA4xMiAkcv0oXEkC45s5Mws1mVMkkNybs3U5c3nVcj4oczcvsscw05SKcgsg8-0tWO4Rc5-a8lMoAy4as6Mx8s8oXLyPc3s98-U-slGZiE8p8us2cnZS4QcjMlsm8z8w87mXKfMo-Vs289s78hc4A0Cj8lcu89c7-YMrc0c88783ckC4c-84syC48+-Hs2C8CnCwmckUssi6cwi1M30X8uioshi3oq8ussCgCq2USaCn0wsri91ckYCssjij8gS7mM0fMrCzioitWckRCkrMCmShi9CxnJSsS2SlGckPCkSrc-izSqikimslCjS1MwUGi-c5CiioXQUB8yyns6yj0tipChy5SoAwULsjCqyty+CwmQUYSmCm8-Ssyyc0i5inyr8vyhS2i984K9y1Sgiv8xyq2QUHSrM8K7c9yoy6SqMi-Ayk6YUCyky8i8StWYUOy4qiKiCsq5yxS2KqqyigqzytS+q0yoA4UAKjKkq-KjvUK4yv8uK3ygq6Kyy7q1M4UBK0ahqoXYUNKoKjK7Cma7K+a3KuCyK8MoqmKsaoA5CCqra6anZZCWq-a1a5K91ZCZqxKha0qlGHCdi9Kl0m6wmZCPqnKwKzKoavvEaky96xaw6yan6zMp68Mua7y08j69avvZasG364G+SIq8ioGnqlUCqxGqyuGlUY6+ypG1MlUS67G9G5Gzq1q2G5G16la0m3G76mKymoAlUAGmmnGum0Ggi2mz6lUaG1mpmz62YTagmq-Hmva-m1CnmrGyqwm1M2YfG8WhyuG2YYm1ykmuW8msGpKuW762CtWnq2YAGzW7myG2YUG96rWyW6G42-W6qlGDiBGzCi2xq0ADiVG22iWoAriSMk62WnqjiaWj25-OGjiYmq6l2z6jiFWoOz21Mjiamviv2r2hmmOx6r2lmhOgWyGjiTmlOkWyGzMPm8W1Oy2wmTMIWvOrOgu76W4SMtGpMuGzMaWqu2O1c64BW2s6unqzMFW365imu64DWluhuys64XWvuxOxuo2rq-uz6zMM28ekeys4sN8vW2eyeqsqSme-O+2qssWpcrutuzs3i8G1u1coUSuqape7Oic1eg+ie8+6O1qw+ue+Ou+6+sulKEkZOp+s+l+qsjOj+9eucy8kCk6v+pE+8-eoB0uje18lyui++yen8ry8BiGr+oC92mBne1cqCjc1a1mmuy4Xu7B9Bysy4Iegh063Bse0SmC3B6eyh--Nu6ik+2hlsmuxihBkc-WVc8kLe9Sqh+hn2nhuhzhwOgR5h+hsOkR0Ays+S1BmGwRqRx+xW3hzh9+xRuRyepSS+1R0R1c8ymRtGyRye2y-e-RjhyswUMWrmgsmujyy+kxh-Mx5u8GpRsxjugmgx7OwUfBzu7Rsxkh7x9xr+1KvR2sgJjewUGhpKtR7OwqxhyJnxye8q2xkJ0xhJ7h5CvSmuyKMBhalJ6J4R9JzczJ8Rgpqxtu4UW+yx0Jucia4xnJ+xhJ9+yp3Jr+4UH+pp+p7O5CXO7e+Jzp4unpqppEo6xhgZ5pjei6zR-mmuu6-CqZtul62ppxsZuc5CfBvSqJr+5CEh9Z3pzZihxWx86Zmhg5jZjelUG21W05uclGyZkm5ZpEzG4Ju5jpr+vGxZuJ6A7OlUfJxewZ8clUYp35+5-52+823Zs5hR52v5w0lUFRqF4FmFn+sF6Fxs3mp5xml5je2YYugaq5pE2YCxlaw5tuqWpJkplFjs+WmR32zFuc2YVxkp4lncrxtB8Fulvx1lillGN+ih8OhF1FiJzl-ljs622JoV2lpEx2slyxz5r+t2+6lOmu727J0SjXSsgOkZxVtu0O25np2VjeqO9F0apVx+nKtVyejiRprV1c9OslvVuGm4bp9S81yGm4fp514V78iut8rRl1l+m4Ou5JqMh1pup5nZ-Vl864Bl+uiVq2G4NZj12Ny0we6V41nqm4fZ4eiNwC64Y5rNh1+e6By5pNyClek87xv1+2+8tJj5z1wme8-h55ytl84+he-N9Ni+pi4t7NuN+c6ltegtyF06iAgtuF4d4NjtpFgd9NgBuqmVutk6RkHF6d1MxkQl0hsih1+B-qldu8lBhVq+kti8zBsK1Vkdmdllw9nty04h3V5269yCy4Xl0+h949wVq9h1hhttj99N1hndn91drh-t3+z9xtk5idwD-J8D5twCyS8tolhd78aR9ixemDuN8kU1hDo9787SsVkD39tprD19783Rg9oBh1oxrBsFtDy08xzVxlxDoCwNq9xj-yo10h4j+tkURZ8j9NzxvD3j1d-ULtwTu8oJg9oOzjxd8JlVyTh1mJn11lmjyCxJ+Djjxj4UGtpTjTxtyTjTn57T7D+t4UQFwz-VrXdoIAA)

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
