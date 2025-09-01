import pkg from 'pg';
import dotenv from 'dotenv';



dotenv.config();
const { Client } = pkg;



const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const projects = [
  {
    id: 0,
    name: "LEGO Build Optimizer",
    image: "/projects_photos/lego.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam turpis, consequat ac elit non, aliquam finibus arcu. Cras mattis ornare lacus ut posuere. Praesent vel mi et odio auctor porta. Phasellus sodales lobortis libero, eget tincidunt sapien gravida a. Fusce porta magna dapibus ante porttitor egestas. Nam at sagittis erat. Ut euismod, dolor vehicula vehicula pellentesque, augue ante ultrices dui, at rutrum mauris neque eget arcu. Nulla ornare finibus risus. Aenean lacinia mi sit amet faucibus consequat.",
    github: ""
  },
  {
    id: 1,
    name: "Simplex Method Software",
    image: "/projects_photos/simplex.jpeg",
    description: "Playable here: https://tatisjrisacheater.itch.io/simplex-method-software",
    github: ""
  },
  {
    id: 2,
    name: "Big Bang Simulator",
    image: "/projects_photos/bigbang.png",
    description: "Our Submission! https://tinyurl.com/mumx3kcw",
    github: ""
  },
  {
    id: 3,
    name: "MovieNight: Tinder For Films",
    image: "/projects_photos/movienight.png",
    description: "Designed and coded the whole frontend and assisted in api.",
    github: ""
  },
  {
    id: 4,
    name: "Guitar Synth",
    image: "/projects_photos/synth.jpg",
    description: "Lead dev",
    github: ""
  },
  {
    id: 5,
    name: "Optimal Binary Search Tree",
    image: "/projects_photos/bst.jpg",
    description: "Lead dev",
    github: ""
  },
  {
    id: 6,
    name: "GreatUniHack Website",
    image: "/projects_photos/greatunihack.jpeg",
    description: "Lead dev",
    github: ""
  },
  {
    id: 7,
    name: "StudentHack Website",
    image: "/projects_photos/studenthack.png",
    description: "ui dev",
    github: ""
  },
  {
    id: 8,
    name: "Whiff Ball",
    image: "/projects_photos/tkinter.jpg",
    description: "Inspired By Flappy Bird. Created in Python using TKinter",
    github: ""
  }
];

async function seed() {
  try {
    await client.connect();
    console.log("Connected to Neon DB");

    for (const p of projects) {
      await client.query(
        `INSERT INTO projects (id, name, image, description, github) VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (id) DO NOTHING`,
        [p.id, p.name, p.image, p.description, p.github]
      );
    }

    console.log("All projects inserted successfully!");
  } catch (err) {
    console.error("Error inserting projects:", err);
  } finally {
    await client.end();
    console.log("Disconnected from DB");
  }
}

seed();
