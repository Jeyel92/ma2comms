export const pageTitle = (title) => {
  return (document.title = title + " - Outsourcing da Comunicação");
};

export const formatDate = (date) => {
  const newDate = new Date(date);

  return `${String(newDate.getDate()).padStart(2, '0')}/${
    String(newDate.getMonth() + 1).padStart(2, '0')
  }/${newDate.getFullYear()}`;
};
