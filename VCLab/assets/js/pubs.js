/* =========================================================
   PolyU VCLab — shared publications & team data
   Loaded BEFORE main.js / collection.js
   ========================================================= */

window.PUBLICATIONS = [
  { venue:"CVPR", year:"2026", tag:"Highlight",
    title:"Omni-3DEdit: Generalized Versatile 3D Editing in One-Pass",
    authors:"L. Chen, P. Wang, G. Zhang, Z. Ma, L. Zhang",
    tagline:"The first generalized 3D editing model, with fast speed!",
    category:"3d",
    paper:"https://arxiv.org/abs/2603.17841",
    code:"https://github.com/mt-cly/Omni3DEdit" },

  { venue:"CVPR", year:"2026", tag:"Oral",
    title:"ANTS: Shaping the Adaptive Negative Textual Space by MLLM for OOD Detection",
    authors:"W. Zhu, Y. Zhang, X. Jin, W. Zeng, L. Zhang",
    tagline:"Can MLLM help OOD detection?",
    category:"multimodal",
    paper:"https://www.arxiv.org/abs/2509.03951",
    code:"https://github.com/ZhuWenjie98/ANTS" },

  { venue:"CVPR", year:"2026", tag:"Highlight",
    title:"VideoITG: Improving Multimodal Video Understanding with Instructed Temporal Grounding",
    authors:"S. Wang, G. Chen, D. Huang, Z. Li, M. Li, G. Li, J.M. Alvarez, L. Zhang, Z. Yu",
    tagline:"A plug-and-play approach and a dataset to improve video understanding tasks!",
    category:"multimodal",
    paper:"https://arxiv.org/abs/2507.13353",
    code:"https://github.com/NVlabs/VideoITG" },

  { venue:"CVPR", year:"2026",
    title:"VOSR: A Vision-Only Generative Model for Image Super-Resolution",
    authors:"R. Wu, L. Sun, Z. Zhang, X. Kong, J. Zhao, S. Wang, L. Zhang",
    tagline:"Train strong generative SR models from scratch without text–image pairs!",
    category:"restoration",
    paper:"https://arxiv.org/pdf/2604.03225",
    code:"https://github.com/cswry/VOSR" },

  { venue:"CVPR", year:"2026",
    title:"GDPO-SR: Group Direct Preference Optimization for One-Step Generative Super-Resolution",
    authors:"Q. Yi, S. Li, R. Wu, L. Sun, Z. Zhang, L. Zhang",
    tagline:"Can we apply RL to one-step diffusion SR models?",
    category:"restoration",
    paper:"https://arxiv.org/pdf/2603.16769",
    code:"https://github.com/Joyies/GDPO" },

  { venue:"CVPR", year:"2026",
    title:"BinaryAttention: One-Bit QK-Attention for Vision and Diffusion Transformers",
    authors:"C. Xiao, Z. Zhang, L. Zhang",
    tagline:"Extremely low-bit attention without performance degradation!",
    category:"architecture",
    paper:"https://arxiv.org/abs/2603.09582",
    code:"https://github.com/EdwardChasel/BinaryAttention" },

  { venue:"CVPR", year:"2026",
    title:"MICo-150K: A Comprehensive Dataset Advancing Multi-Image Composition",
    authors:"X. Wei, K. Cen, H. Wei, Z. Guo, B. Li, Z. Wang, J. Zhang, L. Zhang",
    tagline:"An elaborately constructed dataset and a strong baseline model!",
    category:"benchmarks",
    paper:"https://arxiv.org/abs/2512.07348",
    code:"https://github.com/A113N-W3I/MICo-150K" },

  { venue:"CVPR", year:"2026",
    title:"Photo3D: Advancing Photorealistic 3D Generation through Structure-Aligned Detail Enhancement",
    authors:"X. Liang, Z. Ma, L. Sun, Y. Guo, L. Zhang",
    tagline:"To make 3D generation results more realistic!",
    category:"3d",
    paper:"https://arxiv.org/abs/2512.08535",
    code:"https://github.com/Liangsanzhu/Photo3D/" },

  { venue:"CVPR", year:"2026",
    title:"It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal",
    authors:"L. Qu, S. Zhou, J. Liang, H. Zeng, L. Zhang, J. Yang",
    tagline:"Capture your precious moment without annoying flickers!",
    category:"restoration" },

  { venue:"ICLR", year:"2026",
    title:"One2Scene: Geometric Consistent Explorable 3D Scene Generation from a Single Image",
    authors:"P. Wang, L. Chen, Z. Ma, Y. Guo, G. Zhang, L. Zhang",
    tagline:"Generating an explorable 3D scene from a single image!",
    category:"3d",
    paper:"https://arxiv.org/pdf/2602.19766",
    code:"https://one2scene5406.github.io/" },

  { venue:"ICLR", year:"2026",
    title:"Many-for-Many: Unify the Training of Multiple Video and Image Generation and Manipulation Tasks",
    authors:"T. Yang, R. Li, Y. Shi, Y. Zhang, Q. Dong, H. Cheng, W. Feng, S. Wen, B. Peng, L. Zhang",
    tagline:"One model, many tasks!",
    category:"synthesis",
    paper:"https://arxiv.org/abs/2506.01758",
    code:"https://github.com/leeruibin/MfM" },

  { venue:"IJCV", year:"2026",
    title:"Restoration Adaptation for Semantic Segmentation on Low Quality Images",
    authors:"K. Guan, R. Wu, S. Li, W. Zhu, W. Zeng, L. Zhang",
    tagline:"Effective segmentation on real-world low-quality images!",
    category:"restoration",
    paper:"https://www.arxiv.org/abs/2602.14042",
    code:"https://github.com/Ka1Guan/RASS" },

  { venue:"Preprint", year:"2026",
    title:"NSARM: Next-Scale Autoregressive Modeling for Robust Real-World Image Super-Resolution",
    authors:"X. Kong, R. Wu, S. Liu, L. Sun, L. Zhang",
    tagline:"An efficient and robust AR model for real-world super-resolution!",
    category:"restoration",
    paper:"https://arxiv.org/abs/2510.00820",
    code:"https://github.com/Xiangtaokong/NSARM" },

  { venue:"Preprint", year:"2026",
    title:"VideoVerse: Does Your T2V Generator Have World Model Capability?",
    authors:"Z. Wang, X. Wei, B. Li, Z. Guo, J. Zhang, H. Wei, K. Wang, L. Zhang",
    tagline:"To evaluate how strong your T2V model is!",
    category:"benchmarks",
    paper:"https://arxiv.org/abs/2510.08398",
    code:"https://www.naptmn.cn/Homepage_of_VideoVerse/" },

  { venue:"Preprint", year:"2026",
    title:"TIIF-Bench: How Does Your T2I Model Follow Your Instructions?",
    authors:"X. Wei, J. Zhang, Z. Wang, H. Wei, Z. Guo, L. Zhang",
    tagline:"Accurately evaluate T2I models' real performance!",
    category:"benchmarks",
    paper:"https://www.arxiv.org/abs/2506.02161",
    code:"https://a113n-w3i.github.io/TIIF_Bench/" },

  { venue:"Preprint", year:"2026",
    title:"CoCoEdit: Content-Consistent Image Editing via Region Regularized RL",
    authors:"Y. Wu, C. Xie, R. Li, L. Chen, Q. Yi, L. Zhang",
    tagline:"Edit the image as you instruct without changing background details!",
    category:"synthesis",
    paper:"https://arxiv.org/abs/2602.14068",
    code:"https://github.com/langmanbusi/CoCoEdit" },

  { venue:"Preprint", year:"2026",
    title:"Self-Transcendence: Is External Feature Guidance Indispensable for Accelerating DiT Training?",
    authors:"L. Sun, R. Wu, Z. Zhang, R. Li, Y. Sun, S. Liu, L. Zhang",
    tagline:"Do we really need pre-trained external features to accelerate DiT training?",
    category:"architecture",
    paper:"https://arxiv.org/abs/2601.07773",
    code:"https://github.com/csslc/Self-Transcendence" },

  { venue:"Preprint", year:"2026",
    title:"Diversity-Preserved Distribution Matching Distillation for Fast Visual Synthesis",
    authors:"T. Wu, R. Li, L. Zhang, K. Ma",
    tagline:"Completely address the loss of diversity in DMD distillation!",
    category:"synthesis",
    paper:"https://arxiv.org/abs/2602.03139",
    code:"https://github.com/Multimedia-Analytics-Laboratory/dpdmd" },

  { venue:"Preprint", year:"2026",
    title:"Pretraining LLMs using Distributed GPUs: A Memory-Efficient Decentralized Paradigm",
    authors:"J. Zhang, C. Xiao, A. Wu, X. Zhang, L. Zhang",
    tagline:"Can we train large-scale LLMs using GPUs with low memory?",
    category:"architecture",
    paper:"https://arxiv.org/abs/2602.11543",
    code:"https://github.com/zjr2000/SPES" },

  { venue:"Preprint", year:"2026",
    title:"PhyDetEx: Detecting and Explaining the Physical Plausibility of T2V Models",
    authors:"Z. Wang, K. Wang, L. Zhang",
    tagline:"Is the generated video physically plausible and why?",
    category:"benchmarks",
    paper:"https://arxiv.org/abs/2512.01843",
    code:"https://github.com/Zeqing-Wang/PhyDetEx" }
];

