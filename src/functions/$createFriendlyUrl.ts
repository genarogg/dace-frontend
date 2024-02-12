const $createFriendlyUrl = (title: string): string => {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export default $createFriendlyUrl;
