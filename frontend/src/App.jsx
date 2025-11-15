import { useQuery } from "@tanstack/react-query"

export default function App() {

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const results = await fetch("https://api-service-ozat.onrender.com")
      const data = await results.json()
      return data
    }
  })

  if (isLoading){
    return (
      <div>
        <h4>chargement de la page...</h4>
      </div>
    )
  }

  if (isError){
    return (
      <div>
        <h4>une erreur est survenue</h4>
        <p> détails: {error.message} </p>
      </div>
    )
  }

  return (
    <>
      <div>
       {/* créer une page bien designer ici */}
        <h1>
          *Test Frontend React*: Bienvenu sur la page de Bob (Le Combo-Coder)
        </h1>
        <h3>{data.msg}</h3>
      </div>
    </>
  )
}
