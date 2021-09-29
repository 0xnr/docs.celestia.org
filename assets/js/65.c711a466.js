(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{597:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rationale-distributing-rewards-and-penalties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale-distributing-rewards-and-penalties"}},[t._v("#")]),t._v(" Rationale: Distributing Rewards and Penalties")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#preamble"}},[t._v("Preamble")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#distribution-scheme"}},[t._v("Distribution Scheme")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#state-efficient-implementation"}},[t._v("State-Efficient Implementation")])])])])]),t._v(" "),a("h2",{attrs:{id:"preamble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preamble"}},[t._v("#")]),t._v(" Preamble")]),t._v(" "),a("p",[t._v("Due to the requirement that all incorrect state transitions on Celestia be provable with a "),a("a",{attrs:{href:"https://arxiv.org/abs/1809.09044",target:"_blank",rel:"noopener noreferrer"}},[t._v("compact fraud proof"),a("OutboundLink")],1),t._v(" that is cheap enough to verify within a smart contract on a remote chain (e.g. Ethereum), computing how rewards and penalties are distributed must involve no iterations. To understand why, let us consider the following desiderata in a staking system:")]),t._v(" "),a("ol",[a("li",[t._v("In-protocol stake delegation: this makes it easier for users to participate in the consensus process, and reduces reliance on custodial staking services.")]),t._v(" "),a("li",[t._v("In-protocol enforcement of proper distribution of rewards and penalities to delegators: rewards and penalties collected by validators should be distributed to delegators trustlessly.")])]),t._v(" "),a("p",[t._v('Naively, rewards and penalties (henceforth referred to collectively as "rewards", since penalties are simply negative rewards) can be distributed immediately. For example, when a validator produces a new block and is entitled to collecting transaction fees, these fees can be distributed to every single account delegating stake to this validator. This requires iterating over potentially a huge number of state elements for a single state transition (i.e. transaction), which is computationally expensive. The specific problem is that it would be infeasible to prove that such a state transition was '),a("em",[t._v("incorrect")]),t._v(" (i.e. with a fraud proof) within the execution system of a remote blockchain (i.e. with a smart contract).")]),t._v(" "),a("p",[t._v("This forms the primary motivation of the scheme discussed here: a mechanism for distributing rewards that is state-efficient and requires no iteration over state elements for any state transition.")]),t._v(" "),a("h2",{attrs:{id:"distribution-scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distribution-scheme"}},[t._v("#")]),t._v(" Distribution Scheme")]),t._v(" "),a("p",[t._v("The scheme presented here is an incarnation of Cosmos' "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/spec/fee_distribution/f1_fee_distr.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("F1 fee distribution scheme"),a("OutboundLink")],1),t._v(". F1 has the nice property of being approximation-free and, with proper implementation details, can be highly efficient with state usage and completely iteration-free in all cases.")]),t._v(" "),a("p",[t._v("Naively, when considering a single block, the reward that should be given to a delegator with stake "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( x )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(", who is delegating to a validator with total voting power "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( n )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(", whose reward in that block is "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("T")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( T )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(", is:")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("a")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("v")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mtext"),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("w")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("a")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")])],1),a("mo",[t._v("=")]),a("mi",[t._v("x")]),a("mfrac",[a("mrow",[a("mi",[t._v("T")])],1),a("mrow",[a("mi",[t._v("n")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\text{naive reward} = x \\frac{T}{n}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.36033em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.04633em","vertical-align":"-0.686em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("n")]),a("span",{staticClass:"mord mathrm"},[t._v("a")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("v")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mspace"}),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("w")]),a("span",{staticClass:"mord mathrm"},[t._v("a")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("d")])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("n")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),t._v(" "),a("p",[t._v("In other words, the voting power contributed by the delegator multiplied by the "),a("em",[t._v("reward rate")]),t._v(", i.e. the rewards per unit of voting power. We note that if the total voting power of a validator remains constant forever, then the above equation holds and is approximation-free. However, changes to the total voting power need to be accounted for.")]),t._v(" "),a("p",[t._v("Blocks between two changes to a validator's voting power (i.e. whenever a user delegates or undelegates stake) are a "),a("em",[t._v("period")]),t._v(". Every time a validator's voting power changes (i.e. a new period "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("f")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( f )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" begins), an entry "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("E")]),a("mi",[t._v("n")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("msub",[a("mi",[t._v("y")]),a("mi",[t._v("f")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( Entry_f )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.036108em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" for this period is saved in state, which records "),a("em",[t._v("the reward rate up to the beginning of")]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("f")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( f )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(". This is simply the sum of the reward rate up to the beginning of previous period "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("f")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( f-1 )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" and the reward rate of the period "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("f")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( f )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" itself:")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("E")]),a("mi",[t._v("n")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("msub",[a("mi",[t._v("y")]),a("mi",[t._v("f")])],1),a("mo",[t._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("{")]),a("mtable",[a("mtr",[a("mtd",[a("mrow",[a("mn",[t._v("0")])],1)],1),a("mtd",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("=")]),a("mn",[t._v("0")])],1)],1)],1),a("mtr",[a("mtd",[a("mrow")],1)],1),a("mtr",[a("mtd",[a("mrow",[a("mi",[t._v("E")]),a("mi",[t._v("n")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("msub",[a("mi",[t._v("y")]),a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1)],1),a("mo",[t._v("+")]),a("mfrac",[a("mrow",[a("msub",[a("mi",[t._v("T")]),a("mi",[t._v("f")])],1)],1),a("mrow",[a("msub",[a("mi",[t._v("n")]),a("mi",[t._v("f")])],1)],1)],1)],1)],1),a("mtd",[a("mrow",[a("mi",[t._v("f")]),a("mo",[t._v(">")]),a("mn",[t._v("0")])],1)],1)],1),a("mtr",[a("mtd",[a("mrow")],1)],1),a("mtr",[a("mtd",[a("mrow")],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Entry_f = \\begin{cases}\n    0 & f = 0 \\\\\\\\\n    Entry_{f-1} + \\frac{T_f}{n_f} & f > 0 \\\\\\\\\n\\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"4.296219000000001em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"8.092438000000001em","vertical-align":"-3.7962190000000002em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[a("span",{staticClass:"delimsizing mult"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"2.75001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎩")])])]),a("span",{staticStyle:{top:"2.75001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"2.4500100000000002em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"2.1500100000000004em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"1.8500100000000004em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"1.5500100000000003em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"1.2500100000000003em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"0.9500100000000002em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-0.000009999999999843467em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎨")])])]),a("span",{staticStyle:{top:"-1.1500099999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-1.4500099999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-1.7500099999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-2.05001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-2.3500099999999997em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-2.6500099999999995em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-2.9500099999999994em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-3.2500199999999992em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎧")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-3.2882190000000007em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])]),a("span",{staticStyle:{top:"-1.8482190000000007em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"})]),a("span",{staticStyle:{top:"-0.05588900000000052em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.6859999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.13889em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])]),a("span",{staticStyle:{top:"1.924219em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"})]),a("span",{staticStyle:{top:"3.3642190000000003em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-3.2882190000000007em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])]),a("span",{staticStyle:{top:"-0.05588900000000008em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mrel"},[t._v(">")]),a("span",{staticClass:"mord mathrm"},[t._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),t._v(" "),a("p",[t._v("Note that "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("E")]),a("mi",[t._v("n")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("y")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( Entry )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" is a monotonically increasing function.")]),t._v(" "),a("p",[t._v("Finally, the raw reward for a delegation is simply proportional to the difference in entries between the period where undelegation ended ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("f")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( f )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(") and where it began ("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("k")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("( k )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(").")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("w")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("a")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")])],1),a("mo",[t._v("=")]),a("mi",[t._v("x")]),a("mo",[t._v("(")]),a("mi",[t._v("E")]),a("mi",[t._v("n")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("msub",[a("mi",[t._v("y")]),a("mi",[t._v("f")])],1),a("mo",[t._v("−")]),a("mi",[t._v("E")]),a("mi",[t._v("n")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("msub",[a("mi",[t._v("y")]),a("mi",[t._v("k")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\text{reward} = x (Entry_f - Entry_k)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.036108em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("w")]),a("span",{staticClass:"mord mathrm"},[t._v("a")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("d")])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",[t._v("This raw reward can be scaled by additional factors, such as commissions or slashing penalties.")]),t._v(" "),a("h3",{attrs:{id:"state-efficient-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-efficient-implementation"}},[t._v("#")]),t._v(" State-Efficient Implementation")]),t._v(" "),a("p",[t._v("The F1 paper does not specify where entries are stored in state, but the understanding is that they are placed in independent state elements. This has the downside of requiring multiple Merkle branches to prove the inclusion of entries for e.g. fraud proofs. We can improve on this by leveraging a specific property of entries, namely that each entry is only used in exactly two cases:")]),t._v(" "),a("ol",[a("li",[t._v("To compute the next entry.")]),t._v(" "),a("li",[t._v("To compute the reward of a delegator.")])]),t._v(" "),a("p",[t._v("Intuitively, after having being used twice, an entry can be pruned from the state. We can make use of this by storing only the latest entry with its respective validator object, and a copy of the two entries each delegation needs with the delegation object. By storing entries directly with the objects that require them, state transitions can be statelessly validated without extra inclusion proofs.")])])}),[],!1,null,null,null);s.default=i.exports}}]);