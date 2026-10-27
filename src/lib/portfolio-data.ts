export const profile = {
  name: "Iker Torrico",
  firstName: "Iker",
  lastName: "Torrico",
  location: "La Paz, Bolivia",
  email: "Ikertorricot@gmail.com",
  linkedin: "https://www.linkedin.com/in/iker-torrico-a65150437/",
  linkedinHandle: "iker-torrico",
  school: "American Cooperative School (ACS)",
  graduation: "June 2027",
  gpa: "3.6",
  age: 17,
  roles: ["Athlete", "Performer", "Builder", "Entrepreneur"],
  intro:
    "I'm the kind of person who likes to jump right in, connect with people, and learn by doing. Whether I'm playing guitar with a live band, performing in a musical, competing in basketball, soccer, or volleyball, leading community initiatives, or managing commercial sales projects, I enjoy taking on practical challenges and seeing what I can achieve.",
  introTwo:
    "I love the push of performing and competing, but I know that real results come from steady teamwork and commitment. My most valuable lessons have come from showing up repeatedly — weekend rehearsals, early morning practices, long-term service projects — learning to trust the people around me and take responsibility when it matters.",
  introThree:
    "College is an opportunity to work with new people, explore interests across arts and academics, and take on challenges that drive personal growth. I'm ready to bring my energy, discipline, and practical drive to whatever comes next.",
}

export const stats = [
  { value: "03", label: "Varsity sports", detail: "Basketball · Soccer · Volleyball" },
  { value: "1,050", label: "Albums sold", detail: "FIFA World Cup Panini collection" },
  { value: "10K+", label: "Bolivianos raised", detail: "Operation Smile campaigns" },
  { value: "2", label: "Live band concerts", detail: "Nuna Theatre · Hard Rock Cafe" },
]

export const heroStats = [
  { value: "17", label: "years old" },
  { value: "6'03\"", label: "height" },
  { value: "3.6", label: "GPA" },
  { value: "2027", label: "graduation" },
]

export interface ChapterHighlight {
  title: string;
  description: string;
}

export interface Chapter {
  id: string;
  index: string;
  kicker: string;
  title: string;
  lead: string;
  paragraphs: string[];
  highlights: ChapterHighlight[];
  images: Array<{
    src: string;
    alt: string;
    caption: string;
    orientation: "landscape" | "portrait";
    /** Show the whole image uncropped (e.g. when text is baked into the photo) */
    fullFrame?: boolean;
  }>;
  stat?: { value: string; label: string };
  video?: { driveId: string; caption: string };
}

