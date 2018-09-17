# 1. 使用React脚手架创建一个React应用
## 1). react脚手架
	1. xxx脚手架: 
        a. 是什么?
            * 一个特别的工具包
        b. 作用?
            * 用来帮助程序员快速创建一个基于xxx库的模板项目
        b. 脚手架创建的项目情况
            * 包含了所有需要的配置
            * 指定好了所有的依赖
            * 可以直接安装/编译/运行一个简单效果
	2. react提供了一个专门用于创建react项目的脚手架库: create-react-app
	3. 项目的整体技术架构为: react + webpack + es6  + babel + eslint
	4. 使用脚手架开发的项目的特点
        a. 模块化: js是一个一个模块编写的
        b. 组件化: 界面是由多个组件组合编写实现的
        b. 工程化: 实现了自动化构建/运行/打包的项目
	
## 2). 创建项目并启动
	npm install -g create-react-app
	create-react-app react-app
	cd react-app
	开发环境运行: npm start
	生产环境打包并运行: npm run build--> serve build

	
# 2. 项目的开发环境运行与生产环境打包运行
    1). 开发环境运行
        a. 命令:
            npm start
        b. 背后做了什么
            在内存中生成打包文件(不生成本地打包文件)
            启动服务器运行内存中的打包文件
            
    2). 生产环境打包运行
        a. 命令
            npm run build
            serve build
        b. 背后做了什么
            在内存中生成打包文件
            生成本地打包文件
            启动服务器加载运行本地打包文件

         
# 2. app1: 实现一个评论管理功能
## 1). 拆分组件:
	应用组件: App
	添加评论组件: CommentAdd
	评论项组件: CommentItem
	评论列表组件: CommentList
## 2). 确定组件的state和props:
	App: 
		* state: comments/array
	CommentAdd
		* state: username/string, content/string
		* props: add/func
	commentList
	  	* props: comments/array, delete/func
	CommentItem
		* props: comment/object, delete/func, index/number
## 3). 编写静态组件
	拆分页面
	拆分css
## 4). 实现动态组件
	1. 动态展示初始化数据
	  * 初始化状态数据
	  * 传递属性数据
	2. 响应用户操作, 更新组件界面
	  * 绑定事件监听, 并处理
	  * 更新state


# 3. app2: 实现github用户搜索功能
## 1). react应用中的ajax请求
	axios: 包装XMLHttpRequest对象, promise风格, 支持浏览端/node服务器端
	fetch: 浏览器内置语法, promise风格, 老浏览器不支持, 可以引入fetch.js兼容包
## 2). 拆分组件
    App
		* state: searchName/string
    Search
      	* props: setSearchName/func
    List
      	* props: searchName/string
      	* state: firstView/bool, loading/bool, users/array, errMsg/string
## 3). 编写组件
	编写静态组件
	编写动态组件
		componentWillReceiveProps(nextProps): 监视接收到新的props, 发送ajax
		使用axios库发送ajax请求


# 4. 组件间通信总结
## 1). 方式一: 通过props传递
	共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
	一般数据-->父组件传递数据给子组件-->子组件读取数据
	函数数据-->子组件传递数据给父组件-->子组件调用函数
	问题: 多层传递属性麻烦, 兄弟组件通信不方便
	
## 2). 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制
	工具库: PubSubJS
	下载: npm install pubsub-js --save
	使用: 
	  import PubSub from 'pubsub-js' //引入
	  PubSub.subscribe('delete', function(msg, data){ }); //订阅
	  PubSub.publish('delete', data) //发布消息
	优点: 可以支持任意关系组件之间的通信

## 3). 事件监听理解
	1. DOM事件
		* 绑定事件监听
			* 事件名(类型): 只有有限的几个, 不能随便写
			* 回调函数
		* 用户操作触发事件(event)
			* 事件名(类型)
			* 数据
	2. 自定义事件
		* 绑定事件监听
			* 事件名(类型): 任意
			* 回调函数: 通过形参接收数据, 在函数体处理事件
		* 触发事件(编码)
			* 事件名(类型): 与绑定的事件监听的事件名一致
			* 数据: 会自动传递给回调函数
  
      
