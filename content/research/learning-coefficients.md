---
title: 'Learning the coefficients: A presentable version of border complexity and applications to circuit factoring'
tags: [algebraic-complexity]
---

- with Prateek Dwivedi and Nitin Saxena
- [STOC 2024](https://dl.acm.org/doi/abs/10.1145/3618260.3649743)

[PDF](/files/learning-coefficients.pdf)

The border, or the approximative, model of algebraic computation ($\overline{\mathsf{VP}}$) is quite popular due to the Geometric Complexity Theory (GCT) approach to $\mathsf{P} \neq \mathsf{NP}$ conjecture, and its complex analytic origins. On the flip side, the definition of the border is inherently _existential_ in the field constants that the model employs. In particular, a poly-size border circuit $C(\varepsilon, \mathbf{x})$ cannot be compactly presented in reality, as the limit parameter $\varepsilon$ may require _exponential_ precision. In this work we resolve this issue by giving a constructive, or a _presentable_, version of border circuits and state its applications.

We make border presentable by restricting the circuit $C$ to use only those constants, in the function field $\mathbb{F}_q(\varepsilon)$, that it can generate by the ring operations on $\{\varepsilon\}\cup\mathbb{F}_q$, and their division, within poly-size circuit. This model is more expressive than $\mathsf{VP}$ as it affords exponential-degree in $\varepsilon$; and analogous to the usual border, we define new border classes called $\overline{\mathsf{VP}}_{\varepsilon}$ and $\overline{\mathsf{VNP}}_{\varepsilon}$. We prove that both these (now called _presentable_ border) classes lie in $\mathsf{VNP}$. Such a 'debordering' result is not known for the classical border classes $\overline{\mathsf{VP}}$ and respectively for $\overline{\mathsf{VNP}}$. We pose $\overline{\mathsf{VP}}_{\varepsilon}=\overline{\mathsf{VP}}$ as a new conjecture to study the border.

The heart of our technique is a newly formulated _exponential interpolation_ over a finite field, to bound the Boolean complexity of the coefficients before deducing the algebraic complexity. It attacks two factorization problems which were open before. We make progress on (Conj.8.3 in Bürgisser 2000, FOCS 2001) and solve (Conj.2.1 in Bürgisser 2000; Chou,Kumar,Solomon CCC 2018) over all finite fields: 
- Each poly-degree irreducible factor, with multiplicity coprime to field characteristic, of a poly-size circuit (of possibly _exponential_-degree), is in $\mathsf{VNP}$.
- For _all_ finite fields, and _all_ factors, $\mathsf{VNP}$ is closed under factoring. Consequently, factors of $\mathsf{VP}$ are _always_ in $\mathsf{VNP}$. The prime characteristic cases were open before due to the inseparability obstruction (i.e.~when the multiplicity is not coprime to $q$).

## Related

[[research/index|Research overview]]
