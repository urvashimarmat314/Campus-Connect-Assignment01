/* eslint-disable react/prop-types */

const ViewThoughts = ({ thoughts, goHome,editThought, deleteThought }) => {
  return (
    <div className="view-thoughts">
      <h2>All Thoughts</h2>
      {thoughts.length === 0 ? (
        <p>No thoughts yet!</p>
      ) : (
        <ul>
          {thoughts.map((thought, index) => (
            <li key={index}>
              <p>{thought}</p>
              <button onClick={() => editThought(index)}>Edit</button>
              <button onClick={() => deleteThought(index)}>Delete</button>
              <button onClick={goHome}>Go Back To Home</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewThoughts;
