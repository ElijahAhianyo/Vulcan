(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-702efc08"],{"0fea":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("b775"),n={user:"/api/user",role:"/api/role",service:"/api/service",permission:"/api/permission",permissionNoPager:"/api/permission/no-pager",orgTree:"/api/org/tree"};function o(e){return Object(a["b"])({url:n.role,method:"get",params:e})}},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function p(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function m(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var f=Object.prototype,h=f.hasOwnProperty,v=f.toString,b=u.Symbol,w=f.propertyIsEnumerable,g=b?b.isConcatSpreadable:void 0,y=Math.max;function S(e,t,r,a,n){var o=-1,i=e.length;r||(r=_),n||(n=[]);while(++o<i){var s=e[o];t>0&&r(s)?t>1?S(s,t-1,r,a,n):m(n,s):a||(n[n.length]=s)}return n}function C(e,t){return e=Object(e),x(e,t,(function(t,r){return r in e}))}function x(e,t,r){var a=-1,n=t.length,o={};while(++a<n){var i=t[a],s=e[i];r(s,i)&&(o[i]=s)}return o}function k(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=y(r.length-t,0),o=Array(n);while(++a<n)o[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=o,d(e,this,i)}}function _(e){return R(e)||j(e)||!!(g&&e&&e[g])}function q(e){if("string"==typeof e||P(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function j(e){return L(e)&&h.call(e,"callee")&&(!w.call(e,"callee")||v.call(e)==n)}var R=Array.isArray;function N(e){return null!=e&&I(e.length)&&!O(e)}function L(e){return F(e)&&N(e)}function O(e){var t=$(e)?v.call(e):"";return t==o||t==i}function I(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return!!e&&"object"==typeof e}function P(e){return"symbol"==typeof e||F(e)&&v.call(e)==s}var A=k((function(e,t){return null==e?{}:C(e,p(S(t,1),q))}));e.exports=A}).call(this,r("c8ba"))},de66:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:48}},[r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"资产查询"}},[r("a-input",{attrs:{placeholder:"查询语法:Target=tencent&domain=qq.com"},model:{value:e.queryParam.id,callback:function(t){e.$set(e.queryParam,"id",t)},expression:"queryParam.id"}})],1)],1),r("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[r("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("扫描结果查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryParam={}}}},[e._v("重置")])],1)])],1)],1)],1),r("s-table",{ref:"table",attrs:{size:"default",rowKey:"key",columns:e.columns,data:e.load,alert:e.options.alert,rowSelection:e.options.rowSelection,showPagination:"auto"},scopedSlots:e._u([{key:"Uid",fn:function(t,a,n){return r("span",{},[e._v("\n      "+e._s(n+1)+"\n    ")])}},{key:"hosts",fn:function(t){return r("span",{},[r("a",{attrs:{href:"http://"+t,target:"_blank"}},[e._v("\n      "+e._s(t)+"\n      ")])])}},{key:"server",fn:function(t){return r("span",{},[r("a-tag",{attrs:{color:"red"}},[e._v("\n      "+e._s(t)+"\n    ")])],1)}},{key:"port",fn:function(t){return r("span",{},[r("a-tag",{key:e.tag,attrs:{color:"#2db7f5"}},[e._v("\n      "+e._s(t)+"\n    ")])],1)}},{key:"path",fn:function(t){return r("span",{},[r("a-tag",{key:e.tag,attrs:{color:"green"}},[e._v("\n      "+e._s(t)+"\n    ")])],1)}},{key:"vuln",fn:function(t){return r("span",{},[r("a-tag",{key:e.tag,attrs:{color:"red"}},[e._v("\n      "+e._s(t)+"\n    ")])],1)}},{key:"host",fn:function(t){return r("span",{},[r("a-badge",{attrs:{status:e._f("statusTypeFilter")(t),text:e._f("statusFilter")(t)}})],1)}},{key:"description",fn:function(t){return r("span",{},[r("ellipsis",{attrs:{length:4,tooltip:""}},[e._v(e._s(t))])],1)}},{key:"action",fn:function(t,a){return r("span",{},[[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("删除")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.handleSub(a)}}},[e._v("详情")])]],2)}}])}),r("create-form",{ref:"createModal",on:{ok:e.handleOk}}),r("step-by-step-modal",{ref:"modal",on:{ok:e.handleOk}})],1)},n=[],o=r("c1df"),i=r.n(o),s=r("2af9"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"分步对话框",width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-steps",{style:{marginBottom:"28px"},attrs:{current:e.currentStep,size:"small"}},[r("a-step",{attrs:{title:"基本信息"}}),r("a-step",{attrs:{title:"配置规则属性"}}),r("a-step",{attrs:{title:"设定调度周期"}})],1),r("a-form",{attrs:{form:e.form}},[r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.currentStep,expression:"currentStep === 0"}]},[r("a-form-item",{attrs:{label:"规则名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0}]}],expression:"['name', {rules: [{required: true}]}]"}]})],1),r("a-form-item",{attrs:{label:"规则描述",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{rules:[{required:!0}]}],expression:"['desc', {rules: [{required: true}]}]"}],attrs:{rows:4}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.currentStep,expression:"currentStep === 1"}]},[r("a-form-item",{attrs:{label:"监控对象",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["target",{initialValue:0,rules:[{required:!0}]}],expression:"['target', {initialValue: 0, rules: [{required: true}]}]"}],staticStyle:{width:"100%"}},[r("a-select-option",{attrs:{value:0}},[e._v("表一")]),r("a-select-option",{attrs:{value:1}},[e._v("表二")])],1)],1),r("a-form-item",{attrs:{label:"规则模板",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["template",{initialValue:0,rules:[{required:!0}]}],expression:"['template', { initialValue: 0, rules: [{required: true}]}]"}],staticStyle:{width:"100%"}},[r("a-select-option",{attrs:{value:0}},[e._v("规则模板一")]),r("a-select-option",{attrs:{value:1}},[e._v("规则模板二")])],1)],1),r("a-form-item",{attrs:{label:"规则类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:0,rules:[{required:!0}]}],expression:"['type', {initialValue: 0, rules: [{required: true}]}]"}],staticStyle:{width:"100%"}},[r("a-radio",{attrs:{value:0}},[e._v("强")]),r("a-radio",{attrs:{value:1}},[e._v("弱")])],1)],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.currentStep,expression:"currentStep === 2"}]},[r("a-form-item",{attrs:{label:"开始时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["time",{rules:[{type:"object",required:!0,message:"Please select time!"}]}],expression:"['time', {rules: [{ type: 'object', required: true, message: 'Please select time!' }]}]"}],staticStyle:{width:"100%"}})],1),r("a-form-item",{attrs:{label:"调度周期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["frequency",{initialValue:"month",rules:[{required:!0}]}],expression:"['frequency', { initialValue: 'month', rules: [{required: true}]}]"}],staticStyle:{width:"100%"}},[r("a-select-option",{attrs:{value:"month"}},[e._v("月")]),r("a-select-option",{attrs:{value:"week"}},[e._v("周")])],1)],1)],1)])],1),r("template",{slot:"footer"},[e.currentStep>0?r("a-button",{key:"back",style:{float:"left"},on:{click:e.backward}},[e._v("上一步")]):e._e(),r("a-button",{key:"cancel",on:{click:e.handleCancel}},[e._v("取消")]),r("a-button",{key:"forward",attrs:{loading:e.confirmLoading,type:"primary"},on:{click:function(t){return e.handleNext(e.currentStep)}}},[e._v(e._s(2===e.currentStep?"完成":"下一步"))])],1)],2)},c=[],u=r("88bc"),d=r.n(u),p=[["name","desc"],["target","template","type"],["time","frequency"]],m={name:"StepByStepModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,currentStep:0,mdl:{},form:this.$form.createForm(this)}},methods:{edit:function(e){this.visible=!0;var t=this.form.setFieldsValue;this.$nextTick((function(){t(d()(e,[]))}))},handleNext:function(e){var t=this,r=this.form.validateFields,a=e+1;a<=2?r(p[this.currentStep],(function(e,r){e||(t.currentStep=a)})):(this.confirmLoading=!0,r((function(e,r){e?t.confirmLoading=!1:setTimeout((function(){t.confirmLoading=!1,t.$emit("ok",r)}),1500)})))},backward:function(){this.currentStep--},handleCancel:function(){this.visible=!1,this.currentStep=0}}},f=m,h=r("2877"),v=Object(h["a"])(f,l,c,!1,null,null,null),b=v.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"目标资产扫描",width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"项目名称:",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["project name",{rules:[{required:!0}]}],expression:"['project name', { rules: [{ required: true}] }]"}],attrs:{placeholder:"IceWing"}})],1),r("a-form-item",{attrs:{label:"Root Domain:",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["domain",{rules:[{required:!0}]}],expression:"['domain', { rules: [{ required: true}] }] "}],attrs:{placeholder:"qq.com"}})],1)],1)],1)],1)},g=[],y={data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this)}},methods:{add:function(){this.visible=!0},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.axios.post("/api/common/subdomain",r).then((function(t){e.$message.success("新增成功"),setTimeout((function(){e.visible=!1,e.confirmLoading=!1}),1500)}))}))},handleCancel:function(){this.visible=!1}}},S=y,C=Object(h["a"])(S,w,g,!1,null,null,null),x=C.exports,k=r("0fea"),_={name:"VulnScanResult",components:{STable:s["f"],Ellipsis:s["c"],CreateForm:x,StepByStepModal:b},data:function(){var e=this;return{mdl:{},subdomainList:[],advanced:!1,queryParam:{},columns:[{title:"UID",scopedSlots:{customRender:"Uid"}},{title:"任务名称",dataIndex:"projectid"},{title:"Host",dataIndex:"host",scopedSlots:{customRender:"hosts"}},{title:"IP",dataIndex:"ip"},{title:"指纹识别",dataIndex:"finger",scopedSlots:{customRender:"server"}},{title:"Title",dataIndex:"title"},{title:"敏感路径",dataIndex:"path",scopedSlots:{customRender:"path"}},{title:"Port",key:"port",dataIndex:"port",scopedSlots:{customRender:"port"}},{title:"Links",dataIndex:"linkscount"},{title:"漏洞统计",dataIndex:"vuln",scopedSlots:{customRender:"vuln"}},{title:"单位名称",dataIndex:"company_name",scopedSlots:{customRender:"status"}},{title:"Date",dataIndex:"date",sorter:!0},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],load:function(t){var r="/api/common/vulnlist";return e.axios.get(r+"?pageNo="+t["pageNo"]+"&pageSize="+t["pageSize"]).then((function(t){var r=t["status"];if("success"===r["status"])return e.$message.success("查询成功",4),t["result"];e.$message.error(r["message"])}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1}},filters:{statusFilter:function(e){return statusMap[e].text},statusTypeFilter:function(e){return statusMap[e].status}},created:function(){this.tableOption(),Object(k["a"])({t:new Date})},methods:{onChange:function(e){},tableOption:function(){var e=this;this.optionAlertShow?(this.options={alert:!1,rowSelection:null},this.optionAlertShow=!1):(this.options={alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange,getCheckboxProps:function(e){return{props:{disabled:"No 2"===e.no,name:e.no}}}}},this.optionAlertShow=!0)},handleEdit:function(e){this.$refs.modal.edit(e)},handleSub:function(e){0!==e.status?this.$message.info("".concat(e.no," 订阅成功")):this.$message.error("".concat(e.no," 订阅失败，规则已关闭"))},handleOk:function(){this.$refs.table.refresh()},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:i()(new Date)}}}},q=_,j=Object(h["a"])(q,a,n,!1,null,null,null);t["default"]=j.exports}}]);