import react, { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import "./_style.scss"


type searchProps = {
  loadUser: (userName: string) => Promise<void>;
};

//
export const Search = ({loadUser}: searchProps) => {
  const [userName, setUserName] = useState("");
const handleKeyDown = (e: KeyboardEvent)=> {
    if(e.key === "Enter"){
        loadUser(userName)
    }
}
  return (
    <div className="search-componet">
      <h2>GitHub Finder</h2>
      <h2>Busque por um usuário:</h2>
      <p>Conheça os melhores repositórios</p>
      <div className="search">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
          <BsSearch onClick={() => loadUser(userName)}/>
      
      </div>
    </div>
  );
};
