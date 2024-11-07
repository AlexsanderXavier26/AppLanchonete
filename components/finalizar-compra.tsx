
"use client";

import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Login from './login';
import Register from './register';

const FinalizarCompra = () => {
  const { cart, removeFromCart, updateCartItemQuantity, user, login } = useAppContext();
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantidade, 0);

  const handleFinalizarCompra = () => {
    if (user) {
      alert('Compra finalizada com sucesso!');
      // Aqui você implementaria a lógica real de finalização da compra
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Finalizar Compra</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} - R$ {item.price.toFixed(2)} x {item.quantidade}</span>
              <div>
                <Button variant="outline" size="sm" onClick={() => updateCartItemQuantity(item.id, item.quantidade - 1)}>-</Button>
                <span className="mx-2">{item.quantidade}</span>
                <Button variant="outline" size="sm" onClick={() => updateCartItemQuantity(item.id, item.quantidade + 1)}>+</Button>
                <Button variant="destructive" size="sm" className="ml-2" onClick={() => removeFromCart(item.id)}>Remover</Button>
              </div>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: R$ {total.toFixed(2)}</div>
        </CardContent>
        <CardFooter>
          {user ? (
            <Button onClick={handleFinalizarCompra}>Finalizar Compra</Button>
          ) : (
            <div>
              <Button onClick={() => setShowLogin(true)}>Login</Button>
              <Button onClick={() => setShowRegister(true)} className="ml-2">Registrar</Button>
            </div>
          )}
        </CardFooter>
      </Card>
      {showLogin && <Login onLogin={login} onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default FinalizarCompra;
