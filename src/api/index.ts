import { agent } from "./agent";
import { searchLocationRequests } from "./locations";

export default function api() {
  return {
    weatherForecast: searchLocationRequests(agent),
  };
}
