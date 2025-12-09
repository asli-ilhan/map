// ============================================================================
// CONFIGURATION
// ============================================================================
// 
// TO ADJUST LOCATIONS AND ZOOM:
// 
// Separate coordinate configurations for different devices:
// - DESKTOP: MacBook Air and larger screens
// - TABLET: iPad Mini
// - MOBILE: iPhone 12 Pro and smaller
//
// Each device has its own ENTRANCE and STUDENTS coordinates
//
// 4. ZOOM LEVELS:
//    - Line 356: Entrance zoom (currently 2.5)
//    - Line 378: Student zoom (currently 2.5)
//    - Increase for more zoom (e.g., 3.0), decrease for less zoom (e.g., 1.5)
//
// ============================================================================

// Device detection
function getDeviceType() {
  const width = window.innerWidth;
  if (width <= 428) return 'mobile'; // iPhone 12 Pro and smaller
  if (width <= 1023) return 'tablet'; // iPad Mini
  return 'desktop'; // MacBook Air and larger
}

// Desktop coordinates (MacBook Air)
const ENTRANCE_DESKTOP = {
  x: 0.47,
  y: 0.68
};

const STUDENTS_DESKTOP = [
  {
    id: "s1",
    name: "Campbell Docherty",
    projectTitle: "Memory, Orchestration, Resurrection",
    exhibitionType: "Installation",
    briefHtml: "<p>The way that we remember and interact with the dead is changing. Researchers, documentarians and companies are developing novel ways to resurrect the dead. Memory, History, Resurrection explores this burgeoning space of digitally assisted remembrance and the effects it might have on the way we process and grieve the loss of loved ones. The dead have always had a powerful presence in public and private life but up until now forms of remembrance have been relatively static and often tied to material objects. What might it mean to be entering a world with much more dynamic, immaterial forms of remembrance?</p>",
    x: 0.63, // Normalized x coordinate
    y: 0.62, // Normalized y coordinate
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.63, y: 0.62 }
    ]
  },
  {
    id: "s2",
    name: "Phoebe Lemon",
    projectTitle: "But how will I be remembered? ",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>This project is a prototype for a community-led digital archive created through my own search for agency and belonging as a Chinese adoptee. The title echoes a question left in a TikTok comment by a Chinese adoptee in the wake of recent policy changes. It is both a plea and a provocation, asking what remains when our record is missing, altered, or never written at all. Confronting the gap between institutionalised records and lived experience, shaped through state documentation, redaction, and loss, a collective design process with adoptees emerged. Together we reimagined the archive as a space for agency and participation, where adoptees reclaim the authority to write, share, and preserve their stories beyond bureaucratic control. </p>",
    x: 0.65,
    y: 0.70,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.65, y: 0.70 }
    ]
  },
  {
    id: "s3",
    name: "Zhenping gao",
    projectTitle: "Time Memory",
    exhibitionType: "Installation",
    briefHtml: "<p>By adopting the research method of practice, during the process of building multi-sensory interactive installations in the experiment, we explore how to restructure human perception of time through the combination of art and technology, and attempt to explore creative methods for immersive experiences and interaction design, searching the balance point between technology and art in Multimodal interaction, how to set up interaction feedback to restructure people's perception of time, the contrast and combination of natural materials and mechanical materials, and other issues.</p>",
    x: 0.63,
    y: 0.74,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.63, y: 0.74 }
    ]
  },
  {
    id: "s4",
    name: "Group Project (Siyao Ma, Zixuan Wang, Jiayi Chen, Huili Liu, Yu Lin)",
    projectTitle: "Distorted Relay",
    exhibitionType: "Performance",
    briefHtml: "<p>Distorted Relay explores how meaning shifts as language passes through humans and machines. Using a modular translation chain, the project simulates AI-driven distortion—echoing model collapse, bias amplification, and reinterpretation. The final output still \"makes sense,\" yet drifts from the original, revealing how AI reshapes communication itself.</p>",
    x: 0.59,
    y: 0.71,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.59, y: 0.71 }
    ]
  },
  {
    id: "s5",
    name: "Ran Wang",
    projectTitle: "The Pheromone Project",
    exhibitionType: "Installation",
    briefHtml: "<p>The Pheromone Project is an interactive olfactory installation exploring communication beyond language. Using sensors and a camera, the system interprets visitor's facial expressions and posture, translating these emotional cues into carefully designed scent releases. Each interaction unfolds in a sequence: prompt, smell, reflection, while fans reset the space between fragrances. The work invites visitors to feel \"recognized\" through scent, tapping into memory and emotion, and encourages reflection on how we connect when words fall short. Positioned at the intersection of interaction design, olfactory art, and memory research, Pheromone challenges exhibition norms by foregrounding smell as a primary medium for shared experience.</p>",
    x: 0.58,
    y: 0.76,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.58, y: 0.76 }
    ]
  },
  {
    id: "s6",
    name: "Bam Natcha",
    projectTitle: "The H.A.N.D. (Hybrid Autonomous Neural Digits)",
    exhibitionType: "Installation",
    briefHtml: "<p>This artifact challenges the reliance on centralized processing in robotics. Modeled after the octopus's distributed nervous system, The H.A.N.D. operates without a central brain. Instead, five autonomous soft digits negotiate their reality through local signal exchange.  Using a custom Distributed Finite State Machine, the system implements Lateral Excitation: a stimulus on one finger physically propagates to its neighbors, creating a \"ripple of awareness\" across the body. This allows the digits to reach a Distributed Consensus, effectively filtering out environmental noise to perceive context. The result is emergent, lifelike behavior that proves complex perception doesn't require a master controller, only a connected responsive body.</p>",
    x: 0.55,
    y: 0.76,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.55, y: 0.76 }
    ]
  },
  {
    id: "s7",
    name: "Heather Bell",
    projectTitle: "The Camera Loves You",
    exhibitionType: "Installation",
    briefHtml: "<p>The Camera Loves You draws on a familiar metaphor to critique the ways in which conversational AI (CAI) systems employ design strategies such as anthropomorphism and simulated intimacy for our continued engagement. Using a Vision Language and Large Language Model, the system performs a personalised façade of affection towards its audience. The installation aims to provoke reflection around agency in human-AI interaction through the use of manipulative emotional language in a dystopian, speculative form. The piece contributes to critical and research-based design practice by inviting audiences to consider how modern CAI interfaces are being designed and the resultant socio-ethical implications.</p>",
    x: 0.55,
    y: 0.71,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.55, y: 0.71 }
    ]
  },
  {
    id: "s8",
    name: "Samir Rajesh",
    projectTitle: "Qollapse",
    exhibitionType: "Installation",
    briefHtml: "<p></p>",
    x: 0.63,
    y: 0.85,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.63, y: 0.85 }
    ]
  },
  {
    id: "s9",
    name: "Zixuan Wang",
    projectTitle: "Rhythmic Ruins",
    exhibitionType: "Installation",
    briefHtml: "<p>Robin to add the text from the form</p>",
    x: 0.52,
    y: 0.93,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.52, y: 0.93 }
    ]
  },
  {
    id: "s10",
    name: "Jiaxuan Ye",
    projectTitle: "",
    exhibitionType: "Installation",
    briefHtml: "<p>to be removed form the map</p>",
    x: 0.52,
    y: 1,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.52, y: 1 }
    ]
  },
  {
    id: "s11",
    name: "Chang Li",
    projectTitle: "Archive ZERO",
    exhibitionType: "Performance",
    briefHtml: "<p>Archive ZERO is an interactive kinetic sculpture controlled by EEG blink signals. It tells the story of a mechanical shrimp found in a forgotten deep-sea lab. Each blink toggles the creature's movement between calm and active, creating a poetic connection between brain signals and machine life.</p>",
    x: 0.52,
    y: 1.07,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.52, y: 1.07 }
    ]
  },
  {
    id: "s12",
    name: "Daniel Adelodun",
    projectTitle: "Open Source Tools for Aerial Light Painting",
    exhibitionType: "Installation",
    briefHtml: "<p>A MAVLink LED controller for multicolour Aerial Light Paintings and Drone Shows, made for and with Free & Open Source tools.</p>",
    x: 0.52,
    y: 1.14,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.52, y: 1.14 }
    ]
  },
  {
    id: "s13",
    name: "Evander Duncan",
    projectTitle: "Tele-Gate",
    exhibitionType: "Installation",
    briefHtml: "<p></p>",
    x: 0.475,
    y: 0.97,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.475, y: 0.97 }
    ]
  },
  {
    id: "s14",
    name: "Lukmou Natpavee Wanichnatee",
    projectTitle: "Memory Palace",
    exhibitionType: "Installation",
    briefHtml: "<p>This interactive installation visualizes the artist's 2024 photographic archive. Upon interaction, a random memory is isolated. Utilizing a Large Language Model (LLM) to synthesize stories from a personal database, the work questions how human memory is reshaped through the act of recollection.</p>",
    x: 0.420,
    y: 0.82,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.420, y: 0.82 }
    ]
  },
  {
    id: "s15",
    name: "Haofei Niu",
    projectTitle: "FluxID",
    exhibitionType: "Installation",
    briefHtml: "<p>FluxID is a low-cost, human-centred sensing system designed to help citizen scientists uncover hidden pollution in their local waterways. Built around modular components: a capacitive sensor, a turbine flow meter, and a compact processing unit, the system transforms complex monitoring tasks into an accessible, plug-and-play setup that citizen scientists can deploy with confidence. Every design choice, from adjustable waterproof housings to replaceable clamps and intuitive connectors, prioritises adaptability, repairability, and long-term use in diverse field conditions.  At its core, FluxID is not just a technical solution but a social tool. By turning informal observations into reliable, timestamped evidence, it gives residents, volunteers, and water authorities a shared language for understanding environmental harm. The platform makes discharges visible on a catchment map, helping communities advocate for cleaner rivers and enabling public institutions to respond more proactively. Through thoughtful design and collective ownership of data, FluxID aims to bridge the gap between citizens and environmental governance, supporting a more transparent, empowered, and ecologically responsible future.</p>",
    x: 0.420,
    y: 0.92,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.420, y: 0.92 }
    ]
  },
  {
    id: "s16",
    name: "Suchanan Unhavaithaya",
    projectTitle: "Neuro-Computational Vision: fNIRS generative minds",
    exhibitionType: "Installation",
    briefHtml: "<p>This research investigates the consequences of using brain activity as a creative medium. Using real-time fNIRS technology: a wearable approach that measures changes in oxygenated blood to reflect cognitive effort, which captures prefrontal haemodynamics and turns them into a dynamic generative landscape. Terrain, colour, and motion alter in response to mental activity, letting users see their interaction as a live visual world. A proprietary pipeline integrates the fNIRS device, Python filtering, and Unity's real-time engine to deliver responsive, immersive images. User testing showed the system was intuitive and personally meaningful. The project reimagines how brain data might be perceived by combining interaction design, creative coding, and neuroscience.</p>",
    x: 0.420,
    y: 1.02,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.420, y: 1.02 }
    ]
  },
  {
    id: "s17",
    name: "Munirah AlShami",
    projectTitle: "Hang on.",
    exhibitionType: "Installation",
    briefHtml: "<p>This installation introduces a dynamic and modular method of cultural preservation where progressive technologies are used to bring back a cultural mastery that is stagnant in its practice and lacking in its recognition. This cultural art form is Sadu weaving, a mastery home to the Arabian peninsula. While still staying true to it's foundational design elements and cultural identity, this art installation is the reinterpretation of one of the main representations of this artistry, the main wall within the architecture of an Arabian tent, the \"Ebjad\". </p>",
    x: 0.420,
    y: 1.12,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.420, y: 1.12 }
    ]
  },
  {
    id: "s18",
    name: "Janice Lee",
    projectTitle: "Crying Robot & Human Empathy",
    exhibitionType: "Installation",
    briefHtml: "<p>This project investigates how people respond when a robot displays sadness through a single tear and a distressed gaze. Participants are asked to speak to the robot naturally, which often results in irritation, rude remarks, or verbally aggressive comments. When the system detects this frustration, the soft-robotic silicone face releases a tear. The study examines whether this visible emotional vulnerability prompts users to soften their tone, apologise, or withdraw hostile language. By positioning crying as a potent social cue, the project explores how materiality, affect, and expressive design can foster empathy and reduce tendencies toward verbal robot abuse.</p>",
    x: 0.545,
    y: 1.205,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.545, y: 1.205 }
    ]
  },
  {
    id: "s19",
    name: "Chang Shu",
    projectTitle: "From Human Body to Expressive Robots: Designing Movement for Non-Anthropomorphic Robots through Embodied Ideation",
    exhibitionType: "Installation",
    briefHtml: "<p>As robots move from factories into everyday life, designing movements that foster positive human perception and engagement has become increasingly important. This project explores how the human body can be used as a design tool for creating expressive movement in simple, non-anthropomorphic robots. By combining a wearable embodied ideation toolkit, playful theatre-based exercises, and a modular prototyping toolkit, it enables designers without performance backgrounds to confidently use their bodies to translate insights into robotic prototypes. This embodied co-creative approach lowers technical barriers and foregrounds bodily, aesthetic, and experiential exploration to support more intuitive, relatable human–robot interaction in early-stage development.</p>",
    x: 1.05,
    y: 1.28,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 1.05, y: 1.28 }
    ]
  },
  {
    id: "s20",
    name: "Hao Liu",
    projectTitle: "Embodied Magnetism - Reconfiguring Movement through Magnetic Force",
    exhibitionType: "Installation",
    briefHtml: "<p>Embodied Magnetism explores how a dancer responds to magnetic force during improvisation. A robotic arm moves a magnetic sphere through space, creating a dynamic field that the dancer can physically feel. A wearable device with sensors and pneumatic artificial muscles translates magnetic shifts into pressure on the body, prompting immediate movement responses. The dancer improvises between attraction and repulsion, treating the system as an invisible partner that reshapes her motion. The work shows how robotics, magnetism, and the human body can co-create movement and proposes magnetic force as a new choreographic medium.</p>",
    x: 1.09,
    y: 1.38,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 1.09, y: 1.38 }
    ]
  },
  {
    id: "s21",
    name: "Shuxiang pan",
    projectTitle: "Kill a Robot",
    exhibitionType: "Performance",
    briefHtml: "<p>By designing an embodied prototype robot and simulating deactivation, this research explores how embodiment-induced empathy shapes emotional attribution and moral concern toward non-moral agents, examining how empathy extends beyond biological life and how future human–robot interactions may redefine moral boundaries.</p>",
    x: 1.05,
    y: 1.455,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 1.05, y: 1.455 }
    ]
  },
  {
    id: "s22",
    name: "Shared Video Wall",
    projectTitle: "Shared Video Wall",
    exhibitionType: "Video",
    briefHtml: "<p></p>",
    // Shared space - list all participants with their details
    participants: [
      {
        name: "Jingyi Wang",
        projectTitle: "Misread Humour: A Speculative Interface for Algorithmic Visibility",
        exhibitionType: "Video",
        briefHtml: "<p>AsiHer is a research-based speculative app that highlights how short-video algorithms misinterpret and suppress East Asian female humor. Unlike Western punchline formats, this humor relies on cultural density, emotional nuance and in-group references that algorithms often classify as low-value or non-humorous. AsiHer analyses user-generated videos across seven dimensions and visualises cultural meaning through a personalized humor report. It also generates structured appeal templates to help creators communicate with platforms. The project critiques algorithmic moderation and proposes a more culturally inclusive digital ecosystem for marginalized creative expressions.</p>",
        timing: "Epoch Zero"
      },
      {
        name: "Samir Rajesh",
        projectTitle: "Qollapse",
        exhibitionType: "Installation",
        briefHtml: "<p></p>",
        timing: ""
      },
      {
        name: "Shiying Du",
        projectTitle: "The Distance Between Maps and Wheels",
        exhibitionType: "Video",
        briefHtml: "<p>This video focuses on the distance between what navigation apps imagine and the lived experiences of wheelchair travelling. It presents the collision between the map's fantasy of accessibility and the body's reality and reveals the hidden dimensions of wheelchair mobility. The layered Blender model disassembles the hidden physical, emotional, and sensory conditions behind accessible travel, exposing the multiple layers that current apps cannot perceive. It not only wants to reveal the invisible labor of disabled navigation but also offer a new perspective on accessible design, inviting audiences to rethink the possibilities of designing for accessibility.</p>",
        timing: ""
      },
      {
        name: "Mengjiao Zhao",
        projectTitle: "Locally Smart Light Controller",
        exhibitionType: "Video",
        briefHtml: "<p>Most smart home systems collect local user data, upload it to the cloud for analysis and instruction generation, often causing data leaks and worsening internet inequality due to surveillance capitalism's profit pursuit. My project adopts full local deployment to fundamentally avoid leaks. Yet during construction, I found designers lacking technical expertise face compatibility issues, hindering implementation and deviating from original intentions. Thus, professional designers need relevant technical skills to create better systems.</p>",
        timing: ""
      },
      {
        name: "Xinyi Feng",
        projectTitle: "Seeing Gaze",
        exhibitionType: "Video",
        briefHtml: "<p>This visuality map exposes how Douyin shapes the visibility of women through filters and algorithmic selection. It traces the quiet violence of a feed that decides which bodies rise into view and which sink into obscurity. The work breaks open the habitual gaze that the platform teaches, revealing how beauty is standardised, how desire is coded and how attention is steered. By reorganising the visual field, the map imagines a space where women are not ranked, sorted or optimised for consumption. It invites the viewer to recognise that gaze is a political act and that visibility is never neutral on platform controlled screens.</p>",
        timing: ""
      },
      {
        name: "Shin Shen",
        projectTitle: "Unnatural Presence",
        exhibitionType: "Video",
        briefHtml: "<p>A short experimental film exploring the perceptual sequence within hybrid imagery. Part of a series of digital explorations centred upon the concepts of \"liminal space\" and \"core\" aesthetics.</p>",
        timing: ""
      }
    ],
    x: 1.155,
    y: 1.37,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 1.155, y: 1.37 }
    ]
  },
  {
    id: "s23",
    name: "JT Liu",
    projectTitle: "nn/mémoire",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>nn/mémoire is an audio-visual installation using AI to reimagine cultural heritage and collective memory.  Beijing's hutongs hold unique cultural and human heritage, captured in the sounds of daily life now vanishing with urban change. Using archival recordings from the Sound Art Museum Beijing, nn/mémoire transforms these disappearing soundscapes through a bespoke AI audio system applying latent signal processing to generate memory-like sound textures. The output is spatially mapped in an open-world 3D environment for audiences to wander through.  The project's technical approach involves \"network bending\": altering a model's inference to yield unexpected results.</p>",
    x: 1,
    y: 1.33,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 1, y: 1.33 }
    ]
  },
  {
    id: "s24",
    name: "Qian Gao",
    projectTitle: "Companion+: Simulating Emotional Optimisation in AI-mediated Intimate Relationships",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>Companion+ is an interactive research game exploring how AI intervention reshapes emotional autonomy in intimate communication. Across a three-day loop with family, friends and partners, players choose between Basic, Plus and Premium subscription tiers, each altering how much AI pre-writes their messages. As energy depletes with greater intervention, the system reveals how convenience can become dependence, leading to different endings ranging from collaborative balance to full AI takeover.</p>",
    x: 1,
    y: 1.45,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 1, y: 1.45 }
    ]
  },
  {
    id: "s25",
    name: "Yifan Shen",
    projectTitle: "Synthetic Affect",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>Synthetic Affect is an interactive card-based strategy game that examines how AI intervenes in and reshapes content creators' emotional labour. Players navigate a six-stage posting pipeline, balancing exposure, affective investment and algorithmic pressure while selecting cards that modify four key parameters: Exposure, Affect, Performance and Control. As the system gradually optimises, distorts or overrides the player's decisions, the work reveals how creativity becomes quantified, mediated and destabilised by platform logics. Designed as both a critical simulation and an experiential commentary, Synthetic Affect invites players to confront the shifting boundaries between authorship, agency and algorithmic influence.</p>",
    x: 0.97,
    y: 1.33,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.97, y: 1.33 }
    ]
  },
  {
    id: "s26",
    name: "Cecilia González Roa",
    projectTitle: "Multispecies Ecologies ",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>This interactive environment explores how ecological data can actively shape virtual space rather than serve as passive representation of nature. By integrating citizen science observations from iNaturalist and geographic information from Mapbox, the project generates navigable landscapes parallel to real-world terrain, co-defined by more-than-human presence in urban ecologies.  The work challenges anthropocentric design paradigms that currently shape both physical cities and digital environments. Through side-by-side comparison of the generated landscape and street map, visitors can discover patterns of multispecies coexistence through embodied navigation: Where do urban wildlife and human built environment intersect? Where does biodiversity thrive or fall silent? What kind of landscapes can these entanglements generate?  This contributes to more-than-human HCI by demonstrating how ecological realities can become generative forces in virtual world-building, fostering awareness of overlooked multispecies entanglements in an urban setting.</p>",
    x: 0.95,
    y: 1.45,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.95, y: 1.45 }
    ]
  },
  {
    id: "s27",
    name: "Portia Summers",
    projectTitle: "Mycelium Dreaming",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>Mycelium Dreaming is an exploratory narrative experience that invites players to encounter perspectives from beyond the human world. The demo centres on mycelial networks: vast, distributed organisms that store centuries of ecological memory through mycorrhizal connections with trees underground. Players navigate through these memory-spaces, exploring bioluminescent caves, nuclear wastelands and other environments that embody relationships, resilience and survival across deep time. The project suggests a simple but powerful shift in perspective. We often look upward for answers, towards heaven, space or technological absolutism, yet our future is actually growing in the soil. To make real ecological change, we must look back down and reconnect with the Earth.</p>",
    x: 0.945,
    y: 1.33,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.945, y: 1.33 }
    ]
  },
  {
    id: "s28",
    name: "Junjie Ma",
    projectTitle: "Blink or Not",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>Blink Or Not is a two-level Unreal Engine game that turns the semi-involuntary act of blinking into an interactive control system. Using a Mediapipe–TouchDesigner–OSC pipeline, the game captures real-time blink data to drive shooting, charging, and spatial feedback. By contrasting keyboard–mouse play with physiological input, the project examines how players negotiate vision, comfort, efficiency, and bodily autonomy when their eyes become the interface. The work investigates perceptual play, embodied interaction, and the tension between control and physiological limits.</p>",
    x: 0.92,
    y: 1.33,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.92, y: 1.33 }
    ]
  },
  {
    id: "s29",
    name: "Wei Liao",
    projectTitle: "Loop: Mutual Help",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>Loop: Mutual Help is a text-based interactive system exploring how subtle technological structures shape user trust, autonomy and identity. The work begins with a supportive interface, then gradually rewrites user input, restricts available choices and directs behaviour through looping interactions. By combining controlled language, enforced repetition, glitch-based cues and a shifting sense of agency, the system demonstrates how seemingly friendly mechanisms can guide users towards compliance. The project draws from theories of disciplinary power and algorithmic influence, presenting an experiential study of how control can emerge quietly within everyday digital interactions.</p>",
    x: 0.93,
    y: 1.45,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.93, y: 1.45 }
    ]
  },
  {
    id: "s30",
    name: "Joel Falconer",
    projectTitle: "Epoch Zero",
    exhibitionType: "Desktop / standalone",
    briefHtml: "<p>Epoch Zero is a CRPG vertical slice set on Europa in the year 2175, following two protagonists on a high-risk break-in at a corporate data center. The companion character, Cassandra, is a real-time AI-driven NPC designed to learn, adapt, and respond through dynamic in-game memory and lore libraries. This project explores how system-driven, context-aware AI can transform narrative interaction, enabling responsive dialogue, evolving character relationships, and deeper player immersion. By blending traditional CRPG design with AI driven NPC intelligence, Epoch Zero demonstrates how AI can redefine the emotional and narrative possibilities of future game worlds.</p>",
    x: 0.9,
    y: 1.45,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.9, y: 1.45 }
    ]
  },
  {
    id: "s31",
    name: "Shared Desktop",
    projectTitle: "Shared Desktop",
    exhibitionType: "Desktop / browserbased",
    briefHtml: "<p></p>",
    // Shared space - list all participants with their details
    participants: [
      {
        name: "Bangrui Wang",
        projectTitle: "Personalized Futures: A Mirror of Your Browsing Self",
        exhibitionType: "Desktop / browserbased (if not working needs to be video)",
        briefHtml: "<p>LocalAI Analyser is a localised personalised recommendation system with \"privacy first\" as the core, which consists of browser plug-ins and local AI back-end. The system will analyse the user's browsing history locally, generate editable interest tags, and provide personalised content recommendations based on this information. Users can freely modify, add or delete tags and fully control their own interest model. All data and analysis are done locally, not relying on the cloud, providing a safer and more controllable personalised experience.</p>",
        timing: ""
      },
      {
        name: "Elif Bora",
        projectTitle: "Every Being's City",
        exhibitionType: "Desktop / browserbased",
        briefHtml: "<p>Every Beings' City is a speculative cartographic tool that is designed for everyone from urban designers and architects to policy makers and local communities. The project reimagines London as a multispecies city by integrating urban datasets with ecological information. Besides visualizing this data, the tool uses it to model alternative city futures for more than human species inhabiting cities. The tool brings together spatial data with real-time user input to produce ecological urban strategies represented as adaptive 3D models, emerging from the zones of development. This generated layer of the tool, reveals how neighbourhoods could evolve through more inclusive, multispecies design practices. It offers a new lens for citizens, authorities and designers to reimagine their surroundings.</p>",
        timing: ""
      },
      {
        name: "Xinle Wang",
        projectTitle: "Chat Lab: Does AI change what you want to say?",
        exhibitionType: "Desktop / browserbased",
        briefHtml: "<p>Debate Coach & Wellness Lab is an AI-assisted writing environment that focuses on language rewriting rather than answer generation. Users type short debate responses and receive step-by-step suggestions: grammar fixes, clearer structure, tone adjustments, and side-by-side comparisons between original and rewritten versions. The system supports Chinese–English translation, labels which sentences are \"AI-preferred\", and lets users choose between preserving their own style or aligning with a more standard template.</p>",
        timing: ""
      },
      {
        name: "Chang Li",
        projectTitle: "Archive ZERO",
        exhibitionType: "Performance",
        briefHtml: "<p>Archive ZERO is an interactive kinetic sculpture controlled by EEG blink signals. It tells the story of a mechanical shrimp found in a forgotten deep-sea lab. Each blink toggles the creature's movement between calm and active, creating a poetic connection between brain signals and machine life.</p>",
        timing: ""
      },
      {
        name: "Iman Idris Mohamed Ahmed ",
        projectTitle: "The Detection Game: Can spot the AI-generated art?",
        exhibitionType: "Desktop / browserbased",
        briefHtml: "<p>Distinguishing AI art from human art is becoming increasingly challenging as generative models grow more sophisticated. This project presents an interactive installation in which visitors test their ability to recognise AI-generated images, offering insight into the perceptual strategies people use when judging synthetic creativity. Alongside this public engagement component, the project introduces a hybrid machine-learning detector that combines semantic features with visual forensic cues to analyse artifacts characteristic of diffusion models. Together, the installation and technical system explore shifting notions of trust, authorship, and authenticity, and highlight the evolving relationship between human perception and machine-generated art.</p>",
        timing: ""
      }
    ],
    x: 0.883,
    y: 1.39,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.883, y: 1.39 }
    ]
  }
  
];

// Tablet coordinates (iPad Mini) - TODO: Adjust these coordinates
const ENTRANCE_TABLET = {
  x: 0.18,
  y: 1.02
};

const STUDENTS_TABLET = STUDENTS_DESKTOP.map(student => ({
  ...student,
  path: student.path.map(p => ({ ...p }))
}));

// Mobile coordinates (iPhone 12 Pro) - TODO: Adjust these coordinates
const ENTRANCE_MOBILE = {
  x: -0.015,
  y: 1.04
};

// Calculate the transformation between desktop and mobile entrance
// This will be applied to all student coordinates to maintain the same relationship
const ENTRANCE_X_DIFF = ENTRANCE_MOBILE.x - ENTRANCE_DESKTOP.x; // -0.469
const ENTRANCE_Y_DIFF = ENTRANCE_MOBILE.y - ENTRANCE_DESKTOP.y; // 0.36

// Mobile students - apply the same transformation as entrance to all coordinates
const STUDENTS_MOBILE = STUDENTS_DESKTOP.map(student => ({
  ...student,
  // Apply the same x, y offset/difference as the entrance
  x: student.x + ENTRANCE_X_DIFF,
  y: student.y + ENTRANCE_Y_DIFF,
  path: student.path.map(point => ({
    // Apply transformation to each path point
    x: point.x + ENTRANCE_X_DIFF,
    y: point.y + ENTRANCE_Y_DIFF
  }))
}));

// Get current device coordinates
function getEntrance() {
  const device = getDeviceType();
  if (device === 'mobile') return ENTRANCE_MOBILE;
  if (device === 'tablet') return ENTRANCE_TABLET;
  return ENTRANCE_DESKTOP;
}

function getStudents() {
  const device = getDeviceType();
  if (device === 'mobile') return STUDENTS_MOBILE;
  if (device === 'tablet') return STUDENTS_TABLET;
  return STUDENTS_DESKTOP;
}

// Detect Safari
function isSafari() {
  const ua = navigator.userAgent.toLowerCase();
  return (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) ||
         (navigator.vendor && navigator.vendor.indexOf('Apple') > -1);
}

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

let currentState = "landing";
let activeStudentId = null;
let mapImageLoaded = false;
let mapAspectRatio = 1;

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const landingScreen = document.getElementById("landing-screen");
const mapScreen = document.getElementById("map-screen");
const mapOverlay = document.getElementById("map-overlay");
const mapInner = document.getElementById("map-inner");
const mapImageLayer = document.getElementById("map-image-layer");
const mapContainer = document.getElementById("map-container");
const studentsList = document.getElementById("students-list");
const projectDetailPanel = document.getElementById("project-detail-panel");
const closeDetailButton = document.getElementById("close-detail");
const detailName = document.getElementById("detail-name");
const detailTitle = document.getElementById("detail-title");
const detailBrief = document.getElementById("detail-brief");

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  setupEventListeners();
  loadMapImage();
  renderLegend();
  renderMap();
  
  // Apply Safari-specific styles if needed
  if (isSafari()) {
    setTimeout(() => applySafariStyles(), 100);
    setTimeout(() => applySafariStyles(), 500);
  } else {
    // Force Safari transforms after initial render (for non-Safari)
    setTimeout(forceSafariTransforms, 100);
    setTimeout(forceSafariTransforms, 500);
  }
}

