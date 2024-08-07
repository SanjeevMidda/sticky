import "./index.css";
import Card from "./components/Card";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  console.log(lenis);

  return (
    <ReactLenis root>
      <div className="App">
        <div className="mainContainer">
          <Card text="one" />
          <Card text="two" top={10} />
          <Card text="three" top={15} />
        </div>

        <div className="space"></div>
        {/* <div className="space">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo
          expedita officia, earum, quis voluptatibus quas accusamus dolore
          possimus voluptatem voluptatum quasi repellendus ab sint explicabo sed
          natus, veritatis soluta. Explicabo animi cumque rerum? Laborum a
          assumenda ullam exercitationem ab mollitia at perferendis veniam ad
          deleniti consequuntur animi sed saepe, labore iste fugiat culpa qui?
          Repudiandae necessitatibus amet natus consequatur. Molestiae nihil
          minima est dolor delectus officia veritatis esse impedit illum in?
          Ducimus blanditiis delectus assumenda architecto illo ad officiis,
          odio sequi sed facere labore numquam quas asperiores quae ipsum?
        </h2>
      </div>
      <div className="space">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo
          expedita officia, earum, quis voluptatibus quas accusamus dolore
          possimus voluptatem voluptatum quasi repellendus ab sint explicabo sed
          natus, veritatis soluta. Explicabo animi cumque rerum? Laborum a
          assumenda ullam exercitationem ab mollitia at perferendis veniam ad
          deleniti consequuntur animi sed saepe, labore iste fugiat culpa qui?
          Repudiandae necessitatibus amet natus consequatur. Molestiae nihil
          minima est dolor delectus officia veritatis esse impedit illum in?
          Ducimus blanditiis delectus assumenda architecto illo ad officiis,
          odio sequi sed facere labore numquam quas asperiores quae ipsum?
        </h2>
      </div> */}
      </div>
    </ReactLenis>
  );
}

export default App;
