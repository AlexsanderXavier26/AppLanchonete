
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Carrinho = ({ itens, onRemoveItem, onUpdateQuantidade }) => {
  const total = itens.reduce((acc, item) => acc + item.price * item.quantidade, 0);

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      <ScrollArea className="h-[300px]">
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          itens.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2 p-2 border-b">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateQuantidade(item.id, item.quantidade - 1)}
                >
                  -
                </Button>
                <span className="mx-2">{item.quantidade}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onUpdateQuantidade(item.id, item.quantidade + 1)}
                >
                  +
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-2"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remover
                </Button>
              </div>
            </div>
          ))
        )}
      </ScrollArea>
      <div className="mt-4">
        <p className="text-xl font-bold">Total: R$ {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Carrinho;
