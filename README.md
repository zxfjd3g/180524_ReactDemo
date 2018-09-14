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