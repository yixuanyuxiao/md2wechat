> 微信公众号排版工具。问题或建议，请关注 `高效开发` 公众号留言。

修改了lll 

建议使用 **Chrome** 浏览器，体验最佳效果。

这款编辑器可以将 Markdown 转换成微信公众号编辑器的样式，只需将 MD 文档复制到左侧栏，再在右侧栏顶部"点击复制"，右侧预览内容就可被复制到公众号后台。

Markdown 是一种轻量级的「标记语言」，请阅读下方使用方法。

## 1. 公众号编辑器简介

- 支持主题切换的 Markdown 编辑器
- 支持一键复制内容到微信公众号
- 外链会自动附在文章末尾

## 2. Markdown 语法教程

### 2.1 标题

不同数量的`#`可以完成不同的标题，如下：

# 一级标题

## 二级标题

### 三级标题

### 2.2 字体

粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。如下：

**这个是粗体**，_这个是斜体_ ，**_这个是粗体加斜体_**，~这里是删除线~。

注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌 HTML 来实现。

### 2.3 无序列表

无序列表的使用，在符号`-`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号`-`前使用空格。如下：

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2

### 2.4 有序列表

有序列表的使用，在数字及符号`.`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 2.5 引用

引用的格式是在符号`>`后面书写文字。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 2.6 链接

如果是公众号文章的超链接，是可以点击打开的，但其他链接都无法点击，所以这里使用类似于文献的底部引用。

例如：


### 2.7 图片

接下来是一张图片。你可以用自己图床，也可以上传到微信媒体库再把图片 URL
粘贴回来，或者编辑好以后，在公众号里插入图片。


如果使用图床链接的话，有可能复制后图片不能被上传，需要手动在微信重新上传替换。

### 2.8 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---

### 2.9 表格

可以使用冒号来定义表格的对齐方式，如下：

| 姓名       | 年龄 |         工作 |
| :--------- | :--: | -----------: |
| 小可爱     |  18  |     吃可爱多 |
| 小小勇敢   |  20  |   爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

## 3. 特殊语法

### 3.1 脚注

脚注与链接的区别如下所示：

```markdown
链接：[文字](链接)
脚注：[文字](脚注解释 "脚注名字")
```

[全栈工程师](是指掌握多种技能，并能利用多种技能独立完成产品的人。 "什么是全栈工程师")在业务开发流程中起到了至关重要的作用。

脚注内容请拉到最下面观看。

### 3.2 代码块

> 支持平台：微信代码主题仅支持微信公众号！其他主题无限制。

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the `printf()` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

### 3.3 注音符号

[注音符号 W3C 定义](http://www.w3.org/TR/ruby/)。

支持日语注音假名、汉语拼音。

用法有以下几种：

- 世界{せかい}
- 小夜時雨{さ・よ・しぐれ}
- 食べる{たべる}
- 丧心病狂{gàn・de・piào・liang}

## 4 其他语法

### 4.1 HTML

支持原生 HTML 语法，请写内联样式，如下：

<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>

### 4.2 UML

不支持，推荐使用开源工具`https://draw.io/`制作后再导入图片

## 5 致谢

- 歌词经理 [wechat-format](https://github.com/lyricat/wechat-format "灵感来源")
- 主题样式 [Markdown 编辑器](https://markdown.com.cn/editor "主题来源")
