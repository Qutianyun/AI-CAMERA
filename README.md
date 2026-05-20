# AI CAMERA GitHub Pages Chunked Package

## 解决 100MB keywords.json 不能上传 GitHub 的方式

1. 打开 `split_keywords.html`。
2. 选择你的 100MB `keywords.json`。
3. 点击“生成 GitHub 分片包”。
4. 浏览器会下载 `AI_CAMERA_KEYWORDS_SPLIT_UPLOAD.zip`。
5. 解压后，把里面的 `keywords_manifest.json` 和 `keywords_*.json` 全部上传到 GitHub Pages 根目录。
6. 同时上传本包里的 `index.html`。
7. 手机 Safari 打开 GitHub Pages 链接后，`index.html` 会优先读取 `keywords_manifest.json`，再逐个加载分片文件。

## 分片逻辑

- 按 body / label 分开。
- 按 jpn / kor / eng 分开。
- 每个分片尽量小于 20MB。
- 自动删除 `preview` 这类 base64 大字段。
- 保留 `bits / row / col / count / weight / aspect / sharp`。
- 保留 V5 要求的权重设计和跨语言去重后的结果。

## 文件说明

- `index.html`：手机端 GitHub Pages 页面，支持读取分片记忆库。
- `split_keywords.html`：本地分片工具。
- `keywords_manifest.json`：分片清单占位文件；正式使用时用分片工具生成的文件覆盖。
- `README.md`：说明文件。
