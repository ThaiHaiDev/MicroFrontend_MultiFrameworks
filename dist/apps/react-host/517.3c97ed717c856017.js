/*! For license information please see 517.3c97ed717c856017.js.LICENSE.txt */
(self.webpackChunkreact_host=self.webpackChunkreact_host||[]).push([[517],{5120:(e,t,r)=>{r.d(t,{of:()=>o});var s=r(4652),n=r(9184);function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=(0,s.yG)(e);return(0,n.D)(e,r)}},3705:(e,t,r)=>{r.d(t,{b:()=>o});var s=r(2355),n=r(9126);function o(e,t){return(0,n.m)(t)?(0,s.z)(e,t,1):(0,s.z)(e,1)}},9136:(e,t,r)=>{r.d(t,{d:()=>o});var s=r(1118),n=r(7394);function o(e){return(0,s.e)((function(t,r){var s=!1;t.subscribe((0,n.x)(r,(function(e){s=!0,r.next(e)}),(function(){s||r.next(e),r.complete()})))}))}},9054:(e,t,r)=>{r.d(t,{h:()=>o});var s=r(1118),n=r(7394);function o(e,t){return(0,s.e)((function(r,s){var o=0;r.subscribe((0,n.x)(s,(function(r){return e.call(t,r,o++)&&s.next(r)})))}))}},705:(e,t,r)=>{r.d(t,{x:()=>n});var s=r(1118);function n(e){return(0,s.e)((function(t,r){try{t.subscribe(r)}finally{r.add(e)}}))}},1176:(e,t,r)=>{r.d(t,{P:()=>l});var s=r(7465),n=r(9054),o=r(6718),a=r(9136),i=r(5663),c=r(9676);function l(e,t){var r=arguments.length>=2;return function(l){return l.pipe(e?(0,n.h)((function(t,r){return e(t,r,l)})):c.y,(0,o.q)(1),r?(0,a.d)(t):(0,i.T)((function(){return new s.K})))}}},6718:(e,t,r)=>{r.d(t,{q:()=>a});var s=r(20),n=r(1118),o=r(7394);function a(e){return e<=0?function(){return s.E}:(0,n.e)((function(t,r){var s=0;t.subscribe((0,o.x)(r,(function(t){++s<=e&&(r.next(t),e<=s&&r.complete())})))}))}},1348:(e,t,r)=>{r.d(t,{b:()=>i});var s=r(9126),n=r(1118),o=r(7394),a=r(9676);function i(e,t,r){var i=(0,s.m)(e)||t||r?{next:e,error:t,complete:r}:e;return i?(0,n.e)((function(e,t){var r;null===(r=i.subscribe)||void 0===r||r.call(i);var s=!0;e.subscribe((0,o.x)(t,(function(e){var r;null===(r=i.next)||void 0===r||r.call(i,e),t.next(e)}),(function(){var e;s=!1,null===(e=i.complete)||void 0===e||e.call(i),t.complete()}),(function(e){var r;s=!1,null===(r=i.error)||void 0===r||r.call(i,e),t.error(e)}),(function(){var e,t;s&&(null===(e=i.unsubscribe)||void 0===e||e.call(i)),null===(t=i.finalize)||void 0===t||t.call(i)})))})):a.y}},5663:(e,t,r)=>{r.d(t,{T:()=>a});var s=r(7465),n=r(1118),o=r(7394);function a(e){return void 0===e&&(e=i),(0,n.e)((function(t,r){var s=!1;t.subscribe((0,o.x)(r,(function(e){s=!0,r.next(e)}),(function(){return s?r.complete():r.error(e())})))}))}function i(){return new s.K}},7465:(e,t,r)=>{r.d(t,{K:()=>s});var s=(0,r(5589).d)((function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}}))},6517:(e,t,r)=>{var s;r.r(t),r.d(t,{FetchBackend:()=>U,HTTP_INTERCEPTORS:()=>B,HttpBackend:()=>g,HttpClient:()=>A,HttpClientJsonpModule:()=>Pe,HttpClientModule:()=>je,HttpClientXsrfModule:()=>xe,HttpContext:()=>j,HttpContextToken:()=>x,HttpErrorResponse:()=>F,HttpEventType:()=>R,HttpFeatureKind:()=>me,HttpHandler:()=>f,HttpHeaderResponse:()=>H,HttpHeaders:()=>v,HttpParams:()=>C,HttpRequest:()=>D,HttpResponse:()=>M,HttpResponseBase:()=>S,HttpUrlEncodingCodec:()=>b,HttpXhrBackend:()=>ne,HttpXsrfTokenExtractor:()=>ue,JsonpClientBackend:()=>ee,JsonpInterceptor:()=>re,provideHttpClient:()=>fe,withFetch:()=>Ce,withInterceptors:()=>ge,withInterceptorsFromDi:()=>be,withJsonpSupport:()=>Ie,withNoXsrfProtection:()=>we,withRequestsMadeViaParent:()=>Ee,withXsrfConfiguration:()=>Te,ɵHttpInterceptingHandler:()=>W,ɵHttpInterceptorHandler:()=>W,ɵwithHttpTransferCache:()=>Se});var n=r(3294),o=r(5120),a=r(3845),i=r(9184),c=r(3705),l=r(9054),u=r(7984),d=r(705),p=r(2335),h=r(1348),m=r(1176),y=r(8149);class f{}class g{}class v{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach((e=>{const t=e.indexOf(":");if(t>0){const r=e.slice(0,t),s=r.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(n):this.headers.set(s,[n])}}))}:"undefined"!=typeof Headers&&e instanceof Headers?(this.headers=new Map,e.forEach(((e,t)=>{this.setHeaderEntries(t,e)}))):this.lazyInit=()=>{("undefined"==typeof ngDevMode||ngDevMode)&&function(e){for(const[t,r]of Object.entries(e))if("string"!=typeof r&&"number"!=typeof r&&!Array.isArray(r))throw new Error(`Unexpected value of the \`${t}\` header provided. Expecting either a string, a number or an array, but got: \`${r}\`.`)}(e),this.headers=new Map,Object.entries(e).forEach((([e,t])=>{this.setHeaderEntries(e,t)}))}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((e=>this.applyUpdate(e))),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach((t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))}))}clone(e){const t=new v;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter((e=>-1===n.indexOf(e))),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(e,t){const r=(Array.isArray(t)?t:[t]).map((e=>e.toString())),s=e.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach((t=>e(this.normalizedNames.get(t),this.headers.get(t))))}}class b{encodeKey(e){return I(e)}encodeValue(e){return I(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const T=/%(\d[a-f0-9])/gi,w={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function I(e){return encodeURIComponent(e).replace(T,((e,t)=>w[t]??e))}function E(e){return`${e}`}class C{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new b,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const r=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach((e=>{const s=e.indexOf("="),[n,o]=-1==s?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,s)),t.decodeValue(e.slice(s+1))],a=r.get(n)||[];a.push(o),r.set(n,a)})),r}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach((t=>{const r=e.fromObject[t],s=Array.isArray(r)?r.map(E):[E(r)];this.map.set(t,s)}))):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach((r=>{const s=e[r];Array.isArray(s)?s.forEach((e=>{t.push({param:r,value:e,op:"a"})})):t.push({param:r,value:s,op:"a"})})),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map((e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map((e=>t+"="+this.encoder.encodeValue(e))).join("&")})).filter((e=>""!==e)).join("&")}clone(e){const t=new C({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((e=>this.map.set(e,this.cloneFrom.map.get(e)))),this.updates.forEach((e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(E(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const r=t.indexOf(E(e.value));-1!==r&&t.splice(r,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}})),this.cloneFrom=this.updates=null)}}class x{constructor(e){this.defaultValue=e}}class j{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function P(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function k(e){return"undefined"!=typeof Blob&&e instanceof Blob}function N(e){return"undefined"!=typeof FormData&&e instanceof FormData}class D{constructor(e,t,r,s){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,n=s):n=r,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.context&&(this.context=n.context),n.params&&(this.params=n.params)),this.headers||(this.headers=new v),this.context||(this.context=new j),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const r=t.indexOf("?"),s=-1===r?"?":r<t.length-1?"&":"";this.urlWithParams=t+s+e}}else this.params=new C,this.urlWithParams=t}serializeBody(){return null===this.body?null:P(this.body)||k(this.body)||N(this.body)||(e=this.body,"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams)||"string"==typeof this.body?this.body:this.body instanceof C?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString();var e}detectContentTypeHeader(){return null===this.body||N(this.body)?null:k(this.body)?this.body.type||null:P(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof C?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,c=e.params||this.params;const l=e.context??this.context;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce(((t,r)=>t.set(r,e.setHeaders[r])),i)),e.setParams&&(c=Object.keys(e.setParams).reduce(((t,r)=>t.set(r,e.setParams[r])),c)),new D(t,r,n,{params:c,headers:i,context:l,reportProgress:a,responseType:s,withCredentials:o})}}var R;!function(e){e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User"}(R||(R={}));class S{constructor(e,t=200,r="OK"){this.headers=e.headers||new v,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class H extends S{constructor(e={}){super(e),this.type=R.ResponseHeader}clone(e={}){return new H({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class M extends S{constructor(e={}){super(e),this.type=R.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new M({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class F extends S{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function O(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}class A{constructor(e){this.handler=e}request(e,t,r={}){let s;if(e instanceof D)s=e;else{let n,o;n=r.headers instanceof v?r.headers:new v(r.headers),r.params&&(o=r.params instanceof C?r.params:new C({fromObject:r.params})),s=new D(e,t,void 0!==r.body?r.body:null,{headers:n,context:r.context,params:o,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const n=(0,o.of)(s).pipe((0,c.b)((e=>this.handler.handle(e))));if(e instanceof D||"events"===r.observe)return n;const a=n.pipe((0,l.h)((e=>e instanceof M)));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe((0,u.U)((e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return a.pipe((0,u.U)((e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return a.pipe((0,u.U)((e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));default:return a.pipe((0,u.U)((e=>e.body)))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new C).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,O(r,t))}post(e,t,r={}){return this.request("POST",e,O(r,t))}put(e,t,r={}){return this.request("PUT",e,O(r,t))}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:A,deps:[{token:f}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:A})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:A,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:f}]}});const V=/^\)\]\}',?\n/;function L(e){if(e.url)return e.url;const t="X-Request-URL".toLocaleLowerCase();return e.headers.get(t)}class U{constructor(){this.fetchImpl=(0,n.inject)(z,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,n.inject)(n.NgZone)}handle(e){return new a.y((t=>{const r=new AbortController;return this.doRequest(e,r.signal,t).then(q,(e=>t.error(new F({error:e})))),()=>r.abort()}))}async doRequest(e,t,r){const s=this.createRequestInit(e);let n;try{const o=this.fetchImpl(e.urlWithParams,{signal:t,...s});o.then(q,q),r.next({type:R.Sent}),n=await o}catch(t){return void r.error(new F({error:t,status:t.status??0,statusText:t.statusText,url:e.urlWithParams,headers:t.headers}))}const o=new v(n.headers),a=n.statusText,i=L(n)??e.urlWithParams;let c=n.status,l=null;if(e.reportProgress&&r.next(new H({headers:o,status:c,statusText:a,url:i})),n.body){const t=n.headers.get("content-length"),s=[],o=n.body.getReader();let a,i,c=0;const u="undefined"!=typeof Zone&&Zone.current;await this.ngZone.runOutsideAngular((async()=>{for(;;){const{done:n,value:l}=await o.read();if(n)break;if(s.push(l),c+=l.length,e.reportProgress){i="text"===e.responseType?(i??"")+(a??=new TextDecoder).decode(l,{stream:!0}):void 0;const s=()=>r.next({type:R.DownloadProgress,total:t?+t:void 0,loaded:c,partialText:i});u?u.run(s):s()}}}));const d=this.concatChunks(s,c);try{l=this.parseBody(e,d)}catch(t){return void r.error(new F({error:t,headers:new v(n.headers),status:n.status,statusText:n.statusText,url:L(n)??e.urlWithParams}))}}0===c&&(c=l?200:0),c>=200&&c<300?(r.next(new M({body:l,headers:o,status:c,statusText:a,url:i})),r.complete()):r.error(new F({error:l,headers:o,status:c,statusText:a,url:i}))}parseBody(e,t){switch(e.responseType){case"json":const e=(new TextDecoder).decode(t).replace(V,"");return""===e?null:JSON.parse(e);case"text":return(new TextDecoder).decode(t);case"blob":return new Blob([t]);case"arraybuffer":return t.buffer}}createRequestInit(e){const t={},r=e.withCredentials?"include":void 0;if(e.headers.forEach(((e,r)=>t[e]=r.join(","))),t.Accept??="application/json, text/plain, */*",!t["Content-Type"]){const r=e.detectContentTypeHeader();null!==r&&(t["Content-Type"]=r)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r}}concatChunks(e,t){const r=new Uint8Array(t);let s=0;for(const t of e)r.set(t,s),s+=t.length;return r}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:U,deps:[],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:U})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:U,decorators:[{type:n.Injectable}]});class z{}function q(){}function _(e,t){return t(e)}function J(e,t){return(r,s)=>t.intercept(r,{handle:t=>e(t,s)})}const B=new n.InjectionToken(ngDevMode?"HTTP_INTERCEPTORS":""),X=new n.InjectionToken(ngDevMode?"HTTP_INTERCEPTOR_FNS":""),K=new n.InjectionToken(ngDevMode?"HTTP_ROOT_INTERCEPTOR_FNS":"");function $(){let e=null;return(t,r)=>{if(null===e){const t=(0,n.inject)(B,{optional:!0})??[];e=t.reduceRight(J,_)}const s=(0,n.inject)(n["ɵInitialRenderPendingTasks"]),o=s.add();return e(t,r).pipe((0,d.x)((()=>s.remove(o))))}}class W extends f{constructor(e,t){super(),this.backend=e,this.injector=t,this.chain=null,this.pendingTasks=(0,n.inject)(n["ɵInitialRenderPendingTasks"])}handle(e){if(null===this.chain){const e=Array.from(new Set([...this.injector.get(X),...this.injector.get(K,[])]));this.chain=e.reduceRight(((e,t)=>function(e,t,r){return(s,n)=>r.runInContext((()=>t(s,(t=>e(t,n)))))}(e,t,this.injector)),_)}const t=this.pendingTasks.add();return this.chain(e,(e=>this.backend.handle(e))).pipe((0,d.x)((()=>this.pendingTasks.remove(t))))}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:W,deps:[{token:g},{token:n.EnvironmentInjector}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:W})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:W,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:g},{type:n.EnvironmentInjector}]}});let G,Z=0;class Y{}function Q(){return"object"==typeof window?window:{}}class ee{constructor(e,t){this.callbackMap=e,this.document=t,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+Z++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new a.y((t=>{const r=this.nextCallback(),s=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),n=this.document.createElement("script");n.src=s;let o=null,a=!1;this.callbackMap[r]=e=>{delete this.callbackMap[r],o=e,a=!0};const i=()=>{n.parentNode&&n.parentNode.removeChild(n),delete this.callbackMap[r]};return n.addEventListener("load",(e=>{this.resolvedPromise.then((()=>{i(),a?(t.next(new M({body:o,status:200,statusText:"OK",url:s})),t.complete()):t.error(new F({url:s,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))}))})),n.addEventListener("error",(e=>{i(),t.error(new F({error:e,status:0,statusText:"JSONP Error",url:s}))})),this.document.body.appendChild(n),t.next({type:R.Sent}),()=>{a||this.removeListeners(n),i()}}))}removeListeners(e){G||(G=this.document.implementation.createHTMLDocument()),G.adoptNode(e)}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:ee,deps:[{token:Y},{token:y.DOCUMENT}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:ee})}}function te(e,t){return"JSONP"===e.method?(0,n.inject)(ee).handle(e):t(e)}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:ee,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:Y},{type:void 0,decorators:[{type:n.Inject,args:[y.DOCUMENT]}]}]}});class re{constructor(e){this.injector=e}intercept(e,t){return this.injector.runInContext((()=>te(e,(e=>t.handle(e)))))}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:re,deps:[{token:n.EnvironmentInjector}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:re})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:re,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:n.EnvironmentInjector}]}});const se=/^\)\]\}',?\n/;class ne{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new n["ɵRuntimeError"](-2800,("undefined"==typeof ngDevMode||ngDevMode)&&"Cannot make a JSONP request without JSONP support. To fix the problem, either add the `withJsonpSupport()` call (if `provideHttpClient()` is used) or import the `HttpClientJsonpModule` in the root NgModule.");const t=this.xhrFactory;return(t.ɵloadImpl?(0,i.D)(t.ɵloadImpl()):(0,o.of)(null)).pipe((0,p.w)((()=>new a.y((r=>{const s=t.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach(((e,t)=>s.setRequestHeader(e,t.join(",")))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const n=e.serializeBody();let o=null;const a=()=>{if(null!==o)return o;const t=s.statusText||"OK",r=new v(s.getAllResponseHeaders()),n=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return o=new H({headers:r,status:s.status,statusText:t,url:n}),o},i=()=>{let{headers:t,status:n,statusText:o,url:i}=a(),c=null;204!==n&&(c=void 0===s.response?s.responseText:s.response),0===n&&(n=c?200:0);let l=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof c){const e=c;c=c.replace(se,"");try{c=""!==c?JSON.parse(c):null}catch(t){c=e,l&&(l=!1,c={error:t,text:c})}}l?(r.next(new M({body:c,headers:t,status:n,statusText:o,url:i||void 0})),r.complete()):r.error(new F({error:c,headers:t,status:n,statusText:o,url:i||void 0}))},c=e=>{const{url:t}=a(),n=new F({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:t||void 0});r.error(n)};let l=!1;const u=t=>{l||(r.next(a()),l=!0);let n={type:R.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(n.total=t.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),r.next(n)},d=e=>{let t={type:R.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),r.next(t)};return s.addEventListener("load",i),s.addEventListener("error",c),s.addEventListener("timeout",c),s.addEventListener("abort",c),e.reportProgress&&(s.addEventListener("progress",u),null!==n&&s.upload&&s.upload.addEventListener("progress",d)),s.send(n),r.next({type:R.Sent}),()=>{s.removeEventListener("error",c),s.removeEventListener("abort",c),s.removeEventListener("load",i),s.removeEventListener("timeout",c),e.reportProgress&&(s.removeEventListener("progress",u),null!==n&&s.upload&&s.upload.removeEventListener("progress",d)),s.readyState!==s.DONE&&s.abort()}})))))}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:ne,deps:[{token:y.XhrFactory}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:ne})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:ne,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:y.XhrFactory}]}});const oe=new n.InjectionToken("XSRF_ENABLED"),ae="XSRF-TOKEN",ie=new n.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>ae}),ce="X-XSRF-TOKEN",le=new n.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>ce});class ue{}class de{constructor(e,t,r){this.doc=e,this.platform=t,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,y["ɵparseCookieValue"])(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:de,deps:[{token:y.DOCUMENT},{token:n.PLATFORM_ID},{token:ie}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:de})}}function pe(e,t){const r=e.url.toLowerCase();if(!(0,n.inject)(oe)||"GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t(e);const s=(0,n.inject)(ue).getToken(),o=(0,n.inject)(le);return null==s||e.headers.has(o)||(e=e.clone({headers:e.headers.set(o,s)})),t(e)}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:de,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:void 0,decorators:[{type:n.Inject,args:[y.DOCUMENT]}]},{type:void 0,decorators:[{type:n.Inject,args:[n.PLATFORM_ID]}]},{type:void 0,decorators:[{type:n.Inject,args:[ie]}]}]}});class he{constructor(e){this.injector=e}intercept(e,t){return this.injector.runInContext((()=>pe(e,(e=>t.handle(e)))))}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:he,deps:[{token:n.EnvironmentInjector}],target:n["ɵɵFactoryTarget"].Injectable})}static{this.ɵprov=n["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:he})}}var me;function ye(e,t){return{ɵkind:e,ɵproviders:t}}function fe(...e){if(ngDevMode){const t=new Set(e.map((e=>e.ɵkind)));if(t.has(me.NoXsrfProtection)&&t.has(me.CustomXsrfConfiguration))throw new Error(ngDevMode?"Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.":"")}const t=[A,ne,W,{provide:f,useExisting:W},{provide:g,useExisting:ne},{provide:X,useValue:pe,multi:!0},{provide:oe,useValue:!0},{provide:ue,useClass:de}];for(const r of e)t.push(...r.ɵproviders);return(0,n.makeEnvironmentProviders)(t)}function ge(e){return ye(me.Interceptors,e.map((e=>({provide:X,useValue:e,multi:!0}))))}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:he,decorators:[{type:n.Injectable}],ctorParameters:function(){return[{type:n.EnvironmentInjector}]}}),function(e){e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch"}(me||(me={}));const ve=new n.InjectionToken("LEGACY_INTERCEPTOR_FN");function be(){return ye(me.LegacyInterceptors,[{provide:ve,useFactory:$},{provide:X,useExisting:ve,multi:!0}])}function Te({cookieName:e,headerName:t}){const r=[];return void 0!==e&&r.push({provide:ie,useValue:e}),void 0!==t&&r.push({provide:le,useValue:t}),ye(me.CustomXsrfConfiguration,r)}function we(){return ye(me.NoXsrfProtection,[{provide:oe,useValue:!1}])}function Ie(){return ye(me.JsonpSupport,[ee,{provide:Y,useFactory:Q},{provide:X,useValue:te,multi:!0}])}function Ee(){return ye(me.RequestsMadeViaParent,[{provide:g,useFactory:()=>{const e=(0,n.inject)(f,{skipSelf:!0,optional:!0});if(ngDevMode&&null===e)throw new Error("withRequestsMadeViaParent() can only be used when the parent injector also configures HttpClient");return e}}])}function Ce(){if(("undefined"==typeof ngDevMode||ngDevMode)&&"function"!=typeof fetch)throw new Error("The `withFetch` feature of HttpClient requires the `fetch` API to be available. If you run the code in a Node environment, make sure you use Node v18.10 or later.");return ye(me.Fetch,[U,{provide:g,useExisting:U}])}class xe{static disable(){return{ngModule:xe,providers:[we().ɵproviders]}}static withOptions(e={}){return{ngModule:xe,providers:Te(e).ɵproviders}}static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:xe,deps:[],target:n["ɵɵFactoryTarget"].NgModule})}static{this.ɵmod=n["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:xe})}static{this.ɵinj=n["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:xe,providers:[he,{provide:B,useExisting:he,multi:!0},{provide:ue,useClass:de},Te({cookieName:ae,headerName:ce}).ɵproviders,{provide:oe,useValue:!0}]})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:xe,decorators:[{type:n.NgModule,args:[{providers:[he,{provide:B,useExisting:he,multi:!0},{provide:ue,useClass:de},Te({cookieName:ae,headerName:ce}).ɵproviders,{provide:oe,useValue:!0}]}]}]});class je{static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:je,deps:[],target:n["ɵɵFactoryTarget"].NgModule})}static{this.ɵmod=n["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:je})}static{this.ɵinj=n["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:je,providers:[fe(be())]})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:je,decorators:[{type:n.NgModule,args:[{providers:[fe(be())]}]}]});class Pe{static{this.ɵfac=n["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:Pe,deps:[],target:n["ɵɵFactoryTarget"].NgModule})}static{this.ɵmod=n["ɵɵngDeclareNgModule"]({minVersion:"14.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:Pe})}static{this.ɵinj=n["ɵɵngDeclareInjector"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:Pe,providers:[Ie().ɵproviders]})}}n["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"16.1.7",ngImport:s||(s=r.t(n,2)),type:Pe,decorators:[{type:n.NgModule,args:[{providers:[Ie().ɵproviders]}]}]});const ke=new n.InjectionToken(ngDevMode?"HTTP_TRANSFER_STATE_CACHE_STATE":""),Ne=["GET","HEAD"];function De(e,t){const{isCacheActive:r}=(0,n.inject)(ke);if(!r||!Ne.includes(e.method))return t(e);const s=(0,n.inject)(n.TransferState),a=function(e){const{params:t,method:r,responseType:s,url:o}=e,a=function(e){let t=0;for(const r of e)t=Math.imul(31,t)+r.charCodeAt(0)<<0;return t+=2147483648,t.toString()}(r+"."+s+"."+o+"?"+t.keys().sort().map((e=>`${e}=${t.getAll(e)}`)).join("&"));return(0,n.makeStateKey)(a)}(e),i=s.get(a,null);if(i){let e=i.body;switch(i.responseType){case"arraybuffer":e=(new TextEncoder).encode(i.body).buffer;break;case"blob":e=new Blob([i.body])}return(0,o.of)(new M({body:e,headers:new v(i.headers),status:i.status,statusText:i.statusText,url:i.url}))}return t(e).pipe((0,h.b)((t=>{t instanceof M&&s.set(a,{body:t.body,headers:Re(t.headers),status:t.status,statusText:t.statusText,url:t.url||"",responseType:e.responseType})})))}function Re(e){const t={};for(const r of e.keys()){const s=e.getAll(r);null!==s&&(t[r]=s)}return t}function Se(){return[{provide:ke,useFactory:()=>((0,n.inject)(n["ɵENABLED_SSR_FEATURES"]).add("httpcache"),{isCacheActive:!0})},{provide:K,useValue:De,multi:!0,deps:[n.TransferState,ke]},{provide:n.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const e=(0,n.inject)(n.ApplicationRef),t=(0,n.inject)(ke);return()=>{e.isStable.pipe((0,m.P)((e=>e))).toPromise().then((()=>{t.isCacheActive=!1}))}}}]}}}]);