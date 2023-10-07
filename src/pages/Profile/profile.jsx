import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
// import TopTagsCloud from '../TopTagsCloud/TopTagsCloud';
import TagCloud from '../TagCloud/TagCloud.jsx';
import TagBarChart from './TagBarChart';
import TopTagsCloud from '../TagCloud/TagCloud.jsx'; // Use o caminho relativo

import ProjectProfile from '../ProjectProfile/ProjectProfile';
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de adição


function UserProfile({ user }) {
  // Estrutura de dados representando as habilidades do usuário
  const [showAdditionalSkills, setShowAdditionalSkills] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', level: '' });


  const userSkills = [
    { name: 'Inglês', level: 'Avançado' },
    { name: 'Espanhol', level: 'Básico' },
    // Adicione mais habilidades conforme necessário
  ];

  const addNewSkill = () => {
    // Verifique se os campos estão preenchidos
    if (newSkill.name && newSkill.level) {
      userSkills.push(newSkill);
      setNewSkill({ name: '', level: '' });
      setShowAdditionalSkills(false);
    }
  };

  const projects = [
    {
      name: 'Projeto 1',
      description: 'Descrição do Projeto 1'
    },
    {
      name: 'Projeto 2',
      description: 'Descrição do Projeto 2'
    },
    // Adicione mais projetos conforme necessário
  ];


  const tags = [
    { text: 'React', count: 10 },
    { text: 'JavaScript', count: 7 },
    { text: 'Web Development', count: 4 },
    { text: 'Web Development', count: 20 },
    // Adicione mais tags aqui
  ];

  // Função para calcular o progresso com base no nível de habilidade
  const calculateProgress = (level) => {
    if (level === 'Avançado') {
      return 100;
    } else if (level === 'Básico') {
      return 33; // 33% de progresso para nível básico
    } else if (level === 'Intermediário') {
        return 66;
    }
  };

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`Foto de ${user.name}`} className="profile-image"/>
      <p>{user.name}   {user.nickname}</p> 
      <p>Reputação: {user.reputation}</p>
      <p>{user.email}</p>
      <hr />
      <p>Sobre: {user.description}</p>
      <p>Formação: <a href={user.education} target="_blank" rel="noopener noreferrer">Currículo Lattes</a></p>
      
      
      <div className="mid-left">
        <h2>Habilidades</h2>
        {userSkills.map((skill, index) => (
          <div key={index}>
            <p>
              {skill.name} - {skill.level}
            </p>
            <ProgressBar progress={calculateProgress(skill.level)} />
          </div>
        ))}
        {showAdditionalSkills ? (
          <div>
            <input
              type="text"
              placeholder="Nova habilidade"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nível"
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
            />
            <button onClick={addNewSkill}>
                Adicionar
            </button>
          </div>
        ) : (
          <button onClick={() => setShowAdditionalSkills(true)}><FontAwesomeIcon icon={faPlus} /></button>
        )}
      </div>

      <div className="mid-right">
      <h2>Tags</h2>
        {/* <TopTagsCloud topTags={topTags} /> */}
        <TagCloud tags={tags} />
      </div>
     <div className="top-right"> 
        <h2>Projetos</h2>
        <div className="project-container">
            {projects.map((project, index) => (
                <ProjectProfile
                key={index}
                name={project.name}
                description={project.description}
                onClick={() => handleProjectClick(project.url)}
                />
            ))}
        </div>
      </div> 
    </div>
  );
}

function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    nickname: '@john',
    education: 'https://www.lattes.cnpq.br/',
    description: 'descrição pessoal',
    age: 30,
    avatar: '/imagem.png',
    reputation: '4,5',
    // Adicione mais informações do perfil do usuário conforme necessário
  };

  return (
    <div className="App">
      <h1>Meu Perfil</h1>
      <UserProfile user={user} />
    </div>
  );
}

export default ProfilePage;
