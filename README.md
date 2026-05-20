# AI_CAMERA_CHAR_MEMORY_GITHUB_LITE_V2

## 为什么要用这个版本
GitHub 网页上传单个文件限制小于 25MB。你的 Memory.Json 太大时，直接上传会失败。

本版本提供：
- `index.html`：手机识别页面，加载分片记忆库。
- `memory_optimizer_splitter.html`：本地压缩/拆分 Memory.Json 的工具。
- `memory_manifest.json`：占位清单文件。

## 操作步骤
1. 先在电脑上双击打开 `memory_optimizer_splitter.html`。
2. 选择你已有的 `Memory.Json`。
3. 点击“开始压缩拆分”。
4. 浏览器会下载：
   - `memory_manifest.json`
   - `memory_part_001.json`
   - `memory_part_002.json` ...
5. 上传到 GitHub 仓库根目录：
   - `index.html`
   - `memory_manifest.json`
   - 所有 `memory_part_xxx.json`
6. 打开 GitHub Pages 链接，用 iPhone Safari 测试。

## 注意
- 不要再上传原始 Memory.Json。
- GitHub Pages 对大小写敏感。
- 每个 `memory_part_xxx.json` 会控制在约 20MB 以下。
