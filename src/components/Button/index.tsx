import styles from "./index.module.css";

interface ButtonProps {
  title: string;
  href: string; 
}

export function Button(props: ButtonProps) {
  return (
    <a className={styles.button} href={props.href} target="_blank" >
    {props.title}
    </a>
  );
}
