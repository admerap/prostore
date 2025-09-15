import ProductPrice from "@/components/shared/product/product-price";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductImages from "@/components/shared/product/product-images";

const ProductDetailsPage = async (props: { params: Promise<{ slug: string }> }) => {
    const { slug } = await props.params;
    const product = await getProductBySlug(slug);
    if (!product) notFound();
    return (
        <>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-8">
                    {/* image colomn */}
                    <div className="col-span-2">
                        {/* Image component */}
                        <ProductImages image={product.image} />
                    </div>
                    {/* details colomn */}
                    <div className="col-span-2 p-5">
                        <div className="flex flex-col gap-3">
                            <p>{product.brand} {product.category}</p>
                            <h1 className="font-bold text-3xl">{product.name}</h1>
                            <span className="inline-flex items-center gap-2 text-sm font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full w-fit">
                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                                {Number(product.rating)}
                                <span className="text-xs text-gray-500 font-normal">({product.numReviews} reviews)</span>
                            </span>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
                                <ProductPrice value={Number(product.price)} className="w-24 rounded-full bg-green-100 text-green-600 px-5 py-2" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="font-semibold text-xl mb-2">Description</p>
                            <div className="text-justify">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    {/* action colomn */}
                    <div className="">
                        <Card className="shadow-lg border-2 border-gray-100">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-500 font-medium">Price</span>
                                    <ProductPrice value={Number(product.price)} className="font-bold text-xl text-green-700 bg-green-50 px-4 rounded-full" />
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-500 font-medium">Status</span>
                                    {product.stock > 0 ? (
                                        <Badge className="bg-green-100 text-green-700 font-semibold px-3 rounded-full">In Stock</Badge>
                                    ) : (
                                        <Badge className="bg-red-100 text-red-700 font-semibold px-3 rounded-full">Out of Stock</Badge>
                                    )}
                                </div>
                                {product.stock > 0 && (
                                    <Button className="w-full bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold text-base shadow-md mt-2 cursor-pointer">Add to Cart</Button>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailsPage;