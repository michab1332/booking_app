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
                <Title text="GALERIA" color="#F2E5E2" />
                <div ref={galleryRef} className={styles.images}>
                    {data.map((item, index) => <GalleryItem item={item} sizeOfImage={sizeOfImage} key={index} />)}
                </div>
                <p className={styles.link}>zobacz więcej zdjęć</p>
            </section>
        </div>
    );
}

export default GallerySection;