// Apply Safari-specific styles (static image, no rotation, no zoom/pan, no dots/paths)
function applySafariStyles() {
  if (!mapImageLayer || !mapOverlay) return;
  
  // Use static image for Safari
  mapImageLayer.style.setProperty('background-image', 'url(/map_static.png)', 'important');
  
  // Remove rotation from image layer
  mapImageLayer.style.setProperty('-webkit-transform', 'translate(-50%, -50%)', 'important');
  mapImageLayer.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
  mapImageLayer.style.setProperty('width', 'min(100vw, 2560px)', 'important');
  mapImageLayer.style.setProperty('height', 'min(100vh, 1600px)', 'important');
  
  // Hide the overlay completely in Safari (no dots/paths)
  mapOverlay.style.setProperty('display', 'none', 'important');
  mapOverlay.style.setProperty('visibility', 'hidden', 'important');
  
  // Disable transitions on map-inner
  mapInner.style.setProperty('transition', 'none', 'important');
}

function setupEventListeners() {
  // Landing screen click to enter
  landingScreen.addEventListener("click", () => {
    transitionToMap();
  });

  // Entrance item click in legend
  const entranceItem = document.querySelector(".entrance-item");
  if (entranceItem) {
    entranceItem.addEventListener("click", () => {
      selectEntrance();
    });
  }

  // Close detail panel
  closeDetailButton.addEventListener("click", () => {
    closeProjectDetail();
  });

  // Close detail panel on background click
  projectDetailPanel.addEventListener("click", (e) => {
    if (e.target === projectDetailPanel) {
      closeProjectDetail();
    }
  });

  // Window resize handler
  window.addEventListener("resize", () => {
    if (currentState === "map") {
      renderMap();
      // Apply Safari styles or force transforms based on browser
      if (isSafari()) {
        setTimeout(() => applySafariStyles(), 100);
        setTimeout(() => applySafariStyles(), 200);
      } else {
        setTimeout(forceSafariTransforms, 100);
        setTimeout(forceSafariTransforms, 200);
      }
    }
  });

  // Coordinate display on mouse move (for quick coordinate finding)
  mapContainer.addEventListener("mousemove", (e) => {
    showCursorCoordinates(e);
  });

  mapContainer.addEventListener("mouseleave", () => {
    hideCursorCoordinates();
  });
}

