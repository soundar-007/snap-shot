import styles from "./Photos.module.css";
import { usePhoto } from "../context/PhotoProvider";
import Spinner from "./Spinner";
function Photos() {
  const { query, loading, images } = usePhoto();
  const Query = query.split("").slice(1).join("");
  const firstLetter = query.slice(0, 1).toUpperCase();
  const name = firstLetter + Query;
  return (
    <div className={styles.spinners}>
      {!loading && (
        <h2 style={{ textAlign: "center", margin: "25px" }}>
          {name.trim()} Images
        </h2>
      )}
      {!loading && (
        <ul className={styles.ul}>
          {images.map((image) => (
            <li key={image.id}>
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                alt={image.title}
              />
            </li>
          ))}
        </ul>
      )}

      {loading && (
        <div className={styles.spin}>
          {" "}
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Photos;
