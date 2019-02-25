# 搭建简单服务器


## 文件夹架构
```
├── data ------------------- 存放项目数据的文件夹
│   ├── detail.json -------- 存放食品详情的数据
|   |── foods.json --------- 存放首页食品的数据
├── model ------------------ 提供访问和操作数据服务的数据模型
│   ├── detail.js ---------- 详情数据访问模块
|   |── foods.js ----------- 首页食品数据访问模块
├── public ----------------- 存放css、js、图片等静态文件模块
│   ├── css ---------------- 存放css文件
│   ├── images ------------- 存放图片文件
│   ├── js ----------------- 存放js文件
├── router ----------------- 路由、控制器
│   ├── api.js ------------- 处理普通请求的路由、或者叫控制器
│   ├── static.js ---------- 处理静态文件的路由、或者叫控制器
├── views ------------------ 视图、用户界面
│   ├── index.html --------- 主页界面
│   ├── details.html ------- 详情页界面
├── server.js -------------- 服务器启动文件
├── package.json ----------- 项目包信息
├── README.md -------------- 项目信息以及启动方法描述
```