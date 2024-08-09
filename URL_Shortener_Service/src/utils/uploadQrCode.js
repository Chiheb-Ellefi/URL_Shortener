import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../config/database/firebase.js";

export const uploadQrCode = async ({ dataUrl, hash }) => {
  // Convert the data URL to a Blob
  const dataUrlParts = dataUrl.split(",");
  const byteString = atob(dataUrlParts[1]);
  const mimeString = dataUrlParts[0].split(":")[1].split(";")[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: mimeString });

  const storage = getStorage(app);
  const storageRef = ref(storage, `QR_Code/${hash}`);
  const snapshot = await uploadBytes(storageRef, blob);
  console.log("Uploaded a blob or file!");

  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};
