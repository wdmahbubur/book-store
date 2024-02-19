/*
  Warnings:

  - You are about to drop the column `sold` on the `Books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Books" DROP COLUMN "sold",
ADD COLUMN     "sell" TEXT;
