import useNotesAPI from "./notes"
import useEditorAPI from "./editor"
import usePagesAPI from "./pages"

export default function useToolkitPartitions () {
    /*
    const toolkit = useToolkit()
    console.log(toolkit.notes) // -> undefined
    console.log(toolkit.editor) // -> undefined
    console.log(toolkit.pages) // -> undefined
    */
    
    useNotesAPI()
    useEditorAPI()
    usePagesAPI()

    /* 
    console.log(toolkit.notes) // -> объект
    console.log(toolkit.editor) // -> объект
    console.log(toolkit.pages) // -> объект
    */
}