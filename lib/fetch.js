export const fetcher = async (...args) => {
  const res = await fetch(...args);
  let payload;
  try {
    if (res.status !== 200)
      return null; // 204 does not have body
    payload = await res.json();
  } catch (e) {
    return {err: e.toString()}
  }
  if (res.ok) {
    return payload;
  } else {
    return Promise.reject(payload?.error || new Error('Something went wrong'));
  }
};
