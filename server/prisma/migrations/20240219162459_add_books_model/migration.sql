-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT,
    "cover" TEXT,
    "genre" TEXT,
    "pages" INTEGER,
    "rent" TEXT,
    "sold" TEXT,
    "stock" INTEGER,
    "rentPrice" DOUBLE PRECISION,
    "sellPrice" DOUBLE PRECISION,
    "ISBN" TEXT,
    "sellerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