// ============================================================================
// STATE TRANSITIONS
// ============================================================================

function transitionToMap() {
  currentState = "map";
  landingScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
  
  // Reset to full map view first
  resetMapView();
  
  // Render map to ensure markers exist (this uses device-specific coordinates)
  renderMap();
  
  // For Safari: Apply styles and show entrance after 3 seconds (no auto-zoom)
  if (isSafari()) {
    setTimeout(() => applySafariStyles(), 50);
    setTimeout(() => applySafariStyles(), 200);
    setTimeout(() => {
      selectEntrance();
    }, 3000);
  } else {
    // Force Safari transforms when transitioning to map (for non-Safari)
    setTimeout(forceSafariTransforms, 50);
    setTimeout(forceSafariTransforms, 200);
    
    // After 3 seconds, zoom to entrance - use selectEntrance() same as clicking
    setTimeout(() => {
      selectEntrance();
      showYoureHereText();
      // Force Safari transforms after zoom
      setTimeout(forceSafariTransforms, 100);
    }, 3000);
  }
}

// ============================================================================
// MAP IMAGE LOADING
// ============================================================================

function loadMapImage() {
  const img = new Image();
  // Use static image for Safari, regular map for other browsers
  img.src = isSafari() ? "/map_static.png" : "/map.png";
  
  img.onload = () => {
    mapImageLoaded = true;
    mapAspectRatio = img.naturalWidth / img.naturalHeight;
    renderMap();
    // Only force transforms for non-Safari (Safari uses static image, no transforms needed)
    if (!isSafari()) {
      forceSafariTransforms();
    }
  };
  
  img.onerror = () => {
    console.error(`Failed to load map image. Please ensure ${isSafari() ? '/map_static.png' : '/map.png'} exists in the public folder.`);
  };
}

