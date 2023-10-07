import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>Perfil de Usuário</h2>
      <img src={user.avatar} alt={`Foto de ${user.name}`} />
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Idade: {user.age}</p>
      {/* Adicione mais informações do perfil do usuário conforme necessário */}
    </div>
  );
}

function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    avatar: 'URL_DA_IMAGEM',
    // Adicione mais informações do perfil do usuário conforme necessário
  };

  return (
    <div className="App">
      <h1>Meu Aplicativo de Perfil de Usuário</h1>
      <UserProfile user={user} />
    </div>
  );
}

export default ProfilePage;
