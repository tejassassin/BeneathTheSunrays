import a from "../audio/a.mp4";
import b from "../audio/b.mp4";
import c from "../audio/c.mp4";
import d from "../audio/d";

import a1 from "../audio/a1.jpeg";
import b1 from "../audio/b1.jpeg";
import c1 from "../audio/c1.jpeg";
import d1 from "../audio/d1.jpeg";

import idream from "../img/posts/i-dream.jpg";

const videos = [
  { id: 1, src: a, img: a1, like: "" },
  { id: 2, src: b, img: b1 },
  { id: 3, src: c, img: c1 },
  { id: 4, src: d, img: d1 },
];

const posts = [
  {
    id: 1,
    title: "I dream",
    date: "12 jan 2020",
    categories: ["fiction", "poem"],
    img: idream,
    desc: `
    Beautiful Humankind, 

    I don’t dream wedding today,
    I dream education,
    I dream a happy family
    Happiness,
    Independence and confidence,
    5 years down the lane
    I dream to be the person
    I’ve dreamt today
    Oh, not so big thoughts
    A little down to earth behaviour,
    kindness
    And spreading love
    I dream to be proud,
    of myself.`,
    comments: [
      { name: "Teja", comment: "Nice Blog" },
      { name: "Vinod", comment: "love the positivity" },
    ],
    likes: 5,
  },
  {
    id: 2,

    title: "I dream1",
    categories: [],
    tags: [],
    img: "",
    desc: `
    In the middle of a silent night,
    When you feel your world falling apart,
    When even for a fraction of seconds,
    You feel messed.
    And lost,
    When you feel you haven’t achieved enough.
    Or, “I don’t know what am I upto.”
    When such feelings wrap you around,
    Like a fuzzy blanket
    I want you to know
    Little dove,
    Cry a little if you want.
    Go for a walk.
    Read.
    Listen to your favourite music,
    Do anything,
    But let that feeling shore away,
    Because I tell you,
    That feeling is miserable.
    And you’d not like to taste it.`,
    comments: [],
  },
  {
    id: 3,

    title: "I dream2",
    categories: [],
    tags: [],
    img: "",
    desc: `
    Beautiful Humankind, 
  
    I don’t dream wedding today,
    I dream education,
    I dream a happy family 
    Happiness,
    Independence and confidence,
    5 years down the lane
    I dream to be the person
    I’ve dreamt today
    Oh, not so big thoughts
    A little down to earth behaviour,
    kindness
    And spreading love
    I dream to be proud,
    of myself.`,
    comments: [],
  },
  {
    id: 4,

    title: "I dream3",
    categories: [],
    tags: [],
    img: "",
    desc: `
    Beautiful Humankind, 
  
    I don’t dream wedding today,
    I dream education,
    I dream a happy family 
    Happiness,
    Independence and confidence,
    5 years down the lane
    I dream to be the person
    I’ve dreamt today
    Oh, not so big thoughts
    A little down to earth behaviour,
    kindness
    And spreading love
    I dream to be proud,
    of myself.`,
    comments: [],
  },
];

export { posts, videos };
