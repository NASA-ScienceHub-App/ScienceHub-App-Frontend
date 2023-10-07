import { React, useNavigate } from 'react';
import './Publication.css';
import user_img from '../../assets/user.png';
import earth_img from '../../assets/earth.jpg';

// user, project, title, description, userImg, publicationImg
const Publication = ({ data }) => {

  // Para Teste (remover dps)
  // userImg = user_img;
  // publicationImg = earth_img;

  const navigate = useNavigate()

  return (
    <div className="publication">

      <div className="user-info">

        <img className="user-img" src={data.userImg} alt="Imagem do Usuário" />
        <p className="user-name">
          User Name /{" "} {/* {data.user} */}
        </p>
        <span className="project-link" onClick={() => navigate('view-projects/2')}>
          Project Name{/* {data.projectName} */}
        </span>

      </div>
      
      <div className="publication-content">
        <h2 className="publication-title">Publication Title</h2>  {/* {data.title} */}
        {/* data.categoria */}
        <p className="publication-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>  {/* {data.description} */}
        <img className="publication-img" src={data.publicationImg} alt="Imagem da Publicação" />
      </div>

    </div>
  );
};

export default Publication;