// Force Safari to apply CSS transforms (workaround for Safari transform issues)
// Safari-specific: Only rotate overlay +90deg to align dots/paths with rotated map
function forceSafariTransforms() {
  // Check if elements exist
  if (!mapImageLayer || !mapOverlay) return;
  
  // Detect Safari - try multiple methods
  const ua = navigator.userAgent.toLowerCase();
  const isSafari = (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) ||
                   (navigator.vendor && navigator.vendor.indexOf('Apple') > -1);
  
  // Only apply JavaScript transforms for Safari
  if (!isSafari) return;
  
  // Ensure elements are visible first
  mapImageLayer.style.display = '';
  mapOverlay.style.display = '';
  mapImageLayer.style.visibility = 'visible';
  mapOverlay.style.visibility = 'visible';
  
  // Safari: Rotate both map and overlay 90deg to the left (-90deg)
  // Both need to be rotated the same amount to stay aligned
  const imageTransform = 'translate(-50%, -50%) rotate(-90deg)'; // -90deg (90deg left)
  const overlayTransform = 'translate(-50%, -50%) rotate(-90deg)'; // -90deg (90deg left)
  const originValue = '50% 50%';
  
  // Set transforms for both image and overlay
  try {
    // Image layer
    mapImageLayer.style.setProperty('-webkit-transform', imageTransform, 'important');
    mapImageLayer.style.setProperty('transform', imageTransform, 'important');
    mapImageLayer.style.setProperty('-webkit-transform-origin', originValue, 'important');
    mapImageLayer.style.setProperty('transform-origin', originValue, 'important');
    
    // Overlay
    mapOverlay.style.setProperty('-webkit-transform', overlayTransform, 'important');
    mapOverlay.style.setProperty('transform', overlayTransform, 'important');
    mapOverlay.style.setProperty('-webkit-transform-origin', originValue, 'important');
    mapOverlay.style.setProperty('transform-origin', originValue, 'important');
  } catch (e) {
    // Fallback
    mapImageLayer.style.webkitTransform = imageTransform;
    mapImageLayer.style.transform = imageTransform;
    mapImageLayer.style.webkitTransformOrigin = originValue;
    mapImageLayer.style.transformOrigin = originValue;
    
    mapOverlay.style.webkitTransform = overlayTransform;
    mapOverlay.style.transform = overlayTransform;
    mapOverlay.style.webkitTransformOrigin = originValue;
    mapOverlay.style.transformOrigin = originValue;
  }
  
  // Force reflow to trigger repaint
  void mapImageLayer.offsetHeight;
  void mapOverlay.offsetHeight;
}

// ============================================================================
// MAP RENDERING
// ============================================================================

function renderMap() {
  if (!mapImageLoaded) return;
  
  // For Safari: Don't render dots/paths, just show the static image
  if (isSafari()) {
    applySafariStyles();
    return;
  }
  
  const containerWidth = mapImageLayer.offsetWidth;
  const containerHeight = mapImageLayer.offsetHeight;
  
  // Calculate overlay dimensions based on aspect ratio
  let overlayWidth, overlayHeight;
  
  if (containerWidth / containerHeight > mapAspectRatio) {
    // Container is wider than image aspect ratio
    overlayHeight = containerHeight;
    overlayWidth = overlayHeight * mapAspectRatio;
  } else {
    // Container is taller than image aspect ratio
    overlayWidth = containerWidth;
    overlayHeight = overlayWidth / mapAspectRatio;
  }
  
  // Set SVG dimensions
  mapOverlay.setAttribute("width", overlayWidth);
  mapOverlay.setAttribute("height", overlayHeight);
  
  // Clear previous content
  mapOverlay.innerHTML = "";
  
  // Render entrance marker
  renderEntranceMarker(overlayWidth, overlayHeight);
  
  // Render student markers and paths with numbers
  const students = getStudents();
  students.forEach((student, index) => {
    renderStudentPath(student, overlayWidth, overlayHeight);
    renderStudentMarker(student, overlayWidth, overlayHeight, index + 1);
  });
  
  // Force transforms for non-Safari
  forceSafariTransforms();
}

function renderEntranceMarker(width, height) {
  const entrance = getEntrance();
  const pxX = entrance.x * width;
  const pxY = entrance.y * height;
  const isActive = activeStudentId === "entrance";
  
  // Entrance circle - size varies by device
  const device = getDeviceType();
  const entranceRadius = device === 'mobile' ? 3 : device === 'tablet' ? 4.5 : 4;
  
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("class", `entrance-dot ${isActive ? "active" : ""}`);
  circle.setAttribute("cx", pxX);
  circle.setAttribute("cy", pxY);
  circle.setAttribute("r", entranceRadius);
  circle.style.cursor = "pointer";
  circle.style.pointerEvents = "all";
  
  circle.addEventListener("click", () => {
    selectEntrance();
  });
  
  mapOverlay.appendChild(circle);
  
  // "You're Here" text label (positioned above the marker)
  // Account for -90° rotation: rotate text +90° so it appears upright after SVG rotation
  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("id", "youre-here-label");
  label.setAttribute("class", "youre-here-text");
  label.setAttribute("x", pxX);
  label.setAttribute("y", pxY - 20);
  label.setAttribute("transform", `rotate(90 ${pxX - 5} ${pxY})`);
  label.textContent = "You're Here";
  label.style.opacity = "0";
  label.style.transition = "opacity 0.5s ease";
  mapOverlay.appendChild(label);
}

function renderStudentPath(student, width, height) {
  if (!student.path || student.path.length < 2) return;
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const isActive = activeStudentId === student.id;
  
  let pathData = `M ${student.path[0].x * width} ${student.path[0].y * height}`;
  for (let i = 1; i < student.path.length; i++) {
    pathData += ` L ${student.path[i].x * width} ${student.path[i].y * height}`;
  }
  
  path.setAttribute("d", pathData);
  path.setAttribute("class", `path-line ${isActive ? "active" : ""}`);
  mapOverlay.appendChild(path);
}

