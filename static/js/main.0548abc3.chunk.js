(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=n(1),i=n(9),u=n(3),s=n(2),d=n(4),f=n(6),b=n(5),p=function(e){return e.split("-").map(function(e){return parseInt(e)})},h=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleClick=function(t){e.setState({disabled:!0},function(){var n=p(t);e.props.handleClick(n)})},e.render=function(){var t=e.props.cell;return r.a.createElement("button",{className:"cell cell-".concat(t," ").concat(e.state.disabled?"disabled":""),onClick:function(){return e.handleClick(t)},disabled:e.state.disabled},e.props.children)},e.state={disabled:!1},e}return Object(d.a)(t,e),t}(a.Component),v=function e(){var t=this;Object(l.a)(this,e),this.movePlayer=function(e,n,a,r){t.board[e][n]=a,"function"===typeof r&&r()},this.getCell=function(e,n){return t.board[e][n]},this.getOpenCells=function(){return t.board.reduce(function(e,n,a){for(var r=0;r<n.length;r++)0===t.board[a][r]&&e.push([a,r]);return e},[])},this.board=[];for(var n=0;n<3;n++){for(var a=[],r=0;r<3;r++)a.push(0);this.board.push(a)}},m=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).nextPlayer=function(){return 1===e.state.player?2:1},e.playerMove=function(){e.setState({player:e.nextPlayer()},e.aiMove)},e.aiMove=function(){var t=e.board.getOpenCells();if(t[0]){var n=Object(f.a)(t[Math.floor(Math.random()*t.length)],2),a=n[0],r=n[1];e.board.movePlayer(a,r,e.state.player,e.forceUpdate.bind(Object(b.a)(Object(b.a)(e))))}},e.handleClick=function(t){var n=Object(f.a)(t,2),a=n[0],r=n[1];e.board.movePlayer(a,r,e.state.player,e.playerMove)},e.renderMove=function(t,n){var a=e.board.getCell;return r.a.createElement("div",{className:1===a(t,n)?"player1":2===a(t,n)?"player2":""})},e.renderCells=function(){return e.board.board.map(function(t,n){return t.map(function(t,a){var o="".concat(n,"-").concat(a);return r.a.createElement(h,{key:o,cell:o,handleClick:e.handleClick},e.renderMove(n,a))})})},e.render=function(){return r.a.createElement("div",{className:"grid"},e.renderCells())},e.state={player:1,gameOver:!1,winner:!1},e.board=new v,e}return Object(d.a)(t,e),t}(a.Component),y=(n(16),function(){return r.a.createElement("div",{className:"title-container"},r.a.createElement("h2",null,"Tic Tac Toe!"))}),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(y,null),r.a.createElement(m,null))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="Tic Tac Toe!"}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.0548abc3.chunk.js.map