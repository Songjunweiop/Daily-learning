## 浏览器

### 浏览器渲染一个页面的流程

https://juejin.im/post/6844903501953237006

首先浏览器要先对服务器发送请求获得`HTML`文件，得到`HTML`文件后开始构建`DOM`树，在遇见`<link>`标签时浏览器需要向服务器再次发出请求来获得`CSS`文件，然后则是继续构建`DOM`树和`CSSOM`树，浏览器合并出渲染树，根据渲染树进行布局计算，执行绘制操作，页面渲染完成。

### 输入一个URL，浏览器的反应？

https://www.imooc.com/article/45936

首先浏览器得将这个url地址对应的IP地址找到，首先在缓存中查找，查找的顺序是浏览器缓存，系统缓存，和路由器缓存，如果这些缓存中都没有，就向DNS服务器查询，查询到这个IP地址后，浏览器根据这个IP地址和端口号封装在一个tcp包中，进行tcp连接，然后经过传输层，网络层，数据链路层，物理层到达服务器，服务器做出反应返回这个请求所需要的html，然后浏览器在渲染这个html文件就可以了



### 白屏时间

### 说一下HTML5 drag api

### 几个很实用的BOM属性对象方法?

###  说一下web Quality（无障碍）

### Cookie、sessionStorage、localStorage的区别

https://www.cnblogs.com/cencenyue/p/7604651.html

https://www.cnblogs.com/pengc/p/8714475.html

https://blog.csdn.net/weixin_42614080/article/details/90706499

https://www.cnblogs.com/cencenyue/p/7604651.html

### web worker

https://segmentfault.com/a/1190000012528806

### websocket

https://www.runoob.com/html/html5-websocket.html

### 浏览器缓存

https://www.jianshu.com/p/54cc04190252

### 跨域

https://segmentfault.com/a/1190000015597029

### CSRF攻击

https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html





## HTML/CSS

### 说一下http和https

https://www.cnblogs.com/spll/p/10565189.html

### TCP/IP协议和http协议的区别

https://www.cnblogs.com/xianlei/p/tcpip_http.html

### GET和POST的区别

https://www.cnblogs.com/xianlei/p/Http.html

### 三次握手和四次挥手

https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc

https://blog.csdn.net/qq_38950316/article/details/81087809

### html语义化

https://blog.csdn.net/eeeecw/article/details/80591511?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param

### http状态码

https://www.runoob.com/http/http-status-codes.html

### 前端优化

https://baijiahao.baidu.com/s?id=1628591301581843202&wfr=spider&for=pc

https://upload-images.jianshu.io/upload_images/13508001-cc861c4ce8993dc5.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp

### BFC

https://www.jianshu.com/p/0fb2f90418c3

http://interview.poetries.top/docs/base.html#_5-%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E5%9D%97%E7%BA%A7%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B8%8A%E4%B8%8B%E6%96%87-block-formatting-context-bfc%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8

1.解决同一个 BFC 下margin重叠问题

2.BFC(父元素)可以包含浮动的子元素（给父元素添加BFC可以清除子元素的浮动）

3.BFC可以阻止元素被浮动元素覆盖（将被覆盖的元素添加BFC，可以不被浮动的元素覆盖）

### 垂直居中的方法

法一：父元素display:flex,align-items:center;

法二：元素绝对定位，top:50%，margin-top：-（高度/2）

法三：高度不确定用transform：translateY（-50%）

法四：line-height

### 怎么样让一个元素消失，讲讲

display: none;	元素消失，页面元素没有，无占位，元素上的时间不能执行

visibility: hidden;	元素消失，页面元素存在，并且占位，元素上的事件不能执行

opacity: 0;	元素消失，页面元素存在，并且占位，元素上的时间能够执行（只是透明度为0）



## JS

### Event Loop

http://interview.poetries.top/blog-docs/javascript/-JavaScript%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6Event%20Loop.html#%E4%B8%80%E3%80%81javascript%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B



### es6数组新方法

### js的数据类型，两种数据类型的区别

https://www.jianshu.com/p/87375f9a4725

