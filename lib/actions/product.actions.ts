'use server';
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

import { LATEST_PRODUCT_LIMIT } from "../constants";
//get latest products
export async  function getLatestProducts(){
    const data= await prisma.product.findMany({
        take:LATEST_PRODUCT_LIMIT,
        orderBy:{createdAt:'desc'}
    });
    return convertToPlainObject(data);
}

//Get single product by  it's slug
export  async function getProductBySlug(slug:string) {
    return await prisma.product.findFirst({
        where:{slug:slug}
    })
}