// Helper: genera la URL de la imagen
function getImageUrl({ imageId }) {
  return `https://i.imgur.com/${imageId}s.jpg`;
}

// Componente Avatar
function Avatar({ person, size }) {
  const { name } = person;

  return (
    <div className="card text-center shadow-sm p-3">
      <img
        src={getImageUrl(person)}
        alt={name}
        className="rounded-circle mx-auto mb-2"
        width={size}
        height={size}
      />
      <h6 className="mt-2">{name}</h6>
    </div>
  );
}

// Datos de las personas
const people = [
  {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    size: 100,
  },
  {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh',
    size: 80,
  },
  {
    name: 'Lin Lanying',
    imageId: '1bX5QH6',
    size: 50,
  },
];

// Componente principal
export default function Props() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center g-4">
        {people.map((person, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <Avatar person={person} size={person.size} />
          </div>
        ))}
      </div>
    </div>
  );
}
