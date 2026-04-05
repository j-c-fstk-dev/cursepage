'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { hashPassword, verifyPassword } from '@/lib/password';
import { createSession, deleteSession } from '@/lib/session';
import prisma from '@/lib/prisma';

const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function register(prevState: any, formData: FormData) {
  const validatedFields = registerSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { message: 'User with this email already exists.' };
    }

    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

  } catch (error) {
    return { message: 'Could not create user. Please try again.' };
  }

  redirect('/login?message=Registration successful. Please log in.');
}

export async function login(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validatedFields.data;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { message: 'Invalid email or password.' };
    }

    const passwordsMatch = await verifyPassword(password, user.password);
    if (!passwordsMatch) {
      return { message: 'Invalid email or password.' };
    }

    await createSession({
        id: user.id,
        email: user.email,
        isAuthorized: user.isAuthorized
    });
  } catch (error) {
    return { message: 'An unexpected error occurred.' };
  }

  redirect('/curso');
}


export async function logout() {
  await deleteSession();
  redirect('/login');
}
