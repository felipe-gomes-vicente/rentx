import { eachDayOfInterval, format }  from "date-fns";

import { MarkedDatesProps, DayProps } from ".";
import { getPlatformDate } from "../../utils/getPlatformDate";
import theme from "../../styles/theme";

export function generateInterval(start: DayProps, end: DayProps){
  let intervalo: MarkedDatesProps = {};

  const teste = eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp)})
  console.log(teste)
}