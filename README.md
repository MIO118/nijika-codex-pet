# 虹夏 · Nijika Ijichi Codex Pet

![虹夏待机动画](assets/idle.gif)

> 本产品为 Amiaね 制作的《孤独摇滚！》虹夏桌宠；仅限非商业使用，原角色权利归原权利人。

这是一只用于 ChatGPT/Codex 桌面版的自定义宠物。v2 图集包含 9 种工作状态动画与 16 个视线方向，适用于支持桌面 Pets 的 macOS 和 Windows 版本。安装包保存在电脑本地，换账号后仍可保留文件；在新电脑上需要重新安装。它不会自动创建网页 ChatGPT Work 账号中的宠物。

## 预览

查看[完整动作与视线方向总览](assets/contact-sheet.png)。实际显示取决于桌面应用版本及工作区是否开放 Pets。

## 安装

先安装 [Node.js 20 或更新版本](https://nodejs.org/en/download/)。macOS 打开「终端」，Windows 打开「PowerShell」；输入 `node --version` 和 `npm --version`，确认两条命令都能显示版本号。

**推荐：固定 v1.0.0，只需 Node.js。** 复制下面一整行执行：

```bash
npx --yes --package https://github.com/MIO118/nijika-codex-pet/archive/refs/tags/v1.0.0.tar.gz nijika-codex-pet install nijika--amia
```

这条命令从 GitHub 的 v1.0.0 标签下载公开安装包，再把虹夏文件放到当前电脑；已在全新临时目录实际验证。

如果已经安装 Git，也可以使用较短的仓库命令。它读取仓库当前最新版本：

```bash
npx --yes --package github:MIO118/nijika-codex-pet nijika-codex-pet install nijika--amia
```

### ZIP 安装（npx 下载失败时）

1. 下载 [v1.0.0 ZIP](https://github.com/MIO118/nijika-codex-pet/archive/refs/tags/v1.0.0.zip)，或打开 [Release 页面](https://github.com/MIO118/nijika-codex-pet/releases/tag/v1.0.0)，在 Assets 中选择 Source code (zip)。
2. 解压得到 `nijika-codex-pet-1.0.0`，进入能看到 `install.mjs`、`pet.json` 和 `spritesheet.webp` 的那一层。
3. Windows 在文件夹空白处右键选择「在终端中打开」，执行：

```powershell
node .\install.mjs install nijika--amia
```

macOS 打开「终端」，输入 `cd `（末尾有空格），把解压后的文件夹拖到终端窗口，按回车；再执行：

```bash
node ./install.mjs install nijika--amia
```

看到「已安装虹夏到：……」即表示文件安装完成。无需运行 `npm install`。只要已有 Node.js 和完整 ZIP，安装阶段可离线完成。v1.0.0 ZIP 已实际下载、解压并在临时目录验证安装成功；Windows 操作步骤尚未在实机测试。

### 不装 Node.js：手动复制两个文件

1. 解压上述 ZIP。
2. macOS 在 Finder 按 `⌘⇧G`，输入 `~/.codex/pets/`；Windows 按 `Win+R`，输入 `%USERPROFILE%\.codex\pets`。若 `pets` 文件夹不存在，先在 `.codex` 下新建它。
3. 在 `pets` 中新建 `nijika--amia` 文件夹，只把 ZIP 内的 `pet.json` 和 `spritesheet.webp` 复制进去。若已设置 `CODEX_HOME`，改用 `<CODEX_HOME>/pets/nijika--amia`。已有同名目录时，先保留备份并检查内容。

正确结构：

```text
pets/
└── nijika--amia/
    ├── pet.json
    └── spritesheet.webp
```

保留完整 ZIP 到你自己的硬盘、U 盘或网盘。以后可以把 ZIP 传到其他电脑，再按上述步骤安装；不依赖原来的 ChatGPT/Codex 登录账号，也不需要社区收录。显示宠物仍需运行支持 Pets 的桌面应用。

### 常见错误

| 提示 | 处理 |
| --- | --- |
| `ENOTFOUND` / `ETIMEDOUT` / `ECONNRESET` | 网络下载失败，改用浏览器下载 ZIP；若本机也打不开 GitHub，可在另一台电脑下载后传过来。 |
| `EACCES` / `EPERM` | 可能是 npm 缓存或目标目录权限问题；ZIP 的手动复制方法可避开 npm 缓存，目标目录也需有写入权限。 |
| `node` 找不到或不是内部命令 | 尚未安装 Node.js；可直接采用两个文件的手动复制方法。 |
| `Cannot find module ... install.mjs` | 终端所在目录不对，进入包含 `install.mjs` 的解压文件夹。 |
| `目标已存在` | 同名宠物目录已存在，安装器不会覆盖。先检查现有宠物或备份目录。 |
| `动画图集校验失败` | 两个运行文件不完整或已改动，重新解压原始 ZIP。 |

运行 `npx` 时 npm 需要联网获取公开文件；安装器本身只把 `pet.json` 和 `spritesheet.webp` 复制到本机 Codex 宠物目录，不会上传到其他 ChatGPT 账号。默认位置是 `~/.codex/pets/nijika--amia/`（Windows 为用户目录下的 `.codex\pets\nijika--amia`），也支持环境变量 `CODEX_HOME` 或 `--codex-home <路径>`。安装器不会覆盖已有的同名目录。

安装后重新打开桌面应用，在 **设置 → Pets** 中刷新并选择「虹夏」。若当前应用或账号未开放桌面 Pets，安装文件仍会保留，但宠物可能暂时不显示。换电脑时，在新电脑上重新运行上面的命令即可。

> 社区投稿已于 2026-10-07 [关闭并撤回](https://github.com/legeling/awesome-codex-pet/pull/251)，未合并；当前未被社区画廊收录。请使用本仓库的 GitHub 命令或 ZIP 安装方法，`@legeling/codex-pet` 的社区目录命令目前不能安装这只虹夏。

## 文件

| 文件 | 说明 |
| --- | --- |
| `spritesheet.webp` | 无损 v2 动画图集，1536 × 2288。 |
| `pet.json` | 宠物名称、说明与图集版本。 |
| `install.mjs` | 跨 macOS / Windows 的本地安装器。 |
| `assets/` | 待机动图与动作总览，仅供预览。 |

## 制作与使用说明

Amiaね 以用户提供的角色设计图为参考，借助 AI 制作并校验动画；本仓库没有转载原始参考图。这是同人作品。角色出处、署名及非商业使用范围见 [NOTICE.md](NOTICE.md)。

已知画面限制：在部分相邻视线角度中，转向变化较细微。图集经过结构检查，WebP 与定稿 PNG 的像素一致。

---

**English:** A non-commercial fan-made desktop pet of Nijika Ijichi from *Bocchi the Rock!*, created by Amiaね with AI assistance. The original character and design remain with their respective rights holders. This package installs local desktop pet files; it does not sync a ChatGPT Work pet across accounts.
