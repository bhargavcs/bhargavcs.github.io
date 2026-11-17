---
title: Real feasibility
tags:
  - algebra
  - complexity
---

*Example note for the Research Notes section.*

A real feasibility problem asks whether a system of polynomial constraints has a solution over $\mathbb{R}$. The constraints may include both equations and inequalities.

## Why the field matters

The equation

$$
x^2+1=0
$$

has complex solutions but no real solution. An algebraic condition detecting a complex root does not by itself settle real feasibility.

This distinction matters when using [[notes/resultants|resultants]] for [[notes/polynomial-elimination|polynomial elimination]]: eliminating variables is one step, and deciding whether the relevant roots are real requires additional information.

## Related paper

[[research/resultants-and-etr|Multivariate Resultants: Complexity and Applications to Real Feasibility]]

[[notes/index|Research Notes overview]]
