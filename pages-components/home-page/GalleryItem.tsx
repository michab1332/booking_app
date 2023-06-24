import { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "../../styles/home-page/GallerySection.module.css";

interface IData {
    url: string;
    alt: string;
}

interface IGalleryItem {
    item: IData;
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
            <Image fill src={item.url} alt={item.url} />
        </div>
    );
}

export default GalleryItem