import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'

export default function Qr() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Image
                    src="/fms-nextjs-sandbox-qr.svg"
                    alt="Vercel qr-code link"
                    className={styles.vercelLogo}
                    width={600}
                    height={1000}
                    priority
                />
            </div>
        </main>
    )
} 