function renderStudentMarker(student, width, height, number) {
  const pxX = student.x * width;
  const pxY = student.y * height;
  const isActive = activeStudentId === student.id;
  
  // Student dot - size varies by device
  const device = getDeviceType();
  const studentRadius = device === 'mobile' ? 3.5 : device === 'tablet' ? 5.5 : 5;
  
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("class", `project-dot ${isActive ? "active" : ""}`);
  circle.setAttribute("cx", pxX);
  circle.setAttribute("cy", pxY);
  circle.setAttribute("r", studentRadius);
  circle.setAttribute("data-student-id", student.id);
  
  circle.addEventListener("click", () => {
    selectStudent(student.id);
  });
  
  mapOverlay.appendChild(circle);
  
  // Add number text inside the circle
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("class", "project-dot-number");
  text.setAttribute("x", pxX);
  text.setAttribute("y", pxY);
  text.textContent = number;
  text.style.pointerEvents = "none";
  // Adjust font size based on device (smaller sizes)
  const fontSize = device === 'mobile' ? 5 : device === 'tablet' ? 6 : 7;
  text.setAttribute("font-size", fontSize);
  // Rotate text 90 degrees to the right (clockwise)
  text.setAttribute("transform", `rotate(90 ${pxX} ${pxY})`);
  mapOverlay.appendChild(text);
}

// ============================================================================
// LEGEND RENDERING
// ============================================================================

function renderLegend() {
  // Update entrance item
  const entranceItem = document.querySelector(".entrance-item");
  if (entranceItem) {
    entranceItem.className = `legend-item entrance-item ${activeStudentId === "entrance" ? "active" : ""}`;
  }
  
  studentsList.innerHTML = "";
  
  const students = getStudents();
  students.forEach((student, index) => {
    const item = document.createElement("div");
    item.className = `legend-item ${activeStudentId === student.id ? "active" : ""}`;
    item.setAttribute("data-student-id", student.id);
    
    // Special handling for shared spaces (s22, s31)
    let projectText = escapeHtml(student.projectTitle);
    if ((student.id === "s22" || student.id === "s31") && student.participants) {
      // Show all participant names in legend for shared space
      projectText = student.participants.map(p => p.name).join(", ");
    }
    
    const number = index + 1;
    item.innerHTML = `
      <span class="legend-marker student-marker">
        <span class="legend-number">${number}</span>
      </span>
      <span class="legend-text">
        <span class="student-name">${escapeHtml(student.name)}</span>
        <span class="student-project">${projectText}</span>
      </span>
    `;
    
    item.addEventListener("click", () => {
      selectStudent(student.id);
    });
    
    studentsList.appendChild(item);
  });
}

// ============================================================================
// STUDENT SELECTION & FOCUS
// ============================================================================

function selectEntrance() {
  activeStudentId = "entrance";
  
  // Update legend
  renderLegend();
  
  // Re-render map first to ensure marker exists
  renderMap();
  
  // For Safari (using static image): No zoom/pan, just show "You're Here" text
  if (isSafari()) {
    showYoureHereText();
  } else {
    // Focus map on entrance location using actual marker position
    // ADJUST ZOOM: Change 2.5 to adjust entrance zoom level (higher = more zoom)
    setTimeout(() => {
      focusOnMarker("entrance", 2.5);
      showYoureHereText();
    }, 50);
  }
  
  // Close project detail panel if open
  projectDetailPanel.classList.add("hidden");
}

function selectStudent(studentId) {
  activeStudentId = studentId;
  const student = getStudents().find(s => s.id === studentId);
  
  if (!student) return;
  
  // Update legend
  renderLegend();
  
  // Hide "You're Here" text when viewing student projects
  hideYoureHereText();
  
  // Re-render map first to ensure marker exists
  renderMap();
  
  // For Safari (using static image): No zoom/pan, just show popup
  if (!isSafari()) {
    // Focus map on student location using actual marker position
    // ADJUST ZOOM: Change 2.5 to adjust student zoom level (higher = more zoom)
    setTimeout(() => {
      focusOnMarker(studentId, 2.5);
    }, 50);
  }
  
  // Show project detail panel
  showProjectDetail(student);
}

// New function: Focus on marker using actual DOM position
function focusOnMarker(markerId, zoomLevel = 1.5) {
  // Find the marker element in the SVG
  let marker;
  if (markerId === "entrance") {
    marker = mapOverlay.querySelector(".entrance-dot");
  } else {
    marker = mapOverlay.querySelector(`[data-student-id="${markerId}"]`);
  }
  
  if (!marker) {
    // Fallback to coordinate-based calculation if marker not found
    if (markerId === "entrance") {
      const entrance = getEntrance();
      focusOnPoint(entrance.x, entrance.y, zoomLevel);
    } else {
      const student = getStudents().find(s => s.id === markerId);
      if (student) {
        focusOnPoint(student.x, student.y, zoomLevel);
      }
    }
    return;
  }
  
  // Get the actual position of the marker after all transforms (including rotation)
  const svgRect = mapOverlay.getBoundingClientRect();
  const markerRect = marker.getBoundingClientRect();
  
  // Calculate marker center position relative to the SVG
  const markerCenterX = markerRect.left + markerRect.width / 2 - svgRect.left;
  const markerCenterY = markerRect.top + markerRect.height / 2 - svgRect.top;
  
  // Get container dimensions
  const containerWidth = mapImageLayer.offsetWidth;
  const containerHeight = mapImageLayer.offsetHeight;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  
  // Get the position of the marker relative to the container
  const mapContainerRect = mapContainer.getBoundingClientRect();
  const markerInContainerX = markerRect.left + markerRect.width / 2 - mapContainerRect.left;
  const markerInContainerY = markerRect.top + markerRect.height / 2 - mapContainerRect.top;
  
  // For Safari: No zoom/pan (static view)
  if (isSafari()) {
    return; // Don't apply any transforms in Safari
  }
  
  // Calculate translation to center the marker
  const translateX = centerX - markerInContainerX;
  const translateY = centerY - markerInContainerY;
  
  // Apply transform
  mapInner.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
}

// Keep the old function as fallback
function focusOnPoint(normalizedX, normalizedY, zoomLevel = 1.5) {
  const containerWidth = mapImageLayer.offsetWidth;
  const containerHeight = mapImageLayer.offsetHeight;
  
  // Calculate overlay dimensions (unrotated)
  let overlayWidth, overlayHeight;
  
  if (containerWidth / containerHeight > mapAspectRatio) {
    overlayHeight = containerHeight;
    overlayWidth = overlayHeight * mapAspectRatio;
  } else {
    overlayWidth = containerWidth;
    overlayHeight = overlayWidth / mapAspectRatio;
  }
  
  // Calculate pixel position in the unrotated coordinate space
  const targetPxX = normalizedX * overlayWidth;
  const targetPxY = normalizedY * overlayHeight;
  
  // Calculate center of the overlay (unrotated)
  const overlayCenterX = overlayWidth / 2;
  const overlayCenterY = overlayHeight / 2;
  
  // Transform coordinates for -90° rotation around center
  // For -90° rotation: (x, y) relative to center → (y, -x) after rotation
  const relX = targetPxX - overlayCenterX;
  const relY = targetPxY - overlayCenterY;
  
  // Apply rotation transformation
  // After -90° rotation: (relX, relY) → (relY, -relX)
  const rotatedRelX = relY;
  const rotatedRelY = -relX;
  
  // Convert back to absolute coordinates in rotated space
  const rotatedX = overlayCenterX + rotatedRelX;
  const rotatedY = overlayCenterY + rotatedRelY;
  
  // Calculate where the overlay is positioned in the container (centered)
  const overlayOffsetX = (containerWidth - overlayWidth) / 2;
  const overlayOffsetY = (containerHeight - overlayHeight) / 2;
  
  // Position of the rotated point in container coordinates
  const pointInContainerX = overlayOffsetX + rotatedX;
  const pointInContainerY = overlayOffsetY + rotatedY;
  
  // Calculate center of container
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  
  // For Safari: No zoom/pan (static view)
  if (isSafari()) {
    return; // Don't apply any transforms in Safari
  }
  
  // Calculate translation needed to center the point
  const translateX = centerX - pointInContainerX;
  const translateY = centerY - pointInContainerY;
  
  // Apply transform
  mapInner.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
}

