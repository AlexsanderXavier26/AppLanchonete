
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from 'lucide-react';

const Header = ({ isLoggedIn, cartItemCount, onCartClick }) => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Lanchonete
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button variant="ghost" className="flex items-center" onClick={onCartClick}>
                <ShoppingCart className="mr-1" />
                <span>Carrinho ({cartItemCount})</span>
              </Button>
            </li>
            <li>
              {isLoggedIn ? (
                <span className="flex items-center">
                  <User className="mr-1" />
                  <span>Logado</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <User className="mr-1" />
                  <span>Não logado</span>
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
