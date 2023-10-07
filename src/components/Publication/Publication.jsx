import React from 'react';
import './Publication.css';
import user_img from '../../assets/user.png';
import earth_img from '../../assets/earth.jpg';


const Publication = ({ user, title, description, userImg, publicationImg }) => {

    // Para Teste (remover dps)
    userImg = user_img;
    publicationImg = earth_img;

  return (
    <div className="publication">
      <div className="user-info">
        <img className="user-img" src={userImg} alt="Imagem do Usuário" />
        <p className="user-name">User Name</p> {/* {user} */}
      </div>
      <div className="publication-content">
        <h2 className="publication-title">Titulo Area Atuacao</h2>  {/* {title} */}
        <p className="publication-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>  {/* {description} */}
        <img className="publication-img" src={publicationImg} alt="Imagem da Publicação" />
      </div>
    </div>
  );
};

export default Publication;
