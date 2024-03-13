System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,a,o,c,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.Node,s=e.Vec3,l=e.Component}],execute:function(){var u,p,g,d,h;a._RF.push({},"01d81LCpH5A8JrcTag/GB3I","Background",void 0);var f=o.ccclass,y=o.property;e("Background",(u=f("Background"),p=y({type:c}),u((h=t((d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,r(t,"children",h,i(t)),t.gameIsPlaying=!0,t}n(t,e);var a=t.prototype;return a.start=function(){},a.update=function(e){if(this.gameIsPlaying)for(var t=0;t<this.children.length;t++)this.children[t].translate(new s(-t/.1*e,0,0))},a.setPlayingStatus=function(e){this.gameIsPlaying=e},t}(l)).prototype,"children",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=d))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/Block.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,c,a,p,l,s,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,c=t._decorator,a=t.SpriteFrame,p=t.Sprite,l=t.randomRangeInt,s=t.UITransform,u=t.Component}],execute:function(){var h,f,d,g,m;i._RF.push({},"b3afejQUalEF4puOVM3ELTM","Block",void 0);var y=c.ccclass,b=c.property;t("Block",(h=y("Block"),f=b({type:a}),h((m=e((g=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i))||this,n(e,"blockSprite",m,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){this.node.getComponent(p).spriteFrame=this.blockSprite[l(0,this.blockSprite.length)],this.node.getComponent(s).width=58,this.node.getComponent(s).height=49},i.update=function(t){},e}(u)).prototype,"blockSprite",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=g))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/Button.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r,c,i;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.NodeEventType,c=t.director,i=t.Component}],execute:function(){var s;n._RF.push({},"2b11a9giaRHXLSQETi5K7I2","Button",void 0);var u=o.ccclass;o.property,t("Button",u("Button")(s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){this.node.on(r.TOUCH_END,this.resetScene,this),this.node.active=!1},o.resetScene=function(){c.loadScene("scene")},o.update=function(t){},n}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Player.ts","./GroupObstacle.ts","./Background.ts","./Ground.ts"],(function(t){var e,i,a,s,n,l,r,o,c,u,g,p,h,b,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,a=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){n=t.cclegacy,l=t._decorator,r=t.Node,o=t.Prefab,c=t.instantiate,u=t.randomRangeInt,g=t.Component},function(t){p=t.Player},function(t){h=t.GroupObstacle},function(t){b=t.Background},function(t){y=t.Ground}],execute:function(){var d,v,f,m,C,O,P,H,k,A,I,G,N;n._RF.push({},"5cbcbltppVJi6VfJvR3H6fE","GameManager",void 0);var w=l.ccclass,z=l.property;t("GameManager",(d=w("GameManager"),v=z({type:r}),f=z({type:r}),m=z({type:o}),C=z({type:r}),O=z({type:r}),d((k=e((H=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n))||this,a(e,"ground",k,s(e)),a(e,"playerNode",A,s(e)),a(e,"groupObstacle",I,s(e)),a(e,"backgroundNode",G,s(e)),a(e,"restartButton",N,s(e)),e.baseY=0,e.listActiveObstacle=[],e.playerClass=void 0,e.backgroundClass=void 0,e.groundClass=void 0,e.poolObstacle=[],e.gameIsPlaying=!0,e}i(e,t);var n=e.prototype;return n.start=function(){var t=this;this.baseY=this.ground.getPosition().y+115,this.playerClass=this.playerNode.getComponent(p),this.backgroundClass=this.backgroundNode.getComponent(b),this.groundClass=this.ground.getComponent(y),setInterval((function(){t.generateObstacle()}),5e3)},n.getGroupObstacle=function(){return c(this.groupObstacle)},n.generateObstacle=function(){if(this.gameIsPlaying){var t=this.getGroupObstacle();t.setParent(this.node),t.getComponent(h).setHeight(u(2,4),this.baseY,this.poolObstacle),this.listActiveObstacle.push(t)}},n.update=function(t){for(var e=0;e<this.listActiveObstacle.length;e++){var i=this.listActiveObstacle[e],a=i.getComponent(h);if(a.setPlayingStatus(this.gameIsPlaying),this.gameIsPlaying){if(i.position.x+53+58<=this.playerNode.position.x&&0==a.isHaveCutHeight()){a.setHaveCutHeight(!0);var s=a.getHeight();this.playerClass.cutHeight(s)}if(i.position.x<=this.playerNode.position.x&&0==a.isHaveCheckCollision()){var n=a.getHeight();a.setHaveCheckCollision(!0),this.playerClass.getHeight()>=n?this.playerClass.cutTower(n,i):(this.playerClass.gameOver(),this.gameIsPlaying=!1,this.backgroundClass.setPlayingStatus(this.gameIsPlaying),this.restartButton.active=!0,this.playerClass.setPlayingStatus(this.gameIsPlaying),this.groundClass.setPlayingStatus(this.gameIsPlaying))}i.position.x<=-192&&(this.listActiveObstacle[e].active=!1)}}for(var l=this.listActiveObstacle.length-1;l>=0;l--)if(0==this.listActiveObstacle[l].active){var r=this.listActiveObstacle[l];this.listActiveObstacle.splice(l,1);for(var o=0;o<r.children.length;o++)"Obstacle"==r.children[o].name&&this.poolObstacle.push(r.children[o]);r.removeAllChildren()}},e}(g)).prototype,"ground",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=e(H.prototype,"playerNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=e(H.prototype,"groupObstacle",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=e(H.prototype,"backgroundNode",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=e(H.prototype,"restartButton",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=H))||P));n._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,r,e,o,a;return{setters:[function(n){t=n.inheritsLoose},function(n){r=n.cclegacy,e=n._decorator,o=n.Vec3,a=n.Component}],execute:function(){var s;r._RF.push({},"d7f15T4rWZJ1JZhD3LA2WYv","Ground",void 0);var c=e.ccclass;e.property,n("Ground",c("Ground")(s=function(n){function r(){for(var t,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(t=n.call.apply(n,[this].concat(e))||this).gameIsPlaying=!0,t}t(r,n);var e=r.prototype;return e.start=function(){},e.setPlayingStatus=function(n){this.gameIsPlaying=n},e.update=function(n){this.gameIsPlaying&&this.node.translate(new o(-50*n,0,0))},r}(a))||s);r._RF.pop()}}}));

