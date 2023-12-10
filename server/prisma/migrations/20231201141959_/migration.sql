/*
  Warnings:

  - You are about to drop the column `roleName` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleName_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "roleName",
ADD COLUMN     "role_name" TEXT NOT NULL DEFAULT 'user';

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_name_fkey" FOREIGN KEY ("role_name") REFERENCES "Role"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