# 5. ES6新语法总结
	定义变量/常量: const/let
	解构赋值: let {a, b} = this.props   import {aa} from 'xxx'
	对象的简洁表达: {a, b}
	箭头函数: 
		组件的自定义方法: xxx = () => {}
		匿名函数作为实参
		优点:
			* 简洁
			* 没有自己的this,使用引用this查找的是外部this
	扩展运算符: ...
		拆解对象:  const MyProps = {}, <Xxx {...MyProps}>
	类: class/extends/constructor/super
	ES6模块化: export default | import
	异步: promise, async/await

	
# 6. UI组件库: antd-mobile
    引入组件库: npm install --save antd-mobile
    实现按需打包: 只打包import的组件, 自动打包相关的css


# 7. react路由

## 1). 3个需要理解的知识点
    1. react-router-dom理解
        1) react插件库
        2) 专门用来实现一个SPA应用
        
    2. SPA的理解
        1) 单页Web应用（single page web application，SPA）
        2) 整个应用只有一个完整的页面
        3) 点击页面中的链接不会刷新页面, 本身也不会向服务器发请求
        4) 当点击路由链接时, 只会做页面的局部更新
        6) 数据都需要通过ajax请求获取, 并在前端异步展现
        
    3.  路由的理解
        1) 什么是路由
          a. 映射关系(key--value)
          b. key是path, value是callback或component
        2). 路由的分类和作用
          a. 后台路由: node服务器端路由, value是function, 用来处理客户端提交的请求并返回一个响应数据
          b.前台路由: 浏览器端路由, value是component, 当请求的是路由path时, 浏览器端前没有发送http请求, 但界面会更新显示对应的组件 

## 2). react-router的使用
    1. 相关语法
        1). 组件
            <HashRouter> / <BrowserRouter>
            <Route>
            <Redirect>
            <NavLink> / <Link>
            <Switch>
        2). 对象或函数
            props.history对象
            props.match对象
            props.location对象
            withRouter函数
            
    2. 基本使用
        1). 定义路由组件
        2). 映射成路由
        3). 通过路由链接或编程式路由导航跳转路由
    
    3. 嵌套路由
        1). 在某个路由组件内部映射子路由
        2). 2级路由必然是某个1级路由的子路由
    
    4. 向路由组件传递数据
        1). 映射路由: <Route path="/home/message/:id"/>
        2). 路由链接传递数据: <Link to="/home/message/3">
        5). 路由组件读取数据: this.props.match.params.id
    
    5. 编程式路由导航(跳转)
        1). history.push(path)
        2). history.replace(path)
        3). history.goBack()

# 8. redux
## 1). redux理解
    1. 什么?: redux是专门做状态管理的独立第3方库, 不是react插件
    2. 作用?: 对应用中状态进行集中式的管理(写/读)
    3. 开发: 与react-redux, redux-thunk等插件配合使用

## 2). redux相关API
    1. redux中包含: createStore(), applyMiddleware(), combineReducers()
    2. store对象: getState(), dispatch(), subscribe()
    3. react-redux: <Provider>, connect()()

## 3). redux核心概念(3个)
    1. action与actionCreator: 
        action默认是对象(同步action), {type: 'xxx', data: value}, 需要通过对应的actionCreator产生, 
        它的值也可以是函数(异步action), 需要引入redux-thunk才可以
    2. reducer
        回调函数
        根据老的state和指定的action, 返回一个新的state
        不能修改老的state
    3. store
        redux最核心的管理对象
        内部管理着: state和reducer
        提供方法: getState(), dispatch(action), subscribe(listener)

## 4). redux工作流程
![](https://i.imgur.com/RFFX4fd.png)

## 5). 使用redux及相关库编码
    1. 需要引入的库: 
        redux
        react-redux
        redux-thunk
        redux-devtools-extension(这个只在开发时需要)
    2. redux文件夹: 
        action-types.js
        actions.js
        reducers.js
        store.js
    3. 组件分2类: 
        ui组件(components): 不使用redux相关PAI
        容器组件(containers): 使用redux相关API

     