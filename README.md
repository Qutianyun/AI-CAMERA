# AI_CAMERA_PWA_V4_MEMORY_LOADER

这是手机版 GitHub Pages 版本，用于读取电脑端 Trainer 导出的 `memory.json`。

## 必须上传到 GitHub 仓库根目录的文件

- index.html
- manifest.json
- service-worker.js
- icon-192.png
- icon-512.png
- memory.json  ← 你已经有的记忆库文件，也要放在根目录

## 识别逻辑

- 板块1：黑底白字印刷区域，识别英文 / 日文 / 韩文。
- 板块2：白底黑字标签区域，如果识别到标签，则识别标签语言。
- 标签异常：检测标签内是否存在大面积空白、黑字覆盖率过低等问题。
- 指定模式下：板块1语言不匹配、板块2语言不匹配、标签空白异常，都会判定 NG。

## 更新提示

如果手机打开后还是旧版，请清理 Safari 网站数据，或在 GitHub Pages 链接后加 `?v=4` 刷新。
