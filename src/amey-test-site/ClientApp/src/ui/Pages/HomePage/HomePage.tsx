import { BlurbBox } from '../../molecules/BlurbBox/BlurbBox'
import { SortFileDropZone } from '../../organisms/SortFileDropZone/SortFileDropZone'

import './HomePage.scss'

const introduction = "Amey Test Site";

const body = `This page demonstrates the sort file drop zone.
    In order to sort a file, drag it into the blue shaded box, or click it to select the file. The results will render below in a responsive manner.
    For detail on how this was implemented, along with solutions to the other problems, see the navigation in the header.`
        


export const HomePage =  () => {
    return (
    <div>
        <BlurbBox introduction={introduction} body={body} />
        <SortFileDropZone />
    </div>
    )
}