export const chapters: Chapter[] = [
  {
    id: "sports",
    index: "01",
    kicker: "Sports & Competition",
    title: "Three Sports. One Competitive Spirit.",
    lead: "Give me a ball, a team, and a challenge, and I'm in. Basketball, soccer, and volleyball have all become a core part of how I approach competition, teamwork, and personal growth.",
    paragraphs: [
      "Competition has always been my greatest teacher. It has shown me that talent might start the journey, but discipline and showing up every single day are what actually build character and drive results. I also learned sometimes results will not be in your favor, but that is just another opportunity to try harder.",
      "What I enjoy most about sports is that every game gives you another chance to compete, improve, and contribute. You can't control every outcome, but you can control the effort you bring. And I'm always ready for the next game.",
    ],
    highlights: [
      {
        title: "Led on the Court & Club Level",
        description:
          "Team captain at Club de Tenis La Paz every year in my age categories since U10, and captained the ACS varsity basketball team in 2023, 2025, and 2026. Selected for the La Paz regional basketball preselection.",
      },
      {
        title: "Built Grassroots Sports Teams",
        description:
          "Founded Troncos FC, a neighborhood soccer team that competes in local championships — real progress comes from showing up every weekend and playing hard regardless of the results.",
      },
      {
        title: "Competed Across Multiple Sports",
        description:
          "Competed in varsity soccer and volleyball alongside basketball, developing quick decision-making, game reading, and adaptability under pressure.",
      },
      {
        title: "Led by Example",
        description:
          "Focused on maintaining a strong work ethic when progress is slow and lifting teammates up when facing frustration or tough games.",
      },
    ],
    images: [
      {
        src: "/images/sports/trophy-mvp.jpg",
        alt: "Iker Torrico holding a golden MVP trophy and certificate in a gymnasium",
        caption: "MVP recognition — club basketball",
        orientation: "portrait",
      },
      {
        src: "/images/sports/soccer-action.jpg",
        alt: "Iker in a green number 23 jersey competing for the ball during a soccer match",
        caption: "Soccer match — Torrico 23",
        orientation: "landscape",
      },
      {
        src: "/images/sports/troncos-team.jpg",
        alt: "Troncos FC team posing together on an indoor field at night",
        caption: "Troncos FC — the team I founded",
        orientation: "landscape",
      },
      {
        src: "/images/sports/bw-basketball-art.jpg",
        alt: "Artistic black and white close-up of a basketball player's arm and hand",
        caption: "The details of the game",
        orientation: "landscape",
      },
    ],
    stat: { value: "10+", label: "years competing & captaining" },
  },
  {
    id: "community",
    index: "02",
    kicker: "People & Community",
    title: "Good Things Happen When You Get Involved.",
    lead: "I enjoy being around people, meeting different kinds of people, and finding ways to be useful in my community. Service and leadership have given me opportunities to create real impact while learning skills I wouldn't necessarily pick up in a classroom.",
    paragraphs: [
      "To me, real impact isn't about grand gestures or titles, it's about paying attention to what people need, organizing the pieces, and showing up consistently until trust and connection are built.",
      "Each experience gave me a different perspective. I've learned to communicate with different people, adapt to delicate situations, and recognize that showing up consistently is what makes an impact matter.",
    ],
    highlights: [
      {
        title: "Co-Founded Deporte por la Vida",
        description:
          "A program bringing basketball, soccer, and sports mentorship to teenage girls (ages 12–17) living away from their families at Hogar Niñas Obrajes (Fundación Arco Iris) in La Paz, through bi-weekly Sunday sessions.",
      },
      {
        title: "Founded Special Olympics Club",
        description:
          "Created and led a school club organizing monthly 4-hour inclusive sports sessions for children ages 5–10 with disabilities to build confidence and social connections.",
      },
      {
        title: "Led Operation Smile Campaigns",
        description:
          "As President, organized major fundraising events — the Color Run, padel tournaments, and Magia de la Fantasía — supporting free cleft lip and palate surgeries, and raised public awareness on national TV.",
      },
      {
        title: "Supported NHS & Children in Healthcare",
        description:
          "As Vice President of the National Honor Society, tracked service hours, led induction ceremonies, and organized regular visits to Fundación Casa Esperanza to support children undergoing cancer treatment.",
      },
      {
        title: "Organized Major School Events",
        description:
          "As Class President and Event Coordinator for Student Council Block, coordinated logistics, students, and faculty for Family Day Picnic, Halloween Fair, Pep Rally, and Senior Farewell.",
      },
    ],
    images: [
      {
        src: "/images/community/deporte-por-la-vida.jpg",
        alt: "Large group of students posing together on outdoor steps",
        caption: "Special Olympics",
        orientation: "landscape",
        fullFrame: true,
      },
      {
        src: "/images/community/posdata-tv.jpg",
        alt: "Iker and the Operation Smile team holding a certificate inside a TV studio",
        caption: "Posdata TV — Operation Smile awareness",
        orientation: "landscape",
      },
      {
        src: "/images/community/casa-esperanza.jpg",
        alt: "Iker with a teammate holding basketballs outside Casa Esperanza",
        caption: "Deporte para la vida",
        orientation: "portrait",
        fullFrame: true,
      },
      {
        src: "/images/community/nhs-speech.jpg",
        alt: "Iker delivering a speech at an ACS podium during an NHS ceremony",
        caption: "NHS induction speech",
        orientation: "portrait",
      },
    ],
    stat: { value: "10,000+", label: "bolivianos raised for Operation Smile" },
    video: {
      driveId: "1gMpRCkVs44WrgJ4nSQKoMIvFBPh4bT7Z",
      caption: "Community work in motion",
    },
  },
  {
    id: "business",
    index: "03",
    kicker: "Business & Big Ideas",
    title: "Curiosity, Tested in the Real World.",
    lead: "I've always been driven by a curiosity for how things work, especially when I can test a practical concept, solve an operational problem, or bring a new initiative to market.",
    paragraphs: [
      "From working corporate sales to managing high-volume independent ventures, my hands-on commercial experience has shown me that real strategy isn't just about planning — it's about having the grit, organization, and follow-through to deliver actual results.",
      "What I enjoy about these experiences is that there's always something to figure out. Having a great idea is only the start — making it work takes organization, flexibility, and execution.",
    ],
    highlights: [
      {
        title: "Corporate Sales & International Trade",
        description:
          "Interned at Companex Bolivia S.A. (Summer 2025 – Summer 2026), presenting international brands to clients, coordinating with sales and warehouse teams for high-demand inventory, and attending the Americas Food & Beverage Show in Miami Beach.",
      },
      {
        title: "High-Volume Independent Sales",
        description:
          "Managed independent Panini sales during the FIFA World Cup across four schools in La Paz, selling 1,050 albums and over 100,000 stickers.",
      },
      {
        title: "Revenue Growth & Campaign Strategy",
        description:
          "Promoted the FIFA World Cup 2026 Limited Edition Gold Collection, driving a 30% increase in sales despite higher price points by managing stock levels during peak demand periods.",
      },
      {
        title: "Logistics & Customer Communication",
        description:
          "Real responsibilities at COMPANEX S.A. pushed me to handle inventory organization, communicate clearly with clients, and solve logistical bottlenecks when demand surged.",
      },
    ],
    images: [
      {
        src: "/images/business/americas-food-show.jpg",
        alt: "Iker smiling with his Americas Food & Beverage Show attendee badge",
        caption: "Americas Food & Beverage Show — Miami Beach",
        orientation: "portrait",
      },
      {
        src: "/images/business/panini-world-cup.jpg",
        alt: "FIFA World Cup 2026 Panini sticker albums and boxes displayed on a lawn",
        caption: "Panini World Cup collection",
        orientation: "portrait",
      },
    ],
    stat: { value: "+30%", label: "sales growth on the Gold Collection" },
  },
  {
    id: "music",
    index: "04",
    kicker: "Guitar & Performances",
    title: "Working in Front of a Live Audience.",
    lead: "Playing music and performing on stage have shaped how I approach discipline, collaboration, and storytelling under pressure.",
    paragraphs: [
      "The stage has been one of my greatest teachers. Whether logging weekend hours building sets and rehearsing for Epic the Musical or taking the stage with a band at venues like Nuna Theatre and Hard Rock Cafe, performing has shown me that seamless execution takes relentless preparation. You learn to listen intently to your bandmates and cast members, handle live pressure with composure, and adjust on the fly to keep the energy going — delivering an authentic experience every single time.",
    ],
    highlights: [
      {
        title: "Live Band Guitar Performances",
        description:
          "Formed a band with my friends called The Spryngs. We rehearsed and performed full concert sets at the Nuna Theatre and the Hard Rock Cafe, managing live sound collaboration and stage presence — 3 hours of practice every week.",
      },
      {
        title: "Musical Theater & Stagecraft",
        description:
          "Participated in ACS's inaugural production, Epic the Musical, dedicating around 4 hours per week to both acting and constructing set pieces from the ground up.",
      },
      {
        title: "Choir",
        description:
          "Represented the school community as a chorus member during the ACS Holiday Performance at the U.S. Embassy in La Paz.",
      },
    ],
    images: [
      {
        src: "/images/guitar/the-spryngs-live.jpg",
        alt: "The Spryngs performing live with guitars and drums under a canopy",
        caption: "The Spryngs — live set",
        orientation: "landscape",
      },
      {
        src: "/images/guitar/hard-rock-cafe.jpg",
        alt: "Rock trio performing on stage at Hard Rock Cafe La Paz",
        caption: "Hard Rock Cafe La Paz",
        orientation: "portrait",
      },
      {
        src: "/images/guitar/epic-musical.jpg",
        alt: "Scene from Epic the Musical with actors on a throne set",
        caption: "Epic the Musical — ACS inaugural production",
        orientation: "landscape",
      },
    ],
    stat: { value: "2", label: "full concert sets on real stages" },
    video: {
      driveId: "1-u2c-0J6a1Tf8U1nWOh6Zb5-x3slAniY",
      caption: "The Spryngs — live performance reel",
    },
  },
]

export const galleryImages = [
  { src: "/images/sports/soccer-action.jpg", alt: "Iker competing for the ball in a soccer match" },
  { src: "/images/guitar/the-spryngs-live.jpg", alt: "The Spryngs performing live" },
  { src: "/images/community/deporte-por-la-vida.jpg", alt: "Deporte por la Vida community group photo" },
  { src: "/images/sports/trophy-mvp.jpg", alt: "Iker holding the MVP trophy and certificate" },
  { src: "/images/guitar/hard-rock-cafe.jpg", alt: "Live concert at Hard Rock Cafe La Paz" },
  { src: "/images/community/posdata-tv.jpg", alt: "Operation Smile interview on Posdata TV" },
  { src: "/images/sports/troncos-team.jpg", alt: "Troncos FC team photo" },
  { src: "/images/guitar/epic-musical.jpg", alt: "Epic the Musical stage production" },
  { src: "/images/business/americas-food-show.jpg", alt: "Americas Food & Beverage Show badge" },
  { src: "/images/community/nhs-speech.jpg", alt: "National Honor Society induction speech" },
  { src: "/images/business/panini-world-cup.jpg", alt: "FIFA World Cup Panini collection display" },
  { src: "/images/community/casa-esperanza.jpg", alt: "Visiting children at Casa Esperanza" },
]

export const introVideo = {
  driveId: "1tnQEiCaNvcanNLZ5OBtyEfhdCngQ4mq4",
  caption: "Get to know Iker — athlete profile",
}

export const awards = [
  "AP Capstone Diploma",
  "AP Scholar with Honor",
  "Excellence Award — all terms",
  "Presidential Award 2022",
  "National Honor Society",
  "Reconocimiento Al Alumno Destacado",
]

export const marqueeItems = [
  "Basketball Captain",
  "The Spryngs",
  "Operation Smile",
  "Companex S.A.",
  "Troncos FC",
  "Epic the Musical",
  "Deporte por la Vida",
  "National Honor Society",
  "Hard Rock Cafe",
  "La Paz Preselection",
]
