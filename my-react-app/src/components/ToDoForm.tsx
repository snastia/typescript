import { FormEvent, useState } from "react"

export const ToDoForm = ({addToDo}: {addToDo: (text: string) => void}) => {

    const [text, setText] = useState<string>('')

    const handleAddToDo = (e: FormEvent) => {
        e.preventDefault()
        addToDo(text)

        setText('') // очищення форми
    }

    return(
        <form onSubmit={handleAddToDo}>
           <input type="text" placeholder="text" 
           value={text} onChange={(e) => {setText(e.target.value)}}/>
           <button type="submit">create</button>
        </form>
    )
}