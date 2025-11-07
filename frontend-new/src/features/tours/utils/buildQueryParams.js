export function buildQueryParams(filters, pagination) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === "" || value == null) return;
    if (typeof value === "object" && !Array.isArray(value)) {
      // categories object
      Object.entries(value).forEach(([cat, active]) => {
        if (active) params.append("categories[]", cat);
      });
    } else if (Array.isArray(value)) {
      params.append(key, value.join(","));
    } else {
      params.append(key, value);
    }
  });

  params.append("page", pagination.page);
  params.append("limit", pagination.limit);
  return params.toString();
}
