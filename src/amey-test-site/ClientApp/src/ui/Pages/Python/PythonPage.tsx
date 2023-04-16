import SyntaxHighlighter from 'react-syntax-highlighter';
import { BlurbBox } from '../../molecules/BlurbBox/BlurbBox'
import './PythonPage.scss'

const introduction = "Python batching";

const body = `This page demonstrates python batching.
    The code defines a niave generator function that returns a forward only iterator that yields in batches`

const codeString = `def batched(records, size=1000):
batch = []
for index, record in enumerate(records):
    batch.append(record)
    if (index + 1) % size == 0:
        yield (range(index - size + 1, index + 1), batch)
        batch = []
if batch:
    yield (range(index - len(batch) + 1, index + 1), batch)`

const providerBlurb = `The records could be provided by an ODBC SQL provider cursor as demonstrated below in the following code snippet`

const providerString = `import pyodbc

def batched_query(cursor, query, batch_size):
    offset = 0
    while True:
        cursor.execute(f"{query} OFFSET {offset} ROWS FETCH NEXT {batch_size} ROWS ONLY")

        results = cursor.fetchall()
        if not results:
            # no more results, exit the loop
            break

        yield results

        offset += batch_size

conn = pyodbc.connect(
    'DRIVER={ODBC Driver 17 for SQL Server};SERVER=myserver;DATABASE=mydb;UID=myusername;PWD=mypassword')

cursor = conn.cursor()

query = "SELECT * FROM mytable"
batch_size = 1000
for batch in batched_query(cursor, query, batch_size):
    process(batch)

cursor.close()
conn.close()`

export const PythonPage =  () => {
    return (
    <div>
        <BlurbBox introduction={introduction} body={body} />
        <div className='PythonPage__code'>
            <SyntaxHighlighter language="python">
            {codeString}
            </SyntaxHighlighter>
        </div>
        <BlurbBox body={providerBlurb} />
        <div className='PythonPage__code'>
            <SyntaxHighlighter language="python">
            {providerString}
            </SyntaxHighlighter>
        </div>
    </div>
    )
}