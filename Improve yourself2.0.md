# 一、JS部分

## 1.ES6

http://interview.poetries.top/docs/design-pattern.html#es6

### 1. let 和 const

1. 一个声明变量，一个声明常量，两个都不能重复声明已经声明过的数据（`var` 可以）
2. `let`和`const`不存在变量提升，而`var`和function声明的函数有变量提升
3. 有暂时性死区
4. const：复合类型const变量保存的是引用。因为复合类型（如数组和对象）的常量不指向数据，而是指向数据(heap)所在的地址(stack)，所以通过 const 声明的复合类型只能保证其地址引用不变，但不能保证其数据不变。所以将一个对象声明为常量必须非常小心。

### 2. 箭头函数

- 参数如果只有一个，可以不加圆括号 `()`；
- 没有参数时，不能省略圆括号 `()`；
- 如果函数体只返回单一表达式，那么函数体可以不使用大括号 `{}` 和 `return`，直接写表达式即可；
- 在 3 的基础上，如果返回值是一个对象字面量，那么返回值需要加圆括号 `()`，避免被识别为代码块。
- 不能用作构造函数

箭头函数不会创建自己的this，因此不能用call、apply、bind来绑定this

### 3. class类

在ES6中直接使用class关键字来声明类

### 4. 解构赋值

数组解构和对象解构

### 5. 扩展运算符

### 6. 默认参数

### 7. Set

https://es6.ruanyifeng.com/#docs/set-map

### 8. Promise

https://es6.ruanyifeng.com/#docs/promise

1. Promise.prototype.then()
2. Promise.prototype.catch()
3. Promise.prototype.finally()
4. Promise.all() (所有都为fulfilled，p才为fulfilled，只要有一个为reject，p就为reject)
5. Promise.any()（只要有一个实例返回fulfilled就算成功，否则返回reject）
6. Promise.race()（只要有一个状态发生了改变，p的状态就变成这个状态）
7. Promise.allSettled()（当所有实例都返回结果后，最后的p的状态总是为fulfilled）
8. Promise.resolve()
9. Promise.reject()

## 2. 闭包

例子：https://segmentfault.com/a/1190000002957434

详解：https://www.jianshu.com/p/21a16d44f150

setTimeout：https://www.jianshu.com/p/9b4a54a98660

闭包就是可以访问函数内部变量的函数，她是一个定义在函数内部的函数，基于JS的垃圾回收机制，函数内部定义的变量在函数调用后就会被回收，如果想这个变量不被回收，并且能被外部函数调用的话，就可以使用闭包。

作用：读取函数内部变量，让这个函数中定义的变量始终保持在内存中，可以说是函数内部和外部沟通的桥梁

在实际项目中的应用：

书写一个方法时，隐藏内部定义的数据，不被外界访问

## 3. 执行上下文和作用域

https://www.cnblogs.com/love-life-insist/p/9063104.html

https://www.tyrocoder.cn/2020/05/28/JavaScript%E8%AF%AD%E8%A8%80%E6%A0%B8%E5%BF%83%E5%9F%BA%E7%A1%80/

JavaScript代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段作用域规则会确定。执行阶段由引擎完成，主要任务是执行可执行代码，执行上下文在这个阶段中的执行代码前创建。

## 4. 数据结构

## 5. 数据类型、深浅拷贝

- 基本数据类型：`undefined`、`null`、`boolean`、`number`、`string`、`symbol`  存放在栈中
- 引用数据类型：`object`、`array`、`function`   栈中存放堆中的引用地址

https://www.jianshu.com/p/87375f9a4725

## 6. this

https://www.runoob.com/w3cnote/js-call-apply-bind.html

## 7. 函数

函数声明，函数表达式，匿名函数，立即执行函数

## 8. for in 和 for of

https://www.jianshu.com/p/ee21c4c86d5d

 for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
 for in得到对对象的key或数组,字符串的下标
 for of和forEach一样,是直接得到值
 for of不能对象用

## 11.prototype和 __proto__

https://blog.csdn.net/cc18868876837/article/details/81211729

http://interview.poetries.top/docs/excellent.html#_7-%E5%8E%9F%E5%9E%8B

![image-20210430164440372](C:\Users\73699\AppData\Roaming\Typora\typora-user-images\image-20210430164440372.png)

