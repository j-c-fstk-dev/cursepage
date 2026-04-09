'use client';

import { login } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </Button>
  );
}

function LoginContent() {
  const [state, formAction] = useActionState(login, undefined);
  const searchParams = useSearchParams();
  const successMessage = searchParams.get('message');

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Acessar Curso</CardTitle>
        <CardDescription>
          Digite seu email e senha para acessar o curso de Boneca Waldorf
        </CardDescription>
      </CardHeader>
      <CardContent>
        {successMessage && (
          <Alert variant="default" className="mb-4 bg-green-500/10 border-green-500/50 text-green-700">
            <AlertCircle className="h-4 w-4 !text-green-700" />
            <AlertTitle>Sucesso!</AlertTitle>
            <AlertDescription>
              {successMessage}
            </AlertDescription>
          </Alert>
        )}
        {state?.message && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro ao Fazer Login</AlertTitle>
            <AlertDescription>
              {state.message}
            </AlertDescription>
          </Alert>
        )}
        <form action={formAction} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" name="password" required />
          </div>
          <SubmitButton />
        </form>
        <div className="mt-4 text-center text-sm">
          Ainda não tem acesso?{' '}
          <Link href="/register" className="underline text-primary">
            Registre-se aqui
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<Card className="w-full max-w-sm"><CardContent>Loading...</CardContent></Card>}>
      <LoginContent />
    </Suspense>
  );
}
