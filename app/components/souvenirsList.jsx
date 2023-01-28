import Souvenir from "./souvenir"

export default function SouvenirsList({souvenirs}) {
  return (
    <>
    <h2 className="heading">Souvenirs</h2>

    {souvenirs?.length && (
        <div className="souvenirs-grid">
            {souvenirs.map(souvenir => (
                <Souvenir 
                key={souvenir.id}
                souvenir={souvenir.attributes}
                />
            ))}
        </div>
    )}
    </>
  )
}
