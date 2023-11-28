import ICard from "@/interfaces/card.interface";
import styles from "@/ui/Card/Card.module.scss"
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Card: FC<ICard> = ({ description, name }) => {
  return <Link href={`/songs/${name}`}><div className={styles.card}>
    <div className={styles.image}>
      <Image src={`/cards/${name}.png`} alt={name} width={175} height={175} />
    </div>
    <div className={styles.text}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div></Link>
}

export default Card;