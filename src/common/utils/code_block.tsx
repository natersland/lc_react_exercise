export abstract class CodeBlockSnippet {
  static state_update: string = `
    const [person, setPerson] = useState({ name: "", age: 8, address: "" });

    const updateData = () => {
      setPerson({ name: "Giant", age: 10, address: "Tokyo" });
    };
  `;

  static increment_decrement: string = `
    const increment = () => {
      const newCount = count.count + 1;
      const newType = newCount % 2 === 0 ? "even" : "odd";
      setCount({ type: newType, count: newCount });
    };

    const decrement = () => {
      const newCount = count.count - 1;
      const newType = newCount % 2 === 0 ? "even" : "odd";
      setCount({ type: newType, count: newCount });
    };
  `;

  static use_effect: string = `
    useEffect(() => {
      const apiUrl = \`https://jsonplaceholder.typicode.com/posts?_page=\${currentPage}&_limit=\${itemsPerPage}\`;

      axios
        .get<Post[]>(apiUrl)
        .then((response: AxiosResponse<Post[]>) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((e) => {
          console.error("Can't fetching data:", e);
          setLoading(false);
        });
    }, [currentPage]);

    const updateDataItem = (id: number, newData: Partial<Post>): void => {
      const updateUrl = \`https://jsonplaceholder.typicode.com/posts/\${id}\`;
      axios
        .put<Post>(updateUrl, newData)
        .then(() => {
          alert(\`Update successful!\`);
          setData((prevData) =>
            prevData.map((item) =>
              item.id === id ? { ...item, ...newData } : item
            )
          );
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    };
  `;
}
