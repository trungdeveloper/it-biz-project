export const getParameter = (key) =>
    new URL(document.location.href).searchParams.get(key);
