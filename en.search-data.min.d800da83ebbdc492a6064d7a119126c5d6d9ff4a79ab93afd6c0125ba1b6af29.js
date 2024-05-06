"use strict";(function(){const t={cache:!0};t.doc={id:"id",field:["title","content"],store:["title","href","section"]};const e=FlexSearch.create("balance",t);window.bookSearchIndex=e,e.add({id:0,href:"/posts/pgfplots/",title:"How to use TikZ in scientific plotting?",section:"Blog",content:` TikZ is a powerful drawing package for academics who are using LaTeX for paper writing. Unlike other TeX packages, TikZ itself is really huge, its manual contains about 1100+ pages, 100+ chapters. Tens of other packages, and serveral GUI applications are based on TikZ.
Instead of being comprehensive, this page mainly aims to provide a curated list of awesome TikZ templates frequently used in our COLA laboratory.
Scatter plots # `}),e.add({id:1,href:"/posts/overleaf_naming/",title:"How to name your Overleaf project?",section:"Blog",content:` Overleaf is a collaborative cloud-based LaTeX editor used for writing, editing and publishing scientific documents. In COLA laboratory, we use the Overleaf as the centralized place to manage our manuscripts. In order to make the projects be managed in an organized manner, a project is usually named as A_B_C.
A: journal/conference name, e.g., TEVC/PPSN22 B: acronym of the algorithm, e.g., TBO2 C: first character of your name, e.g., RC This comes up to be a typical example: TEVC_TBO2_RC.
Note that since the University of Exeter is a partner of Overleaf, you are free to use the professional version by using your university\u0026rsquo;s email account to register. There are some very cool function of using this professional version.
You can sync your project to either Dropbox or Github, though this is applicable for regular account. This is very useful when you find the online Overleaf version is kind of slow. It is very cool to track the changes by turning Track changes on. Try to get yourself comfortable with the comment function in Overleaf, so that we can address concerns in an interactive manner. \u0026hellip;\u0026hellip; There can be even more cool stuffs. I will amend this later when it comes down.
`}),e.add({id:2,href:"/posts/bibtex_rule/",title:"How to prepare your bibtex file?",section:"Blog",content:` Bibtex is a powerful tool to manage your references in scientific writing by using LaTeX. However, the bibtex sources can be messy in the wild. Here are some useful tips to prepare a beautiful and clean bibtex file.
Instead of searching from Google, it might be more convenient to search the corresponding paper or author in DBLP. There is an option to choose the export record as the BibTeX. It will be more efficient to use some text editor like Vim to facilitate your editing. However, there is a steep learning curve to manage the Vim. Be careful to include unnecessary components in your bib. For example, it will take extra space if you include url and doi. Note that most publishers have a strict rule on the page length. If the corresponding paper is not published yet, i.e., just accepted or in press, there is usually NO pages, volume and number related information. Instead, we just need to amend a note component in the bibtex: note={accepted for publication}. In the following paragraphs, we mainly focus on three types of publications to give you some tangible examples.
Journal article
Let us use the following example from one of my papers to explain the format.
@article{LiZKLW14, author = {Ke Li and Qingfu Zhang and Sam Kwong and Miqing Li and Ran Wang}, title = {Stable Matching-Based Selection in Evolutionary Multiobjective Optimization}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {18}, number = {6}, pages = {909--923}, year = {2014}, doi = {10.1109/TEVC.2013.2293776}, timestamp = {Mon, 27 Nov 2017 16:55:26 +0100}, biburl = {http://dblp.org/rec/bib/journals/tec/LiZKLW14}, bibsource = {dblp computer science bibliography, http://dblp.org} } Most components can be directly obtained from the paper itself. We only explicitly explain the following components.
bibtex entry ABC: A: The last name of the first author, e.g., \u0026ldquo;A = Li\u0026rdquo; in this example. B: The first letter of each of the other authors, e.g., \u0026ldquo;B = ZKLW\u0026rdquo; in this example. C: Shortcut of the publication year, e.g., \u0026ldquo;C = 14\u0026rdquo; in this example. title: Please capitalize each word in the paper title, except for some conjunction words or so. journal: Please try to use the abbreviation of the journal name as much as you can. You can easily Google this information. Alternatively, you can refer to the relevant publisher for detailed information. pages: Please use double hyphens to connect the page numbers. doi, timestamp, biburl and bibsource are not always necessary. But you can find more information from the DBLP of the corresponding author(s). If the paper is not published yet, the bibtex will be simplified as follows.
@article{LiNGY21, author = {Ke Li and Haifeng Nie and Huiru Gao and Xin Yao}, title = {Posterior Decision-Making Based on Decomposition-Driven Knee Point Identification}, journal = {{IEEE} Trans. Evol. Comput.}, year = {2021}, note = {accepted for publication} } Conference article
Conference paper is slightly different from the journal article. It is usually published as a proceeding thus there is no issue or volume number. Instead, we usually need to formulate the name of the proceeding. Sometimes the editors are required to be listed, but I usually recommend to omit that part. Let us use the following example to explain this format.
@inproceedings{WuKJLZ17, author = {Mengyuan Wu and Sam Kwong and Yuheng Jia and Ke Li and Qingfu Zhang}, title = {Adaptive weights generation for decomposition-based multi-objective optimization using Gaussian process regression}, booktitle = {GECCO\u0026#39;17: Proc. of the 2017 Genetic and Evolutionary Computation Conference}, pages = {641--648}, publisher = {{ACM}}, year = {2017}, timestamp = {Fri, 27 Mar 2020 09:03:02 +0100}, biburl = {https://dblp.org/rec/conf/gecco/WuKJLZ17.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } The other rules are almost the same as the journal article, except the following components.
booktitle is formulated as: S'Y: Proc. of the xxxx Conference on S: Abbreviation of the conference, e.g., \u0026ldquo;S = GECCO\u0026rdquo; in this example. Y: Shortcut of the conference year, e.g., \u0026ldquo;Y = 17\u0026rdquo; in this example. xxxx: conference year, e.g., \u0026ldquo;xxxx = 2017\u0026rdquo; in this example. Book
Book is a bit different from the journal and conference papers. Most components can be directly derived from the book itself. You can apply the previous formats here. Let us use the following example to explain this format.
@book{Deb01, author = {Kalyanmoy Deb}, title = {Multi-Objective Optimization Using Evolutionary Algorithms}, publisher = {John Wiley \\\u0026amp; Sons, Inc.}, address = {New York, NY, USA}, year = {2001} } Technical report
@techreport{ABC, author = {xx and xx}, title = {xx}, institution = {xx}, year = {xxxx} } ArXiv paper
@article{Frazier18, author = {Peter I. Frazier}, title = {A Tutorial on {Bayesian} Optimization}, journal = {CoRR}, volume = {abs/1807.02811}, year = {2018}, url = {http://arxiv.org/abs/1807.02811}, archivePrefix = {arXiv}, eprint = {1807.02811}, timestamp = {Mon, 13 Aug 2018 16:48:03 +0200}, biburl = {https://dblp.org/rec/journals/corr/abs-1807-02811.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } `}),e.add({id:3,href:"/academicons/academicons-1.9.0/README/",title:"Readme",section:"Academicons",content:` What is Academicons? # Academicons is a specialist icon font for academics. It contains icons for websites and organisations related to academia that are often missing from mainstream font packages. It can be used by itself, but its primary purpose is to be used as a supplementary package alongside a larger icon set. Go here to view the full icon set along with instructions for their use.
Requesting new icons # New icons can be requested by creating an issue here. Before submitting a request, please check that the following conditions are satisfied:
The organisation in question is already using a logo/icon of appropriate dimensions (roughly square). If that doesn\u0026rsquo;t exist, then there\u0026rsquo;s really not much that can be done, and the request will have to be ignored until such time that a logo/icon can be provided.
An icon of appropriate resolution can be provided or linked to. Ideally, the provided file will be a vector file (e.g. SVG, EPS, AI) or a PDF with the vector file embedded. These files are all very easy to work with, and result in the most faithful reproductions of the icon. Altenatively, high resolution raster images (e.g. JPEG, PNG, GIF) can work, but only if the resolution is high enough that the underlying shapes can be reproduced. Icons made from raster images take much longer to prepare, and require hand drawing each component and figuring out the exact typeface used for any letters. This process can be rather tedious, and I will only do this if there is significant demand for the icon. Favicon files can be useful in conjunction with larger logos that have non-ideal aspect ratios—where they can indicate which part of the logo to strip down to—but they are pretty much useless by themselves. The only time I have made an icon from a favicon was for arXiv, and that was only because: (i) It was heavily requested, and (ii) I was able to get feedback on the new icon from Paul Ginsparg, who made the original icon. You can still submit the request, but it will likely be ignored until someone else comes along and provides the file we need.
The icon can be reduced to monochrome. This is one of the basic requirements of a versatile icon, but it is often overlooked when icons are made by people who are not professional designers. Academia is full of unprofessional designers, and it is sometimes the case that a logo relies entirely on the use of different colours. In certain cases we can be creative (see the dblp logo), but more often than not it will be impossible to create a monochrome version of the icon. Again, feel free to make the request, but it will probably be ignored if an alternate logo cannot be found.
License # The Academicons font is licensed under the SIL OFL 1.1: http://scripts.sil.org/OFL Academicons CSS, LESS, and SASS files are licensed under the MIT License: http://opensource.org/licenses/mit-license.html The Academicons documentation is licensed under the CC BY 3.0 License: http://creativecommons.org/licenses/by/3.0/ Author # GitHub: https://github.com/jpswalsh Web: http://jpswalsh.com `}),e.add({id:4,href:"/docs/events/archive/archive_seminar/",title:"Archive of COLA Seminar Series",section:"Docs",content:` Archive of COLA Seminar Series # 2022 # Agenda (Year 2021) # June Exeter-Leiden Symposium on Data-Driven Modeling and Optimization
Website | Ke Li, Hao Wang | June 6 `}),e.add({id:5,href:"/docs/events/archive/archive_reading/",title:"Archive of Reading Group",section:"Docs",content:` Archive of Reading Group # Agenda (Year 2022) # Oct Optimizing Millions of Hyperparameters by Implicit Differentiation
AISTAS 2020
paper | slides | Han Guo | October 16 Agenda (Year 2021) # June Learning from Multiple Cities: A Meta-Learning Approach for Spatial-Temporal Prediction
WWW 2019
paper | slides | Jiangjiao Xu | June 20
Bayesian temporal factorization for multidimensional time series prediction
IEEE PAMI 2021
paper | slides | Jiangjiao Xu | June 13
Discrete Fourier Transform and Random Fourier Features
Data-Driven Science and Engineering, Chapter 2: 47\u0026ndash;83, 2019
slides | Phoenix Williams | June 9
May Global Optimization via Inverse Distance Weighting and Radial Basis Functions
Comput. Optim. Appl., 77: 571\u0026ndash;595, 2020
paper | slides | Jiahao Zhou | May 30
Sequential Monte Carlo: Theory and Applications
Foundations and Trends in Machine Learning, 12(3): 307\u0026ndash;392, 2019
paper | slides | Peili Mao | May 23
Mar Generalized Homotopy Approach to Multiobjective Optimization
J. Optimiz. Theory App., 110: 557\u0026ndash;583, 2001
paper | slides | Yongqi Feng | Mar 15
Machine Learning Approaches in Programming Language Type Inference
slides | Jiancheng Qian | Mar 7
Feb Understanding and Improving Information Transfer in Multi-Task Learning
ICLR 2020
paper | slides | Renzhi Chen | Feb 7 Jan OOD-MAML: Meta-Learning for Few-ShotOut-of-Distribution Detection and Classification
NIPS 2020
paper | slides | Jiangjiao Xu | Jan 31
Domination Measure: A New Metric for Solving Multiobjective Optimization
INFORMS J. Comput., 32(3): 565\u0026ndash;581, 2020
paper | slides | Xinyu Shan | Jan 24
ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators
ICLR 2020
paper | slides | Shasha Zhou | Jan 3
Agenda (Year 2020) # Dec Surrogate Assisted Evolutionary Algorithms, Fan Li Dec 27
[slides]
RoboGrammar: Graph Grammar for Terrain-Optimized Robot Design, ACM Trans. Graphics. Jiahao Zhou Dec 20
[ paper] [slides]
Optimization, Fast and Slow: Optimally Switching Between Local and Bayesian Optimization, ICML 2018. Guozhao Wei Dec 13
[ paper] [slides]
Nov Ordinal Regression with Multiple Output CNN for Age Estimation, CVPR 2016. Guiyu Lai Nov 29
[ paper] [ slides]
Towards Fast Adaptation of Neural Architectures with Meta Learning, ICLR 2020. Shasha Zhou Nov 22
[ paper] [ slides]
`}),e.add({id:6,href:"/docs/events/archive/archive_study/",title:"Archive of Study Group",section:"Docs",content:" Archive # 2022 # "}),e.add({id:7,href:"/docs/events/seminars/",title:"COLA Seminar Series",section:"Docs",content:` COLA Seminar Series # This is our seminar series where we exchange ideas with guest speakers, keeping you up to date with the latest developments and inspiring research topics. Occasionally, COLA researchers present their own work as well. Agenda (Year 2023) # April Turing Workshop on Human-Centric AI and Applications
Website | Ke Li | April 26-28 Previous seminar series can be found from our archive.
`}),e.add({id:8,href:"/docs/misc/ddl/",title:"Deadlines",section:"Docs",content:` Deadlines # Here are some important deadlines for the major conferences in artificial intelligence and machine learning (AI \u0026amp; ML), data mining (DM), natural language processing (NLP), software engineering (SE) and evolutionary computation (EC) domains.
AI IJCAI 2024: January 17, 2024 ECAI 2024: April 25, 2024 AAAI 2024: August 15, 2023 ICLR 2024: September 28, 2023 ML ICML 2024: Feburary 1, 2024 AutoML 2024: Feburary 29, 2024 ECML/PKDD 2024: March 22, 2024 UAI 2024: February 9, 2024 NeurIPS 2023: May 17, 2023 AISTAS 2024: October 13, 2024 CV CVPR 2024: November 17, 2024 ICCV 2023: March 8, 2023 ECCV 2022: March 7, 2022 DM KDD 2023: February 2, 2023 ICDM 2023: July 1, 2023 SDM 2023: October 14, 2022 CIKM 2023: June 2, 2023 NLP ACL 2022: November 15, 2021 NAACL 2022: Jan 15, 2022 COLING 2022: May 15, 2022 EMNLP 2022: May 24, 2022 SE ISSTA 2024: December 15, 2023 (1st round) | April 12, 2024 (2nd round) FSE 2024: September 28, 2023 ASE 2024: June 7, 2024 ICSE 2025: March 22, 2024 (1st round) | August 2, 2024 (2nd round) ICSME 2023: April 27, 2023 ICPC 2023: December 19, 2022 ESEM 2023: May 2, 2023 ISSRE 2023: May 22, 2023 SANER 2023: October 21, 2022 ICST 2023: January 27, 2023 QRS 2022: September 10, 2022 MSR: January 16, 2023 EC GECCO 2024: February 1, 2024 WCCI 2024: January 15, 2024 PPSN 2024: April 5, 2024 CEC 2023: January 13, 2023 SMC 2023: April 15, 2023 FOGA 2022: May 7, 2022 SSCI 2023: June 30, 2023 `}),e.add({id:9,href:"/docs/research/emoc/",title:"EMOC",section:"Docs",content:` EMOC stands for Evolutionary Multi-objective Optimization in C++ which is a framework for single-objective and multi-objective optimization.
For more information about installation and usage, please refer to the document site.
Features # Rich algorithms and problems
EMOC implemented about 30 algorithms and more than 80 test problems which both include single-objective and multi-objective types.
Developed in C++ and Cross-platform
All the source code of EMOC are wrote in C++. So the running efficiency is guaranteed when comparing other implementation with python, java or matlab. We also provide cross-platform compatibility for users with different operator systems.
Friendly GUI
EMOC provides a user-friendly GUI with the function of configuring parameters of once-run and experiments without writing a single line of code.
Various Optimization Types
EMOC supports unconstraint optimization, constraint optimization and combinatorial optimization (including binary encoding and permutation encoding).
Save into Excel or Latex
Users can save the experiment results of EMOC in the format of Latex.
Third Party Libraries # GLFW ALGLIB Dear Imgui pybind11 cxxopts stb_image Gnuplot CMake FontAwesome `}),e.add({id:10,href:"/docs/research/grants/",title:"Grants",section:"Docs",content:" Grants # We are grateful to have been generously supported by or closely working with the following funding bodies and industrial partners. Ongoing Knowledge-Driven Evolutionary Multi-Objective Search for Automated Software Configuration Tuning\nKan Tong Po Fellowship 2023 | #KTP\\R1\\231017 | PI | £3,000 | 2023\u0026ndash;2024. EASY-CROSS: Secure and Modular Border Control Platform Supporting Handheld Biometric Scanning Devices for Verifying Travellers Crossing EU Land and Sea Borders\nMSCA Staff Exchange 2022 | #TBD | Co-I | €613,185 | 2024\u0026ndash;2027. VENTURE: Investigating the Role of RNA Structure in mRNA Export\nERC Consolidator Grant (UKRI Horizon Europe Guarantee) | EP/Y009886/1 | External Participant | £1,644,752 | 2023\u0026ndash;2028.\nTransfer Optimisation System for Adaptive Automated Nature-Inspired Optimisation\nUKRI Future Leaders Fellowship Phase 2: #MR/X011135/1 | PI | £743,285 (prima facie case) | 2023\u0026ndash;2026.\nPhase 1: #MR/S017062/1 | PI | £1,370,803 | 2019\u0026ndash;2023. Evolutionary Multi-Objective Search for Automating CNN Architecture Design\nRoyal Society | #IES\\R2\\212077 | PI | £11,815 | 2021\u0026ndash;2023. Human-Centric Computing\nAlan Turing Fellowship | PI | 2021\u0026ndash;2023. Towards Scalable Multi-Objective Bilevel Optimization: Foundations, Methodologies and Applications\nHong Kong GRF | # 11211521 | Co-I (with PI: Prof. Kay Chen Tan from The Hong Kong Polytechnic University) | HK$1,150,000 | 2021\u0026ndash;2024. Knowledge Representation in Transfer Optimisation System and Applications for Highly Configurable Software Systems\nEPSRC DTP Doctoral Prize | #2404317 | PI | £74,000 | 2020\u0026ndash;2024. Finished Many Hands Make Work Light: Multi-task Deep Semantic Learning for Testing Web Application Firewalls\nAmazon Research Award | PI | $80,000 + $10,000 | 2021\u0026ndash;2022. Transfer Bayesian Optimization for Multi-Fidelity Data in Uncertain Environments\nEuropean Network Fund | #GP ENF5.10 | PI | £7,440 | 2021\u0026ndash;2022. Dynamic Resource Management and Optimization for SLA Guarantees in Hyperconverged Communication Infrastructures\nEPSRC Industrial CASE Studentship | #EP/P51049X/1 | Co-I (with PI: Prof. Geyong Min) | £81,430 | 2017\u0026ndash;2021. Multi-Task Semi-Supervised Deep Learning based on Evolutionary Algorithms and Its Applications\nNSFC | #61876162 | Co-I (with PI: Prof. Kay Chen Tan) | ¥640,000 | 2019\u0026ndash;2022. University of Exeter Start-up Grant | PI | £10,000 | 2017\u0026ndash;present. Three-Fold Decomposition in Multi-objective Optimization\nNorth-European Associated Team Project between INRIA Lille Nord Europe and University of Exeter | PI | €10,000 | 2018\u0026ndash;2020. Key Questions in Multi-Label Active Learning: Multi-objective Optimisation\nRoyal Society International Exchange Program (Cost Share with NSFC) | #IEC/NSFC/170243 | PI | £11,863 | 2018\u0026ndash;2020. Research on Key Problems in Dynamic Environment Multi-objective Evolutionary Optimization\nNSFC | #61502408 | Co-I (with PI: Prof. Juan Zou) | ¥250,000 | 2015\u0026ndash;2018. DAASE: Dynamic Adaptive Automated Software Engineering\nEPSRC Program Grant | #EP/J017515/1 | Research Fellow | ¥6,834,903 | 2012\u0026ndash;2019. Evolutionary Computation for Dynamic Optimisation in Network Environments\nEPSRC | #EP/K001523/1 | Research Fellow | ¥512,325 | 2013\u0026ndash;2017. Stable Matching Theory in Multiobjective Evolutionary Algorithm based on Decomposition\nHong Kong GRF | #11205314 | proposal drafting and activity scheduling | HK$692,894 | 2014\u0026ndash;2017. RCUK # International # Industry Partners # "}),e.add({id:11,href:"/docs/misc/dtec/",title:"IEEE DTEC",section:"Docs",content:` IEEE CIS Task Force 12 # Task Force on Decomposition-based Techniques in Evolutionary Computation Objectives # As the name suggests, the basic idea of the decomposition-based technique is to transform the original complex problem into simplified subproblem(s) so as to facilitate the optimization. Decomposition-based techniques have been widely used for solving both single- and multi-objective optimization problems. More specifically, in single-objective optimization, especially for the large-scale scenarios, which consider a tremendous amount of decision variables, the decomposition-based technique contains three aspects: 1) analyzing and understanding the fitness landscape and modularity structure of the underlying problem; 2) decomposing the original complex problem into several loosely coupled or independent subproblems based on the learnt characteristics; 3) using a meta-heuristic to solve these subproblems in a sequential or concurrent manner. As for multi-objective optimization, the decomposition means to decompose the original multi-objective optimization problem into a number of single-objective optimization sub-problems (or simple multi-objective optimization problems) and then uses a meta-heuristic to optimize these sub-problems simultaneously and collaboratively. In this big data era, the decomposition-based techniques used for both single- and multi-objective optimization can be sythesized to address the challenges posed by the curse of dimensionality, i.e., many objectives and large scale variables.
The key objective of this task force it to generalize the decomposition-based idea and to promote its related research, including its development, education and understanding of its sub topic areas.
The main objectives of the task force can be summarized as follows:
create an active and healthy community to promote theme areas of decomposition-based techniques make student, researchers, end-users, developers, and consultants aware of the state-of-the-art promote the use of decomposition-based methodologies/techniques and tools organize conferences/workshop with IEEE CIS Technical Co-Sponsorship organize tutorials, workshops and special sessions launch edited volumes, books, and special issues in journals Anticipated Interests # This task force will focus on all aspects, including theory, practice and applications, of the decomposition-based technique in evolutionary computation for solving both single-, multi- and many-objective optimization problems. Topics of interest including but are not limited to the following:
Design of novel weight vector generation methods Development of new decomposition methods Design of novel computational resource allocation strategies Integration of new reproduction operators Investigation of novel mating selection and replacement procedures Understanding of the relationship between subproblems and solutions Development of novel decomposition-based MOEAs Hybridization of dominance- and decomposition-based approaches Incorporation of user-preferences in decomposition-based MOEAs Extension to many-objective optimization problems Extension to constrained multi- and many-objective optimization problems Design of novel methods to analyze and understand the modularity structure Design of novel cooperative coevolution for large-scale optimization problems Theoretical analysis of the decomposition-based methods On-Going Activities # Special session on Advances in Decomposition-based Evolutionary Multi-­objective Optimization (ADEMO), at the 2024 IEEE Wolrd Congress on Computational Intelligence (IEEE WCCI 2024), organized by Saúl Zapotecas-Martínez, Bilel Derbel, Ke Li and Qingfu Zhang. Past Activities # Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 2023 IEEE Congress on Evolutionary Computation (IEEE CEC 2023), organized by Ke Li. Special session on Advances in Decomposition-based Evolutionary Multi-­objective Optimization(ADEMO), at the 2023 IEEE Congress on Evolutionary Computation (IEEE CEC 2023). Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 2023 IEEE Symposium Series on Computational Intelligence (IEEE SSCI 2022), organized by Ke Li. Special session on Advances in Decomposition-based Evolutionary Multi-­objective Optimization (ADEMO), at the 2022 IEEE Wolrd Congress on Computatinoal Intelligence (IEEE WCCI 2022). Special session on Advances in Decomposition-based Evolutionary Multi-­objective Optimization, at the 2021 IEEE Congress on Computational Intelligence (IEEE CEC 2021), organized by Saúl Zapotecas-Martínez, Bilel Derbel, Ke Li and Qingfu Zhang. Workshop on Decomposition Techniques in Evolutionary Optimization (DTEO), at the 2021 Genetic and Evolutionary Computation Conference (GECCO 2021). The deadline is February 4, 2021 Please consider submitting your best work to this workshop and see you in Cancun! Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 2021 Genetic and Evolutionary Computation Conference (GECCO 2021), organised by Ke Li and Qingfu Zhang. Special session on Advances in Decomposition-­based Evolutionary Multi-­objective Optimization, at the 2020 IEEE Congress on Computational Intelligence (IEEE WCCI 2020), organized by Saúl Zapotecas-Martínez, Bilel Derbel, Ke Li and Qingfu Zhang. Workshop on Decomposition Techniques in Evolutionary Optimization (DTEO), at the 2020 Genetic and Evolutionary Computation Conference (GECCO 2020). The deadline is March 27, 2020 Please consider submitting your best work to this workshop and see you in Cancun! Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 2020 Genetic and Evolutionary Computation Conference (GECCO 2020), organised by Ke Li and Qingfu Zhang. Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 16th International Conference on Parallel Problem Solving from Nature (PPSN XVI), organised by Ke Li and Qingfu Zhang. Special session on Advances in Decomposition-­based Evolutionary Multi-­objective Optimization, at the 2019 IEEE Congress on Evolutionary Computation (IEEE CEC 2019), organized by Saúl Zapotecas-Martínez, Bilel Derbel, Ke Li and Qingfu Zhang. Workshop on Decomposition Techniques in Evolutionary Optimization (DTEO), at the 2019 Genetic and Evolutionary Computation Conference (GECCO 2019). The deadline is March 27, 2019. Please consider submitting your best work to this workshop and see you in Prague! Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 2019 Genetic and Evolutionary Computation Conference (GECCO 2019), organised by Ke Li and Qingfu Zhang. Workshop on Decomposition Techniques in Evolutionary Optimization (DTEO), at the 2018 Genetic and Evolutionary Computation Conference (GECCO 2018). The deadline is March 27, 2018. Please consider submitting your best work to this workshop and see you in Kyoto! Tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities, at the 2018 Genetic and Evolutionary Computation Conference (GECCO 2018), organised by Ke Li and Qingfu Zhang. Special issue on Recent Advances in Evolutionary Multi-Objective Optimization, at the Swarm and Evolutionary Computation journal, organized by Slim Bechikh and Carlos. A. Coello Coello. The deadline is May 30, 2017. You are highly encouraged to submit your best work here! Special session on Advances in Multiobjective Evolutionary Algorithms based on Decomposition, at the IEEE Congress on Evolutionary Computation (IEEE CEC 2017), organized by Anupam Trivedi, Dipti Srinivasan and Qingfu Zhang. Tutorial on Recent Advances in Multi-objective and Many-objective Evolutionary Algorithms, at the IEEE Congress on Evolutionary Computation (IEEE CEC 2017), organized by Anupam Trivedi and Dipti Srinivasan. Plenary Talk on Use of Traditional Optimization Methods in Multiobjective Evolutionary Computation, at the IEEE Congress on Evolutionary Computation (IEEE CEC 2017), delivered by Qingfu Zhang. Tutorial on Advances in Multi-objective Evolutionary Algorithms based on Decomposition, at the Australasian Conference on Artificial Life and Computational Intelligence (ACALCI 2017), organized by Anupam Trivedi and Dipti Srinivasan. Special session on Advances in Decomposition­based Evolutionary Multi­objective Optimization, at the IEEE World Congress on Computational Intelligence (IEEE WCCI 2016), organized by Sa\u0026rsquo;ul Zapotecas Mart\u0026rsquo;inez, Bilel Derbel, Qingfu Zhang and Carlos A. Coello Coello. Tutorial on Decomposition and Cooperative Coevolution Techniques for Large Scale Global Optimization, at the IEEE Congress on Evolutionary Computation (IEEE CEC 2015), organized by Xiaodong Li. Tutorial on Decomposition and Cooperative Coevolution Techniques for Large Scale Global Optimization, Genetic and Evolutionary Computation Conference (GECCO 2014), organized by Xiaodong Li. Resources # Repository of the state-of-the-art developments of multi-objective evolutionary algorithm based on decomposition (MOEA/D) can be found from here.
Recent survey paper on the developments of MOEA/D:
A. Trivedi, D. Srinivasan, K. Sanyal, A. Ghosh, A Survey of Multiobjective Evolutionary Algorithms based on Decomposition, IEEE Trans. on Evolutionary Computation, 21(3): 440-462, 2016. A. Santiago, H. Huacuja, B. Dorronsoro, J. Pecero, C. Santillan, J. Barbosa, J. Monterrubio, A Survey of Decomposition Methods for Multi-objective Optimization, Recent Advances on Hybrid Approaches for Designing Intelligent Systems, 453-465, 2014. Chairs # Bilel Derbel (Chair), University of Lille, France. Ke Li (Vice Chair, Founding Chair), Department of Computer Science, University of Exeter, Exeter, UK. Qingfu Zhang (Vice Chair), Department of Computer Science, City University of Hong Kong, Hong Kong SAR, China. Members # Slim Bechikh, University of Tunis, Tunisia. Ran Cheng, Southern University of Science and Technology, China. Kalyanmoy Deb, Michigan State University, USA. Hisao Ishibuchi, Osaka Prefecture University, Japan. Yaochu Jin, University of Surrey, UK. Sam Kwong, City University of Hong Kong, Hong Kong SAR, China. Xiaodong Li, RMIT University, Australia. Arnaud Liefooghe, University of Lille, France. Hui Li, Xi\u0026rsquo;an Jiaotong University, China. Miqing Li, University of Birmingham, UK. Sanaz Mostaghim, Otto von Guericke University of Magdeburg, Germany. Tapabrata Ray, University of New South Wales, Australia. Dipti Srinivasan, National University of Singapore, Singapore. Hiroyuki Sato, University of Electro-communications, Japan. Kay Chen Tan, City University of Hong Kong, Hong Kong SAR, China. Ke Tang, Southern University of Science and Technology, China. Shengxiang Yang, De Montfort University, UK. Aimin Zhou, East China Normal University, China. Saúl Zapotecas, Unidad Cuajimalpa, México. `}),e.add({id:12,href:"/docs/home/members/",title:"Members",section:"Docs",content:` Members # Lookup table of acronyms in this page. \u0026#43; EMO: evolutionary multi-objective optimization BO: Bayesian optimization BLO: bi-level optimization MFO: multi-fidelity optimization CO: constrained optimization DO: dynamic optimization MCM: Monte Carlo method LA: landscape analysis TL: transfer learning MTL: multi-task learning LL: life-long learning GP: Gaussian processes NLP: natural language processing SE: software engineering VNF: virtual network functions Faculty # Dr Ke Li
UKRI FLF | Turing Fellow
Senior Lecturer
Department of Computer Science
University of Exeter
Research Staff(s) # Dr Fan Li
Research Fellow
04/2021 – present
Interests: MFO, TL, MTL, EMO PhD Student(s) # Jack Cole
PhD Student
To join in 2024
Interests: RL, HCO, EMO Shasha Zhou
PhD Student
2023 - present
Interests: XAI, ML, EMO Xiaotian Zou
PhD Student
2023 – present
Interests: EMO, Fairness Phoenix Williams
PhD Student
2020 - present
Interests: BO, TL, EMO Heng Yang
PhD Student
2021 – present
Interests: NLP, SE, Code naturalness Jiancheng Qian
PhD Student
2020 – present
Interests: NLP, SE, Code naturalness Peili Mao
PhD Student
2021 – present
Interests: SE, BO, MCM, LA Shengbo Wang
PhD Student
2021 – present
Interests: BO, SO Savas Yuec
PhD Student
2018 - present
Interests: EMO, BO, reliability Dongya Wang
PhD Student
2018 - present
Interests: EMO, CO Visitor(s) # Kailai Gao
Visiting PhD Student
Northeastern University
02/2023 – present
Interests: BO, MTL Alumni # PhD students Dr Joseph Billingsly
01/09/2017 \u0026ndash; 01/05/2022, University of Exeter PhD student, co-supervised with Prof. Geyong Min Job: -\u0026gt; G-Research London Outputs: 2 EMO papers, 1 GLOBECOM paper, 1 WCCI paper Dr Mengyuan Wu
01/09/2014 \u0026ndash; 01/07/2018, City University of Hong Kong PhD student, co-supervised with Prof. Sam Kwong Job: -\u0026gt; Huawei Noah\u0026rsquo;s Ark Laboratory Outputs: 3 IEEE Trans papers, 1 GECCO paper, 1 SMC paper Dr Renzhi Chen
01/09/2013 \u0026ndash; 01/06/2018, University of Birmingham PhD student, co-supervised with Prof. Xin Yao Job: -\u0026gt; National Defense University of Technology -\u0026gt; PLA Academy of Military Science Outputs: 4 IEEE Trans papers Postdocs Dr Jiangjiao Xu
01/07/2020 - 01/11/2022, University of Exeter Job: Zhongneng Integrated Smart Energy Technology Co. Ltd. Beijing, China -\u0026gt; Shanghai Electric University Dr Xinqi Li
01/11/2021 \u0026ndash; 01/08/2022, University of Exeter Job: -\u0026gt; GLAMOROUS.AI Visiting students Mr Shuang Li 07/2022 \u0026ndash; 07/2023, Harbin Institute of Technology Visiting PhD student Miss Jiaxin Chen 06/2021 \u0026ndash; 05/2023, Northeastern University Visiting PhD student Miss Huan Zhang 06/2021 \u0026ndash; 01/12/2022, Northeastern University Visiting PhD student Mr Jiadi Liu 01/11/2019 \u0026ndash; 05/11/2020, Southwest University Visiting PhD student Mr Ruxin Zhao 01/11/2019 \u0026ndash; 05/11/2020, Nanjing University of Science and Technology Visiting PhD student Miss Yingying Guan 01/11/2019 \u0026ndash; 05/11/2020, Northeastern University Visiting PhD student Mr Lingjie Li 01/09/2019 \u0026ndash; 01/12/2019, Shenzhen University Visiting student Dr Nan Mu 01/06/2018 \u0026ndash; 31/12/2018, Wuhan University of Technology Visiting PhD student Job: -\u0026gt; Sichuan Normal University Visiting scholars Dr Lei Yang 01/12/2017 \u0026ndash; 01/12/2018, South China Agricultural University Visiting scholar Job: -\u0026gt; South China Agricultural University Dr Geng Lin 01/07/2018 \u0026ndash; 01/08/2018, Minjiang University Visiting scholar Job: -\u0026gt; Minjiang University `}),e.add({id:13,href:"/docs/home/news/",title:"News",section:"Docs",content:` News Archive # 2023 # Dec Our paper on \u0026ldquo;Constrained Bayesian Optimization Under Partial Observations: Balanced Improvements and Provable Convergence\u0026rdquo; has been accepted to AAAI 2024. In this paper, Shengbo did a very beautiful and rigorous theoretical discussion on how to carefully explore constraint boundary in partially observable environments. Very well done! December 9
Our paper on \u0026ldquo;DaNuoYi: Evolutionary Multi-Task Injection Testing on Web Application Firewalls\u0026rdquo; has been accepted IEEE Transactions on Software Engineering. Congratulations to Heng! Very well done! December 2
Oct I have been recognized in the Stanford list of top 2% of scientists in the world in 2023. This is my third consecutive year to be listed. Thank you very much for the excellent work from my team and collaborators. October 10
Our paper on \u0026ldquo;Evolutionary Multi-objective Instruction Optimization via Large Language Model-based Instruction Operators\u0026rdquo; has been accepted to the Findings of EMNLP 2023. Congratulations to Heng! Very well done! October 7
Sep I\u0026rsquo;m glad to be awarded the Kan Tong Po International Fellowship from the Royal Society! Congratulations and really appreciate the continuous support from the Royal Society. This fellowship will support to visit Prof. Kan Chen Tan in the Hong Kong Polytechnic University and consolidate our collaborations. September 28
Our COLA-Lab team is in the second place of the AutoML Cup 2023. Congratulations to Fan, Peili and Heng! Well done for your hard work! This is our first time to participate the AutoML competition. Hope we can win the trophy cup next time. September 26
We have two papers accepted to NeurIPS 2023! Congratulations to Shuang and Phoenix! Shuang\u0026rsquo;s work is a very interesting and unique perspective to redefine the stopping criterion in Bayesian optimization. I see many further applications based on this criterion. Phoenix developed a very interesting adversarial attack method based on CamoPatch. Very cool idea! Very well done! September 21
Our paper on \u0026ldquo;Quality Indicators for Preference-based Evolutionary Multi-objective Optimization Using a Reference Point: A Review and Analysis\u0026rdquo; has been accepted to IEEE Trans. Evolutionary Computation. Congratulations to Ryoji! Very well done! September 19
Our paper on \u0026ldquo;DaNuoYi: Evolutionary Multi-Task Injection Testing on Web Application Firewalls\u0026rdquo; has been accepted to IEEE Trans. Software Engineering pending to minor revision. Congratulations to Heng! Very well done! This is part of the outcome from my Amazon Research Award. September 18
Aug Our paper on \u0026ldquo;A Data-Driven Evolutionary Transfer Optimization for Expensive Problems in Dynamic Environments\u0026rdquo; has been accepted to IEEE Trans. Evolutionary Computation. Congratulations to Renzhi! Very well done! This works opens several new perspectives on how we can leverage the historical data in a manageable way. More information will be posted soon. August 7
Our paper on \u0026ldquo;PyABSA: A Modularized Framework for Reproducible Aspect-based Sentiment Analysis\u0026rdquo; has been accepted to CIKM 2023 Demo Track. Congratulations to Heng! Very well done! August 5
A new PhD studentship is opening in our lab!!! This project is mainly led by our colleagues in the Engineering department. The topic is about trustworthy and explainable AI for smart energy system management. Please feel free to contact me about more details. August 1
Our paper on \u0026ldquo;Multidimensional Resource Fragmentation-Aware Virtual Network Embedding for IoT Applications in MEC Networks\u0026rdquo; has been accepted to IEEE Internet of Things Journal. Congratulations to Yingying! Very well done! August 1
Jun Shasha and Xiaotian have successfully secured their Exeter-CSC PhD studentships and will join us this fall. Congratulations to them both, and warm welcome to join COLA laboratory this September. June 22
Glad to announce that one project proposal (EASY-CROSS) is granted by MSCA Staff Exchange 2022. This project is about secure and modular boarder control supported by handheld biometric scanning devices. Look forward to seeing interesting collaborations coming out of this project. Congratulations to our colleagues. June 1
We have three papers accepted to IEEE SMC 2023. Congratulations to Renzhi, Shasha and Tian! Well done! June 1
May Our paper on \u0026ldquo;Boosting Text Augmentation via Hybrid Instance Filtering Framework\u0026rdquo; has been accepted to the Findings of ACL 2023. Congratulations to Heng! Very well done! May 2 Apr I\u0026rsquo;m glad to be invited to join the Editorial Board for Mathematics journal (Impact Factor=2.592). April 21
Our paper on \u0026ldquo;Exploring Structural Similarity in Fitness Landscapes via Graph Data Mining: A Case Study on Number Partitioning Problems\u0026rdquo; has been accepted to IJCAI 2023. Congratulations to Mingyu! Very well done! April 19
Our paper on \u0026ldquo;A Surrogate Assisted Evolutionary Strategy for Image Approximation by Density-Ratio Estimation\u0026rdquo; has been accepted to CEC 2023. Congratulations to Phoenix! Very well done! April 15
Mar COLA-Lab is now hiring!!! We have multiple fully funded PhD studentships available for September 2023 entry. Detailed information can be found from here.
I\u0026rsquo;m pleased to announce that my Turing Fellowship has been extended to the end of this September. Look forward to engage with the Alan Turing Institute to develop a broader collaborative network. March 28
Our paper on \u0026ldquo;A Multi-Population Evolutionary Algorithm Using New Cooperative Mechanism for Solving Multi-Objective Problems with Multi-Constraint\u0026rdquo; has been accepted to IEEE Trans. Evol. Comput. Congratulations to our collaborators! March 25
I\u0026rsquo;m glad to be invited to join the Editorial Board for the Brain-Computer Intersection section of Frontiers in Human Neuroscience journal (Impact Factor=3.473). March 20
Our tutorial on \u0026ldquo;Preference-Based Evolutionary Multi-Objective Optimization: Steppingstone to Involve Human in the Loop\u0026rdquo; has been accepted to IEEE CEC 2023 and SMC 2023. This is an emerging topic that has been explored in my group for more than five years. It is my pleasure to share with you some of our very recent advances along this direction. Look forward seeing you in Chicago and Hawaii. March 4
My paper on \u0026ldquo; Batched Data-Driven Evolutionary Multi-Objective Optimization Based on Manifold Interpolation\u0026rdquo; published in IEEE Tran. Evolutionary Computation this year has been invited to give a Journal to Conference talk in IEEE CEC 2023. March 2
Feb COLA-Lab is now hiring!!! We have multiple fully funded PhD studentships available for September 2023 entry. Detailed information can be found from here.
Our papers on \u0026ldquo;Black-Box Sparse Adversarial Attack via Multi-Objective Optimisation\u0026rdquo; has been accepted to CVPR 2023. Congratulations to Phoenix! Very well done! February 27
Jan COLA-Lab is now hiring!!! We have multiple fully funded PhD studentships available for September 2023 entry. Detailed information can be found from here.
Our papers on \u0026ldquo;Evolutionary Bi-level Optimization via Multi-objective Transformation Based Lower Level Search\u0026rdquo; has been accepted to IEEE Trans. Evol. Comput. Congratulations to our collaborators! January 2
2022 # Dec COLA-Lab is hiring!!! We have multiple fully funded PhD studentships available for September 2023 entry. Detailed information can be found from here. December 1
Our papers on \u0026ldquo;Interactive Evolutionary Multi-Objective Optimization via Learning-to-Rank\u0026rdquo; has been accepted to IEEE Trans. Evol. Comput. Congratulations to Guiyu! December 22
We have two papers accepted to EMO 2023. Congratulations to Renzhi and Phoenix! See you in Leiden! December 7
My UKRI Future Leaders Fellowship renewal has been approved as a prima facie case, i.e., without any further interview justification. There will be an additional three-year funding started from May 2023. Really appreciated the generous support from UKRI in the past nearly four years. Look forward to create a new research programme and fight for its future in the coming years. December 1
Our paper on \u0026ldquo;MTLP-JR: Multi-Task Learning-Based Prediction for Joint Ranking in Neural Architecture Search\u0026rdquo; has been accepted to Computers \u0026amp; Electrical Engineering. Congratulations to Bo and collaborators! December 1
Oct We have three papers accepted to the NeurIPS Workshop on Gaussian Processes, Spatiotemporal Modeling, and Decision-making Systems. Congratulations to Renzhi, Peili and Jiangjiao, very well done! October 14
I am proud to be recognized in the Top 2% Scientists Worldwide in a latest study from Stanford University. This is my third consecutive year to be recognized in this list. October 13
Sep Our paper on \u0026ldquo;Efficient Spectral Graph Convolutional Network Deployment on Memristive Crossbars\u0026rdquo; has been accepted to IEEE Trans. Emerg. Topics Comput. Congratulations to Bo and collaborators! September 29
The 12th International Conference Series on Evolutionary Multi-Criterion Optimization ( EMO 2023) is calling for papers. The deadline is November 30 October 12, 2022. This is biannual event for all EMO researchers and this time it will be on March 2023 in Leiden, the Netherlands. September 12 September 22
Our lab has been a bit slient for the last three months since I have been busy with a preparation of my project interview. Finger crossed and hope it will be secured at the end! September 5
Jun We have two papers get accepted to PPSN 2022. One is about a new angle look into the use of constant violation in constrained evolutionary multi-objective optimization and the other is about adversarial attack instance generation in natural language process. Congratulations to Shuang and Shasha! June 6 May We are going to organize a Exeter-Leiden Symposium on Data Driven Modeling and Optimization on June 6. Relevant information can be found here. It is running fully online and we are looking forward seeing you there. May 28
We are glad to announce a fully funded opportunity for undergraduate student(s) in the UK who are interested in experiencing a research placement at Exeter. The project is outlined in here and the proposed start date is 1st July, 2022. May 25
It is my great honor to be promoted as an IEEE Senior Member, which is an honor bestowed only to those who have made significant contributions to the profession. May 2
We are pleased to announce that we will host a summer school on Data-Driven Artificial/Computational Intelligence: Theory and Applications this August/September. This summer school is kindly supported by IEEE Computational Intelligence Society. We had a very successful one last year and hope to continue to prosperity this time and beyond May 1
Mar We have two papers get accepted to GECCO 2022. Both of them are about adversarial attack for neural networks. Congratulations to Shasha and Phoenix! Mar 25
Our paper on \u0026ldquo;Batched Data-Driven Evolutionary Multi-Objective Optimization Based on Manifold Interpolation\u0026rdquo; has been accepted to IEEE Trans. Evolutionary Computation. Congratulations to Renzhi! Mar 20
It is my great honor to join the Organization Committee of EMO 2023 as a Program Chair. We are looking forward to seeing you to join the biggest party in our EMO community in Leiden, the Netherlands! Mar 12
It is my great honor to participate the GREAT Talent campaign organized by the Cabinet Office. The story telling video is currently available online from here. Mar 1
Feb Our tutorial proposal on decomposition evolutionary multi-objective optimization has been accepted in PPSN 2022! Congratulations and see you guys all in Dortmund! Feb 14 Jan Our paper on \u0026ldquo;Preference based Multi-Objective Reinforcement Learning for Multi-Microgrid System Optimization Problem in Smart Grid\u0026rdquo; has been accepted to Memetic Computing. Congratulations to Jiangjiao! Jan 4 2021 # Dec I have been invited to renew my term as an Associate Editor of IEEE Trans. Evolutionary Computation in 2022. Be humbled to serve our best journal in the evolutionary computation community. Dec 27 Nov Our paper \u0026ldquo;Distributed UAV Swarm Formation and Collision Avoidance Strategies Over Fixed and Switching Topologies\u0026rdquo; is accepted to IEEE Trans. Cybernetics. Congratulations to Jia! Nov 24 Oct I am proud to be recognized in the Top 2% Scientists Worldwide in a latest study from Stanford University. Oct 28
We are pleased to announce that our collaborative bid with Dr Hao Wang at Leiden University has been funded by Europe Network Fund 2021-22. Looking forward to have many exciting collaboration therein! Oct 20
We are pleased to announce that our collaborative bid with UTS in Australia has been funded by Royal Society under the International Exchange scheme. Looking forward to have many exciting collaboration therein! Oct 7
Sep Our paper \u0026ldquo;Posterior Decision-Making Based on Decomposition-Driven Knee Point Identification\u0026rdquo; is accepted to IEEE Trans. Evolutionary Computation. Congratulations to Haifeng! Sep 15
It is honored to join Alan Turing Institute as a Alan Turing Fellow. I am looking forward new exciting opportunities in this UK\u0026rsquo;s national institute for data science and artificial intelligence. Sep 3
Collaborating with some colleagues, we have established a new theme focused on Trustworthy AI in Institute of Data Science and Artificial Intelligence at Exeter. We are exciting to promote many follow-up activates associated with this theme in due course. Sep 1
After four days intensive talks from our prestigious speakers, we are pleased to announce that our first IEEE CIS Summer School on Data-Driven Artificial/Computational Intelligence is successfully finished. Related materials will be released in due course after the permission from our speakers and IEEE. Sep 1
Aug Our paper \u0026ldquo;Neural Architecture Search for Portrait Parsing\u0026rdquo; is accepted to IEEE Trans. Neural Networks and Learning Systems. Congratulations to our fantastic collaborators! Aug 11
We have four papers accepted by IEEE SMC 2021. Congratulations to Renzhi, Phoenix and Jiangjiao! Aug 4
One proposal get funded by Hong Kong GRF. Congratulations to Prof. Kay Chen Tan and looking forward to working with you soon. Aug 1
Jun Our paper on \u0026ldquo;Transfer Learning Based Parallel Evolutionary Algorithm Framework for Bi-level Optimization\u0026rdquo; is accepted to IEEE Trans. Evolutionary Computation. Congratulations to Lei and collaborators! Jun 30
I have been identified as 2% top scientists in the world across all disciplines from a report published by Stanford University. At the moment, I am ranked around #3200 in the AI subfield worldwide. Jun 20
We are pleased to announce that we will host a summer school on Data-Driven Artificial/Computational Intelligence: Theory and Applications this August. This summer school is kindly supported by IEEE Computational Intelligence Society. Jun 17
We are pleased to announce that Heng has successfully secured his PhD studentship from both CSC and Exeter. He will start his PhD journal in our lab since this autumn. Jun 3
May We are pleased to announce that Peili has successfully secured his studentship and will start his PhD journal since this autumn. May 28
We are glad to announce that Maja Kaczmarek, a second year undergraduate student from the University of Manchester, has been awarded a REP studentship from SWBio DTP (only two in Exeter). We will work with Dr Yiliang Ding\u0026rsquo;s group from John Innes Centre on some exciting topics about RNA structure prediction. May 17
Apr Proud to be one of three awardees in the UK to win an Amazon Research Awards 2020. Really appreciate the generous support from Amazon to carry on our interesting work on multi-task learning! Please see press news from [ Amazon Science 1], [ Amazon Science 2], [ About Amazon Blog UK], [ Exeter News], [ Linkedin], [ 机器之心], [ 新智元], [ AI科技评论]. Apr 29
Our paper \u0026ldquo;A Vector Angles-based Many-objective Particle Swarm Optimization Algorithm Using Archive\u0026rdquo; is accepted to Applied Soft Computing. Congratulations to Lei! Apr 27
Our paper \u0026ldquo;Vertical Distance Based Clonal Selection Mechanism for Multi-objective Immune Algorithm\u0026rdquo; is accepted to Swarm and Evolutionary Computation. Congratulations to Lingjie! Apr 14
Our paper on empirical study of various control mechanisms in interactive evolutionary multi-objective optimization is accepted to IEEE CEC 2021. Congratulations to Guiyu! Apr 6
Mar It is grateful to receive an unrestricted gift from Amazon Research Awards for multi-task learning semantic feature from various injections to test Web application firewalls. Thanks for Amazon\u0026rsquo;s generous support! Mar 24
After a wonderful three-year journey of founding and serving as the Chair of the IEEE Task Force 12 on Decomposition-based Techniques in Evolutionary Computation, I have stepped down as a Vice Chair since this year. It is my pleasure to witness the growing up of our community and a wider range of engagements worldwide. My colleague Prof. Bilel Derbel kindly takes up the new Chair position and will promote the activities further. Mar 4
Jan I have been invited to renew my role as an Associate Editor for the prestigious IEEE Trans. Evol. Comput., the flagship journal in artificial/computational Intelligence. Jan 3 2020 # Dec Our paper on Bayesian Network Based Label Correlation Analysis For Multi-label Classifier Chain has been accepted for publication in Information Sciences. Congratulations to my collaborators! Dec 8
There are multiple openings in our lab for PhD students 2021 entry. The studentships are available for both UK/EU and international students. Please have a look at vacancies and feel free to contact with me for more details.
Our workshop on Decomposition Techniques in Evolutionary Optimization ( DTEO) has been approved by GECCO 2021! Please submit your latest work to DTEO. Dec 3
Our tutorial on Decomposition Multi-Objective Optimization: Current Developments and Future Opportunities has been approved by GECCO 2021! This is the 4th time we have this tutorial in GECCO. See you next year in Lille, hopefully the pandemic is over then. Dec 3
Nov There are multiple openings in our lab for PhD students 2021 entry. The studentships are available for both UK/EU and international students. Please have a look at vacancies and feel free to contact with me for more details.
Our special issue on Advances in Decomposition-based Evolutionary Multi-objective Optimization ( ADEMO) has been approved by CEC 2021! Please submit your latest work on all decomposition-based approaches to ADEMO. Nov 19
All our three submissions to EMO 2021 are accepted for oral presentation. Congratulations to Jiangjiao, Joe and Xinyu! See you in Shenzhen (virtually)! Nov 13
Aug Our paper on \u0026ldquo;Knee Point Identification Based on Voronoi Diagram\u0026rdquo; has been accepted to the IEEE SMC 2020 as a full paper for oral presentation. Congratulations to Haifeng! Aug 21
Our paper on “Performance Analysis of SDN and NFV enabled Mobile Cloud Computing” has been accepted to the IEEE GLOBECOM 2020 as a full paper for oral presentation. Congratulations to Joseph! Aug 17
Jul Our paper on \u0026ldquo;Bilevel Programming for Automated Model Discovery in Cross-Project Defect Prediction\u0026rdquo; has been accepted to the ASE 2020 as a full paper (acceptance rate is 93/414 = 22.5%). We have developed a bilevel programming tool to automate the model discovery in cross-project defect prediction. More details will be released in our project page. Jul 30
Glad to be invited to join the Editorial Board of Complex \u0026amp; Intelligent Systems. Jul 22
Jun Finally, I win the trophy for the Teaching Awards 2020 as a Outstanding Supervisor. Really appreciate the support and hard work from my team! Jun 26
It is so privilege and kind of unexpected to be shortlisted in the Teaching Awards 2020 as a Outstanding Supervisor. Really appreciate the nomination from my students. It is my pleasure to grow with you guys. Jun 16
May Our paper “Adaptive Operator Selection Based on Dynamic Thompson Sampling for MOEA/D” has been accepted to PPSN 2020 for oral presentation. Congratulations to Lei! May 27
Congratulations to my students Phoenix Williams who win an competitive EPSRC DTP Studentship and Jiancheng Qian who wins the China Scholarship Council and University of Exeter PhD Scholarship. Both of them will join my lab this September. Phoenix previous worked with me under the support of EPSRC Vacation Internship last summer. May 13
Apr Glad to serve as a PC member of PPSN 2020. Apr 20
Our paper \u0026ldquo;DeepSQLi: Deep Semantic Learning for Testing SQL Injection\u0026rdquo; has been accepted to ISSTA 2020 as a full paper (acceptance rate is 43/162 = 26.5%). We have developed a revolutionary view of taking advantage of the semantic information embedded in SQL injection cases. Thereafter, we use a state-of-the-art natural language processing tool to learn such semantic information and use that to automate the test case generation. More details will be released in our project page. Apr 15
Mar Our paper \u0026ldquo;Surrogate Assisted Evolutionary Algorithm for Medium Scale Multi-Objective Optimisation Problems\u0026rdquo; has been accepted to GECCO 2020 as a full paper. We provide a new framework to scale up the surrogate-assisted evolutionary algorithm for problems with up to 50 variables. Mar 20
Our paper \u0026ldquo;Routing-Led Placement of VNFs in Arbitrary Networks\u0026rdquo; and \u0026ldquo;Surrogate Assisted Evolutionary Algorithm Based on Transfer Learning for Dynamic Expensive Multi-Objective Optimisation Problems\u0026rdquo; have been accepted to WCCI 2020 as full papers. Mar 20
Our paper \u0026ldquo;Does Preference Always Help? A Holistic Study on Preference-Based Evolutionary Multi-Objective Optimisation Using Reference Points\u0026rdquo; has been accepted to IEEE Trans. Evolutionary Computation. We have several interesting findings first of their kind reported in this study. Project page will be released soon and please stay tuned to our latest information. Mar 17
Feb I am thrilled to be finally awarded the Research Excellence Awards of the CEMPS Academic Recognition Awards 2020! Feb 19
I am glad to be shortlisted for the Research Excellence Awards of the CEMPS Academic Recognition Awards 2020! Look forward to getting the crown. Feb 6
Jan I have been invited to serve as an Associate Editor for IEEE Trans. Evolutionary Computation, the flagship journal in artificial intelligence and the best in evolutionary computation. Jan 10
Our paper “On the Combined Impact of Population Size and Sub-problem Selection in MOEA/D” has been accepted to the 20th European Conference on Evolutionary Computation in Combinatorial Optimisation ( EvoCOP 2020). Congratulations to my collaborators! Jan 8
Our paper \u0026ldquo;Reference Point Based Multi-Objective Optimization of Reservoir Operation: A Comparison of Three Algorithms\u0026rdquo; has been accepted to Water Resources Management. Congratulations to my collaborators! Jan 7
`}),e.add({id:14,href:"/docs/research/landscapes/",title:"Publications",section:"Docs",content:` Graph-Based Fitness Landscape Analysis Leveraging the advanced tools developed in the field of network science to facilite the understanding of complex configurable systems in different domains.
Our Work # Publications # Exploring Structural Similarity in Fitness Landscapes via Graph Data Mining: A Case Study on Number Partitioning Problems
Mingyu Huang and Ke Li
Proc. of the 32nd International Joint Conference on Artificial Intelligence (IJCAI'23)
2023 | Conference Paper | Abs | PDF | Supp | BiB | One of the most common problem-solving heuristics is by analogy. For a given problem, a solver can be viewed as a strategic walk on its fitness landscape. Thus if a solver works for one problem instance, we expect it will also be effective for other instances whose fitness landscapes essentially share structural similarities with each other. However, due to the black-box nature of combinatorial optimization, it is far from trivial to infer such similarity in real-world scenarios. To bridge this gap, by using local optima network as a proxy of fitness landscapes, this paper proposed to leverage graph data mining techniques to conduct qualitative and quantitative analyses to explore the latent topological structural information embedded in those landscapes. In our experiments, we use the number partitioning problem as the case and our empirical results are inspiring to support the overall assumption of the existence of structural similarity between landscapes within neighboring dimensions. Besides, experiments on simulated annealing demonstrate that the performance of a meta-heuristic solver is similar on structurally similar landscapes. Analysis Methods # Statistical Features # Landscape Visualization # High-Level Topological Features # Case Studies # Classic BBOPs # AutoML # HousePrice-Train HousePrice-Test Stone-Train Stone-Test Software Engineering # Resources # Paper List of Landscape Analysis
Survey Papers Exploratory Landscape Analysis (ELA) Benchmarks Algorithm Selection Problem Instance Space Analysis Fitness Landscape Analysis (FLA) Problem-Specific Landscape Visualization Paper List of AutoML
Projects and Websites
Paper List of Landscape Analysis # Survey Papers
A Comprehensive Survey on Fitness Landscape Analysis
Erik Pitzer and Michael Affenzeller Recent Advances in Intelligent Engineering Systems
2012 | Survey Paper A Survey of Techniques for Characterising Fitness Landscapes and Some Possible Ways Forward
Katherine M. Malan and Andries Engelbrecht
Information Sciences
2013 | Survey Paper A Survey of Advances in Landscape Analysis for Optimisation
Katherine M. Malan
Algorithms
2021 | Survey Paper A Survey of Landscape Analysis for Optimisation
Feng Zou, Debao Chen, Hui Liu, Siyu Cao, Xuying Ji and Yan Zhang
Neurocomputing
2022 | Survey Paper Exploratory Landscape Analysis (ELA)
Exploratory Landscape Analysis
Olaf Mersmann, Bernd Bischl, Heike Trautmann, Mike Preuss, Claus Weihs and Gnter Rudolph
Proc. of the 13th Annual Genetic and Evolutionary Computation Conference (GECCO'11)
2011 | Conference Paper
Comprehensive Feature-Based Landscape Analysis of Continuous and Constrained Optimization Problems Using the R-Package Flacco
Pascal Kerschke and Heike Trautmann
Applications in Statistical Computing: From Music Data Analysis to Industrial Quality Improvement
2019 | Book Chapter
Flaccogui: Exploratory Landscape Analysis for Everyone
Christian Hanster, Pascal Kerschke Proc. of the 13th Annual Genetic and Evolutionary Computation Conference (GECCO'17)
2017 | Conference Paper
Exploratory Landscape Analysis is Strongly Sensitive to the Sampling Strategy
Quentin Renau, Carola Doerr, Johann Dreo and Benjamin Doerr Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;XVI)
2020 | Conference Paper
Automated Algorithm Selection on Continuous Black-Box Problems by Combining Exploratory Landscape Analysis and Machine Learning
Pascal Kerschke and Heike Trautmann Evolutionary Computation
2019 | Journal Paper
Benchmarking Evolutionary Algorithms: Towards Exploratory Landscape Analysis
Olaf Mersmann, Mike Preuss and Heike Trautmann Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;XI)
2010 | Conference Paper
Benchmarks
Real-Parameter Black-Box Optimization Benchmarking 2009: Noiseless Functions Definitions
Nikolaus Hansen, Steffen Finck, Raymond Ros and Anne Auger INRIA
2009 | Research Report
COCO: a platform for comparing continuous optimizers in a black-box setting
Nikolaus Hansen, Anne Auger, Raymond Ros, Olaf Mersmann, Tea Tušar and Dimo Brockhoff Optimization Methods and Software
2021 | Journal Paper
Algorithm Selection
Automated Algorithm Selection: Survey and Perspectives
Pascal Kerschke, Holger H. Hoos, Frank Neumann and Heike Trautmann
Evolutionary Computation
2019 | Survey Paper
Algorithm selection for black-box continuous optimization problems: A survey on methods and challenges
Mario A. Muñoz, Yuan Sun, Michael Kirley and Saman K. Halgamuge
Information Science
2015 | Survey Paper
Cross-disciplinary perspectives on meta-learning for algorithm selection
Kate A. Smith-Miles
ACM Computing Survey
2009 | Survey Paper
Algorithm Selection for Combinatorial Search Problems: A Survey
Lars Kotthoff
Data Mining and Constraint Programming
2016 | Book Chapter
SATzilla: Portfolio-based Algorithm Selection for SAT
Lin Xu, Frank Hutter, Holger H. Hoos and Kevin Leyton-Brown
Journal of Artificial Intelligence Research 2008 | Journal Paper
Automated Algorithm Selection on Continuous Black-Box Problems by Combining Exploratory Landscape Analysis and Machine Learning
Pascal Kerschke and Heike Trautmann Evolutionary Computation
2019 | Journal Paper
Algorithm selection based on exploratory landscape analysis and cost-sensitive learning
Bernd Bischl, Olaf Mersmann, Heike Trautmann and Mike Preuß
Proc. of the 13th Annual Genetic and Evolutionary Computation Conference (GECCO'17)
2017 | Conference Paper
Sequential Model-Based Optimization for General Algorithm Configuration
Frank Hutter, Holger H. Hoos and Kevin Leyton-Brown
Proc. of the 5th International Conference on Learning and Intelligent Optimization (LION'11)
2011 | Conference Paper
ParamILS: An Automatic Algorithm Configuration Framework
Frank Hutter, Holger H. Hoos, Kevin Leyton-Brown and Thomas Stützle
Journal of Artificial Intelligence Research 2009 | Journal Paper
ASlib: A benchmark library for algorithm selection
Bernd Bischl, Pascal Kerschke, Lars Kotthoff, Marius Lindauer, Yuri Malitsky, Alexandre Fréchette, Holger Hoos, Frank Hutter, Kevin Leyton-Brown, Kevin Tierney and Joaquin Vanschoren
Artificial Intelligence 2016 | Journal Paper
Instance Space Analysis
Towards objective measures of algorithm performance across instance space
Kate Smith-Miles, Davaatseren Baatar, Brendan Wreford and Rhyd Lewis
Computers \u0026amp; Operations Research 2014 | Journal Paper
Measuring Algorithm Footprints in Instance Space
Kate Smith-Miles and Thomas T. Tan
Proc. of the 2012 IEEE Congress on Evolutionary Computation (CEC'12) 2012 | Conference Paper
Fitness Landscape Analysis (FLA)
Fitness Landscapes
Combinatorial Landscapes
Christian M. Reidys and Peter F. Stadler
SIAM Review 2002 | Journal Paper
Fitness landscapes
Peter F. Stadler
Biological Evolution and Statistical Physics 2002 | Book Chapter
Evolvability / Searchability
Fitness landscapes and evolvability
Tom Smith, Phil Husbands, Paul Layzell and Michael O\u0026rsquo;Shea
Evolutionary Computation 2002 | Journal Paper | Fitness Evolvability
A Comprehensive View of Fitness Landscapes with Neutrality and Fitness Clouds
Leonardo Vanneschi, Marco Tomassini, Philippe Collard, Sébastien Vérel, Yuri Pirola and Giancarlo Mauri Proc. of the European Conference on Genetic Programming (EuroGP'07)
2007 | Conference Paper | Fitness Clouds, Neutrality
Where are bottlenecks in NK fitness landscapes?
Sebastien Verel, Philippe Collard and Manuel Clergue
Proc. of the 2012 IEEE Congress on Evolutionary Computation (CEC'03) 2003 | Conference Paper | Fitness Clouds
Fitness Clouds and Problem Hardness in Genetic Programming
Leonardo Vanneschi, Manuel Clergue, Philippe Collard, Marco Tomassini and Sébastien Vérel Proc. of the 2004 Annual Genetic and Evolutionary Computation Conference (GECCO'04)
2004 | Conference Paper | Fitness Clouds
Fitness-Probability Cloud and a Measure of Problem Hardness for Evolutionary Algorithms
Guanzhou Lu, Jinlong Li and Xin Yao Proc. of the European Conference on Genetic Programming (EuroGP'11)
2011 | Conference Paper | Fitness Probability Clouds
Variable Interdependency / Epistasis
Epistasis Variance: A Viewpoint on GA-Hardness
Yuval Davidor
Foundations of Genetic Algorithms
1991 | Journal Paper | Epistasis Variance
A Bit-Wise Epistasis Measure for Binary Search Spaces
Cyril Fonlupt, Denis Robilliard and Philippe Preux Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;V)
1998 | Conference Paper | Bit-wise Epistasis
The Eﬀect of Spin-Flip Symmetry on the Performance of the Simple GA
Bart Naudts and Jan Naudts Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;V)
1998 | Conference Paper | Bit-wise Epistasis
Quantifying Variable Interactions in Continuous Optimization Problems
Yuan Sun, Michael Kirley and Saman K. Halgamuge IEEE Transactions on Evolutionary Computation (TEVC)
2017 | Journal Paper
Information / Deception
Suﬃcient Conditions for Deceptive and Easy Binary Functions
Kalyanmoy Deb and David E. Goldberg
Annals of Mathematics and Artificial Intelligence 1994 | Journal Paper | Deception
Simple Genetic Algorithm and minimal deceptive problem,” University of Albana
David. E. Goldberg
Genetic Algorithms and Simulated Annealing 1994 | Book Chapter | Deception
Genetic Algorithms and Walsh Functions: Part II, Deception and Its Analysis
David E. Goldberg
Complex Systems 1989 | Journal Paper | Deception
Problem difficulty analysis for particle swarm optimization: deception and modality
Bin Xin, Jie Chen and Feng Pan
Proc. of the first ACM/SIGEVO Summit on Genetic and Evolutionary Computation (GEC'09)
2009 | Conference Paper | Deception
Fitness Distance Correlation
Fitness Distance Correlation as a Measure of Problem Diﬃculty for Genetic Algorithms
Terry Jones and Stephanie Forrest
Proc. of the 6th International Conference on Genetic Algorithms (ICGA'95)
1995 | Conference Paper | Fitness Distance Correlation
Fitness Distance Correlation Analysis: An Instructive Counterexample
Lee Altenberg
Proc. of the 7th International Conference on Genetic Algorithms (ICGA'97)
1997 | Conference Paper | Fitness Distance Correlation
A Study of Fitness Distance Correlation as a Difficulty Measure in Genetic Programming
Marco Tomassini, Leonardo Vanneschi, Philippe Collard and Manuel Clergue Evolutionary Computation
2005 | Journal Paper | Fitness Distance Correlation
Local Optima, Basins of Attractions and Funnels
An Evaluation of Methods for Estimating the Number of Local Optima in Combinatorial Optimization Problems
Leticia Hernando, Alexander Mendiburu and Jose A. Lozano Evolutionary Computation
2013 | Journal Paper | Local Optima
Simple Random Sampling Estimation of the Number of Local Optima
Khulood Alyahya and Jonathan E. Rowe Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;XIV)
2016 | Conference Paper | Local Optima
Local Optima and Weight Distribution in the Number Partitioning Problem
Khulood Alyahya and Jonathan E. Rowe Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;XIII)
2014 | Conference Paper | Local Optima
PSO and multi-funnel landscapes: how cooperation might limit exploration
Andrew M. Sutton, Darrell Whitley, Monte Lunacek and Adele Howe
Proc. of the Annual Genetic and Evolutionary Computation Conference (GECCO'06)
2006 | Conference Paper | Funnel
The dispersion metric and the CMA evolution strategy
Monte Lunacek and Darrell Whitley
Proc. of the Annual Genetic and Evolutionary Computation Conference (GECCO'06)
2006 | Conference Paper | Funnel
A Closer Look Down the Basins of Attraction
Erik Pitzer, Michael Affenzeller and Andreas Beham
Proc. of the 2010 UK Workshop on Computational Intelligence (UKCI'10)
2010 | Conference Paper | Basin of Attraction
Anatomy of the Attraction Basins: Breaking with the Intuition
Leticia Hernando, Alexander Mendiburu and Jose A. Lozano Evolutionary Computation
2019 | Journal Paper | Basin of Attraction
Neutrality
Neutrality in fitness landscapes
Christian M. Reidys and Peter F. Stadler
Applied Mathematics and Computation
2001 | Journal Paper | Neutrality
When Gravity Fails: Local Search Topology
Jeremy Frank, Peter Cheeseman and John Stutz
Journal of Artificial Intelligence Research 1997 | Journal Paper Neutrality
A quantitative study of neutrality in GP boolean landscapes
Leonardo Vanneschi, Yuri Pirola and Philippe Collard
Proc. of the Annual Genetic and Evolutionary Computation Conference (GECCO'06)
2006 | Conference Paper | Neutrality
Fitness Distribution
Re-evaluating genetic algorithm performance under coordinate rotation of benchmark functions. A survey of some theoretical and practical aspects of genetic algorithms
Ralf Salomon
Biosystems
1996 | Journal Paper
An Analysis of the Conﬁguration Space of the Maximal Constraint Satisfaction Problem
Meriema Belaidouni and Jin-Kao Hao Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;VI)
2000 | Conference Paper
Modality
Advanced fitness landscape analysis and the performance of memetic algorithms
Peter Merz Evolutionary Computation
2004 | Journal Paper
How to Detect all Maxima of a Function
J. Garnier and L. Kallel Journal of Theoretical Biology
2001 | Book Chapter
Ruggedness
Towards a General Theory of Adaptive Walks on Rugged Landscapes
Stuart Kauffman and Simon Levin Journal of Theoretical Biology
1987 | Journal Paper | Adaptive Walks
Correlated and Uncorrelated Fitness Landscapes and How to Tell the Diﬀerence
Stuart Kauffman and Simon Levin Biological Cybernetics
1990 | Journal Paper | Autocorrelation
Memetic Algorithms for Combinatorial Optimization Problems: Fitness Landscapes and Effective Search Strategies
Peter Merz 2000 | PhD Thesis | Autocorrelation
Smoothness, Ruggedness and Neutrality of Fitness Landscapes: from Theory to Application
Vesselin K. Vassilev, Terence C. Fogarty and Julian F. Miller Advances in Evolutionary Computing
1990 | Book Chapter | Autocorrelation, Entropy
The Genetic Algorithm and the Structure of the Fitness Landscape
B. Manderick, M. D. Weger and Piet Spiessens
Proc. of the International Conference on Genetic Algorithms (ICGA'91)
1991 | Conference Paper | Correlation Length
Towards a Theory of Landscapes
Peter F. Stadler and Santa Fe Institute Complex Systems and Binary Networks
2007 | Book Chapter | Correlation Length
A Measure of Landscapes Wim Hordijk Evolutionary Computation
1996 | Journal Paper | Correlation Length
Adaptation on rugged landscapes generated by iterated local interactions of neighboring genes
Mark Lipsitch
Proc. of the International Conference on Genetic Algorithms (ICGA'91)
1991 | Conference Paper | Correlation Length
Information Characteristics and the Structure of Landscapes
Vesselin K. Vassilev, Terence C. Fogarty and Julian F. Miller Evolutionary Computation
2000 | Journal Paper | Entropy
Quantifying Ruggedness of Continuous Landscapes using Entropy
Katherine M. Malan and Andries P. Engelbrecht
Proc. of the 2009 IEEE Congress on Evolutionary Computation (CEC'09) 2009 | Conference Paper | Entropy
Amplitude Spectra of Fitness Landscapes
Wim Hordijk and Peter F. Stadler
Advances in Complex Systems 1998 | Journal Paper | Amplitude Spectra
Adaptation on Rugged Landscapes
Daniel A. Levinthal
Management Science 1997 | Journal Paper | Amplitude Spectra
Information Content
Landscape Characterization of Numerical Optimization Problems using Biased Scattered Data
Mario A. Muñoz, Michael Kirley and Saman K. Halgamuge
Proc. of the 2012 IEEE Congress on Evolutionary Computation (CEC'12) 2012 | Conference Paper | Information Content
Exploratory Landscape Analysis of Continuous Space Optimization Problems Using Information Content
Mario A. Muñoz, Michael Kirley and Saman K. Halgamuge IEEE Transactions on Evolutionary Computation (TEVC)
2015 | Journal Paper | Information Content
Algorithm Performance and Problem Difficulty
Measuring Instance Difficulty for Combinatorial Optimization Problems
Kate Smith-Miles and Leo Lopes
Computers \u0026amp; Operations Research 2012 | Journal Paper | Problem Difficulty
The Effects of Constant and Bit-Wise Neutrality on Problem Hardness, Fitness Distance Correlation and Phenotypic Mutation Rates
Riccardo Poli and Edgar Galvan-Lopez IEEE Transactions on Evolutionary Computation (TEVC)
2012 | Journal Paper
Identifying Features of Fitness Landscapes and Relating Them to Problem Difficulty I. Moser, M. Gheorghita and A. Aleti Evolutionary Computation
2017 | Journal Paper
Algorithm Runtime Prediction: Methods \u0026amp; Evaluation
Frank Hutter, Lin Xu, Holger H. Hoos and Kevin Leyton-Brown
Artificial Intelligence 2014 | Journal Paper | Algorithm Runtime
Understanding TSP Difficulty by Learning from Evolved Instances
Kate Smith-Miles, Jano van Hemert and Xin Yu Lim Proc. of the 2010 International Conference on Learning and Intelligent Optimization (LION'10)
2010 | Conference Paper | Problem Difficulty, Eovoled Instances
Evolving Combinatorial Problem Instances That Are Difficult to Solve
Jano I. van Hemert
Evolutionary Computation
2006 | Journal Paper | Problem Difficulty, Eovoled Instances
Feature-Based Diversity Optimization for Problem Instance Classification Wanru Gao, Samadhi Nallaperuma, Frank Neumann Evolutionary Computation
2021 | Journal Paper | Problem Difficulty
Feature-Based Diversity Optimization for Problem Instance Classification Wanru Gao, Samadhi Nallaperuma and Frank Neumann Evolutionary Computation
2021 | Journal Paper
Understanding the Empirical Hardness of NP-Complete Problems
Kevin Leyton-Brown, Holger H. Hoos, Frank Hutter and Lin Xu
Communications of the ACM
2014 | Journal Paper | Empirical Hardness Model (EHM)
Fixed budget computations: a different perspective on run time analysis
Thomas Jansen and Christine Zarges
Proc. of the 14th Annual Genetic and Evolutionary Computation Conference (GECCO'12)
2012 | Conference Paper | Algorithm Performance
Performance analysis of randomised search heuristics operating with a fixed budget
Thomas Jansen and Christine Zarges
Theoretical Computer Science 2014 | Journal Paper | Algorithm Performance
Towards an analytic framework for analysing the computation time of evolutionary algorithms
Jun He and Xin Yao
Artificial Intelligence 2003 | Journal Paper | Algorithm Performance
Empirical hardness models: Methodology and a case study on combinatorial auctions
Kevin Leyton-Brown, Eugene Nudelman and Yoav Shoham
Journal of the ACM
2009 | Journal Paper | Empirical Hardness Model (EHM)
A Note on Problem Difficulty Measures in Black-Box Optimization: Classification, Realizations and Predictability
Jun He, Colin Reeves, Carsten Witt and Xin Yao Evolutionary Computation
2007 | Journal Paper | Problem Difficulty
Genetic Algorithm Difficulty and the Modality of Fitness Landscapes
Jeffrey Horn and David E. Goldberg
Foundations of Genetic Algorithms 1995 | Journal Paper
A comparison of predictive measures of problem difficulty in evolutionary algorithms
B. Naudts and L. Kallel
IEEE Transactions on Evolutionary Computation (TEVC)
2000 | Journal Paper
Problem-Specific
On the Landscapes of Combinatorial Opitmization Problems
Mohammad-H. Tayarani-N. and Adam Prügel-Bennett IEEE Transactions on Evolutionary Computation (TEVC)
2014 | Journal Paper Maximum Satisfiability Problem
Clustering of Solutions in the Random Satisfiability Problem
Marc. Mézard, T. Mora, and R. Zecchina
Physical Review Letter 2005 | Journal Paper
Rigorous location of phase transitions in hard optimization problems
Dimitris Achlioptas, Assaf Naor and Yuval Peres Nature
2010 | Journal Paper
The random K-satisfiability problem: From an analytic solution to an efficient algorithm
Marc Mézard and Riccardo Zecchina
Physical Review E 2002 | Journal Paper
Symmetry breaking in population-based optimization
A. Prugel-Bennett IEEE Transactions on Evolutionary Computation (TEVC)
2004 | Journal Paper
Hard and easy distributions of SAT problems
David Mitchell, Bart Selman and Hector Levesque Proc. of the 10th National Conference on Artificial Intelligence (AAAI'92)
2012 | Conference Paper
Experimental results on the crossover point in random 3-SAT
James M. Crawford and Larry D. Auton
Artificial Intelligence 1996 | Journal Paper
Determining computational complexity from characteristic ‘phase transitions’
Rémi Monasson, Riccardo Zecchina, Scott Kirkpatrick, Bart Selman and Lidror Troyansky Nature
1999 | Journal Paper
Statistical mechanics methods and phase transitions in optimization problems
Olivier C. Martin, Rémi Monasson and Riccardo Zecchina
Theoretical Computer Science 2001 | Journal Paper
Global Landscape Structure and the Random MAX-SAT Phase Transition
Gabriela Ochoa, Francisco Chicano and Marco Tomassini Proc. of the International Conference on Parallel Problem Solving from Nature (PPSN\u0026rsquo;XVI)
2020 | Conference Paper
Maximum Satisfiability: Anatomy of the Fitness Landscape for a Hard Combinatorial Optimization Problem
Adam Prugel-Bennett and Mohammad-Hassan Tayarani-Najaran IEEE Transactions on Evolutionary Computation (TEVC)
2012 | Journal Paper
Learning the Large-Scale Structure of the MAX-SAT Landscape Using Populations
Mohamed Qasem; Adam Prügel-Bennett IEEE Transactions on Evolutionary Computation (TEVC)
2010 | Journal Paper
Traveling Salesman Problem
An Analysis of the Fitness Landscape of Travelling Salesman Problem Mohammad-H. Tayarani-N. and Adam Prügel-Bennett Evolutionary Computation
2016 | Journal Paper
A fitness landscape analysis of the travelling thief problem
Mohamed El Yafrani, Marcella S. R. Martins, Mehdi El Krari, Markus Wagner, Myriam R. B. S. Delgado, Belaïd Ahiod and Ricardo Lüders
Proc. of the Genetic and Evolutionary Computation Conference (GECCO'18)
2018 | Conference Paper
Runtime Analysis of an Ant Colony Optimization Algorithm for TSP Instances
Yuren Zhou IEEE Transactions on Evolutionary Computation (TEVC)
2009 | Journal Paper
A hybrid heuristic for the traveling salesman problem
R. Baraglia, J.I. Hidalgo and Perego IEEE Transactions on Evolutionary Computation (TEVC)
2001 | Journal Paper
Ant colony system: a cooperative learning approach to the traveling salesman problem
M. Dorigo and L.M. Gambardella IEEE Transactions on Evolutionary Computation (TEVC)
1997 | Journal Paper
An Effective Heuristic Algorithm for the Traveling-Salesman Problem
S. Lin and B. W. Kernighan Operational Research
1973 | Journal Paper
Toward minimal restriction of genetic encoding and crossovers for the two-dimensional Euclidean TSP
Soonchul Jung and Byung-Ro Moon IEEE Transactions on Evolutionary Computation (TEVC)
2022 | Journal Paper
Parameterized Runtime Analyses of Evolutionary Algorithms for the Planar Euclidean Traveling Salesperson Problem
Andrew M. Sutton, Frank Neumann and Samadhi Nallaperuma Evolutionary Computation
2014 | Journal Paper
Feature-Based Diversity Optimization for Problem Instance Classification Wanru Gao, Samadhi Nallaperuma, Frank Neumann Evolutionary Computation
2021 | Journal Paper
Number Paritioning Problem
Phase Transition and Landscape Properties of the Number Partitioning Problem
Khulood Alyahya and Jonathan E. Rowe Proc. of the European Conference on Evolutionary Computation in Combinatorial Optimization (EvoCOP'14)
2014 | Conference Paper
Heuristics and exact methods for number partitioning
João Pedro Pedroso and Mikio Kubo
European Journal of Operational Research 2010 | Journal Paper
Phase Transition in the Number Partitioning Problem
Stephan Mertens
Physical Review Letter 1998 | Journal Paper
Phase transition and landscape statistics of the number partitioning problem
Peter F. Stadler, Wim Hordijk, and José F. Fontanari
Physical Review E 2003 | Journal Paper
Knapsack Problem
Where are the hard knapsack problems?
David Pisinger
Computers \u0026amp; Operations Research 2005 | Journal Paper
Set Theory-Based Operator Design in Evolutionary Algorithms for Solving Knapsack Problems
Ran Wang and Zichao Zhang IEEE Transactions on Evolutionary Computation (TEVC)
2021 | Journal Paper
Multidimensional knapsack problem: a fitness landscape analysis
Jorge Tavares, Francisco B. Pereira and Ernesto Costa IEEE Transactions on Systems, Man, and Cybernetics
2008 | Journal Paper
NK Landscapes
Local Optima Networks of NK Landscapes with Neutrality
Sébastien Verel, Gabriela Ochoa and Marco Tomassini IEEE Transactions on Evolutionary Computation (TEVC)
2011 | Journal Paper
An Analysis of NK Landscapes: Interaction Structure, Statistical Properties, and Expected Number of Local Optima
Jeffrey Buzas and Jeffrey Dinitz
IEEE Transactions on Evolutionary Computation (TEVC)
2014 | Journal Paper
Quadratic Assignment Problem
Fitness landscape analysis and memetic algorithms for the quadratic assignment problem
P. Merz and B. Freisleben
IEEE Transactions on Evolutionary Computation (TEVC)
2000 | Journal Paper
Quadratic assignment problem: a landscape analysis
Mohammad-H. Tayarani-N. and Adam Prügel-Bennett Evolutionary Intelligence 2015 | Journal Paper
Landscape Visualization
Low-Dimensional Euclidean Embedding for Visualization of Search Spaces in Combinatorial Optimization
Krzysztof Michalak
IEEE Transactions on Evolutionary Computation (TEVC)
2019 | Journal Paper Paper List of AutoML # (Still under development)
HPO Essentials
Meta-Learning: A Survey
Joaquin Vanschoren
arXiv
2015 | Survey Paper
Hyperparameter optimization: Foundations, algorithms, best practices, and open challenges
Bernd Bischl, Martin Binder, Michel Lang, Tobias Pielok, Jakob Richter, Stefan Coors, Janek Thomas, Theresa Ullmann, Marc Becker, Anne-Laure Boulesteix, Difan Deng, Marius Lindauer
WIREs Data Mining and Knowledge Discovery
2023 | Survey Paper
On hyperparameter optimization of machine learning algorithms: Theory and practice
Li Yang, Abdallah Shami
Neurocomputing
2020 | Survey Paper
Hyperparameter optimization in learning systems
Răzvan Andonie
Journal of Membrane Computing
2019 | Survey Paper
Beyond Manual Tuning of Hyperparameters
Frank Hutter, Jörg Lücke, Lars Schmidt-Thieme KI - Künstliche Intelligenz
2018 | Survey Paper
A review of automatic selection methods for machine learning algorithms and hyper-parameter values
Gang Luo
Network Modeling Analysis in Health Informatics and Bioinformatics
2016 | Survey Paper | Cited by 313
Hyperparameter Optimization
Matthias Feurer, Frank Hutter Automated Machine Learning: Methods, Systems, Challenges
2019 | Survey Paper
Random search for hyper-parameter optimization
James Bergstra, Yoshua Bengio
Journal of Machine Learning Research (JMLR)
2012 | Journal Paper
Towards an Empirical Foundation for Assessing Bayesian Optimization of Hyperparameters
Katharina Eggensperger, Matthias Feurer, Frank Hutter, James Bergstra, Jasper Snoek, Holger Hoos, Kevin Leyton-Brown
NIPS workshop on Bayesian Optimization in Theory and Practice
2013 | Conference Paper
Practical Bayesian Optimization of Machine Learning Algorithms
Jasper Snoek, Hugo Larochelle, Ryan P. Adams
Advances in Neural Information Processing Systems (NIPS'12)
2012 | Conference Paper
Sequential Model-Based Optimization for General Alg. Configuration
Frank Hutter, Holger H. Hoos, Kevin Leyton-Brown
LION'11: Proc. of the International Conference on Learning and Intelligent Optimization
2011 | Conference Paper
Algorithms for Hyper-Parameter Optimization
James Bergstra, Rémi Bardenet, Yoshua Bengio, Balázs Kégl
Advances in Neural Information Processing Systems (NIPS'11)
2011 | Conference Paper
Practical Recommendations for Gradient-Based Training of Deep Architectures
Yoshua Bengio
Neuralnetworks: Tricks of the Trade
2012 | Book Chapter
Making a Science of Model Search: Hyperparameter Optimization in Hundreds of Dimensions for Vision Architectures
James Bergstra, Daniel Yamins, David Cox
ICML'13: Proc. of the 30th International Conference on Machine Learning
2013 | Conference Paper
Multi-Task Bayesian Optimization
Kevin Swersky, Jasper Snoek, Ryan P. Adams
Advances in Neural Information Processing Systems (NIPS'13)
2013 | Conference Paper
Gradient-based Hyperparameter Optimization through Reversible Learning
Dougal Maclaurin, David Duvenaud, Ryan P. Adams
ICML'15: Proc. of the 32th International Conference on Machine Learning
2015 | Conference Paper
Efficient Benchmarking of Hyperparameter Optimizers via Surrogates
Katharina Eggensperger, Frank Hutter, Holger H Hoos, Kevin Leyton-Brown
AAAI'15: Proceedings of the AAAI Conference on Artificial Intelligence
2015 | Conference Paper
AutoML
AutoML: A survey of the state-of-the-art
Xin He, Kaiyong Zhao, Xiaowen Chu Knowledge-Based Systems
2012 | Survey Paper Cited by 985
Automated Machine Learning: State-of-The-Art and Open Challenges
Radwa Elshawi, Mohamed Maher, Sherif Sakr arXiv
2019 | Survey Paper Cited by 159
Automated Machine Learning: Methods, Systems, Challenges
Matthias Feurer, Frank Hutter Springer
2019 | Book | Cited by 1,317
Taking Human out of Learning Applications: A Survey on Automated Machine Learning
Quanming Yao, Mengshuo Wang, Yuqiang Chen, Wenyuan Dai, Yu-Feng Li, Wei-Wei Tu, Qiang Yang, Yang Yu arXiv
2019 | Survey Paper | Cited by 356
Benchmark and Survey of Automated Machine Learning Frameworks
Marc-Andre Zoller, Marco F. Huber Journal of Artificial Intelligence Research
2021 | Survey Paper | Cited by 251
Feature Importance
An Efficient Approach for Assessing Hyperparameter Importance
Frank Hutter, Holger Hoos, Kevin Leyton-Brown ICML'14: Proc. of the 31th International Conference on Machine Learning
2014 | Conference Paper
Explaining Hyperparameter Optimization via Partial Dependence Plots
Julia Moosbauer, Julia Herbinger, Giuseppe Casalicchio, Marius Lindauer, Bernd Bischl
NeurIPS'21: Proc. of the 35th Conference on Neural Information Processing Systems
2021 | Conference Paper
Hyperparameter Importance Across Datasets
Jan N. van Rijn, Frank Hutter
KDD \u0026lsquo;18: Proc. of the 24th ACM SIGKDD International Conference on Knowledge Discovery \u0026amp; Data Mining
2018 | Conference Paper
Efficient Parameter Importance Analysis via Ablation with Surrogates
Andre Biedenkapp, Marius Lindauer, Katharina Eggensperger, Frank Hutter
AAAI'17: Proc. of the Thirty-First AAAI Conference on Artificial Intelligence
2017 | Conference Paper
Loss Landscape
Visualizing the Loss Landscape of Neural Nets
Hao Li, Zheng Xu, Gavin Taylor, Christoph Studer, Tom Goldstein
NeurIPS'18: Advances in Neural Information Processing Systems
2018 | Conference Paper
Large Scale Structure of Neural Network Loss Landscapes
Stanislav Fort, Stanislaw Jastrzebski
NeurIPS'19: Advances in Neural Information Processing Systems
2019 | Conference Paper
Taxonomizing local versus global structure in neural network loss landscapes
Yaoqing Yang, Liam Hodgkinson, Ryan Theisen, Joe Zou, Joseph E. Gonzalez, Kannan Ramchandran, Michael W. Mahoney
NeurIPS'21: Proc. of the 35th Conference on Neural Information Processing Systems
2021 | Conference Paper
Related Papers
Efficient Global Optimization of Expensive Black-Box Functions
Donald R. Jones, Matthias Schonlau, William J. Welch Journal of Global Optimization
1998 | Journal Paper | Cited by 8,000
Effect of the Sampling of a Dataset in the Hyperparameter Optimization Phase over the Efficiency of a Machine Learning Algorithm
Noemí DeCastro-García, Ángel Luis Muñoz Castañeda, David Escudero García, Miguel V. Carriegos Complexity
2019 | Journal Paper | Cited by 43
Projects and Websites # MATILDA LON Maps Flacco COCO GBFLAT # Framwork Installation Documentation GBFLAT.lon GBFLAT.ils GBFLAT.problems Quick Start Framework # Under construction. Installation # Under construction. Documentation # GBFLAT.lon # class GBFLAT.LON.LocalOptimalNetwork() This is the general object we use to construct, access, analyze and manipulate LONs.
Methods LocalOptimalNetwork.read_ils(problem_name, n_runs, n_iters, n, k, seed, path, directed=False, weighted=False, addi_attri=False) -\u0026gt; None Create LON using recorded data from iterated local search (ILS)
Parameters ↕ problem_name : {\u0026ldquo;NPP\u0026rdquo;, \u0026ldquo;MaxSat\u0026rdquo;, \u0026ldquo;KP\u0026rdquo;}
The name of the problem instance. This together with the n_runs, n_iter, n, k, seed, and path parameters will form the full path for locating the ILS logger file. n_runs : int
Number of runs performed during ILS. n_iter : int
Number of maximum iterations in each run when performing ILS. n : int
The dimension of the problem instance. k : float
Additional control parameter of the problem. seed : int
Random seed used when performing ILS. path : path to a directory Path to the directory where the ILS data is stored. directed : bool, default = False
Whether to include edge directions in the created LON if True: then the LON will be based on NetworkX.DiGraph(), where an edge will be drawn from a source node (i.e., current local optimum) to the target ndoe (i.e., an improving move to a better local optimum via perturbation followed by hill-climbing). if False: the LON will be constructed via NetworkX.Graph(). Setting directed to True will forbid the the use of certain methods such as NetworkX.number_connected_components(), since they are not implemented for directed graphs, but could enable more node attributes that depend on the availability of edge direction (e.g., \u0026ldquo;in_degree\u0026rdquo; and \u0026ldquo;out_degree\u0026rdquo;). weighted : bool, default = Fasle
Whether to include edge weights in the created LON if True: then weights representing the probabilites of visiting the transition between the two local optima will be added to edges (as edge attributes). For each edge, the associated weight is given by dividing the frequencies of visiting this transition by the total number of transitions encountered during ILS. Thereby, all weights should sum up to 1.
if False, then no edge weights will be included in the LON (or say, all edges have equal weights). The introducing of edge weights will also enable a richer set of node attributes, e.g., weighted degree and weighted clustering coefficient. LocalOptimalNetwork.describe() -\u0026gt; pd.DataFrame Obtain a pandas dataframe containing basic descriptions of the LON.
Returns ↕ A pd.DataFrame containing the following statistis of the LON:
n_nodes: number of nodes (i.e., local optima) in the LON. n_edges: number of edges (i.e., transitions occured between local optima) in the LON. density: network density of the LON. clustering: average clustering coefficient of the LON. degree_assor: degree assortativity of the LON. fit_assor: fitness assortativity of the LON. n_components: connected components in the LON. n_sinks: number of sink nodes in the LON. n_sources: number of source nodes in the LON. LocalOptimalNetwork.read_lon(problem_name, n_runs, n_iters, n, k, seed, path, directed=False, weighted=False) -\u0026gt; None Create LON using saved graph data.
Parameters ↕ problem_name : {\u0026ldquo;NPP\u0026rdquo;, \u0026ldquo;MaxSat\u0026rdquo;, \u0026ldquo;KP\u0026rdquo;}
The name of the problem instance. This together with the n_runs, n_iter, n, k, seed, and path parameters will form the full path for locating the ILS logger file. n_runs : int
Number of runs performed during ILS. n_iter : int
Number of maximum iterations in each run when performing ILS. n : int
The dimension of the problem instance. k : float
Additional control parameter of the problem. seed : int
Random seed used when performing ILS. path : path to a directory Path to the directory where the ILS data is stored. directed : bool, default = False
Whether to include edge directions in the created LON if True: then the LON will be based on NetworkX.DiGraph(), where an edge will be drawn from a source node (i.e., current local optimum) to the target ndoe (i.e., an improving move to a better local optimum via perturbation followed by hill-climbing). if False: the LON will be constructed via NetworkX.Graph(). Setting directed to True will forbid the the use of certain methods such as NetworkX.number_connected_components(), since they are not implemented for directed graphs, but could enable more node attributes that depend on the availability of edge direction (e.g., \u0026ldquo;in_degree\u0026rdquo; and \u0026ldquo;out_degree\u0026rdquo;). weighted : bool, default = Fasle
Whether to include edge weights in the created LON if True: then weights representing the probabilites of visiting the transition between the two local optima will be added to edges (as edge attributes). For each edge, the associated weight is given by dividing the frequencies of visiting this transition by the total number of transitions encountered during ILS. Thereby, all weights should sum up to 1.
if False, then no edge weights will be included in the LON (or say, all edges have equal weights). The introducing of edge weights will also enable a richer set of node attributes, e.g., weighted degree and weighted clustering coefficient. addi_attri : bool, default = False
Whether to calculate additional node attributes, e.g., clustering coefficients and various centrality metrics. This could take to additional time for LON construction. GBFLAT.ils # GBFLAT.problems # Quick Start # Here we provide a simple yet comprehensive guide to illustrate the core functions of GBFLAT. Say, for example, we want to study the landscape characteristics of number partitioning problem (NPP) with 10 items.
We first import core classes and functions from GBFLAT along with some other necessary packages.
The GBFLAT.Problems module implements various classic combinatorial optimization problems such as NPP, the traveling salesman problem (TSP), and the knapsack problem (KP), etc. Customized problem instances could be easily generated based on these problem classes. In GBFLAT.IteratedLocalSearch, we implement ILS method for sampling local optima from the fitness landscape (i.e., search space) of a given problem instance. It also contains various functions for performing neighbourhood exploration, local search as well as perturbation. The GBFLAT.LocalOptimalNetwork module contains the essential LON class, which stores a wide range of useful information for performing data mining, manipulation and visualization. In particular, the local optima data is available in both tabular format and graph-structured format, and this is why we always use pandas and networkx library along with GBFLAT. Finally, some other depend libraries would sometimes be necessary. For instance, when apply the node embedding method along with dimensionality reduction to draw plain visualizations of LONs, karaterclub and scikit-learn will be needed. 1import pandas as pd 2import networkx as nx 3from karaterclub import HOPE 4from sklean.manifold import TSNE 5from GBFLAT.Problems import NumberPartitioning, Knapsack 6from GBFLAT.LocalOptimalNetwork import LON 7from GBFLAT.IteratedLocalSearch import { 8 ILS, hill_climber, flip_neighbour_explorer, two_bit_flip_pertubator} After all the necessary modules have been imported, we could now get started by creating an instance of our target problem \u0026ndash; an NPP with 10 items. This could be easily done with the following script. Notice that here we also specify k=0.7, which is a control parameter that has impact on the hardness of the NPP. It is also related a phenomenon called \u0026ldquo;phase transition\u0026rdquo;. We also set seed=1, which would enable us to come back to this specific instance again at somewhere else.
1# create a problem instance 2instance = NumberPartitioning(n = 10, k = 0.7, seed = 1) Now we are ready to perform ILS on our created problem instance! We first initialize an ILS searcher object by specifying the total number of independent ILS runs to perform, the maximum number of non-improvement iterations allowed for each run, as well as the method used for neighbour exploration, local search and perturbation. Here, since the solution vector for NPP is constitued by binary bits, a simple bit-flip-based strategy could be applied to perform neighbour exploration. We adopt hill climbing, a widely used local search strategy to find local optima. After the algorithm encounters a local optimum, a perturbation, which is a two-bits flip here, will be applied to it in the hope to escape. After properly configured the ils_searcher, we then proceed to conduct the sampling on our target instance. This process here, backended by tqdm, supports parellel processing. Just specify the n_jobs parameter according to the computational budget. In addition, a file path needs to be provided to save the ILS data. The ILS data will be saved as a .csv file, containing a rich amount of information recorded during the sampling.
1# create an ils_searcher object 2ils_searcher = ILS(n_runs = 1000, 3 max_iters = 100, 4 local_searcher = hill_climbing, 5 neighbour_explorer = flip_neighbour_explorer, 6 perturbator = two_bit_flip_pertubator) 7 8# perform ILS sampling using multiple CPU threads 9ils_searcher.search(instance = instance, 10 path = \u0026#34;ils_data/\u0026#34;, 11 n_jobs = 8) We now create the LON for our instance. We initialize an LON object and use the LON.read_ils method to construct a LON based on ILS data. We just specifiy the information regard the problem instance and ILS process, these will serve as an unique identifier for the algorithm to locate the ILS file. We then choose whether to consider direction and edge weights in the LON.
1# create LON object using ILS data 2lon = LON() 3lon.read_ils(problem_name = \u0026#34;NPP\u0026#34;, 4 n = 10, 5 k = 0.7, 6 seed = 1, 7 nb_runs = 1000, 8 nb_iters = 100, 9 weighted = True, 10 directed = True) Up to this step, our LON has been constructed! What makes GBFLAT an brilliant tool for graph-based landscape analysis is that the data LON is accessible in both pd.DataFrame and networkx.Graph (or networkx.DiGraph for directed LON) format. This would allow great flexibility and possibility for performing data mining, manipulation and visualization. Simply access your data via the LON.data or LON.graph property.
1# get LON data 2graph = LON.graph # get LON data as pandas dataframe object 3data = LON.data # get LON as NetworkX graph object The resulting dataframe or graph could power numerious analysis tasks, and here we only present some simpliest examples of these.
1# data manipulation example 2print(data.sort_values(by = \u0026#34;fitness\u0026#34;)) 3# graph manipulation example 4sol = [1, 0, 0, 1, 1, 1, 0, 0, 1, 1] 5print(nx.neighbors(graph, sol)) The LON class also has various built-in methods for analyzing LONs. For example, LON.draw_lon method could output a naive visualization of the graph. This is however, only trivial for low-dimensional problems with no more than 1,000 local optima, as when the number of nodes in the graph gets higher, the plot will quickly become messy and not able to depict useful any useful pattern. Another way for visualizing LON is to leverage node embedding and dimensionality reduction technique. This is implemented by the LON.draw_embedding method. You may obtain a informative LON visualization by changing node embedding and dimensionality reduction method according to the specific task at hand.
1# draw LON as graph 2lon.draw_lon() 3# draw LON in 2D via node embedding and dimensionality reduction 4lon.draw_embedding(model = HOPE(), reducer = TSNE()) 5# get statistical description of LON 6lon.describe() Finally, we could save the constructed LON (along with all the node and edge attributes) to .csv file for quicker accessing next time.
1# save LON 2lon.save_lon(name = \u0026#34;npp_n10_k0.7_seed1\u0026#34;) `}),e.add({id:15,href:"/docs/research/projects/",title:"Publications",section:"Docs",content:` Projects # (This section is currently under development)
`}),e.add({id:16,href:"/docs/research/publications/",title:"Publications",section:"Docs",content:` Publications # The copyrights of published papers are transferred to publishers. Misuse of any material posted here may result in plagiarism. + means my current/previous student or visitor. * means equal contribution To appear # Technical Report # PlantRNA-FM: A Plant RNA Foundation Model for Exploration RNA Functions in Plants
Haopeng Yu, Heng Yang+, Yiliang Ding, Ke Li
biArXiv xxxxxx | May 2024
PDF | Project | BiB
A Survey of Decomposition-Based Evolutionary Multi-Objective Optimization: Part II-A Data Science Perspective
Mingyu Huang+, Ke Li
CoRR abs/2404.14228 | April 2024
PDF | Supp | BiB
A Survey of Decomposition-Based Evolutionary Multi-Objective Optimization: Part I-Past and Future
Ke Li
CoRR abs/2404.14571 | April 2024
PDF | Supp | BiB
Multi-Fidelity Methods for Optimization: A Survey
Ke Li, Fan Li+
CoRR abs/2402.09638 | February 2024
PDF | Supp | BiB
Unlocking the Secrets of Software Configuration Landscapes-Ruggedness, Accessibility, Escapability, and Transferability
Mingyu Huang+, Peili Mao+, Ke Li
CoRR abs/2201.01429 | February 2024
PDF | Supp | BiB
Human-in-the-Loop Policy Optimization for Preference-Based Multi-Objective Reinforcement Learning
Ke Li, Han Guo+
CoRR abs/2401.02160 | January 2024
PDF | Supp | BiB
Evolutionary Alternating Direction Method of Multipliers for Constrained Multi-Objective Optimization with Unknown Constraints
Shuang Li+, Ke Li, Wei Li, Ming Yang
CoRR abs/2401.00978 | January 2024
PDF | Supp | BiB
Solving Expensive Optimization Problems in Dynamic Environments with Meta-learning
Huan Zhang+, Jinliang Ding, Liang Feng, Kay Chen Tan, Ke Li
CoRR abs/2310.12538 | October 2023
PDF | Supp | BiB
Model-Assisted Probabilistic Safe Adaptive Control With Meta-Bayesian Learning
Shengbo Wang+, Ke Li, Yin Yang, Yuting Cao, Tingwen Huang, Shiping Wen
CoRR abs/2307.00828 | July 2023
PDF | Supp | BiB
Evolutionary Multi-Objective Optimization for Virtual Network Function Placement
Joseph Billingsley+, Ke Li, Geyong Min, Nektarios Georgalas
CoRR abs/2106.14727 | March 2023
PDF | Supp | BiB @article{BillingsleyLMMG22, author = {Joseph Billingsley and Ke Li and Wang Miao and Geyong Min and Nektarios Georgalas}, title = {Evolutionary Multi-Objective Virtual Network Function Placement: {A} Formal Model and Effective Algorithms}, journal = {CoRR}, volume = {abs/2106.14727}, year = {2021}, url = {https://arxiv.org/abs/2106.14727}, eprinttype = {arXiv}, eprint = {2106.14727}, timestamp = {Thu, 19 May 2022 17:23:34 +0200}, biburl = {https://dblp.org/rec/journals/corr/abs-2106-14727.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
LONViZ: Unboxing the Black-Box of Configurable Software Systems from a Complex Networks Perspective
Ke Li, Peili Mao+, Tao Chen
CoRR abs/2201.01429 | January 2022
PDF | BiB @article{LiMC22, author = {Ke Li and Peili Mao and Tao Chen}, title = {LONViZ: Unboxing the black-box of Configurable Software Systems from a Complex Networks Perspective}, journal = {CoRR}, volume = {abs/2201.01429}, year = {2022}, url = {https://arxiv.org/abs/2201.01429}, eprinttype = {arXiv}, eprint = {2201.01429}, timestamp = {Mon, 10 Jan 2022 13:39:01 +0100}, biburl = {https://dblp.org/rec/journals/corr/abs-2201-01429.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Decomposition Multi-Objective Evolutionary Optimization: From State-of-the-Art to Future Opportunities
Ke Li
CoRR abs/2108.09588 | August 2021
PDF | BiB @article{Li22, author = {Ke Li}, title = {Decomposition Multi-Objective Evolutionary Optimization: From State-of-the-Art to Future Opportunities}, journal = {CoRR}, volume = {abs/2108.09588}, year = {2021}, url = {https://arxiv.org/abs/2108.09588}, eprinttype = {arXiv}, eprint = {2108.09588}, timestamp = {Fri, 27 Aug 2021 15:02:29 +0200}, biburl = {https://dblp.org/rec/journals/corr/abs-2108-09588.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
In press # Multi-Output Framework for Time-Series Forecasting in Smart Grid Meets Data Scarcity
Jiangjiao Xu+, Ke Li
IEEE Trans. Industrial Informatics (TII)
Abs | PDF | Code | BiB
Evolutionary Multi-Objective Optimization for Contextual Adversarial Example Generation
Shasha Zhou+, Mingyu Huang+, Yanan Sun, Ke Li
Proc. of the 2024 ACM International Conference on the Foundations of Software Engineering (FSE'24)
Abs | PDF | Code | BiB
iM-Seeker: A Webserver for DNA I-motifs Prediction and Scoring via Automated Machine Learning
Haopeng Yu, Fan Li+, Bibo Yang, Yiman Qi, Dilek Guneri, Wenqian Chen, Zoe Waller, Ke Li, Yiliang Ding
Nucleic Acids Research (NAR)
Abs | PDF | Code | BiB
Evolutionary Art Attack For Black-Box Adversarial Example Generation
Phoenix Williams+, Ke Li, G. Min
IEEE Trans. Evolutionary Computation (TEVC)
Abs | PDF | Code | BiB
A Knee Point Driven Evolutionary Algorithm for Multi-Objective Bilevel Optimization
Jiaxin Chen+, Jinliang Ding, Ke Li, Kay Chen Tan, Tianyou Chai
IEEE Trans. Cybernetics (TCYB)
Abs | PDF | Code | BiB
An Automated Few-Shot Learning for Time Series Forecasting in Smart Grid Under Data Scarcity
Jiangjiao Xu+, Ke Li, D. Li
IEEE Trans. Artificial Intelligence (TAI)
10.1109/TAI.2024.3358795
Abs | PDF | Code | BiB
DaNuoYi: Evolutionary Multi-Task Injection Testing on Web Application Firewalls
Ke Li, Heng Yang+, Willem Visser
IEEE Trans. Software Engineering (TSE)
10.1109/TSE.2023.3343716
Abs | PDF | Code | BiB Web application firewall (WAF) plays an integral role nowadays to protect web applications from various malicious injection attacks such as SQL injection, XML injection, and PHP injection, to name a few. However, given the evolving sophistication of injection attacks and the increasing complexity of tuning a WAF, it is challenging to ensure that the WAF is free of injection vulnerabilities such that it will block all malicious injection attacks without wrongly affecting the legitimate message. Automatically testing the WAF is, therefore, a timely and essential task. In this paper, we propose DANUOYI, an automatic injection testing tool that simultaneously generates test inputs for multiple types of injection attacks on a WAF. Our basic idea derives from the cross-lingual translation in the natural language processing domain. In particular, test inputs for different types of injection attacks are syntactically different but may be semantically similar. Sharing semantic knowledge across multiple programming languages can thus stimulate the generation of more sophisticated test inputs and discovering injection vulnerabilities of the WAF that are otherwise difficult to find. To this end, in DANUOYI, we train several injection translation models by using multi-task learning that translates the test inputs between any pair of injection attacks. The model is then used by a novel multi-task evolutionary algorithm to co-evolve test inputs for different types of injection attacks facilitated by a shared mating pool and domain-specific mutation operators at each generation. We conduct experiments on three real-world open-source WAFs and six types of injection attacks, the results reveal that DANUOYI generates up to 3.8x and 5.78x more valid test inputs (i.e., bypassing the underlying WAF) than its state-of-the-art single-task counterparts and the context-free grammar-based injection construction. @article{LiYV23, author = {Ke Li and Heng Yang and Willem Visser}, title = {DaNuoYi: Evolutionary Multi-Task Injection Testing on Web Application Firewalls}, journal = {IEEE Trans. Softw. Eng.}, year = {2023}, note = {accepted for publication} } Quality Indicators for Preference-based Evolutionary Multi-objective Optimization Using a Reference Point: A Review and Analysis
Ryoji Tanabe, Ke Li
IEEE Trans. Evolutionary Computation (TEVC)
10.1109/TEVC.2023.3319009
Abs | PDF | Supp | BiB Some quality indicators have been proposed for benchmarking preference-based evolutionary multi-objective optimization algorithms using a reference point. Although a systematic review and analysis of the quality indicators are helpful for both benchmarking and practical decision-making, neither has been conducted. In this context, first, this paper reviews existing regions of interest and quality indicators for preference-based evolutionary multi-objective optimization using the reference point. We point out that each quality indicator was designed for a different region of interest. Then, this paper investigates the properties of the quality indicators. We demonstrate that an achievement scalarizing function value is not always consistent with the distance from a solution to the reference point in the objective space. We observe that the regions of interest can be significantly different depending on the position of the reference point and the shape of the Pareto front. We identify undesirable properties of some quality indicators. We also show that the ranking of preference-based evolutionary multi-objective optimization algorithms depends on the choice of quality indicators. @article{TanabeL23, author = {Ryoji Tanabe and Ke Li}, title = {Quality Indicators for Preference-based Evolutionary Multi-objective Optimization Using a Reference Point: A Review and Analysis}, journal = {IEEE Trans. Evol. Comput.}, year = {2023}, note = {accepted for publication} } A Data-Driven Evolutionary Transfer Optimization for Expensive Problems in Dynamic Environments
Ke Li*, Renzhi Chen+*, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC)
10.1109/TEVC.2023.3307244
Abs | PDF | Supp | Code | BiB Many real-world problems are computationally costly and the objective functions evolve over time. Data-driven, a.k.a. surrogate-assisted, evolutionary optimization has been recognized as an effective approach to tackle expensive black-box optimization problems in a static environment whereas it has rarely been studied under dynamic environments. This paper proposes a simple yet effective transfer learning framework to empower data-driven evolutionary optimization to solve expensive dynamic optimization problems. Specifically, a hierarchical multi-output Gaussian process is proposed to capture the correlation among data collected from different time steps with a linearly increased number of hyperparameters. Furthermore, an adaptive source task selection along with a bespoke warm staring initialization mechanisms are proposed to better leverage the knowledge extracted from previous optimization processes. By doing so, the data-driven evolutionary optimization can jump start the optimization in the new environment with a very limited computational budget. Experiments on synthetic benchmark test problems and a real-world case study demonstrate the effectiveness of our proposed algorithm in comparison with nine state-of-the-art peer algorithms. @article{LiCY23, author = {Ke Li and Renzhi Chen and Xin Yao}, title = {A Data-Driven Evolutionary Transfer Optimization for Expensive Problems in Dynamic Environments}, journal = {IEEE Trans. Evol. Comput.}, year = {2023}, url = {https://ieeexplore.ieee.org/document/10225543}, doi = {10.1109/TEVC.2023.3307244} } Evolutionary Bi-level Optimization via Multi-objective Transformation Based Lower Level Search
Lei Chen, Hai-Lin Liu, Ke Li, Kay Chen Tan
IEEE Trans. Evolutionary Computation (TEVC)
10.1109/TEVC.2023.3236455
Abs | PDF | BiB Nested evolutionary algorithms (EAs) have been regarded as very promising tools for bi-level optimization. Due to the nested structure, the upper level population evaluation requires a set of complete lower level optimizations, thereby reducing the efficiency and practicability of EA methods. In this paper, a multi-objective transformation-based evolutionary algorithm (MOTEA) is proposed to perform multiple lower level optimizations in a parallel and collaborative manner. Specifically, the corresponding multiple lower level optimizations for each generation of the upper level population evaluation are transformed into locating a set of Pareto optimal solutions of a constructed multi-objective optimization problem. By utilizing the built-in implicit parallelism of evolutionary multi-objective optimization, multiple lower level problems can thus be optimized in parallel. Within one multi-objective search population, the collaboration among the parallel lower level optimization can be realized by exploiting and utilizing the implicit similarities among them for better efficiency. The effectiveness and efficiency of the proposed MOTEA are verified by comparing it with four state-of-the-art evolutionary bi-level optimization algorithms on two sets of popular bi-level optimization benchmark test problems and three application problems. 2024 # Conference # Constrained Bayesian Optimization Under Partial Observations: Balanced Improvements and Provable Convergence
Shengbo Wang+, Ke Li
10.1609/aaai.v38i14.29488
Proc. of the 38th Annual AAAI Conference on Artificial Intelligence (AAAI'24), 38(14): 15607-15615, February, 2024
Abs | PDF | Code | BiB | ≈ 23.5% The partially observable constrained optimization problems (POCOPs) impede data-driven optimization techniques since an infeasible solution of POCOPs can provide little information about the objective as well as the constraints. We endeavor to design an efficient and provable method for expensive POCOPs under the framework of constrained Bayesian optimization. Our method consists of two key components. Firstly, we present an improved design of the acquisition functions that introduces balanced exploration during optimization. We rigorously study the convergence properties of this design to demonstrate its effectiveness. Secondly, we propose a Gaussian process embedding different likelihoods as the surrogate model for a partially observable constraint. This model leads to a more accurate representation of the feasible regions compared to traditional classification-based models. Our proposed method is empirically studied on both synthetic and real-world problems. The results demonstrate the competitiveness of our method for solving POCOPs. @inproceedings{WangL23, author = {Shengbo Wang and Ke Li}, title = {Constrained {Bayesian} Optimization Under Partial Observations: Balanced Improvements and Provable Convergence}, booktitle = {AAAI'24: Proc. of the Thirty-Eighth AAAI Conference on Artificial Intelligence}, year = {2024}, note = {accepted for publication}, doi = {https://doi.org/10.48550/arXiv.2312.03212}, url = {https://arxiv.org/abs/2312.03212} } Modeling Aspect Sentiment Coherency via Local Sentiment Aggregation
Heng Yang+, Ke Li
https://aclanthology.org/2024.findings-eacl.13
Findings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (EACL'24), p. 182-195, March, 2024.
Abs | PDF | BiB
2023 # Journal # Multidimensional Resource Fragmentation-Aware Virtual Network Embedding for IoT Applications in MEC Networks
Yingying Guan+, Qingyang Song, Weijing Qi, Lei Guo, Ke Li, Abbas Jamalipour
IEEE Internet of Things Journal (IoTJ), 10(24): 22223\u0026ndash;22232, 2023
10.1109/JIOT.2023.3304976
Abs | PDF | BiB The proliferation of Internet of Things (IoT) applications has led to the interconnection of multiaccess edge computing (MEC) systems through metro optical networks. To cater to these diverse applications, network slicing has become a popular tool for creating specialized virtual networks. However, the uneven utilization of multidimensional resources can result in resource fragmentation, thereby reducing the utilization of limited edge resources. This article focuses on mitigating multidimensional resource fragmentation in virtual network embedding (VNE) to maximize the profit of the infrastructure provider (InP). The problem is converted into a bilevel optimization problem, taking into account the interdependence between virtual node embedding and virtual link embedding. To solve this problem, we propose a nested bilevel VNE approach named BiVNE. BiVNE leverages an ant colony system (ACS) algorithm for the upper layer problem and utilizes the Dijkstra algorithm and an exact-fit spectrum slot assignment method for the lower layer problem. Evaluation results demonstrate that BiVNE can greatly improve the profit of the InP by increasing the acceptance ratio and avoiding resource fragmentation simultaneously. @article{GuanSQLGJ23, author = {Yingying Guan and Qingyang Song and Weijing Qi and Ke Li and Lei Guo and Abbas Jamalipour}, title = {Multidimensional Resource Fragmentation-Aware Virtual Network Embedding in {MEC} Systems Interconnected by Metro Optical Networks}, journal = {IEEE Internet of Things Journal}, volume = {10}, number = {24} year = {2023}, url = {https://ieeexplore.ieee.org/document/10217060?source=authoralert}, doi = {10.1109/JIOT.2023.3304976} } Interactive Evolutionary Multi-Objective Optimization via Learning-to-Rank
Ke Li, Guiyu Lai+, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC), 27(4): 749\u0026ndash;763, 2023
10.1109/TEVC.2023.3234269
Abs | PDF | Supp | BiB In practical multi-criterion decision-making, it is cumbersome if a decision maker (DM) is asked to choose among a set of trade-off alternatives covering the whole Pareto-optimal front. This is a paradox in conventional evolutionary multi-objective optimization (EMO) that always aim to achieve a well balance between convergence and diversity. In essence, the ultimate goal of multi-objective optimization is to help a decision maker (DM) identify solution(s) of interest (SOI) achieving satisfactory trade-offs among multiple conflicting criteria. Bearing this in mind, this paper develops a framework for designing preference-based EMO algorithms to find SOI in an interactive manner. Its core idea is to involve human in the loop of EMO. After every several iterations, the DM is invited to elicit her feedback with regard to a couple of incumbent candidates. By collecting such information, her preference is progressively learned by a learning-to-rank neural network and then applied to guide the baseline EMO algorithm. Note that this framework is so general that any existing EMO algorithm can be applied in a plug-in manner. Experiments on 48 benchmark test problems with up to 10 objectives and a real-world multi-objective robot control problem fully demonstrate the effectiveness of our proposed algorithms for finding SOI. @article{LiLY23, author = {Ke Li and Guiyu Lai and Xin Yao}, title = {Interactive Evolutionary Multiobjective Optimization via Learning to Rank}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {27}, number = {4}, pages = {749--763}, year = {2023}, url = {https://doi.org/10.1109/TEVC.2023.3234269}, doi = {10.1109/TEVC.2023.3234269}, timestamp = {Fri, 18 Aug 2023 08:46:27 +0200}, biburl = {https://dblp.org/rec/journals/tec/0001L023.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Efficient Spectral Graph Convolutional Network Deployment on Memristive Crossbars
Bo Lyu+, Maher Hamdi, Yin Yang, Yuting Cao, Zheng Yan, Ke Li, Shiping Wen, Tingwen Huang
IEEE Trans. Emerging Topics in Computational Intelligence (TETCI), 7(2): 415\u0026ndash;425, 2023
10.1109/TETCI.2022.3210998
Abs | PDF | BiB Multi-objective optimization problems are ubiquitous in real-world science, engineering and design optimization problems. It is not uncommon that the objective functions are as a black box, the evaluation of which usually involve time-consuming and/or costly physical experiments. Data-driven evolutionary optimization can be used to search for a set of non-dominated trade-off solutions, where the expensive objective functions are approximated as a surrogate model. In this paper, we propose a framework for implementing batched data-driven evolutionary multi-objective optimization. It is so general that any off-the-shelf evolutionary multi-objective optimization algorithms can be applied in a plug-in manner. There are two unique components: 1) based on the Karush-Kuhn-Tucker conditions, a manifold interpolation approach that explores more diversified solutions with a convergence guarantee along the manifold of the approximated Pareto-optimal set; and 2) a batch recommendation approach that reduces the computational time of the data-driven evolutionary optimization process by evaluating multiple samples at a time in parallel. Comparing against 7 state-of-the-art surrogate-assisted evolutionary algorithms, experiments on 168 benchmark test problem instances with various properties and a real-world application on hyper-parameter optimization fully demonstrate the effectiveness and superiority of our proposed framework, which is featured with a faster convergence and a stronger resilience to various PF shapes. @article{LyuHYCYLSH22, author = {Bo Lyu and Maher Hamdi and Yin Yang and Yuting Cao and Zheng Yan and Ke Li and Shiping Wen and Tingwen Huang}, journal = {IEEE Trans. Emerg. Top. Comput. Intell.}, title = {Efficient Spectral Graph Convolutional Network Deployment on Memristive Crossbars}, year = {2022}, pages = {1-11}, note = {accepted for publication}, doi = {10.1109/TETCI.2022.3210998} } Neural Architecture Search for Portrait Parsing
Bo Lyu+, Yin Yang, Shiping Wen, Tingwen Huang, Ke Li
IEEE Trans. Neural Networks and Learning Systems (TNNLS), 34(3): 1112\u0026ndash;1121, 2023
10.1109/TNNLS.2021.3104872
Abs | PDF | BiB This work proposes a neural architecture search (NAS) method for portrait parsing, which is a novel up-level task based on portrait segmentation and face labeling. Recently, NAS has become an effective method in terms of automatic machine learning. However, remarkable achievements have been made only in image classification and natural language processing (NLP) areas. Meanwhile, state-of-the-art portrait segmentation and face labeling approaches are all manually designed, but few models reach a tradeoff between efficiency and performance. Thus, we are extremely interested in improving existing NAS methods for dense-per-pixel prediction tasks on portrait datasets. To achieve that, we resort to a cell-based encoder-decoder architecture with an elaborate design of connectivity structure and searching space. As a result, we achieve state-of-the-art performance on three portrait tasks, including 96.8% MIOU on EG1800 (portrait segmentation), 91.2% overall F1-score on HELEN (face labeling), and 95.1% overall F1-score on CelebAMask-HQ (portrait parsing) with only 2.29M model parameters. That is, our approach compares favorably with all previous works on portrait datasets. More crucially, we empirically prove that even a fundamental encoder-decoder architecture may reach an outstanding result on the aforementioned tasks with the help of the innovative approach of NAS. To the best of our knowledge, our work is also the first to report the success of applying NAS on these portrait tasks. @article{LyuYWHL23, author = {Bo Lyu and Yin Yang and Shiping Wen and Tingwen Huang and Ke Li}, title = {Neural Architecture Search for Portrait Parsing}, journal = {{IEEE} Trans. Neural Networks Learn. Syst.}, volume = {34}, number = {3}, pages = {1112--1121}, year = {2023}, url = {https://doi.org/10.1109/TNNLS.2021.3104872}, doi = {10.1109/TNNLS.2021.3104872}, timestamp = {Sat, 11 Mar 2023 00:12:14 +0100}, biburl = {https://dblp.org/rec/journals/tnn/LyuYWHL23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Batched Data-Driven Evolutionary Multi-Objective Optimization Based on Manifold Interpolation
Ke Li*, Renzhi Chen+*
IEEE Trans. Evolutionary Computation (TEVC), 27(1): 126\u0026ndash;140, 2023
10.1109/TEVC.2022.3162993
Abs | PDF | Supp | BiB Multi-objective optimization problems are ubiquitous in real-world science, engineering and design optimization problems. It is not uncommon that the objective functions are as a black box, the evaluation of which usually involve time-consuming and/or costly physical experiments. Data-driven evolutionary optimization can be used to search for a set of non-dominated trade-off solutions, where the expensive objective functions are approximated as a surrogate model. In this paper, we propose a framework for implementing batched data-driven evolutionary multi-objective optimization. It is so general that any off-the-shelf evolutionary multi-objective optimization algorithms can be applied in a plug-in manner. There are two unique components: 1) based on the Karush-Kuhn-Tucker conditions, a manifold interpolation approach that explores more diversified solutions with a convergence guarantee along the manifold of the approximated Pareto-optimal set; and 2) a batch recommendation approach that reduces the computational time of the data-driven evolutionary optimization process by evaluating multiple samples at a time in parallel. Comparing against 7 state-of-the-art surrogate-assisted evolutionary algorithms, experiments on 168 benchmark test problem instances with various properties and a real-world application on hyper-parameter optimization fully demonstrate the effectiveness and superiority of our proposed framework, which is featured with a faster convergence and a stronger resilience to various PF shapes. @article{LiC23, author = {Ke Li and Renzhi Chen}, title = {Batched Data-Driven Evolutionary Multiobjective Optimization Based on Manifold Interpolation}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {27}, number = {1}, pages = {126--140}, year = {2023}, url = {https://doi.org/10.1109/TEVC.2022.3162993}, doi = {10.1109/TEVC.2022.3162993}, timestamp = {Sat, 25 Feb 2023 21:35:23 +0100}, biburl = {https://dblp.org/rec/journals/tec/LiC23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } MTLP-JR: Multi-Task Learning-Based Prediction for Joint Ranking in Neural Architecture Search
Bo Lyu+, Longfei Lu, Maher Hamdi, Shiping Wen, Yin Yang, Ke Li
Computers \u0026amp; Electrical Engineering, 105: 108474, 2023
10.1016/j.compeleceng.2022.108474
Abs | PDF | BiB At present, great attentions have been paid to multi-objective neural architecture search (NAS) and resource-aware NAS for their comprehensive consideration of the overall evaluation of architectures, including inference latency, precision, and model scale. However NAS also exacerbates the ever-increasing cost (engineering, time complexity, computation resource). Aiming to alleviate this, the reproducible NAS research releases the benchmark, which includes the metrics (e.g. Accuracy, Latency, and Parameters) of representative models from the typical search space on specific tasks. Motivated by the multi-objective NAS, resource-aware NAS, and reproducible NAS, this paper dedicates to binary-relation prediction (Latency, Accuracy), which is a more reasonable and effective way to satisfy the general NAS scenarios with less cost. We conduct a reproducible NAS study on the MobileNet-based search space and release the dataset. Further, we first propose the modeling of common features among prediction tasks (Latency, Accuracy, Parameters, and FLOPs), which will facilitate the prediction of individual tasks, and creatively formulate the architecture ranking prediction with a multi-task learning framework. Eventually, the proposed multi-task learning based binary-relation prediction model reaches the performance of 94.3% on Latency and 85.02% on Top1 Accuracy even with only 100 training points, which outperforms the single-task learning based model. @article{LyuLHWYL23, author = {Bo Lyu and Longfei Lu and Maher Hamdi and Shiping Wen and Yin Yang and Ke Li}, title = {{MTLP-JR:} Multi-task learning-based prediction for joint ranking in neural architecture search}, journal = {Comput. Electr. Eng.}, volume = {105}, pages = {108474}, year = {2023}, url = {https://doi.org/10.1016/j.compeleceng.2022.108474}, doi = {10.1016/J.COMPELECENG.2022.108474}, timestamp = {Mon, 26 Jun 2023 20:54:11 +0200}, biburl = {https://dblp.org/rec/journals/cee/LyuLHWYL23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Multioutput Surrogate Assisted Evolutionary Algorithm for Expensive Multi-Modal Optimization Problems
Renzhi Chen+, Ke Li
Proc. of the 2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC'23)
Abs | PDF | BiB
Empirical Studies of Resampling Strategies in Noisy Evolutionary Multi-Objective Optimization
Shasha Zhou+, Ke Li
Proc. of the 2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC'23)
Abs | PDF | BiB
Preference-Based Multi-Objective Optimization with Gaussian Process
Tian Huang+, Ke Li
Proc. of the 2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC'23)
Abs | PDF | BiB
A Multi-Population Evolutionary Algorithm Using New Cooperative Mechanism for Solving Multi-Objective Problems with Multi-Constraint
Juan Zou, Ruiqing Sun, Yuan Liu, Yaru Hu, Shengxiang Yang, Jinhua Zheng, Ke Li
IEEE Trans. Evolutionary Computation (TEVC)
10.1109/TEVC.2023.3260306
Abs | PDF | BiB In science and engineering, multi-objective optimization problems usually contain multiple complex constraints, which poses a significant challenge in obtaining the optimal solution. This paper aims to solve the challenges brought by multiple complex constraints. First, this paper analyzes the relationship between single constrained Pareto Front (SCPF) and their common Pareto Front sub-constrained Pareto Front (SubCPF). Next, we discussed the SCPF, SubCPF, and Unconstrainti Pareto Front (UPF)’s help to solve constraining Pareto Front (CPF). Then further discusses what kind of cooperation should be used between multiple populations constrained multi-objective optimization algorithm (CMOEA) to better deal with multi-constrained multi-objective optimization problems (mCMOPs). At the same time, based on the discussion in this paper, we propose a new multi-population CMOEA called MCCMO, which uses a new cooperation mechanism. MCCMO uses C+2 (C is the number of constraints) populations to find the UPF, SCPF, and SubCPF at an appropriate time. Furthermore, MCCMO uses the newly proposed Activation Dormancy Detection (ADD) to accelerate the optimization process and uses the proposed Combine Occasion Detection (COD) to find the appropriate time to find the SubCPF. The performance on 32 mCMOPs and real-world mCMOPs shows that our algorithm can obtain competitive solutions on MOPs with multiple constraints. \u0026ldquo;Why Not Looking backward?\u0026rdquo; A Robust Two-Step Method to Automatically Terminate Bayesian Optimization
Shuang Li+, Ke Li, Wei Li
Proc. of the 37th Conference on Neural Information Processing Systems (NeurIPS'23)
Abs | PDF | Code | BiB | ≈ 26.1% Bayesian Optimization (BO) is a powerful method for tackling expensive black-box optimization problems. As a sequential model-based optimization strategy, BO iteratively explores promising solutions until a predetermined budget, either iterations or time, is exhausted. The decision on when to terminate BO significantly influences both the quality of solutions and its computational efficiency. In this paper, we propose a simple, yet theoretically grounded, two-step method for automatically terminating BO. Our core concept is to proactively identify if the search is within a convex region by examining previously observed samples. BO is halted once the local regret within this convex region falls below a predetermined threshold. To enhance numerical stability, we propose an approximation method for calculating the termination indicator by solving a bilevel optimization problem. We conduct extensive empirical studies on diverse benchmark problems, including synthetic functions, reinforcement learning, and hyperparameter optimization. Experimental results demonstrate that our proposed method saves up to approximately 80% computational budget yet is with an order of magnitude smaller performance degradation, comparing against the other peer methods. In addition, our proposed termination method is robust in terms of the setting of its termination criterion. @inproceedings{LiLL23, author = {Shuang Li and Ke Li and Wei Li}, title = {“Why Not Looking backward?” A Robust Two-Step Method to Automatically Terminate Bayesian Optimization}, booktitle = {NeurIPS'23: Proc. of 37th Conference on Neural Information Processing Systems}, pages = {1--12}, year = {2023}, url = {https://openreview.net/pdf?id=IMiGRqltQQ} } CamoPatch: An Evolutionary Strategy for Generating Camoflauged Adversarial Patches
Phoenix Williams+, Ke Li
Proc. of the 37th Conference on Neural Information Processing Systems (NeurIPS'23)
Abs | PDF | BiB | ≈ 26.1%
Evolutionary Multi-objective Instruction Optimization via Large Language Model-based Instruction Operators
Heng Yang+, Ke Li
Proc. of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP'23)
Abs | PDF | BiB Instruction-based language modeling has received significant attention in pretrained language models. However, the efficiency of instruction engineering remains low and hinders the development of instruction studies. Recent studies have focused on automating instruction generation, but they primarily aim to improve performance without considering other crucial objectives that impact instruction quality, such as instruction length and perplexity. Therefore, we propose a novel approach (i.e., InstOptima) that treats instruction generation as an evolutionary multi-objective optimization problem. In contrast to text edition-based methods, our approach utilizes a large language model (LLM) to simulate instruction operators, including mutation and crossover. Furthermore, we introduce an objective-guided mechanism for these operators, allowing the LLM to comprehend the objectives and enhance the quality of the generated instructions. Experimental results demonstrate improved fine-tuning performance and the generation of a diverse set of high-quality instructions. @inproceedings{YangL23a, author = {Heng Yang and Ke Li}, editor = {Houda Bouamor and Juan Pino and Kalika Bali}, title = {InstOptima: Evolutionary Multi-objective Instruction Optimization via Large Language Model-based Instruction Operators}, booktitle = {EMNLP'23: Findings of the Association for Computational Linguistics: {EMNLP} 2023}, pages = {13593--13602}, publisher = {Association for Computational Linguistics}, year = {2023}, url = {https://aclanthology.org/2023.findings-emnlp.907}, timestamp = {Wed, 13 Dec 2023 17:20:20 +0100}, biburl = {https://dblp.org/rec/conf/emnlp/0008L23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } PyABSA: A Modularized Framework for Reproducible Aspect-based Sentiment Analysis
Heng Yang+, Ke Li
Proc. of the 32nd ACM International Conference on Information and Knowledge Management (CIKM'23), p. 5117\u0026ndash;5122, October, 2023.
10.1145/3583780.3614752
Abs | PDF | Code | BiB | ≈ 35% The advancement of aspect-based sentiment analysis (ABSA) has highlighted the lack of a user-friendly framework that can significantly reduce the difficulty of reproducing state-of-the-art ABSA performance, especially for beginners. To meet this demand, we present PyABSA, a modularized framework built on PyTorch for reproducible ABSA. To facilitate ABSA research, PyABSA supports several ABSA subtasks, including aspect term extraction, aspect sentiment classification, and end-to-end aspect-based sentiment analysis. With just a few lines of code, the result of a model on a specific dataset can be reproduced. With a modularized design, PyABSA can also be flexibly extended to incorporate new models, datasets, and other related tasks. Additionally, PyABSA highlights its data augmentation and annotation features, which significantly address data scarcity. The project is available at: https://github.com/yangheng95/PyABSA. @inproceedings{YangZL23, author = {Heng Yang and Chen Zhang and Ke Li}, title = {PyABSA: {A} Modularized Framework for Reproducible Aspect-based Sentiment Analysis}, booktitle = {CIKM'23: Proc. of the 32nd {ACM} International Conference on Information and Knowledge Management}, pages = {5117--5122}, publisher = {{ACM}}, year = {2023}, url = {https://doi.org/10.1145/3583780.3614752}, doi = {10.1145/3583780.3614752}, timestamp = {Thu, 23 Nov 2023 13:25:05 +0100}, biburl = {https://dblp.org/rec/conf/cikm/0008ZL23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } A Surrogate Assisted Evolutionary Strategy for Image Approximation by Density-Ratio Estimation
Phoenix Williams+, Ke Li
Proc. of 2023 IEEE Congress on Evolutionary Computation (CEC'23), p. 1\u0026ndash;8, July, 2023.
Abs | PDF | BiB The use of evolutionary strategies in generating images is a common practice within the computational art community. In particular, a popular approach is to approximate a target image using overlapping, semi-transparent shapes and optimizing their attributes to increase similarity to the target image. However, existing methods usually require millions of fitness evaluations to construct good approximations. Within the evolutionary computation and machine learning communities, the use of surrogates has shown to decrease the number of fitness evaluations while achieving state-of-the-art results. Despite the gained traction of surrogate-assisted algorithms, their use within the computational art community is nonexistent. To address this, we extend the previous work of Bayesian Optimization by density-ratio estimation (BORE) to the image approximation task. By estimating the probability of improvement acquisition function using a convolutional probabilistic classifier, we search for solutions that maximize the acquisition function using an evolutionary strategy. By conducting experiments on six different styled target images, we demonstrate the superior performance achieved with the use of surrogate assistance. @inproceedings{WilliamsLM23, author = {Phoenix Neale Williams and Ke Li and Geyong Min}, title = {A Surrogate Assisted Evolutionary Strategy for Image Approximation by Density-Ratio Estimation}, booktitle = {CEC'23: Proc. of 2023 {IEEE} Congress on Evolutionary Computation}, pages = {1--8}, publisher = {{IEEE}}, year = {2023}, url = {https://doi.org/10.1109/CEC53210.2023.10254060}, doi = {10.1109/CEC53210.2023.10254060}, timestamp = {Fri, 29 Sep 2023 13:35:30 +0200}, biburl = {https://dblp.org/rec/conf/cec/WilliamsLM23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Exploring Structural Similarity in Fitness Landscapes via Graph Data Mining: A Case Study on Number Partitioning Problems
Mingyu Huang+, Ke Li
Porc. of the 32nd International Joint Conference on Artificial Intelligence (IJCAI'23), p. 5595\u0026ndash;5603, August, 2023.
Abs | PDF | Supp | BiB | ≈ 15% One of the most common problem-solving heuristics is by analogy. For a given problem, a solver can be viewed as a strategic walk on its fitness landscape. Thus if a solver works for one problem instance, we expect it will also be effective for other instances whose fitness landscapes essentially share structural similarities with each other. However, due to the black-box nature of combinatorial optimization, it is far from trivial to infer such similarity in real-world scenarios. To bridge this gap, by using local optima network as a proxy of fitness landscapes, this paper proposed to leverage graph data mining techniques to conduct qualitative and quantitative analyses to explore the latent topological structural information embedded in those landscapes. In our experiments, we use the number partitioning problem as the case and our empirical results are inspiring to support the overall assumption of the existence of structural similarity between landscapes within neighboring dimensions. Besides, experiments on simulated annealing demonstrate that the performance of a meta-heuristic solver is similar on structurally similar landscapes. @inproceedings{HuangL23, author = {Mingyu Huang and Ke Li}, title = {Exploring Structural Similarity in Fitness Landscapes via Graph Data Mining: {A} Case Study on Number Partitioning Problems}, booktitle = {IJCAI'23: Proc. of the Thirty-Second International Joint Conference on Artificial Intelligence}, pages = {5595--5603}, publisher = {ijcai.org}, year = {2023}, url = {https://doi.org/10.24963/ijcai.2023/621}, doi = {10.24963/IJCAI.2023/621}, timestamp = {Mon, 28 Aug 2023 17:23:07 +0200}, biburl = {https://dblp.org/rec/conf/ijcai/HuangL23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Boosting Text Augmentation via Hybrid Instance Filtering Framework
Heng Yang+, Ke Li
Findings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL'23), p. 1652\u0026ndash;1669, July, 2023.
Abs | PDF | BiB | ≈ 40.6% Text augmentation is an effective technique for addressing the problem of insufficient data in natural language processing. However, existing text augmentation methods tend to focus on few-shot scenarios and usually perform poorly on large public datasets. Our research indicates that existing augmentation methods often generate instances with shifted feature spaces, which leads to a drop in performance on the augmented data (for example, EDA generally loses approximately 2% in aspect-based sentiment classification). To address this problem, we propose a hybrid instance-filtering framework (BoostAug) based on pre-trained language models that can maintain a similar feature space with natural datasets. BoostAug is transferable to existing text augmentation methods (such as synonym substitution and back translation) and significantly improves the augmentation performance by 2-3% in classification accuracy. Our experimental results on three classification tasks and nine public datasets show that BoostAug addresses the performance drop problem and outperforms state-of-the-art text augmentation methods. Additionally, we release the code to help improve existing augmentation methods on large datasets. @inproceedings{YangL23b, author = {Heng Yang and Ke Li}, editor = {Anna Rogers and Jordan L. Boyd{-}Graber and Naoaki Okazaki}, title = {Boosting Text Augmentation via Hybrid Instance Filtering Framework}, booktitle = {ACL'23: Findings of the Association for Computational Linguistics: {ACL} 2023}, pages = {1652--1669}, publisher = {Association for Computational Linguistics}, year = {2023}, url = {https://doi.org/10.18653/v1/2023.findings-acl.105}, doi = {10.18653/V1/2023.FINDINGS-ACL.105}, timestamp = {Sun, 12 Nov 2023 02:14:31 +0100}, biburl = {https://dblp.org/rec/conf/acl/0008L23.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Single Application Service Deployment in the Edge Environment Based on the E-CARGO Model
Senyue Zhang, Ling Xue, Weiliang Huang, Lu Zhao, Ke Li
Proc. of 26th International Conference on Computer Supported Cooperative Work in Design (CSCWD'23), May, 2023.
10.1109/CSCWD57460.2023.10152752
Abs | PDF | BiB
Black-Box Sparse Adversarial Attack via Multi-Objective Optimisation
Phoenix Williams+, Ke Li
Proc. of 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR'23), p. 12291\u0026ndash;12301, June, 2023.
Abs | PDF | BiB | ≈ 25% Deep neural networks (DNNs) are susceptible to adversarial images, raising concerns about their reliability in safety-critical tasks. Sparse adversarial attacks, which limit the number of modified pixels, have shown to be highly effective in causing DNNs to misclassify. However, existing methods often struggle to simultaneously minimize the number of modified pixels and the size of the modifications, often requiring a large number of queries and assuming unrestricted access to the targeted DNN. In contrast, other methods that limit the number of modified pixels often permit unbounded modifications, making them easily detectable. To address these limitations, we propose a novel multi-objective sparse attack algorithm that efficiently minimizes the number of modified pixels and their size during the attack process. Our algorithm draws inspiration from evolutionary computation and incorporates a mechanism for prioritizing objectives that aligns with an attacker's goals. Our approach outperforms existing sparse attacks on CIFAR-10 and ImageNet trained DNN classifiers while requiring only a small query budget, attaining competitive attack success rates while perturbing fewer pixels. Overall, our proposed attack algorithm provides a solution to the limitations of current sparse attack methods by jointly minimizing the number of modified pixels and their size. Our results demonstrate the effectiveness of our approach in restricted scenarios, highlighting its potential to enhance DNN security. @inproceedings{WilliamsL23, author = {Phoenix Neale Williams and Ke Li}, title = {Black-Box Sparse Adversarial Attack via Multi-Objective Optimisation}, booktitle = {CVPR'23: Proc. of 2023 {IEEE/CVF} Conference on Computer Vision and Pattern Recognition}, pages = {12291--12301}, publisher = {{IEEE}}, year = {2023}, url = {https://doi.org/10.1109/CVPR52729.2023.01183}, doi = {10.1109/CVPR52729.2023.01183}, timestamp = {Tue, 29 Aug 2023 15:44:40 +0200}, biburl = {https://dblp.org/rec/conf/cvpr/Williams023.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Data-Driven Evolutionary Multi-Objective Optimization Based on Multiple-Gradient Descent for Disconnected Pareto Fronts
Renzhi Chen+, Ke Li
Proc. of the 12th International Conference on Evolutionary Multi-Criterion Optimization (EMO'23), Springer, p. 56-70, March, 2023
10.1007/978-3-031-27250-9_5
Abs | PDF | Supp | BiB Data-driven evolutionary multi-objective optimization (EMO) has been recognized as an effective approach for multi-objective optimization problems with expensive objective functions. The current research is mainly developed for problems with a 'regular' triangle-like Pareto-optimal front (PF), whereas the performance can significantly deteriorate when the PF consists of disconnected segments. Furthermore, the offspring reproduction in the current data-driven EMO does not fully leverage the latent information of the surrogate model. Bearing these considerations in mind, this paper proposes a data-driven EMO algorithm based on multiple-gradient descent. By leveraging the regularity information provided by the up-to-date surrogate model, it is able to progressively probe a set of well distributed candidate solutions with a convergence guarantee. In addition, its infill criterion recommends a batch of promising candidate solutions to conduct expensive objective function evaluations. Experiments on 33 benchmark test problem instances with disconnected PFs fully demonstrate the effectiveness of our proposed method against four selected peer algorithms. Sparse Adversarial Attack via Bi-Objective Optimization
Phoenix Williams+, Ke Li, Geyong Min
Proc. of the 12th International Conference on Evolutionary Multi-Criterion Optimization (EMO'23), Springer, p. 118-133, March, 2023
10.1007/978-3-031-27250-9_9
Abs | PDF | BiB
2022 # Journal # Posterior Decision-Making Based on Decomposition-Driven Knee Point Identification
Ke Li, Haifeng Nie+, Huiru Gao+, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC), 26(6): 1409-1423, 2022
10.1109/TEVC.2021.3116121
Abs | PDF | Code | Supp | BiB Knee points, characterized as a small improvement on one objective can lead to a significant degradation on at least one of the other objectives, are attractive to decision makers in multi-criterion decision-making. This paper presents a simple and effective knee point identification method to help decision makers identify solution(s) of interest from a given set of trade-off solutions thus facilitating posterior decision-making. Our basic idea is to sequentially validate whether a solution is a knee point or not by comparing its localized trade-off utility with others within its neighborhood characterized from a decomposition perspective. In particular, a solution is a knee point if and only if it has the best localized trade-off utility among its neighbors. We implement a GPU version that carries out the knee point identification in a parallel manner. This GPU version reduces the worst-case complexity from quadratic to linear. The performance of our proposed method is compared with five state-of-the-art knee point identification methods on 134 test problem instances and two real-world engineering design problems. Empirical results demonstrate its outstanding performance especially on problems with many local knee points. We further validate the usefulness of our proposed method for guiding evolutionary multi-objective optimization algorithms to search for knee points on the fly during the evolutionary process. @article{LiNGY22, author = {Ke Li and Haifeng Nie and Huiru Gao and Xin Yao}, title = {Posterior Decision Making Based on Decomposition-Driven Knee Point Identification}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {26}, number = {6}, pages = {1409--1423}, year = {2022}, url = {https://doi.org/10.1109/TEVC.2021.3116121}, doi = {10.1109/TEVC.2021.3116121}, timestamp = {Sun, 25 Dec 2022 14:03:21 +0100}, biburl = {https://dblp.org/rec/journals/tec/LiNGY22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Distributed UAV Swarm Formation and Collision Avoidance Strategies Over Fixed and Switching Topologies
Jia Wu, Chunbo Luo, Yang Luo, Ke Li
IEEE Trans. Cybernetics (TCYB), 52(10): 10969-10979, 2022
10.1109/TCYB.2021.3132587
Abs | PDF | BiB This article proposes a controlling framework for multiple unmanned aerial vehicles (UAVs) to integrate the modes of formation flight and swarm deployment over fixed and switching topologies. Formation strategies enable UAVs to enjoy key collective benefits including reduced energy consumption, but the shape of the formation and each UAV's freedom are significantly restrained. Swarm strategies are thus proposed to maximize each UAV's freedom following simple yet powerful rules. This article investigates the integration and switch between these two strategies, considering the deployment environment factors, such as poor network conditions and unknown and often highly mobile obstacles. We design a distributed formation controller to guide multiple UAVs in orderless states to swiftly reach an intended formation. Inspired by starling birds and similar biological creatures, a distributed collision avoidance controller is proposed to avoid unknown and mobile obstacles. We further illustrated the stability of the controllers over both fixed and switching topologies. The experimental results confirm the effectiveness of the framework. @article{WuLLL22, author = {Jia Wu and Chunbo Luo and Yang Luo and Ke Li}, title = {Distributed {UAV} Swarm Formation and Collision Avoidance Strategies Over Fixed and Switching Topologies}, journal = {{IEEE} Trans. Cybern.}, volume = {52}, number = {10}, pages = {10969--10979}, year = {2022}, url = {https://doi.org/10.1109/TCYB.2021.3132587}, doi = {10.1109/TCYB.2021.3132587}, timestamp = {Thu, 13 Oct 2022 16:02:10 +0200}, biburl = {https://dblp.org/rec/journals/tcyb/WuLLL22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Transfer Learning Based Parallel Evolutionary Algorithm Framework for Bi-level Optimization
Lei Chen, Hai-Lin Liu, Kay Chen Tan, Ke Li
IEEE Trans. Evolutionary Computation (TEVC), 26(1): 115-129, 2022
10.1109/TEVC.2021.3095313
Abs | PDF | Code | BiB Evolutionary algorithms (EAs) have been recognized as a promising approach for bilevel optimization. However, the population-based characteristic of EAs largely influences their efficiency and effectiveness due to the nested structure of the two levels of optimization problems. In this article, we propose a transfer learning-based parallel EA (TLEA) framework for bilevel optimization. In this framework, the task of optimizing a set of lower level problems parameterized by upper level variables is conducted in a parallel manner. In the meanwhile, a transfer learning strategy is developed to improve the effectiveness of each lower level search (LLS) process. In practice, we implement two versions of the TLEA: the first version uses the covariance matrix adaptation evolutionary strategy and the second version uses the differential evolution as the evolutionary operator in lower level optimization. The experimental studies on two sets of widely used bilevel optimization benchmark problems are conducted, and the performance of the two TLEA implementations is compared to that of four well-established evolutionary bilevel optimization algorithms to verify the effectiveness and efficiency of the proposed algorithm framework. @article{ChenLTL22, author = {Lei Chen and Hai{-}Lin Liu and Kay Chen Tan and Ke Li}, title = {Transfer Learning-Based Parallel Evolutionary Algorithm Framework for Bilevel Optimization}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {26}, number = {1}, pages = {115--129}, year = {2022}, url = {https://doi.org/10.1109/TEVC.2021.3095313}, doi = {10.1109/TEVC.2021.3095313}, timestamp = {Wed, 23 Feb 2022 11:16:38 +0100}, biburl = {https://dblp.org/rec/journals/tec/ChenLTL22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Preference based Multi-Objective Reinforcement Learning for Multi-Microgrid System Optimization Problem in Smart Grid
Jiangjiao Xu+, Ke Li, Mohammad Abusara
Memetic Computing (MC), 14(2): 225-235, 2022
10.1007/s12293-022-00357-w
Abs | PDF | BiB Grid-connected microgrids comprising renewable energy, energy storage systems and local load, play a vital role in decreasing the energy consumption of fossil diesel and greenhouse gas emissions. A distribution power network connecting several microgrids can promote more potent and reliable operations to enhance the security and privacy of the power system. However, the operation control for a multi-microgrid system is a big challenge. To design a multi-microgrid power system, an intelligent multi-microgrids energy management method is proposed based on the preference-based multi-objective reinforcement learning (PMORL) techniques. The power system model can be divided into three layers: the consumer layer, the independent system operator layer, and the power grid layer. Each layer intends to maximize its benefit. The PMORL is proposed to lead to a Pareto optimal set for each object to achieve these objectives. A non-dominated solution is decided to execute a balanced plan not to favor any particular participant. The preference-based results show that the proposed method can effectively learn different preferences. The simulation outcomes confirm the performance of the PMORL and verify the viability of the proposed method. @article{XuLA22, author = {Jiangjiao Xu and Ke Li and Mohammad Abusara}, title = {Preference based multi-objective reinforcement learning for multi-microgrid system optimization problem in smart grid}, journal = {Memetic Comput.}, volume = {14}, number = {2}, pages = {225--235}, year = {2022}, url = {https://doi.org/10.1007/s12293-022-00357-w}, doi = {10.1007/s12293-022-00357-w}, timestamp = {Thu, 02 Jun 2022 16:43:14 +0200}, biburl = {https://dblp.org/rec/journals/memetic/XuLA22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Surrogate-Assisted Evolutionary Multi-Objective Optimization for Hardware Design Space Exploration
Renzhi Chen+, Ke Li
Proc. of the NeurIPS Workshop on Gaussian Processes, Spatiotemporal Modeling, and Decision-making Systems, 2022
Abs | PDF | BiB Hardware design space exploration (DSE) aims to find a suitable micro-architecture for the dedicated hardware accelerators. It is a computationally expensive black-box optimization problem with more than one conflicting performance indicator. Surrogate-assisted evolutionary algorithm is a promising framework for expensive multi-objective optimization problems given its surrogate modeling for handling expensive objective functions and population-based characteristics that search for a set of trade-off solutions simultaneously. However, most, if not all, existing studies mainly focus ‘regular’ Pareto-optimal fronts (PFs), whereas the PF is typically irregular in hardware DSE. In the meanwhile, the gradient information of the differentiable surrogate model(s) is beneficial to navigate a more effective exploration of the search space, but it is yet fully exploited. This paper proposes a surrogate-assisted evolutionary multi-objective optimization based on multiple-gradient descent (MGD) for hardware DSE. Empirical results on both synthetic problems with irregular PFs and real-world hardware DSE cases fully demonstrate the effectiveness and outstanding performance of our proposed algorithm. Are All Training Data Useful? A Empirical Revisit of Subset Selection in Bayesian Optimization
Peili Mao+, Ke Li
Proc. of the NeurIPS Workshop on Gaussian Processes, Spatiotemporal Modeling, and Decision-making Systems, 2022
Abs | PDF | BiB Bayesian optimization (BO) has been widely recognized as a powerful approach for black-box optimization problems with expensive objective function(s). Gaussian process (GP), which has been widely used for surrogate modeling in BO, is notorious for its cubic computational complexity grows with the increase of the amount of evaluated samples. This can lead to a significantly increased computational time for BO due to its sequential decision-making nature. This paper revisit the simple and effective subset selection methods to pick up a small group of representative data from the entire dataset to carry out the training and inference of GP in the context of BO. Empirical studies demonstrate that subset selection methods not only promote the performance of the vanilla BO but also significantly reduce the computational time for up to 98%. Imputation and Forecasting for Multi-Output Gaussian Process in Smart Grid
Jiangjiao Xu+, Ke Li
Proc. of the NeurIPS Workshop on Gaussian Processes, Spatiotemporal Modeling, and Decision-making Systems, 2022
Abs | PDF | BiB
Do We Really Need to Use Constraint Violation in Constrained Evolutionary Multi-Objective Optimization?
Shuang Li+, Ke Li, Wei Li
Proc. of the 17the International Conference on Parallel Problem Solving from Nature (PPSN'22), Springer, p. 124-137, September, 2022
10.1007/978-3-031-14721-0_9
PDF | BiB
@inproceedings{LiLL22, author = {Shuang Li and Ke Li and Wei Li}, title = {Do We Really Need to Use Constraint Violation in Constrained Evolutionary Multi-objective Optimization?}, booktitle = {PPSN'22: Proc. of 17th International Conference on Parallel Problem Solving from Nature}, series = {Lecture Notes in Computer Science}, volume = {13399}, pages = {124--137}, publisher = {Springer}, year = {2022}, url = {https://doi.org/10.1007/978-3-031-14721-0\\_9}, doi = {10.1007/978-3-031-14721-0\\_9}, timestamp = {Thu, 25 Aug 2022 08:35:33 +0200}, biburl = {https://dblp.org/rec/conf/ppsn/LiLL22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Attention-Based Genetic Algorithm for Adversarial Attack in Natural Language Processing
Shasha Zhou+, Ke Li, Geyong Min
Proc. of the 17the International Conference on Parallel Problem Solving from Nature (PPSN'22), Springer, p. 341-355, September, 2022
10.1007/978-3-031-14714-2_24
PDF | BiB @inproceedings{ZhouLM22_b, author = {Shasha Zhou and Ke Li and Geyong Min}, title = {Attention-Based Genetic Algorithm for Adversarial Attack in Natural Language Processing}, booktitle = {PPSN'22: Proc. of 17th International Conference on Parallel Problem Solving from Nature}, series = {Lecture Notes in Computer Science}, volume = {13398}, pages = {341--355}, publisher = {Springer}, year = {2022}, url = {https://doi.org/10.1007/978-3-031-14714-2\\_24}, doi = {10.1007/978-3-031-14714-2\\_24}, timestamp = {Thu, 25 Aug 2022 08:35:33 +0200}, biburl = {https://dblp.org/rec/conf/ppsn/ZhouLM22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Black-Box Adversarial Attack via Overlapped Shapes
Phoenix Williams+, Ke Li, Geyong Min
Proc. of the 24th Annual Conference on Genetic and Evolutionary Computation (GECCO’22), ACM, p. 467-468, July, 2022
10.1145/3520304.3528934
PDF | BiB @inproceedings{Williams0M22, author = {Phoenix Neale Williams and Ke Li and Geyong Min}, title = {Black-box adversarial attack via overlapped shapes}, booktitle = {{GECCO}'22: Proc. of Genetic and Evolutionary Computation Conference, Companion Volume}, pages = {467--468}, publisher = {{ACM}}, year = {2022}, url = {https://doi.org/10.1145/3520304.3528934}, doi = {10.1145/3520304.3528934}, timestamp = {Mon, 25 Jul 2022 17:04:27 +0200}, biburl = {https://dblp.org/rec/conf/gecco/Williams0M22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Adversarial Attack Example Generation via Genetic Algorithm: A Preliminary Result
Shasha Zhou+, Ke Li, Geyong Min
Proc. of the 24th Annual Conference on Genetic and Evolutionary Computation (GECCO’22), ACM, p. 469-470, July, 2022
10.1145/3520304.3528981
PDF | BiB @inproceedings{ZhouLM22, author = {Shasha Zhou and Ke Li and Geyong Min}, title = {Adversarial example generation via genetic algorithm: a preliminary result}, booktitle = {{GECCO}'22: Proc. of Genetic and Evolutionary Computation Conference, Companion Volume}, pages = {469--470}, publisher = {{ACM}}, year = {2022}, url = {https://doi.org/10.1145/3520304.3528981}, doi = {10.1145/3520304.3528981}, timestamp = {Mon, 25 Jul 2022 17:04:27 +0200}, biburl = {https://dblp.org/rec/conf/gecco/Zhou0M22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } Decomposition Multi-Objective Optimisation: Current Developments and Future Opportunities
Ke Li, Qingfu Zhang
Proc. of the 24th Annual Conference on Genetic and Evolutionary Computation (GECCO’22), ACM, p. 469-470, July, 2022
10.1145/3520304.3533629
PDF | BiB @inproceedings{LiZ22, author = {Ke Li and Qingfu Zhang}, title = {Decomposition multi-objective optimisation: current developments and future opportunities}, booktitle = {{GECCO}'22: Proc. of the Genetic and Evolutionary Computation Conference, Companion Volume}, pages = {1554--1571}, publisher = {{ACM}}, year = {2022}, url = {https://doi.org/10.1145/3520304.3533629}, doi = {10.1145/3520304.3533629}, timestamp = {Mon, 25 Jul 2022 17:04:27 +0200}, biburl = {https://dblp.org/rec/conf/gecco/LiZ22.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2021 # Journal # Vertical Distance-based Clonal Selection Mechanism for the Multiobjective Immune Algorithm
Lingjie Li+, Qiuzhen Lin, Ke Li, Zhong Ming
Swarm and Evolutionary Computation (SWEVO), 106: 107299, 2021
10.1016/j.swevo.2021.100886
PDF | BiB @article{LiLLM21, author = {Lingjie Li and Qiuzhen Lin and Ke Li and Zhong Ming}, title = {Vertical distance-based clonal selection mechanism for the multiobjective immune algorithm}, journal = {Swarm Evol. Comput.}, volume = {63}, pages = {100886}, year = {2021}, url = {https://doi.org/10.1016/j.swevo.2021.100886}, doi = {10.1016/j.swevo.2021.100886}, timestamp = {Tue, 15 Jun 2021 09:16:57 +0200}, biburl = {https://dblp.org/rec/journals/swevo/LiLLM21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
A Vector Angles-Based Many-Objective Particle Swarm Optimization Algorithm Using Archive
Lei Yang+, Xin Hu, Ke Li
Applied Soft Computing (ASOC), 63: 100886, 2021
10.1016/j.asoc.2021.107299
PDF | BiB @article{YangHL21, author = {Lei Yang and Xin Hu and Ke Li}, title = {A vector angles-based many-objective particle swarm optimization algorithm using archive}, journal = {Appl. Soft Comput.}, volume = {106}, pages = {107299}, year = {2021}, url = {https://doi.org/10.1016/j.asoc.2021.107299}, doi = {10.1016/j.asoc.2021.107299}, timestamp = {Fri, 03 Dec 2021 13:16:58 +0100}, biburl = {https://dblp.org/rec/journals/asc/YangHL21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Bayesian Network Based Label Correlation Analysis For Multi-label Classifier Chain
Ran Wang, Suhe Ye, Ke Li, Sam Kwong
Information Sciences (INS), 554: 256\u0026ndash;275, 2021
10.1016/j.ins.2020.12.010
PDF | BiB @article{WangYLK21, author = {Ran Wang and Suhe Ye and Ke Li and Sam Kwong}, title = {Bayesian network based label correlation analysis for multi-label classifier chain}, journal = {Inf. Sci.}, volume = {554}, pages = {256--275}, year = {2021}, url = {https://doi.org/10.1016/j.ins.2020.12.010}, doi = {10.1016/j.ins.2020.12.010}, timestamp = {Fri, 09 Apr 2021 18:25:48 +0200}, biburl = {https://dblp.org/rec/journals/isci/WangYLK21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Conference # Knee Point Identification Based on the Geometric Characteristic
Renzhi Chen+, Ke Li
Proc. of the 2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC'21), IEEE, p. 764\u0026ndash;769, October, 2021
10.1109/SMC52423.2021.9658848
PDF | BiB @inproceedings{Chen021, author = {Renzhi Chen and Ke Li}, title = {Knee Point Identification Based on the Geometric Characteristic}, booktitle = {2021 {IEEE} International Conference on Systems, Man, and Cybernetics, {SMC} 2021, Melbourne, Australia, October 17-20, 2021}, pages = {764--769}, publisher = {{IEEE}}, year = {2021}, url = {https://doi.org/10.1109/SMC52423.2021.9658848}, doi = {10.1109/SMC52423.2021.9658848}, timestamp = {Tue, 11 Jan 2022 10:00:39 +0100}, biburl = {https://dblp.org/rec/conf/smc/Chen021.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Large-Scale Evolutionary Optimization via Multi-Task Random Grouping
Phoenix Williams+, Ke Li
Proc. of the 2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC'21), IEEE, p. 778\u0026ndash;783, October, 2021
10.1109/SMC52423.2021.9659276
PDF | BiB @inproceedings{WilliamsLM21, author = {Phoenix Neale Williams and Ke Li and Geyong Min}, title = {Large-Scale Evolutionary Optimization via Multi-Task Random Grouping}, booktitle = {2021 {IEEE} International Conference on Systems, Man, and Cybernetics, {SMC} 2021, Melbourne, Australia, October 17-20, 2021}, pages = {778--783}, publisher = {{IEEE}}, year = {2021}, url = {https://doi.org/10.1109/SMC52423.2021.9659276}, doi = {10.1109/SMC52423.2021.9659276}, timestamp = {Thu, 19 May 2022 17:23:34 +0200}, biburl = {https://dblp.org/rec/conf/smc/WilliamsLM21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Transfer Bayesian Optimization for Expensive Black-Box Optimization in Dynamic Environment
Renzhi Chen+, Ke Li
Proc. of the 2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC'21), IEEE, p. 1374\u0026ndash;1379, October, 2021
10.1109/SMC52423.2021.9659200
PDF | BiB @inproceedings{ChenL21, author = {Renzhi Chen and Ke Li}, title = {Transfer Bayesian Optimization for Expensive Black-Box Optimization in Dynamic Environment}, booktitle = {2021 {IEEE} International Conference on Systems, Man, and Cybernetics, {SMC} 2021, Melbourne, Australia, October 17-20, 2021}, pages = {1374--1379}, publisher = {{IEEE}}, year = {2021}, url = {https://doi.org/10.1109/SMC52423.2021.9659200}, doi = {10.1109/SMC52423.2021.9659200}, timestamp = {Tue, 11 Jan 2022 10:00:39 +0100}, biburl = {https://dblp.org/rec/conf/smc/Chen021a.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
ADMM-based OPF Problem Against Cyber Attacks in Smart Grid
Jiangjiao Xu+, Ke Li, Mohammad Abusara, Yan Zhang
Proc. of the 2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC'21), IEEE, p. 1418\u0026ndash;1423, October, 2021
10.1109/SMC52423.2021.9658699
PDF | BiB @inproceedings{XuLA021, author = {Jiangjiao Xu and Ke Li and Mohammad Abusara and Yan Zhang}, title = {ADMM-based {OPF} Problem Against Cyber Attacks in Smart Grid}, booktitle = {2021 {IEEE} International Conference on Systems, Man, and Cybernetics, {SMC} 2021, Melbourne, Australia, October 17-20, 2021}, pages = {1418--1423}, publisher = {{IEEE}}, year = {2021}, url = {https://doi.org/10.1109/SMC52423.2021.9658699}, doi = {10.1109/SMC52423.2021.9658699}, timestamp = {Thu, 10 Mar 2022 11:05:49 +0100}, biburl = {https://dblp.org/rec/conf/smc/XuLA021.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
An Enhancement of the NSGA-II Reliability Optimization using Extended Kalman Filter Based Initialization
Savas Yuec+, Ke Li
Proc. of the 2021 20th UK Workshop on Computational Intelligence (UKCI'21), Springer, p. 121\u0026ndash;128, September, 2021
10.1007/978-3-030-87094-2_11
PDF | BiB @inproceedings{YuceL21, author = {Savas Yuce and Ke Li}, title = {An Enhancement of the {NSGA-II} Reliability Optimization Using Extended Kalman Filter Based Initialization}, booktitle = {Advances in Computational Intelligence Systems - Contributions Presented at the 20th {UK} Workshop on Computational Intelligence, September 8-10, 2021, Aberystwyth, Wales, {UK}}, series = {Advances in Intelligent Systems and Computing}, volume = {1409}, pages = {121--128}, publisher = {Springer}, year = {2021}, url = {https://doi.org/10.1007/978-3-030-87094-2\\_11}, doi = {10.1007/978-3-030-87094-2\\_11}, timestamp = {Thu, 16 Dec 2021 15:07:27 +0100}, biburl = {https://dblp.org/rec/conf/ukci/YuceL21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Empirical Studies on the Role of the Decision Maker in Interactive Evolutionary Multi-Objective Optimization
Guiyu Lai+, Minhui Liao, Ke Li
Proc. of the 2021 IEEE Congress on Evolutionary Computation (CEC'21), IEEE, p. 1\u0026ndash;8, June, 2021
10.1109/CEC45853.2021.9504980
PDF | BiB @inproceedings{LaiL021, author = {Guiyu Lai and Minhui Liao and Ke Li}, title = {Empirical Studies on the Role of the Decision Maker in Interactive Evolutionary Multi-Objective Optimization}, booktitle = {{IEEE} Congress on Evolutionary Computation, {CEC} 2021, Krak{\\'{o}}w, Poland, June 28 - July 1, 2021}, pages = {185--192}, publisher = {{IEEE}}, year = {2021}, url = {https://doi.org/10.1109/CEC45853.2021.9504980}, doi = {10.1109/CEC45853.2021.9504980}, timestamp = {Thu, 12 Aug 2021 16:39:59 +0200}, biburl = {https://dblp.org/rec/conf/cec/LaiL021.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Empirical Study of Correlations in the Fitness Landscapes of Combinatorial Optimization Problems
Longfei Zhang+, Ke Li, Shi Gu
Proc. of the 23th Annual Conference on Genetic and Evolutionary Computation (GECCO’21), ACM, p. 247\u0026ndash;248, July, 2021.
10.1145/3449726.3459528
PDF | BiB @inproceedings{ZhangLG21, author = {Longfei Zhang and Ke Li and Shi Gu}, title = {Empirical study of correlations in the fitness landscapes of combinatorial optimization problems}, booktitle = {{GECCO} '21: Genetic and Evolutionary Computation Conference, Companion Volume, Lille, France, July 10-14, 2021}, pages = {247--248}, publisher = {{ACM}}, year = {2021}, url = {https://doi.org/10.1145/3449726.3459528}, doi = {10.1145/3449726.3459528}, timestamp = {Thu, 19 May 2022 17:23:34 +0200}, biburl = {https://dblp.org/rec/conf/gecco/ZhangLG21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
An Improved Two-Archive Evolutionary Algorithm for Constrained Multi-Objective Optimization
Xinyu Shan+, Ke Li
Proc. of the 11th International Conference on Evolutionary Multi-Criterion Optimization (EMO'21), Springer LNCS, volume 12654, p. 235\u0026ndash;247, March, 2021
10.1007/978-3-030-72062-9_19
PDF | BiB @inproceedings{ShanL21, author = {Xinyu Shan and Ke Li}, title = {An Improved Two-Archive Evolutionary Algorithm for Constrained Multi-objective Optimization}, booktitle = {Evolutionary Multi-Criterion Optimization - 11th International Conference, {EMO} 2021, Shenzhen, China, March 28-31, 2021, Proceedings}, series = {Lecture Notes in Computer Science}, volume = {12654}, pages = {235--247}, publisher = {Springer}, year = {2021}, url = {https://doi.org/10.1007/978-3-030-72062-9\\_19}, doi = {10.1007/978-3-030-72062-9\\_19}, timestamp = {Thu, 08 Apr 2021 15:51:58 +0200}, biburl = {https://dblp.org/rec/conf/emo/ShanL21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Multi-Objective Reinforcement Learning based Multi-Microgrid System Optimisation Problem
Jiangjiao Xu+, Ke Li, Mohammad Abusara
Proc. of the 11th International Conference on Evolutionary Multi-Criterion Optimization (EMO'21), Springer LNCS, volume 12654, p. 684\u0026ndash;696, March, 2021
10.1007/978-3-030-72062-9_54
PDF | BiB @inproceedings{XuLA21, author = {Jiangjiao Xu and Ke Li and Mohammad Abusara}, title = {Multi-objective Reinforcement Learning Based Multi-microgrid System Optimisation Problem}, booktitle = {Evolutionary Multi-Criterion Optimization - 11th International Conference, {EMO} 2021, Shenzhen, China, March 28-31, 2021, Proceedings}, series = {Lecture Notes in Computer Science}, volume = {12654}, pages = {684--696}, publisher = {Springer}, year = {2021}, url = {https://doi.org/10.1007/978-3-030-72062-9\\_54}, doi = {10.1007/978-3-030-72062-9\\_54}, timestamp = {Mon, 12 Apr 2021 14:42:37 +0200}, biburl = {https://dblp.org/rec/conf/emo/XuLA21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Parallel Algorithms for Multiobjective Virtual Network Function Placement Problem
Joseph Billingsley+, Ke Li, Wang Miao, Geyong Min, Nektarios Georgalas
Proc. of the 11th International Conference on Evolutionary Multi-Criterion Optimization (EMO'21), Springer LNCS, volume 12654, p. 708\u0026ndash;720, March, 2021
10.1007/978-3-030-72062-9_56
PDF | BiB @inproceedings{BillingsleyLMMG21, author = {Joseph Billingsley and Ke Li and Wang Miao and Geyong Min and Nektarios Georgalas}, title = {Parallel Algorithms for the Multiobjective Virtual Network Function Placement Problem}, booktitle = {Evolutionary Multi-Criterion Optimization - 11th International Conference, {EMO} 2021, Shenzhen, China, March 28-31, 2021, Proceedings}, series = {Lecture Notes in Computer Science}, volume = {12654}, pages = {708--720}, publisher = {Springer}, year = {2021},EDITOR url = {https://doi.org/10.1007/978-3-030-72062-9\\_56}, doi = {10.1007/978-3-030-72062-9\\_56}, timestamp = {Thu, 19 May 2022 17:23:34 +0200}, biburl = {https://dblp.org/rec/conf/emo/BillingsleyLMMG21.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
2020 # Journal # Does Preference Always Help? A Holistic Study on Preference-Based Evolutionary Multi-Objective Optimisation Using Reference Points
Ke Li, Minhui Liao+, Kalyanmoy Deb, Geyong Min, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC), 24(6): 1078\u0026ndash;1096, 2020.
10.1109/TEVC.2020.2987559
PDF | Code | BiB @article{LiLDMY20, author = {Ke Li and Minhui Liao and Kalyanmoy Deb and Geyong Min and Xin Yao}, title = {Does Preference Always Help? {A} Holistic Study on Preference-Based Evolutionary Multiobjective Optimization Using Reference Points}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {24}, number = {6}, pages = {1078--1096}, year = {2020}, url = {https://doi.org/10.1109/TEVC.2020.2987559}, doi = {10.1109/TEVC.2020.2987559}, timestamp = {Thu, 17 Dec 2020 18:29:03 +0100}, biburl = {https://dblp.org/rec/journals/tec/LiLDMY20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Reference Point Based Multi-Objective Optimization of Reservoir Operation: a Comparison of Three Algorithms
Rong Tang, Ke Li, Wei Ding, Yuntao Wang, Huicheng Zhou, Guangtao Fu
Water Resources Management, 34: 1005\u0026ndash;1020, 2020.
10.1007/s11269-020-02485-9
PDF | BiB @article{tangLDWZF20, title = {Reference point based multi-objective optimization of reservoir operation: a comparison of three algorithms}, author = {Tang, Rong and Li, Ke and Ding, Wei and Wang, Yuntao and Zhou, Huicheng and Fu, Guangtao}, journal = {Water Resources Management}, volume = {34}, number = {3}, pages = {1005--1020}, year = {2020}, publisher = {Springer} }
Evolutionary Many-Objective Optimization Based on Adversarial Decomposition
Mengyuan Wu+, Ke Li, Sam Kwong, Qingfu Zhang
IEEE Trans. Cybernetics (TCYB), 50(2): 753\u0026ndash;764, 2020.
10.1109/TCYB.2018.2872803
PDF | Supp | Code | BiB @article{WuLKZ20, author = {Mengyuan Wu and Ke Li and Sam Kwong and Qingfu Zhang}, title = {Evolutionary Many-Objective Optimization Based on Adversarial Decomposition}, journal = {{IEEE} Trans. Cybern.}, volume = {50}, number = {2}, pages = {753--764}, year = {2020}, url = {https://doi.org/10.1109/TCYB.2018.2872803}, doi = {10.1109/TCYB.2018.2872803}, timestamp = {Sat, 30 May 2020 19:51:36 +0200}, biburl = {https://dblp.org/rec/journals/tcyb/WuLKZ20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Conference # Performance Analysis of SDN and NFV enabled Mobile Cloud Computing
Joseph Billingsley+, Ke Li, Wang Miao, Geyong Min, Nektarios Georgalas
Proc. of the 2020 IEEE Global Communications Conference (GLOBECOM'20), IEEE Press: p. 1\u0026ndash;6, December, 2020
10.1109/GLOBECOM42002.2020.9322530
PDF | BiB @inproceedings{BillingsleyMLMG20, author = {Joseph Billingsley and Wang Miao and Ke Li and Geyong Min and Nektarios Georgalas}, title = {Performance Analysis of {SDN} and {NFV} enabled Mobile Cloud Computing}, booktitle = {{IEEE} Global Communications Conference, {GLOBECOM} 2020, Virtual Event, Taiwan, December 7-11, 2020}, pages = {1--6}, publisher = {{IEEE}}, year = {2020}, url = {https://doi.org/10.1109/GLOBECOM42002.2020.9322530}, doi = {10.1109/GLOBECOM42002.2020.9322530}, timestamp = {Thu, 19 May 2022 17:23:34 +0200}, biburl = {https://dblp.org/rec/conf/globecom/BillingsleyMLMG20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Knee Point Identification Based on Voronoi Diagram
Haifeng Nie+, Huiru Gao+, Ke Li
Proc. of the 2020 IEEE Conference on Systems, Man and Cybernetics (SMC'20), IEEE Press: p. 1\u0026ndash;6, December, 2020
10.1109/SMC42975.2020.9283262
PDF | BiB @inproceedings{NieGL20, author = {Haifeng Nie and Huiru Gao and Ke Li}, title = {Knee Point Identification Based on Voronoi Diagram}, booktitle = {2020 {IEEE} International Conference on Systems, Man, and Cybernetics, {SMC} 2020, Toronto, ON, Canada, October 11-14, 2020}, pages = {1081--1086}, publisher = {{IEEE}}, year = {2020}, url = {https://doi.org/10.1109/SMC42975.2020.9283262}, doi = {10.1109/SMC42975.2020.9283262}, timestamp = {Fri, 08 Jan 2021 11:20:37 +0100}, biburl = {https://dblp.org/rec/conf/smc/NieGL20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
BiLO-CPDP: Bi-Level Programming for Automated Model Discovery in Cross-Project Defect Prediction
Ke Li, Zilin Xiang+, Tao Chen, Kay Chen Tan
Proc. of the 35th IEEE/ACM International Conference on Automated Software Engineering (ASE'20), IEEE Press: September, 2020
10.1145/3324884.3416617
PDF | Code | BiB @inproceedings{LiXCT20, author = {Ke Li and Zilin Xiang and Tao Chen and Kay Chen Tan}, title = {BiLO-CPDP: Bi-Level Programming for Automated Model Discovery in Cross-Project Defect Prediction}, booktitle = {35th {IEEE/ACM} International Conference on Automated Software Engineering, {ASE} 2020, Melbourne, Australia, September 21-25, 2020}, pages = {573--584}, publisher = {{IEEE}}, year = {2020}, url = {https://doi.org/10.1145/3324884.3416617}, doi = {10.1145/3324884.3416617}, timestamp = {Fri, 12 Feb 2021 13:04:43 +0100}, biburl = {https://dblp.org/rec/conf/kbse/LiXCT20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Adaptive Operator Selection Based on Dynamic Thompson Sampling for MOEA/D
Lei Sun+, Ke Li
Proc. of the 16th International Conference on Parallel Problem Solving from Nature (PPSN XVI), Springer LNCS, volume 12270, p. 271\u0026ndash;284, Septermber, 2020.
10.1007/978-3-030-58115-2_19
PDF | BiB @inproceedings{SunL20, author = {Lei Sun and Ke Li}, title = {Adaptive Operator Selection Based on Dynamic Thompson Sampling for {MOEA/D}}, booktitle = {Parallel Problem Solving from Nature - {PPSN} {XVI} - 16th International Conference, {PPSN} 2020, Leiden, The Netherlands, September 5-9, 2020, Proceedings, Part {II}}, series = {Lecture Notes in Computer Science}, volume = {12270}, pages = {271--284}, publisher = {Springer}, year = {2020}, url = {https://doi.org/10.1007/978-3-030-58115-2\\_19}, doi = {10.1007/978-3-030-58115-2\\_19}, timestamp = {Sat, 19 Sep 2020 13:19:33 +0200}, biburl = {https://dblp.org/rec/conf/ppsn/SunL20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Surrogate Assisted Evolutionary Algorithm for Medium Scale Multi-Objective Optimisation Problems
Xiaoran Ruan+, Ke Li, Bilel Derbel, Arnaud Liefooghe
Proc. of the 22th Annual Conference on Genetic and Evolutionary Computation (GECCO’20), ACM Press: p. 560\u0026ndash;568, July, 2020.
10.1145/3377930.3390191
PDF | BiB @inproceedings{RuanLDL20, author = {Xiaoran Ruan and Ke Li and Bilel Derbel and Arnaud Liefooghe}, title = {Surrogate assisted evolutionary algorithm for medium scale multi-objective optimisation problems}, booktitle = {{GECCO} '20: Genetic and Evolutionary Computation Conference, Canc{\\'{u}}n Mexico, July 8-12, 2020}, pages = {560--568}, publisher = {{ACM}}, year = {2020}, url = {https://doi.org/10.1145/3377930.3390191}, doi = {10.1145/3377930.3390191}, timestamp = {Thu, 19 May 2022 17:23:34 +0200}, biburl = {https://dblp.org/rec/conf/gecco/RuanLDL20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Routing-Led Placement of VNFs in Arbitrary Networks
Joseph Billingsley+, Ke Li, Wang Miao, Geyong Min, Nektarios Georgalas
Proc. of the 2020 World Congress on Computational Intelligence (WCCI'20), IEEE Press: p. 1\u0026ndash;8, July, 2020.
10.1109/CEC48606.2020.9185531
PDF | BiB @article{BillingsleyLMMG20, author = {Joseph Billingsley and Ke Li and Wang Miao and Geyong Min and Nektarios Georgalas}, title = {Routing-Led Placement of VNFs in Arbitrary Networks}, journal = {CoRR}, volume = {abs/2001.11565}, year = {2020}, url = {https://arxiv.org/abs/2001.11565}, eprinttype = {arXiv}, eprint = {2001.11565}, timestamp = {Mon, 03 Feb 2020 11:21:05 +0100}, biburl = {https://dblp.org/rec/journals/corr/abs-2001-11565.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Surrogate Assisted Evolutionary Algorithm Based on Transfer Learning for Dynamic Expensive Multi-Objective Optimisation Problems
Xuezhou Fan, Ke Li, Kay Chen Tan
Proc. of the 2020 World Congress on Computational Intelligence (WCCI'20), IEEE Press: p. 1\u0026ndash;8, July, 2020.
10.1109/CEC48606.2020.9185522
PDF | BiB @inproceedings{FanLT20, author = {Xuezhou Fan and Ke Li and Kay Chen Tan}, title = {Surrogate Assisted Evolutionary Algorithm Based on Transfer Learning for Dynamic Expensive Multi-Objective Optimisation Problems}, booktitle = {{IEEE} Congress on Evolutionary Computation, {CEC} 2020, Glasgow, United Kingdom, July 19-24, 2020}, pages = {1--8}, publisher = {{IEEE}}, year = {2020}, url = {https://doi.org/10.1109/CEC48606.2020.9185522}, doi = {10.1109/CEC48606.2020.9185522}, timestamp = {Fri, 11 Sep 2020 15:04:41 +0200}, biburl = {https://dblp.org/rec/conf/cec/FanLT20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
DeepSQLi: Deep Semantic Learning for Testing SQL Injection
Muyang Liu+, Ke Li, Tao Chen
Proc. of the ACM SIGSOFT 2020 International Symposium on Software Testing and Analysis (ISSTA'20), ACM Press: p. 286\u0026ndash;297, July, 2020.
10.1145/3395363.3397375
PDF | Code | BiB @inproceedings{LiuLC20, author = {Muyang Liu and Ke Li and Tao Chen}, title = {DeepSQLi: deep semantic learning for testing {SQL} injection}, booktitle = {{ISSTA} '20: 29th {ACM} {SIGSOFT} International Symposium on Software Testing and Analysis, Virtual Event, USA, July 18-22, 2020}, pages = {286--297}, publisher = {{ACM}}, year = {2020}, url = {https://doi.org/10.1145/3395363.3397375}, doi = {10.1145/3395363.3397375}, timestamp = {Wed, 15 Jul 2020 16:06:56 +0200}, biburl = {https://dblp.org/rec/conf/issta/Liu0020.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Understanding the Automated Parameter Optimization on Transfer Learning for Cross-Project Defect Prediction: An Empirical Study
Ke Li*, Zilin Xiang+*, Tao Chen*, Shuo Wang, Kay Chen Tan
Proc. of the 42nd International Conference on Software Engineering (ICSE'20), ACM Press: p. 566\u0026ndash;577, June, 2020.
10.1145/3377811.3380360
PDF | Code | BiB @inproceedings{LiX0WT20, author = {Ke Li and Zilin Xiang and Tao Chen and Shuo Wang and Kay Chen Tan}, title = {Understanding the automated parameter optimization on transfer learning for cross-project defect prediction: an empirical study}, booktitle = {{ICSE} '20: 42nd International Conference on Software Engineering, Seoul, South Korea, 27 June - 19 July, 2020}, pages = {566--577}, publisher = {{ACM}}, year = {2020}, url = {https://doi.org/10.1145/3377811.3380360}, doi = {10.1145/3377811.3380360}, timestamp = {Tue, 12 Jan 2021 14:44:41 +0100}, biburl = {https://dblp.org/rec/conf/icse/LiX0WT20.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
On the Combined Impact of Population Size and Sub-problem Selection in MOEA/D
Geoffrey Pruvost, Bilel Derbel, Arnaud Liefooghe, Ke Li, Qingfu Zhang
Proc. of the 20th European Conference on Evolutionary Computation in Combinatorial Optimisation (EvoCOP'20), Springer LNCS, volume 12102, p. 131–147, April, 2020.
10.1007/978-3-030-43680-3_9
PDF | BiB @inproceedings{PruvostDLL020, author = {Geoffrey Pruvost and Bilel Derbel and Arnaud Liefooghe and Ke Li and Qingfu Zhang}, title = {On the Combined Impact of Population Size and Sub-problem Selection in {MOEA/D}}, booktitle = {Evolutionary Computation in Combinatorial Optimization - 20th European Conference, EvoCOP 2020, Held as Part of EvoStar 2020, Seville, Spain, April 15-17, 2020, Proceedings}, series = {Lecture Notes in Computer Science}, volume = {12102}, pages = {131--147}, publisher = {Springer}, year = {2020}, url = {https://doi.org/10.1007/978-3-030-43680-3\\_9}, doi = {10.1007/978-3-030-43680-3\\_9}, timestamp = {Sun, 25 Jul 2021 11:53:08 +0200}, biburl = {https://dblp.org/rec/conf/evoW/PruvostDLL020.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
2019 # Journal # Learning to Decompose: A Paradigm for Decomposition-Based Multi-Objective Optimization
Mengyuan Wu+, Ke Li, Sam Kwong, Qingfu Zhang, Jun Zhang
IEEE Trans. Evolutionary Computation (TEVC), 23(3): 376–390, 2019.
10.1109/TEVC.2018.2865931
PDF | Supp | Code | BiB @article{WuLKZZ19, author = {Mengyuan Wu and Ke Li and Sam Kwong and Qingfu Zhang and Jun Zhang}, title = {Learning to Decompose: {A} Paradigm for Decomposition-Based Multiobjective Optimization}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {23}, number = {3}, pages = {376--390}, year = {2019}, url = {https://doi.org/10.1109/TEVC.2018.2865931}, doi = {10.1109/TEVC.2018.2865931}, timestamp = {Tue, 12 May 2020 16:51:10 +0200}, biburl = {https://dblp.org/rec/journals/tec/WuLKZZ19.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Interactive Decomposition Multi-Objective Optimization via Progressively Learned Value Functions
Ke Li*, Renzhi Chen*+, Dragan Savic, Xin Yao
IEEE Trans. Fuzzy Systems (TFS), 27(5): 845–860, 2019.
10.1109/TFUZZ.2018.2880700
PDF | Supp | Code | BiB @article{LiCSY19, author = {Ke Li and Renzhi Chen and Dragan A. Savic and Xin Yao}, title = {Interactive Decomposition Multiobjective Optimization Via Progressively Learned Value Functions}, journal = {{IEEE} Trans. Fuzzy Syst.}, volume = {27}, number = {5}, pages = {849--860}, year = {2019}, url = {https://doi.org/10.1109/TFUZZ.2018.2880700}, doi = {10.1109/TFUZZ.2018.2880700}, timestamp = {Tue, 12 May 2020 16:52:42 +0200}, biburl = {https://dblp.org/rec/journals/tfs/LiCSY19.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Two-Archive Evolutionary Algorithm for Constrained Multi-Objective Optimization
Ke Li*, Renzhi Chen*+, Guangtao Fu, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC), 23(2): 303–315, 2019.
10.1109/TEVC.2018.2855411
PDF | Supp | Code | BiB @article{LiCFY19, author = {Ke Li and Renzhi Chen and Guangtao Fu and Xin Yao}, title = {Two-Archive Evolutionary Algorithm for Constrained Multiobjective Optimization}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {23}, number = {2}, pages = {303--315}, year = {2019}, url = {https://doi.org/10.1109/TEVC.2018.2855411}, doi = {10.1109/TEVC.2018.2855411}, timestamp = {Tue, 12 May 2020 16:51:04 +0200}, biburl = {https://dblp.org/rec/journals/tec/LiCFY19.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
A Knee-Point-Based Evolutionary Algorithm Using Weighted Subpopulation for Many-Objective Optimization
Juan Zou, Chunhui Ji, Shengxiang Yang, Yuping Zhang, Jinhua Zheng, Ke Li
Swarm and Evolutionary Computation, 47: 33\u0026ndash;43, 2019.
10.1016/j.swevo.2019.02.001
PDF | BiB @article{ZouJYZZL19, author = {Juan Zou and Chunhui Ji and Shengxiang Yang and Yuping Zhang and Jinhua Zheng and Ke Li}, title = {A Knee-Point-Based Evolutionary Algorithm Using Weighted Subpopulation for Many-Objective Optimization}, journal = {Swarm and Evolutionary Computation}, year = {2019}, note = {accepted for publication} } Conference # Which Surrogate Works for Empirical Performance Modelling? A Case Study with Differential Evolution
Ke Li, Zilin Xiang+, Kay Chen Tan
Proc. of the 2019 IEEE Congress on Evolutionary Computation (CEC'19), IEEE Press: p. 1988\u0026ndash;1995, June, 2019.
10.1109/CEC.2019.8789984
PDF | Supp | BiB @article{LiXT19, author = {Ke Li and Zilin Xiang and Kay Chen Tan}, title = {Which Surrogate Works for Empirical Performance Modelling? {A} Case Study with Differential Evolution}, journal = {CoRR}, volume = {abs/1901.11120}, year = {2019}, url = {http://arxiv.org/abs/1901.11120}, eprinttype = {arXiv}, eprint = {1901.11120}, timestamp = {Mon, 16 Mar 2020 17:55:51 +0100}, biburl = {https://dblp.org/rec/journals/corr/abs-1901-11120.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Visualisation of Pareto Front Approximation: A Short Survey and Empirical Comparisons
Huiru Gao+, Haifeng Nie+, Ke Li
Proc. of the 2019 IEEE Congress on Evolutionary Computation (CEC'19), IEEE Press: p. 1750\u0026ndash;1757, June, 2019.
10.1109/CEC.2019.8790298
PDF | Supp | BiB @article{GaoNL19, author = {Huiru Gao and Haifeng Nie and Ke Li}, title = {Visualisation of Pareto Front Approximation: {A} Short Survey and Empirical Comparisons}, journal = {CoRR}, volume = {abs/1903.01768}, year = {2019}, url = {http://arxiv.org/abs/1903.01768}, eprinttype = {arXiv}, eprint = {1903.01768}, timestamp = {Fri, 08 Jan 2021 11:20:34 +0100}, biburl = {https://dblp.org/rec/journals/corr/abs-1903-01768.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Decomposition Multi-Objective Optimisation: Current Developments and Future Opportunities
Ke Li, Qingfu Zhang
Proc. of the 21th Annual Conference on Genetic and Evolutionary Computation (GECCO’19): ACM Press: p. 1002\u0026ndash;1031, July 2019.
10.1145/3319619.3323369
Slides | BiB @inproceedings{LiZ19, author = {Ke Li and Qingfu Zhang}, title = {Decomposition multi-objective optimisation: current developments and future opportunities}, booktitle = {Proceedings of the Genetic and Evolutionary Computation Conference Companion, {GECCO} 2019, Prague, Czech Republic, July 13-17, 2019}, pages = {1002--1031}, publisher = {{ACM}}, year = {2019}, url = {https://doi.org/10.1145/3319619.3323369}, doi = {10.1145/3319619.3323369}, timestamp = {Mon, 15 Jul 2019 16:26:46 +0200}, biburl = {https://dblp.org/rec/conf/gecco/LiZ19.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Security Testing of Web Applications: A Search-Based Approach for Detecting SQL Injection Vulnerabilities
Muyang Liu+, Ke Li, Tao Chen
Proc. of the 21th Annual Conference on Genetic and Evolutionary Computation (GECCO’19), ACM Press: p. 417\u0026ndash;418, July 2019.
10.1145/3319619.3322026
PDF | BiB @inproceedings{LiuLC19, author = {Muyang Liu and Ke Li and Tao Chen}, title = {Security testing of web applications: a search-based approach for detecting {SQL} injection vulnerabilities}, booktitle = {Proceedings of the Genetic and Evolutionary Computation Conference Companion, {GECCO} 2019, Prague, Czech Republic, July 13-17, 2019}, pages = {417--418}, publisher = {{ACM}}, year = {2019}, url = {https://doi.org/10.1145/3319619.3322026}, doi = {10.1145/3319619.3322026}, timestamp = {Wed, 08 Jan 2020 08:56:46 +0100}, biburl = {https://dblp.org/rec/conf/gecco/LiuLC19.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Progressive Preference Learning: Proof-of-Principle Results in MOEA/D
Ke Li Proc. of the 10th International Conference on Evolutionary Multi-Criterion Optimization (EMO’19), Springer LNCS, volume 11411, p. 631\u0026ndash;643, March 2019.
10.1007/978-3-030-12598-1_50
PDF | Supp | Code | BiB @inproceedings{Li19, author = {Ke Li}, title = {Progressive Preference Learning: Proof-of-Principle Results in {MOEA/D}}, booktitle = {EMO'19: Proc. of the 10th International Conference Evolutionary Multi-Criterion Optimization}, pages = {631--643}, year = {2019}, url = {https://doi.org/10.1007/978-3-030-12598-1\\_50}, doi = {10.1007/978-3-030-12598-1\\_50}, timestamp = {Thu, 28 Feb 2019 14:53:34 +0100}, biburl = {https://dblp.org/rec/bib/conf/emo/Li19}, bibsource = {dblp computer science bibliography, https://dblp.org} } A Formal Model for Multi-objective Optimisation of NFV Placement
Joseph Billingsley, Ke Li, Wang Miao, Geyong Min, N. Georgalas
Proc. of the 10th International Conference on Evolutionary Multi-Criterion Optimization (EMO’19), Springer LNCS, volume 11411, p. 529\u0026ndash;540, March 2019.
10.1007/978-3-030-12598-1_42
PDF | BiB @inproceedings{BillingsleyLMMG19, author = {Joseph Billingsley and Ke Li and Wang Miao and Geyong Min and Nektarios Georgalas}, title = {A Formal Model for Multi-objective Optimisation of Network Function Virtualisation Placement}, booktitle = {Evolutionary Multi-Criterion Optimization - 10th International Conference, {EMO} 2019, East Lansing, MI, USA, March 10-13, 2019, Proceedings}, series = {Lecture Notes in Computer Science}, volume = {11411}, pages = {529--540}, publisher = {Springer}, year = {2019}, url = {https://doi.org/10.1007/978-3-030-12598-1\\_42}, doi = {10.1007/978-3-030-12598-1\\_42}, timestamp = {Fri, 26 Feb 2021 09:21:56 +0100}, biburl = {https://dblp.org/rec/conf/emo/BillingsleyLMMG19.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
2018 # Journal # R-Metric: Evaluating the Performance of Preference-Based Evolutionary Multi-Objective Optimization Using Reference Points
Ke Li, Kalyanmoy Deb, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC), 22(6): 821\u0026ndash;835, 2018.
10.1109/TEVC.2017.2737781
PDF | Supp | Code | BiB @article{LiDY18, author = {Ke Li and Kalyanmoy Deb and Xin Yao}, title = {R-Metric: Evaluating the Performance of Preference-Based Evolutionary Multiobjective Optimization Using Reference Points}, journal = {{IEEE} Trans. Evol. Comput.}, volume = {22}, number = {6}, pages = {821--835}, year = {2018}, url = {https://doi.org/10.1109/TEVC.2017.2737781}, doi = {10.1109/TEVC.2017.2737781}, timestamp = {Tue, 12 May 2020 16:50:45 +0200}, biburl = {https://dblp.org/rec/journals/tec/LiDY18.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Integration of Preferences in Decomposition Multiobjective Optimization
Ke Li*, Renzhi Chen*+, Geyong Min, Xin Yao
IEEE Trans. Cybernetics (TCYB), 48(12): 3359\u0026ndash;3370, 2018.
10.1109/TCYB.2018.2859363
PDF | Supp | Code | BiB @article{LiCMY18, author = {Ke Li and Renzhi Chen and Geyong Min and Xin Yao}, title = {Integration of Preferences in Decomposition Multiobjective Optimization}, journal = {{IEEE} Trans. Cybernetics}, volume = {48}, number = {12}, pages = {3359--3370}, year = {2018}, url = {https://doi.org/10.1109/TCYB.2018.2859363}, doi = {10.1109/TCYB.2018.2859363}, timestamp = {Sun, 23 Dec 2018 17:21:04 +0100}, biburl = {https://dblp.org/rec/bib/journals/tcyb/LiCMY18}, bibsource = {dblp computer science bibliography, https://dblp.org} } Evolutionary Multiobjective Optimization-Based Multimodal Optimization: Fitness Landscape Approximation and Peak Detection
Ran Cheng, Miqing Li, Ke Li, Xin Yao
IEEE Trans. Evolutionary Computation (TEVC), 22(5): 692\u0026ndash;706, 2018.
10.1109/TEVC.2017.2744328
PDF | BiB @article{ChengLLY18, author = {Ran Cheng and Miqing Li and Ke Li and Xin Yao}, title = {Evolutionary Multiobjective Optimization-Based Multimodal Optimization: Fitness Landscape Approximation and Peak Detection}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {22}, number = {5}, pages = {692--706}, year = {2018}, url = {https://doi.org/10.1109/TEVC.2017.2744328}, doi = {10.1109/TEVC.2017.2744328}, timestamp = {Sun, 23 Dec 2018 17:21:04 +0100}, biburl = {https://dblp.org/rec/bib/journals/tec/ChengLLY18}, bibsource = {dblp computer science bibliography, https://dblp.org} } FEMOSAA: Feature Guided and Knee Driven Multi-Objective Optimization for Self-Adaptive Software at Runtime
Tao Chen, Ke Li, Rami Bahsoon, Xin Yao
ACM Trans. Software Engineering and Methodology (TOSEM), 27(2): 1\u0026ndash;50, 2018.
10.1145/3204459
PDF | Code | BiB @article{ChenLBY18, author = {Tao Chen and Ke Li and Rami Bahsoon and Xin Yao}, title = {{FEMOSAA:} Feature-Guided and Knee-Driven Multi-Objective Optimization for Self-Adaptive Software}, journal = {{ACM} Trans. Softw. Eng. Methodol.}, volume = {27}, number = {2}, pages = {5:1--5:50}, year = {2018}, url = {https://doi.org/10.1145/3204459}, doi = {10.1145/3204459}, timestamp = {Wed, 21 Nov 2018 12:44:28 +0100}, biburl = {https://dblp.org/rec/bib/journals/tosem/ChenLBY18}, bibsource = {dblp computer science bibliography, https://dblp.org} } Dynamic Multi-Objectives Optimization with a Changing Number of Objectives
Ke Li*, Renzhi Chen*+, Xin Yao,
IEEE Trans. Evolutionary Computation (TEVC), 21(1): 157\u0026ndash;171, 2018.
10.1109/TEVC.2017.2669638
PDF | Supp | Code | BiB @article{ChenLY18, author = {Renzhi Chen and Ke Li and Xin Yao}, title = {Dynamic Multiobjectives Optimization With a Changing Number of Objectives}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {22}, number = {1}, pages = {157--171}, year = {2018}, url = {https://doi.org/10.1109/TEVC.2017.2669638}, doi = {10.1109/TEVC.2017.2669638}, timestamp = {Wed, 04 Jul 2018 13:22:50 +0200}, biburl = {https://dblp.org/rec/bib/journals/tec/ChenLY18}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Multi-Tenant Cloud Service Composition using Evolutionary Optimization
Satish Kumar, Rami Bahsoon, Tao Chen, Ke Li, R. Buyya,
Proc. of the 24th International Conference on Parallel and Distributed Systems (ICPADS’18), IEEE Press: p. 972\u0026ndash;979, December 2018.
10.1109/PADSW.2018.8644640
PDF | BiB @inproceedings{KumarBCLB18, author = {Satish Kumar and Rami Bahsoon and Tao Chen and Ke Li and Rajkumar Buyya}, title = {Multi-Tenant Cloud Service Composition Using Evolutionary Optimization}, booktitle = {ICPADS: Proc. of the 24th {IEEE} International Conference on Parallel and Distributed Systems}, pages = {972--979}, year = {2018}, url = {https://doi.org/10.1109/PADSW.2018.8644640}, doi = {10.1109/PADSW.2018.8644640}, timestamp = {Tue, 26 Feb 2019 16:36:22 +0100}, biburl = {https://dblp.org/rec/bib/conf/icpads/KumarBCLB18}, bibsource = {dblp computer science bibliography, https://dblp.org} } Decomposition Multi-Objective Optimisation: Current Developments and Future Opportunities
Ke Li, Qingfu Zhang
Proc. of the 20th Annual Conference on Genetic and Evolutionary Computation (GECCO’18), ACM Press: p. 903\u0026ndash;936, July 2018.
10.1145/3205651.3207856
Slides | BiB
@inproceedings{LiZ18, author = {Ke Li and Qingfu Zhang}, title = {Decomposition multi-objective optimisation: current developments and future opportunities}, booktitle = {Proceedings of the Genetic and Evolutionary Computation Conference Companion, {GECCO} 2018, Kyoto, Japan, July 15-19, 2018}, pages = {907--936}, publisher = {{ACM}}, year = {2018}, url = {https://doi.org/10.1145/3205651.3207856}, doi = {10.1145/3205651.3207856}, timestamp = {Fri, 27 Dec 2019 21:30:09 +0100}, biburl = {https://dblp.org/rec/conf/gecco/0001Z18.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } @inproceedings{LiZ18, author = {Ke Li and Qingfu Zhang}, title = {Decomposition multi-objective optimisation: current developments and future opportunities}, booktitle = {GECCO'18: Proc. of the 20th Genetic and Evolutionary Computation Conference Companion}, pages = {907--936}, year = {2018}, url = {https://doi.org/10.1145/3205651.3207856}, doi = {10.1145/3205651.3207856}, timestamp = {Wed, 21 Nov 2018 12:43:54 +0100}, biburl = {https://dblp.org/rec/bib/conf/gecco/0001Z18}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2017 # Journal # Efficient Non-domination Level Update Method for Steady-State Evolutionary Multiobjective Optimization
Ke Li, Kalyanmoy Deb, Qingfu Zhang, Qiang Zhang
IEEE Trans. Cybernetics (TCYB), 47(9): 2838\u0026ndash;2849, 2017.
10.1109/TCYB.2016.2621008
PDF | Supp | Code | BiB @article{LiDZZ17, author = {Ke Li and Kalyanmoy Deb and Qingfu Zhang and Qiang Zhang}, title = {Efficient Nondomination Level Update Method for Steady-State Evolutionary Multiobjective Optimization}, journal = {{IEEE} Trans. Cybernetics}, volume = {47}, number = {9}, pages = {2838--2849}, year = {2017}, url = {https://doi.org/10.1109/TCYB.2016.2621008}, doi = {10.1109/TCYB.2016.2621008}, timestamp = {Wed, 14 Nov 2018 10:31:31 +0100}, biburl = {https://dblp.org/rec/bib/journals/tcyb/LiDZZ17}, bibsource = {dblp computer science bibliography, https://dblp.org} } Matching-Based Selection with Incomplete Lists for Decomposition Multi-Objective Optimization
Mengyuan Wu+, Ke Li, Sam Kwong, Yu Zhou, Qingfu Zhang
IEEE Trans. Evolutionary Computation (TEVC), 21(4): 554\u0026ndash;568, 2017.
10.1109/TEVC.2017.2656922
PDF | Supp | Code | BiB @article{WuLKZZ17, author = {Mengyuan Wu and Ke Li and Sam Kwong and Yu Zhou and Qingfu Zhang}, title = {Matching-Based Selection With Incomplete Lists for Decomposition Multiobjective Optimization}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {21}, number = {4}, pages = {554--568}, year = {2017}, url = {https://doi.org/10.1109/TEVC.2017.2656922}, doi = {10.1109/TEVC.2017.2656922}, timestamp = {Sun, 23 Sep 2018 19:44:31 +0200}, biburl = {https://dblp.org/rec/bib/journals/tec/WuLKZZ17}, bibsource = {dblp computer science bibliography, https://dblp.org} } Recent advances in semantic computing and personalization
Haoran Xie, Fu Lee Wang, Xudong Mao, Ke Li, Qing Li, Handing Wang
Neurocomputing (NEUCOM). 254: 1\u0026ndash;2, 2017.
10.1016/j.neucom.2017.02.073
PDF | BiB @article{XieWMLLW17, author = {Haoran Xie and Fu Lee Wang and Xudong Mao and Ke Li and Qing Li and Handing Wang}, title = {Recent advances in semantic computing and personalization}, journal = {Neurocomputing}, volume = {254}, pages = {1--2}, year = {2017}, url = {https://doi.org/10.1016/j.neucom.2017.02.073}, doi = {10.1016/j.neucom.2017.02.073}, timestamp = {Fri, 30 Nov 2018 13:23:21 +0100}, biburl = {https://dblp.org/rec/bib/journals/ijon/XieWMLLW17}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Empirical Investigations of Reference Point Based Methods When Facing a Massively Large Number of Objectives: First Results
Ke Li, Kalyamoy Deb, Tolga Altinoz, Xin Yao
Proc. of the 9th International Conference on Evolutionary Multi-Criterion Optimization (EMO’17), Springer LNCS, volume 10173, p. 390\u0026ndash;405, March 2017.
10.1007/978-3-319-54157-0_27
PDF | BiB @inproceedings{LiDAY17, author = {Ke Li and Kalyanmoy Deb and Okkes Tolga Altin{\\"{o}}z and Xin Yao}, title = {Empirical Investigations of Reference Point Based Methods When Facing a Massively Large Number of Objectives: First Results}, booktitle = {EMO'17: Proc. of the 9th International Conference Evolutionary Multi-Criterion Optimization}, pages = {390--405}, year = {2017}, url = {https://doi.org/10.1007/978-3-319-54157-0\\_27}, doi = {10.1007/978-3-319-54157-0\\_27}, timestamp = {Wed, 14 Nov 2018 10:59:29 +0100}, biburl = {https://dblp.org/rec/bib/conf/emo/LiDAY17}, bibsource = {dblp computer science bibliography, https://dblp.org} } Adaptive weights generation for decomposition-based multi-objective optimization using Gaussian process regression
Mengyuan Wu, Sam Kwong, Yuheng Jia, Ke Li, Qingfu Zhang
Proc. of the 19th Annual Conference on Genetic and Evolutionary Computation (GECCO’17), ACM Press: p. 641\u0026ndash;648, July 2017.
10.1145/3071178.3071339
PDF | BiB @inproceedings{WuKJLZ17, author = {Mengyuan Wu and Sam Kwong and Yuheng Jia and Ke Li and Qingfu Zhang}, title = {Adaptive weights generation for decomposition-based multi-objective optimization using Gaussian process regression}, booktitle = {GECCO'17: Proc. of the 19th Genetic and Evolutionary Computation Conference}, pages = {641--648}, year = {2017}, url = {https://doi.org/10.1145/3071178.3071339}, doi = {10.1145/3071178.3071339}, timestamp = {Tue, 06 Nov 2018 11:06:40 +0100}, biburl = {https://dblp.org/rec/bib/conf/gecco/WuKJLZ17}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2016 # Journal # Personalized Search for Social Media via Dominating Verbal Context
Haoran Xie, Xiaodong Li, Tao Wang, Li Chen, Ke Li, Fu Lee Wang, Yi Cai, Qing Li, Huaqing Min
Neurocomputing (NEUCOM). 172: 27\u0026ndash;37, 2016.
10.1016/j.neucom.2014.12.109
PDF | BiB @article{XieLWCLWCLM16, author = {Haoran Xie and Xiaodong Li and Tao Wang and Li Chen and Ke Li and Fu Lee Wang and Yi Cai and Qing Li and Huaqing Min}, title = {Personalized search for social media via dominating verbal context}, journal = {Neurocomputing}, volume = {172}, pages = {27--37}, year = {2016}, url = {https://doi.org/10.1016/j.neucom.2014.12.109}, doi = {10.1016/j.neucom.2014.12.109}, timestamp = {Wed, 14 Nov 2018 10:26:17 +0100}, biburl = {https://dblp.org/rec/bib/journals/ijon/XieLWCLWCLM16}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Variable Interactions in Multi-Objective Optimization Problems
Ke Li, Mohammad Nabi Omidvar, Kalyanmoy Deb, Xin Yao
Proc. of the 14th International Conference on Parallel Problem Solving from Nature (PPSN’16), Springer LNCS, volume 9921, p. 399\u0026ndash;409, September 2016.
10.1007/978-3-319-45823-6_37
PDF | BiB @inproceedings{LiODY16, author = {Ke Li and Mohammad Nabi Omidvar and Kalyanmoy Deb and Xin Yao}, title = {Variable Interaction in Multi-objective Optimization Problems}, booktitle = {Parallel Problem Solving from Nature - {PPSN} {XIV} - 14th International Conference, Edinburgh, UK, September 17-21, 2016, Proceedings}, series = {Lecture Notes in Computer Science}, volume = {9921}, pages = {399--409}, publisher = {Springer}, year = {2016}, url = {https://doi.org/10.1007/978-3-319-45823-6\\_37}, doi = {10.1007/978-3-319-45823-6\\_37}, timestamp = {Wed, 19 Jan 2022 09:30:47 +0100}, biburl = {https://dblp.org/rec/conf/ppsn/LiODY16.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2015 # Journal # An Evolutionary Many-Objective Optimization Algorithm Based on Dominance and Decomposition
Ke Li, Kalyanmoy Deb, Qingfu Zhang, Sam Kwong
IEEE Trans. Evolutionary Computation (TEVC), 19(5): 694\u0026ndash;716, 2015.
10.1109/TEVC.2014.2373386
PDF | Code | BiB @article{LiDZK15, author = {Ke Li and Kalyanmoy Deb and Qingfu Zhang and Sam Kwong}, title = {An Evolutionary Many-Objective Optimization Algorithm Based on Dominance and Decomposition}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {19}, number = {5}, pages = {694--716}, year = {2015}, url = {https://doi.org/10.1109/TEVC.2014.2373386}, doi = {10.1109/TEVC.2014.2373386}, timestamp = {Sun, 23 Sep 2018 19:44:31 +0200}, biburl = {https://dblp.org/rec/bib/journals/tec/LiDZK15}, bibsource = {dblp computer science bibliography, https://dblp.org} } Interrelationship-Based Selection for Decomposition Multiobjective Optimization
Ke Li, Sam Kwong, Qingfu Zhang, Kalyanmoy Deb
IEEE Trans. Cybernetics (TCYB), 45(10): 2076\u0026ndash;2088, 2015
10.1109/TCYB.2014.2365354
PDF | PDF | Code | BiB @article{LiKZD15, author = {Ke Li and Sam Kwong and Qingfu Zhang and Kalyanmoy Deb}, title = {Interrelationship-Based Selection for Decomposition Multiobjective Optimization}, journal = {{IEEE} Trans. Cybernetics}, volume = {45}, number = {10}, pages = {2076--2088}, year = {2015}, url = {https://doi.org/10.1109/TCYB.2014.2365354}, doi = {10.1109/TCYB.2014.2365354}, timestamp = {Wed, 14 Nov 2018 10:31:35 +0100}, biburl = {https://dblp.org/rec/bib/journals/tcyb/LiKZD15}, bibsource = {dblp computer science bibliography, https://dblp.org} } A Dual-Population Paradigm for Evolutionary Multiobjective Optimization
Ke Li, Sam Kwong, Kalyanmoy Deb
Information Sciences (INS), 309: 50\u0026ndash;72, 2015.
10.1016/j.ins.2015.03.002
PDF | Code | BiB @article{LiKD15, author = {Ke Li and Sam Kwong and Kalyanmoy Deb}, title = {A dual-population paradigm for evolutionary multiobjective optimization}, journal = {Inf. Sci.}, volume = {309}, pages = {50--72}, year = {2015}, url = {https://doi.org/10.1016/j.ins.2015.03.002}, doi = {10.1016/j.ins.2015.03.002}, timestamp = {Wed, 14 Nov 2018 10:27:37 +0100}, biburl = {https://dblp.org/rec/bib/journals/isci/LiKD15}, bibsource = {dblp computer science bibliography, https://dblp.org} } Class-Specific Soft Voting based Multiple Extreme Learning Machines Ensemble
Jingjing Cao, Sam Kwong, Ran Wang, Xiaodong Li, Ke Li, Xiangfei Kong
Neurocomputing (NEUCOM). 149: 275\u0026ndash;284, 2015.
10.1016/j.neucom.2014.02.072
PDF | BiB @article{CaoKWLLK15, author = {Jingjing Cao and Sam Kwong and Ran Wang and Xiaodong Li and Ke Li and Xiangfei Kong}, title = {Class-specific soft voting based multiple extreme learning machines ensemble}, journal = {Neurocomputing}, volume = {149}, pages = {275--284}, year = {2015}, url = {https://doi.org/10.1016/j.neucom.2014.02.072}, doi = {10.1016/j.neucom.2014.02.072}, timestamp = {Wed, 14 Nov 2018 10:26:17 +0100}, biburl = {https://dblp.org/rec/bib/journals/ijon/CaoKWLLK15}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Two-Level Stable Matching-Based Selection in MOEA/D
Mengyuan Wu, Sam Kwong, Qingfu Zhang, Ke Li, Ran Wang, Bo Liu
Proc. of 2015 IEEE Conference on Systems, Mans and Cybernetics (SMC’15), IEEE Press: p. 1720\u0026ndash;1725, October 2015.
10.1109/SMC.2015.302
PDF | Code | BiB @inproceedings{WuKZLWL15, author = {Mengyuan Wu and Sam Kwong and Qingfu Zhang and Ke Li and Ran Wang and Bo Liu}, title = {Two-Level Stable Matching-Based Selection in {MOEA/D}}, booktitle = {2015 {IEEE} International Conference on Systems, Man, and Cybernetics, Kowloon Tong, Hong Kong, October 9-12, 2015}, pages = {1720--1725}, publisher = {{IEEE}}, year = {2015}, url = {https://doi.org/10.1109/SMC.2015.302}, doi = {10.1109/SMC.2015.302}, timestamp = {Wed, 16 Oct 2019 14:14:51 +0200}, biburl = {https://dblp.org/rec/conf/smc/WuKZLWL15.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
Evolutionary Multiobjective Optimization with Hybrid Selection Principles
Ke Li, Kalyanmoy Deb, Qingfu Zhang
Proc. of 2015 IEEE Congress on Evolutionary Computation (CEC’15), IEEE Press: p. 900\u0026ndash;907, May 2015.
10.1109/CEC.2015.7256986
PDF | Code | BiB
@inproceedings{LiDZ15, author = {Ke Li and Kalyanmoy Deb and Qingfu Zhang}, title = {Evolutionary multiobjective optimization with hybrid selection principles}, booktitle = {{IEEE} Congress on Evolutionary Computation, {CEC} 2015, Sendai, Japan, May 25-28, 2015}, pages = {900--907}, publisher = {{IEEE}}, year = {2015}, url = {https://doi.org/10.1109/CEC.2015.7256986}, doi = {10.1109/CEC.2015.7256986}, timestamp = {Wed, 16 Oct 2019 14:14:52 +0200}, biburl = {https://dblp.org/rec/conf/cec/LiDZ15.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} } @article{LiZKLW14, author = {Ke Li and Qingfu Zhang and Sam Kwong and Miqing Li and Ran Wang}, title = {Stable Matching-Based Selection in Evolutionary Multiobjective Optimization}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {18}, number = {6}, pages = {909--923}, year = {2014}, url = {https://doi.org/10.1109/TEVC.2013.2293776}, doi = {10.1109/TEVC.2013.2293776}, timestamp = {Sun, 23 Sep 2018 19:44:31 +0200}, biburl = {https://dblp.org/rec/bib/journals/tec/LiZKLW14}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2014 # Journal # Stable Matching Based Selection in Evolutionary Multiobjective Optimization
Ke Li, Qingfu Zhang, Sam Kwong, Miqing Li, Ran Wang
IEEE Trans. Evolutionary Computation (TEVC). 18(6): 909\u0026ndash;923, 2014.
10.1109/TEVC.2013.2293776
PDF | Code | BiB @article{LiZKLW14, author = {Ke Li and Qingfu Zhang and Sam Kwong and Miqing Li and Ran Wang}, title = {Stable Matching-Based Selection in Evolutionary Multiobjective Optimization}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {18}, number = {6}, pages = {909--923}, year = {2014}, url = {https://doi.org/10.1109/TEVC.2013.2293776}, doi = {10.1109/TEVC.2013.2293776}, timestamp = {Sun, 23 Sep 2018 19:44:31 +0200}, biburl = {https://dblp.org/rec/bib/journals/tec/LiZKLW14}, bibsource = {dblp computer science bibliography, https://dblp.org} } Adaptive Operator Selection with Bandits for Multiobjective Evolutionary Algorithm Based on Decomposition
Ke Li, Álvaro Fialho, Sam Kwong, Qingfu Zhang
IEEE Trans. Evolutionary Computation (TEVC). 18(1): 114\u0026ndash;130, 2014.
10.1109/TEVC.2013.2239648
PDF | Supp | Code | BiB @article{LiFKZ14, author = {Ke Li and {\\'{A}}lvaro Fialho and Sam Kwong and Qingfu Zhang}, title = {Adaptive Operator Selection With Bandits for a Multiobjective Evolutionary Algorithm Based on Decomposition}, journal = {{IEEE} Trans. Evolutionary Computation}, volume = {18}, number = {1}, pages = {114--130}, year = {2014}, url = {https://doi.org/10.1109/TEVC.2013.2239648}, doi = {10.1109/TEVC.2013.2239648}, timestamp = {Sun, 23 Sep 2018 19:44:31 +0200}, biburl = {https://dblp.org/rec/bib/journals/tec/LiFKZ14}, bibsource = {dblp computer science bibliography, https://dblp.org} } A General Framework for Evolutionary Multiobjective Optimization via Manifold Learning
Ke Li, Sam Kwong
Neurocomputing (NEUCOM). 146: 65\u0026ndash;74, 2014.
10.1016/j.neucom.2014.03.070
PDF | BiB @article{LiK14, author = {Ke Li and Sam Kwong}, title = {A general framework for evolutionary multiobjective optimization via manifold learning}, journal = {Neurocomputing}, volume = {146}, pages = {65--74}, year = {2014}, url = {https://doi.org/10.1016/j.neucom.2014.03.070}, doi = {10.1016/j.neucom.2014.03.070}, timestamp = {Wed, 14 Nov 2018 10:26:16 +0100}, biburl = {https://dblp.org/rec/bib/journals/ijon/LiK14}, bibsource = {dblp computer science bibliography, https://dblp.org} } Evolutionary Algorithms with Segment-based Search for Multiobjective Optimization Problems
Miqing Li, Shengxiang Yang, Ke Li, Xiaohui Liu
IEEE Trans. Cybernetics (TCYB). 44(8): 1295\u0026ndash;1313, 2014.
10.1109/TCYB.2013.2282503
PDF | BiB @article{LiYLL14, author = {Miqing Li and Shengxiang Yang and Ke Li and Xiaohui Liu}, title = {Evolutionary Algorithms With Segment-Based Search for Multiobjective Optimization Problems}, journal = {{IEEE} Trans. Cybernetics}, volume = {44}, number = {8}, pages = {1295--1313}, year = {2014}, url = {https://doi.org/10.1109/TCYB.2013.2282503}, doi = {10.1109/TCYB.2013.2282503}, timestamp = {Wed, 14 Nov 2018 10:31:34 +0100}, biburl = {https://dblp.org/rec/bib/journals/tcyb/LiYLL14}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # An Indicator-based Selection Multi-Objective Evolutionary Algorithm with Preference for Multi-Class Ensemble
Jingjing Cao, Sam Kwong, Ran Wang, Ke Li
Proc. of 2014 International Conference on Machine Learning and Cybernetics (ICMLC’12), IEEE Press: p. 147\u0026ndash;152, July 2014.
10.1109/ICMLC.2014.7009108
PDF | BiB @inproceedings{CaoKWL14, author = {Jingjing Cao and Sam Kwong and Ran Wang and Ke Li}, title = {{AN} indicator-based selection multi-objective evolutionary algorithm with preference for multi-class ensemble}, booktitle = {ICMLC'14: Proc. of the 2014 International Conference on Machine Learning and Cybernetics}, pages = {147--152}, year = {2014}, url = {https://doi.org/10.1109/ICMLC.2014.7009108}, doi = {10.1109/ICMLC.2014.7009108}, timestamp = {Mon, 29 Jan 2018 16:21:37 +0100}, biburl = {https://dblp.org/rec/bib/conf/icmlc/CaoKWL14}, bibsource = {dblp computer science bibliography, https://dblp.org} } @article{LiKWTM13, author = {Ke Li and Sam Kwong and Ran Wang and Kit{-}Sang Tang and Kim{-}Fung Man}, title = {Learning paradigm based on jumping genes: {A} general framework for enhancing exploration in evolutionary multiobjective optimization}, journal = {Inf. Sci.}, volume = {226}, pages = {1--22}, year = {2013}, url = {https://doi.org/10.1016/j.ins.2012.11.002}, doi = {10.1016/j.ins.2012.11.002}, timestamp = {Wed, 14 Nov 2018 10:27:36 +0100}, biburl = {https://dblp.org/rec/bib/journals/isci/LiKWTM13}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2013 # Journal # Learning Paradigm Based on Jumping Genes: A General Framework for Enhancing Exploration in Evolutionary Multiobjective Optimization
Ke Li, Sam Kwong, Ran Wang, Kit-Sang Tang, Kim-Fung Man
Information Sciences (INS), 226: 1\u0026ndash;22, 2013.
10.1016/j.ins.2012.11.002
PDF | Code | BiB @article{LiKWTM13, author = {Ke Li and Sam Kwong and Ran Wang and Kit{-}Sang Tang and Kim{-}Fung Man}, title = {Learning paradigm based on jumping genes: {A} general framework for enhancing exploration in evolutionary multiobjective optimization}, journal = {Inf. Sci.}, volume = {226}, pages = {1--22}, year = {2013}, url = {https://doi.org/10.1016/j.ins.2012.11.002}, doi = {10.1016/j.ins.2012.11.002}, timestamp = {Wed, 14 Nov 2018 10:27:36 +0100}, biburl = {https://dblp.org/rec/bib/journals/isci/LiKWTM13}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Evolving Extreme Learning Machine Paradigm with Adaptive Operator Selection and Parameter Control
Ke Li, Ran Wang, Sam Kwong, Jingjing Cao
International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems (IJUFKS). 21(supp02): 143\u0026ndash;154, 2013.
10.1142/S0218488513400229
PDF | Code | BiB @ARTICLE{IJUFKS13, author = {Ke Li and Ran Wang and Sam Kwong and Jingjing Cao}, title = {Evolving Extreme Learning Machine Paradigm with Adaptive Operator Selection and Parameter Control}, journal = {International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems}, year = {2013}, volume = {21}, pages = {143-154} } 2012 # Journal # Achieving Balance Between Proximity and Diversity in Multi-objective Evolutionary Algorithm
Ke Li, Sam Kwong, Jingjing Cao, Miqing Li, Jinhua Zheng, Ruimin Shen
Information Sciences (INS), 182(1): 220\u0026ndash;242, 2012.
10.1016/j.ins.2011.08.027
PDF | BiB @article{LiKCLZS12, author = {Ke Li and Sam Kwong and Jingjing Cao and Miqing Li and Jinhua Zheng and Ruimin Shen}, title = {Achieving balance between proximity and diversity in multi-objective evolutionary algorithm}, journal = {Inf. Sci.}, volume = {182}, number = {1}, pages = {220--242}, year = {2012}, url = {https://doi.org/10.1016/j.ins.2011.08.027}, doi = {10.1016/j.ins.2011.08.027}, timestamp = {Wed, 14 Nov 2018 10:27:37 +0100}, biburl = {https://dblp.org/rec/bib/journals/isci/LiKCLZS12}, bibsource = {dblp computer science bibliography, https://dblp.org} } Conference # Multi-Objective Differential Evolution with Self-Navigation
Ke Li, Sam Kwong, Ran Wang, Jingjing Cao, Imre J. Rudas
Proc. of 2012 IEEE International Conference on Systems, Mans and Cybernetics (SMC’12), IEEE Press: p. 508\u0026ndash;513, October 2012.
10.1109/ICSMC.2012.6377775
PDF | BiB @inproceedings{LiKWCR12, author = {Ke Li and Sam Kwong and Ran Wang and Jingjing Cao and Imre J. Rudas}, title = {Multi-objective differential evolution with self-navigation}, booktitle = {SMC'12: Proc. of the 2012 {IEEE} International Conference on Systems, Man, and Cybernetics}, pages = {508--513}, year = {2012}, url = {https://doi.org/10.1109/ICSMC.2012.6377775}, doi = {10.1109/ICSMC.2012.6377775}, timestamp = {Mon, 29 Jan 2018 16:21:37 +0100}, biburl = {https://dblp.org/rec/bib/conf/smc/LiKWCR12}, bibsource = {dblp computer science bibliography, https://dblp.org} } A Weighted Voting Method Using Minimum Square Error based on Extreme Learning Machine
Jingjing Cao, Sam Kwong, Ran Wang, Ke Li
Proc. of 2012 International Conference on Machine Learning and Cybernetics (ICMLC’12), IEEE Press: p. 411\u0026ndash;414, July 2012.
10.1109/ICMLC.2012.6358949
PDF | BiB @inproceedings{CaoKWL12, author = {Jingjing Cao and Sam Kwong and Ran Wang and Ke Li}, title = {A weighted voting method using minimum square error based on Extreme Learning Machine}, booktitle = {ICMLC'12: Proc. of the 2012 International Conference on Machine Learning and Cybernetics}, pages = {411--414}, year = {2012}, url = {https://doi.org/10.1109/ICMLC.2012.6358949}, doi = {10.1109/ICMLC.2012.6358949}, timestamp = {Mon, 29 Jan 2018 16:21:37 +0100}, biburl = {https://dblp.org/rec/bib/conf/icmlc/CaoKWL12}, bibsource = {dblp computer science bibliography, https://dblp.org} } 2011 # Conference # Combining Interpretable Fuzzy Rule-based Classifiers via Multi-Objective Hierarchical Evolutionary Algorithm
Jingjing Cao, Hanli Wang, Sam Kwong, Ke Li
Proc. of 2011 IEEE International Conference on Systems, Mans and Cybernetics (SMC’11), IEEE Press: p. 1771\u0026ndash;1776, October 2011.
10.1109/ICSMC.2011.6083928
PDF | BiB @inproceedings{CaoWKL11, author = {Jingjing Cao and Hanli Wang and Sam Kwong and Ke Li}, title = {Combining interpretable fuzzy rule-based classifiers via multi-objective hierarchical evolutionary algorithm}, booktitle = {ICMLC'11: Proc. of the 2011 {IEEE} International Conference on Systems, Man and Cybernetics}, pages = {1771--1776}, year = {2011}, url = {https://doi.org/10.1109/ICSMC.2011.6083928}, doi = {10.1109/ICSMC.2011.6083928}, timestamp = {Mon, 27 Nov 2017 16:55:26 +0100}, biburl = {https://dblp.org/rec/bib/conf/smc/CaoWKL11}, bibsource = {dblp computer science bibliography, https://dblp.org} } JGBL paradigm: A Novel Strategy to Enhance the Exploration Ability of NSGA-II
Ke Li, Sam Kwong, Kim-Fung Man
Proc. of the 13th Annual Conference on Genetic and Evolutionary Computation (GECCO’11), ACM Press: p. 99\u0026ndash;100, July 2011.
10.1145/2001858.2001915
PDF | BiB @inproceedings{LiKM11, author = {Ke Li and Sam Kwong and Kim{-}Fung Man}, title = {{JGBL} paradigm: a novel strategy to enhance the exploration ability of nsga-ii}, booktitle = {GECCO'11: Proc. of the 13th Annual Genetic and Evolutionary Computation Conference}, pages = {99--100}, year = {2011}, url = {https://doi.org/10.1145/2001858.2001915}, doi = {10.1145/2001858.2001915}, timestamp = {Tue, 06 Nov 2018 11:06:35 +0100}, biburl = {https://dblp.org/rec/bib/conf/gecco/LiKM11}, bibsource = {dblp computer science bibliography, https://dblp.org} } Multi-Objective Differential Evolution with Adaptive Control of Parameters and Operators
Ke Li, Álvaro Fialho, Sam Kwong
Proc. of the 5th International Conference on Learning and Intelligent OptimizatioN (LION’11), Springer Verlag, LNCS, p. 473\u0026ndash;487, January 2011.
10.1007/978-3-642-25566-3_37
PDF | BiB @inproceedings{LiFK11, author = {Ke Li and {\\'{A}}lvaro Fialho and Sam Kwong}, title = {Multi-Objective Differential Evolution with Adaptive Control of Parameters and Operators}, booktitle = {Learning and Intelligent Optimization - 5th International Conference, {LION} 5, Rome, Italy, January 17-21, 2011. Selected Papers}, series = {Lecture Notes in Computer Science}, volume = {6683}, pages = {473--487}, publisher = {Springer}, year = {2011}, url = {https://doi.org/10.1007/978-3-642-25566-3\\_37}, doi = {10.1007/978-3-642-25566-3\\_37}, timestamp = {Tue, 14 May 2019 10:00:51 +0200}, biburl = {https://dblp.org/rec/conf/lion/LiFK11.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
2010 # Journal # A Novel Slicing Based Algorithm to Calculate Hypervolume for Multi-Objective Optimization Problems
Ke Li, Jinhua Zheng, Miqing Li, Cong Zhou, Hui Lv
ICIC Express Letters: An International Journal of Research and Surveys, 4(4): 1113\u0026ndash;1120, 2010.
PDF | BiB @article{LiZLZL10, author = {Ke Li and Jinhua Zheng and Miqing Li and Cong Zhou and Hui Lv}, title = {A Novel Slicing Based Algorithm to Calculate Hypervolume for Multi-Objective Optimization Problems}, journal = {ICIC Express Letters: An International Journal of Research and Surveys}, volume = {4}, number = {4}, year = {2010}, pages = {1133-1120} } Conference # Enhancing Diversity for Average Ranking Method in Evolutionary Many-Objective Optimization
Miqing Li, Jinhua Zheng, Ke Li, Qizhao Yuan, Ruimin Shen
Proc. of the 11th International Conference on Parallel Problem Solving from Nature (PPSN’10), Springer Verlag, LNCS, volume 6238: p. 647\u0026ndash;656, September 2010.
10.1007/978-3-642-15844-5_65
PDF | BiB @inproceedings{LiZLYS10, author = {Miqing Li and Jinhua Zheng and Ke Li and Qizhao Yuan and Ruimin Shen}, title = {Enhancing Diversity for Average Ranking Method in Evolutionary Many-Objective Optimization}, booktitle = {PPSN'10: Proc. of 11th International Conference on Parallel Problem Solving from Nature}, pages = {647--656}, year = {2010}, url = {https://doi.org/10.1007/978-3-642-15844-5\\_65}, doi = {10.1007/978-3-642-15844-5\\_65}, timestamp = {Wed, 14 Nov 2018 10:55:35 +0100}, biburl = {https://dblp.org/rec/bib/conf/ppsn/LiZLYS10}, bibsource = {dblp computer science bibliography, https://dblp.org} } A Grid-based Fitness Strategy for Evolutionary Many-Objective Optimization
Miqing Li, Jinhua Zheng, Ruimin Shen, Ke Li, Qizhao Yuan
Proc. of the 12th Annual Conference on Genetic and Evolutionary Computation (GECCO’10), ACM Press: p. 463\u0026ndash;470, July 2010.
10.1145/1830483.1830570
PDF | BiB @inproceedings{LiZSLY10, author = {Miqing Li and Jinhua Zheng and Ruimin Shen and Ke Li and Qizhao Yuan}, title = {A grid-based fitness strategy for evolutionary many-objective optimization}, booktitle = {Genetic and Evolutionary Computation Conference, {GECCO} 2010, Proceedings, Portland, Oregon, USA, July 7-11, 2010}, pages = {463--470}, publisher = {{ACM}}, year = {2010}, url = {https://doi.org/10.1145/1830483.1830570}, doi = {10.1145/1830483.1830570}, timestamp = {Tue, 06 Nov 2018 11:06:40 +0100}, biburl = {https://dblp.org/rec/conf/gecco/LiZSLY10.bib}, bibsource = {dblp computer science bibliography, https://dblp.org} }
2009 # Conference # A Novel Algorithm for Non-dominated Hypervolume-based Multiobjective Optimization
Ke Li, Jinhua Zheng, Miqing Li, Cong Zhou, Hui Lv
Proc. of 2009 IEEE International Conference on Systems, Mans and Cybernetics (SMC’09), IEEE Press: p. 5220\u0026ndash;5226, December 2009.
10.1109/ICSMC.2009.5345983
PDF | BiB @inproceedings{LiZLZL09, author = {Ke Li and Jinhua Zheng and Miqing Li and Cong Zhou and Hui Lv}, title = {A Novel Algorithm for Non-dominated Hypervolume-based Multiobjective Optimization}, booktitle = {SMC'09: Proc. of the 2009 {IEEE} International Conference on Systems, Man and Cybernetics}, pages = {5220--5226}, year = {2009}, url = {https://doi.org/10.1109/ICSMC.2009.5345983}, doi = {10.1109/ICSMC.2009.5345983}, timestamp = {Tue, 28 Nov 2017 16:18:09 +0100}, biburl = {https://dblp.org/rec/bib/conf/smc/LiZLZL09}, bibsource = {dblp computer science bibliography, https://dblp.org} } An Spanning Tree Based Method For Pruning Non-Dominated Solutions in Multi- Objective Optimization Problems
Miqing Li, Jinhua Zheng, Ke Li, Jun Wu, Guixia Xiao
Proc. of 2009 IEEE International Conference on Systems, Mans and Cybernetics (SMC’09), IEEE Press: p. 4882\u0026ndash;4887, December 2009.
10.1109/ICSMC.2009.5346322
PDF | BiB @inproceedings{LiZLWX09, author = {Miqing Li and Jinhua Zheng and Ke Li and Jun Wu and Guixia Xiao}, title = {An Spanning Tree Based Method For Pruning Non-Dominated Solutions in Multi-Objective Optimization Problems}, booktitle = {SMC'09: Proc. of the 2009 {IEEE} International Conference on Systems, Man and Cybernetics}, pages = {4882--4887}, year = {2009}, url = {https://doi.org/10.1109/ICSMC.2009.5346322}, doi = {10.1109/ICSMC.2009.5346322}, timestamp = {Tue, 28 Nov 2017 16:18:09 +0100}, biburl = {https://dblp.org/rec/bib/conf/smc/LiZLWX09}, bibsource = {dblp computer science bibliography, https://dblp.org} } Objective Reduction based on the Least Square Method for Large-dimensional Multiobjective Optimization Problem
Cong Zhou, Jinhua Zheng, Ke Li, Hui Lv
Proc. of the 5th International Conference on Natural Computation (ICNC’09), IEEE Press: p. 350\u0026ndash;354, August 2009.
10.1109/ICNC.2009.40
PDF | BiB @inproceedings{ZhouZLL09, author = {Cong Zhou and Jinhua Zheng and Ke Li and Hui Lv}, title = {Objective Reduction Based on the Least Square Method for Large-Dimensional Multi-objective Optimization Problem}, booktitle = {ICNC'09: Proc. of the 5th International Conference on Natural Computation}, pages = {350--354}, year = {2009}, url = {https://doi.org/10.1109/ICNC.2009.40}, doi = {10.1109/ICNC.2009.40}, timestamp = {Tue, 28 Nov 2017 16:18:09 +0100}, biburl = {https://dblp.org/rec/bib/conf/icnc/ZhouZLL09}, bibsource = {dblp computer science bibliography, https://dblp.org} } The Convergence Analysis of Genetic Algorithm based on Space Mating
Hui Lv, Jinhua Zheng, Jun Wu, Cong Zhou, Ke Li
Proc. of the 5th International Conference on Natural Computation (ICNC’09), IEEE Press: p. 557\u0026ndash;562, August 2009.
10.1109/ICNC.2009.39
PDF | BiB @inproceedings{LvZWZL09, author = {Hui Lv and Jinhua Zheng and Jun Wu and Cong Zhou and Ke Li}, title = {The Convergence Analysis of Genetic Algorithm Based on Space Mating}, booktitle = {ICNC'09: Proc. of 5th International Conference on Natural Computation}, pages = {557--562}, year = {2009}, url = {https://doi.org/10.1109/ICNC.2009.39}, doi = {10.1109/ICNC.2009.39}, timestamp = {Tue, 28 Nov 2017 16:18:09 +0100}, biburl = {https://dblp.org/rec/bib/conf/icnc/LvZWZL09}, bibsource = {dblp computer science bibliography, https://dblp.org} } An Improved Multi-objective Evolutionary Algorithm based on Differential Evolution
Ke Li, Jinhua Zheng
Proc. of 2009 WRI World Congress on Computer Science and Information Engineering (CSIE’09), IEEE Press: p. 825\u0026ndash;830, March 2009.
10.1109/CSIE.2009.181
PDF | BiB @inproceedings{LiZZL09, author = {Ke Li and Jinhua Zheng and Cong Zhou and Hui Lv}, title = {An Improved Differential Evolution for Multi-objective Optimization}, booktitle = {CSIE'09: Proc. of the 2009 {WRI} World Congress on Computer Science and Information Engineering}, pages = {825--830}, year = {2009}, url = {https://doi.org/10.1109/CSIE.2009.181}, doi = {10.1109/CSIE.2009.181}, timestamp = {Tue, 28 Nov 2017 16:18:09 +0100}, biburl = {https://dblp.org/rec/bib/conf/csie/LiZZL09}, bibsource = {dblp computer science bibliography, https://dblp.org} } `}),e.add({id:17,href:"/docs/events/readinggroup/",title:"Reading Group",section:"Docs",content:` Reading Group # The paper reading group meets weekly during the semester to discuss papers. Participation is open to all, guests are always welcome; if you are interested in engaging with us, please feel free to contact Dr Ke Li. More about our reading group culture \u0026#43; The paper to discuss is announced about one week in advance by the presenter. All participants are expected to read the paper before the meeting. It is recommended to take notes about insights, questions, and other points potentially worth discussions.
The goals of the reading group are:
Critical reflection on scientific work Practice of reading and argumentation strategies Exposure to a broad range of research topics Practice of leading group discussions The discussion is usually limited to one hour. The presenter will kick off the meeting by giving a short summary of the paper and raising a few points for discussion. The present is expected to inspire participants into the discussion.
Agenda (Year 2023) # August Multi-Objective Bi-Level Optimization for AutoML in Cross-Project Defect Prediction Work Presentation slides | Jiaxin Chen | Aug 6 July Paper Title Paper Reading slides | Presenter | July 23
Data-driven Literature Exploration with Topic Modeling, LLMs and Network Analysis Work Presentation slides | Mingyu Huang | July 30
Moderator: Fan Li
Jun Optimistic tree search strategies for black-box combinatorial optimization NeurIPS'22 paper | slides | Peili Mao | June 4
Explaining Hyperparameter Optimization via Partial Dependence Plots NeurIPS'21 paper | slides | Mingyu Huang | June 18
Learning Algorithms for Active Learning PMLR 2017 paper | slides | Tian Huang | June 18
Moderator: Peili Mao
May Bayesian Optimization with Conformal Prediction Sets
AISTAS 2023
paper | slides | Shengbo Wang | May 7
A Statistical Framework for Low-bitwidth Training of Deep Neural Networks
NeurIPS 2020
paper | slides | Fan Li | May 14
RegMixup: Mixup as a Regularizer Can Surprisingly Improve Accuracy \u0026amp; Out-of-Distribution Robustness
NeurIPS 2022
paper | slides | Shasha Zhou | May 21
Moderator: Shengbo Wang
Previous reading group information can be found from our archive.
`}),e.add({id:18,href:"/docs/events/studygroup/",title:"Study Group",section:"Docs",content:` Study Group # The core purpose of this study group, which runs every Sunday afternoon, is to learn some fundamental knowledge pertinent to our research. Participation is usually expected to be our COLA members. However, if you are interested in engaging with us, please feel free to contact Dr Ke Li for a discussion. Agenda (Year 2022) # Dec Zero article: no article
Academic Writing Series #7
slides | Ke Li | December 25
Zero article: no article
Academic Writing Series #6
slides | Ke Li | December 18
Definite article: the
Academic Writing Series #5
slides | Ke Li | December 11
Nov Indefinite article: a / an
Academic Writing Series #4
slides | Ke Li | November 27
Genitive: the possessive form of nouns
Academic Writing Series #3
slides | Ke Li | November 20
Nouns: plurals, countable versus uncountable
Academic Writing Series #2
slides | Ke Li | November 13
第一、二章: 基础知识
《最优化计算方法》
slides | Fan Li, Heng Yang | November 13
Nouns: plurals, countable versus uncountable
Academic Writing Series #1
slides | Ke Li | November 4
Previous study group information can be found from our archive.
`}),e.add({id:19,href:"/docs/research/supp/plant_fm/",title:"Supplementary",section:"Docs",content:` Plant RNA Foundation Model Project # This website maintains the supplementary materials related to the following paper:
Haopeng Yu, Heng Yang+, Yiliang Ding, Ke Li \u0026ldquo;PlantRNA-FM: A Plant RNA Foundation Model for Exploration RNA Functions in Plants\u0026rdquo;, submitted to Nature Machine Intelligence, under review, 2024. The complex language of plant RNA encodes a vast array of biological regulatory elements that orchestrate crucial aspects of plant growth, development, and adaptation to environmental stresses. Recent advancements in large-scale pre-trained foundation models (FMs) have demonstrate ed their immense potential to decipher the complex language of nucleotide sequences. In this study, we introduce PlantRNA-FM, a one-of-a-kind FM designed specifically for plant RNA research. PlantRNA-FM is a specialised plant RNA foundation model pre-trained on an extensive dataset spanning 1,124 diverse plant species. PlantRNA-FM demonstrated superior performance in plant-specific downstream tasks, such as plant RNA annotation prediction and plant RNA translation efficiency prediction, surpassing state-of-the-art models with F1 score improvements of up to 7.78% and 4.51%, respectively. The inclusion of RNA structure information during the pre-training phase further enhanced the model's performance, highlighting the importance of RNA structure in RNA functions. Moreover, the interpretability of PlantRNA-FM can be leveraged to explain the contribution of RNA sequence composition to downstream tasks. Furthermore, we identified and experimentally validated RNA G-quadruplexes that lead to low translational efficiency. Our findings demonstrate the power of PlantRNA-FM in deciphering the complex regulatory mechanisms encoded in plant RNA sequences, providing new insights into plant biology. PlantRNA-FM demonstrates superior performance on plant-specific downstream tasks:
Annotation prediction Translation efficiency prediction PlantRNA-FM has the capability to be explainable.
We are keen on promoting reproducibility and transparency in scientific research. Since this manuscript is currently submitted for possible publication, the source codes used in our empirical study will be publicly available after its acceptance. `}),e.add({id:20,href:"/docs/research/supp/supp_deto/",title:"Supplementary",section:"Docs",content:` Supplementary Materials # This website maintains the supplementary materials related to the following paper:
Ke Li+, Renzhi Chen+, Xin Yao, \u0026ldquo;A Data-Driven Evolutionary Transfer Optimization for Expensive Problems in Dynamic Environments\u0026rdquo;, IEEE Trans. Evolutionary Computation, in press, 2023. It consists of the following parts:
Appendix document of this paper can be found from our Dropbox link. Examples of the dynamically changing fitness landscape of both the moving peak benchmark problems (left hand side) and the moving peak benchmark with Gaussian peaks (right hand side). Illustrative examples of the dynamically rotating handwritten digital images collected from the MNIST dataset at different time steps. We are keen on promoting reproducibility and transparency in scientific research. Since this manuscript is currently submitted for possible publication, the source codes used in our empirical study will be publicly available after its acceptance. `}),e.add({id:21,href:"/docs/research/supp/supp_dmi/",title:"Supplementary",section:"Docs",content:` Supplementary Materials # This website maintains the supplementary materials related to the following paper:
Ke Li, Renzhi Chen, \u0026ldquo;Batched Data-Driven Evolutionary Multi-Objective Optimization Based on Manifold Interpolation\u0026rdquo;, IEEE Trans. Evol. Comput., accepted for publication, 2022. It consists of the following parts:
The source code of this paper can be found from our Github repo. Appendix document of this paper can be found from this Dropbox link. Tables of all comparison results can be found in this Dropbox link. Figures of all comparison results of the population distributions of on different benchmark test problems can be found in this Dropbox link. Please cite the paper by using the following bibtex.
@article{LiC22, author = {Ke Li and Renzhi Chen}, title = {Batched Data-Driven Evolutionary Multi-Objective Optimization Based on Manifold Interpolation}, journal = {{IEEE} Trans. Evol. Comput.}, pages = {1--15}, year = {2022}, note = {accepted for publication} } `}),e.add({id:22,href:"/docs/research/supp/supp_pbmorl/",title:"Supplementary",section:"Docs",content:` Supplementary Materials # This website maintains the supplementary materials related to the following paper:
Ke Li, Han Guo+, \u0026ldquo;Human-in-the-Loop Policy Optimization for Preference-Based Multi-Objective Reinforcement Learning\u0026rdquo;, submitted for peer review, 2024. It consists of the following parts:
The source code of this paper can be found from our Github repo. Video clips of the preferred policy obtained by our proposed PBMORL. Ant-v2 and Halfcheetah-v2, left is \\(f_1\\) preferred and right is \\(f_2\\) preferred.
For Ant-v2, \\(f_1\\) and \\(f_2\\) are the speeds at the x and y axes, respectively.
For Halfcheetah-v2, \\(f_1\\) and \\(f_2\\) are the forward speed and energy consumption, respectively. Swimmer-v2 and Walker-v2, left is \\(f_1\\) preferred and right is \\(f_2\\) preferred.
For Swimmer-v2 and Walker-v2, \\(f_1\\) and \\(f_2\\) are the forward speed and energy consumption, respectively.
Humanoid-v2 and Hopper-v2, left is \\(f_1\\) preferred and right is \\(f_2\\) preferred.
For Humanoid-v2, \\(f_1\\) and \\(f_2\\) are the forward speed and energy consumption, respectively.
For Hopper-v2, \\(f_1\\) and \\(f_2\\) are the forward speed and jumping height, respectively.
Hopper-v3, left to right are \\(f_1\\) , \\(f_2\\) , and \\(f_3\\) preferred, respectively.
For Hopper-v3, \\(f_1\\) to \\(f_3\\) are the forward speed, jumping height, and energy consumption, respectively.
Please cite the paper by using the following bibtex.
@article{LiLY22, author = {Ke Li and Han Guo}, title = {Human-in-the-Loop Policy Optimization for Preference-Based Multi-Objective Reinforcement Learning}, journal = {ArXiv}, pages = {1--15}, year = {2024}, note = {under review} } `}),e.add({id:23,href:"/docs/research/supp/supp_ranknet/",title:"Supplementary",section:"Docs",content:` Supplementary Materials # This website maintains the supplementary materials related to the following paper:
Ke Li, Guiyu Lai+, Xin Yao, \u0026ldquo;Interactive Evolutionary Multi-Objective Optimization via Learning-to-Rank\u0026rdquo;, IEEE Trans. Evol. Comput., accepted for publication, 2022. It consists of the following parts:
The source code of this paper can be found from our Github repo. Appendix document of this paper can be found from this Dropbox link. Video clips of the best policy obtained by different algorithms. In particular, \\(f_1\\) is the x-axis speed, \\(f_2\\) is the y-axis speed, \\(f_3 \\text{ is the energy consumption} \\) BC-EMO: \\( (f_1=68.45730, f_2=111.72400, f_3=95.55980)^\\top \\) NEMO-0: \\( (f_1=68.45730, f_2=111.72400, f_3=95.55980)^\\top \\) I-MOEA/D-PLVF: \\( (f_1=156.62800, f_2=30.54620, f_3=75.83200)^\\top \\) IEMO/D: \\( (f_1=66.09890, f_2=61.94570, f_3=75.91520)^\\top \\) I-NSGA-II/LTR: \\( (f_1=100.52500, f_2=96.36920, f_3=100.34000)^\\top \\) I-MOEA/D/LTR: \\( (f_1=114.31000, f_2=68.71040, f_3=102.49200)^\\top \\) I-R2-IBEA/LTR: \\( (f_1=120.48400, f_2=74.36900, f_3=111.71900)^\\top \\) Please cite the paper by using the following bibtex.
@article{LiLY22, author = {Ke Li and Guiyu Lai and Xin Yao}, title = {Interactive Evolutionary Multi-Objective Optimization via Learning-to-Rank}, journal = {{IEEE} Trans. Evol. Comput.}, pages = {1--15}, year = {2022}, note = {accepted for publication} } `}),e.add({id:24,href:"/docs/events/activities/exeter_leiden_symposium/",title:"Symposium",section:"Docs",content:` Exeter-Leiden Symposium on Data-Driven Modeling and Optimization # Objectives # Data has been playing an ever-growing role in artificial/computational intelligence. Such role goes beyond its typical use in neural networks and learning systems, encompassing also evolutionary and other meta-heuristic optimization algorithms. The objective of this symposium is to provide a unique and vibrant cohort for sharing and experiencing the emerging methodologies and applications of data-driven artificial/computational intelligence. It will offer keynotes, invited lectures and discussion groups given by experts from Exeter, Leiden and other high-profile institutions. It will provide a unique opportunity for participants to 1) learn about artificial/computational intelligence approaches and their applications; 2) interact with world-renowned experts in computational intelligence; and 3) communicate with experts and peers with a broad range of backgrounds to exchange ideas and form new collaborations.
It will take place as part of the outreach activities of the Alan Turing Institute and the Institute for Data Science and Artificial Intelligence (AI) at the University of Exeter. Both institutes are actively developing and fostering a culture of effective interactions for promoting data science and AI for addressing global challenges across disciplines.
Venue and Date # This symposium will be running fully online via Zoom.
Zoom ID: 931 5551 9825 | PWD: 959476
June 6, 2022
Speakers # Prof. Michael Emmerich, Leiden University, Netherlands Prof. Yaochu Jin, University of Bielefeld, Germany
Prof. Thomas Bäck, Leiden University, Netherlands Prof. Juergen Branke, University of Warwick, UK Prof. Kaisa Miettinen, University of Jyväskylä, Finland Schedule # Note that the time goes with Central European Time (CET) The symposium will be organized in one day with the following agenda.
9:00 – 9:10: Introduction talk by Ke Li/Hao Wang 9:10 – 10:00 | Prof. Michael Emmerich | Leiden University, Netherlands
Lipschitz Models versus Gaussian Process Models in Data-Driven Multi-objective Optimization
Bio Michael Emmerich is a Germany-born Computer Scientist who currently lives in Finland and in The Netherlands. Since 2016 he is appointed as Associate Professor at Leiden University, The Netherlands, where he leads the Multicriteria Optimization and Decision Analytics Group and since 2019 he is a visiting researcher at Jyvaskyla University, Finland in the Multiobjective and Industrial Optimization Group. He also is Lead AI Scientist at SILO.ai, a provider of AI solutions n the Nordic Countries. He has received his Doctorate in Natural Sciences from the Technical University of Dortmund on the topic of Gaussian Processes for Surrogate-Assisted Multiobjective Design Optimization (2005) under the supervision of Prof. Dr. Ing. H.-P. Schwefel. He also worked as a visiting fellow at the Center for Applied Systems Analysis, ICD e.V. Dorttmund, Institut für Erstarrung unter Schwerelosigkeit e.V. (Aachen), Institute for Fundamental Research of Matter (FOM) Amsterdam, Unversity of the Algarve, IST Lisbon, and Jyvaskyla University. His main contributions are in the field of indicator-based and Bayesian multiobjective optimization, and application of multiobjective optimization in chemical engineering and architectural design. | Abstract The quantification of uncertainty is an important topic when it comes to modeling function landscapes based on previously evaluated input-output pairs. Gaussian process regression and the closely related Kriging method form allegedly the most well known class of surrogate models supporting uncertainty quantification. Here the uncertainty stems from the assumption that outputs are correlated by means of a distance (in the input-space) dependent correlation function. Such knowledge can be used to compute probabilistic confidence bounds to quantify uncertainty of predictions. Lipschitz continuity (and the more general Hölder continuity) on the other hand makes assumptions about bounded change rates. It, too, is based on distances in the input space but its model assumptions yield deterministic upper and lower bounds for the uncertainty ranges in prediction tasks.
We contrast these two techniques and reveal commonalities and differences and also comment on their usefulness in the integration to (multiobjective) Bayesian optimization frameworks. A special focus will be on variants of expected improvements and show that the use of a Lipschitzian interpretation of the Expected Improvement is almost equivalent to Shubert's algorithm Computations in the Lipschitzian case are far easier and more efficient while many of the interesting properties of Gaussian process models are preserved. | video 10:00 – 10:50 | Prof. Yaochu Jin | University of Bielefeld, Germany
Privacy-Preserving Data-driven Evolutionary Optimization
Bio Yaochu Jin is an Alexander von Humboldt Professor for Artificial Intelligence endowed by the German Federal Ministry of Education and Research, Faculty of Technology, Bielefeld University, Germany. He is also a Distinguished Chair in Computational Intelligence, Department of Computer Science, University of Surrey, Guildford, U.K. He was a "Finland Distinguished Professor", University of Jyväskylä, Finland, "Changjiang Distinguished Visiting Professor", Northeastern University, China, and "Distinguished Visiting Scholar", University of Technology Sydney, Australia. His main research interests include evolutionary optimization, evolutionary learning, trustworthy machine learning, and evolutionary developmental systems.
Prof Jin is presently the Editor-in-Chief of Complex \u0026 Intelligent Systems. He was an IEEE Distinguished Lecturer and the Vice President for Technical Activities of the IEEE Computational Intelligence Society. He is named by the Web of Science as "a Highly Cited Researcher" from 2019 to 2021 consecutively. He is a Member of Academia Europaea and Fellow of IEEE. | Abstract Data-driven optimization has received increased interest over the past decade due to its practical importance in many industrial sectors and scientific research fields. Little attention, however, has been paid to privacy preservation the data used for optimization. This talk presents our recent work on privacy-preserving data-driven evolutionary optimization based on federated learning techniques and infill criteria. The prosed framework is applicable to both single- and multi-objective optimization. | video 10:50 – 11:40 | Prof. Thomas Bäck | Leiden University, Netherlands
Evolutionary Computation meets Algorithm Configuration (and Applications)
Bio Thomas Bäck is Full Professor of Computer Science at the Leiden Institute of Advanced Computer Science (LIACS), Leiden University, The Netherlands, where he is head of the Natural Computing group since 2002. He received his PhD (adviser: Hans-Paul Schwefel) in computer science from Dortmund University, Germany, in 1994, and then worked for the Informatik Centrum Dortmund (ICD) as department leader of the Center for Applied Systems Analysis. From 2000 - 2009, Thomas was Managing Director of NuTech Solutions GmbH and CTO of NuTech Solutions, Inc. He gained ample experience in solving real-life problems in optimization and data mining through working with global enterprises such as BMW, Beiersdorf, Daimler, Ford, Honda, and many others.
Thomas has more than 300 publications on natural computing, as well as two books on evolutionary algorithms: Evolutionary Algorithms in Theory and Practice (1996), Contemporary Evolution Strategies (2013). He is co-editor of the Handbook of Evolutionary Computation, and the Handbook of Natural Computing, and co-editor-in-chief of Springer's Natural Computing book series. He is also editorial board member and associate editor of a number of journals on evolutionary and natural computing. Thomas received the best dissertation award from the German Society of Computer Science (Gesellschaft für Informatik, GI) in 1995 and the IEEE Computational Intelligence Society Evolutionary Computation Pioneer Award in 2015. | Abstract Direct global optimization algorithms based on evolutionary computation have shown big successes in a wide range of application domains, for example engineering design optimization.
In machine learning, the optimization of hyperparameters (also called the algorithm configuration problem) is an important task. I will briefly explain this problem and provide some examples illustrating that this task can be handled by direct global optimization algorithms as well. While algorithm configuration is commonly applied to machine learning algorithms, algorithm configuration for evolution strategies is also an exciting application domain. I will give a simple example how a combinatorial design space of 4608 configuration variants of evolution strategies can be explored and investigated using data mining. This approach provides an opportunity for discovering the unexplored areas of the optimization algorithm design space. Conversely, direct global optimization methods can also be used as algorithm configurators, or even for addressing the combined algorithm selection and hyperparameter optimization (CASH) task in machine learning. I will provide some insight into research in this direction, too.
To conclude, I return to real world application examples and illustrate a few of those that my group worked on, over the past more than 20 years. | video 11:40 – 14:00: Lunch break 14:00 – 14:50 | Prof. Juergen Branke | University of Warwick, UK
Bayesian Optimisation and Input Uncertainty Reduction
Bio Juergen Branke is Professor of Operational Research and Systems at Warwick Business School, University of Warwick (UK). His main research interests include metaheuristics and Bayesian optimisation applied to problems under uncertainty, such as simulation optimisation, dynamically changing problems, and multi-objective problems. Prof. Branke is Editor of ACM Transactions on Evolutionary Learning and Optimization, Area Editor of the Journal of Heuristics and the Journal on Multi-Criteria Decision Analysis, as well as Associate Editor of IEEE Transactions on Evolutionary Computation and the Evolutionary Computation Journal. | Abstract Simulators often require calibration inputs estimated from real world data and the estimate can significantly affect simulation output. Particularly when performing simulation optimisation to find an optimal solution, the uncertainty in the inputs significantly affects the quality of the found solution. One remedy is to search for the solution that has the best performance on average over the uncertain range of inputs yielding an optimal compromise solution. We consider the more general setting where a user may choose between either running simulations or instead querying an external data source, improving the input estimate and enabling the search for a more targeted, less compromised solution. We explicitly examine the trade-off between simulation and real data collection in order to find the optimal solution of the simulator with the true inputs. Using a value of information procedure, we propose a novel unified simulation optimisation procedure called Bayesian Information Collection and Optimisation (BICO) that, in each iteration, automatically determines which of the two actions (running simulations or data collection) is more beneficial. Numerical experiments demonstrate that the proposed algorithm is able to automatically determine an appropriate balance between optimisation and data collection. | video 14:50 – 15:40 | Prof. Kaisa Miettinen | University of Jyväskylä, Finland
Perspectives to Data-driven Multiobjective Optimization with Interactive Methods
Bio Kaisa Miettinen is Professor of Industrial Optimization at the University of Jyvaskyla. Her research interests include theory, methods, applications and software of nonlinear multiobjective optimization including interactive and evolutionary approaches. She heads the Research Group on Multiobjective Optimization and is the director of the thematic research area called Decision Analytics utilizing Causal Models and Multiobjective Optimization (DEMO, www.jyu.fi/demo). She has authored over 200 refereed journal, proceedings and collection papers, edited 18 proceedings, collections and special issues and written a monograph Nonlinear Multiobjective Optimization. She is a member of the Finnish Academy of Science and Letters, Section of Science and has served as the President of the International Society on Multiple Criteria Decision Making (MCDM). She belongs to the editorial boards of seven international journals and the Steering Committee of Evolutionary Multiobjective Optimization. She has previously worked at IIASA, International Institute for Applied Systems Analysis in Austria, KTH Royal Institute of Technology in Stockholm, Sweden and Helsinki School of Economics, Finland. She has received the Georg Cantor Award of the International Society on MCDM for independent inquiry in developing innovative ideas in the theory and methodology. | Abstract In data analytics, we can use descriptive analytics to understand the data or predictive analytics to make predictions, but to know what actions to take to reach desired outcomes, we need prescriptive analytics. To make optimized recommendations or decisions based on the data, we can fit models in the data and derive optimization problems. In many cases, real decisions to be made are characterized by multiple conflicting objectives to be optimized and we can support decision making by applying appropriate multiobjective optimization methods. This we can call decision analytics.
In this talk, I discuss different elements of a seamless chain from data to data-driven decision support involving multiobjective optimization. Eventually, the derived multiobjective optimization problem is solved with an appropriate interactive method. In that way, the decision maker with domain expertise can augment information contained in the data and direct the solution process with one’s preferences. At the same time, the decision maker gains insight into the interdependencies and trade-offs among the conflicting objectives, and can get convinced of the quality of the most preferred solution. In addition, I give some examples of data-driven decision making problems. Finally, I give an overview of the modular, open-source software framework DESDEO containing different interactive methods. | video 15:40 – 16:55
Panel discussion | video 16:55 – 17:00: Closing remark Sponsors # We are grateful to the support from UKRI Future Leaders Fellowship (MR/S017062/1), European Network Fund@Exeter (No. GP ENF5.10) and Turing Fellowship.
`}),e.add({id:25,href:"/docs/events/activities/turing_workshop/",title:"Symposium",section:"Docs",content:` Turing Workshop on Human-Centric Artificial and Computational Intelligence and Applications # Objectives # Data has been playing an ever-growing role in artificial/computational intelligence. Such role goes beyond its typical use in neural networks and learning systems, encompassing also evolutionary and other meta-heuristic optimization algorithms. The objective of this symposium is to provide a unique and vibrant cohort for sharing and experiencing the emerging methodologies and applications of data-driven artificial/computational intelligence. It will offer keynotes, invited lectures and discussion groups given by experts from Exeter, Leiden and other high-profile institutions. It will provide a unique opportunity for participants to 1) learn about artificial/computational intelligence approaches and their applications; 2) interact with world-renowned experts in computational intelligence; and 3) communicate with experts and peers with a broad range of backgrounds to exchange ideas and form new collaborations.
It will take place as part of the outreach activities of the Alan Turing Institute and the Institute for Data Science and Artificial Intelligence (AI) at the University of Exeter. Both institutes are actively developing and fostering a culture of effective interactions for promoting data science and AI for addressing global challenges across disciplines.
Venue and Date # This workshop will be running in person at beautiful Streatham Campus of the University of Exeter.
April 26\u0026ndash;28, 2023
Speakers # TBD
Schedule # Note that the time goes with Greenwich Mean Time (GMT) The agenda of this workshop will be released soon.
April 26, 2023
11:30 – 14:00: Registration and lunch April 27, 2023
April 28, 2023
11:40 – 14:00: Lunch break Sponsors # We are grateful to the support from Turing Network Fund and UKRI Future Leaders Fellowship (MR/S017062/1, MR/X011135/1).
`}),e.add({id:26,href:"/docs/turing_workshop/",title:"Symposium",section:"Docs",content:` Turing Workshop on Human-Centric Artificial and Computational Intelligence and Applications # Synopsis # Human-Centered artificial/computational intelligence (HCAI/CI) is an emerging discipline intent on creating AI/CI systems that amplify and augment rather than displace human abilities. Instead, HCAI/CI seeks to preserve human control in a way that ensures AI meets our needs while also operating in a reliable, robust, and transparent manner, delivering equitable outcomes, and respecting privacy.
This workshop is designed to bring key data scientists and AI experts from both academia and industry to sharing up to date research and innovation developments themed on HCAI/CI, but also help identify the key challenges in stakeholders. We anticipate this workshop playing as the springboard to explore potential collaboration between academics and with industrial stakeholders. It will take place as part of the outreach activities of the Alan Turing Institute and the Institute for Data Science and Artificial Intelligence (AI) at the University of Exeter (partnering with the University of Oxford and the University of Birmingham). Both institutes are actively developing and fostering a culture of effective interactions for promoting data science and AI for addressing global challenges across disciplines.
Objectives # We want to leverage this workshop as a driver to develop an emerging area related to human-centric C/AI and raise the awareness of the Alan Turing Institute nationally and internationally in the forefront of AI/CI.
Promote the inter-disciplinary knowledge exchange and conversation between academics and industrial stakeholders themed on the HCAI/CI approaches for engineering, scientific and public sectors. Identify the key challenges and opportunities of bringing human in the loop of AI and CI as well as their uptake in the real world. Promote and explore the potential collaboration across different universities and with industry. Date # This workshop will be running from April 26 to April 28, 2023
Speakers # TBD
Schedule # Note that the time goes with Greenwich Mean Time (GMT) The detailed agenda of this workshop will be released in due course.
April 26, 2023
11:30 \u0026ndash; 14:00: Registration and lunch 14:00 \u0026ndash; 17:30: Talks 18:00 \u0026ndash; 20:00: Dinner April 27, 2023
9:00 \u0026ndash; 12:00: Talks 12:00 \u0026ndash; 14:00: Lunch 14:00 \u0026ndash; 17:30: Talks and breakout groups 18:00 \u0026ndash; 20:00: Dinner April 28, 2023
9:00 \u0026ndash; 12:00: Talks and panel discussion 12:00 \u0026ndash; 14:00: Lunch 14:00 \u0026ndash; 17:30: Talks 11:40 – 14:00: Lunch break Sponsors # We are grateful to the support from Turing Network Fund and UKRI Future Leaders Fellowship (MR/S017062/1, MR/X011135/1).
Venue # This workshop will be running in person at beautiful Streatham Campus of the University of Exeter.
`}),e.add({id:27,href:"/turing_workshop/",title:"Symposium",section:"Home",content:` Turing Workshop on Human-Centric Artificial and Computational Intelligence and Applications # Synopsis # Human-Centered artificial/computational intelligence (HCAI/CI) is an emerging discipline intent on creating AI/CI systems that amplify and augment rather than displace human abilities. Instead, HCAI/CI seeks to preserve human control in a way that ensures AI meets our needs while also operating in a reliable, robust, and transparent manner, delivering equitable outcomes, and respecting privacy.
This workshop is designed to bring key data scientists and AI experts from both academia and industry to sharing up to date research and innovation developments themed on HCAI/CI, but also help identify the key challenges in stakeholders. We anticipate this workshop playing as the springboard to explore potential collaboration between academics and with industrial stakeholders. It will take place as part of the outreach activities of the Alan Turing Institute and the Institute for Data Science and Artificial Intelligence (AI) at the University of Exeter (partnering with the University of Oxford and the University of Birmingham). Both institutes are actively developing and fostering a culture of effective interactions for promoting data science and AI for addressing global challenges across disciplines.
Objectives # We want to leverage this workshop as a driver to develop an emerging area related to human-centric C/AI and raise the awareness of the Alan Turing Institute nationally and internationally in the forefront of AI/CI.
Promote the inter-disciplinary knowledge exchange and conversation between academics and industrial stakeholders themed on the HCAI/CI approaches for engineering, scientific and public sectors. Identify the key challenges and opportunities of bringing human in the loop of AI and CI as well as their uptake in the real world. Promote and explore the potential collaboration across different universities and with industry. Date # This workshop will be running from April 26 to April 28, 2023
Speakers # TBD
Schedule # Note that the time goes with Greenwich Mean Time (GMT) The detailed agenda of this workshop will be released in due course.
April 26, 2023
11:30 \u0026ndash; 14:30: Registration and lunch 14:30 \u0026ndash; 17:30: Talks April 27, 2023
8:30 \u0026ndash; 9:30: Arrival \u0026ndash; tea and coffee 9:30 \u0026ndash; 12:30: Academic talks 12:30 \u0026ndash; 14:30: Lunch break and poster session 14:30 \u0026ndash; 17:30: Industrial session 18:00 \u0026ndash; 20:00: Dinner April 28, 2023
8:30 \u0026ndash; 9:30: Arrival \u0026ndash; tea and coffee 9:30 \u0026ndash; 11:30: Industrial session 11:30 – 14:00: Round up lunch and close Sponsors # We are grateful to the support from Turing Network Fund and UKRI Future Leaders Fellowship (MR/S017062/1, MR/X011135/1).
Venue # This workshop will be running in person at beautiful Streatham Campus of the University of Exeter.
`}),e.add({id:28,href:"/docs/home/vacancies/",title:"Vacancies",section:"Docs",content:` Vacancies # We very much welcome and support applications from underrepresented groups and from people of all shapes, shades, and genders. If you are uncertain about your possible role in our team, please do not hesitate to get in touch with Ke Li.
PhD There are multiple opportunities available at the University of Exeter to fund your PhD study.
China Scholarship Council (Chinese Students): The University of Exeter is proud to offer up to 50 full-time PhD scholarships in collaboration with the China Scholarship Council (CSC). The application deadline is usually around the beginning of January. More detailed information can be found from here. Doctor Training Partnerships (UK/EU \u0026amp; International Students): As a research intensive university in the UK, Exeter has strong commitments to work in partnerships with several research councils to fund talented students for a PhD. The deadline is usually around the end of January every year. More detailed information can be found from here. Research Fellow We welcome applications by post-doc and research fellows. Unfortunately, we do not have funding available at this time. However, if you want to propose a collaboration based on an externally-funded post-doctoral scholarship, please get in touch. Here are some potential funding opportunities:
Dorothy Hodkin Fellowship Marie-Curie Fellowship EPSRC Post-Doctoral Fellowship Newton International Fellowships (for who are not based in the UK) University Research Fellowship Royal Commission for the Exhibition of 1851 Research Fellowship Royal Academy of Engineering Fellowship Visiting Scholar We are also welcome the self-funded visiting scholars (supported by CSC or other government organisations) to join the COLA Laboratory. Note that I prefer at most host 3 long-term (at least one year) visitors simultaneously in order to allocate enough supervision time. Some useful tips to know when preparing your pitching email \u0026#43; Use Subject Line: 20** Prospective Students/Postdoc/Visiting Scholar_YourName Briefly introduce your education background, GPA/Rank, IELTS/TOEFL score, and other highlights (e.g., publications, previous awards and industrial experiences). Briefly (1-page summary) introduce your research experience, and explain what your general research interests and strengths are. Explain why you want to choose our lab. Briefly mention one of my recent work that you are most interested in, and discuss the potential extensions that you might want to work on. Include your CV in the attachment. Due to the large volume of inquiries, I cannot unfortunately afford to reply all those enquiry emails. We are not able to host any summer intern in our lab at the moment.
`})})()