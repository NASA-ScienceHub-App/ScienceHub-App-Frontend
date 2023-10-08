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

const habilidade = async () => {
  try {
    const response = await axios.post('http://localhost:8000/habilidades/pegar-habilidade-pesquer/');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const projeto = async () => {
  try {
    const response = await axios.post('http://localhost:8000/projetos/pegar-projetos-pesquisador/');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


function UserProfile() {
  const [user, setUser] = useState(null);
  const [userSkills, setHabilidade] = useState(null);
  const [projects, setProjeto] = useState(null);

    useEffect(() => {
      pesquisador().then(data => {
        if (data) {
          setUser(data);
        }
      });

      habilidade().then(data => {
        if (data) {
          setHabilidade(data);
        }
      });

      projeto().then(data => {
        if (data) {
          setProjeto(data);
        }
      });

    }, []);
  // Estrutura de dados representando as habilidades do usuário
  const [showAdditionalSkills, setShowAdditionalSkills] = useState(false);
  const [newSkill, setNewSkill] = useState({ habilidade: '', nivel_de_habilidade: '' });

  const addNewSkill = () => {
    // Verifica se os campos estão preenchidos
    if (newSkill.habilidade && newSkill.nivel_de_habilidade) {
      userSkills.push(newSkill);
      setNewSkill({ habilidade: '', nivel_de_habilidade: '' });
      setShowAdditionalSkills(false);
    }
  };

  // Função para calcular o progresso com base no nível de habilidade
  const calculateProgress = (nivel_de_habilidade) => {
    if (nivel_de_habilidade === 'Avançado') {
      return 100;
    } else if (nivel_de_habilidade === 'Iniciante') {
      return 33; 
    } else if (nivel_de_habilidade === 'Intermediário') {
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
  {user && (
    <>
  {userSkills.map((skill, index) => (
    <div key={index}>
      <p>{skill.habilidade} - {skill.nivel_de_habilidade}</p>
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
   </>
      )}
</div>

<div className="word-cloud">
  <WordCloudComponent />
</div>

<div className="show-project-profile">
{user && (
    <>
    {projects.map((project, index) => (
      <ProjectProfile
        key={index}
        name={project.nome}
        description={project.descricao}
        // onClick={() => handleProjectClick(project.url)}
      />
    ))}
    </>
      )}
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