```js
  console.log(Date.prototype)
  const time = new Date()

  console.log(time)
  console.log(time.__proto__) 
```

Date的prototype指向的是函数Date的原型对象，   -------显式原型

new出来的实例time的 `__proto__`的原型对象也指向同一个地址 --------隐式原型

```js
function Gouzhaoqi(){

    }
    console.log(Gouzhaoqi.prototype)
    const shili = new Gouzhaoqi()
    console.log(shili.__proto__)

    //  构造器上的原型对象指向的地址  和   实例上的__proto__原型对象指向的地址是同一个地址
    
    // 验证： 改变值
    Gouzhaoqi.prototype.changeme = function(){
      console.log('changeme')
    }
    console.log(Gouzhaoqi.prototype)
    console.log(shili.__proto__) //当我修改了构造函数的prototype原型属性时，
                                  // 已经在修改之前生成的实例上的__proto__属性也会改变
```

1。每个构造函数function都有一个prototype，即显式原型(属性)

2．每个实例对象都有一个_proto_，可称为隐式原型(属性)

3．对象的隐式原型的值为其对应构造函数的显式原型的值

4.内存结构(图)

5.总结:
函数的prototype属性:在定义函数时自动添加的，默认值是一个空object对象
对象的__proto__属性:创建对象时自动添加的，默认值为构造函数的prototype属性值程序员能直接操作显式原型，但不能直接操作隐式原型(ES6之前)

6.面试回答：

一个构造函数有一个显式原型prototype

通过构造函数生成的实例有一个隐式原型 `__proto__`，

他们都指向同一个地址，也就是他们的值是相等的

prototype是在定义构造函数时生成的，`__proto__`是在生成实例的时候生成的

当访问一个实例上的一个属性时，如果在实例身上没有这个属性就会去她的隐式原型`__proto__`上去找，一直找下去，向父对象再向爷爷对象，如果最后返回null则没有这个值，这样，通过`__proto__`属性将对象连接起来的这条链路就叫原型链

## 12. 数组去重、字符串去重

```js
var a =	[1,2,2,3]
var b = [...new Set(a)]
```

```js
var a = 'aabbccdff'
var b = [...new Set(a)].join('')
```

## 13. 交换两个变量，不使用第三个变量

https://blog.csdn.net/jdz321/article/details/46950285

## 14. 图片懒加载和预加载；预加载和预渲染

代码：https://www.cnblogs.com/rlann/p/7296660.html

https://blog.csdn.net/weixin_43443341/article/details/92806236

图片预加载是先把这些图片全部请求过来，然后如果在后面的代码中再遇到要请求这个图片的时候，就可以直接从本地加载这张图片就可以了，预加载的时候通过new Image().src=图片的请求路径，它的的使用场景就是在当知道用户有很大概率要浏览到这张图片的时候

图片懒加载就是当用户浏览到某个页面的时候再进行加载这个图片，一般的做法就是先把这个图片的src属性写成空或者一个loadding图片，并为这个图片设置一个自定义属性data-src为图片的真实路径，通过函数判断如果浏览到某个区域，则将img.src=img.getAttribute('data-src')即可



http://interview.poetries.top/docs/simply.html#_4-%E9%A2%84%E5%8A%A0%E8%BD%BD

## 15. 数组和链表的区别

https://blog.csdn.net/qq_25806863/article/details/70607204

## 16. import .. from 和import {..} from 区别

我的理解：

import .. from 是那个文件中只有一个export default导出的模块

import {..} from 是因为那个文件中有多个export 导出的模块，所以需要加个括号

https://blog.csdn.net/qq_36657291/article/details/81327423

## 17. ReferenceError和TypeError区别

1.首先：字面上的意思分别为引用错误和类型错误； 

2.作用域：ReferenceError就是在作用域中找不到、TypeError是在作用域中找到了但是 做了它不可能做的事情。

## 18. 事件流

https://www.cnblogs.com/liuafan/p/9525899.html

在DOM2级事件中规定的事件流有三个：1.事件捕获阶段，2.处于目标阶段，3.事件冒泡阶段

比如说，当点击一个页面的btn按钮，点击时，document对象首先会接收到click事件，然后事件沿着DOM树，逐级向下，一直传播到btn按钮上，此时就处于处于目标阶段，最后事件又沿着DOM树向上，有传播回文档

## 19. 事件委托