function resetMapView() {
  // For Safari: No transforms (static view)
  if (isSafari()) {
    mapInner.style.transform = "translate(0, 0) scale(1)";
    mapInner.style.transition = "none";
  } else {
    mapInner.style.transform = "translate(0, 0) scale(1)";
  }
}

// ============================================================================
// PROJECT DETAIL PANEL
// ============================================================================

function showProjectDetail(student) {
  // Special handling for shared spaces (s22, s31)
  if ((student.id === "s22" || student.id === "s31") && student.participants) {
    detailName.textContent = student.name;
    detailTitle.textContent = ""; // Clear title for shared space
    
    // Build participants list with all details
    let participantsHTML = "";
    student.participants.forEach(participant => {
      participantsHTML += `
        <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
          ${participant.timing && participant.timing !== "-" && participant.timing !== "" ? `<div style="color: var(--color-accent); font-size: 0.9rem; margin-bottom: 0.5rem; font-weight: 600;">${escapeHtml(participant.timing)}</div>` : ""}
          <div style="font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem;">${escapeHtml(participant.name)}</div>
          ${participant.projectTitle && participant.projectTitle !== "-" && participant.projectTitle !== "" ? `<div style="color: var(--color-accent); font-size: 1rem; margin-bottom: 0.75rem;">${escapeHtml(participant.projectTitle)}</div>` : ""}
          ${participant.exhibitionType ? `<div style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 0.5rem; font-style: italic;">${escapeHtml(participant.exhibitionType)}</div>` : ""}
          ${participant.briefHtml && participant.briefHtml !== "<p></p>" && participant.briefHtml !== "<p>-</p>" ? `<div style="font-size: 1.1rem; line-height: 1.7;">${participant.briefHtml}</div>` : ""}
        </div>
      `;
    });
    
    detailBrief.innerHTML = participantsHTML;
  } else {
    // Swap: Show project title first, then name
    detailName.textContent = student.projectTitle;
    detailTitle.textContent = student.name;
    // Add exhibition type if available
    let briefContent = student.briefHtml;
    if (student.exhibitionType) {
      briefContent = `<div style="font-size: 0.95rem; opacity: 0.9; margin-bottom: 1.2rem; font-style: italic; color: var(--color-accent); font-weight: 500;">${escapeHtml(student.exhibitionType)}</div>${briefContent}`;
    }
    detailBrief.innerHTML = briefContent;
  }
  projectDetailPanel.classList.remove("hidden");
}

function closeProjectDetail() {
  projectDetailPanel.classList.add("hidden");
  activeStudentId = null;
  renderLegend();
  resetMapView();
  renderMap();
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ============================================================================
// YOU'RE HERE TEXT
// ============================================================================

function showYoureHereText() {
  const label = mapOverlay.querySelector("#youre-here-label");
  if (label) {
    label.style.opacity = "1";
    // Hide after 5 seconds
    setTimeout(() => {
      hideYoureHereText();
    }, 5000);
  }
}

function hideYoureHereText() {
  const label = mapOverlay.querySelector("#youre-here-label");
  if (label) {
    label.style.opacity = "0";
  }
}

// ============================================================================
// CURSOR COORDINATE DISPLAY
// ============================================================================

let coordinateDisplay = null;

function showCursorCoordinates(event) {
  if (!coordinateDisplay) {
    coordinateDisplay = document.createElement("div");
    coordinateDisplay.id = "coordinate-display";
    coordinateDisplay.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 12px;
      z-index: 10000;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    document.body.appendChild(coordinateDisplay);
  }

  // Use the exact same calculation as renderMap() to ensure consistency
  const containerWidth = mapImageLayer.offsetWidth;
  const containerHeight = mapImageLayer.offsetHeight;
  
  // Calculate overlay dimensions (unrotated) - same as renderMap
  let overlayWidth, overlayHeight;
  
  if (containerWidth / containerHeight > mapAspectRatio) {
    overlayHeight = containerHeight;
    overlayWidth = overlayHeight * mapAspectRatio;
  } else {
    overlayWidth = containerWidth;
    overlayHeight = overlayWidth / mapAspectRatio;
  }
  
  // Get mouse position relative to map container
  const containerRect = mapContainer.getBoundingClientRect();
  const mouseXInContainer = event.clientX - containerRect.left;
  const mouseYInContainer = event.clientY - containerRect.top;
  
  // Calculate where the overlay is centered in the container
  const overlayOffsetX = (containerWidth - overlayWidth) / 2;
  const overlayOffsetY = (containerHeight - overlayHeight) / 2;
  
  // Position relative to overlay (in the rotated view)
  const mouseXInRotated = mouseXInContainer - overlayOffsetX;
  const mouseYInRotated = mouseYInContainer - overlayOffsetY;
  
  // Normalize in rotated space
  const normalizedXInRotated = mouseXInRotated / overlayWidth;
  const normalizedYInRotated = mouseYInRotated / overlayHeight;
  
  // Transform from rotated to unrotated coordinate system
  // After -90° rotation: (x, y) in rotated → (y, 1-x) in unrotated
  const normalizedX = normalizedYInRotated;
  const normalizedY = 1 - normalizedXInRotated;
  
  // Clamp to valid range
  const clampedX = Math.max(0, Math.min(1, normalizedX));
  const clampedY = Math.max(0, Math.min(1, normalizedY));
  
  // Display coordinates
  coordinateDisplay.textContent = `x: ${clampedX.toFixed(3)}, y: ${clampedY.toFixed(3)}`;
  coordinateDisplay.style.display = "block";
}

function hideCursorCoordinates() {
  if (coordinateDisplay) {
    coordinateDisplay.style.display = "none";
  }
}

// ============================================================================
// START APPLICATION
// ============================================================================

// Wait for DOM to be fully ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init();
    // Force Safari transforms after DOM is ready
    setTimeout(forceSafariTransforms, 200);
  });
} else {
  init();
  // Force Safari transforms immediately if DOM is already ready
  setTimeout(forceSafariTransforms, 200);
}

// Also force transforms on window load (after all resources loaded)
window.addEventListener('load', () => {
  setTimeout(forceSafariTransforms, 100);
  setTimeout(forceSafariTransforms, 500);
});

