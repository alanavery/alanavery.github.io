import { Link } from 'react-router-dom';

import Thumbnail from './Thumbnail';

function Home(props) {
  const project = props.work.map((project) => {
    return <Thumbnail name={project.name} img={project.img} key={project.id} />;
  });

  return <div className="div-thumbnail-grid">{project}</div>;
}

export default Home;
