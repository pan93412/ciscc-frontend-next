import axios from "axios";
import type { Infer } from "myzod";
import type { StrapiMessagesResponseSchema } from "./common";
import { buildApiMethodEndpoint } from "./common";

/**
 * Get all the unpublished content.
 *
 * @constructor
 */
export default async function GetUnpublishedContent() {
  return axios
    .get<Infer<typeof StrapiMessagesResponseSchema>>(
      buildApiMethodEndpoint("/messages?published=false")
    )
    .then((response) => response.data);
}
