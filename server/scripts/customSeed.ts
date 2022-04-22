import { PrismaClient } from "@prisma/client";

export async function customSeed() {
  const client = new PrismaClient();

  //replace this sample code to populate your database
  //with data that is required for your application to start
  await client.product.create({
    data: {
      code: "40897677",
      compared_to_category: "en:rolled-oats",
      emissions: 0.0,
      countries: "France,Allemagne,Pays-Bas,Portugal,Suisse",
      palmOil: false,
      product_name: "Bio havermout fijn",
    }
  });

  client.$disconnect();
}