比如一个ul标签下有很多个li标签，我们得为每个li标签写一个事件函数 ，但是如果每个li标签都得写一个这样的事件的话，后期的维护工作就特别麻烦，编写代码特别繁琐，并且如果要添加一个新的li标签，又得写一个这样的事件函数，所以我们把这个监听函数写在父元素身上，当子元素监听到有事件产生的时候就向父元素冒泡，父元素在通过判断事件发生的类型，做出函数处理，这样，新添加的子元素也会有监听函数

# 二、浏览器部分

## 1. http和https有什么区别

大致理解：https = http + ssl协议 + 证书

http采用80端口， https采用443端口

https://www.cnblogs.com/spll/p/10565189.html

### 网络7层协议： 

物理层、数据链路层、网络层、传输层、会话层、表示层、应用层

![image-20210704113910174](C:\Users\73699\AppData\Roaming\Typora\typora-user-images\image-20210704113910174.png)

## 2. http和tcp\ip的关系

网络的七层协议：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层

http是应用层，解决如何包装数据，它是基于TCP进行连接的

TCP|IP是传输层和网络层，解决数据如何在网络中传输

https://www.cnblogs.com/xianlei/p/tcpip_http.html

## 3. https的连接过程

https://www.cnblogs.com/liyuhui-Z/p/7844880.html

https://blog.csdn.net/alan_gui/article/details/87180100?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-0&spm=1001.2101.3001.4242

## 4. tcp和udp的区别

- `TCP`是一个面向连接的、可靠的、基于字节流的传输层协议。
- `UDP`是一个面向无连接的传输层协议。
- `TCP`为什么可靠，是因为它有三次握手来保证双方都有接受和发送数据的能力。

## 5. tcp的三次握手和四次挥手

#### 三次握手

第一次：客户端发出请求TCP报文给服务端，我想连接你：我可以发数据

第二次：服务端收到请求结束listen阶段，返回TCP报文给客户端：我可以收到数据，也可以发数据，并且同意创建新连接

第三次：客户端收到信息，明确两者之间是可以正常传输数据的，并返回一段TCP报文：我可以收到信息

#### 四次挥手

第一次：客户端请求断开连接，发送数据给服务端：我想断开连接了，进入等待，但是还能收到从客户端发过来的信息

第二次：服务端收到消息，返回信息给客户端：我知道你想断开连接了，我也开始准备释放连接

第三次：服务端继续返回信息给服务器端：我已经准备好了可以释放，此时停止传输到客户端，但是能接受客户端发来的请求，（等待1msl，如果没搜到客户端的返回信息，就再发一遍）

第四次：服务器端收到请求，返回信息我知道你要释放连接了，我也即将断开（等待2msl，如多又收到了信息，则说明客户端没有收到返回信息，就再发一次，如果没有收到就彻底断开连接）

https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc

## 6. http

https://www.cnblogs.com/xianlei/p/Http.html

### http请求消息由请求行、请求头部、空行、请求数据

```
POST / HTTP1.1
Host:www.wrox.com
User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
Content-Type:application/x-www-form-urlencoded
Content-Length:40
Connection: Keep-Alive

name=Professional%20Ajax&publisher=Wiley
```

### http响应消息由状态行、消息报头、空行、响应正文

```
HTTP/1.1 200 OK
Date: Fri, 22 May 2009 06:07:21 GMT
Content-Type: text/html; charset=UTF-8

<html>
      <head></head>
      <body>
            <!--body goes here-->
      </body>
</html>
```

### 请求方法

HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。
HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。 

> GET     请求指定的页面信息，并返回实体主体。（get可以带json，但是得转码）
> HEAD     类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
> POST     向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中，POST请求可能会导致新的资源的建立和/或已有资源的修改。
> PUT     从客户端向服务器传送的数据取代指定的文档的内容。
> DELETE      请求服务器删除指定的页面。
> CONNECT     HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
> OPTIONS     允许客户端查看服务器的性能。
> TRACE     回显服务器收到的请求，主要用于测试或诊断。

### PUT和POST

 PUT和POST都有更改指定URI的语义.但PUT被定义为idempotent的方法，POST则不是.idempotent的方法:如果一个方法重复执行多次，产生的效果是一样的，那就是idempotent的。也就是说：

PUT请求：如果两个请求相同，后一个请求会把第一个请求覆盖掉。（所以PUT用来改资源）

