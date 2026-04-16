import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create an Admin User
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@jebrental.com' },
    update: {},
    create: {
      email: 'admin@rentcar.com',
      password: 'rentcar@', // Your login password
      pseudo: 'Super Admin',
      role: 'MANAGER',
      status: 'ACTIVE',
    },
  });

  console.log('✅ Admin user seeded:', adminUser.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });