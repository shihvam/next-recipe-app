import Link from "next/link";


export default async function Home() {
  
  return (  
  <div className="herosection " >
      <div className="grid1" >
        <h1>Welcome to the recipe app </h1>
        <p> Explore list of recipes across the world and cultures that bring them.  </p>
         <Link className="button" href={'/recipe-list'} > Explore Recipes </Link> 

      </div>


    </div>

  );
}