Post请求：后一个请求不会把第一个请求覆盖掉。（所以Post用来增资源）

### GET和POST的区别

1. 1. GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连，如EditPosts.aspx?name=test1&id=123456. POST方法是把提交的数据放在HTTP包的Body中.
   2. GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制.
   3. GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。
   4. GET方式提交数据，会带来安全问题，比如一个登录页面，通过GET方式提交数据时，用户名和密码将出现在URL上，如果页面可以被缓存或者其他人可以访问这台机器，就可以从历史记录获得该用户的账号和密码.

## 7. 性能优化

#### 图片懒加载

#### 路由懒加载

#### cdn

> `CDN`的原理是尽可能的在各个地方分布机房缓存数据，这样即使我们的根服务器远在国外，在国内的用户也可以通过国内的机房迅速加载资源。

> 因此，我们可以将静态资源尽量使用 `CDN` 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 `CDN` 域名。并且对于 `CDN` 加载静态资源需要注意 `CDN` 域名要与主站不同，否则每次请求都会带上主站的 `Cookie`，平白消耗流量



# 三、HTML部分

## 1.HTML5里面的语义化元素

语义=意义

语义元素=有意义的元素

```
<header> <nav> <section> <article> <aside> <figcaption> <figure><footer>
```

和普通div的区别：

1. 有利于搜索引擎收录
2. 有利于浏览器渲染
3. 利于代码维护

# 四、CSS部分

## 1. 实现水平垂直居中的方法

- flex布局

```css
align-items:  center;
justify-content: center;
```

- 子绝父相--子高度确定

```css
top: 50%；
left: 50%;
margin-top: 100px;
margin-left: 100px;
```

- 子绝父相--子高度不确定transform

```css
top: 50%；
left: 50%;
transform: translate(-50%, 50%)
```



## 2. position定位

relative、absolute、fixed

https://www.runoob.com/w3cnote/css-position-static-relative-absolute-fixed.html

## 3. 圣杯模型

## 4. CSS3新增属性

border属性：border-color, border-image, border-radius, border-shadow, 

background属性、transform、transition动画特效

https://blog.csdn.net/weixin_45959504/article/details/103790736

## 5. 伪类和伪元素

https://blog.csdn.net/liwenfei123/article/details/80682156

## 6. em和rem

https://www.cnblogs.com/wind-lanyan/p/6978084.html

注意chrome的最小字体为12px

## 7.盒模型

https://blog.csdn.net/zwkkkk1/article/details/79678177

iIE盒模型：width =  content +  padding + border

W3C标准盒模型：width = content

## 8. BFC

https://www.jianshu.com/p/0fb2f90418c3

`BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局

1.解决同一个 BFC 下margin重叠问题

2.BFC(父元素)可以包含浮动的子元素（给父元素添加BFC可以清除子元素的浮动）（高度坍塌）

3.BFC可以阻止元素被浮动元素覆盖（将被覆盖的元素添加BFC，可以不被浮动的元素覆盖）

#### BFC特性：

1. 内部的Box会在垂直方向，从顶部开始一个接一个地放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生叠加
3. 每个元素的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box叠加。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
6. 计算BFC的高度时，浮动元素也参与计算。

#### 创造BFC：

- 根元素
- float的值不为none
- overflow的值不为visible
- position的值为absolute或fixed
- display的值为inline-block、table-cell、table-caption

> display：table也认为可以生成BFC，其实这里的主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC

## 9. 怎么样让一个元素消失

display: none;	元素消失，页面元素没有，无占位，元素上的事件不能执行

visibility: hidden;	元素消失，页面元素存在，并且占位，元素上的事件不能执行

opacity: 0;	元素消失，页面元素存在，并且占位，元素上的时间能够执行（只是透明度为0）

# 五、Vue

## 1. 生命周期

http://interview.poetries.top/docs/simply.html#_7-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F

http://interview.poetries.top/fe-vue-docs/docs/vue-component.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F (明了)

beforeCreate   created 

beforeMount   mounted

beforeUpdate   updated

beforeDestroy   destroyed

## 2. 路由跳转方式

一般有两种：

1. 通过 `<router-link to="home">`，router-link 标签会渲染为 `<a>` 标签，在 template 中的跳转都是用这种；
2. 另一种是编程式导航，也就是通过 JS 跳转，比如 `router.push('/home')`。

## 3. v-show 与 v-if 区别

http://interview.poetries.top/fe-vue-docs/docs/vue-component.html#v-show-%E4%B8%8E-v-if-%E5%8C%BA%E5%88%AB

https://www.jianshu.com/p/7af8554d8f08

## 4. 计算属性computed和 watch 的区别

我的理解：计算属性是计算一个想要计算的值，直接对它进行计算，对应的直接是想要的结果；

watch是这个值在改变，然后会导致页面其他部分发生变化，对应的是导致变化的原因

**computed：** 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；

**watch：** 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

## 5. $nextTick()

https://www.jianshu.com/p/a7550c0e164f

## 6. 组件间通信

https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw%3D%3D&chksm=fc10c116cb674800b2757be9eb27fe20709de0e511b834d8bb6b23171218fa4a1cfd5f87596c&idx=1&mid=2247484224&scene=21&sn=3043891f60d99afcf74dffd6b9b51ff7#wechat_redirect

#### 1. 使用props     父 => 子

#### 2. 使用ref操作子组件       父 访问 子

```xml
<template>
  <div id="app">
    <HelloWorld ref="hello"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>
