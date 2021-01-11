(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1297:function(module,exports,__webpack_require__){"use strict";__webpack_require__(21),Object.defineProperty(exports,"__esModule",{value:!0}),exports.IAllProps=exports.Editor=void 0;var Editor_1=__webpack_require__(1298);Object.defineProperty(exports,"Editor",{enumerable:!0,get:function get(){return Editor_1.Editor}}),Object.defineProperty(exports,"IAllProps",{enumerable:!0,get:function get(){return Editor_1.IAllProps}});try{Editor.displayName="Editor",Editor.__docgenInfo={description:"",displayName:"Editor",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},onEditorChange:{defaultValue:null,description:"",name:"onEditorChange",required:!1,type:{name:"((a: string, editor: Editor) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},init:{defaultValue:null,description:"",name:"init",required:!1,type:{name:"(RawEditorSettings & { selector?: undefined; target?: undefined; })"}},outputFormat:{defaultValue:null,description:"",name:"outputFormat",required:!1,type:{name:'"html" | "text"'}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"string"}},cloudChannel:{defaultValue:{value:"5"},description:"",name:"cloudChannel",required:!1,type:{name:"string"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"string | string[]"}},toolbar:{defaultValue:null,description:"",name:"toolbar",required:!1,type:{name:"string | boolean | string[] | ToolbarGroup[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textareaName:{defaultValue:null,description:"",name:"textareaName",required:!1,type:{name:"string"}},tinymceScriptSrc:{defaultValue:null,description:"",name:"tinymceScriptSrc",required:!1,type:{name:"string"}},scriptLoading:{defaultValue:null,description:"",name:"scriptLoading",required:!1,type:{name:"{ async?: boolean; defer?: boolean | undefined; delay?: number | undefined; } | undefined"}},onBeforePaste:{defaultValue:null,description:"",name:"onBeforePaste",required:!1,type:{name:"EventHandler<Event>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"EventHandler<{ focusedEditor: Editor; }>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"EventHandler<MouseEvent>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"EventHandler<PointerEvent>"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"EventHandler<ClipboardEvent>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"EventHandler<ClipboardEvent>"}},onDblclick:{defaultValue:null,description:"",name:"onDblclick",required:!1,type:{name:"EventHandler<MouseEvent>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragDrop:{defaultValue:null,description:"",name:"onDragDrop",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragGesture:{defaultValue:null,description:"",name:"onDragGesture",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"EventHandler<DragEvent>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"EventHandler<DragEvent>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"EventHandler<{ blurredEditor: Editor; }>"}},onFocusIn:{defaultValue:null,description:"",name:"onFocusIn",required:!1,type:{name:"EventHandler<FocusEvent>"}},onFocusOut:{defaultValue:null,description:"",name:"onFocusOut",required:!1,type:{name:"EventHandler<FocusEvent>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"EventHandler<KeyboardEvent>"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"EventHandler<KeyboardEvent>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"EventHandler<KeyboardEvent>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"EventHandler<MouseEvent>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"EventHandler<ClipboardEvent>"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"EventHandler<Event>"}},onActivate:{defaultValue:null,description:"",name:"onActivate",required:!1,type:{name:"EventHandler<{ relatedTarget: Editor; }>"}},onAddUndo:{defaultValue:null,description:"",name:"onAddUndo",required:!1,type:{name:"EventHandler<AddUndoEvent>"}},onBeforeAddUndo:{defaultValue:null,description:"",name:"onBeforeAddUndo",required:!1,type:{name:"EventHandler<AddUndoEvent>"}},onBeforeExecCommand:{defaultValue:null,description:"",name:"onBeforeExecCommand",required:!1,type:{name:"EventHandler<ExecCommandEvent>"}},onBeforeGetContent:{defaultValue:null,description:"",name:"onBeforeGetContent",required:!1,type:{name:"EventHandler<GetContentEvent>"}},onBeforeRenderUI:{defaultValue:null,description:"",name:"onBeforeRenderUI",required:!1,type:{name:"EventHandler<unknown>"}},onBeforeSetContent:{defaultValue:null,description:"",name:"onBeforeSetContent",required:!1,type:{name:"EventHandler<SetContentEvent>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"EventHandler<unknown>"}},onClearUndos:{defaultValue:null,description:"",name:"onClearUndos",required:!1,type:{name:"EventHandler<{}>"}},onDeactivate:{defaultValue:null,description:"",name:"onDeactivate",required:!1,type:{name:"EventHandler<{ relatedTarget: Editor; }>"}},onDirty:{defaultValue:null,description:"",name:"onDirty",required:!1,type:{name:"EventHandler<unknown>"}},onExecCommand:{defaultValue:null,description:"",name:"onExecCommand",required:!1,type:{name:"EventHandler<ExecCommandEvent>"}},onGetContent:{defaultValue:null,description:"",name:"onGetContent",required:!1,type:{name:"EventHandler<GetContentEvent>"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"EventHandler<unknown>"}},onInit:{defaultValue:null,description:"",name:"onInit",required:!1,type:{name:"EventHandler<{}>"}},onLoadContent:{defaultValue:null,description:"",name:"onLoadContent",required:!1,type:{name:"EventHandler<{}>"}},onNodeChange:{defaultValue:null,description:"",name:"onNodeChange",required:!1,type:{name:"EventHandler<NodeChangeEvent>"}},onPostProcess:{defaultValue:null,description:"",name:"onPostProcess",required:!1,type:{name:"EventHandler<unknown>"}},onPostRender:{defaultValue:null,description:"",name:"onPostRender",required:!1,type:{name:"EventHandler<{}>"}},onPreProcess:{defaultValue:null,description:"",name:"onPreProcess",required:!1,type:{name:"EventHandler<unknown>"}},onProgressState:{defaultValue:null,description:"",name:"onProgressState",required:!1,type:{name:"EventHandler<ProgressStateEvent>"}},onRedo:{defaultValue:null,description:"",name:"onRedo",required:!1,type:{name:"EventHandler<UndoRedoEvent>"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"EventHandler<{}>"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"EventHandler<unknown>"}},onSaveContent:{defaultValue:null,description:"",name:"onSaveContent",required:!1,type:{name:"EventHandler<unknown>"}},onSetAttrib:{defaultValue:null,description:"",name:"onSetAttrib",required:!1,type:{name:"EventHandler<unknown>"}},onObjectResizeStart:{defaultValue:null,description:"",name:"onObjectResizeStart",required:!1,type:{name:"EventHandler<ObjectResizeEvent>"}},onObjectResized:{defaultValue:null,description:"",name:"onObjectResized",required:!1,type:{name:"EventHandler<ObjectResizeEvent>"}},onObjectSelected:{defaultValue:null,description:"",name:"onObjectSelected",required:!1,type:{name:"EventHandler<ObjectSelectedEvent>"}},onSetContent:{defaultValue:null,description:"",name:"onSetContent",required:!1,type:{name:"EventHandler<SetContentEvent>"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"EventHandler<unknown>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"EventHandler<unknown>"}},onUndo:{defaultValue:null,description:"",name:"onUndo",required:!1,type:{name:"EventHandler<UndoRedoEvent>"}},onVisualAid:{defaultValue:null,description:"",name:"onVisualAid",required:!1,type:{name:"EventHandler<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/ts/index.tsx#Editor"]={docgenInfo:Editor.__docgenInfo,name:"Editor",path:"src/main/ts/index.tsx#Editor"})}catch(__react_docgen_typescript_loader_error){}},1298:function(module,exports,__webpack_require__){"use strict";__webpack_require__(23),__webpack_require__(3),__webpack_require__(103),__webpack_require__(21),__webpack_require__(4),__webpack_require__(104),__webpack_require__(24);var _extendStatics,__extends=this&&this.__extends||(_extendStatics=function extendStatics(d,b){return(_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Editor=void 0;var React=__webpack_require__(12),ScriptLoader_1=__webpack_require__(1299),TinyMCE_1=__webpack_require__(1301),Utils_1=__webpack_require__(414),EditorPropTypes_1=__webpack_require__(415),Editor=function(_super){function Editor(props){var _a,_b,_c,_this=_super.call(this,props)||this;return _this.handleEditorChange=function(_evt){var _a,editor=_this.editor;if(editor){var newContent=editor.getContent({format:_this.props.outputFormat});newContent!==_this.currentContent&&(_this.currentContent=newContent,Utils_1.isFunction(_this.props.onEditorChange)&&_this.props.onEditorChange(null!==(_a=_this.currentContent)&&void 0!==_a?_a:"",editor))}},_this.handleInit=function(initEvent){var editor=_this.editor;editor&&(editor.setContent(_this.getInitialValue()),editor.undoManager.clear(),editor.undoManager.add(),editor.setDirty(!1),Utils_1.isFunction(_this.props.onEditorChange)&&editor.on("change keyup setcontent",_this.handleEditorChange),Utils_1.isFunction(_this.props.onInit)&&_this.props.onInit(initEvent,editor),Utils_1.bindHandlers(editor,{},_this.props,_this.boundHandlers))},_this.initialise=function(){var target=_this.elementRef.current;if(target){var tinymce=TinyMCE_1.getTinymce();if(!tinymce)throw new Error("tinymce should have been loaded into global scope");var finalInit=__assign(__assign({},_this.props.init),{selector:void 0,target:target,readonly:_this.props.disabled,inline:_this.inline,plugins:Utils_1.mergePlugins(_this.props.init&&_this.props.init.plugins,_this.props.plugins),toolbar:_this.props.toolbar||_this.props.init&&_this.props.init.toolbar,setup:function setup(editor){_this.editor=editor,editor.on("init",_this.handleInit),_this.props.init&&Utils_1.isFunction(_this.props.init.setup)&&_this.props.init.setup(editor)}});Utils_1.isTextarea(_this.elementRef.current)&&(_this.elementRef.current.style.visibility=""),tinymce.init(finalInit)}},_this.id=_this.props.id||Utils_1.uuid("tiny-react"),_this.elementRef=React.createRef(),_this.inline=null!==(_c=null!==(_a=_this.props.inline)&&void 0!==_a?_a:null===(_b=_this.props.init)||void 0===_b?void 0:_b.inline)&&void 0!==_c&&_c,_this.boundHandlers={},_this}return __extends(Editor,_super),Editor.prototype.componentDidUpdate=function(prevProps){var _a,_this=this;if(this.editor&&this.editor.initialized){if(Utils_1.bindHandlers(this.editor,prevProps,this.props,this.boundHandlers),this.currentContent=null!==(_a=this.currentContent)&&void 0!==_a?_a:this.editor.getContent({format:this.props.outputFormat}),"string"==typeof this.props.value&&this.props.value!==prevProps.value&&this.props.value!==this.currentContent){var localEditor_1=this.editor;localEditor_1.undoManager.transact((function(){return localEditor_1.setContent(_this.props.value)}))}"boolean"==typeof this.props.disabled&&this.props.disabled!==prevProps.disabled&&this.editor.setMode(this.props.disabled?"readonly":"design")}},Editor.prototype.componentDidMount=function(){var _a,_b,_c,_d,_e,_f;null!==TinyMCE_1.getTinymce()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&ScriptLoader_1.ScriptLoader.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(_b=null===(_a=this.props.scriptLoading)||void 0===_a?void 0:_a.async)&&void 0!==_b&&_b,null!==(_d=null===(_c=this.props.scriptLoading)||void 0===_c?void 0:_c.defer)&&void 0!==_d&&_d,null!==(_f=null===(_e=this.props.scriptLoading)||void 0===_e?void 0:_e.delay)&&void 0!==_f?_f:0,this.initialise)},Editor.prototype.componentWillUnmount=function(){var _this=this,editor=this.editor;editor&&(editor.off("init",this.handleInit),editor.initialized&&(editor.off("change keyup setcontent",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(eventName){editor.off(eventName,_this.boundHandlers[eventName])})),this.boundHandlers={}),editor.remove())},Editor.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},Editor.prototype.renderInline=function(){var _a=this.props.tagName,tagName=void 0===_a?"div":_a;return React.createElement(tagName,{ref:this.elementRef,id:this.id})},Editor.prototype.renderIframe=function(){return React.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},Editor.prototype.getScriptSrc=function(){if("string"==typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var channel=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+channel+"/tinymce.min.js"},Editor.prototype.getInitialValue=function(){return"string"==typeof this.props.value?this.props.value:"string"==typeof this.props.initialValue?this.props.initialValue:""},Editor.propTypes=EditorPropTypes_1.EditorPropTypes,Editor.defaultProps={cloudChannel:"5"},Editor}(React.Component);exports.Editor=Editor;try{Editor.displayName="Editor",Editor.__docgenInfo={description:"",displayName:"Editor",props:{apiKey:{defaultValue:null,description:"",name:"apiKey",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}},onEditorChange:{defaultValue:null,description:"",name:"onEditorChange",required:!1,type:{name:"((a: string, editor: Editor) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},init:{defaultValue:null,description:"",name:"init",required:!1,type:{name:"(RawEditorSettings & { selector?: undefined; target?: undefined; })"}},outputFormat:{defaultValue:null,description:"",name:"outputFormat",required:!1,type:{name:'"html" | "text"'}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"string"}},cloudChannel:{defaultValue:{value:"5"},description:"",name:"cloudChannel",required:!1,type:{name:"string"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"string | string[]"}},toolbar:{defaultValue:null,description:"",name:"toolbar",required:!1,type:{name:"string | boolean | string[] | ToolbarGroup[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textareaName:{defaultValue:null,description:"",name:"textareaName",required:!1,type:{name:"string"}},tinymceScriptSrc:{defaultValue:null,description:"",name:"tinymceScriptSrc",required:!1,type:{name:"string"}},scriptLoading:{defaultValue:null,description:"",name:"scriptLoading",required:!1,type:{name:"{ async?: boolean; defer?: boolean | undefined; delay?: number | undefined; } | undefined"}},onBeforePaste:{defaultValue:null,description:"",name:"onBeforePaste",required:!1,type:{name:"EventHandler<Event>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"EventHandler<{ focusedEditor: Editor; }>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"EventHandler<MouseEvent>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"EventHandler<PointerEvent>"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"EventHandler<ClipboardEvent>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"EventHandler<ClipboardEvent>"}},onDblclick:{defaultValue:null,description:"",name:"onDblclick",required:!1,type:{name:"EventHandler<MouseEvent>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragDrop:{defaultValue:null,description:"",name:"onDragDrop",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragGesture:{defaultValue:null,description:"",name:"onDragGesture",required:!1,type:{name:"EventHandler<DragEvent>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"EventHandler<DragEvent>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"EventHandler<DragEvent>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"EventHandler<{ blurredEditor: Editor; }>"}},onFocusIn:{defaultValue:null,description:"",name:"onFocusIn",required:!1,type:{name:"EventHandler<FocusEvent>"}},onFocusOut:{defaultValue:null,description:"",name:"onFocusOut",required:!1,type:{name:"EventHandler<FocusEvent>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"EventHandler<KeyboardEvent>"}},onKeyPress:{defaultValue:null,description:"",name:"onKeyPress",required:!1,type:{name:"EventHandler<KeyboardEvent>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"EventHandler<KeyboardEvent>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"EventHandler<MouseEvent>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"EventHandler<MouseEvent>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"EventHandler<ClipboardEvent>"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"EventHandler<Event>"}},onActivate:{defaultValue:null,description:"",name:"onActivate",required:!1,type:{name:"EventHandler<{ relatedTarget: Editor; }>"}},onAddUndo:{defaultValue:null,description:"",name:"onAddUndo",required:!1,type:{name:"EventHandler<AddUndoEvent>"}},onBeforeAddUndo:{defaultValue:null,description:"",name:"onBeforeAddUndo",required:!1,type:{name:"EventHandler<AddUndoEvent>"}},onBeforeExecCommand:{defaultValue:null,description:"",name:"onBeforeExecCommand",required:!1,type:{name:"EventHandler<ExecCommandEvent>"}},onBeforeGetContent:{defaultValue:null,description:"",name:"onBeforeGetContent",required:!1,type:{name:"EventHandler<GetContentEvent>"}},onBeforeRenderUI:{defaultValue:null,description:"",name:"onBeforeRenderUI",required:!1,type:{name:"EventHandler<unknown>"}},onBeforeSetContent:{defaultValue:null,description:"",name:"onBeforeSetContent",required:!1,type:{name:"EventHandler<SetContentEvent>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"EventHandler<unknown>"}},onClearUndos:{defaultValue:null,description:"",name:"onClearUndos",required:!1,type:{name:"EventHandler<{}>"}},onDeactivate:{defaultValue:null,description:"",name:"onDeactivate",required:!1,type:{name:"EventHandler<{ relatedTarget: Editor; }>"}},onDirty:{defaultValue:null,description:"",name:"onDirty",required:!1,type:{name:"EventHandler<unknown>"}},onExecCommand:{defaultValue:null,description:"",name:"onExecCommand",required:!1,type:{name:"EventHandler<ExecCommandEvent>"}},onGetContent:{defaultValue:null,description:"",name:"onGetContent",required:!1,type:{name:"EventHandler<GetContentEvent>"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"EventHandler<unknown>"}},onInit:{defaultValue:null,description:"",name:"onInit",required:!1,type:{name:"EventHandler<{}>"}},onLoadContent:{defaultValue:null,description:"",name:"onLoadContent",required:!1,type:{name:"EventHandler<{}>"}},onNodeChange:{defaultValue:null,description:"",name:"onNodeChange",required:!1,type:{name:"EventHandler<NodeChangeEvent>"}},onPostProcess:{defaultValue:null,description:"",name:"onPostProcess",required:!1,type:{name:"EventHandler<unknown>"}},onPostRender:{defaultValue:null,description:"",name:"onPostRender",required:!1,type:{name:"EventHandler<{}>"}},onPreProcess:{defaultValue:null,description:"",name:"onPreProcess",required:!1,type:{name:"EventHandler<unknown>"}},onProgressState:{defaultValue:null,description:"",name:"onProgressState",required:!1,type:{name:"EventHandler<ProgressStateEvent>"}},onRedo:{defaultValue:null,description:"",name:"onRedo",required:!1,type:{name:"EventHandler<UndoRedoEvent>"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"EventHandler<{}>"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"EventHandler<unknown>"}},onSaveContent:{defaultValue:null,description:"",name:"onSaveContent",required:!1,type:{name:"EventHandler<unknown>"}},onSetAttrib:{defaultValue:null,description:"",name:"onSetAttrib",required:!1,type:{name:"EventHandler<unknown>"}},onObjectResizeStart:{defaultValue:null,description:"",name:"onObjectResizeStart",required:!1,type:{name:"EventHandler<ObjectResizeEvent>"}},onObjectResized:{defaultValue:null,description:"",name:"onObjectResized",required:!1,type:{name:"EventHandler<ObjectResizeEvent>"}},onObjectSelected:{defaultValue:null,description:"",name:"onObjectSelected",required:!1,type:{name:"EventHandler<ObjectSelectedEvent>"}},onSetContent:{defaultValue:null,description:"",name:"onSetContent",required:!1,type:{name:"EventHandler<SetContentEvent>"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"EventHandler<unknown>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"EventHandler<unknown>"}},onUndo:{defaultValue:null,description:"",name:"onUndo",required:!1,type:{name:"EventHandler<UndoRedoEvent>"}},onVisualAid:{defaultValue:null,description:"",name:"onVisualAid",required:!1,type:{name:"EventHandler<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/ts/components/Editor.tsx#Editor"]={docgenInfo:Editor.__docgenInfo,name:"Editor",path:"src/main/ts/components/Editor.tsx#Editor"})}catch(__react_docgen_typescript_loader_error){}},1299:function(module,exports,__webpack_require__){"use strict";__webpack_require__(23),__webpack_require__(21),__webpack_require__(24),__webpack_require__(249),Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScriptLoader=void 0;var Utils_1=__webpack_require__(414),createState=function createState(){return{listeners:[],scriptId:Utils_1.uuid("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},ScriptLoader=function CreateScriptLoader(){var state=createState();return{load:function load(doc,url,async,defer,delay,callback){var scriptTagInjection=function scriptTagInjection(){return function injectScriptTag(scriptId,doc,url,async,defer,callback){var scriptTag=doc.createElement("script");scriptTag.referrerPolicy="origin",scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.src=url,scriptTag.async=async,scriptTag.defer=defer;scriptTag.addEventListener("load",(function handler(){scriptTag.removeEventListener("load",handler),callback()})),doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,async,defer,(function(){state.listeners.forEach((function(fn){return fn()})),state.scriptLoaded=!0}))};state.scriptLoaded?callback():(state.listeners.push(callback),state.scriptLoading||(state.scriptLoading=!0,delay>0?setTimeout(scriptTagInjection,delay):scriptTagInjection()))},reinitialize:function reinitialize(){state=createState()}}}();exports.ScriptLoader=ScriptLoader},1301:function(module,exports,__webpack_require__){"use strict";(function(global){__webpack_require__(21),Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTinymce=void 0;var getGlobal=function getGlobal(){return"undefined"!=typeof window?window:global};exports.getTinymce=function getTinymce(){var global=getGlobal();return global&&global.tinymce?global.tinymce:null}}).call(this,__webpack_require__(30))},414:function(module,exports,__webpack_require__){"use strict";__webpack_require__(13),__webpack_require__(56),__webpack_require__(23),__webpack_require__(25),__webpack_require__(1300),__webpack_require__(37),__webpack_require__(117),__webpack_require__(21),__webpack_require__(4),__webpack_require__(45),__webpack_require__(118),__webpack_require__(24);var __spreadArrays=this&&this.__spreadArrays||function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergePlugins=exports.isTextarea=exports.uuid=exports.bindHandlers2=exports.bindHandlers=exports.isFunction=void 0;var EditorPropTypes_1=__webpack_require__(415);exports.isFunction=function isFunction(x){return"function"==typeof x};var isEventProp=function isEventProp(name){return name in EditorPropTypes_1.eventPropTypes},eventAttrToEventName=function eventAttrToEventName(attrName){return attrName.substr(2)};exports.bindHandlers=function bindHandlers(editor,prevProps,props,boundHandlers){return exports.bindHandlers2(editor.on.bind(editor),editor.off.bind(editor),(function(handler){return function(e){return handler(e,editor)}}),prevProps,props,boundHandlers)};exports.bindHandlers2=function bindHandlers2(on,off,adapter,prevProps,props,boundHandlers){var prevEventKeys=Object.keys(prevProps).filter(isEventProp),currEventKeys=Object.keys(props).filter(isEventProp),removedKeys=prevEventKeys.filter((function(key){return void 0===props[key]})),changedKeys=currEventKeys.filter((function(key){return void 0!==prevProps[key]&&prevProps[key]!==props[key]})),addedKeys=currEventKeys.filter((function(key){return void 0===prevProps[key]}));__spreadArrays(removedKeys,changedKeys).forEach((function(key){var eventName=eventAttrToEventName(key),wrappedHandler=boundHandlers[eventName];off(eventName,wrappedHandler),delete boundHandlers[eventName]})),__spreadArrays(changedKeys,addedKeys).forEach((function(key){var handler=props[key];if(void 0!==handler){var eventName=eventAttrToEventName(key),wrappedHandler=adapter(handler);boundHandlers[eventName]=wrappedHandler,on(eventName,wrappedHandler)}}))};var unique=0;exports.uuid=function uuid(prefix){var time=Date.now();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)};exports.isTextarea=function isTextarea(element){return null!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function normalizePluginArray(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function mergePlugins(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))}},415:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(21);var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.EditorPropTypes=exports.eventPropTypes=void 0;var PropTypes=__webpack_require__(27);exports.eventPropTypes={onActivate:PropTypes.func,onAddUndo:PropTypes.func,onBeforeAddUndo:PropTypes.func,onBeforeExecCommand:PropTypes.func,onBeforeGetContent:PropTypes.func,onBeforeRenderUI:PropTypes.func,onBeforeSetContent:PropTypes.func,onBeforePaste:PropTypes.func,onBlur:PropTypes.func,onChange:PropTypes.func,onClearUndos:PropTypes.func,onClick:PropTypes.func,onContextMenu:PropTypes.func,onCopy:PropTypes.func,onCut:PropTypes.func,onDblclick:PropTypes.func,onDeactivate:PropTypes.func,onDirty:PropTypes.func,onDrag:PropTypes.func,onDragDrop:PropTypes.func,onDragEnd:PropTypes.func,onDragGesture:PropTypes.func,onDragOver:PropTypes.func,onDrop:PropTypes.func,onExecCommand:PropTypes.func,onFocus:PropTypes.func,onFocusIn:PropTypes.func,onFocusOut:PropTypes.func,onGetContent:PropTypes.func,onHide:PropTypes.func,onInit:PropTypes.func,onKeyDown:PropTypes.func,onKeyPress:PropTypes.func,onKeyUp:PropTypes.func,onLoadContent:PropTypes.func,onMouseDown:PropTypes.func,onMouseEnter:PropTypes.func,onMouseLeave:PropTypes.func,onMouseMove:PropTypes.func,onMouseOut:PropTypes.func,onMouseOver:PropTypes.func,onMouseUp:PropTypes.func,onNodeChange:PropTypes.func,onObjectResizeStart:PropTypes.func,onObjectResized:PropTypes.func,onObjectSelected:PropTypes.func,onPaste:PropTypes.func,onPostProcess:PropTypes.func,onPostRender:PropTypes.func,onPreProcess:PropTypes.func,onProgressState:PropTypes.func,onRedo:PropTypes.func,onRemove:PropTypes.func,onReset:PropTypes.func,onSaveContent:PropTypes.func,onSelectionChange:PropTypes.func,onSetAttrib:PropTypes.func,onSetContent:PropTypes.func,onShow:PropTypes.func,onSubmit:PropTypes.func,onUndo:PropTypes.func,onVisualAid:PropTypes.func},exports.EditorPropTypes=__assign({apiKey:PropTypes.string,id:PropTypes.string,inline:PropTypes.bool,init:PropTypes.object,initialValue:PropTypes.string,onEditorChange:PropTypes.func,outputFormat:PropTypes.oneOf(["html","text"]),value:PropTypes.string,tagName:PropTypes.string,cloudChannel:PropTypes.string,plugins:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),toolbar:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),disabled:PropTypes.bool,textareaName:PropTypes.string,tinymceScriptSrc:PropTypes.string,scriptLoading:PropTypes.shape({async:PropTypes.bool,defer:PropTypes.bool,delay:PropTypes.number})},exports.eventPropTypes)},430:function(module,exports,__webpack_require__){__webpack_require__(431),__webpack_require__(598),__webpack_require__(599),module.exports=__webpack_require__(787)},502:function(module,exports){},599:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(181)},787:function(module,exports,__webpack_require__){"use strict";__webpack_require__(1),__webpack_require__(56),__webpack_require__(23),__webpack_require__(46),__webpack_require__(21),__webpack_require__(788),__webpack_require__(789),__webpack_require__(4),__webpack_require__(24);var _clientApi=__webpack_require__(156),_clientLogger=__webpack_require__(119),_configFilename=__webpack_require__(790);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},790:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(181);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(792)}),module)}.call(this,__webpack_require__(791)(module))},792:function(module,exports,__webpack_require__){"use strict";(function(module){__webpack_require__(21),Object.defineProperty(exports,"__esModule",{value:!0});var addon_info_1=__webpack_require__(793),react_1=__webpack_require__(181),React=__webpack_require__(12),ts_1=__webpack_require__(1297),apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",sampleContent='\n<h2 style="text-align: center;">\n  TinyMCE provides a <span style="text-decoration: underline;"\n  >full-featured</span> rich text editing experience, and a featherweight download.\n</h2>\n<p style="text-align: center;">\n  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;"\n  >No matter what you\'re building, TinyMCE has got you covered.</span></span></strong>\n</p>';addon_info_1.setDefaults({inline:!0,source:!1,propTables:!1,header:!1});var ControlledInput=function ControlledInput(){var _a=React.useState(sampleContent),data=_a[0],setData=_a[1];return React.createElement("div",null,React.createElement(ts_1.Editor,{apiKey:apiKey,init:{height:300},value:data,onEditorChange:function onEditorChange(e){return setData(e)}}),React.createElement("textarea",{style:{width:"100%",height:"200px"},value:data,onChange:function onChange(e){return setData(e.target.value)}}))},Disable=function Disable(){var _a=React.useState(!0),disabled=_a[0],setDisabled=_a[1];return React.createElement("div",null,React.createElement("button",{onClick:function toggleDisabled(){return setDisabled((function(prev){return!prev}))}},disabled?"enable":"disable"),React.createElement(ts_1.Editor,{apiKey:apiKey,init:{height:300},initialValue:sampleContent,disabled:disabled}))};react_1.storiesOf("tinymce-react",module).add("Iframe editor",addon_info_1.withInfo({text:"Iframe editor."})((function(){return React.createElement(ts_1.Editor,{apiKey:apiKey,initialValue:sampleContent,init:{height:300}})}))).add("Inline editor",addon_info_1.withInfo({text:"Inline editor."})((function(){return React.createElement("div",{style:{paddingTop:"100px"}},React.createElement(ts_1.Editor,{apiKey:apiKey,initialValue:sampleContent,inline:!0}))}))).add("Controlled input",addon_info_1.withInfo({text:"Example of usage as as a controlled component."})((function(){return React.createElement(ControlledInput,null)}))).add("Disable button",addon_info_1.withInfo({text:"Example with setting the editor into readonly mode using the disabled prop."})((function(){return React.createElement(Disable,null)}))).add("cloudChannel set to 5-dev",addon_info_1.withInfo({text:"Editor with cloudChannel set to 5-dev, please make sure to reload page to load TinyMCE 5."})((function(){return React.createElement(ts_1.Editor,{apiKey:apiKey,cloudChannel:"5-dev",initialValue:sampleContent,init:{height:300}})})))}).call(this,__webpack_require__(111)(module))},796:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":376,"./nestedObjectAssign.js":376};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=796}},[[430,180,181]]]);
//# sourceMappingURL=main.d35637f470b0b3a9a20a.bundle.js.map