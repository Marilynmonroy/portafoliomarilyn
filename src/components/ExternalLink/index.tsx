/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";

interface ExternalLinkProps {
  link: string;
  title: string;
}
export function ExternalLink(props: ExternalLinkProps) {
  return (
      <a className={styles.externalLink} href={props.link} target="_blank">
        {props.title}
      </a>
  );
}

