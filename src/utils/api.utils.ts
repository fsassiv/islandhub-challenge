export const handleHttpPromise = <T>(
  promise: Promise<{ data: T }>,
): Promise<[undefined, T, { data: T }] | [Error]> =>
  promise
    .then(
      (response) =>
        [undefined, response.data, response] as [undefined, T, { data: T }],
    )
    .catch((error) => [error]);
