'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({image}: {image: string[]}) => {
    const [current, setCurrent] = useState(0);
  return ( 
    <div className="space-y-4">
        <Image src={image[current]} alt="Product Image" width={1000} height={1000} className="min-h-[300px] object-cover object-center" />
        <div className="flex">
            {image.map((imge, index) => (
                <div
                    key={index}
                    className={cn(
                        'border mr-2 cursor-pointer hover:border-orange-600',
                        current === index && 'border-orange-500'
                    )}
                    onClick={() => setCurrent(index)}
                >
                    <Image src={imge} alt={`Thumbnail ${index + 1}`} width={100} height={100} className="h-20 w-20 object-cover object-center" />
                </div>
            ))}
        </div>
    </div>
   );
};

export default ProductImages;