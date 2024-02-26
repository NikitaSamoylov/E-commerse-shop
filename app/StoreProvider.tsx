'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { cartStore, AppStore, persistor } from '../store/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = cartStore;
  }
  return <Provider store={ storeRef.current }>
    <PersistGate loading={ null }
      persistor={ persistor }
    >
      { children }
    </PersistGate>
  </Provider>;
}