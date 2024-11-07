
"use client";

import React from 'react';
import { AppProvider } from '../context/AppContext';
import Header from '../components/header';
import ListaItens from '../components/lista-itens';
import FinalizarCompra from '../components/finalizar-compra';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { cart, addToCart, user } = useAppContext();
  const [showFinalizarCompra, setShowFinalizarCompra] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        isLoggedIn={!!user} 
        cartItemCount={cart.reduce((total, item) => total + item.quantidade, 0)}
        onCartClick={() => setShowFinalizarCompra(true)}
      />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ListaItens onAddToCart={addToCart} />
      </main>
      {showFinalizarCompra && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-2xl">
            <FinalizarCompra onClose={() => setShowFinalizarCompra(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <AppProvider>
    <Home />
  </AppProvider>
);

export default App;
