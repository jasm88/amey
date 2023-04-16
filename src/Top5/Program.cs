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

var counts = contents.OrderByDescending(x => x)
    .GroupBy(x => int.Parse(x))
    .Select(g => new { g.Key, Count = g.Count() })
    .OrderByDescending(x => x.Count)
    .Take(5);

foreach (var count in counts)
{
    Console.WriteLine(count.Key);
}

Environment.Exit(0);