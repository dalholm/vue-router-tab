(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{292:function(e,o,t){"use strict";t.r(o);var n=t(19),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),t("p",[e._v("Problems that we came across and solutions to them. If you have any better ideas, please feel free to propose a PR or issue.")]),e._v(" "),t("ol",[t("li",[t("p",[t("code",[e._v("<keep-alive>")]),e._v(" only support cache by component's "),t("code",[e._v("name")]),e._v(", so that it couldn't provide accurate control responding to route.")]),e._v(" "),t("p",[e._v("Developed "),t("code",[e._v("<router-alive>")]),e._v(", a router version of "),t("code",[e._v("<keep-alive>")]),e._v(", to handle cache control via route.")])]),e._v(" "),t("li",[t("p",[e._v("How to force reload tab content:")]),e._v(" "),t("ol",[t("li",[e._v("Destroy content instance")]),e._v(" "),t("li",[e._v("Hide "),t("code",[e._v("<router-view>")]),e._v(" by "),t("code",[e._v("v-if")]),e._v(" and show it after "),t("code",[e._v("nextTick")])])])]),e._v(" "),t("li",[t("p",[e._v("Components wouldn't re-render with Webpack HMR in reason of caching:")]),e._v(" "),t("p",[e._v("Record "),t("code",[e._v("vnode.componentOptions.Ctor.cid")]),e._v(" in render method. If it differs from the last recorded value, tab content instance will be destroyed and re-rendered.")])]),e._v(" "),t("li",[t("p",[e._v("Tab content displays in blank while rapidly switching among tabs:")]),e._v(" "),t("p",[e._v("Cause: Before the transition of old pages get completed, new pages pop up and step ahead the mount method.")]),e._v(" "),t("p",[e._v("Solution: After route change, force reload tab content if current "),t("code",[e._v("nodeType")]),e._v(" equals 8 (which is COMMENT_NODE).")])]),e._v(" "),t("li",[t("p",[e._v("iframe tab gets reloaded on switching：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Extract "),t("code",[e._v("<iframe>")]),e._v(" to outer layer of "),t("code",[e._v("<router-view>")]),e._v(", and show/hide it via "),t("code",[e._v("v-show")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Create a separate iframe route component, and manage "),t("code",[e._v("<iframe>")]),e._v(" dom element in lifecycle hook methods, i.e., add, show, hide and remove.")])])])]),e._v(" "),t("li",[t("p",[e._v("js bundle size gets too big：")]),e._v(" "),t("p",[e._v("When building as lib, set "),t("code",[e._v("useBuiltIns")]),e._v(" to "),t("code",[e._v("false")]),e._v(" in "),t("code",[e._v("babel.config.js")]),e._v(", which means not including Polyfill in final bundle.")])])])])}),[],!1,null,null,null);o.default=a.exports}}]);