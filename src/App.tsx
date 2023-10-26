import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {MoviesPage} from "./pages";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts/>}>
        <Route index element={<Navigate to={'movies'}/> }/>
        <Route path={'movies'} element={<MoviesPage/>}/>
      </Route>

    </Routes>
  );
}

export default App;
