export abstract class CodeBlockSnippet {
  static state_update: string = `
      const [person,setPerson] = useState({ name: "", age: 8, address: "" });

      const updateData = () => {
        setPerson({ name: "Giant", age: 10, address: "Tokyo" });
      };
  `;
  static increment_decrement: string = `const increment = () => {
    const newCount = count.count + 1;
    const newType = newCount % 2 === 0 ? "even" : "odd";
    setCount({ type: newType, count: newCount });
  };

  const decrement = () => {
    const newCount = count.count - 1;
    const newType = newCount % 2 === 0 ? "even" : "odd";
    setCount({ type: newType, count: newCount });
  };`;
  static use_effect: string = 'console.log("Hello, world!");';
}
