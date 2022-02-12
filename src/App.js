import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([{ weight: 175, date: '11-23-2021' }])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return(
              <tr>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
