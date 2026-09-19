# NFC Single Photo Template

这个版本专门用于：**只有一张照片 + 拍摄参数 + 作品说明**。

## 换照片
进入 `assets/`，用你的照片覆盖 `photo.jpg`，文件名保持不变。

## 改文字
打开 `index.html`，修改：
- 作品名称
- 系列名称
- 地点 / 年份 / 作者
- 相机 / 镜头 / 焦距 / 光圈 / 快门 / ISO
- 其他拍摄参数
- 作品说明
- 补充说明

如果某一项不需要，直接删除对应这一行：
`<div><dt>...</dt><dd>...</dd></div>`

## GitHub Pages
把以下文件上传到仓库根目录：
- index.html
- style.css
- script.js
- assets/photo.jpg

然后：
Settings → Pages → Deploy from a branch → main → /(root)

你的仓库若是 `wu-droid/NFC`，发布地址通常是：
`https://wu-droid.github.io/NFC/`
