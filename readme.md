<div align='center'>

<h1>TS-8-bit</h1>

<p>Using TypeScript's Type System to do 8-bit Arithmetic</p>
</div>

```typescript
import { 
    Byte, Num, Add, Sub, Mul, Div, Mod, Eq, Lt, Gt, Lte, Gte, Lsh, Rsh, And, Xor, Or, Not 
} from './ts-8-bit'

// Arithmetic
type A = Num< Add < Byte<12>, Byte<22> > >  // type A = 34
type B = Num< Sub < Byte<47>, Byte<12> > >  // type B = 35
type C = Num< Mul < Byte<31>, Byte<4>  > >  // type C = 124
type D = Num< Div < Byte<16>, Byte<8>  > >  // type D = 2
type E = Num< Mod < Byte<19>, Byte<4>  > >  // type E = 3

// Equality
type F = Eq < Byte<10>, Byte<10> >          // type F = true
type G = Lt < Byte<10>, Byte<10> >          // type G = false
type H = Gt < Byte<20>, Byte<10> >          // type H = true
type I = Lte< Byte<10>, Byte<10> >          // type I = true
type J = Gte< Byte<20>, Byte<10> >          // type J = true

// Bitwise
type K = Num< Rsh < Byte<64>, 3 > >         // type K = 8
type L = Num< Lsh < Byte<23>, 2 > >         // type L = 92
type M = Num< Or  < Byte<33>, Byte<7> > >   // type M = 39 
type N = Num< And < Byte<12>, Byte<5> > >   // type N = 4
type O = Num< Xor < Byte<22>, Byte<17 > > > // type O = 7
type P = Num< Not < Byte<253> > >           // type P = 2
```

## Overview

ts-8-bit is an experimental library that does 8-bit arithmetic on TypeScript's type system. It does so by applying bitwise operations on tuples of length 8 (1 byte) and leverages TypeScript conditional type inference to give the result. This project was written as a exercise in TypeScript and is offered as is for anyone who may find it of use.

Requires TypeScript 4.1.2 and above. Example link [here](https://www.typescriptlang.org/play?#code/PTAEFpK6dv4YpcBQJQc6A+rv2d8tM9iTiCCM0xiAfXE7MfO4l0AHTLbYwApsASlB8aZTL1GhBjfNjaCRDVqMY5eBcROl9OpffIB8OUAB55C0AHICnKbjraJUwrmVZFw6Z7UfNoM48Vip4tFiGzMEAdLjADHSGTug6qWnpZEEAqgDOAJYAdgDmoAAuABYApqAAKgCeAA6VAMoAxgBOeQ2lZY3VOXU5pZUAtqAAZgD27aAAHOAARnk9AIadFSOVpXmtNEEZmPkFrQA2K3kzAEwADDfSALIAkjV7KRLlpaUNOQBcIEXLcoAVwW0VakxGwCOp3O7QAXgAPWYARmApRy4HmSx6B1xGX2eMJWHEyFJZPJFKgKHEAEF1uVNttdqU+qAaaAALygAByQJGZjZABNBeZQAAhOrDMzIy5GAA04sllTMl1loBMJlA6BZTTZnNAAGYACwoHXVMX63n80DNEGiiVSo0AdnliqlMo16ow2tZFq5BoArKbWQBhS18gX3IEne1KswG5Guh3Ko2az1asBm0Bhrkyk1ZgAi4etBbyADdY+6AGxJuOzNNejO9XVFrmXYO6gCixcjkxFAuT0oAnLXHQ3NT6u-qDdT0J2AI5AlYnZZ1DvVABi+oXleVyOuo73B8bOknm-1pXaQMq69AAHF9QAZHoDuP7w-S4+a0+Z1kPrnjMuOQ3lmAAS+p3i+brKjcH7vieEhnqA4Fcpe163o8T5StBn5wV+aRIZhqFXiBrIAFIQdhg6wQqg7wd+iG-rqFHEeh4hissADueTAbeADSPagAASjk5S7mYVapgqBpegx7BMdUAlcrMt6PoJj6ieJlwGq6lyyakSFqVyQ7tlm9yCQA8jM4kGjptFxi6+negpoDmf6Q6BFm3KCTSBT9jhHr2VKAaet+SHeVy+ashZgkABrTFpspBXuTr6SYSExVyTq3gACoJ3KTFB1EBjpTkGS5eVtrOYCUrVdV1exywkvVLWtQg1KVAiDTTD0WYcT0XLXNIyLVRAbXjRN4h3isww5M1E0LfVHVdT1zbmssBWlGYNSgJ1wx+Tk4rLCYHIoFgO17ZUB2gENAD8oDIqAPxnZgF0IvtgqHY991Dc9WAFJUZaVO0y3de0vW+ssvmCttu3vVdn2gAA2v1tHLAAuidL0YG9H2HUj1wKtc6OgD9T3Y7UcN48jhMPSTZN-a9VMI-jyJE-TN3k+dzPXUjbN06TD1c5gANAyDKCdWDEO6v1Vmw5dvOo0dpSY5yFO4yzNPs4Lv3qzziMEwqyIc49jM4-rrPa-dpt6wrBv88bgs2-9gPA6Dq19cs8XtPL8OK8saMq1j3N2-jtPEzrwvm6HWsC9bUeUzHfNW0LZuJ379tGxzusu2Lo2LQXtXiI8wztDN0zzYXVdIO74NraAjx+Z1+oANaVHUkzjA3pflyDkse6yOXtIDvvU23HddyXwO9yd3fT6U0xIzU6ME+jEsrXXXl7aPmvj53c9lwv7Sz1Ph+L8vfNr-3m+sqfvf6gA3hT1w-MjTpZwqFPIq-hugJc6MKmoFgS4P9+YGgAZgCmBof6XAVEaCBQDMBGh-gaBUAYEGBCwAGH+RoFRVgwRTKsP8AwKidAQrATof5VnZoAwIABffO1cmHtXQP1bivF0DMK4bAWu0tqibR3v7UogcRHK1EUrCRGNZ5Iwpv1ARNRV7ylkRtQq21L5KKwHI1RCj-4aMwForaCjwF6IwAYtR8CTHK3kUjdBlizEKPwXYlRhikZkKUWvdeUt67QzMBTdkSdJHCLEcEwJ4iMZylkRbZGoSQkB1iUEwJa9pHKNKD4pGNJV60VXpjCJmioZ+TMOky+WTjY5JSWkjJ-8sn-zKXk1JBSingKyeA2p+j8kwyKfArJ8DWmmPaYUjJ6CsnoN6crCpSN8FZPwaM-q4yyFZLIWUjx18+GgDln4qJKM4kxJ2dsvZKtcn6M2bshJ+ywmnJVigZJdS5ZFOJlk4mMzli3IycbEp6MnmlBeUjKp4ofkfKcV8n2jSIFiiRi0wF3yul-J6ZC4FgzQU2IBYcvpQKBkTMRdMuF6L5l-MWe43h9dva+KwP4jO+MTnnKpcrABkSAlnPidSxJVz9QyLqcSlGmS2TZMBRysFbzuWlN5dMQpYLfmVORSkvl4KIEZIhSi5W0roUZNhQq-q0qhncpGcK4FYLJncqxWqr2IrOW4oyfiiJyyN6rJEuUQRBtKWMqdf1CBmEY6N0FJ1YOmA3Xks5vdHar9bWFIUQKnRECjERqRtChRmqHFRtxfc0AQ8R6PCMEYQlWYNJ2o1kIplDKTmuqiR6r1assC+upndSmr9s2FNpgopNoao2-MjQqBRMakVtoxRAlNZYzBpozYw7hw7xALiXCuFkldh3MMzayBcJLMBkuplsi5+bV3xNpZo45Bad3ruZbPJdmsLT3TQtUV+gETi8U8QPXUz4LINAXRgQ9ebnW7vOZuo59K91vtfQcimFbNYloRCyrkz7EbHomEBM9FMimPERXBkmSdw4czvQ+mktEFS9v7emhOsH4MfM2Q7FDXy0MYeTcPPtA7cMZLg1khDhGU4XuAtRpGtG-n0aQ1nQWp6E5MZvNem+t6tobK-WusTNK1Xbu-dJtdtLZ6obMOh8UpDB0rPrs+ZUIm-UrvE46l1knRO-t0+EkDyN51KbFK6Z8inaJGEQ9p09Co+Mcx42nJG5nbMKmsxZuzmy+MKlPS5kiT1MGYD47O3UkF72Pr1IZvTP79N0u0-FmTG6FUAeukB0zYHDoQb4yxtjYKOPaeQ4LKLpHlPkdTThtzNH8P2eXURsrJGbOVaw1R2rrH6ubNpo7e6+XOuFa6w1zWycbpBevLxqDEXqiQRizl6JCWlsXI-aYqTxnUuJdnuV1rYoVMzfvFKLTy6UsbdW+KdbRmrtbdZR58Uro5s+ZG7zRzkHL2VAm9BrA7n5y7Ye1tJ7fmoMBZIp9kLFNwtTundXWkwplh5EmAUKH0PC4HY3NGE4NJhTA3tRS3dqtTohxK0TFOv8I5p1zZnG6pP+bk9tsTh6NPtYU4Y4z8bgtf6OxZ5x6ncdka05Jtz7TtOuP3U54L+ny7eui9jlzyXo2HYy7G3L3ObsBOrKx4KaLx3RuneuyZrdcXluyfS8WpuCIFUxRjv1Uz6OTiY+x8CvxXW6PnYy4jKtv0hRa4q3tqrlHXSJhQJjJGFkrVeKzJr+bl29eFoM8l43+vLnXMXcKaLFmSc3UsZr9PZHafZ7T77hUsCs8Kpz0Xw0RMC8+923AqvZfC+19ACQ0vfjG8Z9ANQ1vpL29kffq3jxnCUczvQLaBYl4VitG2Ij5Hw+Fpo4x2PifU+RWU7x9Jgn8vebh1J6VoXjXM8RzFwLhOa-ZdM4FvvhXRtd-M63wbHffPlcS6Jwf3nfXY509f6N6XT-esv6ZiTkVyfyazTlFjVzUyzDH211JRj0TzjySxO3gOWzdzN09Qtwpitz9Rt1njtxOCXzLhXyd1JRd3Y1QJjk9xC2gIr3a0DwzRDzDwOzH2jyN02xQPjyQLYK4MDiSVZQpmoKb3DksQEI73zwVRELIxLwPHEJBFz0q1QW70wAkMq1wUUIwGUL9xb2kP4NkIry720KwA0NIXr2DyHTn1R3QCjBOG2AaBODXCH3MNR3V3risJgMXTgO4N-QgUQN12QK4POzDFYI23fU-iwCLCCKTxCNM2sxDAVALBMBjh43ulcLQ2FD+zIyj1iICnTTiJMFfhpAOysJYIT08JS3OwtAiNj32Tk31BSLMEHGkLZGSjMEaMszMMcPn3QFLDLB4gRyRwcI6Pn2cMLHLDcKfQ8OCLSx8JfSqI3wVUCJKMmIQO2ylB8yiSSNAG6Oi2YJ8wyLSKyLonTTyOzAO26OKM4KWPxw4N8NKJQNMy2IrwaPTXaMGLanEHuD7GjEmFn1eIamGNZA+Jrx1xmL8KiMN0WMiK8PmImMhMSQiRWOVDWMSOC2SL7G2JBHSMq0yOaMTBqzZEKL7HOJuMuLmOmIdVBK8NM0BLkL9yeMHQGN+NanEBDERzFlLjmgZMZKWlvGaDyDhEqEelZWJh5L5MqD0lZWiElN5P5P5klOiGlIFLXigNFJkglKlNFJLzlIVP-hFP5KNAwC5CRi1JVIVGNP5PAV1MqADANORjNMqFULtPgUtKrBtKNPVP5JbztPQUtNSjVPlNFK7ztPwUtNmFdLtP73DKvmtXritFx0W1uP8JTwwDlIbWe0Rm+htFFNNmRnOxTMviiQzO1JCyRlzMlPDQLMFgVJkh-lLOiEjQrPugVP1JrIVTzPgQbMzI9OLNrNjTTK+krIDO7NbLLIxQ7IVNShbIpjzLITHNFNDMnJXmsBOCuiKAqGsHDxvXNDjDPwKD5AWGBm9Wjj9SGg50fzPMPzv2-2ukFOPwvN53PPZyv2unFLF1-wfLPIAKPOplVNvLZ3fMP0-PTmpn1NPMzxF3vIAtPyiWtI53AvAvfMArPxdNArZ3grvK-0AL9V9N-OAP-MfPv0OlDJQsfzQvvMQqiQ8lgrvNIr3wIoeirU5zAvQsvMwupmRAzOVyYogrIqgpjhlGIpvz-PQvIr4pkl-N-xopYq-M1mRH1NfMEtwuEt4r9WRGtJwoUuYvwqvPTJdPku4rfMgqfPTNSnEuoqUqMq+lDL0tIpopEpUo8nUu4tsuUupjuD0oMqEp4osr-g4rgq4o-Jcs1lVBQsUs8tou0sOm0iotQv8sMrosuDks-y4ucu8suDUv5zMrCqkqAqCt0vP3f0EoCtSpMoys8tCvCtYqCqsqSpiqyq0squfIctKoksKrioisNAYpatqqKrooTGiuAPKuyrPwND0ncs0vgrsu-LEuavGraoasRmNBCtmq8t6vSs4v0tavqukuugNDyrJ02o8owu2oWpKrG0OoOsms1gNGqsYrqomsCp2qavWpsrmuOsOiNE6sysOsuuuiNF8q+ouoesRiNFGvyo8vuu8qNGmvWvBtepyt+sSv2u6sBshrWr8rKrhrPyND2q6vRoqretAGdH6o0oKpWvaqNBurwvKp+uBqeskuRq2vhsRgDE+rupRrooDH+rZrCppsOgDFBqRvRoho5uhrxpJvxqZr5sRq6plqGugrRvFsVsZrPwDBxsyupqBr5tOpeoZqOslub0ps2oGsxugrpqNqVr1qQtZtxvZvaqrC5ptp5s1s7wFsdo1u8qrFFpJuNrJvmsOkkgEo2tJstqiSrAVqDpIrlpjirDVrqsjuVtDu1oOq+t5s70NuDpTudqrDNozqcqjqwtZsGuDtTqdC5qLrfJLtdoBuLudqdC9rzobpDpjidGlvNsbpLvDrFpru8qdFjtlu7roqdCTtJp1qbqwvTp9vjrHupidBzsnv8tTtmGturpP28pRGiofLxsXqru5orudtmHrtHsKsXtbtzq3v3vDthoHvatmFjtCvPrXuHvvoXv3vTvjofrotmBzvfpfu8qHELuSt-roqHDLsAevr9tABMkDvnr-NTqHHrsdr3r-tPp9o-vaqHE7u9qAfQb7uWtXuAeHqpuPudqHAnrwfzupiHDnvIYTr4uuGXu5vwfav3AduTu6tTv3B3qLtwo4euEPrYZ4edv3FPqnvFt4cvtivYaEeuDvskcEe8v3CfrkeIYUeuDfqVvkbov3G-o0ZUa0f3CWoZs0eYfYuJqMb0ZMZ3s3rEaEeRAQfVosYgfYpQYcdgdscwYbuMaceRFwYxqkYUeREIbbq8YJvYrIb8ZCf1vYuoYiccdCbcpqrdooZksuFYZHpsYUeCusrAcibPxlH4fSf8a0YSugawbccyYkdqsno4cuFkaqYyeKaUfqaKeYcuHUYjrApqZ0Y6ffw4YNAAZ6f-yEb6scrwqGYUZGtKZ6ZVycdsg3rYZIr6Zcbjs6eGY8fpvGa0d2sDvOt6eGaCdzsWeGfCd2c2eYYNBidOa4wUY+qmfppmdCb+vmd1tWZua4Yttea0ahrMfLuua+ZEerrOacaNEqdEb2ZubqbBaBceaaahb+eYYpqmd2YeaiaNG6a7uhaiZZsMYxfhacc5p+ckcxbyf5p2Y+cvy0ZKmef7uJYLIDGWZpbxdCYDA8cZYpeYdVruYEY4YDAOZgdpb4oDHCf5aZaxZiZFfZacarAYesfBa0ftupZXo4arHeaDrguVYKdlYFZUoDrGt3tFbybDueaPsldCZjpxaVaEarCaZNZRcNfaavu1bYuzsVb8adZkqdAGcdYNYLNLrMe9dNaiadCsd0bleYbruNbbvdevJbotbdZ9b4qdHWajYTZUt7rJcKejeMoOZ-rDacadBObAaza+lnv9aLdTbYqXqRY0Y4fXtMtibzdCdmFVaFs+eYYPsJczYrZktmABcKfVaEdmFBbKeLYelvsMcQe7evNmFhZHanfTNmHadQbbaca-sjeadHeRH-rjZgbtYLJAc7d3Y4agb1aIcDbyfgdddlb3b4qHAZbwePdZYfaEaHF8fufna+iHD5efYUdIbjevePfFZ-fivoYzZ1pvb9RuDSeRY-b-luAnYEdg5uE1cQ-PaiRuD7e4aQ+uEqaw7Q5jhuDqbw4g9cuuBtdQ5I6CrUYzavso+fOuG6bBdAPioMeycboUtTtSdAfY9Qs4-4r1a7uY-atSfsfjd4+dtSeWcE6Q9Us7do7498f7qE4gdSZzdDbo8RlScLfMfw8g63bLZ0408ioScFvU849SfXeft09cqyfyt3aQ6iscvs+s6CpKdPdcaM7-jSqvZyfM8hY8-M9nc8Yc6XYC4k8uHRbC9Sv6f-d84k5GdKuI6Q8mfc4bc8+0lE9o+S-vbS848DAM9bZc+fO2YE+CeS+-dy-i+FbK6K804ucPbi9StudS7ds46efrdzeU4JoStVc66Q++dGZyf68w6G9q8ipBfXda4k+xti+afS6Jqc9G-m4dbKa6-1oSsY9W6Q+xbY6SbG7-gJcG7m+25DeO-E9SqpfreXfO-ivpZ3dW845ZYa7m8AvAPaCAA).

License MIT

## Usage

The following demonstrates basic usage.

```typescript
import { Byte, Num, Add } from './ts-8-bit'

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
// ... with math is done exclusively on bytes
//
// ------------------------------------------------------------------------

type D = Add<                                // type D = [0, 1, 1, 1, 1, 1, 1, 1]
    [1, 1, 1, 1, 1, 1, 1, 0], 
    [1, 1, 1, 1, 1, 1, 1, 0]
>

// ------------------------------------------------------------------------
//
// ... but can be remapped this way.
//
// ------------------------------------------------------------------------

type E = Num< Add< Byte<127>, Byte<127> > >  // type E = 254

```