window.TEAM = [
  { name:"Rongyuan Wu",      role:"PhD Student", initials:"RW" },
  { name:"Lingchen Sun",     role:"PhD Student", initials:"LS" },
  { name:"Zhengqiang Zhang", role:"PhD Student", initials:"ZZ" },
  { name:"Xiangtao Kong",    role:"PhD Student", initials:"XK" },
  { name:"Xin Wei",          role:"PhD Student", initials:"XW" },
  { name:"Linfeng Chen",     role:"PhD Student", initials:"LC" },
  { name:"Peng Wang",        role:"PhD Student", initials:"PW" },
  { name:"Zeqing Wang",      role:"PhD Student", initials:"ZW" },
  { name:"Chenyu Xiao",      role:"PhD Student", initials:"CX" },
  { name:"Qianrui Yi",       role:"PhD Student", initials:"QY" },
  { name:"Wenjie Zhu",       role:"PhD Student", initials:"WZ" },
  { name:"Ruibin Li",        role:"PhD Student", initials:"RL" },
  { name:"Jiarui Zhang",     role:"PhD Student", initials:"JZ" },
  { name:"Kai Guan",         role:"PhD Student", initials:"KG" },
  { name:"Xinxin Liang",     role:"PhD Student", initials:"XL" },
  { name:"Zheng Ma",         role:"PhD Student", initials:"ZM" }
];

