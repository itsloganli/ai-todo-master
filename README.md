# <font style="color:rgb(31, 31, 31);">📝</font><font style="color:rgb(31, 31, 31);"> AI-Todo-Master: 3分钟从零构建的智能待办清单</font>
**<font style="color:rgb(31, 31, 31);">AI 驱动的高效交付</font>**<font style="color:rgb(31, 31, 31);">：本项目由 </font>**<font style="color:rgb(31, 31, 31);">Bolt.new</font>**<font style="color:rgb(31, 31, 31);"> 协同开发，展示了从 Prompt 到生产级应用的极速转化能力。</font>

---

## <font style="color:rgb(31, 31, 31);">💡</font><font style="color:rgb(31, 31, 31);"> 为什么选择这个 AI-Todo？</font>
<font style="color:rgb(31, 31, 31);">在 AI 时代，开发不再是堆砌代码，而是</font>**<font style="color:rgb(31, 31, 31);">意图的精准表达</font>**<font style="color:rgb(31, 31, 31);">。这个项目不仅是一个工具，更是一场关于“极速交付”与“极简美学”的实验。</font>

+ **<font style="color:rgb(31, 31, 31);">⚡</font><font style="color:rgb(31, 31, 31);">️ 瞬时启动</font>**<font style="color:rgb(31, 31, 31);">：基于 Bolt.new 提示词工程，跳过环境配置，实现从想法到部署的分钟级闭环。</font>
+ **<font style="color:rgb(31, 31, 31);">🎯</font><font style="color:rgb(31, 31, 31);"> 优先级驱动</font>**<font style="color:rgb(31, 31, 31);">：拒绝无序忙碌。内置“高/中/低”优先级策略，助你聚焦核心任务。</font>
+ **<font style="color:rgb(31, 31, 31);">💾</font><font style="color:rgb(31, 31, 31);"> 离线守候</font>**<font style="color:rgb(31, 31, 31);">：无需后端，利用浏览器本地存储技术（LocalStorage），确保数据即便刷新也不会丢失。</font>
+ **<font style="color:rgb(31, 31, 31);">🎨</font><font style="color:rgb(31, 31, 31);"> 现代美学</font>**<font style="color:rgb(31, 31, 31);">：采用响应式卡片布局与柔和渐变色设计，完美适配移动端与 PC 端。</font>

---

## <font style="color:rgb(31, 31, 31);">🚀</font><font style="color:rgb(31, 31, 31);"> 效果展示 (Showcase)</font>
**<font style="color:rgb(31, 31, 31);">极简 UI，专注任务管理。</font>**<!-- 这是一张图片，ocr 内容为： -->
![](https://github.com/user-attachments/assets/79260db8-5815-484b-83bb-6fcc81bc1d0b)

---

## <font style="color:rgb(31, 31, 31);">🤖</font><font style="color:rgb(31, 31, 31);"> AI 开发者笔记 (Master Prompt)</font>
<font style="color:rgb(31, 31, 31);">我分享本项目核心的 </font>**<font style="color:rgb(31, 31, 31);">提示词 (Prompt)</font>**<font style="color:rgb(31, 31, 31);"> 逻辑，欢迎尝试复现：</font>

<font style="color:rgb(31, 31, 31);">"创建一个现代风格的待办应用，使用 React + Tailwind CSS。功能需包含：带有 Emoji 的任务输入、三个等级的优先级选择、实时完成数统计。通过 localStorage 实现数据本地持久化存储。"</font>

```bash
请帮我做一个待办事项应用网页，要求：

1. 功能需求：
   - 可以输入任务内容并添加到列表
   - 每个任务前面有个复选框，点击可以标记完成
   - 已完成的任务显示删除线
   - 每个任务后面有删除按钮
   - 显示已完成和未完成的任务数量

2. 界面要求：
   - 简洁现代的设计风格
   - 使用清新的蓝色调
   - 圆角按钮和输入框
   - 适当的阴影效果
   - 响应式设计，手机上也能正常使用

3. 技术要求：
   - 使用 HTML + CSS + JavaScript
   - 数据保存在浏览器本地存储，刷新页面不会丢失
```

```bash
很好！但我想做一些调整：

1. 输入框的占位符文字改成 "今天要做什么？"
2. 添加按钮改成 "➕ 添加任务"
3. 标题改成 "我的待办清单"，并加个可爱的图标
4. 背景色改成渐变色，从浅蓝到浅紫
5. 添加一个 "清空已完成" 的按钮
```

```bash
再加几个功能：

1. 任务可以设置优先级（高、中、低），用不同颜色标识
2. 可以编辑已添加的任务
3. 添加一个 "全部清空" 按钮，并要求确认
4. 任务列表为空时，显示一个友好的提示
```

---

## <font style="color:rgb(31, 31, 31);">🛠️</font><font style="color:rgb(31, 31, 31);"> 技术栈 (Tech Stack)</font>
+ **<font style="color:rgb(31, 31, 31);">Core</font>**<font style="color:rgb(31, 31, 31);">: React</font>
+ **<font style="color:rgb(31, 31, 31);">Styling</font>**<font style="color:rgb(31, 31, 31);">: Tailwind CSS</font>
+ **<font style="color:rgb(31, 31, 31);">Deployment</font>**<font style="color:rgb(31, 31, 31);">: Bolt</font>

---

## <font style="color:rgb(31, 31, 31);">📦</font><font style="color:rgb(31, 31, 31);"> 快速开始 (Quick Start)</font>
```bash
# 克隆仓库
git clone https://github.com/itsloganli/ai-todo-master.git

# 进入目录
cd ai-todo-master

# 安装依赖
npm install

# 启动项目
npm run dev
```

---

## <font style="color:rgb(31, 31, 31);">👨‍💻</font><font style="color:rgb(31, 31, 31);"> 关于作者 (Connect with Me)</font>
<font style="color:rgb(31, 31, 31);">我是 </font>**<font style="color:rgb(31, 31, 31);">李乾豪AI</font>**<font style="color:rgb(31, 31, 31);">，一名专注 AI 工具实战的开发者。欢迎通过以下平台交流 AI 开发心得：</font>

+ **<font style="color:rgb(31, 31, 31);">Bilibili：</font>**[<font style="color:rgb(11, 87, 208);">李乾豪AI</font>](https://space.bilibili.com/202696932)
+ **<font style="color:rgb(31, 31, 31);">抖音：</font>**[<font style="color:rgb(11, 87, 208);">李乾豪AI</font>](https://v.douyin.com/l9SWMrWfbIg/)
+ **<font style="color:rgb(31, 31, 31);">小红书：</font>**[<font style="color:rgb(11, 87, 208);">李乾豪AI</font>](https://www.xiaohongshu.com/user/profile/65ba0b010000000009024e26)

---

**<font style="color:rgb(31, 31, 31);">🌟</font><font style="color:rgb(31, 31, 31);"> 如果你觉得这个项目对你有启发，请点一个 Star！</font>**

**<font style="color:rgb(31, 31, 31);">💬</font><font style="color:rgb(31, 31, 31);"> 你希望下一个 AI 实验项目是什么？欢迎开 Issue 告诉我！</font>**

