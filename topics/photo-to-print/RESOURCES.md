# Photo → Print Resources

## Knowledge

- [Paper / code: TripoSR — Stability AI & Tripo AI](https://arxiv.org/abs/2403.02151)
  Open single-image → mesh baseline (MIT). Use for: what “AI reconstruction” actually is (feed-forward prediction, invents unseen sides). Demo: [Hugging Face Space](https://huggingface.co/spaces/stabilityai/TripoSR). Code: [GitHub](https://github.com/VAST-AI-Research/TripoSR).
- [Announcement: Introducing TripoSR — Stability AI](https://stability.ai/news/triposr-3d-generation)
  Primary product note alongside the paper. Use for: accessible wording of speed and release terms.
- [Guide: Modeling with 3D printing in mind — Prusa Knowledge Base](https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135)
  Manufacturer guidance on manifold/solid meshes and print-oriented modeling. Use for: what FDM needs before the slicer.
- [AliceVision Meshroom](https://alicevision.org/#meshroom)
  Open photogrammetry pipeline (structure-from-motion → dense mesh). Use for: the “many overlapping photos → measured surface” path.
- [Article: AI 3D vs Photogrammetry (2026) — HiGen3D](https://higen3d.com/blog/ai-3d-vs-photogrammetry-2026)
  Clear comparison of prediction vs measurement. Use for: choosing a path; treat tool recommendations as vendor-adjacent, verify claims.
- [Article: Photo to 3D methods overview — FacFox](https://facfox.com/docs/kb/how-to-create-a-3d-model-from-photos-and-images)
  Table of goals → methods (single-image AI, multi-view AI, photogrammetry). Use for: quick path selection for figurines vs fit parts.
- [Product docs: Meshy Image-to-3D](https://www.meshy.ai/)
  Commercial web image-to-3D (paid / limited free credits). Optional convenience only — not the default for this course.
- [Microsoft TRELLIS](https://github.com/microsoft/TRELLIS)
  Stronger open image-to-3D (MIT); heavier install. Use later if TripoSR quality is not enough and the GPU can take it.
- [Tencent Hunyuan3D-2](https://github.com/Tencent-Hunyuan/Hunyuan3D-2)
  Another major open image-to-3D line for local runs. Use as alternate free path after TripoSR basics.

## Wisdom (Communities)

- [r/3Dprinting](https://www.reddit.com/r/3Dprinting/)
  High-volume hobbyist feedback on “will this slice / print”. Use for: posting a failed slice preview and asking what’s wrong with the mesh.
- [r/blender](https://www.reddit.com/r/blender/)
  Mesh repair and 3D Print Toolbox questions. Use for: after you have a broken STL and need human eyes.
- Local / online: Printables or maker space print nights
  Use for: real filament, adhesion, and overhang lessons that docs can’t teach.

## Gaps

- No single vendor-neutral 2026 bake-off that measures *print success rate* (first-slice success) across Meshy / Tripo / Polycam on the same figurine set. Until then, treat “print-ready” claims as hypotheses to test on your printer.
- Phone-scan apps (Polycam, etc.) not yet deep-sourced here; add when the course reaches capture technique.
