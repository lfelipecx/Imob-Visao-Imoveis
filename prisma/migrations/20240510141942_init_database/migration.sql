-- CreateTable
CREATE TABLE "Enterprise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "imageUrls" TEXT[],
    "description" TEXT NOT NULL,
    "bathroom" INTEGER NOT NULL,
    "room" INTEGER NOT NULL,
    "garage" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Enterprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Enterprise" ADD CONSTRAINT "Enterprise_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
