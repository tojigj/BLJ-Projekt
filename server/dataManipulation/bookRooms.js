import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";
import Moment from "moment";
import extendMoment from "moment-range";

const moment = extendMoment.extendMoment(Moment);

//Validierung
export function bookRooms(startDate, endDate, zimmerName) {
  const data = getData();
  let appointmentAdd = false;
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName) {
      if (item.zimmerName === zimmerName) {
        if (startDate && endDate) {
          const inputRange = moment.range(
            new Date(startDate),
            new Date(endDate)
          );
          if (item.appointments.length === 0) {
            item.appointments = [{ startDate: startDate, endDate: endDate }];
            return true;
          }
          for (let appointment of item.appointments) {
            let dbRange = moment.range(
              new Date(appointment.startDate),
              new Date(appointment.endDate)
            );
            if (dbRange.overlaps(inputRange)) {
              appointmentAdd = false;
              break;
            } else {
              appointmentAdd = true;
            }
          }
          if (appointmentAdd) {
            item.appointments.push({
              startDate: startDate,
              endDate: endDate,
            });
          }
        }
      }
    }
  });
  writeDbData(data);
}
