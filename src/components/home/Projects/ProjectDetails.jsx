function ProjectDetails({ details }) {
  const renderList = (items, isTechStack = false) => (
    <ul className="text-gray-300 list-disc ml-3">
      {items.map((item, index) => (
        <li key={index}>
          {isTechStack && item.includes(":") ? (
            <>
              <strong>{item.split(":")[0]}:</strong>
              {item.split(":")[1]}
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h5 className="font-semibold">Overview:</h5>
      <p className="text-gray-300">{details.overview}</p>
      <br />

      <h5 className="font-semibold">Scope & Objectives:</h5>
      <p className="text-gray-300">{details.scope}</p>
      <br />

      <h5 className="font-semibold">Tech Stack:</h5>
      {renderList(details.techStack, true)}
      <br />

      <h5 className="font-semibold">Key Features:</h5>
      {renderList(details.features)}
      <br />

      <h5 className="font-semibold">Future Enhancements:</h5>
      {renderList(details.futureEnhancements)}
    </div>
  );
}

export default ProjectDetails;
