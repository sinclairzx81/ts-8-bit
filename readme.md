# ts-8-bit

Using TypeScript's Type System to do 8-bit Arithmetic [Demo](https://www.typescriptlang.org/play?#code/PTAEFpK6dv4YpcBQJQc6A+rv2d8tM9iTiCCM0xiAfXE7MfO4l0AHTLbYwApsASlB8aZTL1GhBjfNjaCRDVqMY5eBcROl9OpffIB8OUAB55C0AHICnKbjraJUwrmVZFw6Z7UfNoM48Vip4tFiGzMEAdLjADHSGTug6qWnpZEEAqgDOAJYAdgDmoAAuABYApqAAKgCeAA6VAMoAxgBOeQ2lZY3VOXU5pZUAtqAAZgD27aAAHOAARnk9AIadFSOVpXmtNEEZmPkFrQA2K3kzAEwADDfSALIAkjV7KRLlpaUNOQBcIEXLcoAVwW0VakxGwCOp3O7QAXgAPWYARmApRy4HmSx6B1xGX2eMJWHEyFJZPJFKgKHEAEF1uVNttdqU+qAaaAALygAByQJGZjZABNBeZQAAhOrDMzIy5GAA04sllTMl1loBMJlA6H4MtAAGpQKqRJzQABmAAsKBZTXFJt5-NAzRBoolUvNAHZ5YqpTKNeqMNqPRBQDLjVzTQBWK2sgDCdr5AvuQJOLqVZlNyK9ruV5s1fq1YH4GdAACpQObjSaZZbrdUACLxh11vIAN1TPoAbFm07M8-6CzJkR2tXNK1zLtGbQBRRuJyYigXZ6UATm7br7mu1yOXoAApOWx2bqegpwBHIErE7LOqT6oAMRNZ-byuR1zXL7f-Z0W+unK5r5ELlSnaIFKlvUAAHETQAGR6Rc01fd9pU-TVv0LV9RQAjAuXGS8cjA2tQAACRNCC4O9ZUbiQxCvwkbU7hMLCTWA0DwMeGCpQo5DqJQtIf3Mf9rkAsoQII1kAClSM4pcqIVJcaNQujCwYwThJYsDxDFZYAHc8nw8CAGlZ1AAAlHJymfMwO1zBVTX9RT2ELaz1RMU1hNmcDoOM6DzMsy5TS9S57NSei7LMAVLmE5cJ0I+5jIAeRmSzTQCuS009YKA0LFLpHdMMzR3cDuWMmkCgXLjfTSqUIz9VCtyCgAyUAI3ymtWXi4yAA1pj82Uqpfd1gpMeigoAPRDPKTXdcCAAVjO5SZyJkiMAsykLCwAQkuFbKxNIKgQKfIigKSpBWPMBKUuq6rs05YSWuh7HoQalKgRBpph6QitJ6LlfzYZFzogJ7gZB8QIJWYYcnukGYeul63o+3obW+hbSjMGpQFe4YypycVlhMDkUCwDGscqHHQF-AB+ENQB+InMBJhFscFXHkVAanfzprATpbSp2nh972k+1lvtKwV0cxpmyZZ0AAG1vrk5YAF0CfpjBGeZ3HZeuBVriV9mKdptXaklzW5Z1kN9Y5o3idN6WteRXWrcNrmGbt8nZcdy2DbZ12MB5vmBcRr7lkSiXSY9hW8dKFXOWNjX7fNp2Dc5+P3Zl7WFWRZ3fbTiOM69vWfZtt384drOc5L-3Kl5-mUFewXheR5ZuvacOpcj5ZFZj1XbbLpOKed1O+47jOLez4u-ZN-vPeT6nc5Hs3Z+962p4Duv0FhrfLvER5hnaCHpmh7eT6QIOhaR6pHjK16TQAa0qOpJnGUA975w-+Yb4PWRm9oa-bs2D8n4vzfgfUo0wCav33h-WWNQlbayVvXBGF9CLcixgAxOQDn5QPfuA9okDQEwLgZ7RBX8UGskIXgk0ABvY21wfhy3dBXBUxtkQMMzoaJWCpqBYEuOwr2pouGYGNqadhlwFTmiETwzA5p2GmgVBGKRgQsARnYeaBUHYlHGw7OwiMCp3RaKwO6dhHYnbcMCAAX0BqfGxiBbqlF0vpTetiXEwHPk3aoqMMGd1KN3Px0d-FRyCcrSBstjYo0WujBB8pwnLC8TUEhMSsARLRgky4Ks5SxNKPE2WgikmYBSVEyR+SMCFISYokp0ccmaMqWU2WBiYmIKQY3S+bIypmGNuyGewTfEBL6T0wJytMnJPTlrAZ-Su4TN6T0xBoSslizMLLGkCC5IIIyfM9pSySGrOzus5JywFlbPSas9JeyCkHM2cswRqzBFnNKRc8WWzJGrMkXc6OhzlmKNWYot5otLmy00aszRvyHmLOWQY1ZBj1lNLIR40AYdOmjLluMlFkzUUx2GQUpF8s0W4umXiwZ+KY4oDmfs0oYctl61WXrEF5K25bOzjspWtKKXLOOeKWWpzamh3pVcoRYpcnMu5XSsFstnkctecK1lssvkcp+VK3lAL+VKpZYqiFHKoWNPca01uHSsBdNHmMglUzCWEq4eE7F6LTUmujrMk0YSyW6vlistkazhVOoFYy11uz3XTEWQK9lbKhWYvuaUD1gqFR8tpeG8VyzJUhujuG2Vnzg1ZPDYC11wLfX0oFeq8FqaYXILhWZco3iM5WpteioR7F+7X0FK9XumAa2GsNtTDGDCS2LISV6tJQiEnXNqGKvtMrh0ZoSeqqloBf7-0eEYIw2rCI+VLQnHx1qK0zIVM2s2daG1xywFuxOVMTYMKXYsi2CTJ3duHey-tw7xXlNHcyhU06WxmFnfO6xriv3gHEGeC8V4WTH2-TYhdrIzx6swAape67jVVoTWKS1sGkNErNSSk0UHE4IepupWmEw8IaVha02C8UGgQYwBh1dlbkNmvg4hlDVH6MbuNge8mO6ERoa5BRmWWG8MnHwlXOWyzHjKuE-rGeFsi7U2I6Rmkcln1-1fe+gTWzhOrNE9ir2E8pPkpk3JqdCm31zuU0JkTzKNNz14-xqeKnTNiZbRwrTIlQICdwnxgjRaiNo0Rd06jDGaMWp84x3zcGOOgGk2YWT4p9EfsI4uqU3n7MwaC8l81IzAtruC3i81oTwORbFF6WCEW5JGDs0vdSCpXP4Wdjh6zuXisKkK3lkr2LKuVAVOparolcPG1a6Bm0ZESNkbZHRjLyX-NpcS5lsbUzUtNqRWx0LXHcY8da8Z2WqmOXqfExZgbumov6ZnUZ6zJm1NmZnpp52u2iv7ZfYZkwx31u2exePZ2q2HsbYFVt+zhdOvOanr15p39+tef1SNvz4PvqzdKWDpLo3stSUG3l6LfXqhkWVAl6DU3Rvdyh7adLEOpvw65LLOr4ovRkWu-l0ridZblcs5UX71Raunkp+TtGTXqce1a+10SjPutYAB844DtjaTCmWHkSYBQgPC+3ij0Ad5kwnBpMKPmZajUpcberZ7usLMcKLlPFdBcdeDwNsvfXed7Pj11z9gThvy4hl1y9232uKYV1Nzbg35nXcrwHhPT322Hc+4c-rf332s5u+psvP3xt15y+V4KQbGOaew4JxigLk3psp8hwmljMs2MJo6v3b6oWFcnCVyr+lnTHunZz0io9nMhQJ722KeTh2s7zpVrLeKhaWmEXj0NpbyKsep9xwh-HWfkN2uJ504UiO9MScqfHuf+3C6L9n83hU4iKZr6b5T2yusd-L5b+WA-Cal8b+aqfmfu+kegFMdvs-6+9+gCYQ-lATShcy5PuIJ0CxgIrFaG2El2ly-xhjl1LxOF-3-0AL9TtyHw1z3VLkt2N0kwHnN0Xhp0Lmt2TlDyXitxN0jwu2d3O3DwILQJDwtzwON0cyjwoIwI9iwKDwkzoKQKoMDxoKd1wMwNIJoKILXhrkDkB3IRtF-0T1B3H2HxCwm0x0z0kKGWY3mxvgRALyRWL0gQgKgIPhgMr31Wr021x1z1xnr1w1EIv1u1nXb3fyMC7x7yB2qF-wHxhzkJS1owkNkPcKnzlmNlMOfwXwTR8Nv1X38JBCP03yvywACL03kTfwiJCIv3URiMwEiP2z0USIwGSOP3vzfGCIWFCJfyvw-wulAO-3QCTBOG2AaBOBvE-2KLAKELhTKLEMgycPcLhxYWkOT2cLaONjjDcOxwYyEWNgbD6NT380gUKxjAVDrBMH7hw2pkaJk2FFZz0370mIqjnSmPuzZDlzKMcJGInyJVHxaP6JC0gQWLMCXGyLZH6jMCuPy0-VqNhnEGbBbD0glylxqMeKejlxeKaPI2ONGJm1cIzxOMJwTV6JBMBNOKkmVCayRTmNAF+NIwcKaxWKWLWPkjnS2JjB+NbD2MhIOPGyxX2K6NtVCyROf0uLnQeK+OBnEHuHnGTEmBANpJunqNaQZN3yT0o0JKBPTxkNBI8PBIBN5Oz1CzR1Z3hK63mPnEGxRPq321WJuMzCO22PZNinnHxIFKhMn2BO1NFKy1C05LyKpI-U+NZJunQBjEl1rn3ihnNItMpGpEImaDyDhEqDZntT1nAldPdKCntWiEDN9I9IVEDOiGDOzh9LdMqDsgDKDOjK3zDODPSSjPdPNGwjliTOjOiKzPdMEVTMqAjAzNllzMqASNLMkQLOHDjPDOjNSNLMUQLMGhrODPv1LM0QLNmGLNLNfx7NIQ81QQTDgJxVaJH1JUwDDIvU5xljZmpgjNw1llx0nJISRVnMdATIXKXMDN7VXINmDLsnYS3OiFvV3LnOjPTMPITWXMkVPPXPdKLMvONmXMUVvNbM3KvO3KVVfOjMGkfKwGXIMW-PdK7MfPgWsBODJiKAqGsFsOEOqCXDgIKD5AWD5k12nhbV-FNwkxQJwu93QNYMTk9MINwuwrwpwMoMTn9Mj3wNItovIvoJlljOIsDzorIpNy4PJnTKwuoJIpQJYK137iLPdx4rYtov4vQrNmrOop4N4rwvErgObOYs01kuYOIJbS7O4rYsYLErUrNh3GEq0pUvktXKPQcxEtYvwoEpbWRDXKj3MpIuMv7l1Gku92UtEvooIvJmRDsmYvwO0r4t0sIvTJcrcv8rksCq8qLKUpkvcvYooq8uHBctYrCssoksIsGl8twpSscusq7JCqyocoipnJ3GisMtEpyrNjuCStIJooCo4plkuFssYOasKvqtxlVE0rctqvCrasNB8rllCvsp6vioauCrQJEuyqKvaqioGoKpYrqpGvasSt9wmtasWsNAytmvmvYLWoYvaryvGp2u2tUt6suBKq2r8pqoWr2rNFMsuqOp0t6uLFKsGvKqmrNCCmqtiu0oqsThykyu+uus8sYrGrMsBuGpusjAMpSqurishuWr11hu6tSrgNNE2rNyRqRt+vJlNAOrBrCp+vetNHOrsuOqxvevNDurmuRuxplnNCaupvJt6vNE+pWtcqGpRqRXNH6tJu6sJuZtBtIq6qZvWvNBmoxoepFpuvNARvupaohuBtxiDBethv5tFrxospipOtFpJphslrhsVuaiprJv1s5sEoZpNuFoNqsrNgjFZsRu2qtrNpbRWgMr5qlsNojEFq1p9utrSvJgjHFtevuu1puojFlrmqdtptxgjHRoJt9udtto1tVoTujual1pTtNrTo7GNrlo9ptsTg7AtrzuOuzvtpLqjveo7B5teuDo8oLvJmci+s1pYuzqDpUvMuzojpNqFvrv9plg7DjsxrKsTsLuTvZvBtHsbozonuSr7oUuNqds7vevdAtqXtnrTvdHLsZo3pXprp3pos3u9sdups3vbpPpHs3u7pDuXt6vdCHonvjr9oUvHrrt3rvpnrfsPvetmFzp3o93WpRDdv-vnqRVmG3sttvsAf3sgffsAePvdrgZutmHPsQe-t6tmG7qtvlqnpllmAfuwageQfHt7ovtwdxlmBntIZwbTuXEXtWqQcNuXDXoYfQfWuik0pLrYZuuXBga4ZqtoePtrqIaYfPuEcYYbplmXGvtkq6toYfpbrkfeuXFftkYEeUc-rUdbvetfD-tgYAZutfGLuHqUd6tfAgfXtMfWtfBgcsfUbMeuAQaGqscMeuFQecfseseuCwY8e0YcYId8YMcNtfBId9pceCeuCobCc8cMYwnyv1vCckdZhsuhuib8esecsOuoZieCe8uAbKsSf7uSaEcjpyaSZDGRDEdKfSdiZkYvsKbgJsoUczoadXORFUfqbKaKYqc0c6ZqeCaqqyZitaacsavyYrtAdGYsYYZGesv8lScfq1rTurE4eGaWZ0e2nyfEaCfKZlB8aOuDuWcuACYOfWbMcuFCdiqFqOaiaueoOWdNHobudcoeZYeec4OsdNAgeRqyoeb4eHuuZ0YtE6oBfuaBaqZ7rBbMdNDqZ+ZeaBeadnt+aBY6bhY+cMeJoWbRbdzMcptWdNqhesfpq2dBe9lxemYJfhdxdsYTsJcMfNCcZHrpeCbFvGY5pxaJf2dIcBdxZOe5eZd2fNEuZwYFe6eRHNFuZFapesYjCealfReCYjDeflY5cMbtvxZvulbVf+cWa0uWa9pBd1Z5ZlYhc1YVd2fDvxa-tVcVcRetbJZlY6ftejzVd6edeWZzo1f-o9eMcnptd2Y7Apbnq1eCerqxe9Z0absOqfvNbFY7HcdgdjcaY7H2Zjf9bjZObTYdcMY7EubQfTeTdufzezeCfdCeeLZddLbeYreWa3qtczqTdXPdB1cIZDd2fdBKYSdFcafdAhdbcbacvdFhdYYLabcReybbbFfdFRZHZLfbd6YnYHdyr0fluauWaAYBtXe7dXPAcNa3cncadmBpb6aXbNnacZf4bnbFZQbZdOYPZ3a5bWfvacvwfDbvdPcItmGFafY-a8soZJffdHacrob3Z-aA+suYYWfEd-eKu+Y7vYOWd4dveDcrd2eXE7cUfA7PeXFNa0dQ7FekfrfBvw8aeXDtbw8Q6dYo50eXDdeo9OuuD0bhb4PWpuF9eY6w8otuENY46vbgJuGPd45I6RRuEZbsb45E7cYA6fuE-7huFTZMc4-JhuEzcU4k7k+uDzcCbTpuCLe0-esavLf09OpSdKv5YQ4M8yYdqlZY5usapbeM9Y-FdA6RYs5M77cc7s6HC9a7fU5bUavHbSdk-8-aZ46C50+3DfdbeC8qsGes-C4M7Gc3YS9Oo6vibfts8NtVGPYy6U4asuAveqZi8os2YBpQ7y-asuEfYKYq8NGObfYneK+U4uaI8a507OoA7a4M8eZc669Oueq2vE8y-Kf8jg9c9Cp0-+ousCdq-8gw5adm6hrM4W788qphaI-3aa4arRuk5mcm6o76a2-asxZVsO507xebpmdm+JbK6u9W8opZrC91eG+6YK8E7u6O8NAZda6fc+4K4Tc2+u4U+e+u9U5B-u+U6FZ8+2fO707vZe-49lae5h4M6Vai9+50-Va+u2dm9duS-h9x87Zx4h4asDqg9+-TfXiAA)

