import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function SalesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
        <div className="mb-8 flex items-center gap-2 text-primary">
            <Terminal className="h-8 w-8" />
            <h1 className="text-2xl font-bold tracking-tight text-white">DevTube Academy</h1>
        </div>
        <div className="text-center max-w-2xl">
            <h2 className="mb-4 text-4xl font-bold text-white tracking-tight">
                Ainda não tem acesso?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
                Adquira agora o DevTube Academy e tenha acesso a todas as aulas,
                materiais de apoio e uma comunidade exclusiva de desenvolvedores.
            </p>
            <Button asChild size="lg" className="mb-8">
                <Link href="#">Comprar Agora</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
                Já comprou o curso?{' '}
                <Link href="/login" className="underline text-primary">
                Faça login
                </Link>
            </p>
        </div>
    </div>
  );
}
