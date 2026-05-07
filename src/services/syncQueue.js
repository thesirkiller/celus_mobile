import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './supabase';
import NetInfo from '@react-native-netinfo/netinfo';

const QUEUE_KEY = '@offline_action_queue';

export const addToQueue = async (action) => {
  const currentQueue = JSON.parse(await AsyncStorage.getItem(QUEUE_KEY)) || [];
  currentQueue.push(action);
  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(currentQueue));
};

export const processQueue = async () => {
  const state = await NetInfo.fetch();
  if (!state.isConnected) return false;

  const currentQueue = JSON.parse(await AsyncStorage.getItem(QUEUE_KEY)) || [];
  if (currentQueue.length === 0) return true;

  const remainingQueue = [];

  for (const action of currentQueue) {
    try {
      if (action.type === 'FAVORITE_ADD') {
        await supabase.from('saved_articles').insert(action.payload);
      } else if (action.type === 'FAVORITE_REMOVE') {
        await supabase.from('saved_articles')
          .delete()
          .eq('user_id', action.payload.user_id)
          .eq('article_id', action.payload.article_id);
      }
      // Outras ações (ex: comentários) podem ser processadas aqui
    } catch (error) {
      console.error('Erro ao processar ação offline:', error);
      remainingQueue.push(action); // Devolve para a fila se falhar
    }
  }

  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(remainingQueue));
  return true;
};