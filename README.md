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

也可以下载本仓库 ZIP，解压后在该目录运行：

```bash
node install.mjs install nijika--amia
```

运行 `npx` 时 npm 需要联网获取公开文件；安装器本身只把 `pet.json` 和 `spritesheet.webp` 复制到本机 Codex 宠物目录，不会上传到其他 ChatGPT 账号。默认位置是 `~/.codex/pets/nijika--amia/`（Windows 为用户目录下的 `.codex\pets\nijika--amia`），也支持环境变量 `CODEX_HOME` 或 `--codex-home <路径>`。安装器不会覆盖已有的同名目录。

安装后重新打开桌面应用，在 **设置 → Pets** 中刷新并选择「虹夏」。若当前应用或账号未开放桌面 Pets，安装文件仍会保留，但宠物可能暂时不显示。换电脑时，在新电脑上重新运行上面的命令即可。

> 若你希望使用 `npx --yes @legeling/codex-pet install nijika--amia` 这个社区目录命令，还需要本项目的[上游投稿](https://github.com/legeling/awesome-codex-pet/pull/251)被合并并加入安装清单。本仓库独立的 GitHub 命令已可使用。

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
