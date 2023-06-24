// ImageDimensions.js
/* A ImageDimensions egy API-t (getImageDimensions.php) hív meg a kép dimenzióinak lekérdezésére egy adott könyvtárból. Ez a funkció egy fetch kérést használ, hogy elküldje a kérést a PHP scriptnek a háttérben, ami visszaküldi a képdimenziókat. Ha a válasz nem megfelelő, a funkció hibát dob. Ha bármilyen hiba merül fel az API meghívása közben, a hiba üzenetet logolja a konzolra, és egy üres tömböt ad vissza. */

export async function ImageDimensions(folder) {
  try {
    const response = await fetch(
      `/backend/getImageDimensions.php?folder=${folder}`
    );
    if (!response.ok) {
      throw new Error("Hiba a szerver válaszában");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hiba az API meghívása közben", error);
    return [];
  }
}