```

```js
this.$refs.hello.msg  // 访问子组件data中的msg
this.$refs.hello.getUserList()   // 调用子组件中的getUserList() 方法
```

#### 3. 使用$emit操作父组件的方法   子 => 父

```js
this.$emit('add', good)
```

## 7.MVVM

MVVM 源自于经典的 Model–View–Controller（MVC）模式  ，MVVM 的出现促进了前端开发与后端业务逻辑的分离，极大地提高了前端开发效率，MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互，起呈上启下作用

（1）View 层

View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建 。

（2）Model 层

Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。

（3）ViewModel 层

ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的，比如页面的这一块展示什么，而页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互），视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层。

MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图，MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。

## 8. mixin

优点：来分发 Vue 组件中的可复用功能

缺点：



- 混入对象的钩子将在组件自身钩子**之前**调用。

```js
var mixin = {
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('组件钩子被调用')
  }
})

// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

- 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

```js
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```

## 9.自定义指令

例子：输入框默认处于聚焦状态

-  注册一个全局自定义指令 `v-focus`

```js
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

- 注册局部指令，组件中也接受一个 `directives` 的选项

```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

使用：   <input v-focus>

## 10. 虚拟DOM

Vue 通过建立一个**虚拟 DOM** 来追踪自己要如何改变真实 DOM。请仔细看这行代码：

```js
return createElement('h1', this.blogTitle)
```

createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“VNode”。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

## 11. 说说你对 SPA 单页面的理解，它的优缺点分别是什么？

SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

**优点：**

- 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
- 基于上面一点，SPA 相对对服务器压力小；
- 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

**缺点：**

- 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
- 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
- SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势

## 12. Vue 不能检测到变化

- 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
- 当你修改数组的长度时，例如：`vm.items.length = newLength`

## 13. Vue中的父子组件生命周期执行

- 加载渲染：

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

- 子组件更新：

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

- 父组件更新：

父 beforeUpdate -> 父 updated

- 销毁

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## 14.组件中 data 为什么是一个函数

因为组件复用的原因嘛，使用闭包的原理，为每个组件的作用域进行隔离

## 15.Vue 框架怎么实现对象和数组的监听？

通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听

## 16.虚拟 DOM 的优缺点

**优点：**

- **保证性能下限：** 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
- **无需手动操作 DOM：** 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
- **跨平台：** 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

**缺点:**

- **无法进行极致优化：** 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

## 15. Vue 中的 key 有什么作用

key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速

**更准确**：因为带 key 就不是就地复用了，在 sameNode 函数 `a.key === b.key` 对比中可以避免就地复用的情况。所以会更加准确。

**更快速**：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快

## 16.路由导航守卫

使用router.beforeEach()

to 将要访问的路径

from 代表从哪个路径跳转而来

next 是一个函数，表示放行

```js
router.beforeEach((to, from, next) => {
  if(to.path === "./login") return next()
  const hasToken = window.sessionStorage.getItem('token')
  if(!hasToken) return next('./login')
  next()
})
```

## 17.vue双向绑定

https://juejin.cn/post/6844903918753808398#heading-21



# 六、React

## 1.react的生命周期

