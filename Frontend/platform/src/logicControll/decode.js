import jwtDecode from "jwt-decode";

const token = () => {
  const value = decodeURIComponent(document.cookie);
  if (value) {
    const arr = value.split("=");
    const temp = arr[1];
    const temp1 = jwtDecode(temp);
    const id = temp1.id;
    return { temp, id };
  }
  return "";
};
export default token;
