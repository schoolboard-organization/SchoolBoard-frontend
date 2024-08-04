import { useState, useCallback, useRef, useEffect } from "react";

/*
 * Custom hook which allows for managing HTTP requests with loading and error states,
 * as well as request cancellation if a page is changes during a request
 */
export const useHttpClient = () => {
  /*
   * states for loading and error status
   */
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  /*
   * reference to store active HTTP requests
   */
  const activeHttpRequest = useRef([]);

  /*
   * core logic for http requests
   * parameters are: url, method, body, headers
   */
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);

      // create abort controller to keep track of all http requests
      const httpAbortController = new AbortController();
      activeHttpRequest.current.push(httpAbortController);

      try {
        // fetch using passes in parameters
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortController.signal,
        });

        let responseData;
        try {
          responseData = await response.json(); // turn response into JSON /////////////////////////////////////
        } catch (err) {
          console.log(err);
        }

        // delete most recently completed http response
        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        // error if response is present but not what we want, triggers catch block
        if (!response.ok) {
          console.log("RESPONSE IS NOT OK");
          throw new Error(responseData.message);
        }

        setIsLoading(false); // set loading state to false since all action have been done
        return responseData; // return what the fetch gave us
      } catch (err) {
        setError(err.message);
        console.log("Error Message: " + err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  /*
   * function to set error state to null
   */
  const clearError = () => {
    setError(null);
  };

  /*
   * abort all http requests appropriately
   */
  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortControl) => abortControl.abort());
    };
  }, []);
  return { isLoading, error, sendRequest, clearError };
};
