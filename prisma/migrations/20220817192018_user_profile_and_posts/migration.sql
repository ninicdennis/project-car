/*
  Warnings:

  - Made the column `user_id` on table `posts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_user_id_fkey";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_data" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "user_profile" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "banner_image" TEXT,
    "about" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_images" (
    "id" UUID NOT NULL,
    "image_url" TEXT,
    "profile_id" UUID NOT NULL,

    CONSTRAINT "profile_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "following" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "follower_id" UUID NOT NULL,

    CONSTRAINT "following_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_comments" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "post_id" UUID NOT NULL,
    "message" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_like_dislike" (
    "user_id" UUID NOT NULL,
    "post_id" UUID NOT NULL,
    "liked" BOOLEAN NOT NULL,
    "disliked" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_id_key" ON "user_profile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_images_id_key" ON "profile_images"("id");

-- CreateIndex
CREATE UNIQUE INDEX "post_like_dislike_user_id_post_id_key" ON "post_like_dislike"("user_id", "post_id");

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_images" ADD CONSTRAINT "profile_images_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "user_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "following" ADD CONSTRAINT "following_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "following" ADD CONSTRAINT "following_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_like_dislike" ADD CONSTRAINT "post_like_dislike_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_like_dislike" ADD CONSTRAINT "post_like_dislike_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
