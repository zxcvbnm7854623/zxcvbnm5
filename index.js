import { formatDistanceToNow } from "https://cdn.jsdelivr.net/npm/date-fns@2.28.0/esm/index.js";

const date = "1996-09-13 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
