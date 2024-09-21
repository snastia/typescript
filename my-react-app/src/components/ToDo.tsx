import { FC } from "react"
import { IToDo } from "../App"

interface IPropsToDo{
    item: IToDo,
    removeToDo: (id: number) => void,
}

export const ToDo: FC<IPropsToDo> = ({item, removeToDo}) => {

    const handleRemove = () => {
        removeToDo(item.id)
    }

    return(
        <li>
            <p>{item.text}</p>
            <button type="button" onClick={handleRemove}>delete</button>
        </li>
    )
}