import { BlurbBox } from '../../molecules/BlurbBox/BlurbBox'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import './CSharpPage.scss'

const introduction = "C Sharp Sort";

const body = `This page demonstrates the c sharp sort.
              Running as top level statements in a single file, this project can be found in the solution.
              The program accepts one argument, which is the filename. The contents is read by line into an array.
              An expression tree is generated with linq extension methods against the array, and the expression tree is evaluated by the foreach loop`

const codeString = `
if (args.Count() < 1 ||string.Equals(args[0], "?", StringComparison.InvariantCultureIgnoreCase) || string.Equals(args[0],"h",StringComparison.InvariantCultureIgnoreCase))
{
    Console.WriteLine("Top5 will return the top 5 occurences of an element in a given file as delimited by a newline. This application is intended for use with numeric values but will not provide validation of the same. ");
    Console.WriteLine();
    Console.WriteLine("Please provide the file path.");
    Console.WriteLine();
    
    Environment.Exit(0);
}

var file = args[0].ToString();

var contents = File.ReadAllLines(file);

var counts = contents
    .OrderByDescending(x => x)
    .GroupBy(x => x)
    .Select(g => new { g.Key, Count = g.Count() })
    .OrderByDescending(x => x.Count)
    .Take(5);

foreach (var count in counts)
{
    Console.WriteLine(count.Key);
}

Environment.Exit(0);
`;


export const CSharpPage =  () => {
    return (
    <div>
        <BlurbBox introduction={introduction} body={body} />
        <div className='CSharpPage__code'>
            <SyntaxHighlighter language="csharp">
            {codeString}
            </SyntaxHighlighter>
        </div>
    </div>
    )
}