import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import WordCloudComponent from './WordCloudComponent';
import ProjectProfile from '../ProjectProfile/ProjectProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import  axios  from 'axios';
import "./profile.css";

const pesquisador = async () => {
  try {
    const response = await axios.post('http://localhost:8000/pesquisadores/pegar-pesquisador/');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function UserProfile() {
  const [user, setUser] = useState(null);
  
    useEffect(() => {
      pesquisador().then(data => {
        if (data) {
          setUser(data);
        }
      });
    }, []);
  // Estrutura de dados representando as habilidades do usuário
  const [showAdditionalSkills, setShowAdditionalSkills] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', level: '' });
  pesquisador();

  const userSkills = [
    { name: 'Inglês', level: 'Avançado' },
    { name: 'Espanhol', level: 'Básico' },
    { name: 'Alemão', level: 'Intermediário' },
  ];

  const addNewSkill = () => {
    // Verifica se os campos estão preenchidos
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
 
  ];

  // Função para calcular o progresso com base no nível de habilidade
  const calculateProgress = (level) => {
    if (level === 'Avançado') {
      return 100;
    } else if (level === 'Básico') {
      return 33; 
    } else if (level === 'Intermediário') {
        return 66;
    }
  };

  return (
    <div className="profile-container">
      <div className='information-user'>
      {user && (
    <>
      <img src='/imagem.png' alt={`Foto de ${user.nome}`} className="user-avatar-container" />
        <p>{user.nome} @{user.apelido}</p>
        <p>Reputação: {user.inidicacoes}</p>
        <p>maria@example.com</p>
        <p>Sobre: {user.sobre_mim}</p>
        <p>Formação: <a href='https://www.lattes.cnpq.br/' target="_blank" rel="noopener noreferrer">Currículo Lattes</a></p>
        </>
      )}
      </div>
<div className="progress-barr">
  <h2>Habilidades</h2>
  {userSkills.map((skill, index) => (
    <div key={index}>
      <p>{skill.name} - {skill.level}</p>
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
      <button onClick={addNewSkill}>Adicionar</button>
    </div>
  ) : (
    <button onClick={() => setShowAdditionalSkills(true)}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  )}
</div>

<div className="word-cloud">
  <WordCloudComponent />
</div>

<div className="show-project-profile">
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
  };

  return (
    <div className="App">
      <h1>Meu Perfil</h1>
      <UserProfile user={user} />
    </div>
  );
}

export default ProfilePage;