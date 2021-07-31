import myzod from "myzod";

/**
 * The root endpoint of the backend API.
 */
export const apiEndpointRoot = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT;

/**
 * Build the endpoint with the specified method
 *
 * @param method The method to call.
 */
export const buildApiMethodEndpoint = (method: string) =>
  `${apiEndpointRoot}${method}`;

/**
 * An entry of the response of `/messages`
 */
export const StrapiMessagesResponseEntrySchema = myzod
  .object({
    id: myzod.number(),
    message: myzod.string(),
    published: myzod.boolean(),
    approved: myzod.boolean(),
    created_at: myzod.date(),
    updated_at: myzod.date(),
  })
  .allowUnknownKeys();

/**
 * The response of `/messages`
 */
export const StrapiMessagesResponseSchema = myzod.array(
  StrapiMessagesResponseEntrySchema
);
