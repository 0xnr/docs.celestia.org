(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{594:function(s,t,a){"use strict";a.r(t);var e=a(0),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"block-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-rewards"}},[s._v("#")]),s._v(" Block Rewards")]),s._v(" "),a("p",[s._v("Block rewards scale with the inverse square root of the total validating stake. This gives us a nice property: as the total validating stake decreases, returns per validator increases. This encourages additional validators to join and makes the system as a whole more robust even in the presence of secondary uses of the staking coin, e.g. being used as collateral in Decentralized Finance protocols.")]),s._v(" "),a("p",[s._v("Note that non-constant reward scaling opens up the system to "),a("a",{attrs:{href:"https://arxiv.org/abs/1811.00742",target:"_blank",rel:"noopener noreferrer"}},[s._v("gatekeeping attacks"),a("OutboundLink")],1),s._v(", whereby validators are incentivized to prevent new validators from joining the validator set to keep their returns high. This should not be an issue in practice in the same way as "),a("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=312668.0",target:"_blank",rel:"noopener noreferrer"}},[s._v("feather forks"),a("OutboundLink")],1),s._v(" are not an issue in practice, but is nonetheless a theoretical issue that is noted here.")]),s._v(" "),a("p",[s._v("The formula to calculate the reward per block uses the following symbols:")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("symbol")]),s._v(" "),a("th",[s._v("note")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("R")]),a("mi",[s._v("B")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("R_B")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.00773em"}},[s._v("R")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("td",[s._v("Rewards per block, in coins.")])]),s._v(" "),a("tr",[a("td",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("I")]),a("mi",[s._v("T")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("I_T")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("I")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07847em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("td",[s._v("Target annual issuance, in coins.")])]),s._v(" "),a("tr",[a("td",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("B")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("t_B")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.76508em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("td",[s._v("Block time, in seconds.")])]),s._v(" "),a("tr",[a("td",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("Y")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("t_Y")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.76508em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[s._v("Y")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("td",[s._v("Seconds per year.")])]),s._v(" "),a("tr",[a("td",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("S")]),a("mn",[s._v("0")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("S_0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("td",[s._v("Initial coin supply.")])]),s._v(" "),a("tr",[a("td",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("S")]),a("mi",[s._v("T")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("S_T")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("td",[s._v("Total staked coins.")])])])]),s._v(" "),a("p",[s._v("Note that for the seconds per year we use a fixed "),a("code",[s._v("31,536,000")]),s._v(", omitting leap seconds for simplicity.")]),s._v(" "),a("p",[s._v("The reward for a given block is thus only dependent on the validating stake, with remaining terms being constant:")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("R")]),a("mi",[s._v("B")])],1),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("S")]),a("mi",[s._v("T")])],1),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("msub",[a("mi",[s._v("I")]),a("mi",[s._v("T")])],1),a("mfrac",[a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("B")])],1)],1),a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("Y")])],1)],1)],1),a("mfrac",[a("mrow",[a("msqrt",[a("mrow",[a("msub",[a("mi",[s._v("S")]),a("mi",[s._v("T")])],1)],1)],1)],1),a("mrow",[a("msqrt",[a("mrow",[a("msub",[a("mi",[s._v("S")]),a("mn",[s._v("0")])],1)],1)],1)],1)],1),a("mo",[s._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[s._v("(")]),a("mfrac",[a("mrow",[a("msub",[a("mi",[s._v("I")]),a("mi",[s._v("T")])],1),a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("B")])],1)],1),a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("Y")])],1),a("msqrt",[a("mrow",[a("msub",[a("mi",[s._v("S")]),a("mn",[s._v("0")])],1)],1)],1)],1)],1),a("mo",{attrs:{fence:"true"}},[s._v(")")])],1),a("msqrt",[a("mrow",[a("msub",[a("mi",[s._v("S")]),a("mi",[s._v("T")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("R_B(S_T) = I_T \\frac{t_B}{t_Y} \\frac{\\sqrt{S_T}}{\\sqrt{S_0}} = \\left( \\frac{I_T t_B }{t_Y \\sqrt{S_0}} \\right) \\sqrt{S_T}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.5286650000000002em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.478695em","vertical-align":"-0.95003em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.00773em"}},[s._v("R")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("I")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07847em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[s._v("Y")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.7416650000000002em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"sqrt mord"},[a("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.011665000000000036em"}},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[s._v("√")])]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticStyle:{top:"-0.771665em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"sqrt mord"},[a("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.011665000000000036em"}},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[s._v("√")])]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticStyle:{top:"-0.771665em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[s._v("(")])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.7416650000000002em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[s._v("Y")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sqrt mord"},[a("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.011665000000000036em"}},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[s._v("√")])]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticStyle:{top:"-0.771665em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("I")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07847em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[s._v(")")])])]),a("span",{staticClass:"sqrt mord"},[a("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.110545em"}},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[a("span",{staticClass:"delimsizing size1"},[s._v("√")])])]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticStyle:{top:"-0.920545em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[s._v("​")])]),s._v("​")])])])])])])])]),s._v(" "),a("p",[s._v("If 100% of the initial supply of coins stake, then exactly "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("I")]),a("mi",[s._v("T")])],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("( I_T)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("I")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07847em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" new coins will be issued per "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[s._v("(")]),a("mfrac",[a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("Y")])],1)],1),a("mrow",[a("msub",[a("mi",[s._v("t")]),a("mi",[s._v("B")])],1)],1)],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("( \\frac{t_Y}{t_B})")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8455559999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.295556em","vertical-align":"-0.44999999999999996em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord reset-textstyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.345em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.07142857142857144em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-scriptstyle scriptscriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.4149999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.07142857142857144em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-scriptstyle scriptscriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[s._v("Y")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" blocks. If fewer than 100% of the initial supply of coins stake, then fewer than "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("I")]),a("mi",[s._v("T")])],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("(I_T)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("I")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07847em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" new coins will be issued, but the decrease will be square-root rather than linear. If greater than 100% of the initial supply of coins stake (e.g. after some time, additional coins will be in circulation due to previous issuance), then greater than "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("I")]),a("mi",[s._v("T")])],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("( I_T)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("I")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.07847em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" new coins will be issued, but again scaling sub-linearly.")])])}),[],!1,null,null,null);t.default=i.exports}}]);