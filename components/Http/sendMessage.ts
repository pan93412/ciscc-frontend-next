import axios from "axios";

const buildApiMethodEndpoint = (method: string) =>
  `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}${method}`;

export default async function SendMessage(message: string) {
  return axios.post(buildApiMethodEndpoint("/messages"), {
    message,
  });
}
