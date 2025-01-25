import { ProjectApply, ProjectType } from "../lib/types";
import SudokuLogo from "../public/Projects/SudokuSolver/SudokoSolverLogo.png";
import MarketingAILogo from "../public/Projects/MarketingAILogo.png";
import CatMatch from "../public/Projects/CatMatch/CatMatch.png";

export const CogitoProjects: Array<ProjectType> = [
  {
    image: SudokuLogo,
    laptopDesc:
      "SudokuSolver, the perfect program to effortlessly solve sudokus!",
    phoneDesc: "Sudoku made easy",
    link: "https://sudoku-solver-sudokusolver.vercel.app",
    github: "https://github.com/CogitoNTNU/SudokuSolver",
    leaders: Array<string>("Andreas Jonsterhaug", "Afras Mansoor"),
    new: true,
  },
  {
    image: MarketingAILogo,
    laptopDesc:
      "Marketing AI is a powerful marketing tool made to conquer all social platforms!",
    phoneDesc: "Marketing done right!",
    link: "/projects/marketingai",
    github: "https://github.com/CogitoNTNU/MarketingAI",
    leaders: Array<string>("Kristoffer Olaisen", "Sverre Nystad"),
    new: false,
  },
  {
    image: CatMatch,
    laptopDesc:
      "CatMatch, the purrfect website for finding the right cats for you!",
    phoneDesc: "The purrfect cats!",
    link: "https://catmatch.rosby.no",
    github: "https://github.com/CogitoNTNU/CatMatch",
    leaders: Array<string>("Ulrik Røsby"),
    new: false,
  },
];

export const projectsApply: ProjectApply[] = [
  {
    name: "Infor x Cogito",
    description:
      "Infor er en stor internasjonal bedrift som tilbyr tjenester og produkter til bedrifter innenfor Enterprise Resource Planning (ERP). De er storforbuker av skytjenester, og er faktisk AWS sin nest største forbuker/kunde. Med rådgivning og ressurser fra Infor skal vi utvikle ulike AI agenter som kan hjelpe Infor med å forbedre deres tjenester og produkter. Dette er en unik mulighet til å jobbe sammen med en stor internasjonal bedrift og få erfaring med å utvikle AI-løsninger for real-world problemstillinger i industrien. ",
    image: "infor.png",
    leaders: ["Thomas Sørensen"],
  },
  {
    name: "TV2 x Cogito",
    description:
      "Prosjektet utforsker hvordan kunstig intelligens kan hjelpe TV2.no med å ta bedre redaksjonelle valg ved å utnytte store mengder data om leseratferd og artikkelprestasjon. Målet er å bruke maskinlæring for å hjelpe TV2 med å analysere artikkeldata for å gi nyttige innsikter. Dette prosjektet gir deg muligheten til å være med på å forme fremtidens journalistikk og få industrirelevant erfaring med AI.",
    image: "cogitoxtv2.png",
    leaders: ["Mina Al-Dolaimi"],
  },
  {
    name: "A* x Cogitron",
    description:
      "Cogitron er et ambisiøst langtidsprosjekt som har som mål å utvikle en robot i stand til å navigere og forstå omgivelsene sine helt på egenhånd. Prosjektet kombinerer et bredt spekter av AI-teknologier som Datasyn, Sensor Fusion, beslutningstaking og læring i sanntid. Dette er en fantastisk mulighet til å bruke all teorien man har lært på studiet til å gi et AI-system en fysisk kropp, slik at det kan operere autonomt i den virkelige verden. Cogitron skal kunne tilpasse seg ukjente miljøer og utføre komplekse oppgaver med høy grad av presisjon og effektivitet.",
    image: "astar.png",
    leaders: ["Vetle Dahl", "Christian Gynnild"],
  },
  {
    name: "MuZero",
    description:
      "Vi skal utvikle et system inspirert av MuZero, utviklet av Google DeepMind. MuZero kombinerer avanserte teknikker innenfor dyp Reinforcement Learning og planlegging, noe som gjør det i stand til å lære komplekse oppgaver fra bunnen av. Ved utelukkende å prosessere bilder fra et spillmiljø lærer systemet seg å mestre spillet gjennom kontinuerlig å spille mot seg selv. Prosjektet vårt vil undersøke hvordan denne teknologien kan anvendes på ulike områder og samtidig utvide vår egen forståelse av autonom læring.",
    image: "deeptactics.webp",
    leaders: ["Brage Kvamme", "Christian Fredrik Johnsen"],
  },
  {
    name: "J.A.R.V.I.S",
    description:
      "Just A Rather Very Intelligent System.\nWe’re building an AI assistant inspired by Iron Man's Jarvis, capable of managing and solving complex tasks autonomously. Users should be able to converse with Jarvis naturally. Similar to Jarvis in the movies, or the ChatGPT4o demo. \n\n Technologies and Tools - Programming Languages & Tools: Python, Docker, Puppeteer, REST APIs. - Speech Processing: Elevenlabs, Whisper, Mycroft 3. - LLMs: ChatGPT, Groq, Llama-3.1. - Data Retrieval: RAG and vector databases. - UI/UX Design - Software systems architecture.",
    image: "jarvis.webp",
    leaders: ["William Schmidt"],
  },
  {
    name: "Teknologiporten x Cogito",
    description:
      "Ved hjelp av maskinlæring skal Cogito i samarbeid med Teknologiporten predikere hva som kjennetegner de beste Bedriftspresentasjonene. Dette skal gjøres ved å analysere data fra tidligere presentasjoner, og dermed grave oss frem til de avgjørende faktorene som gjør en presentasjon god. Dette prosjektet er i skjæringspunktet mellom industri og studentfrivilligheten, og gir deg muligheten til å jobbe med reelle data og få erfaring med å bruke AI til å løse praktiske problemer.",
    image: "teknologiporten.png",
    leaders: [" "],
  },
  {
    name: "Motion",
    description:
      "Motion er et prosjekt som bruker evolusjonære algoritmer for å lære virtuelle skapninger å bevege seg i en 3D-verden. Gjennom kontinuerlig tilpasning lærer algoritmene seg å navigere med ulike kroppskonfigurasjoner og optimalisere bevegelsesmønstre. Prosjektet kombinerer maskinlæring og kunstig intelligens for å simulere hvordan maskiner kan utvikle seg og mestre komplekse bevegelser over tid. Oppsummert: AI-agentene får kropper og må lære seg å bruke dem på best mulig måte.",
    image: "motion.webp",
    leaders: ["Tobias Fremming"],
  },
  {
    name: "ChessAR",
    description:
      "ChessAR er et prosjekt som bruker augmented reality (AR) for å gjøre det enklere å spille sjakk. Ved å bruke AR-briller skal man kunne se de beste trekkene, projisert på sjakkbrettet. Prosjektet kombinerer maskinlæring, embedded, datasyn og ulike AI-algoritmer tilpasset sjakk.",
    image: "chessar.webp",
    leaders: ["Simon Sandvik Lee"],
  },
  {
    name: "Cogito Web",
    description:
      "Har du lyst til å lære deg moderne webutvikling og hvordan man deployer AI-prosjekter til produksjon? Da er dette prosjektet for deg. Vi skal bygge ut Cogito-nettsiden i en voldsom skala. Dette prosjektet har tre underprosjekter: Cogito Login, Cogito Community og Cogito Prosjekter",
    image: "cogito.png",
    leaders: ["Simon Sandvik Lee"],
  },
];
