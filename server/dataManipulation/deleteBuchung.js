import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";

//Validierung
export function deleteBuchung(startDate, endDate, zimmerName) {
  const data = getData();
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName === zimmerName) {
      if (startDate && endDate) {
        for (let i = 0; i < item.appointments.length; i++) {
          if (
            item.appointments[i].startDate === startDate &&
            item.appointments[i].endDate === endDate
          ) {
            item.appointments.splice(i, 1);
            return true;
          } else {
            return false;
          }
        }
      }
    }
  });
  writeDbData(data);
}
