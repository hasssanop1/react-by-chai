import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );

                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyInfo();
    }, [currency]); 
    // the currency above  in  line handles with the dropdown when user changes currency from usd to pkr

    useEffect(() => {
        console.log(data);
    }, [data]);

    return data;
}

export default useCurrencyInfo;