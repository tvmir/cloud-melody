import formatDuration from "format-duration";

export function formatDate(date: Date) {
  return date.toLocaleDateString("fr-CA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatTime(seconds = 0) {
  return formatDuration(seconds * 1000);
}