window.COLLECTIONS = {
  restoration: {
    num: "01",
    title: "Image / Video Restoration, Enhancement & Quality Assessment",
    lead: "We develop state-of-the-art methods for real-world visual restoration — super-resolution, denoising, deblurring, dehazing, HDR, flicker removal — and rigorous quality assessment metrics. Our methods are widely deployed on mobile devices via our collaboration with OPPO Research Institute.",
    tags: ["Real-world SR", "Denoising", "Deblurring", "HDR", "Restoration for Downstream", "IQA / VQA"],
    topics: [
      { title:"Real-World Super-Resolution", desc:"Generative and regression-based SR that works under complex, unknown degradations." },
      { title:"Diffusion & AR SR",           desc:"Accelerating diffusion / autoregressive generators for practical SR." },
      { title:"RL for Restoration",          desc:"Preference optimization and reward learning for perceptual restoration." },
      { title:"Video Flicker Removal",       desc:"Removing temporal artifacts from burst captures and consumer videos." },
      { title:"Restoration-for-Perception",  desc:"Restoration as adaptation for downstream segmentation, detection and VQA." },
      { title:"Quality Assessment",          desc:"Robust perceptual metrics aligned with human preferences." }
    ]
  },
  multimodal: {
    num: "02",
    title: "Multimodal Perception, Understanding & Reasoning",
    lead: "We advance Multimodal Large Language Models (MLLMs) for perception, grounding and reasoning — enabling models that truly understand images and videos, ground concepts temporally and spatially, and reason across modalities.",
    tags: ["MLLM", "VLM", "Grounding", "Video Understanding", "OOD Detection", "Reasoning"],
    topics: [
      { title:"Video Temporal Grounding",    desc:"Instructed temporal grounding to align language with video moments." },
      { title:"MLLM for OOD Detection",      desc:"Using MLLMs to shape adaptive negative textual spaces." },
      { title:"Multi-Task MLLMs",            desc:"Unified models that tackle many perception tasks." },
      { title:"Vision-Language Alignment",   desc:"Better alignment between visual tokens and language space." },
      { title:"Compositional Reasoning",     desc:"Reasoning across regions, objects and temporal segments." },
      { title:"Mobile MLLMs",                desc:"Efficient MLLMs suited for on-device deployment." }
    ]
  },
  synthesis: {
    num: "03",
    title: "Image & Video Synthesis and Generation",
    lead: "We develop, accelerate and distill next-generation diffusion, DiT and autoregressive generators for image and video synthesis and editing. We work on sampling acceleration, one-step distillation, controllable editing and unified training.",
    tags: ["Diffusion", "DiT", "Autoregressive", "One-Step Distillation", "Image Editing", "Video Generation"],
    topics: [
      { title:"Diffusion Distillation",      desc:"Diversity-preserving distillation for fast visual synthesis." },
      { title:"DiT Acceleration",            desc:"Studying whether external features are indispensable for DiT training." },
      { title:"Content-Consistent Editing",  desc:"Instruction-following image editing without altering background." },
      { title:"Unified Video / Image Gen.",  desc:"Single models that tackle many generation & manipulation tasks." },
      { title:"Controllable Generation",     desc:"Region-regularized and structure-aligned conditional generation." },
      { title:"Generative Super-Resolution", desc:"Generative SR using diffusion and autoregressive priors." }
    ]
  },
  "3d": {
    num: "04",
    title: "3D Perception, Reconstruction & Generation",
    lead: "We build systems that sense, reconstruct, synthesize and edit high-fidelity 3D worlds from images, videos and language — covering explorable scene generation, photorealistic asset synthesis and generalized 3D editing.",
    tags: ["Scene Generation", "3D Editing", "NeRF / Gaussian", "Single-Image-to-3D", "Photorealism"],
    topics: [
      { title:"One-Pass 3D Editing",         desc:"Generalized, versatile 3D editing in a single forward pass." },
      { title:"Explorable Scene Gen.",       desc:"Geometrically-consistent 3D scenes from a single image." },
      { title:"Photorealistic 3D Gen.",      desc:"Structure-aligned detail enhancement for photorealism." },
      { title:"Neural 3D Representations",   desc:"Implicit fields and Gaussian splatting for rich scene reconstruction." },
      { title:"Text-to-3D",                  desc:"Prompt-driven 3D asset generation and manipulation." },
      { title:"3D Understanding",            desc:"Semantic parsing and reasoning in reconstructed 3D worlds." }
    ]
  },
  architecture: {
    num: "05",
    title: "Architecture & Training Paradigms",
    lead: "We study new architectures for vision transformers, diffusion transformers, LLMs and VLMs — and the training paradigms that make them efficient: low-bit attention, decentralized pretraining and feature-free acceleration.",
    tags: ["Transformer", "DiT", "LLM", "VLM", "Low-Bit", "Distributed Training"],
    topics: [
      { title:"One-Bit Attention",           desc:"Binary QK-Attention without performance degradation." },
      { title:"Decentralized LLM Training",  desc:"Memory-efficient pretraining on distributed, low-memory GPUs." },
      { title:"Self-Transcendent DiT",       desc:"Accelerating DiTs without external pre-trained features." },
      { title:"Efficient VLMs",              desc:"Compact VLMs with strong perception-reasoning trade-offs." },
      { title:"Training Dynamics",           desc:"Understanding what features truly matter during training." },
      { title:"Mobile-Friendly Models",      desc:"Architectures suited for on-device inference." }
    ]
  },
  benchmarks: {
    num: "06",
    title: "Benchmarks & Datasets",
    lead: "Rigorous, reproducible science needs rigorous, reproducible evaluation. VCLab contributes comprehensive benchmarks and datasets for T2I / T2V instruction following, video world-model capabilities, multi-image composition and physical plausibility.",
    tags: ["Benchmarks", "Datasets", "T2I / T2V", "World Models", "Physics", "Multi-Image"],
    topics: [
      { title:"T2I Instruction Following",   desc:"TIIF-Bench — evaluating how faithfully T2I models follow prompts." },
      { title:"T2V World-Model Capability",  desc:"VideoVerse — probing whether T2V generators have world-model ability." },
      { title:"Physics of Generated Video",  desc:"PhyDetEx — detecting and explaining physical plausibility in T2V." },
      { title:"Multi-Image Composition",     desc:"MICo-150K — a large dataset for multi-image composition research." },
      { title:"Restoration Benchmarks",      desc:"Evaluating restoration quality in real-world settings." },
      { title:"Perception Metrics",          desc:"Alignment of metric scores with human perception." }
    ]
  }
};
