---
title: 'Multivariate Resultants: Complexity and Applications to Real Feasibility'
tags: [algebraic-complexity]
---

- with Radu Curticapean, Gorav Jindal, and Himanshu Shukla
- under review

[PDF](/files/resultants-and-etr.pdf) · [zenodo](https://doi.org/10.5281/zenodo.23218608)

The multivariate (or _Macaulay_) resultant is a polynomial in the coefficients of homogeneous polynomials $p_1,\ldots,p_n \in \mathbb{Z}[x_1,\ldots,x_n]$. It vanishes precisely when these polynomials have a nonzero common _complex_ root, which makes the resultant a fundamental object in computational algebra and algebraic geometry. 
The degree of a resultant can be exponential in $n$, even when the input forms are quadratic. A recent breakthrough of Andrews, Garg, and Schost (FOCS 2026) showed that multivariate resultants can nevertheless be evaluated in the counting hierarchy.
On the complexity side, testing whether a resultant vanishes is only known to be $\mathsf{NP}$-hard. We significantly narrow down the complexity of multivariate resultants by proving the following:

- Polynomial-size arithmetic circuits for multivariate resultants imply $\mathsf{VP} = \mathsf{VNP}$.
- Evaluation of multivariate resultants modulo powers of two is $\#\mathsf{P}$-hard, and determining a specified binary digit of their absolute value is $\mathsf{PP}$-hard under many-one reductions.
- Deciding the sign of a resultant is $\oplus\mathsf{P}$-hard, even when it is guaranteed to be non-zero.

These results imply that even determining the sign or a specified bit of a resultant lies outside the polynomial hierarchy, unless the hierarchy collapses. The hardness results already hold for the resultants of homogeneous quadratic forms defined by symmetric tensors of order three. Such resultants are also known as _tensor determinants_ (or symmetric hyperdeterminants), and are, up to normalization, discriminants of the associated cubic forms.

We also apply resultants to real feasibility, proving that the existential theory of the reals belongs to the counting hierarchy ($\mathrm{ETR} \in \mathsf{CH}$). Using the critical point method and resultant-based elimination, we reduce real feasibility to real-root tests for univariate polynomials of exponential degree. We then guess polynomial-length certificates for univariate real-root existence from short partial Thom encodings. We verify these certificates by encoding the parity of the number of matching real roots using the sign (of a coefficient) of a parameterized resultant. This extends the parity encoding used in our sign-hardness proof. Crucially, we use the constructions of Andrews, Garg, and Schost to preserve $\mathsf{CH}$-access to the coefficient bits throughout, allowing the entire procedure to remain in the counting hierarchy.

## Related

[[research/index|Research overview]]