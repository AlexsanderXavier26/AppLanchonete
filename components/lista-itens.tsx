
"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simular dados do menu com mais itens
const menuItems = [
  { id: 1, name: 'X-Burger', description: 'Hambúrguer com queijo', price: 12.99 },
  { id: 2, name: 'Batata Frita', description: 'Porção de batata frita crocante', price: 8.99 },
  { id: 3, name: 'Refrigerante', description: 'Lata 350ml', price: 5.99 },
  { id: 4, name: 'Pizza Margherita', description: 'Pizza com molho de tomate, mussarela e manjericão', price: 29.99 },
  { id: 5, name: 'Salada Caesar', description: 'Alface, croutons, parmesão e molho Caesar', price: 15.99 },
  { id: 6, name: 'Milkshake', description: 'Milkshake de baunilha 400ml', price: 9.99 },
  { id: 7, name: 'Wrap de Frango', description: 'Wrap com frango grelhado, alface e molho especial', price: 14.99 },
  { id: 8, name: 'Sundae', description: 'Sorvete com calda de chocolate', price: 7.99 },
];

const ItemCard = ({ item, onAddToCart }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{item.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{item.description}</p>
      <p className="font-bold mt-2">R$ {item.price.toFixed(2)}</p>
    </CardContent>
    <CardFooter>
      <Button onClick={() => onAddToCart(item)}>Adicionar ao Carrinho</Button>
    </CardFooter>
  </Card>
);

const ListaItens = ({ onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {menuItems.map((item) => (
        <ItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ListaItens;
