import { useEffect, useState } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "@/firebase/init";

export interface ImageProps {
    id: number;
    url: string;
    alt?: string
}

const useGalleryImagesFromFirestore = (numberOfImages: number) => {
    const [images, setImages] = useState<ImageProps[]>([]);

    const getImages = async (): Promise<void> => {
        const imagesRef = collection(db, "images");
        const q = query(imagesRef, limit(numberOfImages));
        const res = await getDocs(q);
        const imagesArray: ImageProps[] = res.docs.map(doc => ({
            id: Number(doc.id),
            url: doc.data().url as string
        }))
        setImages(imagesArray);
    }

    useEffect(() => {
        getImages();
    }, [])

    return images;
}

export default useGalleryImagesFromFirestore;