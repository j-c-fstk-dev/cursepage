import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Faça sua Boneca Waldorf - Adquira o Curso',
    description: 'Compre agora o curso completo em vídeo e aprenda a fazer bonecas Waldorf artesanais.',
};

export default function VendasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}