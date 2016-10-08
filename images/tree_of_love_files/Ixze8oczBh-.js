if (self.CavalryLogger) { CavalryLogger.start_js(["tcuh9"]); }

__d('CenteredContainer.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=(this.props.vertical?"_3bwv":'')+(this.props.horizontal?' '+"_3bww":''),n=c('React').Children.map(this.props.children,function(p){return (c('React').createElement('div',{className:"_3bwx"},p));}),o=c('joinClasses')(this.props.className,this.props.fullHeight?"_5bpf":'');return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:o}),c('React').createElement('div',{className:m},c('React').createElement('div',{className:"_3bwy"},n))));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fullHeight:k.bool,vertical:k.bool,horizontal:k.bool};l.defaultProps={fullHeight:false,vertical:false,horizontal:true};f.exports=l;}),null);
__d('EncryptedImg',['URI','XHRRequest','EncryptedImgUtils','getCrossOriginTransport'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={insertIntoStyleBackgroundImage:function m(n,o){var p=function(q,r){if(q)q.style.backgroundImage="url('"+r+"')";}.bind(undefined,o);h.load(n,p);},insertIntoDOM:function m(n,o){var p=function(q,r){if(q)q.setAttribute('src',r);}.bind(undefined,o);h.load(n,p);},load:function m(n,o){var p=arguments.length<=2||arguments[2]===undefined?true:arguments[2],q=new (c('URI'))(n),r=c('EncryptedImgUtils').extractKey(q),s=i.bind(undefined,r,o,p);s.includeHeaders=true;new (c('XHRRequest'))(q.toString()).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseType('arraybuffer').setResponseHandler(s).send();},dataUrlPrefix:function m(n){var o=arguments.length<=1||arguments[1]===undefined?32:arguments[1];if(!n.startsWith('data:'))return n;var p=n.indexOf(',');if(p<0||p>o)p=o;return n.slice(0,p);}};Object.assign(h,c('EncryptedImgUtils'));f.exports=h;function i(m,n,o,p,q){if(!m){n(l(p,k(q)));return;}var r=j(m),s=new Uint8Array(p),t=s.subarray(2,14);s=s.subarray(14,s.length);var u={name:'AES-GCM',iv:t,tagLength:128};window.crypto.subtle.importKey('raw',r,u,false,['encrypt','decrypt']).then(function(v){return window.crypto.subtle.decrypt(u,v,s);}).then(function(v){if(o){n(l(v,k(q)));}else n(v);})['catch'](function(){});}function j(m){if(typeof m=='string'){var n=new Uint8Array(Math.floor(m.length/2)),o=0;m.replace(/(..)/g,function(p){n[o++]=parseInt(p,16);});return n;}return null;}function k(m){var n='image/jpeg',o=m.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);if(o&&o.length>1)n=o[1];return n;}function l(m,n){var o=new Uint8Array(m),p='';for(var q=0,r=o.byteLength;q<r;++q)p+=String.fromCharCode(o[q]);return 'data:'+n+';base64,'+window.btoa(p);}}),null);
__d('getDOMImageSize',['EncryptedImg','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m){m.onload=null;m.onerror=null;m.onreadystatechange=null;m._callback=null;m._thisObj=null;m._srcStr=null;m.parentNode&&m.parentNode.removeChild(m);}function i(){var m=this;if(m._callback)m._callback.call(m._thisObj,m.naturalWidth||m.width,m.naturalHeight||m.height,m._srcStr);h(m);}function j(){var m=this;if(m.readyState==='complete')i.call(m);}function k(){var m=this;if(m._callback)m._callback.call(m._thisObj,0,0,m._srcStr);h(m);}function l(m,n,o){o=o||null;if(!m){n.call(o,0,0,'');return;}var p=document.body;if(!p){setTimeout(l.bind(this,m,n,o),500);return;}var q;if(typeof m==='string'){q=m;}else if(typeof m==='object')if(typeof m.width==='number'&&typeof m.height==='number'){if(typeof m.src==='string'){q=m.src;if(m.naturalWidth&&m.naturalHeight){n.call(o,m.naturalWidth,m.naturalHeight,q);return;}}if(typeof m.uri==='string'){q=m.uri;if(m.width&&m.height){n.call(o,m.width,m.height,q);return;}}}else if(m instanceof c('URI'))q=m.toString();if(!q){n(0,0,m);return;}var r=document.createElement('img');r.onreadystatechange=j;r.onload=i;r.onerror=k;r._callback=n;r._thisObj=o;r._srcStr=q;if(c('EncryptedImg').isEncrypted(q)){c('EncryptedImg').insertIntoDOM(q,r);}else r.src=q;r.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(/\s+/,' ');p.insertBefore(r,p.firstChild);}f.exports=l;}),null);
__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$CachedDOMImageSizePool1={};this.$CachedDOMImageSizePool2=j;this.$CachedDOMImageSizePool3=0;this.$CachedDOMImageSizePool4=i;this.$CachedDOMImageSizePool5=c('debounce')(this.$CachedDOMImageSizePool6,5000,this);this.$CachedDOMImageSizePool7={};this.$CachedDOMImageSizePool8={};}h.prototype.get=function(i,j,k){'use strict';if(!i){j.call(k,0,0,i);return;}var l=this.$CachedDOMImageSizePool1[i];if(l){l.lastAccessTime=Date.now();j.call(k,l.width,l.height,l.src);}else if(this.$CachedDOMImageSizePool7[i]){this.$CachedDOMImageSizePool7[i].push(j);this.$CachedDOMImageSizePool8[i].push(k);}else{this.$CachedDOMImageSizePool7[i]=[j];this.$CachedDOMImageSizePool8[i]=[k];c('getDOMImageSize')(i,this.$CachedDOMImageSizePool9,this);}};h.prototype.set=function(i,j,k){'use strict';if(this.$CachedDOMImageSizePool3>this.$CachedDOMImageSizePool4)this.$CachedDOMImageSizePool5();var l=this.$CachedDOMImageSizePool1;if(i&&!l[i]){var m={width:j,height:k,src:i,lastAccessTime:Date.now()};l[i]=m;this.$CachedDOMImageSizePool3++;}};h.prototype.$CachedDOMImageSizePool9=function(i,j,k){'use strict';this.set(k,i,j);var l=this.$CachedDOMImageSizePool7[k],m=this.$CachedDOMImageSizePool8[k];for(var n=0,o=l.length;n<o;n++)l[n].call(m[n],i,j,k);delete this.$CachedDOMImageSizePool7[k];delete this.$CachedDOMImageSizePool8[k];};h.prototype.$CachedDOMImageSizePool6=function(){'use strict';var i=Date.now(),j=this.$CachedDOMImageSizePool1,k=this.$CachedDOMImageSizePool3,l=this.$CachedDOMImageSizePool2;for(var m in j){var n=j[m];if(i-n.lastAccessTime>l){delete j[m];k--;}}this.$CachedDOMImageSizePool3=k;};f.exports=h;}),null);
__d('BackgroundImage.react',['cx','invariant','CachedDOMImageSizePool','Image.react','React','XUISpinner.react','joinClasses','clamp'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k='(-?(\\d+\\.)?\\d+(px|\\%))',l=new RegExp('^'+k+'?(\\s'+k+')?$','g'),m=new (c('CachedDOMImageSizePool'))(50,10*60*1000),n=c('React').createClass({displayName:'BackgroundImage',propTypes:{src:j.string,width:j.number.isRequired,height:j.number.isRequired,backgroundSize:j.oneOf(['contain','cover','containinside','coverinside']),loadingIndicatorStyle:j.oneOf(['none','large','small']),backgroundPosition:function o(p,q,r){var s=p[q];if(s){!(typeof s==='string')?i(0):void 0;!s.match(l)?i(0):void 0;}!(p.backgroundFocus==null||p.backgroundPosition==null)?i(0):void 0;},backgroundFocus:function o(p,q,r){var s=p[q];if(s){!(typeof s==='string')?i(0):void 0;!s.match(l)?i(0):void 0;}!(p.backgroundFocus==null||p.backgroundPosition==null)?i(0):void 0;},onImageLoad:j.func,optimizeResizeSpeed:j.bool,onContextMenu:j.func},getInitialState:function o(){return {imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:true};},getDefaultProps:function o(){return {optimizeResizeSpeed:false,loadingIndicatorStyle:'none'};},componentDidMount:function o(){this._resolveImageSize();},componentDidUpdate:function o(p){if(this.props.src!==this.state.imageSrc)this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:true},this._resolveImageSize);},_resolveImageSize:function o(){var p=this.state.imageSrc;if(p)m.get(p,this._onImageSizeResolved,this);},render:function o(){var p={width:this.props.width+'px',height:this.props.height+'px'},q=c('joinClasses')(this.props.className,"_5f0d");return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,q),style:babelHelpers['extends']({},this.props.style||{},p),onContextMenu:this.props.onContextMenu}),this._renderImage(),this._renderContent(),this._renderLoadingIndicator()));},_renderLoadingIndicator:function o(){if(!this.state.loading||this.props.loadingIndicatorStyle==='none')return null;return (c('React').createElement('div',{className:"_1qe- _5lar"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},c('React').createElement(c('XUISpinner.react'),{size:this.props.loadingIndicatorStyle})))));},_renderContent:function o(){if(this.props.children)return (c('React').createElement('div',{className:"_1qe-"},c('React').createElement('div',{className:"_1qe_"},c('React').createElement('div',{className:"_1qf0"},this.props.children))));},_renderImage:function o(){if(!this.state.imageWidth||!this.state.imageHeight)return;var p=this.props.width,q=this.props.height,r,s;switch(this.props.backgroundSize){case 'cover':r='cover';s=false;break;case 'coverinside':r='cover';s=true;break;case 'contain':r='contain';s=false;break;case 'containinside':r='contain';s=true;}var t=this.state.imageWidth,u=this.state.imageHeight,v=p/q,w=t/u;if(r==='contain')if((t>p||!s)&&w>=v){t=p;u=t/w;}else if(u>q||!s){u=q;t=u*w;}if(r==='cover')if((t>p||!s)&&w>=v){u=q;t=u*w;}else if(u>q||!s){t=p;u=t/w;}var x=this._getImageStyle(t,u);return (c('React').createElement(c('Image.react'),{alt:'',className:"_5i4g"+(this.props.optimizeResizeSpeed?' '+"_5sjv":''),style:x,src:this.state.imageSrc}));},_getImageStyle:function o(p,q){var r=['50%','50%'],s=this._getBackgroundPositionPxValue;if(this.props.backgroundPosition){r=this.props.backgroundPosition.split(' ');}else if(this.props.backgroundFocus){r=this.props.backgroundFocus.split(' ');s=this._getBackgroundFocusPxValue;}return {width:Math.round(p)+'px',height:Math.round(q)+'px',left:s(r[0],p,this.props.width),top:s(r[1]||r[0],q,this.props.height)};},_getBackgroundPositionPxValue:function o(p,q,r){var s=parseFloat(p),t=p.substr(s.toString().length);if(t==='px')return p;return Math.round((r-q)*(s/100))+'px';},_getBackgroundFocusPxValue:function o(p,q,r){var s=parseFloat(p),t=p.substr(s.toString().length);if(q<r)return '0';var u=t==='px'?s:Math.round(q*(s/100)),v=u-r/2;v=c('clamp')(v,0,q-r);return -v+'px';},_onImageSizeResolved:function o(p,q,r){if(!this.isMounted()||this.state.imageSrc!==r)return;var s=this.props.onImageLoad?this.props.onImageLoad.bind(null,p,q):null;this.setState({imageWidth:p,imageHeight:q,loading:false},s);}});f.exports=n;}),null);
__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('SimpleXUIDialog',['cx','DialogX','LayerAutoFocusReact','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=445,j={show:function k(l,m,n,o){var p=c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'});return this.showEx(l,m,p,n,o);},showConfirm:function k(l,m,n,o){var p=false,q=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:function s(){p=false;}}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',className:o&&o.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function s(){p=true;}}));function r(){n(p);}return this.showEx(l,m,q,r,o);},showEx:function k(l,m,n,o,p){p=p||{};var q=[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape'),c('LayerRefocusOnHide')];if(p.hideOnBlur!==false)q.push(c('LayerHideOnBlur'));if(p.useReactFocusBehavior)q.push(c('LayerAutoFocusReact'));var r={width:p.width||i,xui:true,addedBehaviors:q,causalElement:p.causalElement};if(m)m=c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:p.showCloseButton!==false},m);if(n)n=c('React').createElement(c('XUIDialogFooter.react'),{'data-testid':'simple_xui_dialog_footer',leftContent:p.leftContent},n);var s=c('React').createElement('div',null,m,c('React').createElement(c('XUIDialogBody.react'),null,l),n),t=new (c('DialogX'))(r,s);if(o)t.subscribe('hide',o);t.show();return t;}};f.exports=j;}),null);
__d('XUINotice.react',['ix','cx','fbt','Image.react','React','XUICloseButton.react','fbglyph','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes,n={notify:{altText:j._("Notice"),className:null,iconSrc:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/info-solid_20_fig-white.png")},success:{altText:j._("Success"),className:"_3qh4",iconSrc:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/checkmark_20_fig-white.png")},warn:{altText:j._("Warning"),className:"_585o",iconSrc:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/caution-solid_20_fig-white.png")},recommend:{altText:j._("Recommend"),className:"_1wpa",iconSrc:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/caution-solid_20_fig-white.png")},quiet:{altText:j._("Quiet"),className:"_5d83",iconSrc:h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/info-solid_20_fig-white.png")}};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;o.prototype.render=function(){var p=this.props,q=p.children,r=p.className,s=p.onDismiss,t=p.use,u=babelHelpers.objectWithoutProperties(p,['children','className','onDismiss','use']),v=n[t];r=c('joinClasses')("_585n",v.className,r);var w=null;if(s)w=c('React').createElement(c('XUICloseButton.react'),{className:"_585q",href:'#',onClick:s});var x="_585r"+(s?' '+"_2i-a":'')+(this.props.size==='medium'?' '+"_50f4":'')+(this.props.size==='small'?' '+"_50f3":'');return (c('React').createElement('div',babelHelpers['extends']({},u,{className:r}),c('React').createElement(c('Image.react'),{alt:v.altText,className:"_585p",src:v.iconSrc}),w,c('React').createElement('div',{className:x},q)));};function o(){k.apply(this,arguments);}o.propTypes={onDismiss:m.func,use:m.oneOf(Object.keys(n)).isRequired,size:m.oneOf(['medium','small']).isRequired};o.defaultProps={use:'notify',size:'medium'};f.exports=o;}),null);
__d('TypeaheadViewPropTypes',['React'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={ariaOwneeID:h.string,highlightedEntry:h.object,entries:h.array.isRequired,onSelect:h.func.isRequired,onHighlight:h.func,onRenderHighlight:h.func,role:h.string};f.exports=i;}),null);
__d('StoreAndPropBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function m(){return this.constructor.calculateState(this.props);},componentWillMount:function m(){!this.constructor.calculateState?h(0):void 0;this._recalculateStateID=null;var n=function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(n);}.bind(this));},componentWillReceiveProps:function m(n){this.setState(this.constructor.calculateState(n));},componentWillUnmount:function m(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;}),null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null;}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j);};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props);this.component=c('ReactDOM').render(k,this.container,j);};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null;};f.exports=h;}),null);
__d('TypeaheadViewItem',['React','ReactDOM','SearchableEntry'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={entry:h.instanceOf(c('SearchableEntry')).isRequired,highlighted:h.bool,role:h.string,selected:h.bool,onSelect:h.func.isRequired,onHighlight:h.func,onRenderHighlight:h.func},j={_onSelect:function l(m){this.props.onSelect(this.props.entry,m);},_onHighlight:function l(m){if(this.props.onHighlight)this.props.onHighlight(this.props.entry,m);},getDefaultProps:function l(){return {role:'option'};},shouldComponentUpdate:function l(m){return (this.props.entry.getUniqueID()!==m.entry.getUniqueID()||this.props.highlighted!==m.highlighted||this.props.selected!==m.selected);},componentDidMount:function l(){if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));},componentDidUpdate:function l(){if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));}};function k(l){var m,n;return n=m=function(){var o,p;o=babelHelpers.inherits(q,c('React').Component);p=o&&o.prototype;function q(){var r,s;'use strict';for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];return s=(r=p.constructor).call.apply(r,[this].concat(u)),this.$TypeaheadViewItem1=function(w){this.props.onSelect(this.props.entry,w);}.bind(this),this.$TypeaheadViewItem2=function(w){if(this.props.onHighlight)this.props.onHighlight(this.props.entry,w);}.bind(this),s;}q.prototype.shouldComponentUpdate=function(r){'use strict';return this.props.entry.getUniqueID()!==r.entry.getUniqueID()||this.props.highlighted!==r.highlighted||this.props.selected!==r.selected;};q.prototype.componentDidMount=function(){'use strict';if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));};q.prototype.componentDidUpdate=function(){'use strict';if(this.props.highlighted&&this.props.onRenderHighlight)this.props.onRenderHighlight(c('ReactDOM').findDOMNode(this));};q.prototype.render=function(){'use strict';return c('React').createElement(l,babelHelpers['extends']({},this.props,{onSelect:this.$TypeaheadViewItem1,onHighlight:this.$TypeaheadViewItem2}));};return q;}(),m.displayName='TypeaheadViewItem('+l.displayName+')',m.defaultProps={role:'option'},n;}f.exports={makeTypeaheadViewItem:k,Mixin:j,propTypes:i};}),null);