import React from "react";
import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
