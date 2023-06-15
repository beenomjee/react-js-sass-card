import React from 'react'
import styles from './Home.module.scss';
import { FaRegUser } from 'react-icons/fa'
import { TbArrowsTransferDown } from 'react-icons/tb'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <span>Current Balance</span>
                            <span>NGN5,750,20</span>
                        </div>
                        <div className={styles.right}>
                            <img src="/logo.png" alt="MASTERCARD" />
                            <span>matercard</span>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <span className={styles.left}>5282 **** **** 1289</span>
                        <span className={styles.right}>09/25</span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <div className={styles.info}>
                            <span><FaRegUser /></span>
                            <span>Andy Johnson</span>
                        </div>
                        <div className={styles.info}>
                            <span><TbArrowsTransferDown /></span>
                            <span>56 transactions(NGN500,000)</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button>BLOCK</button>
                        <span />
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home