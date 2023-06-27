import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "@/firebase/init";

import styles from "../../styles/home-page/GallerySection.module.css";
import Title from "../../shared-components/title";
import GalleryItem from "./GalleryItem";

export interface ImageProps {
    id: number;
    url: string;
    alt?: string
}

const GallerySection: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [sizeOfImage, setSizeOfImage] = useState<number>(0);
    const [images, setImages] = useState<ImageProps[]>([]);

    const getImages = async () => {
        const imagesRef = collection(db, "images");
        const q = query(imagesRef, limit(9));
        const res = await getDocs(q);
        const imagesArray: ImageProps[] = res.docs.map(doc => ({
            id: Number(doc.id),
            url: doc.data().url as string
        }))
        setImages(imagesArray);
    }

    useEffect(() => {
        if (galleryRef.current) {
            const galleryDivWidth = galleryRef.current.offsetWidth;
            setSizeOfImage(galleryDivWidth / 3);
        }
    }, []);

    useEffect(() => {
        getImages();
    }, [])

    return (
        <div id="gallery" className={styles.container}>
            <section className={styles.wrapper}>
                <Title text="GALERIA" color="#F2E5E2" />
                <div ref={galleryRef} className={styles.images}>
                    {images.map((item, index) => <GalleryItem item={item} sizeOfImage={sizeOfImage} key={index} />)}
                </div>
                <Link href="/gallery" className={styles.link}>zobacz więcej zdjęć</Link>
            </section>
        </div>
    );
}

export default GallerySection;