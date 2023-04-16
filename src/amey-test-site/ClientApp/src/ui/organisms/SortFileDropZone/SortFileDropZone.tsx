import { useCallback,  useState } from "react";
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
  }