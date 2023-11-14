const key = "averages";

const getAllDataStorage = () => {
  let allAverages = localStorage.getItem(key);

  let stringToJson = JSON.parse(allAverages);

  return stringToJson ?? [];
};

const setDataStorage = (data) => {
  let allAverages = getAllDataStorage() ?? [];

  let documentToSave = [...allAverages, data];

  let stringifyDocument = JSON.stringify(documentToSave);

  localStorage.setItem(key, stringifyDocument);
};

const deleteAllDataStorage = () => localStorage.clear();

export { getAllDataStorage, setDataStorage, deleteAllDataStorage };