```typescript
import { Byte, Num, Add, Sub, Mul, Div, Mod, Eq, Lt, Gt, Lte, Gte, Lsh, Rsh, And, Xor, Or, Not } from './ts-8-bit'

// Arithmetic
type A = Num< Add < Byte<12>, Byte<22> > >  // (12 + 22)  = 34
type B = Num< Sub < Byte<47>, Byte<12> > >  // (47 - 12)  = 35
type C = Num< Mul < Byte<31>, Byte<4>  > >  // (31 * 4)   = 124
type D = Num< Div < Byte<16>, Byte<8>  > >  // (16 / 8)   = 2
type E = Num< Mod < Byte<19>, Byte<4>  > >  // (19 % 4)   = 3

// Equality
type F = Eq < Byte<10>, Byte<10> >          // (10 == 10) = true
type G = Lt < Byte<10>, Byte<10> >          // (10 < 10)  = false
type H = Gt < Byte<20>, Byte<10> >          // (20 > 10)  = true
type I = Lte< Byte<10>, Byte<10> >          // (10 <= 10) = true
type J = Gte< Byte<20>, Byte<10> >          // (20 >= 10) = true

// Bitwise
type K = Num< Rsh < Byte<64>, 3 > >         // (64 >> 3) = 8
type L = Num< Lsh < Byte<23>, 2 > >         // (23 << 2) = 92
type M = Num< Or  < Byte<33>, Byte<7> > >   // (33 | 7)  = 39 
type N = Num< And < Byte<12>, Byte<5> > >   // (12 & 5)  = 4
type O = Num< Xor < Byte<22>, Byte<17 > > > // (22 ^ 17) = 7
type P = Num< Not < Byte<253> > >           // (!253)    = 2 unsigned
```

