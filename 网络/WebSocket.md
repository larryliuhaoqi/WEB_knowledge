# `websocket`

在单个 TCP 连接上进行全双工通讯的协议。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建**持久性**的连接，并进行**双向**数据传输。

- Socket.`onopen` 连接`建立`时触发
- Socket.`onmessage` 客户端`接收`服务端数据时触发
- Socket.`onerror` 通信发生`错误`时触发
- Socket.`onclose` 连接`关闭`时触发

## `WebSocket的实现和应用`

(1)什么是WebSocket?

WebSocket是HTML5中的协议，支持持久连续，HTTP协议不支持持久性连接。HTTP1.1中的keep-alive，将多个HTTP请求合并为1个.

(2)WebSocket是什么样的协议，具体有什么`优点`？

HTTP的生命周期通过Request来界定，一个Request一个Response。在HTTP1.1中进行了改进，connection：Keep-alive，也就是说，在一个HTTP连接中，可以发送多个Request，接收多个Response。在HTTP中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。
WebSocket是基于HTTP协议的，或者说借用了HTTP协议来完成一部分握手，在握手阶段与HTTP是相同的。一个websocket握手协议的实现，基本是2个属性，upgrade，connection。

基本请求如下：

    GET /chat HTTP/1.1
    Host: server.example.com
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
    Sec-WebSocket-Protocol: chat, superchat
    Sec-WebSocket-Version: 13
    Origin: <http://example.com>

多了下面2个属性：

    Upgrade:webSocket
    Connection:Upgrade

告诉服务器发送的是websocket

    Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
    Sec-WebSocket-Protocol: chat, superchat
    Sec-WebSocket-Version: 13

## `优点`

- `较少的控制开销`。用于协议控制的数据包头部相对较小。在不包含扩展的情况下，对于服务器到客户端的内容，此头部大小只有2至10字节（和数据包长度有关）；对于客户端到服务器的内容，此头部还需要加上额外的4字节的掩码。相对于HTTP请求每次都要携带完整的头部，此项开销显著减少了。

- `更强的实时性`。由于协议是全双工的，所以服务器可以随时主动给客户端下发数据。相对于HTTP请求需要等待客户端发起请求服务端才能响应，延迟明显更少；即使是和Comet等类似的长轮询比较，其也能在短时间内更多次地传递数据。

- `保持连接状态`。与HTTP不同的是，Websocket需要先创建连接，这就使得其成为一种有状态的协议，之后通信时可以省略部分状态信息。而HTTP请求可能需要在每个请求都携带状态信息（如身份认证等）。
  
- `更好的二进制支持`。Websocket定义了二进制帧，相对HTTP，可以更轻松地处理二进制内容。
  
- `可以支持扩展`。Websocket定义了扩展，用户可以扩展协议、实现部分自定义的子协议。如部分浏览器支持压缩等。
更好的压缩效果。相对于HTTP压缩，Websocket在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率。
