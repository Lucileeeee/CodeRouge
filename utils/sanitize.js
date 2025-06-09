function sanitize(data) {
  return data
    .replace(/<[^>]*>?/gm, "")
    .replace(/[`$]/g, "")
    .trim();
}
