import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Start Seeding Data ---');

  // Hapus data lama (urut dari child ke parent)
  await prisma.loan.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.book.deleteMany();
  await prisma.member.deleteMany();
  await prisma.author.deleteMany();
  await prisma.category.deleteMany();
  await prisma.publisher.deleteMany();

  // Categories
  const catFiction = await prisma.category.create({
    data: { name: 'Fiksi' }
  });

  const catManga = await prisma.category.create({
    data: { name: 'Manga' }
  });

  const catTech = await prisma.category.create({
    data: { name: 'Teknologi' }
  });

  // Publishers
  const pubGramedia = await prisma.publisher.create({
    data: { name: 'Gramedia Pustaka Utama' }
  });

  const pubElex = await prisma.publisher.create({
    data: { name: 'Elex Media Komputindo' }
  });

  const pubOReilly = await prisma.publisher.create({
    data: { name: "O'Reilly Media" }
  });

  // Authors + Profiles (1:1)
  const authorTereLiye = await prisma.author.create({
    data: {
      name: 'Tere Liye',
      profile: {
        create: {
          bio: 'Penulis produktif asal Indonesia dengan berbagai karya best-seller.'
        }
      }
    }
  });

  const authorTatsuya = await prisma.author.create({
    data: {
      name: 'Tatsuya Endo',
      profile: {
        create: {
          bio: 'Mangaka Jepang pencipta seri Spy x Family.'
        }
      }
    }
  });

  const authorRobert = await prisma.author.create({
    data: {
      name: 'Robert C. Martin',
      profile: {
        create: {
          bio: 'Software engineer terkenal dengan buku Clean Code.'
        }
      }
    }
  });

  // Books
  const bookBumi = await prisma.book.create({
    data: {
      title: 'Bumi',
      year: 2014,
      categoryId: catFiction.id,
      publisherId: pubGramedia.id,
      authors: {
        connect: [{ id: authorTereLiye.id }]
      }
    }
  });

  const bookSpy = await prisma.book.create({
    data: {
      title: 'Spy x Family Vol.1',
      year: 2019,
      categoryId: catManga.id,
      publisherId: pubElex.id,
      authors: {
        connect: [{ id: authorTatsuya.id }]
      }
    }
  });

  const bookCleanCode = await prisma.book.create({
    data: {
      title: 'Clean Code',
      year: 2008,
      categoryId: catTech.id,
      publisherId: pubOReilly.id,
      authors: {
        connect: [{ id: authorRobert.id }]
      }
    }
  });

  // Members
  const member1 = await prisma.member.create({
    data: {
      name: 'Andi',
      email: 'andi@mail.com',
      phone: '08123456789',
      address: 'Surabaya'
    }
  });

  const member2 = await prisma.member.create({
    data: {
      name: 'Budi',
      email: 'budi@mail.com',
      phone: '08122222222',
      address: 'Jakarta'
    }
  });

  const member3 = await prisma.member.create({
    data: {
      name: 'Citra',
      email: 'citra@mail.com'
    }
  });

  // Loans
  await prisma.loan.create({
    data: {
      memberId: member1.id,
      bookId: bookBumi.id
    }
  });

  await prisma.loan.create({
    data: {
      memberId: member2.id,
      bookId: bookSpy.id
    }
  });

  await prisma.loan.create({
    data: {
      memberId: member3.id,
      bookId: bookCleanCode.id,
      returnDate: new Date()
    }
  });

  console.log('--- Seeding Finished Successfully! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });