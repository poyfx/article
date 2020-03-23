var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[2,'||'],[[6],[[7],[3,'html']],[3,'nodes']],[[2,'?:'],[[2,'||'],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'name']],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'type']]],[1,1],[[6],[[7],[3,'nodes']],[3,'length']]]]])
Z([[7],[3,'showAnimation']])
Z([3,'__l'])
Z([3,'contain'])
Z([[7],[3,'imgMode']])
Z([[7],[3,'lazyLoad']])
Z([[7],[3,'loadVideo']])
Z([[2,'||'],[[6],[[7],[3,'html']],[3,'nodes']],[[2,'?:'],[[2,'||'],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'name']],[[6],[[6],[[7],[3,'html']],[1,0]],[3,'type']]],[[7],[3,'html']],[[7],[3,'nodes']]]])
Z([[2,'+'],[[2,'+'],[1,'display:block'],[[2,'?:'],[[7],[3,'showWithAnimation']],[1,'opacity:0;'],[1,'']]],[[2,'?:'],[[7],[3,'selectable']],[1,'user-select:text;-webkit-user-select:text'],[1,'']]])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'nodes']])
Z(z[0])
Z([[12],[[6],[[7],[3,'handler']],[3,'isContinue']],[[5],[[7],[3,'item']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'img']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'br']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'video']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'audio']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'name']],[1,'a']])
Z([3,'__e'])
Z([[4],[[5],[[2,'+'],[1,'a '],[[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'class']],[1,'']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'href']])
Z([3,'navigator-hover'])
Z([1,25])
Z([1,300])
Z([[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'style']])
Z([3,'__l'])
Z([[7],[3,'imgMode']])
Z([[7],[3,'lazyLoad']])
Z([[7],[3,'loadVideo']])
Z([[6],[[7],[3,'item']],[3,'children']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[19])
Z([[4],[[5],[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'name']],[1,' ']],[[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'attrs']],[3,'class']],[1,'']]]]])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[18])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'left'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([[4],[[5],[[2,'?:'],[[7],[3,'isIcons']],[1,'icons'],[1,'']]]])
Z([3,'32'])
Z([3,'closeempty'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'left'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'28'])
Z([3,'arrowleft'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'comment'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z(z[1])
Z(z[3])
Z([[7],[3,'stitles']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'consultation'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[7],[3,'stitles']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'displaybit'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z([3,'__e'])
Z([3,'left_save'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'28'])
Z([3,'arrowleft'])
Z([3,'2'])
Z([3,'authorinfo_article bgcf'])
Z(z[1])
Z([[7],[3,'html']])
Z([3,'3'])
Z(z[1])
Z([3,'小黑'])
Z([3,'4'])
Z([3,'personal_info'])
Z(z[1])
Z([3,'5'])
Z(z[1])
Z([3,'6'])
Z(z[1])
Z([3,'7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'edit bgcf'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z([3,'__e'])
Z([3,'left_save'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'28'])
Z([3,'arrowleft'])
Z([3,'2'])
Z(z[6])
Z([3,'edit_content_img flex'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'uploadTitle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'=='],[[7],[3,'src']],[1,'']])
Z(z[16])
Z([[2,'!=='],[[7],[3,'src']],[1,'']])
Z(z[1])
Z([[7],[3,'html']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'productInfo'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[7],[3,'stitles']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'displaybit'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z([3,'__e'])
Z([3,'left_save'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'28'])
Z([3,'arrowleft'])
Z([3,'2'])
Z(z[1])
Z([3,'小黑'])
Z([3,'3'])
Z(z[1])
Z([3,'4'])
Z(z[1])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'edits'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z([3,'__e'])
Z([3,'left_save'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'back']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'28'])
Z([3,'arrowleft'])
Z([3,'2'])
Z(z[1])
Z([3,'小黑'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tips'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z(z[1])
Z(z[3])
Z([[7],[3,'titles2']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'userinfo'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[7],[3,'stitles']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([[7],[3,'titles']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'visitor bgcf'])
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
Z(z[1])
Z(z[3])
Z([[7],[3,'titles2']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([[7],[3,'titles']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z([[7],[3,'titles']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./components/jyf-Parser/handler.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/jyf-Parser/handler.wxs'] = nv_require("p_./components/jyf-Parser/handler.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_textTag = ({nv_abbr:true,nv_b:true,nv_big:true,nv_code:true,nv_del:true,nv_em:true,nv_font:true,nv_i:true,nv_ins:true,nv_label:true,nv_mark:true,nv_q:true,nv_s:true,nv_small:true,nv_span:true,nv_strong:true,nv_u:true,});nv_module.nv_exports = ({nv_getStyle:(function (nv_style,nv_display){var nv_res = "";var nv_reg = nv_getRegExp("float\x5cs*:\x5cs*[^;]*","i");if (nv_reg.nv_test(nv_style))nv_res += nv_reg.nv_exec(nv_style)[(0)];;nv_reg = nv_getRegExp("margin[^;]*","gi");var nv_margin = nv_reg.nv_exec(nv_style);while(nv_margin){nv_res += (';' + nv_margin[(0)]);nv_margin = nv_reg.nv_exec(nv_style)};nv_reg = nv_getRegExp("display\x5cs*:\x5cs*([^;]*)","i");if (nv_reg.nv_test(nv_style) && nv_reg.nv_exec(nv_style)[(1)] != "flex")nv_res += (';' + nv_reg.nv_exec(nv_style)[(0)]); else nv_res += (';display:' + nv_display);nv_reg = nv_getRegExp("flex\x5cs*:[^;]*","i");if (nv_reg.nv_test(nv_style))nv_res += (';' + nv_reg.nv_exec(nv_style)[(0)]);;nv_reg = nv_getRegExp("[^;\x5cs]*width[^;]*","ig");var nv_width = nv_reg.nv_exec(nv_style);while(nv_width){nv_res += (';' + nv_width[(0)]);nv_width = nv_reg.nv_exec(nv_style)};return(nv_res)}),nv_setImgStyle:(function (nv_item,nv_imgMode,nv_imgLoad){if (nv_imgMode == "widthFix")nv_item.nv_attrs.nv_style += ";height:auto !important";;if (nv_getRegExp("[^-]width[^pev;]+").nv_test(";" + nv_item.nv_attrs.nv_style))nv_item.nv_attrs.nv_style += ";width:100%";;nv_item.nv_attrs.nv_style = nv_item.nv_attrs.nv_style.nv_replace(nv_getRegExp('margin[^;]*',"gi"),"");if (!nv_imgLoad){delete(nv_item.nv_attrs.nv_src);nv_item.nv_attrs.nv_style += ";width:5px !important;height:5px !important"};return([nv_item])}),nv_setStyle:(function (nv_item){if (nv_getRegExp("[^-]width[^pev;]+").nv_test(";" + nv_item.nv_attrs.nv_style))nv_item.nv_attrs.nv_style += ";width:100%";;nv_item.nv_attrs.nv_style = nv_item.nv_attrs.nv_style.nv_replace(nv_getRegExp('margin[^;]*',"gi"),"");return([nv_item])}),nv_isContinue:(function (nv_item){if (nv_textTag[((nt_6=(nv_item.nv_name),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))])return(false);;if (!nv_item[("nv_"+"continue")])return(true); else if (nv_item.nv_name == 'a')return(true);;return(false)}),});return nv_module.nv_exports;}

f_['./components/jyf-Parser/trees.wxml']={};
f_['./components/jyf-Parser/trees.wxml']['handler'] =f_['./components/jyf-Parser/handler.wxs'] || nv_require("p_./components/jyf-Parser/handler.wxs");
f_['./components/jyf-Parser/trees.wxml']['handler']();

var x=['./components/disclaimer.wxml','./components/function.wxml','./components/jyf-Parser/index.wxml','./components/jyf-Parser/trees.wxml','./components/personal.wxml','./components/product.wxml','./components/suspension.wxml','./components/title.wxml','./components/title2.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-popup/uni-popup.wxml','./pages/article/comment/comment.wxml','./pages/article/consultation/consultation.wxml','./pages/article/original/addDisplayBit/addDisplayBit.wxml','./pages/article/original/edit/edit.wxml','./pages/article/original/original.wxml','./pages/article/productInfo/productInfo.wxml','./pages/article/reprint/editingArticles/editingArticles.wxml','./pages/article/reprint/edits/edits.wxml','./pages/article/reprint/reprint.wxml','./pages/article/reprint/tips/tips.wxml','./pages/article/userinfo/userinfo.wxml','./pages/index/index.wxml','./pages/info/info.wxml','./pages/info/visitor/visitor.wxml','./pages/login/login.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_n('view')
var fE=_v()
_(oD,fE)
if(_oz(z,0,e,s,gg)){fE.wxVkey=1
var cF=_n('slot')
_(fE,cF)
}
var hG=_mz(z,'trees',['animation',1,'bind:__l',1,'class',2,'imgMode',3,'lazyLoad',4,'loadVideo',5,'nodes',6,'style',7,'vueId',8],[],e,s,gg)
_(oD,hG)
fE.wxXCkey=1
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_v()
_(r,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,4,aL,lK,gg)){bO.wxVkey=1
var oP=_v()
_(bO,oP)
if(_oz(z,5,aL,lK,gg)){oP.wxVkey=1
}
else{oP.wxVkey=2
var xQ=_v()
_(oP,xQ)
if(_oz(z,6,aL,lK,gg)){xQ.wxVkey=1
}
else{xQ.wxVkey=2
var oR=_v()
_(xQ,oR)
if(_oz(z,7,aL,lK,gg)){oR.wxVkey=1
}
else{oR.wxVkey=2
var fS=_v()
_(oR,fS)
if(_oz(z,8,aL,lK,gg)){fS.wxVkey=1
}
else{fS.wxVkey=2
var cT=_v()
_(fS,cT)
if(_oz(z,9,aL,lK,gg)){cT.wxVkey=1
}
else{cT.wxVkey=2
var hU=_v()
_(cT,hU)
if(_oz(z,10,aL,lK,gg)){hU.wxVkey=1
var oV=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2,'data-href',3,'hoverClass',4,'hoverStartTime',5,'hoverStayTime',6,'style',7],[],aL,lK,gg)
var cW=_mz(z,'trees',['bind:__l',19,'imgMode',1,'lazyLoad',2,'loadVideo',3,'nodes',4,'vueId',5],[],aL,lK,gg)
_(oV,cW)
_(hU,oV)
}
else{hU.wxVkey=2
}
hU.wxXCkey=1
hU.wxXCkey=3
}
cT.wxXCkey=1
cT.wxXCkey=3
}
fS.wxXCkey=1
fS.wxXCkey=3
}
oR.wxXCkey=1
oR.wxXCkey=3
}
xQ.wxXCkey=1
xQ.wxXCkey=3
}
oP.wxXCkey=1
oP.wxXCkey=3
}
else{bO.wxVkey=2
var oX=_mz(z,'trees',['bind:__l',25,'class',1,'imgMode',2,'lazyLoad',3,'loadVideo',4,'nodes',5,'style',6,'vueId',7],[],aL,lK,gg)
_(bO,oX)
}
bO.wxXCkey=1
bO.wxXCkey=3
bO.wxXCkey=3
return tM
}
cI.wxXCkey=4
_2z(z,2,oJ,e,s,gg,cI,'item','index','index')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var b3=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o4=_mz(z,'uni-icons',['bind:__l',3,'class',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(b3,o4)
_(r,b3)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o6=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var f7=_mz(z,'uni-icons',['bind:__l',3,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(o6,f7)
_(r,o6)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o0=_v()
_(r,o0)
if(_oz(z,0,e,s,gg)){o0.wxVkey=1
var cAB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oBB=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var lCB=_n('slot')
_(oBB,lCB)
_(cAB,oBB)
_(o0,cAB)
}
o0.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var tEB=_n('view')
_rz(z,tEB,'class',0,e,s,gg)
var eFB=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(tEB,eFB)
var bGB=_mz(z,'stitles',['bind:__l',6,'color',1,'titles',2,'vueId',3],[],e,s,gg)
_(tEB,bGB)
_(r,tEB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(xIB,oJB)
var fKB=_mz(z,'stitles',['bind:__l',6,'color',1,'titles',2,'vueId',3],[],e,s,gg)
_(xIB,fKB)
_(r,xIB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var hMB=_n('view')
_rz(z,hMB,'class',0,e,s,gg)
var oNB=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(hMB,oNB)
var cOB=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var oPB=_mz(z,'uni-icons',['bind:__l',9,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(cOB,oPB)
_(hMB,cOB)
var lQB=_n('view')
_rz(z,lQB,'class',13,e,s,gg)
var aRB=_mz(z,'parser',['bind:__l',14,'html',1,'vueId',2],[],e,s,gg)
_(lQB,aRB)
var tSB=_mz(z,'disclaimer',['bind:__l',17,'name',1,'vueId',2],[],e,s,gg)
_(lQB,tSB)
_(hMB,lQB)
var eTB=_n('view')
_rz(z,eTB,'class',20,e,s,gg)
var bUB=_mz(z,'personal',['bind:__l',21,'vueId',1],[],e,s,gg)
_(eTB,bUB)
var oVB=_mz(z,'product',['bind:__l',23,'vueId',1],[],e,s,gg)
_(eTB,oVB)
_(hMB,eTB)
var xWB=_mz(z,'suspension',['bind:__l',25,'vueId',1],[],e,s,gg)
_(hMB,xWB)
_(r,hMB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var fYB=_n('view')
_rz(z,fYB,'class',0,e,s,gg)
var cZB=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(fYB,cZB)
var h1B=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var o2B=_mz(z,'uni-icons',['bind:__l',9,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(h1B,o2B)
_(fYB,h1B)
var c3B=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,16,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(c3B,l5B)
if(_oz(z,17,e,s,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(c3B,a6B)
if(_oz(z,18,e,s,gg)){a6B.wxVkey=1
}
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
_(fYB,c3B)
var t7B=_mz(z,'parser',['bind:__l',19,'html',1,'vueId',2],[],e,s,gg)
_(fYB,t7B)
_(r,fYB)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var b9B=_mz(z,'titles',['bind:__l',0,'isIcons',1,'titles',1,'vueId',2],[],e,s,gg)
_(r,b9B)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var xAC=_n('view')
_rz(z,xAC,'class',0,e,s,gg)
var oBC=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(xAC,oBC)
var fCC=_mz(z,'stitles',['bind:__l',6,'color',1,'titles',2,'vueId',3],[],e,s,gg)
_(xAC,fCC)
_(r,xAC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var hEC=_n('view')
_rz(z,hEC,'class',0,e,s,gg)
var oFC=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(hEC,oFC)
var cGC=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var oHC=_mz(z,'uni-icons',['bind:__l',9,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(cGC,oHC)
_(hEC,cGC)
var lIC=_mz(z,'disclaimer',['bind:__l',13,'name',1,'vueId',2],[],e,s,gg)
_(hEC,lIC)
var aJC=_mz(z,'product',['bind:__l',16,'vueId',1],[],e,s,gg)
_(hEC,aJC)
var tKC=_mz(z,'suspension',['bind:__l',18,'vueId',1],[],e,s,gg)
_(hEC,tKC)
_(r,hEC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var bMC=_n('view')
_rz(z,bMC,'class',0,e,s,gg)
var oNC=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(bMC,oNC)
var xOC=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var oPC=_mz(z,'uni-icons',['bind:__l',9,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(xOC,oPC)
_(bMC,xOC)
var fQC=_mz(z,'disclaimer',['bind:__l',13,'name',1,'vueId',2],[],e,s,gg)
_(bMC,fQC)
_(r,bMC)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var hSC=_mz(z,'titles',['bind:__l',0,'isIcons',1,'titles',1,'vueId',2],[],e,s,gg)
_(r,hSC)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cUC=_n('view')
_rz(z,cUC,'class',0,e,s,gg)
var oVC=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(cUC,oVC)
var lWC=_mz(z,'titles2',['bind:__l',6,'color',1,'titles',2,'vueId',3],[],e,s,gg)
_(cUC,lWC)
_(r,cUC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var tYC=_n('view')
_rz(z,tYC,'class',0,e,s,gg)
var eZC=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(tYC,eZC)
var b1C=_mz(z,'stitles',['bind:__l',6,'color',1,'titles',2,'vueId',3],[],e,s,gg)
_(tYC,b1C)
_(r,tYC)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var x3C=_mz(z,'titles',['bind:__l',0,'isIcons',1,'titles',1,'vueId',2],[],e,s,gg)
_(r,x3C)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var f5C=_mz(z,'titles',['bind:__l',0,'color',1,'isIcons',1,'titles',2,'vueId',3],[],e,s,gg)
_(r,f5C)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var h7C=_n('view')
_rz(z,h7C,'class',0,e,s,gg)
var o8C=_mz(z,'titles',['bind:__l',1,'color',1,'isIcons',2,'titles',3,'vueId',4],[],e,s,gg)
_(h7C,o8C)
var c9C=_mz(z,'titles2',['bind:__l',6,'color',1,'titles',2,'vueId',3],[],e,s,gg)
_(h7C,c9C)
_(r,h7C)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var lAD=_mz(z,'titles',['bind:__l',0,'color',1,'titles',1,'vueId',2],[],e,s,gg)
_(r,lAD)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var tCD=_mz(z,'titles',['bind:__l',0,'color',1,'isIcons',1,'titles',2,'vueId',3],[],e,s,gg)
_(r,tCD)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index","pages/info/info","pages/info/visitor/visitor","pages/article/reprint/reprint","pages/article/original/original","pages/article/reprint/tips/tips","pages/user/user","pages/article/original/edit/edit","pages/article/original/addDisplayBit/addDisplayBit","pages/article/userinfo/userinfo","pages/article/productInfo/productInfo","pages/article/consultation/consultation","pages/article/reprint/edits/edits","pages/article/reprint/editingArticles/editingArticles","pages/article/comment/comment"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"assistant","compilerVersion":"2.4.2","usingComponents":{"titles":"/components/title","uni-icons":"/components/uni-icons/uni-icons","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/disclaimer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/disclaimer.wxml']=$gwx('./components/disclaimer.wxml');

__wxAppCode__['components/function.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/function.wxml']=$gwx('./components/function.wxml');

__wxAppCode__['components/jyf-Parser/index.json']={"usingComponents":{"trees":"/components/jyf-Parser/trees"},"component":true};
__wxAppCode__['components/jyf-Parser/index.wxml']=$gwx('./components/jyf-Parser/index.wxml');

__wxAppCode__['components/jyf-Parser/trees.json']={"usingComponents":{"trees":"/components/jyf-Parser/trees"},"component":true};
__wxAppCode__['components/jyf-Parser/trees.wxml']=$gwx('./components/jyf-Parser/trees.wxml');

__wxAppCode__['components/personal.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/personal.wxml']=$gwx('./components/personal.wxml');

__wxAppCode__['components/product.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/product.wxml']=$gwx('./components/product.wxml');

__wxAppCode__['components/suspension.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/suspension.wxml']=$gwx('./components/suspension.wxml');

__wxAppCode__['components/title.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/title.wxml']=$gwx('./components/title.wxml');

__wxAppCode__['components/title2.json']={"component":true,"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['components/title2.wxml']=$gwx('./components/title2.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['pages/article/comment/comment.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","stitles":"/components/title2"}};
__wxAppCode__['pages/article/comment/comment.wxml']=$gwx('./pages/article/comment/comment.wxml');

__wxAppCode__['pages/article/consultation/consultation.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","stitles":"/components/title2"}};
__wxAppCode__['pages/article/consultation/consultation.wxml']=$gwx('./pages/article/consultation/consultation.wxml');

__wxAppCode__['pages/article/original/addDisplayBit/addDisplayBit.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","uni-icons":"/components/uni-icons/uni-icons","parser":"/components/jyf-Parser/index","disclaimer":"/components/disclaimer","personal":"/components/personal","product":"/components/product","suspension":"/components/suspension"}};
__wxAppCode__['pages/article/original/addDisplayBit/addDisplayBit.wxml']=$gwx('./pages/article/original/addDisplayBit/addDisplayBit.wxml');

__wxAppCode__['pages/article/original/edit/edit.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","uni-icons":"/components/uni-icons/uni-icons","parser":"/components/jyf-Parser/index"}};
__wxAppCode__['pages/article/original/edit/edit.wxml']=$gwx('./pages/article/original/edit/edit.wxml');

__wxAppCode__['pages/article/original/original.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","func":"/components/function"}};
__wxAppCode__['pages/article/original/original.wxml']=$gwx('./pages/article/original/original.wxml');

__wxAppCode__['pages/article/productInfo/productInfo.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","stitles":"/components/title2"}};
__wxAppCode__['pages/article/productInfo/productInfo.wxml']=$gwx('./pages/article/productInfo/productInfo.wxml');

__wxAppCode__['pages/article/reprint/editingArticles/editingArticles.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","uni-icons":"/components/uni-icons/uni-icons","parser":"/components/jyf-Parser/index","disclaimer":"/components/disclaimer","personal":"/components/personal","product":"/components/product","suspension":"/components/suspension"}};
__wxAppCode__['pages/article/reprint/editingArticles/editingArticles.wxml']=$gwx('./pages/article/reprint/editingArticles/editingArticles.wxml');

__wxAppCode__['pages/article/reprint/edits/edits.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","uni-icons":"/components/uni-icons/uni-icons","disclaimer":"/components/disclaimer"}};
__wxAppCode__['pages/article/reprint/edits/edits.wxml']=$gwx('./pages/article/reprint/edits/edits.wxml');

__wxAppCode__['pages/article/reprint/reprint.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","func":"/components/function"}};
__wxAppCode__['pages/article/reprint/reprint.wxml']=$gwx('./pages/article/reprint/reprint.wxml');

__wxAppCode__['pages/article/reprint/tips/tips.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","titles2":"/components/title2"}};
__wxAppCode__['pages/article/reprint/tips/tips.wxml']=$gwx('./pages/article/reprint/tips/tips.wxml');

__wxAppCode__['pages/article/userinfo/userinfo.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","stitles":"/components/title2"}};
__wxAppCode__['pages/article/userinfo/userinfo.wxml']=$gwx('./pages/article/userinfo/userinfo.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/info/info.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title"}};
__wxAppCode__['pages/info/info.wxml']=$gwx('./pages/info/info.wxml');

__wxAppCode__['pages/info/visitor/visitor.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title","titles2":"/components/title2"}};
__wxAppCode__['pages/info/visitor/visitor.wxml']=$gwx('./pages/info/visitor/visitor.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTextStyle":"black","navigationStyle":"custom","enablePullDownRefresh":false,"onReachBottomDistance":100,"bounce":"none","titleNView":false,"usingComponents":{"titles":"/components/title"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2fab":function(n,e,t){"use strict";t.r(e);var o=t("5446");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("c9d9");var c,r,i=t("2877"),a=Object(i["a"])(o["default"],c,r,!1,null,null,null);e["default"]=a.exports},"398c":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},5446:function(n,e,t){"use strict";t.r(e);var o=t("398c"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=u.a},7889:function(n,e,t){},c9d9:function(n,e,t){"use strict";var o=t("7889"),u=t.n(o);u.a},e1a2:function(n,e,t){"use strict";(function(n){t("d656"),t("921b");var e=u(t("66fd")),o=u(t("2fab"));function u(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t("ebbb"),e.default.config.productionTip=!1;var i=function(){return t.e("components/title").then(t.bind(null,"eb68"))};e.default.component("titles",i);var a=function(){return t.e("components/uni-icons/uni-icons").then(t.bind(null,"0236"))};e.default.component("uniIcons",a);var l=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"5b41"))};e.default.component("uniPopup",l),o.default.mpType="app";var f=new e.default(c({},o.default));n(f).$mount()}).call(this,t("6e42")["createApp"])}},[["e1a2","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, c = n[0], u = n[1], p = n[2], a = 0, l = []; a < c.length; a++) {
      r = c[a], s[r] && l.push(s[r][0]), s[r] = 0;
    }

    for (o in u) {
      Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    }

    m && m(n);

    while (l.length) {
      l.shift()();
    }

    return i.push.apply(i, p || []), t();
  }

  function t() {
    for (var e, n = 0; n < i.length; n++) {
      for (var t = i[n], o = !0, r = 1; r < t.length; r++) {
        var c = t[r];
        0 !== s[c] && (o = !1);
      }

      o && (i.splice(n--, 1), e = u(u.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      i = [];

  function c(e) {
    return u.p + "" + e + ".js";
  }

  function u(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, u), t.l = !0, t.exports;
  }

  u.e = function (e) {
    var n = [],
        t = {
      "components/title": 1,
      "components/uni-icons/uni-icons": 1,
      "components/uni-popup/uni-popup": 1,
      "components/title2": 1,
      "components/function": 1,
      "components/jyf-Parser/index": 1,
      "components/suspension": 1,
      "components/disclaimer": 1,
      "components/personal": 1,
      "components/product": 1,
      "components/jyf-Parser/trees": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/title": "components/title",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/title2": "components/title2",
        "components/function": "components/function",
        "components/jyf-Parser/index": "components/jyf-Parser/index",
        "components/suspension": "components/suspension",
        "components/disclaimer": "components/disclaimer",
        "components/personal": "components/personal",
        "components/product": "components/product",
        "components/jyf-Parser/trees": "components/jyf-Parser/trees"
      }[e] || e) + ".wxss", s = u.p + o, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
        var p = i[c],
            a = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (a === o || a === s)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (c = 0; c < l.length; c++) {
        p = l[c], a = p.getAttribute("data-href");
        if (a === o || a === s) return n();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = n, m.onerror = function (n) {
        var o = n && n.target && n.target.src || s,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        i.request = o, delete r[e], m.parentNode.removeChild(m), t(i);
      }, m.href = s;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var o = s[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var i = new Promise(function (n, t) {
        o = s[e] = [n, t];
      });
      n.push(o[2] = i);
      var p,
          a = document.createElement("script");
      a.charset = "utf-8", a.timeout = 120, u.nc && a.setAttribute("nonce", u.nc), a.src = c(e), p = function p(n) {
        a.onerror = a.onload = null, clearTimeout(l);
        var t = s[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            i.type = o, i.request = r, t[1](i);
          }

          s[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        p({
          type: "timeout",
          target: a
        });
      }, 12e4);
      a.onerror = a.onload = p, document.head.appendChild(a);
    }
    return Promise.all(n);
  }, u.m = e, u.c = o, u.d = function (e, n, t) {
    u.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, n) {
    if (1 & n && (e = u(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (u.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      u.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, u.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(n, "a", n), n;
  }, u.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = p.push.bind(p);
  p.push = n, p = p.slice();

  for (var l = 0; l < p.length; l++) {
    n(p[l]);
  }

  var m = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"21cc":function(t,e,n){t.exports=n.p+"static/media/demo.6e955c88.mp4"},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},4747:function(t,e,n){"use strict";(function(e){var r;try{r=n(!function(){var t=new Error("Cannot find module './emoji.js'");throw t.code="MODULE_NOT_FOUND",t}())}catch(l){}var i=n("bcb6"),o={a:0,abbr:1,ad:0,audio:0,b:1,blockquote:1,br:0,code:1,col:0,colgroup:0,dd:1,del:1,dl:1,dt:1,div:1,em:1,fieldset:0,font:1,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,hr:0,i:1,img:1,ins:1,label:1,legend:0,li:0,ol:0,p:1,q:1,source:0,span:1,strong:1,sub:0,sup:0,table:0,tbody:0,td:0,tfoot:0,th:0,thead:0,tr:0,u:1,ul:0,video:1},a={address:!0,article:!0,aside:!0,body:!0,center:!0,cite:!0,footer:!0,header:!0,html:!0,nav:!0,pre:!0,section:!0},s={area:!0,base:!0,basefont:!0,canvas:!0,circle:!0,command:!0,ellipse:!0,embed:!0,frame:!0,head:!0,iframe:!0,input:!0,isindex:!0,keygen:!0,line:!0,link:!0,map:!0,meta:!0,param:!0,path:!0,polygon:!0,polyline:!0,rect:!0,script:!0,stop:!0,textarea:!0,title:!0,track:!0,use:!0,wbr:!0};function c(){for(var t="",e=0;e<5;e++){var n=parseInt(52*Math.random());t+=n<26?String.fromCharCode(65+n):String.fromCharCode(71+n)}return t}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2];this.imgList=[],this.imgIndex=0,this.nodes=[],this.title="",this._CssHandler=new i(t,e),this._tagStack=[],this._videoNum=0,this._whiteSpace=!1}u.prototype._addDomElement=function(t){("pre"==t.name||t.attrs&&/white-space\s*:\s*pre/.test(t.attrs.style))&&(this._whiteSpace=!0,t.pre=!0);var e=this._tagStack[this._tagStack.length-1],n=e?e.children:this.nodes;n.push(t)},u.prototype._bubbling=function(){for(var t=this._tagStack.length-1;t>=0;t--){if(!o[this._tagStack[t].name])return this._tagStack[t].name;this._tagStack[t].continue=!0}},u.prototype.onopentag=function(t,n){var r={children:[]},i=this._CssHandler.match(t,n,r);switch(t){case"div":case"p":n.align&&(n.style+=";text-align:"+n.align,delete n.align);break;case"img":if(n.width&&(n.style="width:"+n.width+(/[0-9]/.test(n.width[n.width.length-1])?"px":"")+";"+n.style,delete n.width),n["data-src"]&&(n.src=n.src||n["data-src"],delete n["data-src"]),!n.hasOwnProperty("ignore")&&n.src){if("a"==this._bubbling()){n.ignore="true";break}var s=n.src;r.current=this.imgList.length,this.imgList.push(s)}else n.ignore="true";break;case"font":if(t="span",n.color&&(n.style+=";color:"+n.color,delete n.color),n.face&&(n.style+=";font-family:"+n.face,delete n.face),n.size){var u=parseInt(n.size);u<1?u=1:u>7&&(u=7);var l=[10,13,16,18,24,32,48];n.style+=";font-size:"+l[u-1]+"px",delete n.size}break;case"a":case"ad":this._bubbling();break;case"video":case"audio":n.loop=n.hasOwnProperty("loop"),n.controls=n.hasOwnProperty("controls"),n.autoplay=n.hasOwnProperty("autoplay"),"video"==t&&(n.muted=n.hasOwnProperty("muted"),n.width&&(n.style="width:"+parseFloat(n.width)+"px;"+n.style,delete n.width),n.height&&(n.style="height:"+parseFloat(n.height)+"px;"+n.style,delete n.height)),n.id=c()+("video"==t?++this._videoNum:""),n.source=[],n.src&&n.source.push(n.src),n.controls||n.autoplay||console.warn(e("存在没有controls属性的"+t+"标签，可能导致无法播放",n," at components\\jyf-Parser\\DomHandler.js:274")),this._bubbling();break;case"source":var f=this._tagStack[this._tagStack.length-1];return!f||"video"!=f.name&&"audio"!=f.name||(f.attrs.source.push(n.src),f.attrs.src||(f.attrs.src=n.src)),void this._tagStack.push(r)}n.style=i+n.style,a[t]?t="div":o.hasOwnProperty(t)||(t="span"),r.name=t,r.attrs=n,this._addDomElement(r),this._tagStack.push(r)},u.prototype.ontext=function(t){if(!this._whiteSpace){if(!/\S/.test(t))return;t=t.replace(/\s+/g," ")}var e={type:"text"};t=t.replace(/&nbsp;/g,"&#xA0;"),/&#*((?!sp|lt|gt).){2,8};/.test(t)&&(e.decode=!0),r&&(t=r.parseEmoji(t)),e.text=t,this._addDomElement(e)},u.prototype.onclosetag=function(t){var e=this._tagStack.pop(),n=this._tagStack.length?this._tagStack[this._tagStack.length-1].children:this.nodes;if(s[t]){if("title"==t)try{this.title=e.children[0].text}catch(p){}n.pop()}if(1==e.children.length&&"div"==e.name){var r=e.children[0];"div"!=r.name||/padding/.test(e.attrs.style)||/margin/.test(e.attrs.style)&&/margin/.test(r.attrs.style)||/display/.test(e.attrs.style)||/display/.test(r.attrs.style)||e.attrs.id&&r.attrs.id||e.attrs.class&&r.attrs.class||(/padding/.test(r.attrs.style)&&(r.attrs.style=";box-sizing:border-box;"+r.attrs.style),r.attrs.style=e.attrs.style+";"+r.attrs.style,r.attrs.id=(r.attrs.id||"")+(e.attrs.id||""),r.attrs.class=(r.attrs.class||"")+(e.attrs.class||""),n[n.indexOf(e)]=r)}if(e.pre){this._whiteSpace=!1;var i=!0,o=!1,a=void 0;try{for(var c,u=this._tagStack[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var f=c.value;f.pre&&(this._whiteSpace=!0)}}catch(l){o=!0,a=l}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}delete e.pre}this._CssHandler.pop&&this._CssHandler.pop(e)},t.exports=u}).call(this,n("0de9")["default"])},"62f2":function(t,e,n){"use strict";var r=n("cadb"),i=n("4747"),o={align:!0,alt:!0,author:!0,autoplay:!0,class:!0,color:!0,colspan:!0,controls:!0,"data-src":!0,dir:!0,face:!0,height:!0,href:!0,id:!0,ignore:!0,loop:!0,muted:!0,name:!0,poster:!0,rowspan:!0,size:!0,span:!0,src:!0,start:!0,style:!0,type:!0,width:!0},a={area:!0,base:!0,basefont:!0,br:!0,col:!0,circle:!0,command:!0,ellipse:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,line:!0,link:!0,meta:!0,param:!0,path:!0,polygon:!0,polyline:!0,rect:!0,source:!0,stop:!0,track:!0,use:!0,wbr:!0};function s(t,e){this._cbs=t,this._callback=e,this._tagname="",this._attribname="",this._attribvalue="",this._attribs=null,this._stack=[],this._tokenizer=new r(this)}function c(t,e,n){return new Promise(function(r,o){try{var a="";t=t.replace(/<style.*?>([\s\S]*?)<\/style>/gi,function(){return a+=arguments[1],""});var c=new i(a,e,n);new s(c,function(t){return r(t)}).write(t)}catch(u){return o(u)}})}s.prototype.ontext=function(t){this._cbs.ontext(t)},s.prototype.onopentagname=function(t){t=t.toLowerCase(),this._tagname=t,this._attribs={style:""},a[t]||this._stack.push(t)},s.prototype.onopentagend=function(){this._attribs&&(this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),a[this._tagname]&&this._cbs.onclosetag(this._tagname),this._tagname=""},s.prototype.onclosetag=function(t){if(t=t.toLowerCase(),this._stack.length&&!a[t]){var e=this._stack.lastIndexOf(t);if(-1!==e){e=this._stack.length-e;while(e--)this._cbs.onclosetag(this._stack.pop())}else"p"===t&&(this.onopentagname(t),this._closeCurrentTag())}else"br"!==t&&"hr"!==t&&"p"!==t||(this.onopentagname(t),this._closeCurrentTag())},s.prototype._closeCurrentTag=function(){var t=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===t&&(this._cbs.onclosetag(t),this._stack.pop())},s.prototype.onattribend=function(){this._attribvalue=this._attribvalue.replace(/&quot;/g,'"'),this._attribs&&o[this._attribname]&&(this._attribs[this._attribname]=this._attribvalue),this._attribname="",this._attribvalue=""},s.prototype.onend=function(){for(var t=this._stack.length;t>0;this._cbs.onclosetag(this._stack[--t]));this._callback({nodes:this._cbs.nodes,title:this._cbs.title,imgList:this._cbs.imgList})},s.prototype.write=function(t){this._tokenizer.parse(t)},t.exports=c},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function f(t){return"[object RegExp]"===u.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,x=w(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),$=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,A=w(function(t){return t.replace(k,"-$1").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var T=Function.prototype.bind?D:O;function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function C(t,e){for(var n in e)t[n]=e[n];return t}function E(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function I(t,e,n){}var P=function(t,e,n){return!1},N=function(t){return t};function B(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return B(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return B(t[n],e[n])})}catch(u){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:I,parsePlatformTagName:N,mustUseProp:P,async:!0,_lifecycleHooks:U},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");function J(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,X="__proto__"in{},K="undefined"!==typeof window,G="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=G&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Y=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Q),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===W&&(W=!K&&!G&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=I,lt=0,ft=function(){this.id=lt++,this.subs=[]};function pt(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function ht(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){g(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var _t=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(bt),xt=!0;function $t(t){xt=t}var kt=function(t){this.value=t,this.dep=new ft,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?Ot(t,bt,St):At(t,bt):Ot(t,bt,St),this.observeArray(t)):this.walk(t)};function At(t,e){t.__proto__=e}function Ot(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];H(t,o,e[o])}}function Dt(t,e){var n;if(c(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:xt&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Tt(t,e,n,r,i){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.SharedObject.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Et(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!i&&Dt(e),o.notify())}})}}function jt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Tt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ct(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Et(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Et(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Tt(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var It=q.optionMergeStrategies;function Pt(t,e){if(!e)return t;for(var n,r,i,o=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&Pt(r,i):jt(t,n,i));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Pt(r,i):i}:e?t?function(){return Pt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Vt(t,e,n,r){var i=Object.create(t||null);return e?C(i,e):i}It.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},U.forEach(function(t){It[t]=Bt}),M.forEach(function(t){It[t+"s"]=Vt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in C(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return C(i,t),e&&C(i,e),i},It.provide=Nt;var Mt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=x(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=x(s),a[o]=l(i)?i:{type:i};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?C({from:o},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Lt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),qt(e,n),Ft(e),!e._base&&(e.extends&&(t=Lt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Lt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)b(t,o)||s(o);function s(r){var i=It[r]||Mt;a[r]=i(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=x(n);if(b(i,o))return i[o];var a=$(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function zt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t],s=Kt(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===A(t)){var c=Kt(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Jt(r,i,t);var u=xt;$t(!0),Dt(a),$t(u)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Wt(t)===Wt(e)}function Kt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Xt(e[n],t))return n;return-1}function Gt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Zt(ei,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Qt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch(function(t){return Gt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Gt(ei,r,i)}return o}function Zt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Yt(ei,null,"config.errorHandler")}Yt(t,e,n)}function Yt(t,e,n){if(!K&&!G||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(I)}}else if(Y||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Gt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function le(t){fe(t,ue),ue.clear()}function fe(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)fe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)fe(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Qt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,a,s){var c,u,l,f;for(c in t)u=t[c],l=e[c],f=pe(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=he(u,s)),o(f.once)&&(u=t[c]=a(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(f=pe(c),i(f.name,e[c],f.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var l=A(u);_e(a,c,u,l,!0)||_e(a,s,u,l,!1)}return a}}function _e(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return i(t)&&i(t.text)&&a(t.isComment)}function be(t,e){var n,a,c,u,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=l.length-1,u=l[c],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(u)&&(l[c]=yt(u.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?me(u)?l[c]=yt(u.text+a):""!==a&&l.push(yt(a)):me(a)&&me(u)?l[c]=yt(u.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=xe(t.$options.inject,t);e&&($t(!1),Object.keys(e).forEach(function(n){Tt(t,n,e[n])}),$t(!0))}function xe(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function $e(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ke)&&delete n[u];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ae(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Oe(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=De(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",a),H(i,"$key",s),H(i,"$hasNormal",o),i}function Oe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function De(t,e){return function(){return t[e]}}function Te(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=C(C({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ce(t){return Ht(this.$options,"filters",t,!0)||N}function Ee(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?Ee(i,r):o?Ee(o,t):r?A(r)!==e:void 0}function Pe(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=E(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=x(a),u=A(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function Be(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ve(t[r],e+"_"+r,n);else Ve(t,e,n)}function Ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Me(t,e){if(e)if(l(e)){var n=t.on=t.on?C({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Ue(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Le(t){t._o=Be,t._n=v,t._s=d,t._l=Te,t._t=je,t._q=B,t._i=R,t._m=Ne,t._f=Ce,t._k=Ie,t._b=Pe,t._v=yt,t._e=_t,t._u=Ue,t._g=Me,t._d=qe,t._p=Fe}function He(t,e,r,i,a){var s,c=this,u=a.options;b(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(u._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=xe(u.inject,i),this.slots=function(){return c.$slots||Ae(t.scopedSlots,c.$slots=$e(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Ae(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,f)}}function ze(t,e,r,o,a){var s=t.options,c={},u=s.props;if(i(u))for(var l in u)c[l]=zt(l,u,e||n);else i(r.attrs)&&We(c,r.attrs),i(r.props)&&We(c,r.props);var f=new He(r,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof dt)return Je(p,r,f.parent,s,f);if(Array.isArray(p)){for(var h=ge(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Je(h[v],r,f.parent,s,f);return d}}function Je(t,e,n,r,i){var o=gt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function We(t,e){for(var n in e)t[x(n)]=e[n]}Le(He.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,xn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;On(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Cn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ln(n):Tn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},Ke=Object.keys(Xe);function Ge(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=dn(l,u),void 0===t))return hn(l,e,n,a,s);e=e||{},pr(t),i(e.model)&&tn(t.options,e);var f=ve(e,t,s);if(o(t.options.functional))return ze(t,f,e,n,a);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:a},l);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],i=e[r],o=Xe[r];i===o||i&&i._merged||(e[r]=i?Ye(o,i):o)}}function Ye(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=ge(r):o===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new dt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ge(c,n,t,r,e)):a=Ge(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):_t()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&an(c,e,n)}}function sn(t){c(t.style)&&le(t.style),c(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=$e(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;Tt(t,"$attrs",o&&o.attrs||n,null,!0),Tt(t,"$listeners",e._parentListeners||n,null,!0)}var un,ln=null;function fn(t){Le(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Ae(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Gt(ei,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=_t()),t.parent=i,t}}function pn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function hn(t,e,n,r,i){var o=_t();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",function(){return g(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},p=V(function(n){t.resolved=pn(n,e),s?a.length=0:f(!0)}),d=V(function(e){i(t.errorComp)&&(t.error=!0,f(!0))}),v=t(p,d);return c(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),i(v.error)&&(t.errorComp=pn(v.error,e)),i(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),i(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function gn(t,e){un.$on(t,e)}function mn(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function wn(t,e,n){un=t,de(e,n||{},gn,mn,bn,t),un=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?j(n):n;for(var r=j(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Qt(n[o],e,r,e,i)}return e}}var xn=null;function $n(t){var e=xn;return xn=t,function(){xn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=$n(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Cn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Cn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){$t(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var h=f[p],d=t.$options.props;l[h]=zt(h,d,e,t)}$t(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),u&&(t.$slots=$e(o,i.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Tn(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Tn(t.$children[n]);Cn(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Cn(t,"deactivated")}}function Cn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Qt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var En=[],In=[],Pn={},Nn=!1,Bn=!1,Rn=0;function Vn(){Rn=En.length=In.length=0,Pn={},Nn=Bn=!1}var Mn=Date.now;if(K&&!Y){var Un=window.performance;Un&&"function"===typeof Un.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return Un.now()})}function qn(){var t,e;for(Mn(),Bn=!0,En.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<En.length;Rn++)t=En[Rn],t.before&&t.before(),e=t.id,Pn[e]=null,t.run();var n=In.slice(),r=En.slice();Vn(),Hn(n),Fn(r),ot&&q.devtools&&ot.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Cn(r,"updated")}}function Ln(t){t._inactive=!1,In.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Tn(t[e],!0)}function zn(t){var e=t.id;if(null==Pn[e]){if(Pn[e]=!0,Bn){var n=En.length-1;while(n>Rn&&En[n].id>t.id)n--;En.splice(n+1,0,t)}else En.push(t);Nn||(Nn=!0,ce(qn))}}var Jn=0,Wn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Gt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),ht(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Gt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:I,set:I};function Kn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Gn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&or(t,e.methods),e.data?Zn(t):Dt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||$t(!1);var a=function(o){i.push(o);var a=zt(o,e,n,t);Tt(r,o,a),o in t||Kn(t,"_props",o)};for(var s in e)a(s);$t(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Yn(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||L(o)||Kn(t,"_data",o)}Dt(e,!0)}function Yn(t,e){pt();try{return t.call(e,e)}catch(ei){return Gt(ei,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Wn(t,a||I,I,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Xn.get=r?rr(e):ir(n),Xn.set=I):(Xn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):I,Xn.set=n.set||I),Object.defineProperty(t,e,Xn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:T(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=Ct,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Gt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var ur=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=ur++,e._isVue=!0,t&&t._isComponent?fr(e,t):e.$options=Lt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),yn(e),cn(e),Cn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Gn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Cn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=hr(t);i&&C(t.extendOptions,i),e=t.options=Lt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Lt(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=C({},a.options),i[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function Sr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function xr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=wr(a.componentOptions);s&&!e(s)&&$r(n,o,r,i)}}}function $r(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(dr),cr(dr),Sn(dr),An(dr),fn(dr);var kr=[String,RegExp,Array],Ar={name:"keep-alive",abstract:!0,props:{include:kr,exclude:kr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)$r(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){xr(t,function(t){return Sr(e,t)})}),this.$watch("exclude",function(e){xr(t,function(t){return!Sr(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=wr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Sr(o,r))||a&&r&&Sr(a,r))return e;var s=this,c=s.cache,u=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,g(u,l),u.push(l)):(c[l]=e,u.push(l),this.max&&u.length>parseInt(this.max)&&$r(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Or={KeepAlive:Ar};function Dr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:C,mergeOptions:Lt,defineReactive:Tt},t.set=jt,t.delete=Ct,t.nextTick=ce,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,Or),vr(t),_r(t),yr(t),br(t)}Dr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var Tr="[object Array]",jr="[object Object]";function Cr(t,e){var n={};return Er(t,e),Ir(t,e,"",n),n}function Er(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==jr&&r==jr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Er(o,e[i])}}else n==Tr&&r==Tr&&t.length>=e.length&&e.forEach(function(e,n){Er(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var i=Nr(t),o=Nr(e);if(i==jr)if(o!=jr||Object.keys(t).length<Object.keys(e).length)Pr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Nr(o),c=Nr(a);if(s!=Tr&&s!=jr)o!=e[i]&&Pr(r,(""==n?"":n+".")+i,o);else if(s==Tr)c!=Tr?Pr(r,(""==n?"":n+".")+i,o):o.length<a.length?Pr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==jr)if(c!=jr||Object.keys(o).length<Object.keys(a).length)Pr(r,(""==n?"":n+".")+i,o);else for(var u in o)Ir(o[u],a[u],(""==n?"":n+".")+i+"."+u,r)};for(var s in t)a(s)}else i==Tr?o!=Tr?Pr(r,n,t):t.length<e.length?Pr(r,n,t):t.forEach(function(t,i){Ir(t,e[i],n+"["+i+"]",r)}):Pr(r,n,t)}}function Pr(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Br(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return En.find(function(e){return t._watcher===e})}function Vr(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Gt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Mr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Mr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Cr(i,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Br(n)})):Br(this)}};function qr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&Cn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Cn(t,"beforeUpdate")}},!0),n=!1,t}function Lr(t,e){return i(t)||i(e)?Hr(t,zr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Jr(t):c(t)?Wr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?E(t):"string"===typeof t?Xr(t):t}var Gr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:j(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Vr(this,t)},Gr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Qt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Lr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?C(e,n):n;return Object.keys(r).map(function(t){return A(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(c(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var Yr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Yr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Yr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Yr}dr.prototype.__patch__=Ur,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},ti(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=$e,e.createPage=xe,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return h(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function y(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,x=w(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),$=["invoke","success","fail","complete","returnValue"],k={},A={};function O(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?D(n):n}function D(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function T(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function j(t,e){Object.keys(e).forEach(function(n){-1!==$.indexOf(n)&&_(e[n])&&(t[n]=O(t[n],e[n]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==$.indexOf(n)&&_(e[n])&&T(t[n],e[n])})}function E(t,e){"string"===typeof t&&g(e)?j(A[t]||(A[t]={}),e):g(t)&&j(k,t)}function I(t,e){"string"===typeof t?g(e)?C(A[t],e):delete A[t]:g(t)&&C(k,t)}function P(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function B(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(P(i));else{var o=i(e);if(N(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){B(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function V(t,e){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,l(k.returnValue));var r=A[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(k).forEach(function(t){"returnValue"!==t&&(e[t]=k[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=M(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=B(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(i))})}return e.apply(void 0,[R(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var q={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,L=/^create|Manager$/,H=/^on/;function z(t){return L.test(t)}function J(t){return F.test(t)}function W(t){return H.test(t)&&"onPush"!==t}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(z(t)||J(t)||W(t))}function G(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return _(n.success)||_(n.fail)||_(n.complete)?V(t,U.apply(void 0,[t,e,n].concat(i))):V(t,X(new Promise(function(r,o){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,Z=750,Y=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Y="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==et&&Y?.5:1:t<0?-n:n}var it={promiseInterceptor:q},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:E,removeInterceptor:I}),at={},st=[],ct=[],ut=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(pt(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var o=!0===i?e:{};for(var a in _(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:g(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=lt(t,e[a],r):i||(o[a]=e[a]);return o}return _(e)&&(e=lt(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;_(n)&&(i=n(e)),e=ft(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return J(t)?pt(t,a,i.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(i),_(r)&&r(i)}}vt.forEach(function(t){dt[t]=_t(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(yt(),"$once",Array.prototype.slice.call(arguments))}function St(){return gt(yt(),"$emit",Array.prototype.slice.call(arguments))}var xt=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:St});function $t(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function kt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;$t("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function At(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&kt(e),e}var Ot=Object.freeze({getSubNVueById:At,requireNativePlugin:$t}),Dt=Page,Tt=Component,jt=/:/g,Ct=w(function(t){return x(t.replace(jt,"-"))});function Et(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Ct(n)].concat(i))}}}function It(t,e){var n=e[t];e[t]=n?function(){Et(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Et(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),Dt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Tt(t)};var Pt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Bt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Bt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){Bt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Vt(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Lt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Lt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var i=r["default"];_(i)&&(i=i()),r.type=zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:i,observer:Lt(e)}}else{var o=zt(e,r);n[e]={type:-1!==Ft.indexOf(o)?o:null,observer:Lt(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Xt(t,e)}),r}function Gt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Gt(t)):"string"===typeof t&&m(s,t)?c.push(s[t]):c.push(t)}),c}var Zt="~",Yt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Yt;r=s?r.slice(1):r;var c=r.charAt(0)===Zt;r=c?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(a.once)return;a.once=!0}o.push(a.apply(i,Qt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Nt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Rt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function fe(t){return re(t,{mocks:ie,initRefs:ue})}var pe=["onUniNViewMessage"];function he(t){var e=fe(t);return Rt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Vt(r.default,t),s=o(a,2),c=s[0],u=s[1],l={multipleSlots:!0,addGlobalClass:!0},f={options:l,data:qt(u,r.default.prototype),behaviors:Ht(u,ae),properties:Jt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,c]}function _e(t){return ve(t,{isPage:se,initRelation:ce})}function ye(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Rt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ce})}ge.push.apply(ge,Pt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=be(t);return Rt(e.methods,we),e}function xe(t){return Component(Se(t))}function $e(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var ke={};Object.keys(ot).forEach(function(t){ke[t]=ot[t]}),Object.keys(xt).forEach(function(t){ke[t]=xt[t]}),Object.keys(Ot).forEach(function(t){ke[t]=G(t,Ot[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(ke[t]=G(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ke,t.UniEmitter=xt),wx.createApp=de,wx.createPage=xe,wx.createComponent=$e;var Ae=ke,Oe=Ae;e.default=Oe}).call(this,n("c8ba"))},"7ddb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/login/login":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/index/index":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/info/info":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/info/visitor/visitor":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/reprint/reprint":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/original/original":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/reprint/tips/tips":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/user/user":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/original/edit/edit":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/original/addDisplayBit/addDisplayBit":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/userinfo/userinfo":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/productInfo/productInfo":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/consultation/consultation":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/reprint/edits/edits":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/reprint/editingArticles/editingArticles":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1},"pages/article/comment/comment":{navigationBarTextStyle:"black",navigationStyle:"custom",enablePullDownRefresh:!1,onReachBottomDistance:100,bounce:"none",titleNView:!1}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"855c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__E0F7BC1"};e.default=r},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var f=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,_=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===x()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},x=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},$=function(){var e="";return"wx"!==x()&&"qq"!==x()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},k=function(){return"n"===x()?plus.runtime.version:""},A=function(){var t=x(),e="";return"n"===t&&(e=plus.runtime.channel),e},O=function(e){var n=x(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},D="First__Visit__Time",T="Last__Visit__Time",j=function(){var e=t.getStorageSync(D),n=0;return e?n=e:(n=S(),t.setStorageSync(D,n),t.removeStorageSync(T)),n},C=function(){var e=t.getStorageSync(T),n=0;return n=e||"",t.setStorageSync(T,S()),n},E="__page__residence__time",I=0,P=0,N=function(){return I=S(),"n"===x()&&t.setStorageSync(E,S()),I},B=function(){return P=S(),"n"===x()&&(I=t.getStorageSync(E)),P-I},R="Total__Visit__Count",V=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},M=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,q=0,F=function(){var t=(new Date).getTime();return U=t,q=0,t},L=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==U&&(e=q-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===x()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===x()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("7ddb").default,G=n("855c").default||n("855c"),Q=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:x(),mpn:$(),ak:G.appid,usv:f,v:k(),ch:A(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){L();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,L();var n=H();F();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);L(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){L();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=O(t.scene),this.statData.fvts=j(),this.statData.lvts=C(),this.statData.tvc=V(),"n"===x()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;G.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=S(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===x()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===x()&&t.setStorageSync("__UNI__STAT__DATA",a),!(B()<_)||n){var s=this._reportingRequestData;"n"===x()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var c=[],u=[],l=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?c.push(n):3===t?l.push(n):u.push(n)})};for(var h in s)p(h);c.push.apply(c,u.concat(l));var d={usv:f,t:i,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===x()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==x()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(M(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Y=function(e){function n(){var e;return c(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Y.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},bcb6:function(t,e,n){"use strict";function r(t,e){this._style=new i(t,e).parse()}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.res=this.initClass(e),this._state="SPACE",this._buffer=t,this._sectionStart=0,this._index=0,this._name="",this._content="",this._list=[],this._comma=!1}r.prototype.match=function(t,e){var n=this._style[t]?this._style[t]+";":"";if(e.id&&(n+=this._style["#"+e.id]?this._style["#"+e.id]+";":""),e.class){var r=!0,i=!1,o=void 0;try{for(var a,s=e.class.split(" ")[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;n+=this._style["."+c]?this._style["."+c]+";":""}}catch(u){i=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}return n},i.prototype.initClass=function(t){var e=JSON.parse(JSON.stringify(t));return e.a="display:inline;color:#366092;word-break:break-all;"+(e.a||""),e.address="font-style:italic;"+(e.address||""),e.blockquote=e.blockquote||"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px;",e.center="text-align:center;"+(e.center||""),e.cite="font-style:italic;"+(e.cite||""),e.code=e.code||"padding:0 1px 0 1px;margin-left:2px;margin-right:2px;background-color:#f8f8f8;border:1px solid #cccccc;border-radius:3px;",e.dd="margin-left:40px;"+(e.dd||""),e.img="max-width:100%;"+(e.img||""),e.mark="display:inline;background-color:yellow;"+(e.mark||""),e.pre="overflow:scroll;"+(e.pre||"background-color:#f6f8fa;padding:5px;border-radius:5px;"),e.s="display:inline;text-decoration:line-through;"+(e.s||""),e.u="display:inline;text-decoration:underline;"+(e.u||""),e.big="display:inline;font-size:1.2em;"+(e.big||""),e.small="display:inline;font-size:0.8em;"+(e.small||""),e.pre="font-family:monospace;white-space:pre;"+e.pre,e},i.prototype.SPACE=function(t){/[a-zA-Z.#]/.test(t)?(this._sectionStart=this._index,this._state="InName"):"@"==t?this._state="Ignore1":"/"==t&&(this._state="BeforeComment")},i.prototype.BeforeComment=function(t){"*"==t?this._state="InComment":(this._index--,this._state="SPACE")},i.prototype.InComment=function(t){"*"==t&&(this._state="AfterComment")},i.prototype.AfterComment=function(t){"/"==t?this._state="SPACE":(this._index--,this._state="InComment")},i.prototype.InName=function(t){"{"==t?(this._list.push(this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=this._index+1,this._state="InContent"):","==t?(this._list.push(this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=this._index+1,this._comma=!0):"."!=t&&"#"!=t||this._comma?/\s/.test(t)?(this._name=this._buffer.substring(this._sectionStart,this._index),this._state="NameSpace"):/[>:\[]/.test(t)?this._list.length?this._state="IgnoreName":this._state="Ignore1":this._comma=!1:this._buffer=this._buffer.splice(this._index,1," ")},i.prototype.NameSpace=function(t){"{"==t?(this._list.push(this._name),this._sectionStart=this._index+1,this._state="InContent"):","==t?(this._comma=!0,this._list.push(this._name),this._sectionStart=this._index+1,this._state="InName"):/\S/.test(t)&&(this._comma?(this._sectionStart=this._index,this._index--,this._state="InName"):this._list.length?this._state="IgnoreName":this._state="Ignore1")},i.prototype.InContent=function(t){if("}"==t){this._content=this._buffer.substring(this._sectionStart,this._index);var e=!0,n=!1,r=void 0;try{for(var i,o=this._list[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;this.res[a]=(this.res[a]||"")+";"+this._content}}catch(s){n=!0,r=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}this._list=[],this._comma=!1,this._state="SPACE"}},i.prototype.IgnoreName=function(t){","==t?(this._sectionStart=this._index+1,this._state="InName"):"{"==t&&(this._sectionStart=this._index+1,this._state="InContent")},i.prototype.Ignore1=function(t){";"==t?(this._state="SPACE",this._sectionStart=this._index+1):"{"==t&&(this._state="Ignore2")},i.prototype.Ignore2=function(t){"}"==t?(this._state="SPACE",this._sectionStart=this._index+1):"{"==t&&(this._state="Ignore3")},i.prototype.Ignore3=function(t){"}"==t&&(this._state="Ignore2")},i.prototype.parse=function(){for(;this._index<this._buffer.length;this._index++)this[this._state](this._buffer[this._index]);return this.res},t.exports=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cadb:function(t,e,n){"use strict";function r(t){this._state="TEXT",this._buffer="",this._sectionStart=0,this._index=0,this._cbs=t}r.prototype.TEXT=function(t){var e=this._buffer.indexOf("<",this._index);-1!=e?(this._index=e,this._cbs.ontext(this._getSection()),this._state="BeforeTag",this._sectionStart=this._index):this._index=this._buffer.length},r.prototype.BeforeTag=function(t){switch(t){case"/":this._state="BeforeCloseTag";break;case"!":this._state="BeforeDeclaration";break;case"?":var e=this._buffer.indexOf(">",this._index);-1!=e?(this._index=e,this._sectionStart=this._index+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT";break;case">":this._state="TEXT";break;case"<":this._cbs.ontext(this._getSection()),this._sectionStart=this._index;break;default:/\s/.test(t)?this._state="TEXT":(this._state="InTag",this._sectionStart=this._index)}},r.prototype.InTag=function(t){("/"===t||">"===t||/\s/.test(t))&&(this._cbs.onopentagname(this._getSection()),this._state="BeforeAttrsName",this._index--)},r.prototype.BeforeAttrsName=function(t){">"===t?(this._cbs.onopentagend(),this._state="TEXT",this._sectionStart=this._index+1):"/"===t?this._state="InSelfCloseTag":/\s/.test(t)||(this._state="InAttrsName",this._sectionStart=this._index)},r.prototype.InAttrsName=function(t){("="===t||"/"===t||">"===t||/\s/.test(t))&&(this._cbs._attribname=this._getSection().toLowerCase(),this._sectionStart=-1,this._state="AfterAttrsName",this._index--)},r.prototype.AfterAttrsName=function(t){"="===t?this._state="BeforeAttrsValue":"/"===t||">"===t?(this._cbs.onattribend(),this._state="BeforeAttrsName",this._index--):/\s/.test(t)||(this._cbs.onattribend(),this._state="InAttrsName",this._sectionStart=this._index)},r.prototype.BeforeAttrsValue=function(t){'"'===t?(this._state="InAttrsValueDQ",this._sectionStart=this._index+1):"'"===t?(this._state="InAttrsValueSQ",this._sectionStart=this._index+1):/\s/.test(t)||(this._state="InAttrsValueNQ",this._sectionStart=this._index,this._index--)},r.prototype.InAttrsValueDQ=function(t){'"'===t&&(this._cbs._attribvalue+=this._getSection(),this._cbs.onattribend(),this._state="BeforeAttrsName")},r.prototype.InAttrsValueSQ=function(t){"'"===t&&(this._cbs._attribvalue+=this._getSection(),this._cbs.onattribend(),this._state="BeforeAttrsName")},r.prototype.InAttrsValueNQ=function(t){(/\s/.test(t)||">"===t)&&(this._cbs._attribvalue+=this._getSection(),this._cbs.onattribend(),this._state="BeforeAttrsName",this._index--)},r.prototype.BeforeCloseTag=function(t){/\s/.test(t)||(">"===t?this._state="TEXT":(this._state="InCloseTag",this._sectionStart=this._index))},r.prototype.InCloseTag=function(t){(">"===t||/\s/.test(t))&&(this._cbs.onclosetag(this._getSection()),this._state="AfterCloseTag",this._index--)},r.prototype.InSelfCloseTag=function(t){">"===t?(this._cbs.onopentagend(),this._state="TEXT",this._sectionStart=this._index+1):/\s/.test(t)||(this._state="BeforeAttrsName",this._index--)},r.prototype.AfterCloseTag=function(t){">"===t&&(this._state="TEXT",this._sectionStart=this._index+1)},r.prototype.BeforeDeclaration=function(t){this._state="-"==t?"InComment":"["==t?"BeforeCDATA1":"InDeclaration"},r.prototype.InDeclaration=function(t){var e=this._buffer.indexOf(">",this._index);-1!=e?(this._index=e,this._sectionStart=e+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT"},r.prototype.InComment=function(t){var e="-"==t?"--\x3e":">",n=this._buffer.indexOf(e,this._index);-1!=n?(this._index=n+e.length-1,this._sectionStart=this._index+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT"},r.prototype.BeforeCDATA1=function(t){this._state="C"==t?"BeforeCDATA2":"InDeclaration"},r.prototype.BeforeCDATA2=function(t){this._state="D"==t?"BeforeCDATA3":"InDeclaration"},r.prototype.BeforeCDATA3=function(t){this._state="A"==t?"BeforeCDATA4":"InDeclaration"},r.prototype.BeforeCDATA4=function(t){this._state="T"==t?"BeforeCDATA5":"InDeclaration"},r.prototype.BeforeCDATA5=function(t){this._state="A"==t?"InCDATA":"InDeclaration"},r.prototype.InCDATA=function(t){var e="["==t?"]]>":">",n=this._buffer.indexOf(e,this._index);-1!=n?(this._index=n+e.length-1,this._sectionStart=this._index+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT"},r.prototype.parse=function(t){for(this._buffer+=t;this._index<this._buffer.length;this._index++)this[this._state](this._buffer[this._index]);"TEXT"===this._state&&this._sectionStart!==this._index&&this._cbs.ontext(this._buffer.substr(this._sectionStart)),this._cbs.onend()},r.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)},t.exports=r},d601:function(t,e,n){t.exports=n.p+"static/img/user.49156e98.jpeg"},d656:function(t,e,n){},ebbb:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/disclaimer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/disclaimer.js';

define('components/disclaimer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/disclaimer"], {
  "4a36": function a36(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("6505"),
        a = e("f6e3");

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    e("c3e0");
    var c = e("2877"),
        f = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  6505: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  a3cc: function a3cc(n, t, e) {},
  c3e0: function c3e0(n, t, e) {
    "use strict";

    var u = e("a3cc"),
        a = e.n(u);
    a.a;
  },
  e51e: function e51e(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: {
        name: {
          type: String,
          value: "文章助手"
        }
      },
      data: function data() {
        return {};
      }
    };
    t.default = u;
  },
  f6e3: function f6e3(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("e51e"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/disclaimer-create-component', {
  'components/disclaimer-create-component': function componentsDisclaimerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4a36"));
  }
}, [['components/disclaimer-create-component']]]);
});
require('components/disclaimer.js');
__wxRoute = 'components/function';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/function.js';

define('components/function.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/function"], {
  "1c6a": function c6a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("b659"),
        c = e.n(u);

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    t["default"] = c.a;
  },
  "521c": function c(n, t, e) {},
  b659: function b659(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      data: function data() {
        return {};
      },
      onLoad: function onLoad() {},
      methods: {},
      components: {}
    };
    t.default = u;
  },
  ce58: function ce58(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  dc5b: function dc5b(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("ce58"),
        c = e("1c6a");

    for (var o in c) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(o);
    }

    e("ee32");
    var a = e("2877"),
        r = Object(a["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  ee32: function ee32(n, t, e) {
    "use strict";

    var u = e("521c"),
        c = e.n(u);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/function-create-component', {
  'components/function-create-component': function componentsFunctionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dc5b"));
  }
}, [['components/function-create-component']]]);
});
require('components/function.js');
__wxRoute = 'components/jyf-Parser/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/jyf-Parser/index.js';

define('components/jyf-Parser/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/jyf-Parser/index"], {
  "61cf": function cf(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var o,
          i = function i() {
        return n.e("components/jyf-Parser/trees").then(n.bind(null, "e349"));
      },
          r = n("62f2"),
          a = !0;

      try {
        o = n(!function () {
          var t = new Error("Cannot find module './document.js'");
          throw t.code = "MODULE_NOT_FOUND", t;
        }());
      } catch (u) {}

      var s = {
        name: "parser",
        data: function data() {
          return {
            nodes: [],
            showAnimation: {},
            loadVideo: !1
          };
        },
        components: {
          trees: i
        },
        props: {
          html: {
            type: null,
            default: ""
          },
          autocopy: {
            type: Boolean,
            default: !0
          },
          autopause: {
            type: Boolean,
            default: !0
          },
          autopreview: {
            type: Boolean,
            default: !0
          },
          autosetTitle: {
            type: Boolean,
            default: !0
          },
          imgMode: {
            type: String,
            default: "default"
          },
          lazyLoad: {
            type: Boolean,
            default: !1
          },
          selectable: {
            type: Boolean,
            default: !1
          },
          tagStyle: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          showWithAnimation: {
            type: Boolean,
            default: !1
          },
          animationDuration: {
            type: Number,
            default: 400
          }
        },
        mounted: function mounted() {
          this.execHtml(this.html), this.videoContext = [];
        },
        methods: {
          execHtml: function execHtml(e) {
            var n = this,
                i = {};
            if (this.showWithAnimation && (i = t.createAnimation({
              duration: this.animationDuration,
              timingFunction: "ease"
            }).opacity(1).step().export()), e) {
              if ("string" == typeof e) r(e, this.tagStyle, this.imgMode).then(function (e) {
                n.loadVideo = !1, n.nodes = e.nodes, n.showAnimation = i, n.imgList = e.imgList, o && (n.document = new o("nodes", e.nodes, n)), e.title && n.autosetTitle && t.setNavigationBarTitle({
                  title: e.title
                }), n.$emit("parser", e), n.ready();
              }).catch(function (t) {
                n.$emit("error", {
                  source: "parse",
                  errMsg: t
                });
              });else if (e.constructor == Array) this.showAnimation = i, this.imgList = [], this.loadVideo = !1, o && (this.document = new o("html", e, this)), this.ready();else if ("object" == typeof e) {
                if (!e.nodes || e.nodes.constructor != Array) {
                  if (e.name && e.children && e.attrs || "text" == e.type) return;
                  return void this.$emit("error", {
                    source: "parse",
                    errMsg: "传入的nodes数组格式不正确！应该传入的类型是array，实际传入的类型是：" + typeof e.nodes
                  });
                }

                this.showAnimation = i, this.imgList = e.imgList || [], this.loadVideo = !1, o && (this.document = new o("html.nodes", e.nodes, this)), e.title && this.autosetTitle && t.setNavigationBarTitle({
                  title: e.title
                }), this.ready();
              } else this.$emit("error", {
                source: "parse",
                errMsg: "错误的html类型：" + typeof e
              });
            } else this.nodes = [];
          },
          getContext: function getContext(e) {
            var n = this,
                o = !0,
                i = !1,
                r = void 0;

            try {
              for (var s, u = function u() {
                var e = s.value,
                    o = !1;
                if (!e.nodes) return {
                  v: n.getContext(e.$children)
                };
                var i = !0,
                    r = !1,
                    u = void 0;

                try {
                  for (var l, d = e.nodes[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                    var c = l.value;
                    "img" != c.name || o ? "video" == c.name && n.videoContext.push({
                      id: c.attrs.id,
                      context: t.createVideoContext(c.attrs.id, e)
                    }) : (o = !0, e.lazyLoad && a ? (e._observer = t.createIntersectionObserver(e), e._observer.relativeToViewport({
                      top: 1e3,
                      bottom: 1e3
                    }).observe(".img", function (t) {
                      e.imgLoad = !0, e._observer.disconnect(), e._observer = null;
                    })) : e.imgLoad = !0);
                  }
                } catch (f) {
                  r = !0, u = f;
                } finally {
                  try {
                    i || null == d.return || d.return();
                  } finally {
                    if (r) throw u;
                  }
                }

                n.getContext(e.$children);
              }, l = e[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                var d = u();
                if ("object" === typeof d) return d.v;
              }
            } catch (c) {
              i = !0, r = c;
            } finally {
              try {
                o || null == l.return || l.return();
              } finally {
                if (i) throw r;
              }
            }
          },
          ready: function ready() {
            var e = this;
            this.$nextTick(function () {
              t.createSelectorQuery().in(e).select(".contain").boundingClientRect(function (t) {
                e.$emit("ready", t);
              }).exec(), e.getContext(e.$children), setTimeout(function () {
                e.loadVideo = !0;
              }, 3e3);
            });
          }
        },
        watch: {
          html: function html(t) {
            this.execHtml(t);
          }
        }
      };
      e.default = s;
    }).call(this, n("6e42")["default"]);
  },
  "82d2": function d2(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("c17d"),
        i = n("d0a5");

    for (var r in i) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    n("e625");
    var a = n("2877"),
        s = Object(a["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  b68d: function b68d(t, e, n) {},
  c17d: function c17d(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  d0a5: function d0a5(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("61cf"),
        i = n.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  e625: function e625(t, e, n) {
    "use strict";

    var o = n("b68d"),
        i = n.n(o);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/jyf-Parser/index-create-component', {
  'components/jyf-Parser/index-create-component': function componentsJyfParserIndexCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("82d2"));
  }
}, [['components/jyf-Parser/index-create-component']]]);
});
require('components/jyf-Parser/index.js');
__wxRoute = 'components/jyf-Parser/trees';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/jyf-Parser/trees.js';

define('components/jyf-Parser/trees.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/jyf-Parser/trees"], {
  "3b6d": function b6d(t, e, r) {},
  "8d1b": function d1b(t, e, r) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    r.d(e, "a", function () {
      return o;
    }), r.d(e, "b", function () {
      return n;
    });
  },
  a2d4: function a2d4(t, e, r) {
    "use strict";

    var o = function o(t) {
      t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
    };

    e["a"] = o;
  },
  e349: function e349(t, e, r) {
    "use strict";

    r.r(e);
    var o = r("8d1b"),
        n = r("f16f");

    for (var a in n) {
      "default" !== a && function (t) {
        r.d(e, t, function () {
          return n[t];
        });
      }(a);
    }

    r("f8dc");
    var i = r("2877"),
        s = r("a2d4"),
        u = Object(i["a"])(n["default"], o["a"], o["b"], !1, null, null, null);
    "function" === typeof s["a"] && Object(s["a"])(u), e["default"] = u.exports;
  },
  f16f: function f16f(t, e, r) {
    "use strict";

    r.r(e);
    var o = r("f738"),
        n = r.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        r.d(e, t, function () {
          return o[t];
        });
      }(a);
    }

    e["default"] = n.a;
  },
  f738: function f738(t, e, r) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var o = function o() {
        return Promise.resolve().then(r.bind(null, "e349"));
      },
          n = {
        components: {
          trees: o
        },
        name: "trees",
        data: function data() {
          return {
            controls: {},
            imgLoad: !1
          };
        },
        props: {
          nodes: {
            type: Array,
            default: []
          },
          lazyLoad: {
            type: Boolean,
            default: !1
          },
          loadVideo: {
            type: Boolean,
            default: !1
          },
          imgMode: {
            type: String,
            default: "default"
          }
        },
        mounted: function mounted() {
          this._top = this.$parent;

          while ("parser" != this._top.$options.name) {
            if (this._top._top) {
              this._top = this._top._top;
              break;
            }

            this._top = this._top.$parent;
          }
        },
        beforeDestroy: function beforeDestroy() {
          this._observer && this._observer.disconnect();
        },
        methods: {
          playEvent: function playEvent(t) {
            if (this._top.videoContext.length > 1 && this._top.autopause) {
              var e = !0,
                  r = !1,
                  o = void 0;

              try {
                for (var n, a = this._top.videoContext[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                  var i = n.value;
                  i.id != t.currentTarget.dataset.id && i.context.pause();
                }
              } catch (s) {
                r = !0, o = s;
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (r) throw o;
                }
              }
            }
          },
          previewEvent: function previewEvent(e) {
            e.currentTarget.dataset.ignore || (this._top.autopreview && t.previewImage({
              current: parseInt(e.currentTarget.dataset.current),
              urls: this._top.imgList.length ? this._top.imgList : [e.currentTarget.dataset.src]
            }), this._top.$emit("imgtap", {
              src: e.currentTarget.dataset.src
            }));
          },
          tapEvent: function tapEvent(e) {
            this._top.$emit("linkpress", {
              href: e.currentTarget.dataset.href
            }), e.currentTarget.dataset.href && (/^http/.test(e.currentTarget.dataset.href) ? this._top.autocopy && t.setClipboardData({
              data: e.currentTarget.dataset.href,
              success: function success() {
                t.showToast({
                  title: "链接已复制"
                });
              }
            }) : t.navigateTo({
              url: e.currentTarget.dataset.href
            }));
          },
          triggerError: function triggerError(t, e, r, o) {
            this._top.$emit("error", {
              source: t,
              target: e,
              errMsg: r,
              errCode: o
            });
          },
          loadSource: function loadSource(t) {
            !this.controls[t.id] && t.source.length > 1 ? this.$set(this.controls, t.id, {
              play: !1,
              index: 1
            }) : this.controls[t.id] && t.source.length > this.controls[t.id].index + 1 && this.$set(this.controls[t.id], "index", this.controls[t.id].index + 1);
          },
          adError: function adError(t) {
            this.triggerError("ad", t.currentTarget, "", t.detail.errorCode);
          },
          videoError: function videoError(t) {
            this.loadSource(t.currentTarget.dataset), this.triggerError("video", t.currentTarget, t.detail.errMsg);
          },
          audioError: function audioError(t) {
            this.loadSource(t.currentTarget.dataset), this.triggerError("audio", t.currentTarget, t.detail.errMsg);
          },
          _loadVideo: function _loadVideo(t) {
            this.$set(this.controls, t.currentTarget.dataset.id, {
              play: !0,
              index: 0
            });
          }
        }
      };

      e.default = n;
    }).call(this, r("6e42")["default"]);
  },
  f8dc: function f8dc(t, e, r) {
    "use strict";

    var o = r("3b6d"),
        n = r.n(o);
    n.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/jyf-Parser/trees-create-component', {
  'components/jyf-Parser/trees-create-component': function componentsJyfParserTreesCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e349"));
  }
}, [['components/jyf-Parser/trees-create-component']]]);
});
require('components/jyf-Parser/trees.js');
__wxRoute = 'components/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/personal.js';

define('components/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/personal"], {
  "094d": function d(n, t, e) {
    "use strict";

    var u = e("e873"),
        a = e.n(u);
    a.a;
  },
  "69aa": function aa(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        data: function data() {
          return {};
        },
        methods: {
          adds: function adds() {
            n.navigateTo({
              url: "../../../user/user"
            });
          }
        }
      };
      t.default = e;
    }).call(this, e("6e42")["default"]);
  },
  8360: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("69aa"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  c8fb: function c8fb(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  e873: function e873(n, t, e) {},
  ed5f: function ed5f(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("c8fb"),
        a = e("8360");

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    e("094d");
    var c = e("2877"),
        f = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/personal-create-component', {
  'components/personal-create-component': function componentsPersonalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ed5f"));
  }
}, [['components/personal-create-component']]]);
});
require('components/personal.js');
__wxRoute = 'components/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/product.js';

define('components/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/product"], {
  "3d74": function d74(t, n, u) {},
  "62e9": function e9(t, n, u) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    u.d(n, "a", function () {
      return e;
    }), u.d(n, "b", function () {
      return c;
    });
  },
  ada7: function ada7(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("62e9"),
        c = u("dc68");

    for (var o in c) {
      "default" !== o && function (t) {
        u.d(n, t, function () {
          return c[t];
        });
      }(o);
    }

    u("c494");
    var r = u("2877"),
        a = Object(r["a"])(c["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  c494: function c494(t, n, u) {
    "use strict";

    var e = u("3d74"),
        c = u.n(e);
    c.a;
  },
  dc68: function dc68(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("e36c"),
        c = u.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    n["default"] = c.a;
  },
  e36c: function e36c(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        data: function data() {
          return {};
        },
        methods: {
          go: function go() {
            t.navigateTo({
              url: "../../productInfo/productInfo"
            });
          }
        }
      };
      n.default = u;
    }).call(this, u("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/product-create-component', {
  'components/product-create-component': function componentsProductCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ada7"));
  }
}, [['components/product-create-component']]]);
});
require('components/product.js');
__wxRoute = 'components/suspension';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/suspension.js';

define('components/suspension.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/suspension"], {
  "3c9c": function c9c(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("7256"),
        a = u("8a37");

    for (var o in a) {
      "default" !== o && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(o);
    }

    u("708d");
    var c = u("2877"),
        r = Object(c["a"])(a["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  "4e6c": function e6c(n, t, u) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = a(u("d601"));

      function a(n) {
        return n && n.__esModule ? n : {
          default: n
        };
      }

      var o = {
        data: function data() {
          return {
            src: e.default
          };
        },
        methods: {
          go: function go() {
            n.navigateTo({
              url: "../../consultation/consultation"
            });
          }
        }
      };
      t.default = o;
    }).call(this, u("6e42")["default"]);
  },
  "708d": function d(n, t, u) {
    "use strict";

    var e = u("afbe"),
        a = u.n(e);
    a.a;
  },
  7256: function _(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return a;
    });
  },
  "8a37": function a37(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("4e6c"),
        a = u.n(e);

    for (var o in e) {
      "default" !== o && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(o);
    }

    t["default"] = a.a;
  },
  afbe: function afbe(n, t, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/suspension-create-component', {
  'components/suspension-create-component': function componentsSuspensionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3c9c"));
  }
}, [['components/suspension-create-component']]]);
});
require('components/suspension.js');
__wxRoute = 'components/title';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/title.js';

define('components/title.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/title"], {
  a537: function a537(e, t, n) {},
  a55d: function a55d(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var a = function a() {
        return n.e("components/uni-icons/uni-icons").then(n.bind(null, "0236"));
      },
          i = {
        props: {
          titles: {
            type: String,
            value: ""
          },
          color: {
            type: Boolean,
            value: !0
          },
          isIcons: {
            type: Boolean,
            value: !1
          }
        },
        data: function data() {
          return {
            header_title: "header_title",
            header_title_white: "header_title_white",
            header_bar: "header_bar",
            header_bar_white: "header_bar_white",
            top_view_white: "top_view_white",
            top_view: "top_view"
          };
        },
        methods: {
          back: function back() {
            e.reLaunch({
              url: "../../index/index"
            });
          }
        },
        components: {
          uniIcons: a
        }
      };

      t.default = i;
    }).call(this, n("6e42")["default"]);
  },
  ea63: function ea63(e, t, n) {
    "use strict";

    var a = n("a537"),
        i = n.n(a);
    i.a;
  },
  eb68: function eb68(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("f8b3"),
        i = n("f998");

    for (var r in i) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    n("ea63");
    var u = n("2877"),
        o = Object(u["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  f8b3: function f8b3(e, t, n) {
    "use strict";

    var a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        i = [];

    n.d(t, "a", function () {
      return a;
    }), n.d(t, "b", function () {
      return i;
    });
  },
  f998: function f998(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("a55d"),
        i = n.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    t["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/title-create-component', {
  'components/title-create-component': function componentsTitleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("eb68"));
  }
}, [['components/title-create-component']]]);
});
require('components/title.js');
__wxRoute = 'components/title2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/title2.js';

define('components/title2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/title2"], {
  "4da5": function da5(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var a = function a() {
        return e.e("components/uni-icons/uni-icons").then(e.bind(null, "0236"));
      },
          u = {
        props: {
          titles: {
            type: String,
            value: ""
          },
          color: {
            type: Boolean,
            value: !0
          },
          isIcons: {
            type: Boolean,
            value: !1
          }
        },
        data: function data() {
          return {
            header_title: "header_title",
            header_title_white: "header_title_white"
          };
        },
        methods: {
          back: function back() {
            t.navigateBack({
              delta: 1
            });
          }
        },
        components: {
          uniIcons: a
        }
      };

      n.default = u;
    }).call(this, e("6e42")["default"]);
  },
  "6f7c": function f7c(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("4da5"),
        u = e.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "8cb8": function cb8(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  a3d0: function a3d0(t, n, e) {
    "use strict";

    var a = e("e13d"),
        u = e.n(a);
    u.a;
  },
  e13d: function e13d(t, n, e) {},
  f6c0: function f6c0(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("8cb8"),
        u = e("6f7c");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("a3d0");
    var o = e("2877"),
        c = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/title2-create-component', {
  'components/title2-create-component': function componentsTitle2CreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f6c0"));
  }
}, [['components/title2-create-component']]]);
});
require('components/title2.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "0236": function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("f7f7"),
        i = e("4258");

    for (var f in i) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(f);
    }

    e("5654");
    var r = e("2877"),
        o = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  "2f7e": function f7e(n, t, e) {},
  4258: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("f1e6"),
        i = e.n(u);

    for (var f in u) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(f);
    }

    t["default"] = i.a;
  },
  5654: function _(n, t, e) {
    "use strict";

    var u = e("2f7e"),
        i = e.n(u);
    i.a;
  },
  f1e6: function f1e6(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  f7f7: function f7f7(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0236"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "20f8": function f8(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "2e29": function e29(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  "5b41": function b41(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("20f8"),
        u = e("5e0d");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("7d33");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "5e0d": function e0d(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("2e29"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "7d33": function d33(t, n, e) {
    "use strict";

    var o = e("b31b"),
        u = e.n(o);
    u.a;
  },
  b31b: function b31b(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5b41"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1462:function(n,t,e){"use strict";e.r(t);var u=e("7d73"),o=e("30f1");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("5548");var a=e("2877"),r=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"30f1":function(n,t,e){"use strict";e.r(t);var u=e("6042"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);t["default"]=o.a},5548:function(n,t,e){"use strict";var u=e("d9ae"),o=e.n(u);o.a},6042:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},o={data:function(){return{titles:"登录文章助手"}},onLoad:function(){},methods:{go:function(){n.navigateTo({url:"../index/index"})}},components:{titles:u}};t.default=o}).call(this,e("6e42")["default"])},"7d73":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},d9ae:function(n,t,e){},e6dd:function(n,t,e){"use strict";(function(n){e("d656"),e("921b");u(e("66fd"));var t=u(e("1462"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["e6dd","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"02e9":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},i={data:function(){return{titles:"文章小助手"}},onLoad:function(){},methods:{go:function(){n.navigateTo({url:"../article/original/original"})},edit:function(){n.navigateTo({url:"../article/reprint/reprint"})}},components:{titles:u}};t.default=i}).call(this,e("6e42")["default"])},"0f1d":function(n,t,e){"use strict";var u=e("210b"),i=e.n(u);i.a},1088:function(n,t,e){"use strict";e.r(t);var u=e("02e9"),i=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=i.a},"210b":function(n,t,e){},6785:function(n,t,e){"use strict";e.r(t);var u=e("c714"),i=e("1088");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("0f1d");var r=e("2877"),a=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},c714:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement,u=(n._self._c,e("21cc"));n.$mp.data=Object.assign({},{$root:{m0:u}})},i=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return i})},d774:function(n,t,e){"use strict";(function(n){e("d656"),e("921b");u(e("66fd"));var t=u(e("6785"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["d774","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/info/info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/info/info.js';

define('pages/info/info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/info/info"],{"3d00":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return o})},"3ecc":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");u(e("66fd"));var n=u(e("9cda"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"54a5":function(t,n,e){"use strict";var u=e("55f7"),o=e.n(u);o.a},"55f7":function(t,n,e){},"9cda":function(t,n,e){"use strict";e.r(n);var u=e("3d00"),o=e("fe68");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("54a5");var i=e("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},afa4:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},o={data:function(){return{titles:"我的文章"}},onLoad:function(){},methods:{goVisitor:function(){t.navigateTo({url:"./visitor/visitor"})}},components:{titles:u}};n.default=o}).call(this,e("6e42")["default"])},fe68:function(t,n,e){"use strict";e.r(n);var u=e("afa4"),o=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=o.a}},[["3ecc","common/runtime","common/vendor"]]]);
});
require('pages/info/info.js');
__wxRoute = 'pages/info/visitor/visitor';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/info/visitor/visitor.js';

define('pages/info/visitor/visitor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/info/visitor/visitor"],{"0173":function(t,n,e){},2464:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},o=function(){return e.e("components/title2").then(e.bind(null,"f6c0"))},i={data:function(){return{titles:"我的文章",titles2:"访客追踪"}},onLoad:function(){},methods:{},components:{titles:u,titles2:o}};n.default=i},"417d":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");u(e("66fd"));var n=u(e("6472"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"476f":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return o})},6472:function(t,n,e){"use strict";e.r(n);var u=e("476f"),o=e("b0e8");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("6dd5");var r=e("2877"),c=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},"6dd5":function(t,n,e){"use strict";var u=e("0173"),o=e.n(u);o.a},b0e8:function(t,n,e){"use strict";e.r(n);var u=e("2464"),o=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=o.a}},[["417d","common/runtime","common/vendor"]]]);
});
require('pages/info/visitor/visitor.js');
__wxRoute = 'pages/article/reprint/reprint';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/reprint/reprint.js';

define('pages/article/reprint/reprint.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/reprint/reprint"],{"04ae":function(n,t,e){"use strict";e.r(t);var u=e("ef9a"),a=e("58a5");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("93a3");var i=e("2877"),r=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"2bca":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},a=function(){return e.e("components/function").then(e.bind(null,"dc5b"))},o={data:function(){return{titles:"文章小助手"}},onLoad:function(){},methods:{getMethod:function(){n.navigateTo({url:"./tips/tips"})},go:function(){n.navigateTo({url:"./edits/edits"})}},components:{titles:u,func:a}};t.default=o}).call(this,e("6e42")["default"])},"2e14":function(n,t,e){},"58a5":function(n,t,e){"use strict";e.r(t);var u=e("2bca"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},"8eab":function(n,t,e){"use strict";(function(n){e("d656"),e("921b");u(e("66fd"));var t=u(e("04ae"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"93a3":function(n,t,e){"use strict";var u=e("2e14"),a=e.n(u);a.a},ef9a:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})}},[["8eab","common/runtime","common/vendor"]]]);
});
require('pages/article/reprint/reprint.js');
__wxRoute = 'pages/article/original/original';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/original/original.js';

define('pages/article/original/original.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/original/original"],{"0d7c":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"16a1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},o=function(){return e.e("components/function").then(e.bind(null,"dc5b"))},a={data:function(){return{titles:"文章小助手"}},onLoad:function(){},methods:{go:function(){n.navigateTo({url:"./edit/edit"})}},components:{titles:u,func:o}};t.default=a}).call(this,e("6e42")["default"])},"38ff":function(n,t,e){"use strict";var u=e("d860"),o=e.n(u);o.a},"54fc":function(n,t,e){"use strict";(function(n){e("d656"),e("921b");u(e("66fd"));var t=u(e("7ea8"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"79af":function(n,t,e){"use strict";e.r(t);var u=e("16a1"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},"7ea8":function(n,t,e){"use strict";e.r(t);var u=e("0d7c"),o=e("79af");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("38ff");var c=e("2877"),i=Object(c["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=i.exports},d860:function(n,t,e){}},[["54fc","common/runtime","common/vendor"]]]);
});
require('pages/article/original/original.js');
__wxRoute = 'pages/article/reprint/tips/tips';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/reprint/tips/tips.js';

define('pages/article/reprint/tips/tips.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/reprint/tips/tips"],{"128a":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"68d7":function(t,n,e){"use strict";var u=e("a7e1"),r=e.n(u);r.a},"6a71":function(t,n,e){"use strict";e.r(n);var u=e("e2b3"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=r.a},"783e":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");u(e("66fd"));var n=u(e("e116"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a7e1:function(t,n,e){},e116:function(t,n,e){"use strict";e.r(n);var u=e("128a"),r=e("6a71");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("68d7");var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},e2b3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},r=function(){return e.e("components/title2").then(e.bind(null,"f6c0"))},i={data:function(){return{titles:"发布转载文章",titles2:"如何获得文章地址"}},components:{titles:u,titles2:r}};n.default=i}},[["783e","common/runtime","common/vendor"]]]);
});
require('pages/article/reprint/tips/tips.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"531e":function(t,e,n){"use strict";var u=n("d94e"),c=n.n(u);c.a},8271:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c})},c724:function(t,e,n){"use strict";(function(t){n("d656"),n("921b");u(n("66fd"));var e=u(n("f8b8"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d94e:function(t,e,n){},ecb4:function(t,e,n){"use strict";n.r(e);var u=n("ed4e"),c=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=c.a},ed4e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("components/title").then(n.bind(null,"eb68"))},c={data:function(){return{titles:"个人中心"}},methods:{go:function(){t.navigateBack({delta:1})}},components:{titles:u}};e.default=c}).call(this,n("6e42")["default"])},f8b8:function(t,e,n){"use strict";n.r(e);var u=n("8271"),c=n("ecb4");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("531e");var a=n("2877"),o=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports}},[["c724","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/article/original/edit/edit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/original/edit/edit.js';

define('pages/article/original/edit/edit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/original/edit/edit"],{"0a39":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");a(e("66fd"));var n=a(e("2334"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},2334:function(t,n,e){"use strict";e.r(n);var a=e("5a04"),u=e("2337");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("c761");var i=e("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},2337:function(t,n,e){"use strict";e.r(n);var a=e("c6a3"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a},"3c95":function(t,n,e){},"5a04":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},c6a3:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return e.e("components/title").then(e.bind(null,"eb68"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("components/jyf-Parser/index")]).then(e.bind(null,"82d2"))},c={data:function(){return{titles:"发布原创文章",html:"<div>hello world</div>",richs:"",src:""}},methods:{rich:function(){},uploadTitle:function(){var n=this;t.chooseImage({count:1,sourceType:["album "],success:function(t){n.src=t.tempFilePaths[0]}})},go:function(){t.navigateTo({url:"../addDisplayBit/addDisplayBit"})},back:function(){t.navigateBack({delta:1})}},components:{titles:a,parser:u}};n.default=c}).call(this,e("6e42")["default"])},c761:function(t,n,e){"use strict";var a=e("3c95"),u=e.n(a);u.a}},[["0a39","common/runtime","common/vendor"]]]);
});
require('pages/article/original/edit/edit.js');
__wxRoute = 'pages/article/original/addDisplayBit/addDisplayBit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/original/addDisplayBit/addDisplayBit.js';

define('pages/article/original/addDisplayBit/addDisplayBit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/original/addDisplayBit/addDisplayBit"],{"0a33":function(n,e,t){"use strict";(function(n){t("d656"),t("921b");o(t("66fd"));var e=o(t("25e5"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"25e5":function(n,e,t){"use strict";t.r(e);var o=t("a7f4"),i=t("786b");for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);t("4b12");var r=t("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"36f5":function(n,e,t){},"4b12":function(n,e,t){"use strict";var o=t("36f5"),i=t.n(o);i.a},"786b":function(n,e,t){"use strict";t.r(e);var o=t("b8f2"),i=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=i.a},a7f4:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},b8f2:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return t.e("components/title").then(t.bind(null,"eb68"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/jyf-Parser/index")]).then(t.bind(null,"82d2"))},u=function(){return t.e("components/disclaimer").then(t.bind(null,"4a36"))},r=function(){return t.e("components/personal").then(t.bind(null,"ed5f"))},a=function(){return t.e("components/product").then(t.bind(null,"ada7"))},c=function(){return Promise.all([t.e("common/vendor"),t.e("components/suspension")]).then(t.bind(null,"3c9c"))},l={data:function(){return{titles:"发布原创文章",html:"<div>hello world</div>",richs:""}},methods:{go:function(){this.$refs.child.go()},rich:function(){},addinfo:function(){n.navigateTo({url:"../../userinfo/userinfo"})},back:function(){n.navigateBack({delta:1})}},components:{titles:o,parser:i,disclaimer:u,personal:r,product:a,suspension:c}};e.default=l}).call(this,t("6e42")["default"])}},[["0a33","common/runtime","common/vendor"]]]);
});
require('pages/article/original/addDisplayBit/addDisplayBit.js');
__wxRoute = 'pages/article/userinfo/userinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/userinfo/userinfo.js';

define('pages/article/userinfo/userinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/userinfo/userinfo"],{"043b":function(e,t,n){},"6b06":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i})},"85cc":function(e,t,n){"use strict";var u=n("043b"),i=n.n(u);i.a},9534:function(e,t,n){"use strict";n.r(t);var u=n("6b06"),i=n("e006");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("85cc");var a=n("2877"),c=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},a2c9:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return n.e("components/title").then(n.bind(null,"eb68"))},i=function(){return n.e("components/title2").then(n.bind(null,"f6c0"))},o={data:function(){return{titles:"发布原创文章",stitles:"形象展示位",showPhone:!1,showWX:!1,phoneCheck:!1,WXCheck:!1,items:["阅读推荐","分享好文","深度解读","观点浅析"],index:1}},methods:{bindPickerChange:function(e){this.index=e.target.value},phone:function(t){console.log(e(t.detail.value," at pages\\article\\userinfo\\userinfo.vue:101")),this.showPhone=t.detail.value},WX:function(t){console.log(e(t.detail.value," at pages\\article\\userinfo\\userinfo.vue:105")),this.showWX=t.detail.value}},components:{titles:u,stitles:i}};t.default=o}).call(this,n("0de9")["default"])},d317:function(e,t,n){"use strict";(function(e){n("d656"),n("921b");u(n("66fd"));var t=u(n("9534"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e006:function(e,t,n){"use strict";n.r(t);var u=n("a2c9"),i=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=i.a}},[["d317","common/runtime","common/vendor"]]]);
});
require('pages/article/userinfo/userinfo.js');
__wxRoute = 'pages/article/productInfo/productInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/productInfo/productInfo.js';

define('pages/article/productInfo/productInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/productInfo/productInfo"],{3684:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},r=function(){return e.e("components/title2").then(e.bind(null,"f6c0"))},o={data:function(){return{titles:"发布原创文章",stitles:"添加产品/案例/服务"}},components:{titles:u,stitles:r}};n.default=o},4877:function(t,n,e){"use strict";e.r(n);var u=e("639b"),r=e("77b8");for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);e("8215");var c=e("2877"),i=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},5778:function(t,n,e){},"639b":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"77b8":function(t,n,e){"use strict";e.r(n);var u=e("3684"),r=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=r.a},8215:function(t,n,e){"use strict";var u=e("5778"),r=e.n(u);r.a},9583:function(t,n,e){"use strict";(function(t){e("d656"),e("921b");u(e("66fd"));var n=u(e("4877"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["9583","common/runtime","common/vendor"]]]);
});
require('pages/article/productInfo/productInfo.js');
__wxRoute = 'pages/article/consultation/consultation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/consultation/consultation.js';

define('pages/article/consultation/consultation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/consultation/consultation"],{"0146":function(t,n,e){"use strict";e.r(n);var u=e("a53c"),i=e("7a2d");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("52d3");var c=e("2877"),a=Object(c["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=a.exports},"52d3":function(t,n,e){"use strict";var u=e("8106"),i=e.n(u);i.a},6527:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},i=function(){return e.e("components/title2").then(e.bind(null,"f6c0"))},o={data:function(){return{titles:"发布原创文章",stitles:"快速咨询",used:!0,switchs:!0}},methods:{swit:function(n){console.log(t(n," at pages\\article\\consultation\\consultation.vue:58")),this.switchs=n.detail.value},sure:function(){this.used=!1}},components:{titles:u,stitles:i}};n.default=o}).call(this,e("0de9")["default"])},"7a2d":function(t,n,e){"use strict";e.r(n);var u=e("6527"),i=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=i.a},8106:function(t,n,e){},"915f":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");u(e("66fd"));var n=u(e("0146"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a53c:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})}},[["915f","common/runtime","common/vendor"]]]);
});
require('pages/article/consultation/consultation.js');
__wxRoute = 'pages/article/reprint/edits/edits';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/reprint/edits/edits.js';

define('pages/article/reprint/edits/edits.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/reprint/edits/edits"],{"008b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/title").then(e.bind(null,"eb68"))},u=function(){return e.e("components/disclaimer").then(e.bind(null,"4a36"))},c={data:function(){return{titles:"发布转载文章",like:!0}},methods:{likeIt:function(){this.like=!this.like},edits:function(){t.navigateTo({url:"../editingArticles/editingArticles"})},back:function(){t.navigateBack({delta:1})}},components:{titles:i,disclaimer:u}};n.default=c}).call(this,e("6e42")["default"])},"127e":function(t,n,e){},"180c":function(t,n,e){"use strict";e.r(n);var i=e("008b"),u=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=u.a},"204f":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");i(e("66fd"));var n=i(e("5336"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},5336:function(t,n,e){"use strict";e.r(n);var i=e("6775"),u=e("180c");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("a45b");var a=e("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},6775:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},a45b:function(t,n,e){"use strict";var i=e("127e"),u=e.n(i);u.a}},[["204f","common/runtime","common/vendor"]]]);
});
require('pages/article/reprint/edits/edits.js');
__wxRoute = 'pages/article/reprint/editingArticles/editingArticles';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/reprint/editingArticles/editingArticles.js';

define('pages/article/reprint/editingArticles/editingArticles.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/reprint/editingArticles/editingArticles"],{"02b4":function(e,n,t){"use strict";t.r(n);var o=t("826b"),i=t("2c62");for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);t("da6b");var c=t("2877"),r=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"2c62":function(e,n,t){"use strict";t.r(n);var o=t("bc48"),i=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=i.a},"826b":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.deletes=!1},e.e1=function(n){e.area=!0},e.e2=function(n){e.Xclose=!1},e.e3=function(n){e.deletes2=!1},e.e4=function(n){e.deletes3=!1},e.e5=function(n){e.area=!1})},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},a292:function(e,n,t){"use strict";(function(e){t("d656"),t("921b");o(t("66fd"));var n=o(t("02b4"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},b367:function(e,n,t){},bc48:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return t.e("components/title").then(t.bind(null,"eb68"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/jyf-Parser/index")]).then(t.bind(null,"82d2"))},u=function(){return t.e("components/disclaimer").then(t.bind(null,"4a36"))},c=function(){return t.e("components/personal").then(t.bind(null,"ed5f"))},r=function(){return t.e("components/product").then(t.bind(null,"ada7"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/suspension")]).then(t.bind(null,"3c9c"))},a={data:function(){return{titles:"发布转载文章",html:"<div>hello world</div>",richs:"",deletes:!0,deletes1:!0,deletes2:!0,deletes3:!0,text:"",area:!1,sets:"set",showNotes:!1,Xclose:!0,good:3,msg:3,comments:!1}},methods:{go:function(){this.$refs.child.go()},rich:function(){},set:function(){""==this.text?(this.area=!1,this.showNotes=!1):(this.showNotes=!0,this.area=!1,this.deletes1=!1)},comment:function(){e.navigateTo({url:"../../comment/comment"})},addinfo:function(){e.navigateTo({url:"../../userinfo/userinfo"})},back:function(){e.navigateBack({delta:1})}},components:{titles:o,parser:i,disclaimer:u,personal:c,product:r,suspension:s}};n.default=a}).call(this,t("6e42")["default"])},da6b:function(e,n,t){"use strict";var o=t("b367"),i=t.n(o);i.a}},[["a292","common/runtime","common/vendor"]]]);
});
require('pages/article/reprint/editingArticles/editingArticles.js');
__wxRoute = 'pages/article/comment/comment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article/comment/comment.js';

define('pages/article/comment/comment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/comment/comment"],{"0638":function(t,n,e){"use strict";(function(t){e("d656"),e("921b");u(e("66fd"));var n=u(e("0e3b"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"0e3b":function(t,n,e){"use strict";e.r(n);var u=e("3c73"),c=e("dcde");for(var o in c)"default"!==o&&function(t){e.d(n,t,function(){return c[t]})}(o);e("262a");var r=e("2877"),i=Object(r["a"])(c["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},"262a":function(t,n,e){"use strict";var u=e("678f"),c=e.n(u);c.a},"3c73":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c})},"678f":function(t,n,e){},dbdc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/title").then(e.bind(null,"eb68"))},c=function(){return e.e("components/title2").then(e.bind(null,"f6c0"))},o={data:function(){return{titles:"发布原创文章",stitles:"发布评论",comment:""}},methods:{comments:function(){}},components:{titles:u,stitles:c}};n.default=o},dcde:function(t,n,e){"use strict";e.r(n);var u=e("dbdc"),c=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=c.a}},[["0638","common/runtime","common/vendor"]]]);
});
require('pages/article/comment/comment.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

