let $ = (element) => {
  if (document.querySelectorAll(element).length > 1) {
    return  document.querySelectorAll(element);
  }
  return document.querySelector(element);

}