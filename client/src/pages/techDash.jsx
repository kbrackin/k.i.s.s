import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint
    axios
      .get("/api/issue/users/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* <ul>
        {data.map((item) => (
          <li key={item._id}>Name: {item.email}</li>  
          {data.issue.map(())
          
          }
          export default function Recipes() {
            return (
                <div>
                    {recipes.map((recipe) => {
                        return <div key={recipe.id}>
                            <h1>{recipe.title}</h1>
                            <img src={recipe.image} alt="recipe image" />
                            {recipe.dishTypes.map((type, index) => {
                                return <span key={index}>{type}</span>
                            })}
                        </div>
                    })}
                </div>
            )
        }

        ))}
      </ul> */}
    </div>
  );
};

export default ApiData;
