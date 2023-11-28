import styles from "@/pages/Search/Search.module.scss"
import Category from "@/ui/Category/Category";

const Search = () => {
  return <div className={styles.search}>
    <h2>Browse all</h2>
    <div className={styles.categorys}>
      <Category background="#27856A" image="/category/podcasts.png" title="Podcasts" />
      <Category background="#283EA3" image="/category/audiobooks.png" title="Audiobooks" />
      <Category background="#1E3264" image="/category/foryou.png" title="Made for you" />
      <Category background="#9CF0E1" image="/category/country.png" title="Country" />
      <Category background="#F037A5" image="/category/pop.png" title="Pop" />
      <Category background="#27856A" image="/category/podcasts.png" title="Podcasts" />
      <Category background="#283EA3" image="/category/audiobooks.png" title="Audiobooks" />
      <Category background="#1E3264" image="/category/foryou.png" title="Made for you" />
      <Category background="#9CF0E1" image="/category/country.png" title="Country" />
      <Category background="#F037A5" image="/category/pop.png" title="Pop" />
      <Category background="#27856A" image="/category/podcasts.png" title="Podcasts" />
      <Category background="#283EA3" image="/category/audiobooks.png" title="Audiobooks" />
      <Category background="#1E3264" image="/category/foryou.png" title="Made for you" />
      <Category background="#9CF0E1" image="/category/country.png" title="Country" />
      <Category background="#F037A5" image="/category/pop.png" title="Pop" />
    </div>
  </div>
}

export default Search;