class Project {
      constructor(id, project, description, url) {
            this.id = id;
            this.project = project;
            this.description = description;
            this.url = url
      }
}

let screen 
let width = window.innerWidth

width < 700 ? screen = "mobile" :
width <= 1024 ? screen = "tablet" : screen = "desktop"

const paramour = new Project (1, `Project Paramour`, `Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.`, `./assets/home/${screen}/image-hero-paramour.jpg`)
const seraph = new Project (2, `Seraph Station`, `The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.`, `./assets/home/${screen}/image-hero-seraph.jpg`)
const federal = new Project(3, `Federal II Tower`, `A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.`, `./assets/home/${screen}/image-hero-federal.jpg`)
const trinity = new Project(4, `Trinity Bank Tower`, `Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.`, `./assets/home/${screen}/image-hero-trinity.jpg`) 
const projects = [paramour, seraph, federal, trinity]

export {projects}