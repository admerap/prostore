import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="w-full max-w-sm p-4">
            <CardHeader className="p-0 items-center">
                <Link href={`/product/${product.slug}`}>
                    <Image src={product.image[0]} alt={product.name} width={300} height={300} priority={true} className="w-full h-auto object-cover mb-4" />

                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-2">
                <div className="text-sm">{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex items-center justify-between gap-3">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <span className="text-base font-semibold text-green-600">
                            <ProductPrice value={Number(product.price)} />
                        </span>
                    ) : (
                        <span className="text-md font-semibold bg-red-100 text-red-600 px-2 py-1 rounded">
                            Out of Stock
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;