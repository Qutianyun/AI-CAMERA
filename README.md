# AI_CAMERA_PWA_V1

AI CAMERA PWA V1 是一个可部署到 HTTPS 静态网站的手机网页 App，用于验证眼镜盒背面文字 / 标签语言识别流程。

## 文件说明

- `index.html`：主页面，包含摄像头、拍照、OCR、语言判断、PASS/FAIL。
- `manifest.json`：PWA 配置，用于添加到手机主屏幕。
- `service-worker.js`：基础缓存文件。
- `icon-192.png` / `icon-512.png`：手机桌面图标。

## 推荐部署方式：GitHub Pages

1. 创建 GitHub 仓库，例如 `ai-camera`。
2. 解压本压缩包。
3. 将 `index.html`、`manifest.json`、`service-worker.js`、两个 icon 文件上传到仓库根目录。
4. 进入 Settings → Pages。
5. Source 选择 Deploy from a branch。
6. Branch 选择 main，Folder 选择 `/root`。
7. 等待生成 HTTPS 链接。
8. 用 iPhone Safari 打开链接。
9. 点击 Safari 分享按钮 → 添加到主屏幕。

## 注意事项

- 摄像头功能需要 HTTPS 环境。
- iPhone 建议使用 Safari，不建议优先使用微信内置浏览器。
- V1 使用前端 OCR，首次识别需要加载模型，可能较慢。
- 如果现场网络无法访问 CDN，OCR 模型可能无法加载。正式版建议接入腾讯云 OCR、微信 OCR 或公司内部 OCR 服务。
