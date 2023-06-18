import {
    usePartition
} from "@webx-ui/toolkit"

import { 
    Partition
} from "./partition"

export default function useEditorAPI () {
    usePartition(
        "editor", 
        new Partition()
    )
    
}