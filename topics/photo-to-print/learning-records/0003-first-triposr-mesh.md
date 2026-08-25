# 完成第一次本地 TripoSR 出模

用户用 `avatar6.jpg`（白底正面立绘）在本地 TripoSR 跑通，得到 `mesh.obj` / `mesh.stl`。自述效果一般，但确认已生成三维模型。说明已走过流水线第 3 步；对「AI 脑补背面、单图质量有限」有了亲身体验。

## Evidence

- 输出路径：`TripoSR-main/output/avatar6/0/mesh.stl`（约 6.5MB）
- 本机 RTX 4070；torchmcubes 用 skimage 兜底

## Implications

- 下一课优先：切片软件读报错 / 定尺，再谈修补与加底座；不要先追求更好看的生成器。
- 若以后要更像：补侧面/背面参考，或换更重的开源模型，或对实物做摄影测量——与「先走通」分开。
