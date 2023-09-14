import axios from "axios";
interface FormData {
  title: string;
  content: string;
  photo: string;
  video: string;
  post_date: Date;
  usersCustomuserId: number;
}

interface id {
  id: number;
}
export async function getPublication() {
  const response = await axios.get("https://work-wave.onrender.com/api/posts");
  return response.data;
}
export async function postPublication(data: FormData) {
  try {
    const response = await axios.post(
      `https://work-wave.onrender.com/api/posts`,
      data
    );
    console.log("Solicitud POST exitosa:", response.data);
    location.reload();
  } catch (error) {
    console.error("Error al hacer la solicitud POST:", error);
  }
}
export async function deletePublication(id: id) {
  try {
    const response = await axios.delete(
      `https://work-wave.onrender.com/api/posts/${id}`
    );
    console.log("Solicitud DELETE exitosa:", response.data);
    location.reload();
  } catch (error) {
    console.error("Error al hacer la solicitud DELETE:", error);
  }
}

// export async function editPublication(data: FormData, id: id) {
//   try {
//     const response = await axios.put(
//       `https://work-wave.onrender.com/api/posts${id}`,
//       data
//     );
//     console.log("Solicitud POST exitosa:", response.data);
//     location.reload();
//   } catch (error) {
//     console.error("Error al hacer la solicitud POST:", error);
//   }
// }
