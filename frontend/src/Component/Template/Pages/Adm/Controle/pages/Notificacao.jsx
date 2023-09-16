import React from "react";
import Nav from "../NavControle";
import ContentSistem from "../ContentSistem";

function Notificacoes() {
    const conteudo = {
      titulo: 'Notificações', // Defina o título que deseja passar como prop
      descricao: 'bla-bla',
      conteudo: (
        <>
          {/* Conteúdo das notificações */}
          <h1>Notificações</h1>
          <p>Aqui está o conteúdo das notificações...</p>
        </>
      ),
    };
  
    return (
      <div className="contentNotificacao">
        <Nav />
        <ContentSistem conteudo={conteudo} /> {/* Passe a prop 'conteudo' aqui */}
      </div>
    );
  }

export default Notificacoes;
