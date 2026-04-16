import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 });
    }

    // 1. Check the REAL database for this email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    // 2. Verify user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Identifiants incorrects' }, { status: 401 });
    }

    if (user.status !== 'ACTIVE') {
      return NextResponse.json({ error: 'Ce compte est désactivé' }, { status: 403 });
    }

    // 3. Remove the password from the object before sending it to the frontend
    const { password: _, ...safeUser } = user;
    
    return NextResponse.json({ user: safeUser }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}