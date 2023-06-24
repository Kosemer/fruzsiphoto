/* Ez a komponens egy bejelentkezési űrlapot jelenít meg. A felhasználó a felhasználónév és jelszó mezőkben adhatja meg adatait. Az adatokat HTTP POST kéréssel továbbítja a "http://localhost/login.php" címre. Ha a bejelentkezés sikeres, a komponens állapota megváltozik: a 'loggedIn' állapot igazra vált, és megjelenik az 'ImageUploader' komponens, amely a bejelentkezett felhasználónak képfeltöltési lehetőséget biztosít. Ha a bejelentkezés nem sikerül, a felhasználó hibajelzést kap. */

import classes from "./LoginForm.module.css";
import { useState, useEffect } from "react";
import ImageUploader from "../AdminPage/ImageUploader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function LoginForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/backend/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setLoggedIn(true);
      setError(null);
    } else {
      setError("Hibás felhasználónév vagy jelszó");
    }
  };
  return (
    <>
      {!loggedIn && (
        <div className={classes.container}>
          <form className={classes.loginForm}>
            <div className={classes.flexRow}>
              <label className={classes.label} htmlFor="username">
                <svg x="0px" y="0px" width="12px" height="13px">
                  <path
                    fill="#ff69b4"
                    stroke="#ff69b4"
                    stroke-width="1"
                    d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"
                  />
                </svg>
              </label>
              <input
                id="username"
                className={classes.input}
                placeholder="Felhasználónév"
                type="text"
                required
              />
            </div>
            <div className={classes.flexRow}>
              <label className={classes.label} htmlFor="password">
                <svg x="0px" y="0px" width="15px" height="5px">
                  <g>
                    <path
                      fill="#ff69b4"
                      stroke="#ff69b4"
                      stroke-width="1"
                      d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"
                    />
                  </g>
                </svg>
              </label>
              <input
                id="password"
                className={classes.input}
                placeholder="Jelszó"
                type="password"
                required
              />
            </div>
            {error && <p className={classes.errorMessage}>{error}</p>}
            <input
              className={classes.submit}
              type="submit"
              value="Bejelentkezés"
              onClick={handleSubmit}
            />
          </form>
        </div>
      )}
      <DndProvider backend={HTML5Backend}>
        {loggedIn && <ImageUploader setLoggedIn={setLoggedIn} />}
      </DndProvider>
    </>
  );
}

export default LoginForm;