https://www.cnblogs.com/cxying93/p/6106469.html

### 从原理上谈ajax

### null 和 undefined 有什么区别？

undefined是没有定义，null是定义了没有赋值

### 什么是闭包？闭包的优缺点？

http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html

https://segmentfault.com/a/1190000002957434

闭包就是能够访问函数内部变量的函数，它是定义在一个函数内部的函数，以往在函数内部定义的变量在这个函数被调用之后就会被JS的立即回收机制回收，然后如果想要让这个变量不被回收，并且能够被函数外读取，就可以使用闭包，闭包大致就是用来可以读取函数内部的变量，以及让这些内部定义的变量始终保持在内存中，也就是这个函数的环境一直存在，可以说它是将函数内部和函数外部链接的桥梁，

若想要使用一个函数的变量，但是又不想被任意修改，这时候就可以是用闭包

定时器，计时器，

缺点：1.不能滥用闭包，因为函数的变量都保存在内存中，滥用会影响网页的性能。解决方法就是在不使用之后将变量删除，也就是赋值为null

2.如果父函数是一个对象，而这个被外部使用的变量是这个对象的私有属性，就不能随意在外部修改这个变量的值

好处

①保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突

②在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）

③匿名自执行函数可以减少内存消耗

坏处

①其中一点上面已经有体现了，就是被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为null；

②其次由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响



### 类的创建和继承

### 事件流

https://www.cnblogs.com/liuafan/p/9525899.html

在DOM2级事件中规定的事件流有三个：1.事件捕获阶段，2.处于目标阶段，3.事件冒泡阶段

比如说，当点击一个页面的btn按钮，点击时，document对象首先会接收到click事件，然后事件沿着DOM树，逐级向下，一直传播到btn按钮上，此时就处于处于目标阶段，最后事件又沿着DOM树向上，有传播回文档





### 事件委托

比如一个ul标签下有很多个li标签，我们得为每个li标签写一个事件函数 ，但是如果每个li标签都得写一个这样的事件的话，后期的维护工作就特别麻烦，编写代码特别繁琐，并且如果要添加一个新的li标签，又得写一个这样的事件函数，所以我们把这个监听函数写在父元素身上，当子元素监听到有事件产生的时候就向父元素冒泡，父元素在通过判断事件发生的类型，做出函数处理，这样，新添加的子元素也会有监听函数



### 图片的懒加载和预加载

代码：https://www.cnblogs.com/rlann/p/7296660.html

https://blog.csdn.net/weixin_43443341/article/details/92806236

预加载是先把这些图片全部请求过来，然后如果在后面的代码中再遇到要请求这个图片的时候，就可以直接从本地加载这张图片就可以了，预加载的时候通过new Image().src=图片的请求路径，它的的使用场景就是在当知道用户有很大概率要浏览到这张图片的时候

懒加载就是当用户浏览到某个页面的时候再进行记载这个图片，一般的做法就是先把这个图片的src属性写成空或者一个loadding图片，并为这个图片设置一个自定义属性data-src为图片的真实路径，通过函数判断如果浏览到某个区域，则将img.src=img.getAttribute('data-src')即可





### 改变函数this的指针

https://www.runoob.com/w3cnote/js-call-apply-bind.html

call，apply，bind

call:

song.func.call(shi,'俊','威');

song.func.apply(shi,['俊','威'])

song.func.bind(shi,'俊','威')();





### 异步加载JS的方法

async，

使用script标签，插入到head中



### 节流与防抖

https://www.cnblogs.com/coco1s/p/5499469.html



### 实现一个once函数，传入函数参数只执行一次

https://blog.csdn.net/zhan_lijian/article/details/84304412

```javascript
    function test() {
      console.log('test')
    }

    var once = function(fn) {
      var isFirst = true;
      return function() {
        if (isFirst) {
          isFirst = !isFirst;
          fn();
        }
      };
    };

    var b = once(test);
    console.log(b)
    b(); // 'test'
    b(); // nothing
    console.log(b)
```





### Promise,async/await

