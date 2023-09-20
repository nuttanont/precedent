import prisma from "@/lib/prisma";

const getProduct = async () => {
  const product = await prisma.product.findFirst({
    select: {
      itemRelease: true,
    },
  });
  return product;
};
const productCreated = async () => {
  const productCreated = await prisma.product.create({
    data: {
      itemRelease: Math.random() * 100,
    },
  });
  return productCreated;
};

const productTruncate = async () => {
  const productTruncate = await prisma.product.deleteMany({});
  return productTruncate;
};

export { getProduct , productCreated, productTruncate };