### a. 挂载和卸载阶段

#### constructor()

完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
 注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。

#### componentWillMount()

组件已经经历了constructor()初始化数据后，但是还未渲染DOM时

#### componentDidMount()

在组件已经被渲染到 DOM 中后运行，可调用请求，返回数据setState后组件会重新渲染

#### componentWillUnmount()

在组件即将要被销毁的时候运行，可以在这里面设置：

```js
this.setState = () => {}
```

### b. 更新过程

#### componentWillReceiveProps()

在接受父组件改变后的props需要重新渲染组件时用到的比较多

#### shouldComponentUpdate()

1. 主要用于性能优化(部分更新)

2. 唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
3. 因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断

#### componentWillUpdate()

#### componentDidUpdate()

#### render()

## 2.setState是同步还是异步

https://zhuanlan.zhihu.com/p/158725289

（1）本身并不是一个异步方法，其之所以会表现出一种异步的形式，是因为react框架本身的一个性能优化机制

>  React会将多个setState的调用合并为一个来执行，也就是说，当执行setState的时候，state中的数据并不会马上更新

如何解决这个带来的问题：

1. 使用回调函数：

```js
this.setState({
  number:3
},()=>{
  console.log(this.state.number)
})
```

2. 使用setTiemout

```js
setTimeout(()=>{
  this.setState({number:3})
  console.log(this.state.number)
},0)
```

（2）React 中 setState 什么时候是同步的，什么时候是异步的

当由react引起的事件处理(如onClick事件)就会异步更新（onClick事件中有setState），如果是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用，这样就会同步执行this.state

## 3. 什么是高阶组件

https://blog.csdn.net/mapbar_front/article/details/79697863

组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。

## 4. react如何处理异常

https://www.cnblogs.com/zxm1993/p/13965094.html

componentDidCatch

## 5. Hooks 与 Class 中调用 setState 有不同的表现差异么?

https://www.kancloud.cn/freya001/interview/1443630

class中的setState会有一个合并的操作，然后Hooks中没有(是直接替换值)

## 6.redux(react-redux)

`Redux`是将整个应用状态存储到一个地方上称为`store`,里面保存着一个状态树`store tree`,组件可以派发(`dispatch`)行为(`action`)给`store`,而不是直接通知其他组件，组件内部通过订阅`store`中的状态`state`来刷新自己的视图

> 如果你想对数据进行修改，`只有一种途径：派发 action`。action 会被 reducer 读取，进而根据 action 内容的不同对数据进行修改、生成新的 state（状态），这个新的 state 会更新到 store 对象里，进而驱动视图层面做出对应的改变。

有一个action用来触发store里面的数据更新

有一个reducer，专门用来处理发送过来的action，作用是将新的state返回给store

```js
connect(mapStateToProps, mapDispatchToProps)(ComA)
```

#### 从编码的角度理解 Redux 工作流

1. 使用 `createStore 来完成 store 对象的创建`

```js
// 引入 redux
import { createStore } from 'redux'
// 创建 store
const store = createStore(
    reducer,
    initial_state,
    applyMiddleware(middleware1, middleware2, ...)
);
```

createStore 方法是一切的开始，它接收三个入参：

- reducer；
- 初始状态内容；
- 指定中间件

1. `reducer 的作用是将新的 state 返回给 store`

一个 reducer 一定是一个纯函数，它可以有各种各样的内在逻辑，但它最终一定要返回一个 state：

```js
const reducer = (state, action) => {
    // 此处是各种样的 state处理逻辑
    return new_state
}
```

当我们基于某个 reducer 去创建 store 的时候，其实就是给这个 store 指定了一套更新规则：

```js
// 更新规则全都写在 reducer 里 
const store = createStore(reducer)
```

1. action 的作用是通知 reducer “让改变发生”

> 要想让 state 发生改变，就必须用正确的 action 来驱动这个改变。

```js
const action = {
  type: "ADD_ITEM",
  payload: '<li>text</li>'
}
```

> action 对象中允许传入的属性有多个，但只有 type 是必传的。type 是 action 的唯一标识，reducer 正是通过不同的 type 来识别出需要更新的不同的 state，由此才能够实现精准的“定向更新”。

1. 派发 action，靠的是 dispatch

action 本身只是一个对象，要想让 reducer 感知到 action，还需要“派发 action”这个动作，`这个动作是由 store.dispatch 完成的`。这里我简单地示范一下：

