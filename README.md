# NFC Photo — P1012494

已完成：
- 使用 `P1012494.jpg` 作为网页展示照片
- 从 `P1012494.RW2` 读取拍摄参数并填入网页

读取到的主要参数：
- Camera: Panasonic DC-S5M2X
- Lens: LUMIX S 24-105/F4
- Focal length: 81 mm
- Aperture: f/4
- Shutter: 1/1000 s
- ISO: 100
- Exposure compensation: 0 EV
- Exposure program/mode: Manual
- Metering: Multi-segment
- Capture time: 2024-04-18 10:43:24
- Artist metadata: WU ZHUOHAN

白平衡没有在标准 EXIF 项中读取到，因此页面没有臆测填写。

上传到 GitHub 仓库根目录后，用 GitHub Pages 发布即可。


## 缓存修复
本版将展示图片改名为 `assets/P1012494.jpg`，并给 CSS/JS 加了 `?v=2`，用于避免浏览器继续读取旧缓存。


## SHUTTERCODE 品牌版
顶部栏已改为：
- 左侧：`SHUTTERCODE`
- 右侧：`PHOTO ARCHIVE / P1012494`

页面定位为 SHUTTERCODE 服装产品的附加摄影内容；照片本身保持主体地位，品牌只作为顶部识别系统出现。


## 建筑信息版
本版已将照片标题改为 `Bosco Verticale`，副标题为 `Porta Nuova · Milano`。
作品说明已改为建筑介绍，并增加 Architecture Info：
- Boeri Studio
- Stefano Boeri / Gianandrea Barreca / Giovanni La Varra
- 2014
- Residential Towers
- 110 m / 76 m
- 800 trees / 4,500 shrubs / 20,000 plants


## 中英双语版本

页面现在分为两个独立地址：

- 中文：`index.html`
- English：`en.html`

右上角语言按钮可一键切换：
- 中文页显示 `EN`
- 英文页显示 `中文`

GitHub Pages 发布后，例如：
- 中文：`https://wu-droid.github.io/NFC-2/`
- English：`https://wu-droid.github.io/NFC-2/en.html`

NFC 建议仍写中文首页地址：
`https://wu-droid.github.io/NFC-2/`

访客进入后可在右上角切换语言。


## Safari 缓存优化版

当前构建版本：`20260919-01`

本版本做了四层处理：

1. `style.css`、`script.js`、照片全部改成带版本号的文件名；
2. 页面会主动以 `cache: no-store` 请求 `version.json`；
3. 如果检测到新版本，会自动把页面切换到 `?v=新版本`；
4. 对 Safari 的 Back/Forward Cache（BFCache）增加重新检查。

因此以后仍然可以让 NFC 保持同一个稳定地址：

`https://wu-droid.github.io/NFC-2/`

更新网页时只需修改 `version.json` 的版本号并同步更新资源文件名即可。

### 第一次从旧版切换
由于 Safari 里可能仍保存着“优化前”的旧 HTML，上传本版后第一次建议手动打开：

`https://wu-droid.github.io/NFC-2/?v=20260919-01`

确认新版本出现后，以后的更新就能由页面自动检查版本。
