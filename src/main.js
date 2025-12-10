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
// Offset to adjust dot positions (in SVG coordinate units, applied after coordinate calculation)
// The SVG is 2858x1380, so offsets are in those units
// Negative X moves left, positive Y moves down
// Try larger values: -200 to -500 for X, 100 to 300 for Y
const DOT_OFFSET_X = -850; // Adjust this: negative = left, positive = right
const DOT_OFFSET_Y = -740; // Adjust this: positive = down, negative = up

// Fine-tuning for zoom centering (in pixels, in rotated coordinate space)
// Adjust these if zoom doesn't center perfectly on the dot
// Note: Due to -90deg rotation, X and Y effects are swapped
const ZOOM_CENTER_ADJUST_X = 0; // Adjust this: affects vertical position (negative = up, positive = down)
const ZOOM_CENTER_ADJUST_Y = 0; // Adjust this: affects horizontal position (negative = left, positive = right)

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
    name: "Zhenping Gao",
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
    projectTitle: "Qollapse: Towards a Quantum-Inspired Model of Relational Identity in Emergent Simulations",
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
    name: "Haofei Niu",
    projectTitle: "FluxID",
    exhibitionType: "Installation",
    briefHtml: "<p>FluxID is a low-cost, human-centred sensing system designed to help citizen scientists uncover hidden pollution in their local waterways. Built around modular components: a capacitive sensor, a turbine flow meter, and a compact processing unit, the system transforms complex monitoring tasks into an accessible, plug-and-play setup that citizen scientists can deploy with confidence. Every design choice, from adjustable waterproof housings to replaceable clamps and intuitive connectors, prioritises adaptability, repairability, and long-term use in diverse field conditions.  At its core, FluxID is not just a technical solution but a social tool. By turning informal observations into reliable, timestamped evidence, it gives residents, volunteers, and water authorities a shared language for understanding environmental harm. The platform makes discharges visible on a catchment map, helping communities advocate for cleaner rivers and enabling public institutions to respond more proactively. Through thoughtful design and collective ownership of data, FluxID aims to bridge the gap between citizens and environmental governance, supporting a more transparent, empowered, and ecologically responsible future.</p>",
    x: 0.52,
    y: 0.93,
    path: [
      { x: ENTRANCE_DESKTOP.x, y: ENTRANCE_DESKTOP.y },
      { x: 0.52, y: 0.93 }
    ]
  },
  {
    id: "s10",
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
    id: "s11",
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
    id: "s12",
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
    id: "s13",
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
    id: "s14",
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
    id: "s15",
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
    id: "s16",
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
    id: "s17",
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
    id: "s18",
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
    id: "s19",
    name: "Shuxiang Pan",
    projectTitle: "Destruction of a Robot",
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
    id: "s20",
    name: "Shared Wall",
    projectTitle: "Shared Wall",
    exhibitionType: "Video",
    briefHtml: "<p></p>",
    // Shared space - list all participants with their details
    participants: [
      {
        name: "Chang Li",
        projectTitle: "Archive Zero",
        exhibitionType: "Performance",
        briefHtml: "<p>Archive ZERO is an interactive kinetic sculpture controlled by EEG blink signals. It tells the story of a mechanical shrimp found in a forgotten deep-sea lab. Each blink toggles the creature's movement between calm and active, creating a poetic connection between brain signals and machine life.</p>",
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
        name: "Samir Rajesh",
        projectTitle: "Qollapse: Towards a Quantum-Inspired Model of Relational Identity in Emergent Simulations",
        exhibitionType: "Installation",
        briefHtml: "<p>This project presents an evolving ecology, one quantum-inspired agent navigates shifting relational identity potentials while classical agents adapt through ongoing encounters. Their interactions generate fluid identities and emergent micro-narratives shaped by the environment. The work explores how selves emerge through relation - how behaviour, relational context, and environmental rhythms continually reconfigure what identity can become.</p>",
        timing: ""
      },
      {
        name: "Shin Shen",
        projectTitle: "Unnatural Presence",
        exhibitionType: "Video",
        briefHtml: "<p>A short experimental film exploring the perceptual sequence within hybrid imagery. Part of a series of digital explorations centred upon the concepts of \"liminal space\" and \"core\" aesthetics.</p>",
        timing: ""
      },
      {
        name: "Shiying Du",
        projectTitle: "The Distance Between Maps and Wheels",
        exhibitionType: "Video",
        briefHtml: "<p>This project is about the distance between what navigation apps imagine and the lived experiences of wheelchair travelling. It presents the collision between the map's fantasy of accessibility and the body's reality and reveals the hidden dimensions of wheelchair mobility. The layered Blender model disassembles the hidden physical, emotional, and sensory conditions behind accessible travel, exposing the multiple layers that current apps cannot perceive. It not only wants to reveal the invisible labor of disabled navigation but also offer a new perspective on accessible design, inviting audiences to rethink the possibilities of designing for accessibility.</p>",
        timing: ""
      },
      {
        name: "Xinyi Feng",
        projectTitle: "Seeing Gaze",
        exhibitionType: "Video",
        briefHtml: "<p>This visuality map exposes how Douyin shapes the visibility of women through filters and algorithmic selection. It traces the quiet violence of a feed that decides which bodies rise into view and which sink into obscurity. The work breaks open the habitual gaze that the platform teaches, revealing how beauty is standardised, how desire is coded and how attention is steered. By reorganising the visual field, the map imagines a space where women are not ranked, sorted or optimised for consumption. It invites the viewer to recognise that gaze is a political act and that visibility is never neutral on platform controlled screens.</p>",
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
    id: "s21",
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
    id: "s22",
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
    id: "s23",
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
    id: "s24",
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
    id: "s25",
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
    id: "s26",
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
    id: "s27",
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
    id: "s28",
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
    id: "s29",
    name: "Shared Desktop",
    projectTitle: "Shared Desktop",
    exhibitionType: "Desktop / browserbased",
    briefHtml: "<p></p>",
    // Shared space - list all participants with their details
    participants: [
      {
        name: "Bangrui Wang",
        projectTitle: "Personalized Futures: A Mirror of Your Browsing Self",
        exhibitionType: "Desktop / browserbased",
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
const mapSvg = document.getElementById("map-svg");
const mapInner = document.getElementById("map-inner");
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
  updateLegendTitle();
  renderLegend();
  
  // Apply Safari-specific styles if needed
  if (isSafari()) {
    applySafariStyles();
    centerLegendForSafari();
  } else {
    renderMap();
    // Force Safari transforms after initial render (for non-Safari)
    setTimeout(forceSafariTransforms, 100);
    setTimeout(forceSafariTransforms, 500);
  }
}

// Update legend title based on device
function updateLegendTitle() {
  const legendTitle = document.querySelector("#legend-panel h3");
  if (legendTitle) {
    const device = getDeviceType();
    const isMobile = device === 'mobile';
    if (isMobile || isSafari()) {
      legendTitle.textContent = "Projects Index;";
    } else {
      legendTitle.textContent = "Location Index;";
    }
  }
}

// Center legend panel for Safari
function centerLegendForSafari() {
  const legendPanel = document.getElementById("legend-panel");
  if (legendPanel && isSafari()) {
    legendPanel.style.position = "fixed";
    legendPanel.style.top = "50%";
    legendPanel.style.left = "50%";
    legendPanel.style.transform = "translate(-50%, -50%)";
    legendPanel.style.maxWidth = "90%";
    legendPanel.style.width = "auto";
    legendPanel.style.minWidth = "280px";
    legendPanel.style.maxHeight = "85vh";
  }
}

// Apply Safari-specific styles (hide map completely, show only legend)
function applySafariStyles() {
  // Hide map view completely for Safari
  const mapView = document.getElementById("map-view");
  if (mapView) {
    mapView.style.setProperty('display', 'none', 'important');
  }
  
  if (!mapSvg) return;
  
  // Hide SVG completely
  mapSvg.style.setProperty('display', 'none', 'important');
  mapSvg.style.setProperty('visibility', 'hidden', 'important');
  
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
      if (isSafari()) {
        // For Safari: Just re-render legend
        renderLegend();
      } else {
        renderMap();
        setTimeout(forceSafariTransforms, 100);
        setTimeout(forceSafariTransforms, 200);
      }
    }
  });

  // Coordinate display on mouse move (for quick coordinate finding) - DISABLED
  // mapContainer.addEventListener("mousemove", (e) => {
  //   showCursorCoordinates(e);
  // });

  // mapContainer.addEventListener("mouseleave", () => {
  //   hideCursorCoordinates();
  // });
}

// ============================================================================
// STATE TRANSITIONS
// ============================================================================

function transitionToMap() {
  currentState = "map";
  landingScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
  
  // Update legend title based on device
  updateLegendTitle();
  
  const device = getDeviceType();
  const isMobile = device === 'mobile';
  
  // For mobile: Hide map containers, show only centered legend
  if (isMobile) {
    const mapContainer = document.getElementById("map-container");
    if (mapContainer) {
      mapContainer.style.display = "none";
    }
    // Ensure map-view is visible (legend is inside it)
    const mapView = document.getElementById("map-view");
    if (mapView) {
      mapView.style.display = "block";
    }
    // Render legend (alphabetically sorted, centered)
    renderLegend();
    return;
  }
  
  // For Safari: Hide map containers, show only legend
  if (isSafari()) {
    const mapContainer = document.getElementById("map-container");
    if (mapContainer) {
      mapContainer.style.display = "none";
    }
    // Ensure map-view is visible (legend is inside it)
    const mapView = document.getElementById("map-view");
    if (mapView) {
      mapView.style.display = "block";
    }
    // Render legend (alphabetically sorted)
    renderLegend();
    return;
  }
  
  // For Chrome/other browsers: Normal map view
  // Make sure map container and SVG are visible
  const mapContainer = document.getElementById("map-container");
  if (mapContainer) {
    mapContainer.style.display = "";
  }
  if (mapSvg) {
    mapSvg.style.removeProperty('display');
    mapSvg.style.removeProperty('visibility');
  }
  
  // Reset to full map view first
  resetMapView();
  
  // Render map to ensure markers exist (this uses device-specific coordinates)
  renderMap();
  
  // Force Safari transforms when transitioning to map (for non-Safari)
  setTimeout(forceSafariTransforms, 50);
  setTimeout(forceSafariTransforms, 200);
  
  // After 3 seconds, zoom to entrance - use selectEntrance() same as clicking
  setTimeout(() => {
    selectEntrance();
    showYoureHereText();
    // Force Safari transforms after zoom
    setTimeout(forceSafariTransforms, 100);
  }, 1000);
}

// ============================================================================
// MAP IMAGE LOADING
// ============================================================================

function loadMapImage() {
  if (!mapSvg) return;
  
  const img = new Image();
  // Use static image for Safari, regular map for other browsers
  img.src = isSafari() ? "/map_static.png" : "/map.png";
  
  img.onload = () => {
    mapImageLoaded = true;
    mapAspectRatio = img.naturalWidth / img.naturalHeight;
    
    // Set SVG dimensions to match image
    const svgWidth = img.naturalWidth;
    const svgHeight = img.naturalHeight;
    mapSvg.setAttribute("width", svgWidth);
    mapSvg.setAttribute("height", svgHeight);
    mapSvg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    
    // Embed the image inside the SVG
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
    svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", img.src);
    svgImage.setAttribute("width", svgWidth);
    svgImage.setAttribute("height", svgHeight);
    svgImage.setAttribute("x", 0);
    svgImage.setAttribute("y", 0);
    svgImage.setAttribute("id", "map-background-image");
    
    // Clear and add image
    mapSvg.innerHTML = "";
    mapSvg.appendChild(svgImage);
    
    renderMap();
  };
  
  img.onerror = () => {
    console.error(`Failed to load map image. Please ensure ${isSafari() ? '/map_static.png' : '/map.png'} exists in the public folder.`);
  };
}

// Force Safari to apply CSS transforms (no longer needed with SVG, but kept for compatibility)
function forceSafariTransforms() {
  // With SVG, transforms are applied to map-inner, so this function is no longer needed
  // But kept for compatibility in case any code still calls it
  return;
}

// ============================================================================
// MAP RENDERING
// ============================================================================

function renderMap() {
  if (!mapImageLoaded || !mapSvg) return;
  
  // For mobile: Hide map completely, show only legend
  const device = getDeviceType();
  if (device === 'mobile') {
    mapSvg.style.setProperty('display', 'none', 'important');
    mapSvg.style.setProperty('visibility', 'hidden', 'important');
    return;
  }
  
  // For Safari: Don't render dots/paths, just show the static image
  if (isSafari()) {
    applySafariStyles();
    return;
  }
  
  // For Chrome/other browsers: Make sure SVG is visible
  mapSvg.style.removeProperty('display');
  mapSvg.style.removeProperty('visibility');
  
  // Get SVG dimensions (already set in loadMapImage)
  const svgWidth = parseFloat(mapSvg.getAttribute("width"));
  const svgHeight = parseFloat(mapSvg.getAttribute("height"));
  
  // Don't clear the image, just remove old markers/paths
  // Keep the background image, remove everything else
  const bgImage = mapSvg.querySelector("#map-background-image");
  if (!bgImage) {
    // If background image is missing, reload it
    console.warn("Background image not found, reloading map image...");
    loadMapImage();
    return;
  }
  
  // Clone the image element before clearing innerHTML
  const bgImageClone = bgImage.cloneNode(true);
  mapSvg.innerHTML = "";
  mapSvg.appendChild(bgImageClone);
  
  // Render entrance marker
  renderEntranceMarker(svgWidth, svgHeight);
  
  // Render student markers and paths with numbers
  const students = getStudents();
  students.forEach((student, index) => {
    renderStudentPath(student, svgWidth, svgHeight);
    renderStudentMarker(student, svgWidth, svgHeight, index + 1);
  });
}

function renderEntranceMarker(width, height) {
  const entrance = getEntrance();
  const pxX = entrance.x * width + DOT_OFFSET_X;
  const pxY = entrance.y * height + DOT_OFFSET_Y;
  const isActive = activeStudentId === "entrance";
  
  // Entrance circle - size varies by device
  const device = getDeviceType();
  const entranceRadius = device === 'mobile' ? 7 : device === 'tablet' ? 10 : 12;
  
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
  
  mapSvg.appendChild(circle);
  
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
  mapSvg.appendChild(label);
}

function renderStudentPath(student, width, height) {
  if (!student.path || student.path.length < 2) return;
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const isActive = activeStudentId === student.id;
  
  let pathData = `M ${student.path[0].x * width + DOT_OFFSET_X} ${student.path[0].y * height + DOT_OFFSET_Y}`;
  for (let i = 1; i < student.path.length; i++) {
    pathData += ` L ${student.path[i].x * width + DOT_OFFSET_X} ${student.path[i].y * height + DOT_OFFSET_Y}`;
  }
  
  path.setAttribute("d", pathData);
  path.setAttribute("class", `path-line ${isActive ? "active" : ""}`);
  mapSvg.appendChild(path);
}

function renderStudentMarker(student, width, height, number) {
  const pxX = student.x * width + DOT_OFFSET_X;
  const pxY = student.y * height + DOT_OFFSET_Y;
  const isActive = activeStudentId === student.id;
  
  // Student dot - size varies by device
  const device = getDeviceType();
  const studentRadius = device === 'mobile' ? 8 : device === 'tablet' ? 11 : 13;
  
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("class", `project-dot ${isActive ? "active" : ""}`);
  circle.setAttribute("cx", pxX);
  circle.setAttribute("cy", pxY);
  circle.setAttribute("r", studentRadius);
  circle.setAttribute("data-student-id", student.id);
  
  circle.addEventListener("click", () => {
    selectStudent(student.id);
  });
  
  mapSvg.appendChild(circle);
  
  // Add number text inside the circle
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("class", "project-dot-number");
  text.setAttribute("x", pxX);
  text.setAttribute("y", pxY);
  text.textContent = number;
  text.style.pointerEvents = "none";
  // Adjust font size based on device (increased sizes)
  const fontSize = device === 'mobile' ? 8 : device === 'tablet' ? 10 : 12;
  text.setAttribute("font-size", fontSize);
  // Rotate text 90 degrees to the right (clockwise)
  text.setAttribute("transform", `rotate(90 ${pxX} ${pxY})`);
  mapSvg.appendChild(text);
}

// ============================================================================
// LEGEND RENDERING
// ============================================================================

function renderLegend() {
  const device = getDeviceType();
  const isMobile = device === 'mobile';
  
  // For mobile and Safari: Hide entrance item, show only students alphabetically
  const entranceItem = document.querySelector(".entrance-item");
  if (entranceItem) {
    if (isMobile || isSafari()) {
      entranceItem.style.display = "none";
    } else {
      entranceItem.style.display = "";
      entranceItem.className = `legend-item entrance-item ${activeStudentId === "entrance" ? "active" : ""}`;
    }
  }
  
  studentsList.innerHTML = "";
  
  const students = getStudents();
  
  // For mobile and Safari: Expand shared spaces into individual entries, then sort alphabetically
  let studentsToDisplay = students;
  if (isMobile || isSafari()) {
    // First, collect all participant names from shared spaces to avoid duplicates
    const participantNames = new Set();
    students.forEach(student => {
      if ((student.id === "s29" || student.id === "s20") && student.participants) {
        student.participants.forEach(participant => {
          participantNames.add(participant.name.toLowerCase().trim());
        });
      }
    });
    
    // Expand shared spaces into individual participant entries
    const expandedStudents = [];
    students.forEach(student => {
      if ((student.id === "s29" || student.id === "s20") && student.participants) {
        // For shared spaces, add each participant as an individual entry
        student.participants.forEach(participant => {
          expandedStudents.push({
            id: student.id, // Keep the shared space ID for selection
            name: participant.name,
            projectTitle: participant.projectTitle,
            exhibitionType: participant.exhibitionType,
            briefHtml: participant.briefHtml,
            isParticipant: true, // Flag to identify this is from a shared space
            sharedSpaceId: student.id,
            participantData: participant // Store full participant data
          });
        });
      } else {
        // Regular student - only add if they're NOT a participant in a shared space
        const studentNameLower = student.name.toLowerCase().trim();
        if (!participantNames.has(studentNameLower)) {
          expandedStudents.push(student);
        }
        // If they are a participant, skip them (they'll be shown from the shared space expansion)
      }
    });
    
    // Sort alphabetically by name
    studentsToDisplay = expandedStudents.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  } else {
    // For desktop: Keep original order, just number them
    studentsToDisplay = students;
  }
  
  studentsToDisplay.forEach((student, index) => {
    const item = document.createElement("div");
    // For participants, check if the shared space is active
    const isActive = (isMobile || isSafari()) && student.isParticipant 
      ? activeStudentId === student.sharedSpaceId 
      : activeStudentId === student.id;
    item.className = `legend-item ${isActive ? "active" : ""}`;
    item.setAttribute("data-student-id", student.id);
    if (student.isParticipant) {
      item.setAttribute("data-participant-name", student.name);
    }
    
    // Special handling for shared spaces (s29, s20) - only for desktop
    let projectText = escapeHtml(student.projectTitle);
    if (!isMobile && !isSafari() && (student.id === "s29" || student.id === "s20") && student.participants) {
      // Show all participant names in legend for shared space (desktop only)
      projectText = student.participants.map(p => p.name).join(", ");
    }
    
    // For mobile and Safari: Don't show numbers, just show names
    if (isMobile || isSafari()) {
      item.innerHTML = `
        <span class="legend-text">
          <span class="student-name">${escapeHtml(student.name)}</span>
          <span class="student-project">${escapeHtml(student.projectTitle)}</span>
        </span>
      `;
    } else {
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
    }
    
    item.addEventListener("click", () => {
      // For mobile/Safari: If this is a participant from a shared space, show their individual details
      if ((isMobile || isSafari()) && student.isParticipant && student.participantData) {
        // Create a temporary student object with participant data for display
        const participantStudent = {
          id: student.sharedSpaceId, // Keep shared space ID for consistency
          name: student.participantData.name,
          projectTitle: student.participantData.projectTitle,
          exhibitionType: student.participantData.exhibitionType,
          briefHtml: student.participantData.briefHtml
        };
        activeStudentId = student.sharedSpaceId;
        renderLegend();
        showProjectDetail(participantStudent);
      } else {
        selectStudent(student.id);
      }
    });
    
    studentsList.appendChild(item);
  });
}

// ============================================================================
// STUDENT SELECTION & FOCUS
// ============================================================================

function selectEntrance() {
  // If already focused on entrance and zoomed, don't re-zoom
  const currentTransform = mapInner.style.transform || "";
  const isZoomed = currentTransform.includes("scale(") && parseFloat(currentTransform.match(/scale\(([^)]+)\)/)?.[1] || 1) > 1.1;
  
  if (activeStudentId === "entrance" && isZoomed) {
    // Already focused, just show "You're Here" text if needed
    showYoureHereText();
    return;
  }
  
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
  
  const device = getDeviceType();
  const isMobile = device === 'mobile';
  
  // For mobile and Safari: Just show popup, no map interaction
  if (isMobile || isSafari()) {
    showProjectDetail(student);
    return;
  }
  
  // For Chrome/other browsers: Normal map interaction
  // Hide "You're Here" text when viewing student projects
  hideYoureHereText();
  
  // Check if already focused on this student and zoomed
  const currentTransform = mapInner.style.transform || "";
  const isZoomed = currentTransform.includes("scale(") && parseFloat(currentTransform.match(/scale\(([^)]+)\)/)?.[1] || 1) > 1.1;
  
  if (activeStudentId === studentId && isZoomed) {
    // Already focused, just show the detail panel
    showProjectDetail(student);
    return;
  }
  
  // Re-render map first to ensure marker exists
  renderMap();
  
  // Focus map on student location using actual marker position
  // ADJUST ZOOM: Change 2.5 to adjust student zoom level (higher = more zoom)
  setTimeout(() => {
    focusOnMarker(studentId, 2.5);
  }, 50);
  
  // Show project detail panel
  showProjectDetail(student);
}

