import { getAllDataStorage, setDataStorage } from "../service/storage_service";

const getAllAverages = () => {
  let allAverages = getAllDataStorage() ?? [];

  return allAverages;
};

const getAverageByName = (name) => {
  let allAverages = getAllDataStorage() ?? [];

  let index = allAverages.findIndex((average) => average.name === name);

  return index !== -1 ? allAverages[index] : null;
};

const setAverage = (name, n1, n2, n3, m, mf) => {
  let documentToSave = {
    name,
    n1,
    n2,
    n3,
    m,
    mf,
  };

  setDataStorage(documentToSave);
};

export { getAllAverages, setAverage, getAverageByName };
