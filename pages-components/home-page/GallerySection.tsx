import { useRef, useEffect, useState } from "react";
import { StaticImageData } from "next/image";

import styles from "../../styles/home-page/GallerySection.module.css";
import Title from "../../shared-components/title";
import GalleryItem from "./GalleryItem";

import NailsImg from "../../public/nails1.jpg";
interface IData {
    imgUrl: string | StaticImageData;
    alt: string;
}
const data: IData[] = [
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
    {
        imgUrl: NailsImg,
        alt: "nails"
    },
];

const GallerySection = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [sizeOfImage, setSizeOfImage] = useState<number>(0);

    useEffect(() => {
        if (galleryRef.current) {
            const galleryDivWidth = galleryRef.current.offsetWidth;
            setSizeOfImage(galleryDivWidth / 3);
        }
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.wrapper}>
                <Title text="GALERIA" />
                <div ref={galleryRef} className={styles.images}>
                    {data.map((item, index) => <GalleryItem item={item} sizeOfImage={sizeOfImage} key={index} />)}
                </div>
            </section>
        </div>
    );
}

export default GallerySection;