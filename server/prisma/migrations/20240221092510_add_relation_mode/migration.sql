-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_role_name_fkey";

-- CreateIndex
CREATE INDEX "Books_sellerId_idx" ON "Books"("sellerId");

-- CreateIndex
CREATE INDEX "Users_role_name_idx" ON "Users"("role_name");