## Overview

ts-8-bit is an experimental library that does 8-bit arithmetic on TypeScript's type system. It does so by applying bitwise operations on tuples of length 8 (1 byte) and leverages TypeScript conditional type inference to give the result. This project was written as a exercise in TypeScript and is offered as is for anyone who may find it of use.

Requires TypeScript 4.1.2 and above.

License MIT

## Usage

The following demonstrates basic usage.

```typescript
import { Byte, Num, Add } from './ts-8-bit'

// ------------------------------------------------------------------------
// Use Byte<T> and Num<T> to map between bytes and numbers
// ------------------------------------------------------------------------

type A = Byte<127>                           // type A = [1, 1, 1, 1, 1, 1, 1, 0]

type B = Num<[1, 1, 1, 1, 1, 1, 1, 0]>       // type B = 127

type C = Num< Byte<55> >                     // type C = 55

// ------------------------------------------------------------------------
// ... with math is done exclusively on bytes
// ------------------------------------------------------------------------

type D = Add<                                // type D = [0, 1, 1, 1, 1, 1, 1, 1]
    [1, 1, 1, 1, 1, 1, 1, 0], 
    [1, 1, 1, 1, 1, 1, 1, 0]
>

// ------------------------------------------------------------------------
// ... but can be remapped this way.
// ------------------------------------------------------------------------

type E = Num< Add< Byte<127>, Byte<127> > >  // type E = 254

```