```js
import { createStore } from 'redux'
// 创建 reducer
const reducer = (state, action) => {
    // 此处是各种样的 state处理逻辑
    return new_state
}
// 基于 reducer 创建 state
const store = createStore(reducer)
// 创建一个 action，这个 action 用 “ADD_ITEM” 来标识 
const action = {
  type: "ADD_ITEM",
  payload: '<li>text</li>'
}
// 使用 dispatch 派发 action，action 会进入到 reducer 里触发对应的更新
store.dispatch(action)
```

#### redux 中间件

> 中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过 滤，日志输出，异常报告等功能

## 7. react中的路由(react-router-dom)

使用browserRouter在开发中没问题，部署后有问题：

https://www.cnblogs.com/sunLemon/p/9020153.html

区别：

https://www.cnblogs.com/flamestudio/p/11965991.html

1.刷新后对路由state参数的影响

   1.BrowserRouter没有任何影响，因为state保存在history对象中

   2.HashRouter刷新后会导致路由state参数的丢失

2.底层原理不一样：

​    BrowserRouter使用的时H5的history API,不兼容ie9及以下版本，

​    HashRouter 使用的是RUL的哈希值

3.表现形式不一样

   BrowserRouter 的路径中没有#，

   HashRouter的路径中包含#，但请求数据不包括#后面的内容

4.备注 HashRouter可以用于解决一些路径错误相关的问题

## diff算法是怎么运作

节点类型 ---》节点的prop---》一层一层的往下比较，一直到没有节点

每一种节点类型有自己的属性，也就是prop，每次进行diff的时候，react会先比较该节点类型，假如节点类型不一样，那么react会直接删除该节点，然后直接创建新的节点插入到其中，假如节点类型一样，那么会比较prop是否有更新，假如有prop不一样，那么react会判定该节点有更新，那么重渲染该节点，然后在对其子节点进行比较，一层一层往下，直到没有子节点





# 七、工作遇到的难点

## 1.IE项目权限树功能

在这个功能中需要点击角色的下拉框，然后更改角色，对应的权限树也应该更新，但是权限树的更新总是在角色更新后的慢一步，setState后在另一个函数调用state的值没有更新

解决：在更改角色时的setState是使用第二个回调函数，去获取权限树的接口



## 2. 编辑功能

点击列表后面的编辑按钮，没有请求接口，而是传入scope.row到编辑弹框中，然后对弹框内容直接赋值

```js
	showEditDialog(site) {
      
      this.siteform = site;
      this.dialogTitle = "编辑站点";
      this.adddialogVisible = true;
    },
```

但是这样关闭之后，table中的这条数据会改改变

# 八、一些总结

#### 1. 对数据的处理，多使用扩展运算符

```js
this.siteform = { ...site, person: site.person.split(",") }
```

#### 2. 在vue中动态渲染，和在react中动态渲染

vue：

可以使用v-if 或者v-show ，通过改变绑定的值，去动态渲染

这样的麻烦就是每次都得通过条件去更改这个绑定的值

react：

可以直接在jsx中判断，同时直接渲染

#### 3. 使用vue的dialog表单

当添加、编辑和详情公用一个dialog表单时，必须在关闭dialog 的时候重置一下表单，否则会出现不必要的表单验证提醒

#### 4. vue中点击编辑表单

点击编辑按钮，通过scope.row传过来的值，直接赋值给表单绑定的form，在进行更改的时候是会出现表单元素改不了

解决：深拷贝，可以使用es6的扩展运算符

```js
showChangeDialog(work) {
    this.changeForm = {};
    this.changeDialogVisible = true;
    // this.changeForm.consId = work.id;
    // this.changeForm.status = work.status; //这里会导致更改状态的时候表单还是显示的原来的work中的status
    this.changeForm = {...work}
},
```

#### 5. websocket

```js
	const ws = new WebSocket(this.socketBASEURL + "outOfEf");
    ws.onopen = () => {
      console.log("ws连接状态：" + ws.readyState);
      //连接成功则发送一个数据
    };
    ws.onmessage = (msg) => {
      console.log(msg);
      if (msg.data !== "连接成功") {
        console.log(msg.data);
        let warnWorkData = JSON.parse(msg.data);
        console.log(warnWorkData)
      }
    };
```

