import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import useGalleryImagesFromFirestore from "@/hooks/home-page/useGalleryImagesFromFirestore";

import styles from "../../styles/home-page/GallerySection.module.css";
import Title from "../../shared-components/title";
import GalleryItem from "./GalleryItem";

const GallerySection: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [sizeOfImage, setSizeOfImage] = useState<number>(0);
    const images = useGalleryImagesFromFirestore();

    useEffect(() => {
        if (galleryRef.current) {
            const galleryDivWidth = galleryRef.current.offsetWidth;
            setSizeOfImage(galleryDivWidth / 3);
        }
    }, []);

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