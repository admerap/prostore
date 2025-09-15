'use server'
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// get latest products
export async function gatLatestProducts() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return convertToPlainObject(data);
}

// get single product by slug
export async function getProductBySlug(slug: string) {
    const prisma = new PrismaClient();
    const product = await prisma.product.findUnique({
        where: {
            slug
        }
    });
    return convertToPlainObject(product);
}