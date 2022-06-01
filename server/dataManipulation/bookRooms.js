import { getData } from "../dbAccess.js";
import { writeDbData } from "../dbAccess.js";
import Moment from "moment";
import extendMoment from "moment-range";

const moment = extendMoment.extendMoment(Moment);

//Validierung
export function bookRooms(startDate, endDate, zimmerName) {
  const data = getData();
  data.Sitzungszimmer.map((item) => {
    if (item.zimmerName === zimmerName) {
      if (startDate && endDate) {
        const inputRange = moment.range(startDate, endDate);
        if (item.appointments.length === 0) {
          item.appointments.push({ startDate: startDate, endDate: endDate });
          return true;
        }
        for (let i = 0; i < item.appointments.length; i++) {
          let dbRange = moment.range(
            item.appointments[i].startDate,
            item.appointments[i].endDate
          );
          if (dbRange.overlaps(inputRange)) {
            console.log("Error");
            return false;
          } else {
            item.appointments.push({ startDate: startDate, endDate: endDate });
            return true;
          }
        }
      }
    }
  });
  writeDbData(data);
}
