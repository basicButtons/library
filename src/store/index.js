import { useState, useEffect } from 'react';

export const store = {
  state: {},
  setState(value) { // state的setter
    this.state = value;
    this.setters.forEach(setter => setter(this.state)); // 在每次state set的时候遍历
                                                        // 所有的Dispatcher同时更新
                                                        // 每个useState的值
  },
  setters: [] // 储存所有的useState的Dispatcher
};
  
// 将setState的作用域指向store
store.setState = store.setState.bind(store);

// 跨组件useState
export default function useStore() {
  const [ state, set ] = useState(store.state);
  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }

  useEffect(() => {
    return () => { // 在组件卸载时清理Dispatcher
      store.setters = store.setters.filter(setter => setter !== set)
    }
  }, [])

  return [ state, store.setState ];
}