import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";
import Moment from "moment";
import extendMoment from "moment-range";

const moment = extendMoment.extendMoment(Moment);

//Validierung
export function editBuchung(
  oldStartDate,
  oldEndDate,
  newStartDate,
  newEndDate,
  zimmerName
) {
  const data = getData();
  let appointmentEdit = false;
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName) {
      if (item.zimmerName === zimmerName) {
        const inputRange = moment.range(
          new Date(newStartDate),
          new Date(newEndDate)
        );
        for (let appointment of item.appointments) {
          if (
            appointment.startDate == oldStartDate &&
            appointment.endDate == oldEndDate
          ) {
            for (let appoint of item.appointments) {
              let dbRange = moment.range(
                new Date(appoint.startDate),
                new Date(appoint.endDate)
              );
              if (dbRange.overlaps(inputRange)) {
                appointmentEdit = false;
                break;
              } else {
                appointmentEdit = true;
              }
            }
            if (appointmentEdit) {
              appointment.startDate = newStartDate;
              appointment.endDate = newEndDate;
            }
          }
        }
      }
    }
  });
  writeDbData(data);
}
