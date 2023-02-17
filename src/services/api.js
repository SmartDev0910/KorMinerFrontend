import axios from "axios";

const apiServer = "https://koryptoblockchain.com/api";
const updateMetadataURL = apiServer + "/updateMetadata";

export async function updateMetadata() {
  await axios
    .post(updateMetadataURL)
    .then((res) => {})
    .catch(function (err) {
      console.log(err, " error");
    });
  return;
}
