import Form from "../src/components/form";

function HomePage() {
  const name = "Pedro";
  return (

    <div><h1>Bem vindo, {name}</h1>
    <Form />
    </div>
  );
}

export default HomePage