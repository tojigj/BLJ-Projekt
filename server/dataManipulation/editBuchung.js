import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";

//Validierung
export function editBuchung(
  oldStartDate,
  oldEndDate,
  newStartDate,
  newEndDate,
  zimmerName
) {
  const data = getData();
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName) {
      if (item.zimmerName === zimmerName) {
        for (let appointment of item.appointments) {
          if (
            appointment.startDate == oldStartDate &&
            appointment.endDate == oldEndDate
          ) {
            appointment.startDate = newStartDate;
            appointment.endDate = newEndDate;
          }
        }
      }
    }
  });
  writeDbData(data);
}
