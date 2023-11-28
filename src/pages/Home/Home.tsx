import styles from "@/pages/Home/Home.module.scss"
import Card from "@/ui/Card/Card";

const Home = () => {
  return <div className={styles.home}>
    <div className={styles.category}>
      <h2>New</h2>
      <div className={styles.cards}>
        <Card description="Kick back to the best new and recent chill hits." name="Chill Hits" />
        <Card description="Keep calm and focus with ambient and post-rock music." name="Deep Focus" />
        <Card description="The original chill instrumental beats playlist." name="Jazz Vibes" />
        <Card description="Uptempo instrumental hip hop beats." name="Focus Flow" />
        <Card description="Focus with soft study music in the background." name="Instrumental Study" />
      </div>
    </div>
    <div className={styles.category}>
      <h2>New</h2>
      <div className={styles.cards}>
        <Card description="Kick back to the best new and recent chill hits." name="Chill Hits" />
        <Card description="Keep calm and focus with ambient and post-rock music." name="Deep Focus" />
        <Card description="The original chill instrumental beats playlist." name="Jazz Vibes" />
        <Card description="Uptempo instrumental hip hop beats." name="Focus Flow" />
        <Card description="Focus with soft study music in the background." name="Instrumental Study" />
      </div>
    </div>
    <div className={styles.category}>
      <h2>New</h2>
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

export default Home;