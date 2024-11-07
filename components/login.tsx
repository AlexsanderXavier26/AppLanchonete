
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular autenticação
    if (email === 'usuario@exemplo.com' && senha === 'senha123') {
      onLogin({ email });
      onClose();
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
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
            <Button type="submit">Entrar</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
