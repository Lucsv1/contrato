import { ButtonCard } from "./index"
export const Botao = (props) =>{

    return(
        <ButtonCard onClick={props.onClick} type={props.type}>{props.text}</ButtonCard>
    )
}