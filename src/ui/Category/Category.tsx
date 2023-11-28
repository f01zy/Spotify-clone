import ICategory from "@/interfaces/category.interface";
import styles from "@/ui/Category/Category.module.scss"
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Category: FC<ICategory> = ({ background, image, title }) => {
  return <Link href={`/search/${title}`}><div className={styles.category} style={{ background }}>
    <h3>{title}</h3>
    <div className={styles.image}>
      <Image src={image} alt={title} width={100} height={100} />
    </div>
  </div></Link>
}

export default Category;