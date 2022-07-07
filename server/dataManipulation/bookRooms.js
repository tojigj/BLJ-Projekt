import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";

//Validierung
export function bookRooms(startDate, endDate, zimmerName) {
  const data = getData();
  let appointmentAdd = false;
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName) {
      if (item.zimmerName === zimmerName) {
        if (startDate && endDate) {
          if (item.appointments.length === 0) {
            item.appointments = [{ startDate: startDate, endDate: endDate }];
            appointmentAdd = true;
            return true;
          }
          for (let appointment of item.appointments) {
            if (
              (startDate >= appointment.startDate &&
                endDate <= appointment.endDate) ||
              (startDate <= appointment.startDate &&
                endDate >= appointment.endDate) ||
              (startDate >= appointment.startDate &&
                startDate <= appointment.endDate) ||
              (startDate >= appointment.startDate &&
                endDate <= appointment.endDate)
            ) {
              appointmentAdd = false;
              break;
            } else {
              appointmentAdd = true;
            }
          }
          if (appointmentAdd === true) {
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
  return appointmentAdd;
}