// Focus on marker - comprehensive fix using marker's SVG coordinates
function focusOnMarker(markerId, zoomLevel = 1.5) {
  // For Safari: No zoom/pan (static view)
  if (isSafari()) {
    return;
  }
  
  if (!mapSvg || !mapInner || !mapContainer) return;
  
  // Find the marker element
  let marker;
  if (markerId === "entrance") {
    marker = mapSvg.querySelector(".entrance-dot");
  } else {
    marker = mapSvg.querySelector(`[data-student-id="${markerId}"]`);
  }
  
  if (!marker) {
    // Fallback
    let normalizedX, normalizedY;
    if (markerId === "entrance") {
      const entrance = getEntrance();
      normalizedX = entrance.x;
      normalizedY = entrance.y;
    } else {
      const student = getStudents().find(s => s.id === markerId);
      if (!student) return;
      normalizedX = student.x;
      normalizedY = student.y;
    }
    focusOnPoint(normalizedX, normalizedY, zoomLevel);
    return;
  }
  
  // Temporarily disable transition and reset to base state
  const originalTransition = mapInner.style.transition;
  const originalTransform = mapInner.style.transform;
  mapInner.style.transition = "none";
  mapInner.style.transform = "rotate(-90deg) translate(0, 0) scale(1)";
  
  // Force reflow to ensure transform is applied
  void mapInner.offsetHeight;
  
  // Get marker's actual screen position in base state (after rotation, no zoom/pan)
  const markerRect = marker.getBoundingClientRect();
  const markerScreenX = markerRect.left + markerRect.width / 2;
  const markerScreenY = markerRect.top + markerRect.height / 2;
  
  // Get container center in screen coordinates
  const containerRect = mapContainer.getBoundingClientRect();
  const containerScreenCenterX = containerRect.left + containerRect.width / 2;
  const containerScreenCenterY = containerRect.top + containerRect.height / 2;
  
  // Calculate offset in screen coordinates (how far marker is from container center)
  const screenOffsetX = containerScreenCenterX - markerScreenX;
  const screenOffsetY = containerScreenCenterY - markerScreenY;
  
  // Get SVG dimensions (viewBox or actual size)
  const svgWidth = mapSvg.viewBox.baseVal.width || mapSvg.getBoundingClientRect().width;
  const svgHeight = mapSvg.viewBox.baseVal.height || mapSvg.getBoundingClientRect().height;
  const svgCenterX = svgWidth / 2;
  const svgCenterY = svgHeight / 2;
  
  // Get marker's position in SVG coordinate space (including offsets)
  let markerCx, markerCy;
  if (markerId === "entrance") {
    const entrance = getEntrance();
    markerCx = entrance.x * svgWidth + DOT_OFFSET_X;
    markerCy = entrance.y * svgHeight + DOT_OFFSET_Y;
  } else {
    const student = getStudents().find(s => s.id === markerId);
    if (!student) return;
    markerCx = student.x * svgWidth + DOT_OFFSET_X;
    markerCy = student.y * svgHeight + DOT_OFFSET_Y;
  }
  
  // Calculate offset from SVG center
  const svgOffsetX = markerCx - svgCenterX;
  const svgOffsetY = markerCy - svgCenterY;
  
  // The transform is: scale(z) translate(x, y) rotate(-90deg)
  // CSS applies right-to-left, so: rotate → translate → scale
  // After -90deg rotation, coordinates transform: (x, y) → (y, -x)
  // So to center the marker, we need to translate by the rotated offset
  // And divide by zoomLevel because translation happens before scaling
  let translateX = -svgOffsetY / zoomLevel;
  let translateY = svgOffsetX / zoomLevel;
  
  // Apply fine-tuning adjustments
  translateX += ZOOM_CENTER_ADJUST_X;
  translateY += ZOOM_CENTER_ADJUST_Y;
  
  // Debug logging (add ?debug to URL to see)
  if (window.location.search.includes('debug')) {
    console.log('Zoom Calculation:', {
      markerId,
      markerScreenX, markerScreenY,
      containerScreenCenterX, containerScreenCenterY,
      screenOffsetX, screenOffsetY,
      translateX, translateY,
      zoomLevel
    });
  }
  
  // Re-enable transition
  mapInner.style.transition = originalTransition;
  
  // Apply transform: scale first, then translate, then rotate (CSS applies right-to-left)
  // This gives us: rotate first (visually), then translate, then scale
  mapInner.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px) rotate(-90deg)`;
}

// Focus on a point using normalized coordinates (0-1 range)
// This function accounts for the SVG coordinate system, offsets, and rotation
function focusOnPoint(normalizedX, normalizedY, zoomLevel = 1.5) {
  // For Safari: No zoom/pan (static view)
  if (isSafari()) {
    return; // Don't apply any transforms in Safari
  }
  
  if (!mapSvg) return;
  
  // Get SVG dimensions (internal coordinate system - viewBox)
  const svgWidth = parseFloat(mapSvg.getAttribute("width"));
  const svgHeight = parseFloat(mapSvg.getAttribute("height"));
  
  // Calculate pixel position in SVG coordinates (with offsets applied)
  const targetPxX = normalizedX * svgWidth + DOT_OFFSET_X;
  const targetPxY = normalizedY * svgHeight + DOT_OFFSET_Y;
  
  // Get the actual rendered size of the SVG element
  const svgRect = mapSvg.getBoundingClientRect();
  const renderedSvgWidth = svgRect.width;
  const renderedSvgHeight = svgRect.height;
  
  // Calculate scale factors (how much the SVG is scaled from viewBox to rendered size)
  const scaleX = renderedSvgWidth / svgWidth;
  const scaleY = renderedSvgHeight / svgHeight;
  
  // Get container dimensions
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;
  const containerCenterX = containerWidth / 2;
  const containerCenterY = containerHeight / 2;
  
  // Convert SVG coordinates to rendered coordinates (before rotation)
  const renderedX = targetPxX * scaleX;
  const renderedY = targetPxY * scaleY;
  
  // The SVG is centered in the container, so find position relative to SVG center
  const svgCenterX = renderedSvgWidth / 2;
  const svgCenterY = renderedSvgHeight / 2;
  const relX = renderedX - svgCenterX;
  const relY = renderedY - svgCenterY;
  
  // After -90deg rotation on map-inner: (relX, relY) → (relY, -relX)
  // The SVG is centered at container center, so:
  const rotatedX = containerCenterX + relY;
  const rotatedY = containerCenterY - relX;
  
  // Calculate translation needed to center the rotated point
  const translateX = containerCenterX - rotatedX;
  const translateY = containerCenterY - rotatedY;
  
  // Apply transform - combine rotation with translate/scale
  mapInner.style.transform = `rotate(-90deg) translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
}

