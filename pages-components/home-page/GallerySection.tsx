import { useRef, useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

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
        imgUrl: "https://i.ibb.co/FX308dj/345247352-157636110629907-5430002066717505232-n.jpg",
        alt: "nails"
    },
    {
        imgUrl: "https://i.ibb.co/CBSd1TH/345276465-275686141654286-1483599838931111599-n.jpg",
        alt: "nails"
    },
];

const GallerySection: React.FC = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [sizeOfImage, setSizeOfImage] = useState<number>(0);

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
                    {data.map((item, index) => <GalleryItem item={item} sizeOfImage={sizeOfImage} key={index} />)}
                </div>
                <Link href="/gallery" className={styles.link}>zobacz więcej zdjęć</Link>
            </section>
        </div>
    );
}

export default GallerySection;