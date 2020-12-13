import React, {useEffect, useState} from 'react'

export default function PutInfo(props){
  const { url } = props
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [url]);

  if (data) {
    return <span>{data.name}</span>
  } else {
    return <span>Not Found</span>
  }
}