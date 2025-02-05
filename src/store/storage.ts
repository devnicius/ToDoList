import { Data } from '@/utils/types';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
const {getItem, setItem} = useAsyncStorage("@ToDoList:Data");

async function fetchDataFromAPI() {
    try {
      // A busca dos dados na API sera limitada a somente na primeira inicializacao ou apos limpeza (clearData())
      const status: boolean = await getLoadStatus();
      if (status == null || status == false) {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Data[] = response ? await response.json() : [];
      setLoadStatus(true);
      return data.splice(6, 4);
    } else {
      return [];
    }
    } catch (error) {
      console.error("Erro na API.", error);
      return null;
    }
  };

async function getLocalData() {
    try{
       const response = await getItem();
       const data: Data[] = response ? JSON.parse(response) : [];
       return data;
    } catch(error) {
        console.error("Falha ao buscar o item local.", error);
        return [];
    }
};

const combineData = async () => {
    try {
      // Busca dados em paralelo (API e Async Storage)
      const [apiData, localData] = await Promise.all([
        fetchDataFromAPI(),
        getLocalData()
      ]);
  
      // Combinacao logica (mesclar arrays)
      const combinedTasks = apiData?.map((apiTask: { id: string; title: string, category: string, completed: boolean }) => {
        // Encontra correspondencia local pelo id
        const localTask = localData.find((task: { id: string; }) => task.id === apiTask.id);
        // Prioriza dados locais (se existirem)
        return localTask || apiTask;
      });
  
      // Adiciona tarefas locais que nao estao na API
      const newLocalTasks = localData.filter((localTask: { id: string; }) => 
        !apiData?.some((apiTask: { id: string; }) => apiTask.id === localTask.id)
      );
  
      const finalData = [...(combinedTasks || []), ...newLocalTasks];

      // Atualiza Async Storage
      await setItem(JSON.stringify(finalData));
  
      return finalData;
    } catch (error) {
      console.error("Erro ao combinar a colecao.", error);
      return [];
    }
  };

async function clearData() {
    try {
      await AsyncStorage.clear();
    } catch(error) {
       console.error("Não foi possível remover a colecao.", error);
    }
}


async function setLoadStatus(status: boolean) {
  try{
    // Altera o status (determina se obtem os dados iniciais da api)
    const booleanToString = JSON.stringify(status);
    await AsyncStorage.setItem("@TodoList:loadStatus", booleanToString);
  } catch(error) {
    console.error("Não foi possível salvar o LoadStatus.", error);
  }
}


async function getLoadStatus() {
  try{
    const status = await AsyncStorage.getItem("@TodoList:loadStatus");
    return status ?  JSON.parse(status) : false;
  } catch(error) {
    console.error("Não foi possível obter o LoadStatus.", error);
  }
}


export { clearData, combineData, getLocalData };

