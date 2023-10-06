import styles from './index.module.css';

import { Button } from '../Button';
import Link from 'next/link';
import { ExternalLink } from '../ExternalLink';

interface FooterProps {
  buttonTitle: string;
  paginationLink: string;
}

export function Footer({ buttonTitle, paginationLink }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.name}>Marilyn Aragón Monroy</h1>
      <div className={styles.socialMedia}>
        <ExternalLink
          link="https://www.linkedin.com/in/marilyn-aragon-monroy/"
          title="Linkedin"
        />
        <ExternalLink link="https://github.com/Marilynmonroy" title="GitHub" />
        <ExternalLink link="https://www.behance.net/Marilyn_monroy" title="Behance" />
      </div>
      <Link href={paginationLink} scroll={true}>
        <Button title={buttonTitle} href={paginationLink} />
      </Link>
    </footer>
  );
}
