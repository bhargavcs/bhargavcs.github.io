---
title: Resultants
tags:
  - algebra
---

*Example note for the Research Notes section.*

For two nonconstant univariate polynomials over a field, their resultant vanishes exactly when they have a common root in an algebraic closure.

## Eliminating a variable

Take $f(y)=y-x^2$ and $g(y)=y-1$, treating $x$ as a parameter. Their resultant with respect to $y$ is

$$
\operatorname{Res}_y(y-x^2,y-1)=x^2-1.
$$

Its zeros identify the possible $x$-coordinates in the [[notes/polynomial-elimination|elimination example]].

The distinction between roots in an algebraic closure and real roots becomes important for [[notes/real-feasibility|real feasibility]].

## Related paper

[[research/resultants-and-etr|Multivariate Resultants: Complexity and Applications to Real Feasibility]] studies the computational complexity of multivariate resultants and their applications to real feasibility.

[[notes/index|Research Notes overview]]
