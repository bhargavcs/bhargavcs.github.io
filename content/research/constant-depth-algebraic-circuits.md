---
title: 'Improved lower bound, and proof barrier, for constant depth algebraic circuits'
tags: [algebraic-complexity]
---

- with Sagnik Dutta and Nitin Saxena
- ACM Trans. Comput. Theory, [TOCT 2024](https://dl.acm.org/doi/10.1145/3689957) (preliminary version - [MFCS 2022](https://doi.org/10.4230/LIPIcs.MFCS.2022.18))
- awarded _Best Student Paper_ at MFCS 2022

[PDF](/files/lst-limitations.pdf)

We show that any product-depth $\Delta$ algebraic circuit for the Iterated Matrix Multiplication polynomial $\mathrm{IMM}_{n,d}$ (when $d=O(\log n/\log\log n)$) must be of size at least $n^{\Omega (d^{1/(\varphi^2)^{\Delta}})}$ where $\varphi = 1.618\ldots$ is the golden ratio. This improves the recent breakthrough result of Limaye, Srinivasan, and Tavenas (FOCS'21), who showed a super polynomial lower bound of the form $n^{\Omega(d^{1/4^{\Delta}})}$ for constant-depth circuits.

One crucial idea of the (LST21) result was to use set-multilinear polynomials where each set in the variables' underlying partition could be of different sizes. By picking the set sizes more carefully (depending on the depth we are working with), we first show that any product-depth $\Delta$ _set-multilinear_ circuit for $\mathrm{IMM}_{n,d}$ (when $d = O(\log n)$) needs size at least $n^{\Omega(d^{1/\varphi^{\Delta}})}$. This improves the $n^{\Omega(d^{1/2^{\Delta}})}$ lower bound of (LST21). We then use their Hardness Escalation technique to lift this to general circuits.

We also show that these techniques cannot improve our lower bound significantly. For the _specific_ two set sizes used in (LST21), they showed that their lower bound cannot be improved. We show that for any $d^{o(1)}$ set sizes (out of maximum possible $d$), the scope for improving our lower bound is minuscule. There exists a set-multilinear circuit that has product-depth $\Delta$ and size almost matching our lower bound such that the value of the measure used to prove the lower bound is maximum for this circuit. This results in a barrier to further improvement using the same measure.

## Related

[[research/index|Research overview]]
