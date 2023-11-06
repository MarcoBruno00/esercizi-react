import "./App.css";
import React, { useState } from "react";

import FilteredList from "./welcome";




function App() {
 

  
  return (
<>
<Routes>
        <Route path="/" element={<Welcome name="marco" />} />
      </Routes>
</>
  )
}

export default App;