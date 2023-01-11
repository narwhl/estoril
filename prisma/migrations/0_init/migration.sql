-- CreateTable
CREATE TABLE "Bookmark" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "author" VARCHAR(255),
    "link" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

