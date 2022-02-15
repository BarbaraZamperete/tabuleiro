
import styles from '../styles/Tabuleiro.module.css'
export default function Square(props) {

    return(
        <div className={styles.quadrado} style={{backgroundColor: props.tipo == "branco" ? "white" : "black"}}>
        </div>
    )
}