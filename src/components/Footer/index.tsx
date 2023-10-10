import styles from "./index.module.css";

import { Button } from "../Button";
import Link from "next/link";
import { ExternalLink } from "../ExternalLink";
import { ReactNode } from "react";

interface FooterProps {
  buttonTitle: string;
  paginationLink: string;
  icon: ReactNode;
}

export function Footer({ buttonTitle, paginationLink, icon }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <h1 className={styles.name}>Marilyn Aragón Monroy</h1>
      <div className={styles.socialMedia}>
        <ExternalLink
          link="https://www.linkedin.com/in/marilyn-aragon-monroy/"
          title="Linkedin"
        />
        <ExternalLink link="https://github.com/Marilynmonroy" title="GitHub" />
        <ExternalLink
          link="https://www.behance.net/Marilyn_monroy"
          title="Behance"
        />
      </div>
      <Link className={styles.buttonFooter} href={paginationLink}>
        <Button title={buttonTitle} icon={icon} onClick={scrollToTop} />
      </Link>
    </footer>
  );
}