function resetMapView() {
  // For Safari: No transforms (static view)
  if (isSafari()) {
    mapInner.style.transform = "rotate(-90deg) translate(0, 0) scale(1)";
    mapInner.style.transition = "none";
  } else {
    // Reset to default view with smooth transition
    mapInner.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    mapInner.style.transform = "rotate(-90deg) translate(0, 0) scale(1)";
  }
}

// ============================================================================
// PROJECT DETAIL PANEL
// ============================================================================

function showProjectDetail(student) {
    // Special handling for shared spaces (s29, s20)
    if ((student.id === "s29" || student.id === "s20") && student.participants) {
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
  
  // Reset map view and re-render map if not on mobile or Safari
  const device = getDeviceType();
  const isMobile = device === 'mobile';
  if (!isMobile && !isSafari()) {
    // Reset zoom/pan to default view
    resetMapView();
    // Re-render to update active states
    renderMap();
  }
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
  if (!mapSvg) return;
  const label = mapSvg.querySelector("#youre-here-label");
  if (label) {
    label.style.opacity = "1";
    // Hide after 5 seconds
    setTimeout(() => {
      hideYoureHereText();
    }, 5000);
  }
}

function hideYoureHereText() {
  if (!mapSvg) return;
  const label = mapSvg.querySelector("#youre-here-label");
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
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;
  
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

