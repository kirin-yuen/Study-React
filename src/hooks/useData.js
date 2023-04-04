import axios from "axios";
import { useEffect, useState } from "react";

const defaultResult = {
  data: null,
  isLoading: false,
  error: false,
};

export default function useData(url) {
  const [result, setResult] = useState(defaultResult);

  const getResultAsync = async (url) => {
    setResult({ data: null, isLoading: true, error: false });
    try {
      const { data } = await axios.get(url);

      setResult({ data, isLoading: false, error: false });
    } catch (e) {
      console.debug(e);
      setResult({ data: null, isLoading: false, error: e.message });
    }
  };

  const getResultPromise = (url) => {
    setResult({ data: null, isLoading: true, error: false });

    return axios
      .get(url)
      .then(({ data }) => {
        setResult({ data, isLoading: false, error: false });
      })
      .catch((e) => {
        console.debug(e);
        setResult({ data: null, isLoading: false, error: e.message });
      });
  };

  useEffect(() => {
    if (url) {
      // 1. async/await 方法：useEffect 里面使用 async/await 要另外自执行
      // (async () => {
      //   await getResultAsync(url);
      // })();

      // 2. promise
      getResultPromise(url);
    } else {
      setResult(defaultResult);
    }
  }, [url]);

  return result;
}
