export function dim(type, data) {
  let result = "";
  switch (type) {
    case "phone":
      const front = data.slice(0, 3);
      const end = data.slice(data.length - 2, data.length);
      result = front + "******" + end;
      break;
    case "name":
      const start = data[0];
      const last = data[data.length - 1];
      result = start + "*" + last;
      break;
    default:
      break;
  }
  return result;
}
