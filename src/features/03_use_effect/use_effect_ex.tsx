import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Button } from "@/components/ui/button";
import { CodeBlockSnippet } from "@/common/utils/code_block";
import CardLayout from "@/common/components/card_layout";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UseEffectEx = () => {
  const itemsPerPage = 10;

  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`;

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
    const updateUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios
      .put<Post>(updateUrl, newData)
      .then(() => {
        alert(`Update successful!`);
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

  const totalPages = data.length;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <CardLayout
      children={
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <ul className="flex flex-col items-start">
                {data.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-row justify-between items-center w-full border-b-2 border-secondary py-2 px-4 w"
                  >
                    {item.id}. {item.title}{" "}
                    <Button
                      onClick={() =>
                        updateDataItem(item.id, { title: "New Title" })
                      }
                    >
                      Update
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4">
                <Button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  variant="link"
                  className="underline"
                >
                  Previous
                </Button>
                <p>
                  Page {currentPage} of {totalPages}
                </p>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  variant="link"
                  className="underline"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      }
      header_text="Sample Axios Request in React with TypeScript"
      code_snippet={CodeBlockSnippet.use_effect}
      source_code_url="https://github.com/natersland/lc_react_exercise/blob/main/src/features/03_use_effect/use_effect_ex.tsx"
    ></CardLayout>
  );
};

export default UseEffectEx;
