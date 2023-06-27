import { useEffect, useRef } from "react";
import Image from "next/image";
import { ImageProps } from "./GallerySection";

import styles from "../../styles/home-page/GallerySection.module.css";

interface IGalleryItem {
    item: ImageProps;
    sizeOfImage: number;
}

const GalleryItem: React.FC<IGalleryItem> = ({ item, sizeOfImage }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.style.width = `${sizeOfImage - 15}px`;
            imageRef.current.style.height = `${sizeOfImage - 15}px`;
        }
    })

    return (
        <div ref={imageRef} className={styles.image}>
            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={item.url} alt={item.url} loading="lazy" />
        </div>
    );
}

export default GalleryItem