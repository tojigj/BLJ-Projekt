import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";

//Validierung
export function bookRooms(zimmerName) {
  const data = getData();
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName === zimmerName) {
      item.gebucht = true;
    }
  });
  writeDbData(data);
}
