---
title: 'On Problems of Hardness, Counting, and Factoring in Algebraic Complexity'
tags: [algebraic-complexity]
---

- PhD thesis, Indian Institute of Technology Kanpur, 2025
- Thesis supervisor: [Nitin Saxena](https://www.cse.iitk.ac.in/users/nitin/)

[PDF](/files/phd-thesis.pdf)

"How best to compute a multivariate polynomial using arithmetic operations?" -- this is the central question that has driven the results in this thesis. Polynomials are perhaps the most fundamental mathematical objects (after numbers). In theoretical computer science alone, they are a crucial ingredient to applications in cryptography, error-correcting codes, numerical analysis and approximation, computer vision, robotics, machine learning, and much more. It is very natural to study their complexity, and _algebraic circuits_ -- directed acyclic graphs with addition and multiplication gates, and variables as leaves, are the most natural models of computing polynomials (in a syntactic way). In the late ’70s, Valiant (STOC, 1979) conjectured the algebraic analog of Cook's $\mathsf{P}$ vs. $\mathsf{NP}$ -- that there are low-degree polynomials whose coefficients can be efficiently described (the class $\mathsf{VNP}$), but the polynomial itself cannot be computed by low-degree small-sized circuits (the class $\mathsf{VP}$).

### Bounded-depth circuits.
    
Unlike their Boolean counterparts, a surprising phenomenon of "efficient parallelization" holds true for algebraic circuits. In an influential line of studies beginning with the work of Agrawal and Vinay (FOCS 2008), improved by Koiran (Theoret. Comput. Sci. 2012) and Tavenas (Inform. and Comput. 2015), finally culminating in the work of Gupta _et al._ (SIAM J. Comput. 2016), it was shown that even algebraic circuits with just $3$ or $4$ layers of gates are _almost_ as powerful as general ones! Proving sufficiently strong lower bounds for these _constant-depth_ circuits can resolve Valiant's conjecture, and has been the focus of lower bounds research for the past decade in Algebraic Complexity. 
    
Recently, in a breakthrough work, Limaye, Srinivasan, and Tavenas (FOCS 2021) proved _superpolynomial_ lower bounds for all constant-depth circuits. As a natural next step, we push their techniques further and prove stronger bounds that are state of the art. We also exhibit a _barrier_ to further improvement of the bounds using the same techniques.

### Algebraic branching programs.
    
Models different from circuits have also been studied. Algebraic _formulas_ are circuits where the directed acyclic graph is a tree. Algebraic _branching programs_ are a model of computation intermediate in power between formulas and circuits. Valiant's conjecture is generally considered the problem of showing superpolynomial lower bounds for any of these models. Much as in the Boolean world, the lower bounds we know for these general models are barely quadratic.

In this thesis, we show that proving strong enough lower bounds for the sum of a very restricted type of algebraic branching program that is _set-multilinear_, is enough to resolve Valiant's conjecture. An analogous statement for bounded-depth circuits was used by Limaye, Srinivasan and Tavenas (FOCS 2021) to prove their superpolynomial lower bounds. Nisan (STOC 1991) had already studied these restricted branching programs in the ’90s and shown _exponential_ lower bounds against them. Our work shows that their _sum_ is surprisingly powerful. We prove exponential lower bounds for this ‘sum’ model (in fact, even the sum of _general_ branching programs) when the size of each program is sub-polynomial.

### Counting homomorphisms. 

In another seminal work, Valiant (Theoret. Comput. Sci. 1979) showed that counting the number of perfect matchings in bipartite graphs is $\#\mathsf{P}$--hard. In general, the question of detecting and counting some _pattern_ graph in a _host_ graph is very interesting and has many applications in combinatorics, computer science (theoretical and otherwise) and even biology. If the pattern graph is fixed, these problems can be solved in time polynomial in the size of the host graph, which is usually large. So we would really prefer much faster algorithms. An algebraic version of this problem is to consider the _Homomorphism_ polynomial that enumerates 'adjacency-preserving' maps from the pattern graph to the host, and construct small algebraic circuits computing the polynomial. The best known constructions are in fact _monotone_, where the circuit never uses negative numbers. Recently, Komarath, Pandey and Rahul (Algorithmica 2023) showed that the _treewidth_ of the pattern graph completely characterizes the size of the best monotone circuit computing the polynomial.
    
We generalize their results to _bounded-depth_ monotone circuits computing the homomorphism polynomial. We introduce a bounded-depth version of treewidth (where tree decompositions have bounded depth), and show that this parameter characterizes the size of the bounded-depth monotone circuit computing the homomorphism polynomial. Proving these fine-grained bounds further leads to an _optimal_ depth-hierarchy theorem for monotone circuits.

### Polynomial factorization 

In the 1980's, Kaltofen (SICOMP 1985, STOC 1986, STOC 1987, RANDOM 1989) showed a remarkable fact -- factors of small multivariate circuits of low degree are small circuits themselves, i.e., $\mathsf{VP}$ is closed under taking factors. This is indeed a splendid demonstration of the robustness and naturalness of the algebraic circuit model. Via repeated squaring, small circuits can also compute polynomials of _exponential degree_. An earlier result of Lipton and Stockmeyer (J. Comput. System Sci. 1978) implies that such circuits are _not_ closed under taking factors. 
    
Kaltofen (STOC 1986, 1987) wondered, and Bürgisser in his monograph (2000) conjectured, that at least the _low-degree_ factors of small exponential-degree circuits can be computed by small circuits. Except for certain special cases, the above ‘factor conjecture’ is open. Interestingly, Bürgisser (Found. Comput. Math 2004) showed that these low-degree factors can be _approximated_ by small circuits! Thus, the factor conjecture can be seen as saying that approximation is not necessary. These approximate circuits are in fact more structured, and when the underlying field is finite, this structure can be exploited to show that these factors have coefficients that are easy to describe. That is, the families defined by the factors are in VNP (the factor conjecture says they are in $\mathsf{VP}$). In this thesis, we suggest natural conjectures to extend this result to infinite fields.



## Related

[[research/index|Research overview]]
