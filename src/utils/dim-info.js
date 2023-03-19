export function dim(type, data) {
  let result = "";
  const newData = String(data);
  switch (type) {
    case "phone":
      const front = newData.slice(0, 3);
      const end = newData.slice(newData.length - 2, newData.length);
      result = front + "******" + end;
      break;
    case "name":
      const start = newData[0];
      const last = newData[newData.length - 1];
      result = start + "*" + last;
      break;
    default:
      break;
  }
  return result;
}
