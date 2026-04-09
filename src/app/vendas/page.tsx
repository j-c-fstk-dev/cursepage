'use client';

import { Button } from "@/components/ui/button";
import { Sprout, LogOut } from "lucide-react";
import Link from "next/link";
import { logout } from "@/actions/auth";

export default function SalesPage() {
    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
            <div className="absolute top-4 right-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center gap-2"
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </div>
            <div className="mb-12 flex items-center gap-3">
                <Sprout className="h-10 w-10 text-primary" />
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Brincando em Família</h1>
            </div>
            <div className="text-center max-w-3xl">
                <h2 className="mb-4 text-4xl font-bold text-foreground tracking-tight">
                    Faça sua Boneca Waldorf
                </h2>
                <p className="mb-6 text-lg text-foreground/80">
                    Um curso completo em vídeo para você aprender a criar uma boneca Waldorf artesanalmente.
                </p>

                <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                    <p className="text-sm text-foreground/70 mb-4">
                        <strong>Por que escolher uma boneca Waldorf?</strong>
                    </p>
                    <ul className="text-left text-sm text-foreground/80 space-y-2 mb-4">
                        <li>🍄 <strong>Estimula a imaginação:</strong> Sem rosto detalhado, permite que a criança interprete as emoções</li>
                        <li>🌱 <strong>Feita com amor:</strong> Artesanal e feita à mão, cultivando reverência pelo belo</li>
                        <li>🌳 <strong>Materiais naturais:</strong> Lã, seda, algodão e madeira para experência sensorial</li>
                        <li>💚 <strong>Macia e aquecida:</strong> Efeito calmante para o desenvolvimento infantil</li>
                    </ul>
                </div>

                <Button asChild size="lg" className="mb-8">
                    <a href="https://brincandoemfamilia.com.br/produtos/faca-sua-boneca-waldorf-curso-em-video-pre-venda-u18ak/" target="_blank" rel="noopener noreferrer">
                        Adquirir Curso Agora
                    </a>
                </Button>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground mb-2">
                        <strong>✨ Já adquiriu o curso?</strong>
                    </p>
                    <p className="text-xs text-foreground/70 mb-3">
                        Após confirmar seu pagamento, você receberá um email com o link de acesso aos vídeos.
                    </p>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        className="text-xs"
                    >
                        Voltar ao Login
                    </Button>
                </div>
            </div>
        </div>
    );
}