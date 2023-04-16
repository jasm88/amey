import SyntaxHighlighter from 'react-syntax-highlighter';
import { BlurbBox } from '../../molecules/BlurbBox/BlurbBox'
import './FileDropPage.scss'

const introduction = "Drop box sort";

const body = 'This page shows the sort file drop zone code.' 
            + 'The drop zone is provided by react-dropzone.' 
            + 'An array is populated using the FileReader object, where the file contents is split by newlines and the values parsed to the integer type and mapped to an array.' 
            + 'The array is then counted using lodash library methods, these values are mapped to a dictionary that is sorted by keys, and then values. This is in order to keep the sort results in line with the csharp and Bash implementations.'
            + 'The top 5 results are then updated in the react state, and upon rerender as the state is no longer null, the results are rendered as an aside.'
        
const codeString = `import { useCallback,  useState } from "react";
import { useDropzone } from "react-dropzone";
import _ from "lodash";
import './SortFileDropZone.scss';

export const SortFileDropZone = () => {

  const [sortedNums, setSortedNums] = useState<number[]>();
  
  const results = sortedNums?.map((num, index) => (
    <div key={index}>
        { num === 0 ? "" : num}
    </div>
  ));

  const onDrop = useCallback((acceptedFiles: any[]) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
          reader.readAsText(file);

          reader.onload = () => {
            const fileContent = reader.result as string;
            const lines : number[] = fileContent.split("\n").map((str) => parseInt(str));
            const sorted  =  _(lines)
                                .countBy()
                                .map((value, key) => ({ key: parseInt(key), value }))
                                // To keep this inline with the other sorts, order by key prior to sorting by frequency
                                .orderBy("key", "desc")
                                .orderBy("value", "desc")
                                .map(({ key }) => key)          
                                .take(5)                 
                                .value();

            setSortedNums(sorted);
          };
          
        })
        
      }, [])

      const {
        getRootProps,
        getInputProps} = useDropzone({onDrop})   

      return (
        <div className="file-drop-zone">
          <div {...getRootProps()} className="drop-zone">
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          { sortedNums != null ? (
          <aside className="results-zone">
            <h1>Results:</h1>
            {results}
          </aside>
          ) : null }
        </div>
      )
  }`

export const FileDropPage =  () => {
    return (
    <div>
        <BlurbBox introduction={introduction} body={body} />
        <div className='FileDropPage__code'>
            <SyntaxHighlighter language="typescript">
            {codeString}
            </SyntaxHighlighter>
        </div>
    </div>
    )
}