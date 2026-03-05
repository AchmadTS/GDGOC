import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env["DATABASE_URL"]!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("=== Membuktikan Relasi One-to-Many: Member → Loan ===\n");
    const member = await prisma.member.create({
        data: {
            name: "Budi Santoso",
            email: "budi@example.com",
        },
    });
    console.log("✅ Member berhasil dibuat:", member);

    const book = await prisma.book.findFirst();
    if (!book) throw new Error("Tidak ada buku, jalankan seed terlebih dahulu!");
    const loan = await prisma.loan.create({
        data: {
            memberId: member.id,
            bookId: book.id,
        },
    });

    console.log("✅ Loan berhasil dibuat dengan member valid:", loan);
    console.log("\n--- Mencoba membuat Loan dengan memberId tidak valid (999) ---");
    try {
        await prisma.loan.create({
            data: {
                memberId: 999,
                bookId: book.id,
            },
        });
    } catch (error) {
        console.error("❌ GAGAL seperti yang diharapkan! Error:", (error as Error).message);
        console.log("✅ TERBUKTI: Data child (Loan) TIDAK BISA ada tanpa parent (Member) yang valid!");
    }

    console.log("\n--- Mencoba menghapus Member yang masih punya Loan ---");
    try {
        await prisma.member.delete({ where: { id: member.id } });
    } catch (error) {
        console.error("❌ GAGAL seperti yang diharapkan! Error:", (error as Error).message);
        console.log("✅ TERBUKTI: Parent (Member) TIDAK BISA dihapus selama masih ada child (Loan)!");
    }

    console.log("\n--- Data Member beserta semua Loan-nya ---");
    const memberWithLoans = await prisma.member.findMany({
        include: { loans: { include: { book: true } } },
    });
    console.log(JSON.stringify(memberWithLoans, null, 2));
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });