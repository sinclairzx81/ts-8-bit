<div align='center'>

<h1>TS-8-bit</h1>

<p>Using TypeScript's Type System to do 8-bit Arithmetic</p>
</div>

```typescript
import { 
    Byte, Num, Add, Sub, Mul, Div, Mod, Eq, Lt, Gt, Lte, Gte, Lsh, Rsh, And, Xor, Or, Not 
} from './ts-8-bit'

// Arithmetic
type A = Num< Add < Byte<12>, Byte<22> > >  // + type A = 34
type B = Num< Sub < Byte<47>, Byte<12> > >  // - type B = 35
type C = Num< Mul < Byte<31>, Byte<4>  > >  // * type C = 124
type D = Num< Div < Byte<16>, Byte<8>  > >  // / type D = 2
type E = Num< Mod < Byte<19>, Byte<4>  > >  // % type E = 3

// Equality
type F = Eq < Byte<10>, Byte<10> >          // == type F = true
type G = Lt < Byte<10>, Byte<10> >          // <  type G = false
type H = Gt < Byte<20>, Byte<10> >          // >  type H = true
type I = Lte< Byte<10>, Byte<10> >          // <= type I = true
type J = Gte< Byte<20>, Byte<10> >          // >= type J = true

// Bitwise
type K = Num< Rsh < Byte<64>, 3 > >         // >> type K = 8
type L = Num< Lsh < Byte<23>, 2 > >         // << type L = 92
type M = Num< Or  < Byte<33>, Byte<7> > >   // |  type M = 39 
type N = Num< And < Byte<12>, Byte<5> > >   // &  type N = 4
type O = Num< Xor < Byte<22>, Byte<17 > > > // ^  type O = 7
type P = Num< Not < Byte<253> > >           // !  type P = 2
```

## Overview

ts-8-bit is an experimental library that does 8-bit arithmetic on TypeScript's type system. It does so by applying bitwise operations on tuples of length 8 (1 byte) and leverages TypeScript conditional type inference to give the result. This project was written as a exercise in TypeScript and is offered as is for anyone who may find it of use.

Requires TypeScript 4.1.2 and above. Example link [here](https://www.typescriptlang.org/play?#code/PTAEFpK6dv4YpcBQJQc6A+rv2d8tM9iTiCCM0xiAfXE7MfO4l0AHTLbYwApsASlB8aZTL1GhBjfNjaCRDVqMY5eBcROl9OpffIB8OUAB55C0AHICnKbjraJUwrmVZFw6Z7UfNoM48Vip4tFiGzMEAdLjADHSGTug6qWnpZEEAqgDOAJYAdgDmoAAuABYApqAAKgCeAA6VAMoAxgBOeQ2lZY3VOXU5pZUAtqAAZgD27aAAHOAARnk9AIadFSOVpXmtNEEZmPkFrQA2K3kzAEwADDfSALIAkjV7KRLlpaUNOQBcIEXLcoAVwW0VakxGwCOp3O7QAXgAPWYARmApRy4HmSx6B1xGX2eMJWHEyFJZPJFKgKGp4gAgutypttrtSn1QLTQABeUAAOSBIzM7IAJkLzKAAEJ1YZmZGXIwAGglUsqZkuctAJhMoHQrKa7K5oAAzAAWFC66rig18gWgZogsWS6XGgDsCqV0tlmo1GB1bMt3MNAFYzWyAMJW-mC+5Ak4O5VmQ3It2OlXGrVe7Vgc2gcPc2Wm7MAEQjNsLeQAbnGPQA2ZPx2bp72Z3p64vcy4hvUAURLUcmosFKZlAE4607G1rfd2DYbqeguwBHIErE7LOqd6oAMQNi6rKuR1zH+8PTZ0U63BtK7SBlQ3oAA4gaADI9Qfxg9HmUnrVnrNsx-cuMK45Le2YABIGver7uiqNyfh+p4SOeoAQdyV43nejzPtKMFfvB35pMhWFodeoFsgAUpBOFDnBipDghP5IX+eqUSRGHiOKywAO55CBd4ANK9qAABKOTlHuZjVmmiqGt6jHsMx1SCdysx3k+QlPmJEmXIabqXHJqTIep3LDh22b3EJADyMwSYaul0fGroGT6imgBZAbDoE2Y8kJtIFAOuGeg50qBl6P7IT53IFmyllCQAGtM2lysF+7OgZJjIbF3LOneAAKQk8pM0E0YGunOYZrn5e2c5gJueRwnC4pAg1d51Q1TUNWYNSgJUCLDP5OS4SsBR1EYJjcigACQbn9l1KVmKFJi9f1QqDUOJ4APyBNN9yzTU826UtfWVANuGbTY4z1XCCzNXC1igD8Ng3Q190-FNM1CnNuGHT1x2netJhbdYl0vcQj3WNY1LZjUyIYNybWNbdb4ehmmDITDBoAESY3eNT6QaCMdXCyOwajLkttUeNYzj0OyQTV1EyTCZk82tNYyDcI02yNTGnDoCE0juFpohrPc7z3LY7jgZ8wLnW4aFIvo9LEvPZzuPVjLDOC0OtaK65NTK6AmMczj6DRObPWlK0lsstzyKG7LxOBQrjHo-b7NXarOMkpSvt+77HHLD7-sh6H8DUr1DTTD02acT03LXNIyI1RAYdp+n4j3isww5MH6f537EcIlH7Qx36yyFaUXW-Sta3LONKBYN1y0natoCJ1tsNvU3Net4NsNbYn3eYAUlTlpU7RFyXZd6nHfmfc3f1twA2nHdHLAAug3Pct6dy-XIq1wb6Ag8PY3mCL7XoD74qyLH6fw8YJfffX8ih-3+3Z870vg3L2-oB3xPgAr+I8x4TyntHCmEpljWWrrvFea9oGlC3lyc+T9e57wPu3D+Q80G1AwSvLBgDO4gPQfA3+-8j5AK7ng5+e9-7EOAY-UAo9x6TxQJHSBsdlgJXaHAn+19EFxxQZyWhBDf5YKoQ-MR5Dr5EI-jQ7+V8-7v2oaQ-BsiVEAJweo1h4C84F0MWScQjxhjtGztMAxRjrEIAgaXKBjx-K9QNAAa0qHUSY4xQCmInhYyenD7HZlyu0Me-Cr5uI8V4nx5jSjTHGt4sxfjl41A3vvDeHDi5cLZDyZaYSX4RM8Qk3xsT2jxOiUklJf90kBJntUcpJSDQAG88HXEesvZ0t8N6KjwciNpWDLhdMwHgy4bT-6GkGdQLAho2mXEVMaCZgQsDGjaYaRUgYFl4MDG040ipqwbKwNWNpgZFTOn2ZgZ0bTqzv0VNQAAvinGxjzECB1KDxPi6AnmfNgHY2pvIip5L3kI5Y69SggrBUg8Fwj4nLzwXHSuXU0kKlhRXf5NQqlIqwHC1Fy8BkYswFiquaLxl4owAShF8ySVIPhWi9ZlKyVor2XSlFhL2lb3lCgdJGTp5QPnmYPBHJNFAtBRCkVQrIWb3ZZi8RgjgWitlWKuVwrhEoGhci0ovLl60jSXRNJbK1Uaq1XfHVd89WYuWAanFgzxSWtNfi81-kzCauXuMnV4zbWkvtZ9J18ydXzPdUgi16ydXrP9XPB1Tq9k6r2aGz1jqtWnJ1acvVnKalQNgfy6Vq95XZqVTm8VubkGSvxZmhVpa82KvSaqs1pRYFOqPjqo+Maa18KdUaiUVSm21q1QMnVAzO0tq1S69tbqmXNrjcvH17a-Wjq7cvIN7aQ0zoHcvSN7bo1LvHQm9tSakUpsyYEtkvC+VYAFQIrNBb82XorUW0lJby1lovRWlVBoYXVqPavbV7JdWjvfdatthqN5Nt-ZaxU3bAM-umI661Q7B3gZvUg4Dk6tXTvg3HYD86tWLtQzwyDH7V1avXdh0owGt3xrgxyn5UDRLlABQg+99HH1CsGVhWRjihS9W3pgFjAiO74MetRx1aK21op7bUZ1gy0WTppRJldMmt31tAME0JjwxqUezJpGjdC6OMYY1e4RipuNXzYxx1BWBDMv1491R6GnHVYLRQpoTMnRNEpk1JudMno2KiU+WMwKmjA0g+V8oL4BxCLmXKuVkVjgvWLU2yRcx7MCnuUQ+vTDGumwrvTprLqXkHPu5Ell+lotroWqI9ICJw+JcqyXqF8lkGgJYwAVwFunFU5fS1KwVLWUvXrweZ06xmER5f1LIorExgKlbwU6x4Vrl7TePpoyRH9av1dpHRLzISfN+fUVNmbc3M0MKWzWlba3FMbd82NbbWrps6r25oyhH9ysgUu7N3bgHM3yKASV9Rj3bxVYPTVquGbOvZda6D-TGXgc5ah0g9L8TltmFWxKE5-m-u-JfCqIHZ7uvY5ze14tkOwdddx+y6F8XEfijdC+BHdEjDzbPSVxUP2P5feYcvMnNPFRU-J7TzNP3FQleZ6RB6izMA-di3qKCdWGvDax0TkHTHUOZehzjwtvXpUDaG01tuo2fvPeu+227Z7FtAMl8dpHp3lMXdZ1d17dPlEHZN0d6n5vvPnZMNbl7N23sLc6UA3XHv9fWsN-b1RxWhfMLF6jqBUFpda9-ir5XEqIey-l3LkFsOqJS-J8j8X1QoIY5PUrwnqeC149vQThPxeM-cjZwuZ3FPFQx+53bl+y8GdjYq5UQXN5tvs4lG6JvNOW97z52UUi3fSsi4wJHwL0Wnl0hFMsPIkwChRbnwXXP-MYwnFpCKCetH49pc42Qo3h9Q9yNUcwrTFCz-YKAVoqhV-3u33Pw-4+T+7sv7v1tG+2j1HX4v3bl9x-3u3-321v0YV-0AQ-1PwAWAMAOgJkTPQYXgK0UQKwD0XYVTWzF3yFCl0x2SzT2L3T0VwryIIfTL28XVycQRHg1ihGyDniU3G31wP31fUS09wN0oL6zbl4yHmFDwLN3FHW0t1vn8y3mXksj3W5RwJFFjyL0rwoNIJT0TxL0rRfX5RFCzxO0kUpVwO0PN0oT0K0KEMVFmXbmMMEPrxkkPksIMOENAB2QsPg30NMNAGOWcM0KsOz1ACuU8JPRMOsNAA6U8M5Vn3Xxi3QDtAWCvBWFaG2BXzXwiLTk32YJOBOGiNiPiMgwAPPXzRESQOUUkVf2NxgJDyAO-1fkv0KNbyIVfwdzKNbxQMqN-0fxqMwQgI-jQPf3aJXkoVQNKN6IkS-0gI+0aPoRGK6IaLwUwM32iPwMLzIJLza2UMIOWOIJh3gx4MGgGzoOlTjiGzSIyJBCyJKUdX5U4KD24OlT4OF3mLcNdxUzEI5SMEkOkOq2qGiPkKWNUPyNWNb0ULl3UJrzwXuKCN0PgzBJ8KMMhJBHsLMNsNhIWHhKNERNBLhLcKcMPCRJRI8OxPRORLcL8PxKwChJOxCPxLCLAGSJsXEGjBOG2AaBOHXHCJpPzk33pIWMSwUPILS26Q6xUI2JV0oPDB+KFL5Kn1AGLDFMBNLxJ2wjMFDEVELCOivi+y2k5JWzkO5xO1wMVPmiTDdBVOF1pA5JjG+MFNlL+OTzWN+Kr3lO5E1LMABlA3mmxP7weTZMMXEDLHLF4mX1X1ZK9LDk319K5Max5PWKUJtIBN5LUPg1FMtLjOtPiXz3r1VJfnVKlIrCly+J1PNz1KVMCjGndxzFDIrAtNtPFPjJjOayjKBKGzDLcIBhRyDODJDjpP7BjEmCSPbMpA5P7HDJlyrKtJ6wFJHOTLHMwETInPrKy2rwfGlG52lSzN2isLzI5wLLkKLPohLJNIHM+gINjLnJWNrO0ztIoKGzXJRJbM9L7JDPQFDBXzYTMVzjbPvP7LvGaHqkqFhhfSPi-J-Pxhr3NmiG-LhF-MVFAvAt-PSWzBgrphAvNhgvMOgqArgrZBgt5hfTQogtWVAFwsqHGUAogulhwuQp-KcMIvmRIsqA1nIrAp-I8MIvWVorSgYpgr8MIr2VotmD5mXkIpCMEuqX3V+WtAPxlRPKryrUwFAvs2HzbgHltB-K7mvkoLkqqWlSUpQuF2XnUvNhEwUv7iAQQt0v0uiBcy0pMsorMvgw0vmSsq2hguljaXMuk0cuUogo1lcrsoMtkw8pgrSh8rwQ0tOQCp-L4uCtSWsBOBOiKAqGsHeP+wtHjAAIKH5AWAnmPw0R4wwB-2KIqIKqKp6KURfj-JANvyKsquqNKtOnxnyq-yqsKpqovmlTpgqrgOaq6sGNqrbmwoaoqP6O6papPyvjIo6rqOGsKpKtatkXooGuaKap6tmoEXYo6sWuqumrANkT4vvyaqGuKu2oEU8nvwOsas2raN6v7l4ygIgIupGpyqvmRCUrQLuqmsupWqev0gGsmrOq2vGMUtkgmpGPurvwBv7l5gWpBvepmtGrKulnWuhqWthserKo1h+s2r+o+rhtOmRDSmBq6qxpRoAORD4qhsJouuJq0s8kRopu6qptkTuAxs6smsOvBtAEuBeqGu5spqOqvjVD2qRvOv+qGI5qBqqM6p5vpr5pfkuEhsAIKo2pFquo5oRolsVuFuWpxrbkuHRoQLeqJplrqvxolqlsNvZsuDJoVuhvNtFsuBpvVptt5vZsNBut+qFuVs+pfkTFOqdpZsqoZoEUNG+utqmoOsDqvjsl9ves1oju9vlturDoDqNrbiDGjqxtjpTsGkND1taM1szpdpNof3zv9rBtFsNCtsTr+vDqzqNAdtetLtZoeoAONDdsxreq1tRtOmNC5vbsGuTvZuNBDsTqbsbrju7vFobtHprsHoTo1tLpntFuNDVuLslo7ubulWNFzvdoXoHqXqLuaKVsXpVuNErqWo9uxq7r6vrozrXs9u1sGkDDbsbovvHrbkDF7pfrvs7oAMDGHvnp3p-ulVKmjunoLtFsDDno9qVsvt-pXsPoNr3pVsDG3r7pgbfsfoPrQfAeQbPuFoQfvqvsfpvvwdftrurGfp3vQfIc-qoZwa9tOmrH-r9uofZurEnoIYIaAbmqgZjv7rLpVurHgdBoAYwd8NQa-tEfIawckY7rEerDwf4f2o3rmpIaUb7tgelWdGfpgbkdrudE-t0aUbEedGYbpqkfZudA4Y0b0csd4alosdFudGEd3vMZMYkcAdsacZkc8eMf0cUa4a8ZVudDUcCb8fZtmEoZsZZrEZRFAeidAIibMerqCYYbblmGsa-ocdid4bAfCdFtmBcbydZtiYkaPtSYfrmBkfKfyZVtmEUfnuydrtmDUcaYqaIdAGHB0cQdqbScGmHEMZ6ZKdrtMkFv4Zqc0dkWHEybod6cqeHHsb9uGfZuHBcc4faYAOHA8dBsWrEeHB8Z2car2YCcOZiZGdCdOcSdFoPCiayaOdroPFoZLt2YeduDGaMZefZoPEyY+fua+euFyfXu-rEYPCKaBc+eueuDKfBb+cheqZhbOf+YaegdhZVoPFaZRcReuYPHecxaubReevTrxZUYEWerMeUeBYeeRBmewaxYJcWbpohYJbWdpfxb6YAWRG2dcaZfZeeoOe5dRd5dJtxYFbpaFYudFbZcqdlFudmalY6dlCefGaRpBYFvJrlZJa+p+Z6Z5elblrGY1bFb1bBbvq4dVehdNZVYecuHhctcpa+ctoNZEc6OtYxb4bGOuddpFfPsGpBZ9tpp9Y9bReDqddkd9YeajoJtvqDd5ZNBFejd9y+bTtpoTb-yTa5dHsVr9f5czZdaTZOfUcJr9YldzfDa+dbtDaMZjelZ7vie-sxpBaHvjZLurYVeNG1fraLYeeNEBfMbzeueXrrYAf7bRa3u9aBdbZJpdCJb7bLYHeRdcaze7bdYcZHd5afubcLcna0o-pndXbnbRb-tDd8e3dkXthpeVa7a+cgfHc7dPdJcDBZcvaXeva5bCfvaesDH5ffcTeucDALZ-bTb-YlcA-QN5YoePYSZBerCVYpY-bRuSdOfg9xvYZnbg9-bRakkrag4eaEbrZSYPfA4tYI+Q8UurFtZI4w-A4XeKao+lerDddo6A7Re0dvf3bA+lYMbQ9IcI84-JcxdI-7isfw548E4AWdAZYmbo4Vecb3dE+k5JudAzaGYU60udBzZU+Y95edALbad45k5Lc0444Vciew+fdU7PbiajaM5BdmEQ9FbE9Jo7bNrXeldmF7dmcc8KaHaWYs9JdmAtc8786etmFtaC607c4XfWf05JpaZE7tcc66c3bCeM5JoGbk4S+C7KtGeZp9emLRemZ86Toi4VYWdvYpdS+pqfby6y9xq2bM4q5Bf2fi8a4eeHAA8uaa5A869rpuFleedq51uuFg4G5K4AJuHs9Lfy-ZZuA7am8G8GhuF7d+bG+lRuBNZW8q8ZqheS7QbEZuAo9G624ERuBo4ReO-5uuEY-O-25xfVZu968JYDYe4ttlAa544u9lupZa4+9u8k5e7tvdhTYB5Vs5uU87em8qc5o04h4W45uFfu9h9W8ZuREM6R8+7qqZtDpS7h7VCVZx+R5O7Vf1sy8lv250gy5qYx51v1dy9ZfJ5NYq9x91vK51fJ7C-p968deZoI8h46bVBXc54tq9fJt59x-9dNqO-F-48LcPv28jcdtl8mN67jcR5c8J-5uTcl6V7J5V7fY+-F+-YN419lort28vep8W8NG68lf24rbp4t9x9rYJr075-G6bcR7lbt7m51ad+W995N7qsHes8d8D51rHdF4D8t45uneB9D+j7lrO7tbd7W+NGu+T9x43bV5Yf293ee4z7D8W6PZ55Ycz4vei5T8Zpvcj4L4T8fcp5z90TAXaCAA).

License MIT

## Usage

The following demonstrates basic usage.

```typescript
import { Byte, Num, Add, Mod } from './ts-8-bit'

// ------------------------------------------------------------------------
//
// Use Byte<T> and Num<T> to map between bytes and numbers
//
// ------------------------------------------------------------------------

type A = Byte<127>                           // type A = [1, 1, 1, 1, 1, 1, 1, 0]

type B = Num<[1, 1, 1, 1, 1, 1, 1, 0]>       // type B = 127

type C = Num< Byte<55> >                     // type C = 55

// ------------------------------------------------------------------------
//
// ... with math done exclusively on bytes ...
//
// ------------------------------------------------------------------------

type D = Add<                                // type D = [0, 1, 1, 1, 1, 1, 1, 1]
    [1, 1, 1, 1, 1, 1, 1, 0], 
    [1, 1, 1, 1, 1, 1, 1, 0]
>

// ------------------------------------------------------------------------
//
// ... but can be remapped this way ...
//
// ------------------------------------------------------------------------

type E = Num< Add< Byte<127>, Byte<127> > >  // type E = 254

// ------------------------------------------------------------------------
//
// ... and used for stuff like ...
//
// ------------------------------------------------------------------------

type FizzBuzz<T extends Byte<any>> = 
     Mod<T, Byte<5>> extends Byte<0> ? 
     Mod<T, Byte<3>> extends Byte<0> ? 'fizzbuzz' : 'buzz' :
     Mod<T, Byte<3>> extends Byte<0> ? 'fizz'     : ''

type T1  = FizzBuzz< Byte<1> >     // type T1 = ""
type T2  = FizzBuzz< Byte<2> >     // type T2 = ""
type T3  = FizzBuzz< Byte<3> >     // type T3 = "fizz"
type T4  = FizzBuzz< Byte<4> >     // type T4 = ""
type T5  = FizzBuzz< Byte<5> >     // type T5 = "buzz"
type T6  = FizzBuzz< Byte<6> >     // type T5 = "fizz"
//
// ... etc etc
//
type T15 = FizzBuzz< Byte<15> >    // type T15 = "fizzbuzz"

// ------------------------------------------------------------------------
//
// ... or something more elaborate ...
//
// ------------------------------------------------------------------------

type IsPrimeOp<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
    B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = Num<B>         extends 1 ? true  : 
    Num<Mod<A, B>> extends 0 ? false : 
    IsPrimeOp<A, Sub<B, Byte<1>>>

type IsPrime<
    A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = IsPrimeOp<A, Sub<A, Byte<1>>>

type P0  = IsPrime< Byte<3> >      // true
type P1  = IsPrime< Byte<4> >      // false
type P2  = IsPrime< Byte<5> >      // true
type P3  = IsPrime< Byte<6> >      // false
type P4  = IsPrime< Byte<7> >      // true
type P5  = IsPrime< Byte<8> >      // false
type P6  = IsPrime< Byte<9> >      // false
type P7  = IsPrime< Byte<10> >     // false
type P8  = IsPrime< Byte<11> >     // true
type P9  = IsPrime< Byte<12> >     // false
type P10 = IsPrime< Byte<13> >     // true
type P11 = IsPrime< Byte<14> >     // false
type P12 = IsPrime< Byte<15> >     // false
type P13 = IsPrime< Byte<16> >     // false
type P14 = IsPrime< Byte<17> >     // true - pushing recursion limits here
type P15 = IsPrime< Byte<18> >     // false

```
