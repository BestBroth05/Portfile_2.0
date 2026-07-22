/* eslint-disable react/prop-types */
export function ItemsCategorias({ item }) {
  return (
    <div className="category__card">
      <h3 className="category__title">{item.title}</h3>
      <div>
        {item.skills.map((skill) => (
          <div className="category__description" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
