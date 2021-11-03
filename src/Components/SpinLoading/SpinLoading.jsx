import React from 'react'
import { ImSpinner3 } from 'react-icons/im';
import styles from '../SpinLoading/SpinLoading.module.css'



const SpinLoading = () => {
    return (
        <div>
            <div className={styles.spinner} ><ImSpinner3 className={styles.spinning} size={60}/></div>
        </div>
    )
}

export default SpinLoading
