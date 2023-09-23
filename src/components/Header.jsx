import { useEffect, useRef, useState } from "react";
import { usePhoto } from "../context/PhotoProvider";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
function Header() {
  const { setQuery } = usePhoto();
  const inputRef = useRef();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    setQuery(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <h1 style={styles.h1}>SnapShot</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="Search..."
          onChange={(e) => setName(e.target.value)}
        />

        {name && (
          <button style={{ padding: "5px" }}>
            <SearchIcon />
          </button>
        )}
      </form>
      <div className={styles.link}>
        <Link onClick={() => setQuery("mountain")}>Mountain</Link>
        <Link onClick={() => setQuery("Birds")}>Birds</Link>
        <Link onClick={() => setQuery("food")}>Food</Link>
        <Link onClick={() => setQuery("vacation")}>Vacation</Link>
      </div>
    </div>
  );
}

export default Header;
