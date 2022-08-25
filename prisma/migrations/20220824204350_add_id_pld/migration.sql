/*
  Warnings:

  - The required column `id` was added to the `post_like_dislike` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "post_like_dislike" ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "post_like_dislike_pkey" PRIMARY KEY ("id");