System.register("chunks:///_virtual/GroupObstacle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,o,a,s,r,c,l,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,s=t._decorator,r=t.Prefab,c=t.instantiate,l=t.Vec3,u=t.Component}],execute:function(){var h,p,g,f,v;a._RF.push({},"d0afchXjMZEcbe+DkGZYDwW","GroupObstacle",void 0);var b=s.ccclass,C=s.property;t("GroupObstacle",(h=b("GroupObstacle"),p=C({type:r}),h((v=e((f=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a))||this,n(e,"prefabObstacle",v,o(e)),e.groupHeight=void 0,e.haveCheckCollision=!1,e.haveCutHeight=!1,e.gameIsPlaying=!0,e}i(e,t);var a=e.prototype;return a.setHeight=function(t,e,i){this.groupHeight=t;for(var n=0;n<t;n++){var o=void 0;(o=i.length>0?i.shift():c(this.prefabObstacle)).setParent(this.node),o.setPosition(new l(0,49*n,0))}this.node.setPosition(new l(192,e,0))},a.isHaveCutHeight=function(){return this.haveCutHeight},a.setHaveCutHeight=function(t){this.haveCutHeight=t},a.isHaveCheckCollision=function(){return this.haveCheckCollision},a.getHeight=function(){return this.groupHeight},a.setHaveCheckCollision=function(t){this.haveCheckCollision=t},a.start=function(){},a.setPlayingStatus=function(t){this.gameIsPlaying=t},a.update=function(t){this.gameIsPlaying&&this.node.translate(new l(-50*t,0,0))},e}(u)).prototype,"prefabObstacle",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=f))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/LayerLoop.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,e,n,r,c;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,n=o._decorator,r=o.Vec3,c=o.Component}],execute:function(){var i;e._RF.push({},"a40df1gyn9MNq04ePOj3und","LayerLoop",void 0);var s=n.ccclass;n.property,o("LayerLoop",s("LayerLoop")(i=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var n=e.prototype;return n.start=function(){},n.update=function(o){this.node.position.x<-928&&this.node.translate(new r(928,0,0))},e}(c))||i);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Block.ts","./Button.ts","./GameManager.ts","./Ground.ts","./GroupObstacle.ts","./LayerLoop.ts","./Player.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Player.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,s,r,o,a,l,h,p,u,c,g,y,v,f;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,a=t.CCFloat,l=t.Node,h=t.Prefab,p=t.SpriteFrame,u=t.input,c=t.Input,g=t.instantiate,y=t.Vec3,v=t.Sprite,f=t.Component}],execute:function(){var d,b,P,k,B,m,Y,w,H,A,S;r._RF.push({},"b06e5FjP+VMPptTGnsVzfXo","Player",void 0);var z=o.ccclass,F=o.property;t("Player",(d=z("Player"),b=F({type:a}),P=F({type:l}),k=F({type:h}),B=F({type:p}),d((w=i((Y=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return i=t.call.apply(t,[this].concat(r))||this,n(i,"gravity",w,s(i)),n(i,"ground",H,s(i)),n(i,"prefabBlock",A,s(i)),n(i,"deadSprite",S,s(i)),i.vY=0,i.baseY=0,i.hBlock=49,i.playerHeight=0,i.vX=0,i.listBlock=[],i.turnAngle=0,i.gameIsPlaying=!0,i}e(i,t);var r=i.prototype;return r.start=function(){this.baseY=this.ground.getPosition().y+115,u.on(c.EventType.TOUCH_START,this.spawnBlock,this)},r.spawnBlock=function(){if(this.gameIsPlaying){var t=g(this.prefabBlock);t.setParent(this.node.parent),t.setPosition(new y(0,this.baseY+this.playerHeight*this.hBlock,0)),this.playerHeight++,this.listBlock.push(t)}},r.setPlayingStatus=function(t){this.gameIsPlaying=t},r.cutTower=function(t,i){for(var e=0;e<t;e++){this.listBlock.shift().setParent(i,!0)}},r.cutHeight=function(t){this.playerHeight-=t},r.update=function(t){if(this.gameIsPlaying){this.vY-=this.gravity*t,this.node.translate(new y(0,this.vY*t,0)),this.vX=0;var i=this.node.getPosition();i.y<this.baseY+this.playerHeight*this.hBlock&&(i.y=this.baseY+this.playerHeight*this.hBlock);for(var e=0,n=this.listBlock.length-1;n>=0;n--){var s=this.listBlock[n],r=this.baseY+(this.playerHeight-1-e)*this.hBlock;s.position.y>r&&(s.translate(new y(0,this.vY*t,0)),s.position.y<r&&s.setPosition(new y(0,r,0))),e++}this.node.setPosition(i)}else this.vX-=this.gravity*t,this.vY-=this.gravity*t,this.vY<0&&(this.vY=0),this.turnAngle+=180*t,this.turnAngle>90&&(this.turnAngle=90),90!=this.turnAngle||this.node.position.y>-125?this.node.translate(new y(this.vX*t,this.vY,0)):this.node.position.y>-125&&this.node.translate(new y(this.vX*t,0,0)),this.node.setRotationFromEuler(0,0,this.turnAngle)},r.getHeight=function(){return this.playerHeight},r.gameOver=function(){this.node.getComponent(v).spriteFrame=this.deadSprite,this.vX=-150,this.vY=15},i}(f)).prototype,"gravity",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=i(Y.prototype,"ground",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=i(Y.prototype,"prefabBlock",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(Y.prototype,"deadSprite",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=Y))||m));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});