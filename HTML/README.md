# HTML与浏览器

## `Doctype 作用？标准模式与兼容模式各有什么区别`

- DOCTYPE是用来声明文档类型和DTD规范的。

- `<!DOCTYPE html>`声明位于HTML文档中的第一行，不是一个HTML标签，处于 html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。

- DOCTYPE不存在或格式不正确会导致文档以`兼容模式`呈现。

- `标准模式(严格模式)`: 排版 和 JS 运作模式都是以该浏览器支持的`最高标准`运行。
- 在`兼容模式(混杂模式)`:页面以宽松的`向后兼容`的方式显示,模拟老式浏览器的行为以防止站点无法工作。
- `怪异模式`：怪异模式则是使用`浏览器自己`的方式来解析执行代码。

- 在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容

- HTML5不基于SGML，所以不用指定DTD

## `HTML 全局属性`

全局属性是所有HTML元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

[全局属性 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)

## `canvas和svg的区别`

- canvas是html5提供的新元素`<canvas\>`，而svg存在的历史要比canvas久远，已经有十几年了。svg并不是html5专有的标签，最初svg是用xml技术（超文本扩展语言，可以自定义标签或属性）描述二维图形的语言。在H5中看似canvas与svg很像，但是，他们有巨大的差别。

- 首先，从它们的功能上来讲，canvas可以看做是一个画布。其绘制出来的图形为**标量图**，因此，可以在canvas中引入jpg或png这类格式的图片，在实际开发中，大型的网络**游戏**都是用canvas画布做出来的，并且canvas的技术现在已经相当的成熟。另外，我们喜欢用canvas来做一些统计用的图表，如柱状图曲线图或饼状图等。

- 而svg，所绘制的图形为**矢量图**，所以其用法上受到了限制。因为只能绘制矢量图，所以svg中不能引入普通的图片，因为矢量图的不会失真的效果，在项目中我们会用来**做小图标**。但是由于其本质为矢量图，可以被无限放大而不会失真，这很适合被用来做地图，而百度地图就是用svg技术做出来的。

- 另外从技术发面来讲canvas里面绘制的图形不能被引擎抓取，如我们要让canvas里面的一个图片跟随鼠标事件: `canvas.onmouseover=function(){}`。

- 而svg里面的图形可以被引擎抓取，支持事件的绑定。另外canvas中我们绘制图形通常是通过javascript来实现，svg更多的是通过标签来来实现，如在svg中绘制正矩形形就要用`<rect>`，这里我们不能用属性`style="width:XXX;height:XXX;"`来定义。

## `行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？`

定义：CSS 规范规定，每个元素都有 `display` 属性，确定该元素的类型，每个元素都有默认的 display 值，如 `div` 的 display 默认值为“`block`”，则为“块级”元素；`span` 默认 display 属性值为“`inline`”，是“行内”元素。

- 行内元素有：`<a><b><span><img><input><select><strong>（强调的语气）`
- 块级元素有：`<div><ul><ol><li><dl><dt><dd><h1>…<p>`
- 空元素：
  - 常见: `<br><hr><img><input><link><meta>`
  - 不常见: `<area><base><col><command><embed><keygen><param><source><track><wbr>`

不同浏览器（版本）、HTML4（5）、CSS2 等实际略有差异
参考: <http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements>

## `页面导入样式时，使用 <link> 和 @import 有什么区别`

- `<link>` 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；而 `@import` 是 CSS 提供的，只能用于加载 CSS;
- 页面被加载的时，link 会同时被加载，而 `@import` 引用的 CSS 会等到页面被加载完再加载;
- `@import` 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 `<link>` 是 XHTML 标签，无兼容问题;
- `<link>` 支持使用 js 控制 DOM 去改变样式，而 `@import` 不支持;

## `介绍一下你对浏览器内核的理解`

- 主要分成两部分：`渲染引擎`(layout engineer 或 Rendering Engine)和 `JS 引擎`。

  - `渲染引擎`：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后渲染到用户的屏幕上。
  - `JS 引擎`：解析和执行 javascript 来实现逻辑和控制 DOM 进行交互。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。

## `HTML5变化`

