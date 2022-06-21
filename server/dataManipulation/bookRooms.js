import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";
import Moment from "moment";
import extendMoment from "moment-range";

const moment = extendMoment.extendMoment(Moment);

//Validierung
export function bookRooms(startDate, endDate, zimmerName) {
  const data = getData();
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
          for (let i = 0; i < item.appointments.length; i++) {
            let dbRange = moment.range(
              new Date(item.appointments[i].startDate),
              new Date(item.appointments[i].endDate)
            );
            if (inputRange.overlaps(dbRange)) {
              console.log("Error");
              return false;
            } else {
              item.appointments.push({
                startDate: startDate,
                endDate: endDate,
              });
              return true;
            }
          }
        }
      }
    }
  });
  writeDbData(data);
}
