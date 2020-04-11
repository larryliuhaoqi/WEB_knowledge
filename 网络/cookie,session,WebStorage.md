## `请描述一下 cookies，sessionStorage 和 localStorage 的区别`

- cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
- cookie 数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
- sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。
- 存储大小：
  - cookie 数据大小不能超过 4k。
  - sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。
- 有效期（生命周期）：
  - localStorage: 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
  - sessionStorage: 数据在当前浏览器窗口关闭后自动删除。
  - cookie: 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭
- 共享
  - sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享

# `WebStorage`

[浅谈session,cookie,sessionStorage,localStorage的区别及应用场景](https://www.cnblogs.com/cencenyue/p/7604651.html)

# cookie和session

## `应用场景`

`cookie`:  
登录网站，第一天输入用户名密码登录了，第二天再打开很多情况下就直接打开了。这个时候用到的一个机制就是cookie。

`session`:  
session一个场景是购物车，添加了商品之后客户端处可以知道添加了哪些商品，而服务器端如何判别呢，所以也需要存储一些信息就用到了session。

## `cookie`

**服务器**通过设置`set-cookie`这个**响应头**，将cookie信息返回给**浏览器**，浏览器将响应头中的cookie信息保存在本地，当下次向服务器发送HTTP请求时，浏览器会自动将保存的这些cookie信息添加到**请求头中**。

通过cookie，服务器就会识别出浏览器，从而保证返回的数据是这个用户的。

- 通过`set-cookie`设置
- 下次请求会自动带上
- 键值对，可设置多个

### `cookie属性`

- `max-age`
  - `多久后`过期
  - 默认在浏览器关闭时失效
- `expire`s
  - 到哪个`时间点`过期
- `secure`
  - 表示这个cookie只会在`https`的时候才会发送
- `HttpOnly`
  - 设置后`无法`通过在js中使用`document.cookie`访问
  - 保障安全，防止攻击者盗用用户cookie
- `domain`
  - 表示该cookie对于哪个`域`是`有效的`。

## `session`

- 存放在服务器的一种用来存放用户数据的类似`HashTable`的结构
- 浏览器第一次发送请求时，服务器自动生成了`HashTable`和`SessionID`来唯一标识这个`HashTable`，并将sessionID存放在`cookie`中通过响应发送到浏览器。浏览器第二次发送请求会将前一次服务器响应中的`sessionID`随着cookie发送到服务器上，服务器从请求中提取`sessionID`，并和保存的所有`sessionID`进行对比，找到这个用户对应的hash表。
- 一般sessionID是有`时间限制`的，超时后销毁，默认`30min`
- 当用户在应用程序的web页面间跳转时，存储在session对象中的变量不会丢失而是在整个用户会话中一直存在下去。
- session依赖于cookie，sessionID是存放在`cookie`中的。

## `sesssion与cookie的区别`

- cookie存在客户端，session存在于服务端。
- cookie在客户端中存放，容易伪造，不如session安全
- session会消耗大量服务器资源，cookie在每次HTTP请求中都会带上，影响网络性能
- 域的支持范围不一样，比方说a.com的Cookie在a.com下都能用，而www.a.com的Session在api.a.com下都不能用
