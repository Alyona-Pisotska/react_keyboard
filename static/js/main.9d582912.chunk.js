(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(4),o=n(5),r=n(7),i=n(6),u=n(1),l=n.n(u),d=n(0),m=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={message:"Nothing was pressed yet"},e.handleDocumentClick=function(t){e.handleDocumentMessage(t.key)},e.handleDocumentMessage=function(t){e.setState({message:"The last pressed key is [".concat(t,"]")})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentClick)}},{key:"render",value:function(){var e=this.state.message;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e})})}}]),n}(l.a.Component);n(13);c.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9d582912.chunk.js.map