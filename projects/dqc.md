---
title: "Distributed quantum computing"
date: "2024-08-06"
summary: "Quantum computers individually are limited to small computations. Can we combine them together to run larger ones?"
link: "https://github.com/CQCL/pytket-dqc"
images:
  - "/images/projects/dqc/ejpp.png"
---

# Abstract
We consider a heterogeneous network of quantum computing modules, sparsely connected via Bell states. Operations across these connections constitute a computational bottleneck and they are likely to add more noise to the computation than operations performed within a module. We introduce several techniques for transforming a given quantum circuit into one implementable on such a network, minimising the number of Bell states required to do so. We extend previous works on circuit distribution to the case of heterogeneous networks. On the one hand, we extend the hypergraph approach of Andres-Martinez and Heunen (2019 Phys. Rev. A 100 032308) to arbitrary network topologies, and we propose the use of Steiner trees to detect and reuse common connections, further reducing the cost of entanglement sharing within the network. On the other hand, we extend the embedding techniques of Wu et al (2023 Quantum7 1196) to networks with more than two modules. We show that, with careful manipulation of trade-offs, these two new approaches can be combined into a single automated framework. Our proposal is implemented and benchmarked; the results confirm that our contributions make noticeable improvements upon the aforementioned works and complement their weaknesses.