- [新的语义化元素](http://www.w3school.com.cn/html/html5_new_elements.asp)
  - `<header><footer><nav><main><article><section>`
  - 删除了一些纯样式的标签
- [表单增强](http://caibaojian.com/html5/form.html)
- 新API
  - 离线 （applicationCache）
  - 音视频 （audio, vidio）
  - 图形 （canvans）
  - 实时通信（websoket）
  - 本地存储（localStorage, indexDB）
  - 设备能力（地图定位，手机摇一摇）

## `em 与 i 的区别`

- 效果都是斜体
- em 是语义化标签，表强调
- i 是样式标签， 表斜体

## `哪些元素可以自闭合`

- 表单元素 `<input>`
- `<img>`
- `<br>`,  `<hr>`
- `<meta>`, `<link>`

## `HTML和DOM的关系`

- `HTML` 只是一个字符串
- `DOM` 由 `HTML` 解析而来
- `JS` 可以维护 `DOM`

## `property和attribute的区别`

例如一个input标签 `<input value="3" />`
他的attribute是3
但如果使用`input.value = 4` 或 直接修改值为4，这时再去getAttribute得到的还是"3"

## `form 作用`

- 直接提交表单
- 使用submit / reset按钮
- 便于浏览器保存表单
- 第三方库可以整体取值
- 第三方库可以进行表单验证

## `主流浏览器机器内核`

| 浏览器  | 内核           | 备注   |
| -      | -     | - |
| IE      | Trident        | IE、猎豹安全、360 极速浏览器、百度浏览器  |
| firefox | Gecko          |    |
| Safari  | webkit         | 从 Safari 推出之时起，它的渲染引擎就是 Webkit，一提到 webkit，首先想到的便是 chrome，Webkit 的鼻祖其实是 Safari。 |
| chrome  | Chromium/Blink | 在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。大部分国产浏览器最新版都采用 Blink 内核。二次开发    |
| Opera   | blink          | Opera内核原为：Presto，现在跟随 chrome 用 blink 内核。     |

## `简述一下你对 HTML 语义化的理解`

- 用正确的标签做正确的事情。
- html 语义化让页面的内容`结构化`，结构更清晰，便于对浏览器、搜索引擎解析;
- 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是`容易阅读`的;
- 搜索引擎的`爬虫`也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
- 使阅读源代码的人对网站更容易将网站分块，便于阅读`维护`理解。

## `html 中 title 属性和 alt 属性的区别`

```html
<img src="#" alt="alt信息" title="title信息" />
```

- 当图片不输出信息的时候，会显示 alt 信息，鼠标放上去会出现 title 信息；
- 当图片正常输出的时候，不会出现 alt 信息，鼠标放上去会出现 title 信息。
- 除了纯装饰图片外都必须设置有意义的值，搜索引擎会分析。

## `另外还有一些关于 title 属性的知识`

- title 属性可以用在**除了** `<base><basefont><head><html><meta><param><script><title>` 之外的所有标签。
- title 属性的功能是提示。额外的说明信息和非本质的信息请使用 title 属性。title 属性值可以比 alt 属性值设置的更长。
- 为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。

## `为什么要弃用table标签`

服务器把代码加载到本地服务器的过程中，本来是加载一行执行一行，但是table标签是里面的东西`全都下载完之后才会显示出来`，那么如果图片很多的话就会导致网页一直加载不出来，除非所有的图片和内容都加载完。如果要等到所有的图片全都加载完之后才显示出来的话那也太慢了，所以table标签现在我们基本放弃使用了。

## `head 元素`

head子元素大概分为三类，分别是：

1. 描述网页`基本信息`的
2. 指向渲染网页需要`其他文件链接`的
3. 各大厂商根据自己需要`定制`的

### `1. 网页基本信息`

一个网页，首先得有个标题，就跟人有名字一样。除此之外，还可以根据实际需要补充一些基本信息。

```html
- 文档标题（浏览器标签中显示的文本）：<title></title>
- 编码格式：<meta charset="utf-8">
- 视窗设置：<meta name="viewport" content="width=device-width, initial-scale=1.0">
- 搜索引擎优化相关内容： <meta name="description" content=“HTML文档结构”>
- IE浏览器版本渲染设置：<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

### `2. 其他文件链接`

一般把JS文件放到body的底部

```html
- CSS 文件：<link rel="stylesheet" type="text/css" href="style.css">
- JavaScript 文件：<script src="script.js"></script>
```

### `3. 厂商定制`

同样分享页面到QQ的聊天窗口，有些页面直接就是一个链接，但是有些页面有标题，图片，还有文字介绍。为什么区别这么明显呢？其实就是看有没有设置下面这三个内容

```html
<meta itemprop="name" content="这是分享的标题"/>
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png" />
<meta name="description" itemprop="description" content="这是要分享的内容" />
```

## `移动端项目需要注意的4个问题`

### `meta中设置viewport`

阻止用户手滑放大或缩小页面，需要在 index.html 中添加`<meta>`元素,设置`viewport`。

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

### `CSS样式统一问题`

我们需要重置页面样式，因为在不同的手机浏览器上，默认的css样式不是统一的。  
解决方法：使用 `reset.css` 重置所有元素的默认样式

### `1像素(1px)边框问题`

为什么移动端css里面写了1px, 实际看起来比1px粗. 其实原因很好理解。因为css中的1px并不等于移动设备的1px，这些由于不同的手机有不同的像素密度，有的手机分辨率比较高，是2倍屏或3倍屏，手机上的浏览器就会把CSS中的1像素值展示为2个或3个物理宽度

解决方法： 添加一个 `border.css` 库，将利用 **scroll缩放的原理** 将边框重置。当我们需要使用1像素边框时只需要在标签上添加对应类名，如设置底部一像素边框就在标签上加入 `border-bottom` 的 `class` 名。

在window对象中有一个devicePixelRatio属性，他可以反应css中的像素与设备的像素比:

```js
devicePixelRatio 的官方的定义为：设备物理像素和设备独立像素的比例，也就是
devicePixelRatio = 物理像素 / 独立像素。
```

### `触屏300毫秒点击延迟 和 点击穿透 问题`

- 手动点击与真正触发click事件会存在300ms的延迟
- 点击穿透问题（点击行为会穿透元素触发非父子关系元素的事件）

延迟的存在时因为浏览器想知道你是否在进行双击操作；而点击穿透是因为300ms延迟触发时的副作用。而使用fastclick能很好的解决这个问题，增加使用者的体验。

不必使用的浏览器环境如下：

Android + Chrome >32  
Android + Chrome + meta="user-scalable=no"  
部分黑莓手机环境（可略过）  
部分WindowsPhone环境（可略过）

这部分的判断在下面的方法中有体现，如果当前环境支持快速点击，则FastClick会自动跳过初始化

```js
FastClick.notNeeded = function(layer) { ... }
```

#### `原理`

如果完整的描述FastClick过程需要考虑多种场景的兼容，这里就描述一个按钮点击过程的处理，下面是用来描述的代码：

```js
  // 业务代码
  var $test = document.getElementById('test')
  $test.addEventListener('click', function () {
    console.log('1 click')
  })

  // FastClick简单实现
  var targetElement = null
  document.body.addEventListener('touchstart', function () {
    // 记录点击的元素
    targetElement = event.target
  })
  document.body.addEventListener('touchend', function (event) {
    // 阻止默认事件（屏蔽之后的click事件）
    event.preventDefault()
    var touch = event.changedTouches[0]
    // 合成click事件，并添加可跟踪属性forwardedTouchEvent
    var clickEvent = document.createEvent('MouseEvents')
    clickEvent.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null)
    clickEvent.forwardedTouchEvent = true // 自定义的
    targetElement.dispatchEvent(clickEvent)
  })
```

### `步骤：`

1. 业务正常使用 `click 绑定`事件；
2. 在 `document.body` 绑定 `touchstart` 和 `touchend`。

- `touchstart`：
  - 用于`记录`当前点击的`元素targetElement`；

- `touchend`：
  - `阻止默认事件`（屏蔽之后的 click事件）
      合成 click 事件并添加可跟踪属性 forwardedTouchEvent
      在 targetElement 上触发 click事件
      targetElement 上绑定的事件立即执行，
      完成 FastClick

3. `执行`业务自己的`click`事件

## `总结:`

事件的执行过程需要了解：`touch事件` 先于 `mouse事件` 先于 `click 执行`，因此可以在 `document.body` 上绑定事件用于监听点触行为，根据需要 `模拟click` 触发真正需要响应的元素。
