import React, { useState, useEffect, useContext } from "react";
import storage from "./storage.svg";
import classes from "./StorageInfo.module.css";
import darkModeClasses from "./DarkMode.module.css";
import CartContext from "../../Components/Store/cart-context";

const StorageInfo = () => {
  const cartCtx = useContext(CartContext);
  const [storageInfo, setStorageInfo] = useState({
    directorySize: 0, // Kezdetben 0 MB
    freeSpace: 1024, // Teljes hely 1000 MB
  });

  // Fetching the storage data from the server
  useEffect(() => {
    fetch("/backend/storage_info.php") // Cseréld le a megfelelő útvonalra
      .then((response) => response.json())
      .then((data) => setStorageInfo(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const { directorySize, freeSpace } = storageInfo;
  const totalSpaceMB = 1024;
  const usedSpacePercentage = ((directorySize / totalSpaceMB) * 100).toFixed(2);

  return (
    <div
      className={cartCtx.isOpen ? classes.container : classes.containerClosed}
    >
      <div className={classes.svg}>
        <img src={storage} alt="storage Icon" />
      </div>
      <h3>Tárhely információk</h3>
      <div className={classes.description}>
        <p className={classes.storageTitle}>
          Foglalt hely: <strong>{directorySize.toFixed(2)} MB</strong>
        </p>
        <p className={classes.storageTitle}>
          Szabad hely: <strong>{freeSpace.toFixed(2)} MB</strong>
        </p>
        <p className={classes.storageTitle}>
          Összes hely: <strong>{totalSpaceMB} MB</strong>
        </p>
        <div
          className={cartCtx.isDarkMode ? darkModeClasses.donut : classes.donut}
          style={{ "--percentage": usedSpacePercentage / 100 }}
        >
          <span className={classes.percentage}>{usedSpacePercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default StorageInfo;
