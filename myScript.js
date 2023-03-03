var baniere = new Vue({
  el:'#baniere',
  data: {
    counter : (Math.floor(Math.random()* 17)+1),
  }
});

var app = new Vue({
  el: '#publilist',
  methods: {
    openmodal: function (id) {
      $(id).modal('show')
    }
  },
  data: {
    years: [
      /* {
         year:,
         publications: [
           {

           }
         ]
       }*/
   {
      year:'2022',
      publications: [
        {
            id:'BKR2023',
            title:"New Width Parameters for Independent Set: One-sided-mim-width and Neighbor-depth",
            authors:"with Tuukka Korhonen, Igor Razgon.",
            conf:"",
            journal:"",
            comment:"Available on arxiv",
            openacess:"https://arxiv.org/abs/2302.10643",
            pdf:"https://arxiv.org/pdf/2302.10643",
            bibtex:"",
            presentations: [
            ],
            abstract:'We study the tractability of the maximum independent set problem from the viewpoint of graph width parameters, with the goal of defining a width parameter that is as general as possible and allows to solve independent set in polynomial-time on graphs where the parameter is bounded. We introduce two new graph width parameters: one-sided maximum induced matching-width (o-mim-width) and neighbor-depth. O-mim-width is a graph parameter that is more general than the known parameters mim-width and tree-independence number, and we show that independent set and feedback vertex set can be solved in polynomial-time given a decomposition with bounded o-mim-width. O-mim-width is the first width parameter that gives a common generalization of chordal graphs and graphs of bounded clique-width in terms of tractability of these problems. The parameter o-mim-width, as well as the related parameters mim-width and sim-width, have the limitation that no algorithms are known to compute bounded-width decompositions in polynomial-time. To partially resolve this limitation, we introduce the parameter neighbor-depth. We show that given a graph of neighbor-depth $k$, independent set can be solved in time $n^{O(k)}$ even without knowing a corresponding decomposition. We also show that neighbor-depth is bounded by a polylogarithmic function on the number of vertices on large classes of graphs, including graphs of bounded o-mim-width, and more generally graphs of bounded sim-width, giving a quasipolynomial-time algorithm for independent set on these graph classes. This resolves an open problem asked by Kang, Kwon, Strømme, and Telle [TCS 2017]. '
        },
        {
            id:'B2022',
            title:"A new notion of Representative Sets for Graph Coloring",
            authors:"",
            conf:"",
            journal:"",
            comment:"In preparation",
            openacess:"",
            pdf:"",
            bibtex:"",
            presentations: [
              {
                 place:"GRAA french online seminar, January 2022",
                 slides:"./pdf/GRAA22.pdf",
                 video:""
               }
            ],
            abstract:'Many efficient algorithms have been designed for Graph Coloring parameterized by width parameters such as tree-width, clique-width, rank-width and mim-width. For tree-width and clique-width, we even know algorithms that are optimal under SETH. However, these algorithms rely on techniques that are specific to each width parameter. <br> We unify these algorithmic results with a new notion of representativity between sets of partial colorings. This notion can be used to reduce the size of a collection of partial colorings in any dynamic programming algorithms for Graph Coloring. We give two applications of this new concepts. <br> We provide a greedy algorithm that, given a branch decomposition of mim-width 1 of a graph $G$, solves Graph Coloring in time $O(|{V(G)}|^2)$. Prior to our results, it was known that Graph Coloring was solvable in polynomial time on graphs of mim-width 1 (because they are perfect graphs) and NP-hard given a decomposition of mim-width 2. <br> We give a meta-algorithm for Graph Coloring whose running time asymptotically matches the running time of the best-known algorithms for several width measures including clique-width, rank-width and mim-width. Moreover, for clique-width and rank-width, the performance of this meta-algorithm matches asymptotically the state of the art both in the few-colors and many-colors cases. <br> Finally, we provide an interesting open question on the computation of representative sets of minimum size.'
          },
    	  {
            id:'BKN2022',
            title:"Tight Lower Bounds for Problems Parameterized by Rank-width",
            authors:"with T. Korhonen and J. Nederlof.",
            conf:"STACS 2023",
            journal:"",
            comment:"",
            openacess:"http://arxiv.org/abs/2210.02117",
            pdf:"https://arxiv.org/pdf/2210.02117",
            bibtex:"",
            presentations: [
              {
                place:"Virtual Colloquium, IBS (South Korea), February 2023",
                slides:"./pdf/slideIBS.pdf",
                video:""
              },
               {
                 place:"LIRMM, Montpellier (France), December 2022",
                 slides:"./pdf/BKN22.pdf",
                 video:""
               }
            ],
            abstract:'We show that there is no $2^{o(k^2)} n^{O(1)}$ time algorithm for Independent Set on $n$-vertex graphs with rank-width $k$, unless the Exponential Time Hypothesis (ETH) fails. Our lower bound matches the $2^{O(k^2)} n^{O(1)}$ time algorithm given by Bui-Xuan, Telle, and Vatshelle [Discret. Appl. Math., 2010] and it answers the open question of Bergougnoux and Kanté [SIAM J. Discret. Math., 2021]. We also show that the known $2^{O(k^2)} n^{O(1)}$ time algorithms for Weighted Dominating Set, Maximum Induced Matching and Feedback Vertex Set parameterized by rank-width $k$ are optimal assuming ETH. Our results are the first tight ETH lower bounds parameterized by rank-width that do not follow directly from lower bounds for $n$-vertex graphs.'
          },
          {
            id:'BDJ2022',
            title:"A Logic-Based Algorithmic Meta-Theorem for Mim-Width",
            authors:"with  J. Dreier and L. Jaffke.",
            conf:"SODA 2023",
            journal:"",
            comment:"",
            openacess:"https://arxiv.org/abs/2202.13335",
            pdf:"https://arxiv.org/pdf/2202.13335",
            bibtex:"",
            presentations: [
              {
                 place:"Seminar, Grenoble (France), November 2022",
                 slides:"./pdf/GSCOP22.pdf",
                 video:""
               },
              {
                 place:"GWP 2022, Paris (France), July",
                 slides:"./pdf/GWP2022.pdf",
                 video:""
               },
               {
                  place:"Bergen, algorithm group seminar,  2022",
                  slides:"",
                  video:""
                }
            ],
            abstract:'We introduce a logic called <i>distance neighborhood logic with acyclicity and connectivity constraints</i> ($\\mathsf{A \\& C \\ DN}$ for short) which extends existential $\\mathsf{MSO_1}$ with predicates for querying neighborhoods of vertex sets and for verifying connectivity and acyclicity of vertex sets in various powers of a graph. Building upon [Bergougnoux and Kanté, ESA 2019; SIDMA 2021], we show that the model checking problem for every fixed $  \\mathsf{A\\&C \\ DN}$ formula is solvable in $n^{O(w)}$ time when the input graph is given together with a branch decomposition of mim-width $w$. Nearly all problems that are known to be solvable in polynomial time given a branch decomposition of constant mim-width can be expressed in this framework. We add several natural problems to this list, including problems asking for diverse sets of solutions.<br> Our model checking algorithm is efficient whenever the given branch decomposition of the input graph has small index in terms of the $d$-neighborhood equivalence [Bui-Xuan, Telle, and Vatshelle, TCS 2013]. We therefore unify and extend known algorithms for tree-width, clique-width and rank-width. Our algorithm has a single-exponential dependence on these three width measures and asymptotically matches run times of the fastest known algorithms for several problems. This results in algorithms with tight run times under the Exponential Time Hypothesis (ETH) for tree-width and clique-width; the above mentioned run time for mim-width is nearly tight under the ETH for several problems as well. Our results are also tight in terms of the expressive power of the logic: we show that already slight extensions of our logic make the model checking problem para-NP-hard when parameterized by mim-width plus formula length.'
          },
        {
            id:'BHTV21',
           title:"Recognition of Linear and Star Variants of Leaf Powers is in P",
           authors:"with  S. Høgemo, J. A. Telle and M. Vatshelle.",
           conf:"WG 2022",
           journal:"",
           comment:"",
           openacess:"https://arxiv.org/abs/2105.12407",
           pdf:"https://arxiv.org/pdf/2105.12407",
           bibtex:"",
           presentations: [
              {
                place:"WG 2022, Tübingen (Germany)",
                slides:"./pdf/WG2022.pdf",
                video:""
              }
           ],
           abstract:"A $k$-leaf power of a tree $T$  is a graph $G$  whose vertices are the leaves of  $T$ and whose edges connect pairs of leaves whose distance in $T$ is at most $k$. A graph is a leaf power if it is a $k$-leaf power for some $k$. Over 20 years ago, Nishimura et al. [J. Algorithms, 2002] asked if recognition of leaf powers was in P. Recently, Lafond [SODA 2022] showed an XP algorithm when parameterized by $k$, while leaving the main question open. In this paper, we explore this question from the perspective of two alternative models of leaf powers, showing          that both a linear and a star variant of leaf powers can be recognized in polynomial-time."
         },
         {
           id:'BPT20',
           title:"Node Multiway Cut and Subset Feedback Vertex Set on Graphs of Bounded Mim-width",
           authors:"with  C. Papadopoulos, J. A. Telle.",
           conf:"WG 2020",
           journal:"Algorithmica 2022",
           comment:"",
           openacess:"https://arxiv.org/abs/1910.00887",
           pdf:"https://arxiv.org/pdf/1910.00887.pdf",
           bibtex:"",
           presentations: [
             {
               place:"WG, online presentation June 2020",
               slides:"./pdf/WG20.pdf",
               video:""
             },
             {
               place:"Bergen, algorithm group seminar, October 2020",
               slides:"./slides/BergenSeminar1020.pdf",
               video:""
             },
           ],
           abstract:"The two weighted graph problems  Node Multiway Cut  (NMC) and  Subset Feedback Vertex Set  (SFVS) both ask for a vertex set of minimum total weight, that for NMC disconnects a given set of terminals, and for SFVS intersects all cycles containing a vertex of a given set. We design a meta-algorithm that will allow to solve both problems in time $2^{O(rw^3)}\\cdot n^{4}$,  $2^{O(q^2\\log(q))}\\cdot n^{4}$, and $n^{O(k^2)}$ where $rw$ is the rank-width, $q$ the $\\mathbb{Q}$-rank-width, and $k$ the mim-width of a given decomposition. This answers in the affirmative an open question raised by Jaffke et al. (Algorithmica, 2019) concerning an XP algorithm for SFVS parameterized by mim-width. <br> By a unified algorithm, this solves both problems in polynomial-time on the following graph classes: Interval ,  Permutation , and  Bi-Interval  graphs, Circular Arc  and  Circular Permutation  graphs,  Convex  graphs,  $k$-Polygon , Dilworth-$k$  and  Co-$k$-Degenerate  graphs for fixed $k$; and also on  Leaf Power  graphs if a leaf root is given as input, on  $H$-Graphs  for fixed $H$ if an $H$-representation is given as input, and on arbitrary powers of graphs in all of the above classes. Prior to our results, only SFVS was known to be tractable restricted only on  Interval  and  Permutation  graphs, whereas all other results are new."
         },
      ]
    },
	{
         y:'$2021$',
         publications: [
          {
            id:"BKesa19",
            title:"More Applications of the d-Neighbor equivalence: acyclicity and connectivity constraints",
            authors:"with  M. M. Kanté.",
            conf:"ESA 2019",
            journal:"SIDMA 2021",
            comment:"",
            openacess:"https://arxiv.org/abs/1805.11275",
            pdf:"https://arxiv.org/pdf/1805.11275.pdf",
            bibtex:"",

            presentations: [
              {
                place:"ESA 2019, Munich (Germany)",
                slides:"./pdf/ESA2019.pdf",
                video:""
              },
              {
                place:"IBS Summer Research Program on Algorithms and Complexity in Discrete Structures, Daejong (South Korea), July 2019",
                slides:"./pdf/IBS_talkBenjamin.pdf",
                video:"https://www.youtube.com/watch?v=bvMxhJTABno"
              },
              {
                place:"University of Bergen (Norway), March 2019",
                slides:"",
                video:""
              },
              {
                place:"International symposium of Basic Sciences at INU (South Korea), October 2018",
                slides:"",
                video:""
              },
              {
                place:"JGA, French Workshop on Graphs and Algorithms, November 2018",
                slides:"",
                video:""
              }
            ],
            abstract: "In this paper, we design a framework to obtain efficient algorithms for several problems with a global constraint (acyclicity or connectivity) such as Connected Dominating Set, Node Weighted Steiner Tree, Maximum Induced Tree, Longest Induced Path, and Feedback Vertex Set. For all these problems, we obtain $2^{O(k)}\\cdot n^{O(1)}$, $2^{O(k \\log(k))}\\cdot n^{O(1)}$, $2^{O(k^2)}\\cdot n^{O(1)}$ and $n^{O(k)}$ time algorithms parameterized respectively by clique-width, $\\mathbb{Q}$-rank-width, rank-width and maximum induced matching width. Our approach simplifies and unifies the known algorithms for each of the parameters and match asymptotically also the running time of the best algorithms for basic NP-hard problems such as Vertex Cover and Dominating Set. Our framework is based on the $d$-neighbor equivalence defined in [Bui-Xuan, Telle and Vatshelle, TCS 2013]. The results we obtain highlight the importance and the generalizing power of this equivalence relation on width measures. We also prove that this equivalence relation could be useful for Max Cut: a W$[1]$-hard problem parameterized by clique-width. For this latter problem, we obtain $n^{O(k)}$, $n^{O(k)}$ and $n^{2^{O(k)}}$ time algorithms parameterized respectively by clique-width, $\\mathbb{Q}$-rank-width and rank-width.",
          },
	    {
            id:'BEGOR17',
            title:"Towards a polynomial kernel for directed feedback vertex set",
            authors:"with  E. Eiben, R. Ganian, S. Ordyniak, M. S. Ramanujan.",
            conf:"MFCS 2017",
            journal:"Algorithmica 2021",
            comment:"",
            openacess:"http://drops.dagstuhl.de/opus/volltexte/2017/8112/",
            pdf:"http://drops.dagstuhl.de/opus/volltexte/2017/8112/pdf/LIPIcs-MFCS-2017-36.pdf",
            bibtex:"",
            presentations: [

            ],
            abstract:"In the Directed Feedback Vertex Set (DFVS) problem, the input is a directed graph D and an integer k. The objective is to determine whether there exists a set of at most k vertices intersecting every directed cycle of D. DFVS was shown to be fixed-parameter tractable when parameterized by solution size by Chen, Liu, Lu, O'Sullivan and Razgon [JACM 2008]; since then, the existence of a polynomial kernel for this problem has become one of the largest open problems in the area of parameterized algorithmics. In this paper, we study DFVS parameterized by the feedback vertex set number of the underlying undirected graph. We provide two main contributions: a polynomial kernel for this problem on general instances, and a linear kernel for the case where the input digraph is embeddable on a surface of bounded genus. "
          },
	 {
	    id:'SBBPT21',
            title:"On Dasgupta's hierarchical clustering objective and its relation to other graph parameters",
            authors:"with S. Høgemo,  U. Brandes, C. Paul and J. A. Telle.",
            conf:"FCT 2021",
            journal:"",
            comment:"",
            openacess:"https://arxiv.org/abs/2105.12093",
            pdf:"https://arxiv.org/pdf/2105.12093",
            bibtex:"",
            presentations: [
              /* {
                 place:"",
                 slides:"",
                 video:""
               }*/
            ],
            abstract:"The minimum height of vertex and edge partition trees are well-studied graph parameters known as, for instance, vertex and edge ranking number. While they are NP-hard to determine in general, linear-time algorithms exist for trees. Motivated by a correspondence with Dasgupta's objective for hierarchical clustering we consider the total rather than maximum depth of vertices as an alternative objective for minimization. For vertex partition trees this leads to a new parameter with a natural interpretation as a measure of robustness against vertex removal. <br>As tools for the study of this family of parameters we show that they have similar recursive expressions and prove a binary tree rotation lemma. The new parameter is related to trivially perfect graph completion and therefore intractable like the other three are known to be. We give polynomial-time algorithms for both total-depth variants on caterpillars and on trees with a bounded number of leaf neighbors. For general trees, we obtain a 2-approximation algorithm. "
          },
        ]
       },
      {
        y:'$2020$',
        publications: [
          {
            id:'BKK17',
            title:"An optimal XP algorithm for Hamiltonian cycle on graphs of bounded clique-width",
            authors:"with  M. M. Kanté, O. Kwon.",
            conf:"WADS 2017",
            journal:"Algorithmica 2020",
            comment:"",
            openacess:"https://arxiv.org/abs/1702.06095",
            pdf:"https://arxiv.org/pdf/1702.06095",
            bibtex:"",
            presentations: [
              {
                place:"Université de Bordeaux (France), LABRI, September 2017",
                slides:"",
                video:""
              }
            ],
            abstract:"In this paper, we prove that, given a clique-width $k$-expression of an $n$-vertex graph, Hamiltonian Cycle can be solved in time $n^{O(k)}$. This improves the naive algorithm that runs in time $n^{{O}(k^2)}$ by Espelage et al. (WG 2001), and it also matches with the lower bound result by Fomin et al. that, unless the Exponential Time Hypothesis fails, there is no algorithm running in time $n^{o(k)}$ (SIAM. J. Computing 2014). <br> We present a technique of representative sets using two-edge colored multigraphs on $k$ vertices. The essential idea is that, for a two-edge colored multigraph, the existence of an Eulerian trail that uses edges with different colors alternately can be determined by two information: the number of colored edges incident with each vertex, and the connectedness of the multigraph. With this idea, we avoid the bottleneck of the naive algorithm, which stores all the possible multigraphs on $k$ vertices with at most $n$ edges. "
          },
          {
            id:'BBBK20',
            title:"Close relatives of Feedback Vertex Set without single-exponential algorithms parameterized by treewidth",
            authors:"with  É. Bonnet, N. Brettell, and O. Kwon.",
            conf:"IPEC 2020",
            journal:"",
            comment:"",
            openacess:"https://arxiv.org/abs/2007.14179",
            pdf:"https://arxiv.org/pdf/2007.14179.pdf",
            bibtex:"",
            presentations: [
              // {
              //   place:"",
              //   slides:"",
              //   video:""
              // }
            ],
            abstract:" The Cut $\\&$ Count technique and the rank-based approach have lead to single-exponential FPT algorithms parameterized by treewidth, that is, running in time $2^{O(tw)}n^{O(1)}$, for Feedback Vertex Set and connected versions of the classical graph problems (such as Vertex Cover and Dominating Set). We show that Subset Feedback Vertex Set, Subset Odd Cycle Transversal, Restricted Edge-Subset Feedback Edge Set, Node Multiway Cut, and Multiway cut are unlikely to have such running times.  More precisely, we match algorithms running in time $2^{O(tw \\log tw)}n^{O(1)}$ with tight lower bounds under the Exponential Time Hypothesis, ruling out $2^{o(tw \\log tw)}n^{O(1)}$, where $n$ is the number of vertices and $tw$ is the treewidth of the input graph. Our algorithms extend to the weighted case, while our lower bounds also hold for the larger parameter pathwidth and do not require weights. We also show that, in contrast to Odd Cycle Transversal, there is no $2^{o(tw \\log tw)}n^{O(1)}$-time algorithm for Even Cycle Transversal."
          },
        ]
      },
      {
        y:'$2019$',
        publications: [
          {
            id:'BCK19',
            title:"Counting minimal transversals of $\\beta$-acyclic hypergraphs",
            authors:"with  F. Capelli, M. M. Kanté.",
            conf:"",
            journal:"JCSS 2019",
            comment:"",
            openacess:"https://arxiv.org/abs/1808.05017",
            pdf:"https://arxiv.org/pdf/1808.05017",
            bibtex:"",
            presentations: [
              {
                place:"University of Bergen (Norway), February 2019",
                slides:"./pdf/BergenNov19.pdf",
                video:""
              },
              {
                place:"INRIA Lille (France), LINKS Group, March 2017",
                slides:"",
                video:""
              },
              {
                place:"JGA, French Workshop on Graphs and Algorithms, November 2017",
                slides:"",
                video:""
              }
            ],
            abstract:"We prove that one can count in polynomial time the number of minimal transversals of $\\beta$-acyclic hypergraphs. As consequence, we can count in polynomial time the number of minimal dominating sets of strongly chordal graphs, continuing the line of research initiated in [M.M. Kanté and T. Uno, Counting Minimal Dominating Sets, TAMC'17]."
          },
          {
            id:'BKtcs19',
            title:"Fast exact algorithms for some connectivity problems parameterized by clique-width",
            authors:"with  M. M. Kanté.",
            conf:"",
            journal:"TCS 2019",
            comment:"",
            openacess:"https://arxiv.org/abs/1707.03584",
            pdf:"https://arxiv.org/pdf/1707.03584.pdf",
            bibtex:"",
            presentations: [
              {
                place:"JGA, French Workshop on Graphs and Algorithms, November 2016",
                slides:"",
                video:""
              },
              {
                place:"TU Wien (Austria), Algorithms and Complexity Group, September 2016",
                slides:"",
                video:""
              }
            ],
            abstract:"Given a clique-width $k$-expression of a graph $G$, we provide $2^{O(k)}\\cdot n$ time algorithms for connectivity constraints on locally checkable properties such as Node-Weighted Steiner Tree, Connected Dominating Set, or Connected Vertex Cover. <br> We also propose a $2^{O(k)}\\cdot n$ time algorithm for Feedback Vertex Set. The best running times for all the considered problems were $2^{O(k\\cdot \\log(k))}\\cdot n^{O(1)}$."
          },
          {
            id:'BKW19',
            title:"Disjunctive Minimal Separators Enumeration",
            authors:"with  M. M. Kanté, K. Wasa.",
            conf:"WEPA 2019",
            journal:"",
            comment:"",
            openacess:"",
            pdf:"./pdf/bkw19.pdf",
            bibtex:"",
            presentations: [
              // {
              //   place:"",
              //   slides:"",
              //   video:""
              // }
            ],
            abstract:"In this paper, we study the minimal disjunctive separator enumeration problem, which asks given a graph $G = (V,E)$ and a set of vertex pairs $P\\subseteq V \\times V$, to output all inclusion-wise minimal vertex subsets $C \\subseteq V$ such that for some pair $(s,t)\\in P$, there is no path between $s$ and $t$ in $G[V \\setminus C]$. As main result, we propose thefirst polynomial delay polynomial space enumeration algorithm for minimal disjunctive separator problem."
          }
        ]
      },
      {
        y:"$\\leq 2018$",
        publications: [
          {
            id:'TB18',
            title:"On minimum connecting transition sets in graphs",
            authors:"with T. Bellitto.",
            conf:"WG 2018",
            journal:"",
            comment:"",
            openacess:"https://arxiv.org/abs/1807.08463",
            pdf:"https://arxiv.org/pdf/1807.08463",
            bibtex:"",
            presentations: [
              // {
              //   place:"",
              //   slides:"",
              //   video:""
              // }
            ],
            abstract:"A forbidden transition graph is a graph defined together with a set of permitted transitions i.e. unordered pair of adjacent edges that one may use consecutively in a walk in the graph. In this paper, we look for the smallest set of transitions needed to be able to go from any vertex of the given graph to any other. We prove that this problem is NP-hard and study approximation algorithms. We develop theoretical tools that help to study this problem. "
          },
        ]
      }

    ]
  }
});

// {
//    title:"",
//    authors:"",
//    conf:"",
//    journal:"",
//    comment:"",
//    openacess:"",
//    pdf:"",
//    bibtex:"",
//    presentations: [
//      {
//        place:"",
//        slides:"",
//        video:""
//      }
//    ],
//    abstract:""
//  },
