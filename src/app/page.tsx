import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();

  if (session) {
    redirect('/curso');
  } else {
    redirect('/login');
  }

  return null;
}
