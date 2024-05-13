import { ReactNode } from 'react';
import styles from './_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };

export default function layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

//localhost:3000일때 children에는 (beforelogin) page.tsx, modal->@modal/default.tsx

//localhost:3000/i/flow/login일때는 children에 i/flow/login/page.tsx, modal->@modal/i/flow/page.tsx
