import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/Abc.module.css'

const Abc = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className="data">
                        <input type="text" className={styles.input} placeholder="Add a task here ..." />
                        <button type="button" className={styles.inB}>+</button><br/><br/>
                        <div className={styles.f1}>
                            <p className={styles.para}>Learn CSS</p> <div className="a"><button className={styles.btn1}><FontAwesomeIcon icon={faCheck} color="blueviolet" /></button> <button className={styles.btn2}><FontAwesomeIcon icon={faXmark} color="blueviolet" /></button>
                            </div>
                        </div><br/>
                        <div className={styles.f1}>
                            <p className={styles.para}>Learn TS / JS</p> <div className="a"><button className={styles.btn1}><FontAwesomeIcon icon={faCheck} color="blueviolet" /></button> <button className={styles.btn2}><FontAwesomeIcon icon={faXmark} color="blueviolet" /></button>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.f1}>
                            <p className={styles.para1}>Learn Html</p> <div className="a"><button className={styles.btn3}><FontAwesomeIcon icon={faCheck} color="blueviolet" /></button>
                            </div>
                        </div>
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    )
}
export default Abc