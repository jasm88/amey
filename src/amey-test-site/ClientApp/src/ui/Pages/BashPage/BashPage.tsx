import { BlurbBox } from '../../molecules/BlurbBox/BlurbBox'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import './BashPage.scss'

const introduction = "Bash shell Sort";

const body = `This page demonstrates the bash shell sort.
The bash command pipes each commands output to the next command with the pipe operator ("|"). 
cat reads files sequentially and writes it to the standard output, which is the sort command (the sort command is neccesary as the uniq command operates against repeating lines only and would otherwise be prone to count incorrectly). The sorted output is then reduced and counted by the uniq command, this is then again sorted with the -rn parameters, these do a reverse numeric sort - essentially a descending sort. The head command retrieves the first 5 records output, and then these results are piped to a while loop, which displays the line value (which is the original value, not the count)
`


const codeString = `cat file.txt | sort | uniq -c | sort -rn | head -n 5 | while read count line; do echo $line; done`;


export const BashPage =  () => {
    return (
    <div>
        <BlurbBox introduction={introduction} body={body} />
        <div className='BashPage__code'>
            <SyntaxHighlighter language="bash">
            {codeString}
            </SyntaxHighlighter>
        </div>
    </div>
    )
}