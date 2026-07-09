// Centralized content + image sources for VÉRTICE FC (demo by DilNic Studio)
// Images: Unsplash (configured in next.config remotePatterns)

export const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroMain: "photo-1574629810360-7efbbe195018", // player with ball
  heroSecondary: "photo-1551958219-acbc608c6377", // ball on pitch
  stadium: "photo-1459865264687-595d652de67e", // match action
  pitchAerial: "/cancha.png", // aerial field
  kids: "/kids.png", // youth training
  training: "/alt_rendi.png", // running drill
  goal: "/goal.png", // goal net
  team: "/team.png", // huddle
  cleats: "/cc.png", // boots + ball
  gym: "/gym.png", // strength
  youthGame: "/problem.png", // youth match
  ballNet: "photo-1431324155629-1a6deb1dec8d", // stadium lights
  coach: "/coach.png", // coach
  celebrate: "/celebrate.png", // celebration
  coach_1: "/coach_1.png", // Andrés Mejía
  coach_2: "/coach_2.png", // Carolina Ruiz
  coach_3: "/coach_3.png", // Julián Torres
};

export const STATS = [
  { value: 480, suffix: "+", label: "Atletas formados" },
  { value: 18, suffix: "", label: "Jugadores en clubes profesionales" },
  { value: 12, suffix: "", label: "Años de trayectoria" },
  { value: 9, suffix: "", label: "Títulos regionales" },
];

export const PROGRAMS = [
  {
    tag: "5 a 9 años",
    name: "Semillero",
    img: IMAGES.kids,
    desc: "Primer contacto con el balón. Coordinación, juego y amor por el fútbol con metodología por etapas.",
    points: ["3 entrenos / semana", "Psicomotricidad", "Festivales internos"],
  },
  {
    tag: "10 a 14 años",
    name: "Formación",
    img: IMAGES.youthGame,
    desc: "Técnica individual, lectura de juego y competencia federada. La base del jugador completo.",
    points: ["4 entrenos / semana", "Liga federada", "Análisis en video"],
  },
  {
    tag: "15 a 18 años",
    name: "Alto Rendimiento",
    img: IMAGES.training,
    desc: "Preparación física profesional, scouting y vitrina ante clubes. Rumbo al fútbol profesional.",
    points: ["6 sesiones / semana", "Preparación física", "Contacto con clubes"],
  },
];

export const COACHES = [
  { name: "Andrés Mejía", role: "Director Deportivo", img: IMAGES.coach_1, badge: "Licencia PRO CONMEBOL" },
  { name: "Carolina Ruiz", role: "Preparadora Física", img: IMAGES.coach_2, badge: "MSc. Ciencias del Deporte" },
  { name: "Julián Torres", role: "Entrenador Formativo", img: IMAGES.coach_3, badge: "Ex-jugador profesional" },
];

export const EVENTS = [
  { date: "12 JUL", title: "Pruebas de ingreso abiertas", place: "Sede Principal · 8:00 a.m.", cat: "Pruebas" },
  { date: "27 JUL", title: "Torneo Copa Vértice Sub-13", place: "Estadio Vértice · Todo el día", cat: "Torneo" },
  { date: "10 AGO", title: "Showcase ante clubes profesionales", place: "Sede Principal · 3:00 p.m.", cat: "Scouting" },
  { date: "24 AGO", title: "Clínica con entrenador internacional", place: "Auditorio · 9:00 a.m.", cat: "Clínica" },
];

export const FACILITIES = [
  { title: "Cancha de césped natural", img: IMAGES.pitchAerial, meta: "Medidas FIFA" },
  { title: "Cancha sintética iluminada", img: IMAGES.goal, meta: "Entrenos nocturnos" },
  { title: "Centro de alto rendimiento", img: IMAGES.gym, meta: "Gimnasio + recuperación" },
  { title: "Sala de videoanálisis", img: IMAGES.coach, meta: "Scouting profesional" },
  { title: "Camerinos profesionales", img: IMAGES.team, meta: "Confort total" },
];

export const GALLERY = [
  IMAGES.youthGame, IMAGES.celebrate, IMAGES.training,
  IMAGES.cleats, IMAGES.kids, IMAGES.goal,
];

export const TESTIMONIALS = [
  { quote: "En dos años mi hijo pasó de jugar en el parque a ser convocado por un club profesional. La formación es de otro nivel.", name: "Marcela G.", role: "Madre de atleta Sub-15" },
  { quote: "La diferencia es la metodología y el seguimiento individual. Aquí no entrenan niños en montón, forman jugadores.", name: "Diego R.", role: "Padre de familia" },
  { quote: "Llegué con dudas y hoy entreno con un club de primera. Vértice me dio la disciplina y la vitrina.", name: "Samuel A.", role: "Egresado, hoy profesional" },
];

export const FAQS = [
  { q: "¿Qué necesita mi hijo/a para empezar?", a: "Solo ganas de jugar. Agenda una prueba de ingreso gratuita: evaluamos su nivel y lo ubicamos en el grupo ideal según edad y experiencia." },
  { q: "¿Tienen convenios con clubes profesionales?", a: "Sí. Contamos con una red de scouting y organizamos showcases periódicos donde clubes nacionales observan a nuestros atletas de alto rendimiento." },
  { q: "¿Cuánto cuesta la mensualidad?", a: "Tenemos planes según programa y frecuencia. Escríbenos por WhatsApp y te enviamos la información actualizada junto con las becas deportivas disponibles." },
  { q: "¿Qué pasa si mi hijo nunca ha jugado federado?", a: "No es requisito. Nuestro programa Semillero y Formación está diseñado para llevar desde cero hasta competencia con un plan por etapas." },
  { q: "¿Dónde están ubicados?", a: "Sede principal en Medellín, con cancha de césped natural medidas FIFA, sintética iluminada y centro de alto rendimiento." },
];
