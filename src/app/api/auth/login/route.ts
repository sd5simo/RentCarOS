import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // <-- ADDED CURLY BRACES HERE

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 });
    }

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { email }
    });

    // Verify user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Identifiants incorrects' }, { status: 401 });
    }

    if (user.status !== 'ACTIVE') {
      return NextResponse.json({ error: 'Ce compte est désactivé' }, { status: 403 });
    }

    // Success! Return the user data (excluding the password)
    const { password: _, ...safeUser } = user;
    
    return NextResponse.json({ user: safeUser }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}