### 数组的常用方法

### 数组去重

1.indexof

用for循环数组，indexof(a[i]!==-1)时，newarr.push(a[i])

2.ES6中的Set：  

```javascript
  let arr = [11, 22, 11, 55, 22, 66, 11]

  let arrry = []

  arrry = new Set(arr)

  console.log(arrry)

  console.log([...arrry])//这里的"..."将arrry由Set对象转为array对象
```

![image-20200908193942434](C:\Users\songjunwei\AppData\Roaming\Typora\typora-user-images\image-20200908193942434.png)



### 重排和重绘，讲讲看

重绘（repaint或redraw）：当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

触发重绘的条件：改变元素外观属性。如：color，background-color等。

注意：table及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用table布局页面的原因之一。

重排（重构/回流/reflow）：当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。

重绘和重排的关系：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。所以，重排必定会引发重绘，但重绘不一定会引发重排。

### js字符串转数字的方法



## Vue

### vue router的两种模式，钩子函数。

### vue双向数据绑定？追问为什么vue2.0更改数组长度和通过索引更改数据没用?

### vue渲染是异步的吗？

### vue渲染是个什么步骤？

### vue中的指令哪个可以优化性能？

v-once，只渲染这个元素或组件一次，后面的重绘或者重排都会视其为静态内容

### vue中阻止事件冒泡

阻止事件冒泡：.stop

阻止默认事件，例如a标签：.prevent

用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击

### 自定义按键修饰符

Vue.config.keycodes.[名称]=[数字]    例： Vue.config.keyCodes.aaa = 65

### Vue中为什么v-for和v-if不建议同时使用

这个涉及到优先级的问题，v-for的优先级大于v-if的优先级，所以在渲染时，会先执行v-for把这个列表循环出来，然后再判断v-if的值是true还是false，所以当循环出来之后再去判断是否显示，会很影响页面的性能，所以不推荐，可以在v-for标签的外层套一个`<template>`或者`<div>`并在这个标签中进行v-if的判断

### Vue中的路由懒加载

在打开一个页面时，有很多个路由跳转地址，在vue-router的js文件中得去导入这些组件模块，如果不使用路由懒加载，当打开首页时，其他还未打开的页面组件中的js文件也会加载，这就会时首页的打开速度变慢，影响页面性能，所以使用路由懒加载之后，当打开首页时，就可以暂时不加载这个页面组件中的内容，仅当点击这个路由连接的时候才会加载里面的内容



### Vue中通过索引改变数组的值被限制

在vue中对数组通过索引的方式对数组进行更改（或者对数组的长度发生变化）例如：

```javascript
var vm=new Vue({
				el:'#app',
				data(){
					return{
						colors:['红','黄','蓝']
					}
				},
				methods:{
					change(){
						console.log(this.colors)
						this.colors[0]='黑'   //这里修改
						console.log(this.colors)
					}
				}
			})
```

或者：

```javascript
var vm=new Vue({
				el:'#app',
				data(){
					return{
						colors:['红','黄','蓝']
					}
				},
				methods:{}
			})
vm.colors[0]='黑'     //在这里修改
```

上面两种情况在浏览器显示时，还是以更改之前的数组展示在页面上，也就是Vue2并检测不到数组的变化

这时，可以通过vm实例上的一个方法：`$set`

```javascript
vm.$set(vm.colors, 0, '黑')
```

或者

```javascript
vm.colors.splice(0, 1, '黑')
```

这样vue就会检测到splice方法，并对其进行劫持，再进行视图更新



### vue中的data为什么要返回的是一个函数

闭包

如果data是一个函数的话，这样每复用一次组件，就会返回一份新的`data`，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份`data`，就会造成一个变了全都会变的结果。

所以说vue组件的data必须是函数。这都是因为js的特性带来的，跟vue本身设计无关。

js本身的面向对象编程也是基于原型链和构造函数，应该会注意原型链上添加一般都是一个函数方法而不会去添加一个对象了。

 

## 打包工具

- webpack原理
- webpack的loader和plugin的区别



























































