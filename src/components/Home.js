import React, { useState, Fragment } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import Filters from './filters/Filters';
import SpacexCard from './spacex-cards/SpacexCards';

const Home = () => {
  const serverTodos = useServerData(data => {
    return data.todos || [];
  });
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(serverTodos);

  return (
   <Fragment>
     <div className="container fluid home">
       <div className="row">
         <div className="col-md-12"><h5>SpaceX Launch Programs</h5></div>
       </div>
        <div className="row">
          <div className="col-md-2"><Filters></Filters></div>
          <div className="col-md-10"><SpacexCard></SpacexCard></div>
        </div>
     </div>
   </Fragment>
  );
};

Home.fetchData = () => {
  return api.todos.all().then(todos => {
    return {
      todos
    };
  });
};

export default Home;
