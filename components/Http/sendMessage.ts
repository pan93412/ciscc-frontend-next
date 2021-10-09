import axios from "axios";
import type { Infer } from "myzod";
import type { StrapiMessagesResponseEntrySchema } from "./common";
import { buildApiMethodEndpoint } from "./common";

/**
 * Send a message to API.
 *
 * @param message The message.
 * @constructor
 */
export default async function SendMessage(message: string) {
  return axios.post<Partial<Infer<typeof StrapiMessagesResponseEntrySchema>>>(
    buildApiMethodEndpoint("/messages"),
    {
      message,
    }
  );
}
