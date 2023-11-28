"use client"

import styles from "@/pages/CategoryDetail/CategoryDetail.module.scss"
import Card from "@/ui/Card/Card"
import { useParams } from "next/navigation"

const CategoryDetail = () => {
  const params = useParams()
  const category = params?.search

  return <div className={styles.category_detail}>
    <h1>{category}</h1>
    <div className={styles.category}>
      <h2>Best Episodes - Editor's Picks</h2>
      <div className={styles.cards}>
        <Card description="Kick back to the best new and recent chill hits." name="Chill Hits" />
        <Card description="Keep calm and focus with ambient and post-rock music." name="Deep Focus" />
        <Card description="The original chill instrumental beats playlist." name="Jazz Vibes" />
        <Card description="Uptempo instrumental hip hop beats." name="Focus Flow" />
        <Card description="Focus with soft study music in the background." name="Instrumental Study" />
      </div>
    </div>
    <div className={styles.category}>
      <h2>Best of: Brown Bag</h2>
      <div className={styles.cards}>
        <Card description="Kick back to the best new and recent chill hits." name="Chill Hits" />
        <Card description="Keep calm and focus with ambient and post-rock music." name="Deep Focus" />
        <Card description="The original chill instrumental beats playlist." name="Jazz Vibes" />
        <Card description="Uptempo instrumental hip hop beats." name="Focus Flow" />
        <Card description="Focus with soft study music in the background." name="Instrumental Study" />
      </div>
    </div>
  </div>
}

export default CategoryDetail;