import React, { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age >= 18);
  }, [list]);

  return (
    <>
      <h1>Filtered List</h1>
      <hr />
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name} (Age: {item.age})
          </li>
        ))}
      </ul>
    </>
  );
}

export default FilteredList;