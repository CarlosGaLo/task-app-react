import Image from 'next/image'
import styles from '@/app/page.module.css'
import React from 'react';

const Login: React.FC = () => {
    return (
        <main className={styles.center}>
          <section>
            <h1 className={styles.center}>Task App</h1>
            <Image src="/assets/images/crol.png" alt="web page logo" width={300} height={300} />
            <div className={styles.vertical}>
              <input type="text" name="email" id="email" placeholder='Jarko@correo.com' />
              <input type="password" name="password" id="password" placeholder='*******' />
              <button>Acceder</button>
            </div>
          </section>
        </main>
      )
};

export default Login;