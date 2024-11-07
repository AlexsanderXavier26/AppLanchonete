
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from '../context/AppContext';

const Register = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const { login } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica real de registro
    console.log('Registro:', { nome, email, senha });
    // Simular login após registro bem-sucedido
    login({ email, nome });
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Registrar</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>
          <CardFooter className="flex justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="mr-2">Cancelar</Button>
            <Button type="submit">Registrar</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
