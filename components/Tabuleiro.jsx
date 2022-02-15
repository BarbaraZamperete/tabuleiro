import Square from "./Square"
import styles from '../styles/Tabuleiro.module.css'
export default function Tabuleiro(props) {
    function colunas(primeiro, segundo) {
        const coluna = []
        for(var i = 0; i< 8; i++){
            if(i%2==0){
                coluna.push(<Square tipo={primeiro}></Square>)
            }else{
                coluna.push(<Square tipo={segundo}></Square>)
            }
            
        }
        return coluna
    }

    function board(){
        const boardColunas = []
        for(var i = 0; i< 8; i++){
            if(i%2==0){
                boardColunas.push(<div>{colunas("branco", "preto")}</div>)
            }else{
                boardColunas.push(<div>{colunas("preto", "branco")}</div>)
            }
            
        }
        return boardColunas
    }
    return(
        <div className={styles.tabuleiro}>
            {board()}
        </div>
    )
}