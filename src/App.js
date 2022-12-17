import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(todo);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Contact No.</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((list, ind) => (
            <tr key={ind}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
              <td>{list.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
