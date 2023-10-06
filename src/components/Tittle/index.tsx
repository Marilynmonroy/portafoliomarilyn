import styles from "./index.module.css";

interface tittleProps {
  tittle: string;
}
export function Tittle(props: tittleProps) {
    return (
        <div className={styles.tittle}>
            <span>{props.tittle}</span>
        </div>
    )
}