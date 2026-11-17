---
title: 'Monotone Bounded-Depth Complexity of Homomorphism Polynomials'
tags: [algebraic-complexity]
---

- with Shiteng Chen, Radu Curticapean, and Prateek Dwivedi
- [MFCS 2025](https://doi.org/10.4230/LIPIcs.MFCS.2025.19)

[PDF](/files/monotone-hompoly.pdf) · [arXiv](https://arxiv.org/abs/2505.22894)

For every fixed graph $H$, it is known that homomorphism counts from $H$ and colorful $H$-subgraph counts can be determined in $O(n^{t+1})$ time on $n$-vertex input graphs $G$, where $t$ is the treewidth of $H$. On the other hand, a running time of $n^{o(t / \log t)}$ would refute the exponential-time hypothesis. Komarath, Pandey and Rahul (Algorithmica, 2023) studied algebraic variants of these counting problems, i.e., homomorphism and subgraph _polynomials_ for fixed graphs $H$. These polynomials are weighted sums over the objects counted above, where each object is weighted by the product of variables corresponding to edges contained in the object. As shown by Komarath \emph{et al.}, the _monotone_ circuit complexity of the homomorphism polynomial for $H$ is $\Theta(n^{\operatorname{tw}(H)+1})$.
    
In this paper, we characterize the power of monotone _bounded-depth_ circuits for homomorphism and colorful subgraph polynomials. This leads us to discover a natural hierarchy of graph parameters $\operatorname{tw}_\Delta(H)$, for fixed $\Delta \in \mathbb N$, which capture the width of tree-decompositions for $H$ when the underlying tree is required to have depth at most $\Delta$. We prove that monotone circuits of product-depth $\Delta$ computing the homomorphism polynomial for $H$ require size $\Theta(n^{\operatorname{tw}_\Delta(H^{\dagger})+1})$, where $H^{\dagger}$ is the graph obtained from $H$ by removing all degree-$1$ vertices. This allows us to derive an optimal depth hierarchy theorem for monotone bounded-depth circuits through graph-theoretic arguments.

## Related

[[research/index|Research overview]]
