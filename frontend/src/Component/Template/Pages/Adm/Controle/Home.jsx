import React from "react";
import "./Adm.css";
import OffcanvasExample from "./NavControle";
import ContentSistem from "./ContentSistem";


function Layout() {
  // const location = useLocation();
  const conteudo = {
    titulo: 'Bem-vindo ao sistema de gerenciamento', // Defina o título que deseja passar como prop
    descricao: 'Aqui nasce a gestão da cafeteria. O bom café começa de cima!:)',
    conteudo: (
      <>
        {/* Conteúdo das notificações */}
        <h1></h1>
        <p>Campanha setembro amarelo, mês de prevenção. Retire no rh a sua apostila do setembro amarelo, você é importante para nós!</p>
      </>
    ),
  };

  return (
    
    <div className="app-container">
      <div className="menuSistema">
          <div className="menu-adm">
            <OffcanvasExample className="menu-hamburguer" />
          </div>
      </div>
      <div className="conteudoPage">
        <ContentSistem conteudo={conteudo}/>
      </div>
    </div>
  );
}

export default Layout;
