import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/actiontype";
import { auth } from "./Utility/firebase";

// function App() {
//   const [{ user }, dispatch] = useContext(DataContext);
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: Type.SET_USER,
//           user: authUser,
//         });
//       } else{
//         dispatch({
//           type: Type.SET_USER,
//           user: null,
//         })
//       }
//     });
//   }, []);

  function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: "",
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;
